'use strict';
const $      = id => document.getElementById(id);
const setTxt = (id, v) => { const e = $(id); if (e) e.textContent = v; };
const getN   = id => {
const el = $(id);
if (!el || el.value === '' || el.value === null) return null;
const v = parseFloat(el.value);
return isNaN(v) ? null : v;
};
const getNZ  = id => getN(id) || 0;
const fmt    = n  => n.toLocaleString('en-US', {style:'currency',currency:'USD',maximumFractionDigits:0});
const fmtD   = n  => n.toLocaleString('en-US', {style:'currency',currency:'USD',maximumFractionDigits:2});
const pct    = n  => (Math.round(n * 10) / 10) + '%';
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
function toggleTheme() {
const html   = document.documentElement;
const isDark = html.getAttribute('data-theme') === 'dark';
html.setAttribute('data-theme', isDark ? 'light' : 'dark');
const ico = $('themeIco');
if (ico) ico.textContent = isDark ? '☀️' : '🌙';
try { localStorage.setItem('ufw-theme', isDark ? 'light' : 'dark'); } catch(e) {}
}
window.toggleTheme = toggleTheme;
(function restoreTheme() {
try {
if (localStorage.getItem('ufw-theme') === 'light') {
document.documentElement.setAttribute('data-theme', 'light');
const chk = $('themeChk'); if (chk) chk.checked = true;
const ico = $('themeIco'); if (ico) ico.textContent = '☀️';
}
} catch(e) {}
})();
function dismissCookie(accepted) {
const b = $('cookie'); if (b) b.classList.add('gone');
try { localStorage.setItem('ufw-cookie', accepted ? 'accepted' : 'rejected'); } catch(e) {}
}
window.dismissCookie = dismissCookie;
(function checkCookie() {
try { if (localStorage.getItem('ufw-cookie')) { const b=$('cookie'); if(b) b.classList.add('gone'); } } catch(e) {}
})();
function openTool(tool, btnEl) {
document.querySelectorAll('.tool').forEach(t => t.classList.remove('active'));
document.querySelectorAll('.nav-tab').forEach(b => {
b.classList.remove('active');
b.setAttribute('aria-selected', 'false');
});
const sec = $('t-' + tool); if (sec) sec.classList.add('active');
const btn = btnEl || document.querySelector('[data-tool="' + tool + '"]');
if (btn) { btn.classList.add('active'); btn.setAttribute('aria-selected', 'true'); }
if (typeof window.updateMetaTags === 'function') window.updateMetaTags(tool);
$('navTabs')?.classList.remove('open');
const hbg = $('hbg'); if (hbg) hbg.setAttribute('aria-expanded', 'false');
}
window.openTool = openTool;
document.addEventListener('DOMContentLoaded', function() {
const hbg = $('hbg');
if (hbg) {
hbg.addEventListener('click', function() {
const tabs = $('navTabs');
const open = tabs.classList.toggle('open');
this.setAttribute('aria-expanded', open);
});
}
});
function updateSV(rangeId, dispId, suffix) {
suffix = suffix || '';
const v = getN(rangeId);
setTxt(dispId, v + suffix);
const el = $(rangeId); if (el) el.setAttribute('aria-valuenow', v);
}
window.updateSV = updateSV;
function buildBars(rowId, xlId, data) {
const row = $(rowId), xl = $(xlId);
if (!row) return;
row.innerHTML = '';
if (xl) xl.innerHTML = '';
if (!data || data.length === 0) return;
const maxV = Math.max(...data.map(d => (d.a || 0) + (d.b || 0)), 1);
const rowH = row.offsetHeight || 110;
data.forEach(d => {
const col = document.createElement('div');
col.className = 'bar-col';
col.style.cssText = 'flex:1;position:relative;height:100%;cursor:pointer;';
const tip = document.createElement('div');
tip.className = 'bar-tip';
tip.textContent = d.tip || '';
col.appendChild(tip);
const total = (d.a || 0) + (d.b || 0);
const totalH = (total / maxV) * 100;
if (d.b !== undefined && d.b > 0) {
const bH = (d.b / maxV) * 100;
const sb = document.createElement('div');
sb.style.cssText = `
position:absolute;
bottom:${(d.a||0)/maxV*100}%;
left:0;right:0;
height:${bH}%;
min-height:2px;
background:${d.colorB || 'var(--red)'};
border-radius:3px 3px 0 0;
`;
col.appendChild(sb);
}
const aH = (d.a / maxV) * 100;
const sa = document.createElement('div');
sa.style.cssText = `
position:absolute;
bottom:0;
left:0;right:0;
height:${aH}%;
min-height:2px;
background:${d.colorA || 'var(--acc)'};
border-radius:${d.b ? '0' : '3px 3px'} 0 0;
`;
col.appendChild(sa);
row.appendChild(col);
if (xl) {
const li = document.createElement('div');
li.className = 'bar-xl-item';
li.textContent = d.label;
xl.appendChild(li);
}
});
}
const C = 238.76;
function updateDonut(pi, tax, ins, pmi) {
const total = (pi + tax + ins + pmi) || 1;
const slices = [{id:'d-pi',val:pi},{id:'d-tax',val:tax},{id:'d-ins',val:ins},{id:'d-pmi',val:pmi}];
let offset = 0;
slices.forEach(s => {
const arc = (s.val / total) * C;
const el = $(s.id); if (!el) { offset += arc; return; }
el.setAttribute('stroke-dasharray', C);
el.setAttribute('stroke-dashoffset', C - arc);
el.setAttribute('transform', 'rotate(' + (-90 + (offset/C*360)) + ' 55 55)');
offset += arc;
});
}
function syncDownPct() {
const price = getN('m-price') || 1, down = getN('m-down');
const p = Math.min((down/price)*100, 50);
const sl = $('m-dp-sl'); if (sl) { sl.value = p; sl.setAttribute('aria-valuenow', p); }
setTxt('m-dp-pct-sl', pct(p)); setTxt('m-down-pct-display', pct(p));
}
function syncFromSlider() {
const price = getN('m-price'), p = getN('m-dp-sl');
const el = $('m-down'); if (el) el.value = Math.round((p/100)*price);
setTxt('m-dp-pct-sl', pct(p)); setTxt('m-down-pct-display', pct(p));
}
function syncFromDown() {
const price = getN('m-price') || 1, down = getN('m-down');
const p = Math.min((down/price)*100, 50);
const sl = $('m-dp-sl'); if (sl) { sl.value = p; sl.setAttribute('aria-valuenow', p); }
setTxt('m-dp-pct-sl', pct(p)); setTxt('m-down-pct-display', pct(p));
}
window.syncDownPct   = syncDownPct;
window.syncFromSlider = syncFromSlider;
window.syncFromDown  = syncFromDown;
function calcMortgage() {
const price   = getN('m-price');
const rate    = getN('m-rate');
if (!price || !rate) {
['m-monthly','m-loan','m-total-int','m-total-cost','m-payoff-date',
'l-pi','l-tax','l-ins','l-pmi','m-prin-pct'].forEach(id => setTxt(id, '—'));
return;
}
const down    = getNZ('m-down');
const loan    = Math.max(price - down, 0);
const annRate = rate / 100;
const termYr  = parseInt($('m-term')?.value) || 30;
const n       = termYr * 12;
const mr      = annRate / 12;
const propTax = getNZ('m-tax');
const homeIns = getNZ('m-ins');
const hoa     = getNZ('m-hoa');
const downPct = price > 0 ? (down / price) * 100 : 0;
const pmi     = downPct < 20 ? (loan * 0.008) / 12 : 0;
let pi = 0;
if (mr > 0) pi = loan * (mr * Math.pow(1+mr,n)) / (Math.pow(1+mr,n) - 1);
else pi = n > 0 ? loan / n : 0;
const taxMo    = propTax / 12;
const insMo    = homeIns / 12;
const totalMo  = pi + taxMo + insMo + pmi + hoa;
const totalPaid = pi * n;
const totalInt  = Math.max(totalPaid - loan, 0);
const totalCost = totalPaid + down;
const prinPct   = (loan + totalInt) > 0 ? (loan / (loan + totalInt)) * 100 : 0;
const pd = new Date(); pd.setMonth(pd.getMonth() + n);
const pdStr = MONTHS[pd.getMonth()] + ' ' + pd.getFullYear();
setTxt('m-monthly',     fmt(totalMo));
setTxt('m-loan',        fmt(loan));
setTxt('m-total-int',   fmt(totalInt));
setTxt('m-total-cost',  fmt(totalCost));
setTxt('m-payoff-date', pdStr);
setTxt('l-pi',  fmtD(pi));
setTxt('l-tax', fmtD(taxMo));
setTxt('l-ins', fmtD(insMo));
setTxt('l-pmi', fmtD(pmi));
setTxt('m-prin-pct', pct(prinPct));
const pb = $('m-prin-bar'); if (pb) pb.style.width = Math.min(prinPct,100) + '%';
const pbW = $('m-prog-bar-wrap');
if (pbW) { pbW.setAttribute('aria-valuenow', Math.round(prinPct)); }
updateDonut(pi, taxMo, insMo, pmi);
let bal = loan; const barData = [];
for (let yr = 1; yr <= Math.min(10, termYr); yr++) {
let yP = 0, yI = 0;
for (let m = 0; m < 12; m++) {
if (bal <= 0) break;
const iP = bal * mr, prP = Math.min(pi - iP, bal);
yI += iP; yP += prP; bal -= prP;
}
barData.push({label:'Y'+yr, a:yP, b:yI, colorA:'var(--acc)', colorB:'var(--red)',
tip:'Yr '+yr+' P:'+fmt(yP)+' I:'+fmt(yI)});
}
buildBars('m-bar-row', 'm-bar-xl', barData);
const tbody = $('m-amort-body'); if (!tbody) return;
const frag = document.createDocumentFragment(); let b2 = loan;
for (let m = 1; m <= n; m++) {
const iP = b2 * mr, prP = Math.min(pi - iP, b2); b2 = Math.max(b2 - prP, 0);
const tr = document.createElement('tr');
[m, fmtD(pi), prP, iP, b2].forEach((v, i) => {
const td = document.createElement('td');
td.textContent = i === 0 ? v : fmtD(v);
if (i === 2) td.className = 'g';
if (i === 3) td.className = 'r';
tr.appendChild(td);
});
frag.appendChild(tr);
}
tbody.innerHTML = ''; tbody.appendChild(frag);
}
window.calcMortgage = calcMortgage;
let _amortOpen = false;
function toggleAmort() {
_amortOpen = !_amortOpen;
const wrap = $('m-amort-wrap'), btn = $('m-amort-btn');
if (wrap) wrap.classList.toggle('hide', !_amortOpen);
if (btn)  btn.setAttribute('aria-expanded', _amortOpen);
setTxt('m-amort-arrow', _amortOpen ? '▴' : '▾');
}
window.toggleAmort = toggleAmort;
function calcRet() {
const age        = getN('r-age');
const retAge     = getN('r-ret-age');
const sal        = getN('r-sal');
if (!age || !retAge || !sal) {
['r-nest','r-you','r-emp','r-growth','r-yrs','r-draw','r-savrate','r-dep-pct'].forEach(id => setTxt(id, '—'));
setTxt('r-infl-adj', '—');
return;
}
const bal        = getNZ('r-bal');
const contribPct = (getN('r-contrib') || 10) / 100;
const matchPct   = (getN('r-match')   || 0)  / 100;
const returnRate = (getN('r-return')  || 7)   / 100;
const inflRate   = (getN('r-inf')     || 2.5) / 100;
const yrs        = Math.max(retAge - age, 0);
const yourAnnual = sal * contribPct;
const empAnnual  = sal * matchPct;
const totalAnnual = yourAnnual + empAnnual;
let b = bal; const pts = [];
for (let y = 1; y <= yrs; y++) {
b = b * (1 + returnRate) + totalAnnual;
const step = Math.max(Math.floor(yrs / 7), 1);
if (y % step === 0 || y === yrs) pts.push({y, b, dep: bal + totalAnnual * y});
}
const nest     = b;
const totalDep = bal + totalAnnual * yrs;
const growth   = Math.max(nest - totalDep, 0);
const inflAdj  = inflRate > 0 ? nest / Math.pow(1 + inflRate, yrs) : nest;
const draw     = (nest * 0.04) / 12;
const savRate  = sal > 0 ? (totalAnnual / sal) * 100 : 0;
const depPct   = nest > 0 ? Math.min((totalDep / nest) * 100, 100) : 0;
setTxt('r-nest',     fmt(nest));
setTxt('r-infl-adj', fmt(inflAdj) + " in today's dollars");
setTxt('r-you',      fmt(yourAnnual * yrs));
setTxt('r-emp',      fmt(empAnnual  * yrs));
setTxt('r-growth',   fmt(growth));
setTxt('r-yrs',      yrs + ' yrs');
setTxt('r-draw',     fmtD(draw));
setTxt('r-savrate',  pct(savRate));
setTxt('r-dep-pct',  pct(depPct));
const db = $('r-dep-bar'); if (db) db.style.width = depPct + '%';
buildBars('r-bar', 'r-bar-xl', pts.map(p => ({
label: "'" + String(age + p.y).slice(-2),
a: p.dep, b: Math.max(p.b - p.dep, 0),
colorA: 'var(--acc)', colorB: 'var(--grn)',
tip: 'Age ' + (age + p.y) + ': ' + fmt(p.b),
})));
}
window.calcRet = calcRet;
function calcAuto() {
const price   = getN('a-price');
const apr     = getN('a-rate');
if (!price || !apr) {
['a-monthly','a-loan','a-int','a-total','a-taxamt','a-prin-pct'].forEach(id => setTxt(id, '—'));
setTxt('a-term-lbl', '—');
return;
}
const down    = getNZ('a-down');
const trade   = getNZ('a-trade');
const termMo  = parseInt($('a-term')?.value) || 60;
const taxRate = (getN('a-tax') || 0) / 100;
const fees    = getNZ('a-fees');
const taxAmt  = Math.max(price - trade, 0) * taxRate;
const loanAmt = Math.max(price - down - trade + taxAmt + fees, 0);
const mr      = (apr / 100) / 12;
let mo = 0;
if (mr > 0) mo = loanAmt * (mr * Math.pow(1+mr,termMo)) / (Math.pow(1+mr,termMo) - 1);
else mo = termMo > 0 ? loanAmt / termMo : 0;
const totalPaid = mo * termMo;
const totalInt  = Math.max(totalPaid - loanAmt, 0);
const totalCost = down + trade + totalPaid;
const prinPct   = totalPaid > 0 ? (loanAmt / totalPaid) * 100 : 0;
setTxt('a-monthly',  fmtD(mo));
setTxt('a-term-lbl', termMo + ' months at ' + (apr*100).toFixed(2) + '% APR');
setTxt('a-loan',     fmt(loanAmt));
setTxt('a-int',      fmt(totalInt));
setTxt('a-total',    fmt(totalCost));
setTxt('a-taxamt',   fmt(taxAmt));
setTxt('a-prin-pct', pct(prinPct));
const ab = $('a-prin-bar'); if (ab) ab.style.width = Math.min(prinPct,100) + '%';
}
window.calcAuto = calcAuto;
function _sim(bal, mr, pmt) {
if (pmt <= 0) return {months:9999, interest:9999999};
let b = bal, int = 0, mo = 0;
while (b > 0.01 && mo < 1200) {
const ic = b * mr; int += ic;
const pr = Math.min(pmt - ic, b);
if (pr <= 0) return {months:9999, interest:9999999};
b -= pr; mo++;
}
return {months:mo, interest:int};
}
function calcCC() {
const bal   = getN('c-bal');
const apr   = getN('c-apr');
const minP  = getN('c-min');
if (!bal || !apr || !minP) {
['c-min-mo','c-min-int','c-acc-mo','c-acc-int','c-saved','c-time-saved'].forEach(id => setTxt(id, '—'));
return;
}
const mr    = (apr / 100) / 12;
const extra = getNZ('c-extra');
const rMin = _sim(bal, mr, minP);
const rAcc = _sim(bal, mr, minP + extra);
const saved   = Math.max(rMin.interest - rAcc.interest, 0);
const moSaved = rMin.months - rAcc.months;
const fmtMo = m => m >= 1200 ? 'Never' : m < 12 ? m + ' mo' : Math.floor(m/12) + 'y ' + (m%12) + 'mo';
setTxt('c-min-mo',    fmtMo(rMin.months));
setTxt('c-min-int',   rMin.interest >= 9999999 ? '∞' : fmt(rMin.interest));
setTxt('c-acc-mo',    fmtMo(rAcc.months));
setTxt('c-acc-int',   fmt(rAcc.interest));
setTxt('c-saved',     fmt(saved));
setTxt('c-time-saved', moSaved > 0 ? moSaved + ' months faster' : '(enter extra payment)');
const step = Math.max(Math.floor(rAcc.months / 8), 1); const pts = [];
let b = bal, mo = 0;
while (b > 0.01 && mo < rAcc.months) {
const ic = b * mr, pr = Math.min(minP + extra - ic, b);
if (pr <= 0) break; b -= pr; mo++;
if (mo % step === 0 || b < 1)
pts.push({label:'M'+mo, a:Math.max(b,0), colorA:'var(--red)', tip:'Mo '+mo+': '+fmt(b)+' left'});
}
buildBars('c-bar', 'c-bar-xl', pts);
}
window.calcCC = calcCC;
function calcCI() {
const P   = getN('ci-p');
const r   = getN('ci-rate');
const yrs = getN('ci-yr');
if (P === null || !r || !yrs) {
['ci-final','ci-dep','ci-int','ci-roi','ci-dbl','ci-dep-pct'].forEach(id => setTxt(id, '—'));
setTxt('ci-sub', '—');
return;
}
const mc  = getNZ('ci-m');
const n   = parseInt($('ci-freq')?.value) || 12;
const rn  = (r / 100) / n;
const nt  = n * yrs;
const gf  = Math.pow(1 + rn, nt);
const final  = P * gf + (rn > 0 ? mc * ((gf - 1) / rn) : mc * nt);
const dep    = P + mc * 12 * yrs;
const earned = Math.max(final - dep, 0);
const roi    = dep > 0 ? (earned / dep) * 100 : 0;
const dbl    = r > 0 ? Math.round(72 / (r * 100)) : 0;
const depPct = final > 0 ? Math.min((dep / final) * 100, 100) : 0;
setTxt('ci-final',   fmt(final));
setTxt('ci-sub',     'After ' + yrs + ' years at ' + (r*100) + '% annual return');
setTxt('ci-dep',     fmt(dep));
setTxt('ci-int',     fmt(earned));
setTxt('ci-roi',     Math.round(roi) + '%');
setTxt('ci-dbl',     dbl + ' yrs');
setTxt('ci-dep-pct', pct(depPct));
const db = $('ci-dep-bar'); if (db) db.style.width = depPct + '%';
const step = Math.max(Math.floor(yrs / 7), 1); const pts = [];
for (let y = step; y <= yrs; y += step) {
const nt2 = n * y, gf2 = Math.pow(1 + rn, nt2);
const b2  = P * gf2 + (rn > 0 ? mc * ((gf2-1)/rn) : mc * nt2);
const d2  = P + mc * 12 * y;
pts.push({label:'Y'+y, a:d2, b:Math.max(b2-d2,0),
colorA:'var(--acc)', colorB:'var(--grn)', tip:'Year '+y+': '+fmt(b2)});
}
buildBars('ci-bar', 'ci-bar-xl', pts);
}
window.calcCI = calcCI;
var LEGAL_TITLES = {
privacy:'🔒 Privacy Policy', terms:'📋 Terms of Service',
disclaimer:'⚠️ Financial Disclaimer', contact:'✉️ Contact Us', sitemap:'🗺️ Sitemap'
};
function openLegal(id) {
document.querySelectorAll('.lm-panel').forEach(p => p.style.display = 'none');
const panel = document.getElementById('lp-' + id); if (panel) panel.style.display = 'block';
const titleEl = document.getElementById('legal-modal-title');
if (titleEl) titleEl.textContent = LEGAL_TITLES[id] || 'Legal';
const overlay = document.getElementById('legal-overlay');
if (overlay) overlay.classList.add('open');
document.body.style.overflow = 'hidden';
setTimeout(() => { const btn = overlay?.querySelector('.lm-close'); if (btn) btn.focus(); }, 50);
}
function closeLegal() {
const o = document.getElementById('legal-overlay');
if (o) o.classList.remove('open');
document.body.style.overflow = '';
}
function overlayClose(e) { if (e.target === document.getElementById('legal-overlay')) closeLegal(); }
window.openLegal   = openLegal;
window.closeLegal  = closeLegal;
window.overlayClose = overlayClose;
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLegal(); });
function submitContact(e) {
e.preventDefault();
const name    = document.getElementById('cf-name')?.value.trim();
const email   = document.getElementById('cf-email')?.value.trim();
const subject = document.getElementById('cf-subject')?.value;
const message = document.getElementById('cf-message')?.value.trim();
const consent = document.getElementById('cf-consent')?.checked;
const errEl   = document.getElementById('cf-error');
if (!name)    return cfErr('Please enter your full name.');
if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return cfErr('Please enter a valid email.');
if (!subject) return cfErr('Please select a subject.');
if (!message || message.length < 10) return cfErr('Please enter at least 10 characters.');
if (!consent) return cfErr('Please accept the Privacy Policy.');
if (errEl) errEl.style.display = 'none';
const form = document.getElementById('contactForm');
const succ = document.getElementById('cf-success');
const span = document.getElementById('cf-success-email');
if (form) form.style.display = 'none';
if (span) span.textContent = email;
if (succ) succ.style.display = 'block';
}
function cfErr(msg) { const el = document.getElementById('cf-error'); if (el) { el.textContent = '⚠️ ' + msg; el.style.display = 'block'; } }
window.submitContact = submitContact;
function showDashes() {
const dashIds = [
'm-monthly','m-loan','m-total-int','m-total-cost','m-payoff-date',
'l-pi','l-tax','l-ins','l-pmi','m-prin-pct',
'r-nest','r-infl-adj','r-you','r-emp','r-growth','r-yrs','r-draw','r-savrate','r-dep-pct',
'a-monthly','a-term-lbl','a-loan','a-int','a-total','a-taxamt','a-prin-pct',
'c-min-mo','c-min-int','c-acc-mo','c-acc-int','c-saved','c-time-saved',
'ci-final','ci-sub','ci-dep','ci-int','ci-roi','ci-dbl','ci-dep-pct',
];
dashIds.forEach(id => setTxt(id, '—'));
}
document.addEventListener('cmsReady', function() {
showDashes();
console.info('[USFinWise] ✅ Ready — waiting for user to press Calculate.');
});