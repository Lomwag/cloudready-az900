
$file = (Resolve-Path ".\app.js").Path
$content = [System.IO.File]::ReadAllText($file)

# Repair the empty-result placeholders.
$content = [regex]::Replace(
    $content,
    'length\?Math\.round\(correct/a\.length\*100\)\+"%":"[^"]*"',
    'length?Math.round(correct/a.length*100)+"%":"N/A"'
)
$content = [regex]::Replace(
    $content,
    'textContent=a\.length\?acc\+"%":"[^"]*"',
    'textContent=a.length?acc+"%":"N/A"'
)
$content = [regex]::Replace(
    $content,
    's\.total\?s\.accuracy\+"%":"[^"]*"',
    's.total?s.accuracy+"%":"N/A"'
)

# Repair review labels and navigation text.
$content = [regex]::Replace(
    $content,
    'flag\.textContent=exam\.flags\.has\(q\.id\)\?"[^"]* Flagged for review":"[^"]* Flag for review"',
    'flag.textContent=exam.flags.has(q.id)?"[!] Flagged for review":"[ ] Flag for review"'
)

foreach ($label in @(
    'Review answers',
    'Next question',
    'Practise again',
    'Practise this topic',
    'Review saved cards'
)) {
    $pattern = '(' + [regex]::Escape($label) + ' )[^"]*'
    $content = [regex]::Replace($content, $pattern, '${1}->')
}

# Repair feedback labels.
$content = [regex]::Replace($content, '"[^"]*CORRECT', '"[OK] CORRECT')
$content = [regex]::Replace($content, '"[^"]*REVIEW', '"[!] REVIEW')
$content = [regex]::Replace($content, '"[^"]*UNANSWERED', '"[ ] UNANSWERED')
$content = [regex]::Replace($content, '"[^"]*That''s right!', '"[OK] That''s right!')
$content = [regex]::Replace(
    $content,
    'Not quite [^"]*let''s learn it\.',
    'Not quite - let''s learn it.'
)

# Replace corrupted separator characters between spaces.
$content = [regex]::Replace($content, ' [^\x00-\x7F]{1,40} ', ' | ')

# Save as UTF-8 without a byte-order mark.
[System.IO.File]::WriteAllText(
    $file,
    $content,
    [System.Text.UTF8Encoding]::new($false)
)

Write-Host "Repair script finished. Verify the changes before using the app."
