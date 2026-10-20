# CloudReady AZ-900

**Unofficial AZ-900 learning simulator** built for the #1MillionDevs Vibe Coding Hackathon.

## What it does
- Timed mixed-topic exam simulation with navigation, flagging, submission, scoring, and explanations.
- Topic practice with immediate answer feedback and real-world examples.
- Flashcards with reveal, known, and review-again states.
- Study planner based on target date, study time, and study days.
- Readiness report with topic-level accuracy and recent completed simulations.
- Local browser persistence using `localStorage`; no account or backend required.

## Run locally
1. Download and extract the project ZIP.
2. Open `index.html` in a modern browser. No build step is required.
3. For a local development server, run `python -m http.server 8000` in this folder and visit `http://localhost:8000`.

## Content accuracy and source
The topic structure follows the public Microsoft Learn AZ-900 study guide, which lists three skill groups:
- Describe cloud concepts (25–30%)
- Describe Azure architecture and services (35–40%)
- Describe Azure management and governance (30–35%)

Official source: https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900

The curated bank contains 30 original educational practice questions, evenly split across the three skill groups. It is a starter learning set, not a complete representation of every exam objective. Questions are written for this prototype. They are not copied from real exam items, are not an official exam bank, and do not claim to predict exam performance. Verify concepts against current Microsoft Learn documentation as Azure services and exam objectives change.

## Important product boundaries
- This is not an official Microsoft product and is not affiliated with or endorsed by Microsoft.
- No Microsoft logo or official exam question bank is included.
- The app does not call an AI model. “Adaptive” focus is based on local attempt history and deterministic rules; no AI service is connected.
- Progress stays in the browser's local storage. Clearing browser data or using another device can remove or not show this progress.
- The readiness score is a practice metric, not a guarantee of passing the certification.

## Files
- `index.html` — app structure and views
- `styles.css` — responsive dark interface
- `app.js` — question data and client-side logic
- `README.md` — project documentation

## Suggested next steps before submission
1. Test all flows on desktop and mobile widths.
2. Ask 3–5 learners to try it and record where they hesitate.
3. Validate every explanation against Microsoft Learn.
4. Add a short demo video and screenshots to the repository.
5. If adding an AI study buddy, connect a real model through a secure server-side endpoint; never put API keys in browser code.

## Verification
Run the included data/scoring checks with Node.js:

```bash
node --test tests/*.test.js
```

The tests check question-bank structure, flashcard structure, topic-balanced exam selection, scoring behavior including unanswered items, and smoke-test the main exam, practice, flashcard review queue, and planner flows with a lightweight DOM harness. They do not replace manual browser testing across screen sizes and assistive technologies.

## Scoring rules
- **Exam simulation score:** correct answers divided by all questions in the simulation, rounded to a whole percent. An unanswered question counts as incorrect for the simulation score.
- **Practice/readiness accuracy:** correct answers divided by questions actually answered. Unanswered exam items are not recorded as attempted answers, so they do not artificially lower a topic's learning accuracy.
- A completed simulation is recorded once. A guard prevents duplicate submission from adding the same session twice.
