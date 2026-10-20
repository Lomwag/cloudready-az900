const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync(require('node:path').join(__dirname, '..', 'app.js'), 'utf8');
const questions = source.match(/const QUESTIONS = \[[\s\S]*?\n\];/);
const flashcards = source.match(/const FLASHCARDS=\[[\s\S]*?\n\];/);
const topics = source.match(/const TOPICS=\[[\s\S]*?\];/);
const validation = source.match(/function validateQuestionBank\([^\n]+\}/);
const grading = source.match(/function gradeAnswers\([^\n]+\}/);
const shuffle = source.match(/function shuffle\([^\n]+\}/);
const selection = source.match(/function selectExamQuestions\([^\n]+\}/);
assert.ok(questions && flashcards && topics && validation && grading && shuffle && selection, 'Expected app data and scoring helpers to exist');
const sandbox = {};
vm.runInNewContext(`${topics[0]}\n${questions[0]}\n${flashcards[0]}\n${validation[0]}\n${grading[0]}\n${shuffle[0]}\n${selection[0]}\nglobalThis.data={QUESTIONS,FLASHCARDS,TOPICS,validateQuestionBank,gradeAnswers,selectExamQuestions};`, sandbox);
const { QUESTIONS, FLASHCARDS, TOPICS, validateQuestionBank, gradeAnswers, selectExamQuestions } = sandbox.data;

test('question bank has unique IDs, supported topics, four options and valid explanations', () => {
  assert.equal(validateQuestionBank(QUESTIONS), true);
  assert.equal(QUESTIONS.length, 102, "The question bank should contain 102 questions");
  assert.ok(new Set(QUESTIONS.map(q => q.id)).size === QUESTIONS.length);
  assert.ok(TOPICS.every(topic => QUESTIONS.filter(q => q.topic === topic).length === 34))
  assert.equal([...new Set(QUESTIONS.map(q => q.topic))].sort().join('|'), [...TOPICS].sort().join('|'));
});

test('flashcard bank is non-empty and each card has front, hint, back and topic', () => {
  assert.ok(FLASHCARDS.length >= 12);
  for (const card of FLASHCARDS) {
    assert.ok(card.front && card.hint && card.back && TOPICS.includes(card.topic));
  }
});

test('grading counts only submitted answers as answered, but unanswered items lower exam score', () => {
  const qs = [{id:'q1',answer:0},{id:'q2',answer:1},{id:'q3',answer:2},{id:'q4',answer:3}];
  const result = gradeAnswers(qs, {q1:0,q2:0,q3:2});
  assert.equal(result.correct, 2);
  assert.equal(result.answered, 3);
  assert.equal(result.unanswered, 1);
  assert.equal(result.total, 4);
  assert.equal(result.score, 50);
  assert.equal(result.accuracy, 67);
});

test('grading does not treat a selected wrong answer as unanswered', () => {
  const result = gradeAnswers([{id:'q1',answer:1}], {q1:0});
  assert.equal(result.answered, 1);
  assert.equal(result.correct, 0);
  assert.equal(result.unanswered, 0);
  assert.equal(result.score, 0);
  assert.equal(result.accuracy, 0);
});


test('short and standard exam sessions sample all three topics evenly', () => {
  const noShuffle = items => items.slice();
  for (const size of [10, 15]) {
    const selected = selectExamQuestions(size, QUESTIONS, noShuffle);
    assert.equal(selected.length, size);
    const counts = TOPICS.map(topic => selected.filter(q => q.topic === topic).length);
    assert.ok(counts.every(n => n > 0));
    assert.ok(Math.max(...counts) - Math.min(...counts) <= 1);
  }
});

test('all-questions exam mode includes the complete question bank exactly once', () => {
  const selected = selectExamQuestions('all', QUESTIONS, items => items.slice());
  assert.equal(selected.length, QUESTIONS.length);
  assert.equal(new Set(selected.map(q => q.id)).size, QUESTIONS.length);
});
