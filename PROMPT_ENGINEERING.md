# Prompt engineering log — CloudReady AZ-900

## Product goal
Build an unofficial, beginner-friendly AZ-900 practice simulator that teaches the reasoning behind answers and helps learners choose their next revision topic.

## Primary build prompt
“Build a responsive web app for AZ-900 preparation based on the current public Microsoft Learn study guide. Use three skill groups: cloud concepts, Azure architecture and services, and Azure management and governance. Write original educational multiple-choice questions; do not copy or reproduce real exam questions. Every question must have one defensible best answer, plausible distractors, a concise explanation of why the answer is best, and a grounded real-world example. Clearly label the product unofficial and do not use Microsoft logos. Include timed practice, topic practice with instant feedback, flashcards, a study planner, and a progress report. Save progress locally, disclose that limitation, and do not claim an AI integration unless a real model is connected.”

## Content validation prompt
“For each question, verify the correct answer and explanation against the current Microsoft Learn documentation. Check whether distractors are clearly incorrect in the stated scenario, avoid ambiguous wording, avoid claims that depend on unspecified pricing or regional availability, and identify any service terminology that may have changed. If a claim cannot be verified, mark it for human review instead of inventing a source.”

## UX review prompt
“Review the app as a first-time learner on a small screen. Check navigation, keyboard usability, color contrast, clear selected states, error prevention before submission, timer behavior, answer explanations, and whether the progress report distinguishes missing data from a score of zero. Report reproducible bugs and specific fixes.”

## Responsible AI / transparency
The current prototype is deterministic and does not call an AI service. If an AI study buddy is added later, the model must be grounded in trusted documentation, clearly identify uncertainty, avoid representing generated explanations as official Microsoft guidance, and keep credentials/API keys server-side.
