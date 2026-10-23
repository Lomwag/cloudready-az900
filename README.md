# CloudReady — Smart AZ-900 Quiz Builder

**Primary hackathon problem: Practice & Assessment — Smart Quiz Builder.**

CloudReady helps AZ-900 learners practise with original questions, receive a reliable score, and understand their mistakes through clear explanations. The product is intentionally focused on one learner journey: **build a quiz → answer questions → review feedback → identify topics to practise next**.

## Core experience

- Create a short, standard, or full-bank quiz.
- Choose a timed or untimed attempt.
- Navigate questions, change answers, and flag items for review.
- Submit once and receive a score, correct/incorrect/unanswered counts, and question-by-question explanations.
- Practise a selected AZ-900 skill area with immediate feedback.
- Review topic-level accuracy and recent quiz attempts to decide what to practise next.
- Save progress locally in the browser; no account or backend is required.

Flashcards and the study planner are not presented as separate product problems in the submission interface. The results view exists only to support the quiz builder's assessment-and-feedback loop.

## Run locally

1. Download or clone the repository.
2. Open `index.html` in a modern browser. No build step is required.
3. For a local development server, run `python -m http.server 8000` in this folder and visit `http://localhost:8000`.

## AZ-900 content alignment

The topic structure follows the public Microsoft Learn AZ-900 study guide, which lists three skill groups:

- Describe cloud concepts (25–30%)
- Describe Azure architecture and services (35–40%)
- Describe Azure management and governance (30–35%)

Official source: https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900

The current curated bank contains 30 original educational practice questions, evenly split across the three skill groups. It is a starter learning set, not a complete representation of every exam objective. Questions are not copied from real exam items, are not an official exam bank, and do not claim to predict exam performance. Verify concepts against current Microsoft Learn documentation as Azure services and exam objectives change.

## Scoring rules

- **Quiz score:** correct answers divided by all questions in the quiz, rounded to a whole percent. An unanswered question counts as incorrect for the quiz score.
- **Practice accuracy:** correct answers divided by questions actually answered. Unanswered quiz items are not recorded as attempted answers, so they do not artificially lower topic learning accuracy.
- A completed quiz is recorded once. A guard prevents duplicate submission from adding the same session twice.
- Topic-level accuracy and readiness indicators are practice metrics, not predictions of an official exam result.

## Product boundaries

- This is an independent study tool, not an official Microsoft product and not affiliated with or endorsed by Microsoft.
- No Microsoft logo or official exam question bank is included.
- The app does not call an AI model. Recommendations are based on local attempt history and deterministic rules.
- Progress stays in the browser's local storage. Clearing browser data or using another device can remove or hide this progress.

## Files

- `index.html` — application structure and quiz views
- `styles.css` — responsive interface
- `app.js` — question data, scoring, and client-side logic
- `tests/` — Node.js scoring and smoke tests

## Verification

Run the included automated checks with Node.js:

```bash
node --check app.js
node --test tests/*.test.js
```

The tests check question-bank structure, flashcard data integrity, topic-balanced quiz selection, scoring including unanswered items, and smoke-test the main quiz, practice, review queue, and planner logic. They do not replace manual browser testing across screen sizes and assistive technologies.

## Before final submission

1. Run the automated checks after each change.
2. Manually test quiz setup, answer selection, navigation, flags, timer, submission, and review on desktop and mobile.
3. Validate every question and explanation against current Microsoft Learn material.
4. Add a short demo video and screenshots to the repository.
