cd C:\Users\Lenovo\.kimi_openclaw\workspace\portfolio
$git = "C:\Users\Lenovo\AppData\Local\GitHubDesktop\app-3.6.2\resources\app\git\cmd\git.exe"

# List all tracked files and find large ones
$files = & $git ls-files
Write-Host "Total tracked files: $($files.Count)"

# Find files with large extensions
$largeFiles = @()
foreach ($f in $files) {
    $path = $f.ToString().Trim('"')
    if ($path -match '\.mp4$' -or $path -match '\.pptx$' -or $path -match '\.xmind$') {
        $largeFiles += $path
    }
}

Write-Host "Found $($largeFiles.Count) large files to remove"

# Remove each from git index (but keep in working directory)
$count = 0
foreach ($path in $largeFiles) {
    Write-Host "Removing: $path"
    & $git rm --cached "$path" 2>$null
    if ($LASTEXITCODE -eq 0) { $count++ }
}

Write-Host "Removed $count large files from git index"
Write-Host ""

# Amend the commit
Write-Host "Amending commit..."
& $git commit --amend -m "Portfolio initial commit (clean)" --no-edit 2>$null

# Show repo size
Write-Host ""
& $git count-objects -vH 2>$null

# Rename branch to main and push
Write-Host ""
Write-Host "Pushing to GitHub..."
& $git branch -m main 2>$null
& $git push --force -u origin main 2>$null
Write-Host "Done!"