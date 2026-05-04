# 💰 USFinWise — Free US Financial Calculator Suite

![USFinWise](https://img.shields.io/badge/USFinWise-Financial%20Calculators-blue?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-2026-green?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge)

> **Free, accurate, and private financial calculators built for Americans.**
> No sign-up. No data collection. No ads (yet). Just math.

🌐 **Live Site:** [usfinwise.com](https://usfinwise.com)

---

## 📊 The 5-in-1 Calculator Suite

| Calculator | Description |
|---|---|
| 🏠 **Mortgage** | PITI payment, PMI, amortization schedule |
| 📈 **401k / Retirement** | Compound growth, employer match, IRS 2026 limits |
| 🚗 **Auto Loan** | True payment with trade-in, tax & dealer fees |
| 💳 **Credit Card Payoff** | Debt-free date, interest savings comparison |
| ✨ **Compound Interest** | Wealth visualization, Rule of 72 |

---

## 🚀 Tech Stack

```
Frontend:   Pure HTML5 + Vanilla JavaScript (ES6+)
Styling:    Custom CSS with CSS Variables (Dark/Light themes)
CMS:        Decap CMS (Netlify) for content management
Hosting:    Vercel (main site) + Netlify (CMS admin)
DNS:        Namecheap
Analytics:  Google Analytics 4
SEO:        JSON-LD Schema, Sitemap, Meta tags
```

---

## 📁 Project Structure

```
usfinwise/
├── index.html                  # Main SPA — all 5 calculators
├── sitemap.xml                 # Google sitemap
├── assets/
│   ├── css/
│   │   └── style.css           # Full design system (Dark/Light)
│   └── js/
│       ├── cms-bridge.js       # Fetches live data from CMS
│       └── calculator.js       # All 5 calculators + UI logic
├── data/
│   └── site_data.json          # CMS-managed rates & SEO data
└── admin/
    ├── index.html              # Decap CMS dashboard
    └── config.yml              # CMS configuration
```

---

## ✨ Features

- ✅ **Real-time calculations** — results update on button press
- ✅ **Dark / Light mode** — saved to localStorage
- ✅ **Mobile-first** — works on all screen sizes
- ✅ **SVG charts** — donut chart + bar charts (no libraries)
- ✅ **Full amortization table** — month-by-month breakdown
- ✅ **CMS-managed rates** — update without touching code
- ✅ **SEO optimized** — 7 JSON-LD schemas, FAQPage, BreadcrumbList
- ✅ **GDPR & CCPA compliant** — no tracking cookies
- ✅ **Zero dependencies** — no jQuery, no React, no libraries
- ✅ **Google Analytics 4** — traffic tracking
- ✅ **Legal pages** — Privacy Policy, Terms, Disclaimer, Contact

---

## 🔧 Local Development

### Option 1 — VS Code Live Server (Recommended)

```bash
# 1. Clone the repo
git clone https://github.com/AssadAiDeveloper/usfinwise.git
cd usfinwise

# 2. Install Live Server extension in VS Code
# Extensions → Search "Live Server" → Install

# 3. Right-click index.html → Open with Live Server
# Opens at: http://127.0.0.1:5500
```

### Option 2 — Python Server

```bash
cd usfinwise
python3 -m http.server 5500
# Opens at: http://localhost:5500
```

### Option 3 — Node.js

```bash
cd usfinwise
npx live-server --port=5500
```

---

## 📝 CMS — Content Management

Edit rates, SEO text, and IRS limits without touching code:

```
https://usfinwise.netlify.app/admin/
```

**What you can edit:**
- 💰 Live interest rates (mortgage, auto, credit card)
- 🔍 SEO meta titles and descriptions
- 🦸 Hero section text and KPI stats
- 🏛️ IRS limits (401k, IRA, HSA, conforming loan)
- 📝 SEO articles for each calculator
- 🦶 Footer and legal content

---

## 🌐 Deployment

### Main Site — Vercel
```
vercel.com → Import from GitHub → AssadAiDeveloper/usfinwise
```

### CMS Admin — Netlify
```
app.netlify.com → Import from GitHub → AssadAiDeveloper/usfinwise
Enable Identity → Enable Git Gateway → Invite yourself
```

---

## 📈 SEO

| Feature | Status |
|---|---|
| Google Search Console | ✅ Verified |
| Google Analytics 4 | ✅ Active (G-8KMDEPXL59) |
| Sitemap submitted | ✅ usfinwise.com/sitemap.xml |
| JSON-LD Schemas | ✅ 7 schemas |
| Meta tags | ✅ Per-tool dynamic |
| FAQPage schema | ✅ 6 Q&A pairs |
| Core Web Vitals | ✅ No render-blocking JS |

---

## 🔄 Update Rates (Weekly)

1. Open: `https://usfinwise.netlify.app/admin/`
2. Go to: **⚙️ All Site Settings → 💰 Live Interest Rates**
3. Update mortgage rate from [Freddie Mac PMMS](https://www.freddiemac.com/pmms)
4. Click **Save** — site updates automatically ✅

---

## 📜 Legal

- [Privacy Policy](https://usfinwise.com) — GDPR & CCPA compliant
- [Terms of Service](https://usfinwise.com) — California law
- [Financial Disclaimer](https://usfinwise.com) — Educational purposes only

> **Disclaimer:** USFinWise provides financial calculators for educational purposes only. We are not a registered investment advisor, lender, or financial institution. Always consult a licensed professional before making financial decisions.

---

## 🤝 Contributing

Found a bug or have a suggestion?

📧 **bugs@usfinwise.com**
🐛 **[Open an Issue](https://github.com/AssadAiDeveloper/usfinwise/issues)**

---

## 📊 2026 IRS Limits (Built-in)

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

## ⭐ Star This Repo

If USFinWise helped you, please consider starring the repository!

[![GitHub stars](https://img.shields.io/github/stars/AssadAiDeveloper/usfinwise?style=social)](https://github.com/AssadAiDeveloper/usfinwise)

---

*Built with ❤️ for Americans · Updated for 2026 · [usfinwise.com](https://usfinwise.com)*
