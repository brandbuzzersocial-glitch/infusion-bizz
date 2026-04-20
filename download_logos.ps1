$ErrorActionPreference = "Stop"
$headers = @{"User-Agent"="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"}
$logoDir = "c:\infusion\logos"

if (!(Test-Path $logoDir)) {
    New-Item -ItemType Directory -Force -Path $logoDir | Out-Null
}

$logos = @{
    "ani.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/ANI_Logo.svg/320px-ANI_Logo.svg.png";
    "yahoo.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Yahoo_Finance_Logo_2021.svg/320px-Yahoo_Finance_Logo_2021.svg.png";
    "financial-express.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/The_Financial_Express_%28India%29_Logo.svg/320px-The_Financial_Express_%28India%29_Logo.svg.png";
    "prnewswire.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/PR_Newswire_logo_%282017%29.png/320px-PR_Newswire_logo_%282017%29.png";
    "inc42.png" = "https://logo.clearbit.com/inc42.com";
    "entrepreneur.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Entrepreneur_magazine_logo.svg/320px-Entrepreneur_magazine_logo.svg.png";
    "businesswire.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/BusinessWire_Logo.svg/320px-BusinessWire_Logo.svg.png";
    "globenewswire.png" = "https://logo.clearbit.com/globenewswire.com";
    "businessworld.png" = "https://logo.clearbit.com/businessworld.in";
    "theprint.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/ThePrint_logo.png/320px-ThePrint_logo.png";
    "digitaljournal.png" = "https://logo.clearbit.com/digitaljournal.com";
    "newsvoir.png" = "https://logo.clearbit.com/newsvoir.com"
}

foreach ($key in $logos.Keys) {
    $url = $logos[$key]
    $dest = Join-Path $logoDir $key
    Write-Host "Downloading $key from $url..."
    try {
        Invoke-WebRequest -Uri $url -OutFile $dest -Headers $headers
        Write-Host "Success: $key"
    } catch {
        Write-Host "Failed to download $key : $($_.Exception.Message)"
    }
}

Write-Host "All downloads attempted."
