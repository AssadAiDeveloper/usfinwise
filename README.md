# 💰 USFinWise — Free US Financial Calculator Suite

![Performance](https://img.shields.io/badge/PageSpeed-96%2F99-brightgreen?style=for-the-badge)
![SEO](https://img.shields.io/badge/SEO-100%2F100-brightgreen?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge)

> **Free, accurate, and private financial calculators built for Americans.**
> No sign-up. No data collection. No tracking. Just math.

🌐 **Live Site:** [usfinwise.com](https://usfinwise.com)

---

## 📊 The 5-in-1 Calculator Suite

| Calculator | URL | Description |
|---|---|---|
| 🏠 **Mortgage** | `/` | PITI payment, PMI, amortization schedule |
| 📈 **401k / Retirement** | `/401k-calculator` | Compound growth, employer match, IRS limits |
| 🚗 **Auto Loan** | `/auto-loan-calculator` | True payment with trade-in, tax & dealer fees |
| 💳 **Credit Card Payoff** | `/credit-card-payoff-calculator` | Debt-free date, interest savings comparison |
| ✨ **Compound Interest** | `/compound-interest-calculator` | Wealth visualization, Rule of 72 |

---

## 🚀 Tech Stack

```
Frontend:    Pure HTML5 + Vanilla JavaScript (ES6+)
Styling:     Custom CSS with CSS Variables (Dark/Light themes)
CMS:         Decap CMS via Netlify for content management
Hosting:     Vercel (main site)
DNS:         Namecheap
Analytics:   Google Analytics 4 (G-8KMDEPXL59)
Tag Manager: Google Tag Manager (GTM-T6HJ62DM) — delayed loading
SEO:         JSON-LD Schema, Sitemap, Meta tags, Open Graph
```

---

## 📁 Project Structure

```
usfinwise/
├── index.html                          → usfinwise.com/ (Mortgage)
├── 401k-calculator.html                → usfinwise.com/401k-calculator
├── auto-loan-calculator.html           → usfinwise.com/auto-loan-calculator
├── credit-card-payoff-calculator.html  → usfinwise.com/credit-card-payoff-calculator
├── compound-interest-calculator.html   → usfinwise.com/compound-interest-calculator
├── about.html                          → usfinwise.com/about
├── sitemap.xml                         → Google sitemap (6 URLs)
├── robots.txt                          → Search engine directives
├── vercel.json                         → Clean URLs config
├── favicon.ico                         → Browser tab icon
├── favicon-16x16.png                   → Small favicon
├── favicon-32x32.png                   → Standard favicon
├── apple-touch-icon.png                → iOS home screen icon
├── logo-192.png                        → Logo (navbar + footer)
├── logo-512.png                        → Logo large size
├── og-image.png                        → Social sharing image (1200x630)
│
├── assets/
│   ├── css/
│   │   ├── style.css                   → Full design system
│   │   └── style.min.css               → Minified CSS
│   └── js/
│       ├── calculator.js               → All 5 calculators + UI logic
│       └── cms-bridge.js               → Fetches live data from CMS
│
├── data/
│   └── site_data.json                  → CMS-managed rates & SEO data
│
└── admin/
    ├── index.html                      → Decap CMS dashboard
    └── config.yml                      → CMS configuration (410 lines)
```

---

## ✨ Features

- ✅ **5 separate pages** — each indexed independently by Google
- ✅ **Real-time calculations** — results on button press
- ✅ **Dark / Light mode** — saved to localStorage
- ✅ **Mobile-first** — works on all screen sizes
- ✅ **SVG charts** — donut chart + bar charts (no libraries)
- ✅ **Full amortization table** — month-by-month breakdown
- ✅ **CMS-managed rates** — update without touching code
- ✅ **SEO optimized** — JSON-LD schemas, canonical URLs, Open Graph
- ✅ **GTM delayed loading** — saves 64KB, improves TBT dramatically
- ✅ **GDPR & CCPA compliant** — no tracking cookies
- ✅ **Zero dependencies** — no jQuery, no React, no libraries
- ✅ **1000-word SEO articles** — one per calculator page
- ✅ **robots.txt + sitemap** — fully configured for Google

---

## 📈 PageSpeed Scores

| Metric | Mobile | Desktop |
|---|---|---|
| **Performance** | 96 🟢 | 99 🟢 |
| **Accessibility** | 89 🟡 | 89 🟡 |
| **Best Practices** | 100 🟢 | 100 🟢 |
| **SEO** | 100 🟢 | 100 🟢 |
| **FCP** | 0.9s 🟢 | 0.2s 🟢 |
| **LCP** | 2.5s 🟡 | 0.7s 🟢 |
| **TBT** | 120ms 🟢 | 100ms 🟢 |
| **CLS** | 0 🟢 | 0 🟢 |

---

## 🔧 Local Development

```bash
# Clone the repo
git clone https://github.com/AssadAiDeveloper/usfinwise.git
cd usfinwise

# Open with VS Code Live Server
# Right-click index.html → Open with Live Server
# Opens at: http://127.0.0.1:5500
```

> **Note:** Live Server uses relative paths. The site is optimized for Vercel deployment where absolute paths work correctly.

---

## 🌐 Deployment

### Main Site — Vercel
```
vercel.com → Import from GitHub → AssadAiDeveloper/usfinwise
Settings: Framework = Other, Root = /
```

### CMS Admin — Netlify
```
app.netlify.com → Import from GitHub → AssadAiDeveloper/usfinwise
Enable Identity → Enable Git Gateway → Invite yourself
CMS URL: https://usfinwise.netlify.app/admin/
```

---

## 📝 Content Management (CMS)

Edit rates, SEO text, and IRS limits without touching code:

```
https://usfinwise.netlify.app/admin/
```

**What you can update:**
- 💰 Live interest rates (mortgage, auto, credit card, savings)
- 🔍 SEO meta titles and descriptions per page
- 🦸 Hero section text and KPI stats
- 🏛️ IRS limits (401k, IRA, HSA, conforming loan)
- 🦶 Footer text and disclaimer
- 📰 SEO articles for each calculator

---

## 🔄 Weekly Maintenance

1. **Update mortgage rate** → [Freddie Mac PMMS](https://www.freddiemac.com/pmms)
2. Open CMS → Live Interest Rates → Update mortgage rate → Save
3. Check Google Search Console for crawl errors
4. Monitor Google Analytics for traffic trends

---

## 📊 IRS Limits (Current)

| Limit | Amount |
|---|---|
| 401k Employee Contribution | $23,000 |
| 401k Catch-up (age 50+) | $30,500 |
| IRA Contribution | $7,000 |
| HSA — Individual | $4,300 |
| HSA — Family | $8,550 |
| Conforming Loan Limit | $766,550 |
| FHA Standard Limit | $498,257 |

---

## 🔒 Security

- ✅ No user data stored or transmitted
- ✅ All calculations run client-side in the browser
- ✅ HTTPS enforced via Vercel
- ✅ External links use `rel="noopener noreferrer"`
- ✅ GTM loaded after user interaction (no third-party scripts on page load)
- ✅ Strict referrer policy
- ✅ Admin panel protected by Netlify Identity

---

## 📜 Legal

- Privacy Policy — GDPR & CCPA compliant
- Terms of Service — California law
- Financial Disclaimer — Educational purposes only

> **Disclaimer:** USFinWise provides financial calculators for educational purposes only. We are not a registered investment advisor, lender, or financial institution.

---

## 🐛 Bug Reports

📧 **bugs@usfinwise.com**
🐛 **[Open an Issue](https://github.com/AssadAiDeveloper/usfinwise/issues)**

---

*Built with ❤️ for Americans · [usfinwise.com](https://usfinwise.com)*