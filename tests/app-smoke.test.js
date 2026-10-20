const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const project = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(project, 'index.html'), 'utf8');
const app = fs.readFileSync(path.join(project, 'app.js'), 'utf8');

function parseAttrs(raw) {
  const attrs = {};
  for (const match of raw.matchAll(/([\w-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g)) {
    attrs[match[1]] = match[2] ?? match[3] ?? match[4] ?? '';
  }
  return attrs;
}
function selectorMatches(el, selector) {
  const attr = selector.match(/^\[([\w-]+)\]$/);
  if (attr) return Object.prototype.hasOwnProperty.call(el.attrs, attr[1]);
  if (selector.startsWith('.')) return el.classList.contains(selector.slice(1));
  return el.tagName === selector.toLowerCase();
}
function createHarness() {
  const elements = [];
  const byId = new Map();
  const storage = {};
  class Element {
    constructor(tagName = 'div', attrs = {}, parent = null) {
      this.tagName = tagName.toLowerCase(); this.attrs = attrs; this.parent = parent;
      this.children = []; this.listeners = {}; this.dataset = {};
      for (const [key, value] of Object.entries(attrs)) {
        if (key.startsWith('data-')) this.dataset[key.slice(5).replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = value;
      }
      this._text = ''; this._html = ''; this.style = {}; this.disabled = false; this.value = attrs.value || '';
      this.classList = {
        contains: name => (this.attrs.class || '').split(/\s+/).includes(name),
        add: name => { const s = new Set((this.attrs.class || '').split(/\s+/).filter(Boolean)); s.add(name); this.attrs.class = [...s].join(' '); },
        remove: name => { this.attrs.class = (this.attrs.class || '').split(/\s+/).filter(x => x && x !== name).join(' '); },
        toggle: (name, force) => { const has = this.classList.contains(name); const next = force === undefined ? !has : !!force; if (next) this.classList.add(name); else this.classList.remove(name); return next; }
      };
      elements.push(this); if (attrs.id) byId.set(attrs.id, this);
    }
    addEventListener(type, fn) { (this.listeners[type] ||= []).push(fn); }
    click() { if (this.disabled) return; for (const fn of (this.listeners.click || [])) fn(); if (typeof this.onclick === 'function') this.onclick(); }
    set innerHTML(value) {
      this._html = String(value); this.children = [];
      for (const match of this._html.matchAll(/<([a-zA-Z][\w-]*)\b([^>]*)>/g)) {
        const child = new Element(match[1], parseAttrs(match[2]), this); this.children.push(child);
      }
    }
    get innerHTML() { return this._html; }
    set textContent(value) { this._text = String(value); }
    get textContent() { return this._text; }
    querySelectorAll(selector) { return this.children.filter(el => selectorMatches(el, selector)); }
    insertAdjacentHTML(_position, value) { this._html += value; }
  }
  const document = {
    body: new Element('body'),
    getElementById(id) { if (!byId.has(id)) return new Element('div', {id}); return byId.get(id); },
    querySelectorAll(selector) { return elements.filter(el => !el.parent || el.parent.children.includes(el)).filter(el => selectorMatches(el, selector)); }
  };
  for (const match of html.matchAll(/<([a-zA-Z][\w-]*)\b([^>]*)>/g)) new Element(match[1], parseAttrs(match[2]));
  document.getElementById('exam-count').value = '10';
  document.getElementById('exam-time').value = '0';
  document.getElementById('practice-topic').value = 'all';
  document.getElementById('practice-order').value = 'mixed';
  document.getElementById('plan-hours').value = '1';
  document.getElementById('plan-days').value = '5';
  const context = {
    document, window: {scrollTo() {}}, localStorage: {getItem: key => storage[key] ?? null, setItem: (key, value) => { storage[key] = value; }},
    console, Date, Math, JSON, Number, Object, Array, String, Set, Map,
    setTimeout: () => 1, setInterval: () => 1, clearInterval() {}, confirm: () => true
  };
  vm.runInNewContext(app, context, {filename: 'app.js'});
  return {document, storage, context};
}

test('application smoke test: exam scoring, practice history, flashcard queue and planner', () => {
  const {document, storage} = createHarness();
  const storeKey = 'cloudready_az900_v1';

  document.getElementById('start-exam').click();
  assert.equal(document.getElementById('exam-workspace').classList.contains('hidden'), false);
  const answerButtons = document.querySelectorAll('[data-answer]');
  assert.equal(answerButtons.length, 4);
  answerButtons[0].click();
  document.getElementById('submit-exam').click();
  let saved = JSON.parse(storage[storeKey]);
  assert.equal(saved.sessions.length, 1);
  assert.equal(saved.sessions[0].total, 10);
  assert.equal(saved.sessions[0].answered, 1);
  assert.equal(saved.sessions[0].unanswered, 9);
  assert.equal(saved.attempts.length, 1, 'unanswered exam items must not be recorded as attempted answers');
  assert.match(document.getElementById('exam-results').innerHTML, /UNANSWERED/);

  document.getElementById('back-to-setup').click();
  document.getElementById('start-practice').click();
  const practiceAnswers = document.querySelectorAll('[data-panswer]');
  assert.ok(practiceAnswers.length >= 1);
  practiceAnswers[0].click();
  saved = JSON.parse(storage[storeKey]);
  assert.equal(saved.attempts.length, 2);
  assert.equal(saved.attempts[1].mode, 'Topic practice');

  document.getElementById('flash-again').click();
  saved = JSON.parse(storage[storeKey]);
  assert.equal(saved.flashReview.length, 1);
  document.getElementById('flash-review-queue').click();
  document.getElementById('flashcard').click();
  document.getElementById('flash-know').click();
  saved = JSON.parse(storage[storeKey]);
  assert.equal(saved.flashReview.length, 0);
  assert.equal(saved.flashKnown.length, 1);

  const target = new Date(); target.setDate(target.getDate() + 2);
  document.getElementById('plan-date').value = `${target.getFullYear()}-${String(target.getMonth()+1).padStart(2,'0')}-${String(target.getDate()).padStart(2,'0')}`;
  document.getElementById('generate-plan').click();
  assert.match(document.getElementById('plan-output').innerHTML, /PERSONAL STUDY PLAN/);
  assert.match(document.getElementById('plan-output').innerHTML, /SESSION 01/);
});
