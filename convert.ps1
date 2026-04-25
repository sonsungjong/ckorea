$files = Get-ChildItem -Path CProj -Filter *.c -Recurse
$enc = [System.Text.Encoding]::GetEncoding("euc-kr")
$utf8 = [System.Text.Encoding]::UTF8

foreach ($f in $files) {
    $bytes = [System.IO.File]::ReadAllBytes($f.FullName)
    $text = $enc.GetString($bytes)
    [System.IO.File]::WriteAllText($f.FullName, $text, $utf8)
}
Write-Host "Conversion complete."
