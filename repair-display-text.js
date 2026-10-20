
const fs = require("node:fs");

const file = "app.js";
const backup = "app.js.clean-backup";

// Make sure the backup exists before attempting any repair.
if (!fs.existsSync(backup)) {
  throw new Error("Backup missing. No changes made.");
}

const original = fs.readFileSync(file, "utf8");

// Build damaged strings from Unicode code points.
function damaged(codes) {
  return String.fromCodePoint(
    ...codes.split(" ").map((code) => parseInt(code, 16))
  );
}

// Each entry contains: code points, replacement, expected count.
const replacements = [
  ["C3 A2 E2 201A AC E2 20AC 9D", "N/A", 4],
  ["C3 A2 CB 153 E2 20AC A6", "[!]", 1],
  ["C3 A2 CB 153 E2 20AC A0", "[ ]", 1],
  ["C3 A2 E2 20AC A0 E2 20AC 2122", "->", 6],
  ["C3 201A C2 B7", "|", 7],
  ["C3 A2 C5 201C E2 20AC 153", "[OK]", 3],
  ["C3 A2 E2 20AC A0 C2 BB", "[!]", 2],
  ["C3 A2 E2 20AC 201D E2 20AC B9", "[ ]", 1]
];

// Step 1: Verify all expected occurrence counts.
for (const [codes, replacement, expected] of replacements) {
  const bad = damaged(codes);
  const actual = original.split(bad).length - 1;

  if (actual !== expected) {
    throw new Error(
      `Safety check failed: expected ${expected} occurrence(s), ` +
      `found ${actual}. No changes made.`
    );
  }
}

// Step 2: Apply replacements in memory.
let repaired = original;

for (const [codes, replacement] of replacements) {
  const bad = damaged(codes);
  repaired = repaired.split(bad).join(replacement);
}

// Step 3: Verify none of the targeted damaged strings remain.
for (const [codes] of replacements) {
  if (repaired.includes(damaged(codes))) {
    throw new Error(
      "Verification failed: damaged text remains. No changes written."
    );
  }
}

// Step 4: Write the repaired file only after verification succeeds.
fs.writeFileSync(file, repaired, "utf8");

const totalReplacements = replacements.reduce(
  (total, entry) => total + entry[2],
  0
);

console.log("Repair completed successfully.");
console.log("Replacement groups:", replacements.length);
console.log("Total replacements:", totalReplacements);
console.log("Backup preserved:", fs.existsSync(backup));
