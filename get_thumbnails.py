import urllib.request
import re

urls = [
    "https://www.moneycontrol.com/entertainment/bollywood/vivek-oberoi-to-receive-dadasaheb-phalke-international-film-festival-award-for-indian-police-force-article-13642529.html",
    "https://news.abplive.com/entertainment/celebrities/meet-ajayraj-the-face-reading-specialist-bridging-ancient-wisdom-modern-psychology-1818683",
    "https://www.dnainindia.com/lifestyle/report-meet-dr-kriti-bharti-the-fearless-savior-changing-india-s-child-marriage-narrative-13642533",
    "https://www.india.com/money/alongside-ananya-panday-and-ishaan-khatter-22-year-old-founder-makes-the-35-under-35-8312046/",
    "https://timesofindia.indiatimes.com/small-town-dreams-supreme-success-advocate-sarthak-chaturvedis-inspiring-rise-from-mathura/articleshow/125022211.cms",
    "https://timesofindia.indiatimes.com/how-bangladeshi-ai-educator-robin-rafan-is-supporting-digital-skill-development-across-south-asia/articleshow/125034828.cms"
]

req_headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

for url in urls:
    req = urllib.request.Request(url, headers=req_headers)
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8', errors='ignore')
        match = re.search(r'<meta\s+(?:property|name)="og:image"\s+content="([^"]+)"', html, re.I)
        if match:
            print(f"URL: {url}\nIMAGE: {match.group(1)}\n")
        else:
            print(f"URL: {url}\nIMAGE: NOT FOUND\n")
    except Exception as e:
        print(f"URL: {url}\nERROR: {e}\n")
