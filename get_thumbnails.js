const urls = [
    "https://www.moneycontrol.com/entertainment/bollywood/vivek-oberoi-to-receive-dadasaheb-phalke-international-film-festival-award-for-indian-police-force-article-13642529.html",
    "https://news.abplive.com/entertainment/celebrities/meet-ajayraj-the-face-reading-specialist-bridging-ancient-wisdom-modern-psychology-1818683",
    "https://www.dnainindia.com/lifestyle/report-meet-dr-kriti-bharti-the-fearless-savior-changing-india-s-child-marriage-narrative-13642533",
    "https://www.india.com/money/alongside-ananya-panday-and-ishaan-khatter-22-year-old-founder-makes-the-35-under-35-8312046/",
    "https://timesofindia.indiatimes.com/small-town-dreams-supreme-success-advocate-sarthak-chaturvedis-inspiring-rise-from-mathura/articleshow/125022211.cms",
    "https://timesofindia.indiatimes.com/how-bangladeshi-ai-educator-robin-rafan-is-supporting-digital-skill-development-across-south-asia/articleshow/125034828.cms"
];

async function main() {
    for (const url of urls) {
        try {
            const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } });
            const data = await res.text();
            let match = data.match(/<meta[^>]+(?:property|name)=['"]og:image['"][^>]+content=['"]([^'"]+)['"]/i);
            if (!match) {
                match = data.match(/<meta[^>]+content=['"]([^'"]+)['"][^>]+(?:property|name)=['"]og:image['"]/i);
            }
            if (match) {
                console.log(`URL: ${url}\nIMAGE: ${match[1]}\n`);
            } else {
                console.log(`URL: ${url}\nIMAGE: NOT FOUND\n`);
            }
        } catch (err) {
            console.log(`URL: ${url}\nERROR: ${err.message}\n`);
        }
    }
}

main();
