# Cyber Shield HPS | Hamdard Public School Cybersecurity Club

A modern, visually striking, cyber-themed cybersecurity awareness website built for **Cyber Shield HPS**, the official student cybersecurity club of **Hamdard Public School**.

> **Motto:** *"Stop. Think. Then Take Action."*  
> **Helpline:** **1930** (National Cybercrime Helpline, 24x7 Toll-Free)  
> **Portal:** [cybercrime.gov.in](https://cybercrime.gov.in)

---

## 🛡️ Project Overview

Cyber Shield HPS educates school students (teens), teachers, and parents on recognizing cyber threats, preventing scams, and responding calmly during emergencies. The tone is friendly, confident, and empowering rather than scary or preachy.

### Key Features
1. **Interactive Threat Intelligence:** Deconstruction of Phishing, UPI/OTP scams, Fake Officer/Digital Arrest calls, Malicious APKs, Social Media Fraud, Cyberbullying, and Credential Stuffing with filter and search.
2. **Everyday Prevention & Habits:** Practical guides covering passphrases, authenticator-based 2FA, app permission audits, public Wi-Fi safety, and an interactive **Passphrase Generator**.
3. **Universal Red Flag Checklist:** 7 scannable warning signs to detect fraud instantly.
4. **5-Step Emergency Response Sequence:** A clear animated timeline highlighting the critical "Golden Hour" for fund recovery and the 1930 helpline.
5. **Interactive Cyber Safety Pledge:** Official Ministry of Home Affairs / I4C student pledge checklist with real-time confetti celebration and personalized printable certificate generation.
6. **Practice Zone (Phase 2):**
   - **Spot the Scam Simulator:** Realistic simulated SMS, WhatsApp, Email, and Phone Call scenarios with immediate breakdowns.
   - **Phishing Link Inspector:** Interactive URL analyzer breaking down subdomains, typosquatting, protocols, and authentic `.gov.in` domains.
   - **Defender Score Card:** Shareable and printable client-side progress rank.
7. **Verified Resource Directory:** Official links to cybercrime.gov.in, I4C courses, @Cyberdost, and Sanchar Saathi.
8. **Club & Cyber Jagrookta Diwas (CJD):** Details on monthly homeroom workshops (1st Wednesday of every month) and sample event/team placeholders.

---

## 💻 Tech Stack

- **Framework:** React 18 + Vite
- **Routing:** React Router (`HashRouter` for zero-configuration compatibility across GitHub Pages, Netlify, and Vercel)
- **Styling:** Tailwind CSS (Custom dark cyber palette `#050B14`, neon cyan `#00E5FF`, electric green `#39FF88`, purple `#8B5CF6`)
- **Animations:** Framer Motion + Canvas Confetti
- **Icons:** Lucide React
- **Typography:** Orbitron / Space Grotesk (headings), Inter (body), JetBrains Mono (tech readouts)
- **Privacy:** 100% Client-side. **Zero** database, zero trackers, and zero personal data stored or collected.

---

## 📁 Content Architecture

All website text and data are decoupled from presentation logic in `/src/data/*.js` so students and teachers can easily update content without editing UI code:

```
src/
├── components/          # Reusable cyber UI components
│   ├── CyberBackground.jsx   # Lightweight 60fps canvas matrix & particle background
│   ├── EmergencyStrip.jsx    # Persistent 1930 / cybercrime.gov.in alert
│   ├── Navbar.jsx            # Sticky navbar with mobile drawer
│   ├── Footer.jsx            # School & club footer with emergency hotline
│   ├── ShieldLogo.jsx        # SVG cyber shield logo with glowing circuit nodes
│   ├── GlitchText.jsx        # Cyber typewriter/glitch headline effect
│   ├── Counter.jsx           # Animated number counter
│   ├── ScamQuiz.jsx          # Interactive Spot-the-Scam game
│   └── PhishingInspector.jsx # URL anatomy dissecting game
├── data/                # Easy-to-edit content files
│   ├── threatsData.js        # Threat definitions, red flags, & defense steps
│   ├── staySafeData.js       # Prevention habits & red flag checklist
│   ├── timelineData.js       # 5-step incident response sequence
│   ├── pledgeData.js         # MHA / I4C official pledge text
│   ├── resourcesData.js      # Verified portals and helplines
│   ├── aboutData.js          # Mission, Cyber Jagrookta Diwas, & placeholders
│   ├── quizData.js           # Realistic scenarios for the quiz simulator
│   └── linksData.js          # URLs for the phishing inspector game
├── pages/               # Top-level page views
│   ├── Home.jsx
│   ├── Threats.jsx
│   ├── StaySafe.jsx
│   ├── IncidentResponse.jsx
│   ├── Pledge.jsx
│   ├── PracticeZone.jsx
│   ├── Resources.jsx
│   └── About.jsx
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher recommended)
- npm or yarn

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally in Development Mode
```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or the port Vite provides in the terminal).

### 3. Build for Production
```bash
npm run build
```
This generates an optimized static bundle in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment Instructions

### Deploy to Vercel
1. Push this repository to GitHub.
2. In [Vercel](https://vercel.com), import the repository.
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Click **Deploy**.

### Deploy to Netlify
1. Push this repository to GitHub.
2. In [Netlify](https://netlify.com), select **Add new site** > **Import an existing project**.
3. Build Command: `npm run build`
4. Publish Directory: `dist`
5. Click **Deploy Site**.

### Deploy to GitHub Pages
1. In `vite.config.js`, set `base: './'` (already configured to work universally).
2. Run `npm run build`.
3. Deploy the `dist` folder to your `gh-pages` branch or configure GitHub Pages in repository settings to build via GitHub Actions.

---

## 🇮🇳 Credits & Attribution

- **School:** Hamdard Public School
- **Club:** Cyber Shield HPS
- **Cyber Safety Pledge:** Formulated by the **Ministry of Home Affairs / Indian Cyber Crime Coordination Centre (I4C)** ([https://i4c.mha.gov.in](https://i4c.mha.gov.in))
- **National Cybercrime Helpline:** **1930**
- **National Cybercrime Reporting Portal:** [https://cybercrime.gov.in](https://cybercrime.gov.in)
- **Awareness Social Handle:** [@Cyberdost](https://x.com/Cyberdost)

---

*Made with pride by students of Hamdard Public School.*

