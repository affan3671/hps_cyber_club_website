export interface ClubInfo {
  name: string;
  subname: string;
  school: string;
  tagline: string;
  established: string;
  classification: string;
  helpline: string;
  portal: string;
  mission: string;
}

export const CLUB_INFO: ClubInfo = {
  name: "CYBER SHIELD HPS",
  subname: "HAMDARD PUBLIC SCHOOL // CYBER DEFENSE WING",
  school: "Hamdard Public School, Sangam Vihar, New Delhi",
  tagline: "Stop. Think. Then Take Action.",
  established: "2024",
  classification: "MHA-I4C / CBSE COMPLIANT CYBER CELL",
  helpline: "1930",
  portal: "cybercrime.gov.in",
  mission:
    "To forge an impenetrable culture of digital hygiene, defensive skepticism, and ethical cyber vigilance across all student cadres. We translate complex threat vectors into actionable countermeasures.",
};

export interface IncidentStep {
  step: number;
  code: string;
  title: string;
  subcode: string;
  category: string;
  timeWindow: string;
  statusText: string;
  description: string;
  protocolAction: string;
  redFlags: string[];
  isCritical?: boolean;
}

export const INCIDENT_STEPS: IncidentStep[] = [
  {
    step: 1,
    code: "PHASE_01 // CONTAIN",
    title: "Immediate Airgap & Evidence Lock",
    subcode: "T+00:00:00 [CRITICAL REACTION]",
    category: "CONTAINMENT",
    timeWindow: "0 - 5 Minutes",
    statusText: "DISCONNECT_PERIMETER",
    description:
      "Do not panic. Cyber adversaries engineer artificial urgency and emotional panic to override rational judgment. Immediately cut all network interfaces: disable Wi-Fi, cellular data, Bluetooth, and unplug Ethernet. If an unverified app was sideloaded, power down the device or engage airplane mode immediately.",
    protocolAction:
      "CRITICAL: Do NOT delete chat logs, WhatsApp history, or call transcripts. Capture uncropped screenshots displaying exact timestamps, caller IDs, UPI transaction IDs, and URL address bars.",
    redFlags: [
      "Aggressive countdown timers forcing hasty decisions",
      "Demands to keep incident hidden from parents or teachers",
      "Immediate deletion requests from the adversary",
    ],
    isCritical: true,
  },
  {
    step: 2,
    code: "PHASE_02 // INTERCEPT",
    title: "Dial Helpline 1930 [The Golden Hour]",
    subcode: "T+00:15:00 [FINANCIAL INTERCEPTION]",
    category: "RECOVERY_SYSTEM",
    timeWindow: "< 2 Hours [MANDATORY]",
    statusText: "I4C_GATEWAY_TRIGGER",
    description:
      "If funds, UPI transfers, or credit transactions were unauthorizedly initiated, dial National Helpline 1930 instantly. This connects directly to the Indian Cyber Crime Coordination Centre (I4C) Citizen Financial Cyber Fraud Reporting System. Reporting within 120 minutes maximizes inter-bank API holds to freeze funds before mule account withdrawal.",
    protocolAction:
      "Dial 1930 directly from any phone. Have your 12-digit bank account number, UPI reference ID (UTR), debit card last 4 digits, and transaction SMS timestamp ready for dispatch.",
    redFlags: [
      "Reverse UPI requests masquerading as credit vouchers",
      "QR code scanning requested to 'receive' scholarship or prize",
      "Third-party remote screen apps (AnyDesk, RustDesk, QuickSupport)",
    ],
    isCritical: true,
  },
  {
    step: 3,
    code: "PHASE_03 // ESCALATE",
    title: "National Portal Acknowledgment",
    subcode: "T+01:00:00 [STATUTORY FILING]",
    category: "LEGAL_DEFENSE",
    timeWindow: "Within 24 Hours",
    statusText: "MHA_POLICE_DISPATCH",
    description:
      "Formalize the incident record via the Ministry of Home Affairs official portal at cybercrime.gov.in. This issues a cryptographically tracked National Cybercrime Complaint Acknowledgment Number for formal state police cyber cell jurisdiction.",
    protocolAction:
      "Upload high-resolution screenshot evidence, bank UTR slips, and caller logs to cybercrime.gov.in. Dedicated priority pipelines exist for minors and women regarding online harassment.",
    redFlags: [
      "Any caller claiming 'Digital Arrest' via WhatsApp or Skype",
      "Claims of CBI/ED warrants without physical local summons",
      "Demands for 'verification security deposits' to clear legal charges",
    ],
  },
  {
    step: 4,
    code: "PHASE_04 // MOBILIZE",
    title: "School Mentor & Parental Shield",
    subcode: "T+02:00:00 [LOCAL SENTINEL NOTIFICATION]",
    category: "ADULT_ESCORT",
    timeWindow: "Immediate",
    statusText: "ZERO_BLAME_ESCORT",
    description:
      "Adversaries rely heavily on student shame and fear of reprisal. Remember: you are the target of specialized syndicated crime, not at fault. Immediately notify the HPS Computer Science Department, Club Mentor Mustafa Azizi, or parents to activate institutional defense backing.",
    protocolAction:
      "Brief your parents or teacher mentor openly. The club maintains a strict Zero-Victim-Blaming ethical creed and provides immediate counseling and escalation support.",
    redFlags: [
      "Coercive extortion threatening to expose doctored imagery",
      "Blackmail targeting school peers or confession pages",
      "Isolation instructions prohibiting communication with mentors",
    ],
  },
  {
    step: 5,
    code: "PHASE_05 // HARDEN",
    title: "Perimeter Quarantine & Credential Revocation",
    subcode: "T+04:00:00 [SURFACE SANITIZATION]",
    category: "PERIMETER_DEFENSE",
    timeWindow: "Post-Incident",
    statusText: "2FA_TOKEN_PURGE",
    description:
      "From an isolated, known-clean device, execute global session revocation across Google, Apple ID, Microsoft, Discord, and school portals. Purge active OAuth tokens, verify backup emails and phone numbers, and migrate all services to hardware/app-based TOTP 2FA.",
    protocolAction:
      "Enforce 16+ character passphrases, rotate compromised banking PINs via physical branch or official bank app, and install Google Play Protect / certified endpoint hygiene scans.",
    redFlags: [
      "Unfamiliar linked recovery devices in Google Account security tab",
      "SMS-based 2FA vulnerable to SIM swap attacks",
      "Persistent third-party browser extensions with full DOM access",
    ],
  },
];

export interface ThreatItem {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  category: "Financial Scams" | "Identity & Social" | "Malware & Devices" | "Account Security";
  severity: "CRITICAL" | "HIGH" | "ELEVATED";
  vector: string;
  summary: string;
  technicalMechanics: string;
  redFlags: string[];
  countermeasures: string[];
}

export const THREAT_MATRIX: ThreatItem[] = [
  {
    id: "upi-qr-fraud",
    code: "VEC_01 // FIN",
    title: "UPI & QR Code Reversal Fraud",
    subtitle: "Reverse Collect Requests, QR Traps & Fake Merchant Credits",
    category: "Financial Scams",
    severity: "CRITICAL",
    vector: "Social Engineering / Financial Gateway Manipulation",
    summary:
      "Adversaries deceive students and parents into typing their secret UPI PIN or scanning QR codes under the fraudulent premise of 'receiving cash prizes, scholarship funds, or OLX buyer deposits.'",
    technicalMechanics:
      "UPI protocol architecture dictates that entering a PIN or scanning a dynamic merchant QR is an authorization exclusively for DEBITING currency from the account. Money NEVER requires a PIN to enter an account via VPA.",
    redFlags: [
      "Any instruction to 'Scan QR code to credit funds to your account'",
      "Callers asking to enter UPI PIN to receive money",
      "Unexpected 'Collect Request' notifications on PhonePe, GPay, or Paytm",
      "Screen-sharing requests via AnyDesk or TeamViewer during payment troubleshooting",
    ],
    countermeasures: [
      "GOLDEN INVARIANT: You NEVER input a UPI PIN to receive incoming money.",
      "If money was debited unauthorizedly, call Helpline 1930 immediately within the 2-hour Golden Hour window.",
      "Immediately freeze UPI VPAs and debit cards via official banking apps.",
    ],
  },
  {
    id: "digital-arrest-cbi",
    code: "VEC_02 // EXT",
    title: "Digital Arrest & Fake Police Extortion",
    subtitle: "Impersonation of CBI, Narcotics Bureau, Mumbai Police & Customs",
    category: "Financial Scams",
    severity: "CRITICAL",
    vector: "High-Stress Psychological Extortion via VoIP / Skype",
    summary:
      "Syndicates launch aggressive video calls claiming student Aadhaar credentials or SIM cards were discovered in intercepted contraband or money laundering cartels, declaring 'Digital Arrest'.",
    technicalMechanics:
      "Per the Ministry of Home Affairs and Supreme Court of India: 'Digital Arrest' DOES NOT EXIST under Indian law or the Bharatiya Nagarik Suraksha Sanhita (BNSS). Law enforcement conducts arrests through physical warrants served in person.",
    redFlags: [
      "Callers demanding you remain on continuous Skype/WhatsApp video call",
      "Threats of immediate imprisonment without physical jurisdictional summons",
      "Demands to wire security deposits to 'Supreme Court verification escrow accounts'",
      "Synthetic uniforms, studio background seals, and low-res fake IDs",
    ],
    countermeasures: [
      "Terminate the call immediately. Indian police NEVER interrogate citizens via Skype or WhatsApp.",
      "Alert parents and school authorities without delay.",
      "Report the suspect telephone number to Sanchar Saathi's Chakshu portal and Helpline 1930.",
    ],
  },
  {
    id: "subdomain-typosquat-phish",
    code: "VEC_03 // IDN",
    title: "Subdomain Spoofing & Phishing Clones",
    subtitle: "Lookalike URLs, Punycode Traps & Credential Harvesting",
    category: "Identity & Social",
    severity: "HIGH",
    vector: "Domain Deception / Adversary-in-the-Middle (AiTM)",
    summary:
      "Deceptive portals mimicking Google Workspace, Instagram, Steam, or school portals to intercept user logins, session cookies, and 2FA tokens.",
    technicalMechanics:
      "Adversaries abuse subdomains (e.g. `accounts.google.com.attacker-domain.net`) or typosquatting (`instagraam.com`) to visually trick users who inspect only the beginning of a URL.",
    redFlags: [
      "URL host ending in suspicious TLDs (`.top`, `.xyz`, `.tk`, `.ru`)",
      "Artificial urgency: 'Account terminated within 24 hours without login'",
      "Insecure raw IP addresses (e.g. `http://192.168.x.x:8080/portal`)",
      "Missing EV/DV certificate domain mismatch in browser inspector",
    ],
    countermeasures: [
      "Anchor inspection to the text immediately preceding the first single slash `/`.",
      "Never click auth links in unexpected SMS; manually type base domain in a new tab.",
      "Use hardware security keys (FIDO2/WebAuthn) immune to credential harvesting.",
    ],
  },
  {
    id: "trojan-game-apk",
    code: "VEC_04 // MAL",
    title: "Trojanized Game Mods & Sideloaded APKs",
    subtitle: "Free Currency Cheats, Pirated Utilities & Keyloggers",
    category: "Malware & Devices",
    severity: "HIGH",
    vector: "Sideloaded Malware / Android Accessibility Exploitation",
    summary:
      "Sideloaded Android APKs (Free Fire diamonds, BGMI cheats, Spotify mods) bundled with remote access trojans (RATs) granting full camera, SMS, and screen overlay control.",
    technicalMechanics:
      "Upon installation, malicious APKs request Android Accessibility Services, Notification Listener, and SMS permissions. This enables silent background interception of 2FA OTPs without root.",
    redFlags: [
      "Downloading installer files from Telegram channels or file hosting links",
      "App requests Accessibility or Device Admin permissions upon first launch",
      "App icon disappears from application launcher post-install",
      "Sudden background battery drain and elevated cellular data usage",
    ],
    countermeasures: [
      "Never enable 'Install Unknown Apps' on Android devices.",
      "Rely exclusively on Google Play Store with Play Protect enabled.",
      "Inspect app permissions: casual games never require SMS or Accessibility rights.",
    ],
  },
  {
    id: "cyberbullying-doxxing",
    code: "VEC_05 // SOC",
    title: "Cyberbullying, Doxxing & Deepfake Slander",
    subtitle: "Anonymous Confession Handles, AI Image Manipulation & Trolling",
    category: "Identity & Social",
    severity: "HIGH",
    vector: "Targeted Peer Harassment & Digital Blackmail",
    summary:
      "Malicious distribution of altered private imagery, unauthorized doxxing of student home addresses, or organized harassment via unmoderated confession channels.",
    technicalMechanics:
      "Adversaries weaponize generative AI tools to create non-consensual deepfakes, combined with social engineering to solicit compromising media for subsequent peer extortion.",
    redFlags: [
      "Anonymous Instagram/Snapchat confession pages referencing school students",
      "Extortion messages threatening to circulate edited pictures to contacts",
      "Demands for gift cards or crypto in exchange for taking down defamatory posts",
    ],
    countermeasures: [
      "Never retaliate or delete evidence. Take unedited timestamped screenshots immediately.",
      "Confide directly in Club Mentor Mustafa Azizi, school leadership, or counselor.",
      "File a formal report on cybercrime.gov.in under the specialized Women/Child Safety portal.",
      "Dial Childline 1098 or 1930 for immediate statutory intervention.",
    ],
  },
  {
    id: "credential-stuffing",
    code: "VEC_06 // SEC",
    title: "Credential Stuffing & Reused Passwords",
    subtitle: "Cross-Platform Chain Takeovers & Leaked Hash Databases",
    category: "Account Security",
    severity: "ELEVATED",
    vector: "Automated Botnet Brute-Force via Breach Dumps",
    summary:
      "Using identical passwords across minor gaming forums, Discord bots, and primary personal/school email accounts, leading to cascading perimeter compromise.",
    technicalMechanics:
      "When a gaming forum is compromised and hashes dumped, automated botnets blast those email-password pairs against Google, Instagram, Steam, and banking portals within seconds.",
    redFlags: [
      "Receiving unprompted 'Password reset request' notifications",
      "Security alert: 'New login from unknown device / IP in distant region'",
      "Friends informing you that your account is sending spam links in group chats",
    ],
    countermeasures: [
      "Deploy unique 16+ character passphrases using a trusted manager (Bitwarden).",
      "Audit email addresses regularly on haveibeenpwned.com.",
      "Enforce app-based authenticator 2FA (Google Authenticator, Aegis) across all master logins.",
    ],
  },
];

export interface PhishingScenario {
  id: string;
  channel: "SMS" | "WhatsApp" | "Email" | "Voice Call";
  sender: string;
  timestamp: string;
  preview: string;
  content: string;
  isScam: boolean;
  difficulty: "NOVICE" | "INTERMEDIATE" | "ADVANCED";
  explanation: string;
  clues: string[];
}

export const SCAM_SCENARIOS: PhishingScenario[] = [
  {
    id: "sms-post",
    channel: "SMS",
    sender: "VM-INDPOST",
    timestamp: "14:14 HRS // TODAY",
    preview: "India Post: Your package #IN982341 delivery failed...",
    content:
      "India Post: Your package #IN982341 cannot be delivered due to incomplete house number. Please update your address within 12 hours at https://indiapost-parcel-delivery.top/update or parcel will be returned.",
    isScam: true,
    difficulty: "NOVICE",
    explanation:
      "SCAM DETECTED. India Post operates exclusively under the `.gov.in` domain hierarchy (`indiapost.gov.in`). Domains ending in `.top` or third-party hostings are fraudulent credential/payment harvesters engineering false 12-hour urgency.",
    clues: [
      "Spoofed domain `indiapost-parcel-delivery.top` instead of `.gov.in`",
      "Artificial 12-hour panic urgency window",
      "Demands credit card or address verification for a package you never ordered",
    ],
  },
  {
    id: "wa-friend",
    channel: "WhatsApp",
    sender: "+91 98765 XXXXX [UNKNOWN SENDER]",
    timestamp: "11:45 HRS // YESTERDAY",
    preview: "Hey bro! I am stuck near metro station with 2% battery...",
    content:
      "Hey bro! I am stuck outside near the metro station and my battery is 2%. My UPI app is locked. Can you please scan this QR code or send ₹1,500 to this UPI ID right now? I will give you cash in school tomorrow morning! Plz hurry!!",
    isScam: true,
    difficulty: "INTERMEDIATE",
    explanation:
      "SCAM DETECTED. Classic emergency peer impersonation attack. Attackers harvest profile photos from social media and contact friends from unknown numbers claiming emergency UPI lockouts.",
    clues: [
      "Originates from an unverified cellular number claiming to be a classmate",
      "High emotional distress & panic framing ('battery at 2%', 'plz hurry')",
      "Demands instant financial transfer without direct voice verification",
    ],
  },
  {
    id: "email-google",
    channel: "Email",
    sender: "no-reply@accounts.google.com",
    timestamp: "08:30 HRS // TODAY",
    preview: "Security alert for your linked Google Account",
    content:
      "A new sign-in was detected on a Windows PC in Hyderabad. If this was you, you do not need to do anything. If this was not you, review your recent activity at your official account dashboard (myaccount.google.com).",
    isScam: false,
    difficulty: "INTERMEDIATE",
    explanation:
      "LEGITIMATE NOTICE. Sender domain is authenticated via DKIM/SPF from `accounts.google.com`. The notice contains no artificial deadline countdown, solicits no passwords or OTPs, and guides the user to inspect their dashboard directly at `myaccount.google.com`.",
    clues: [
      "Authenticated Google corporate domain with verified SPF/DKIM records",
      "Zero requests for OTPs, passwords, or immediate payments",
      "Advises navigation to standard canonical domain without deceptive redirects",
    ],
  },
  {
    id: "call-digital-arrest",
    channel: "Voice Call",
    sender: "+91 11-XXXX-XXXX [CALLER: 'INSPECTOR VERMA - CRIME BRANCH']",
    timestamp: "10:15 HRS // TODAY",
    preview: "Audio interrogation: 'Your Aadhaar is flagged in narcotics...'",
    content:
      "'This is Inspector Verma from Crime Branch / CBI. A consignment seized at Mumbai Airport containing 5 fake passports and contraband is linked to your Aadhaar card. A warrant is issued. Do not disconnect this call or tell anyone. You must come on Skype video for Digital Arrest verification right now.'",
    isScam: true,
    difficulty: "NOVICE",
    explanation:
      "SCAM DETECTED. Digital Arrest is a 100% fabricated criminal extortion vector. Indian law enforcement, CBI, and judiciary NEVER execute arrests, video interrogations, or financial escrows via Skype or WhatsApp.",
    clues: [
      "Claims 'Digital Arrest'—a non-existent construct under Indian jurisprudence",
      "Strict orders forbidding communication with parents, teachers, or local police",
      "High-pressure extortion aimed at extracting immediate financial transfers",
    ],
  },
];

export interface PhishingLink {
  id: string;
  displayUrl: string;
  isSafe: boolean;
  breakdown: {
    protocol: string;
    subdomain: string;
    actualDomain: string;
    tld: string;
    path: string;
  };
  vectorName: string;
  explanation: string;
  forensicClue: string;
}

export const PHISHING_LINKS: PhishingLink[] = [
  {
    id: "link-1",
    displayUrl: "https://accounts.google.com.security-verify.net/signin/v2",
    isSafe: false,
    breakdown: {
      protocol: "https://",
      subdomain: "accounts.google.com",
      actualDomain: "security-verify.net",
      tld: ".net",
      path: "/signin/v2",
    },
    vectorName: "Subdomain Spoofing",
    explanation:
      "The actual canonical domain is `security-verify.net`, NOT `google.com`! The adversary prepended `accounts.google.com` as a fraudulent subdomain to deceive users who inspect only the start of the address.",
    forensicClue: "Always locate the first single slash `/`; the base domain is immediately to its left.",
  },
  {
    id: "link-2",
    displayUrl: "https://cybercrime.gov.in/Webform/Crime_AuthoLogin.aspx",
    isSafe: true,
    breakdown: {
      protocol: "https://",
      subdomain: "none",
      actualDomain: "cybercrime.gov.in",
      tld: ".gov.in",
      path: "/Webform/Crime_AuthoLogin.aspx",
    },
    vectorName: "Official Government Sovereign Domain",
    explanation:
      "VERIFIED GENUINE. The base domain ends strictly in `.gov.in`. In India, `.gov.in` is a sovereign restricted namespace reserved exclusively for verified state and federal government authorities.",
    forensicClue: "The `.gov.in` sovereign TLD cannot be acquired by unauthorized private entities.",
  },
  {
    id: "link-3",
    displayUrl: "https://www.instagraam-security-centre.com/login",
    isSafe: false,
    breakdown: {
      protocol: "https://",
      subdomain: "www",
      actualDomain: "instagraam-security-centre.com",
      tld: ".com",
      path: "/login",
    },
    vectorName: "Typosquatting & Homoglyph Deception",
    explanation:
      "Notice the deliberate misspelling: `instagraam` contains a duplicate letter 'a'. Adversaries register close variations of trademarked domains to catch hurried keystrokes and skim readers.",
    forensicClue: "Meticulously scrutinize character sequences in corporate brand names.",
  },
  {
    id: "link-4",
    displayUrl: "http://192.168.1.104:8080/sbi-online-banking/update-pan.html",
    isSafe: false,
    breakdown: {
      protocol: "http:// [INSECURE]",
      subdomain: "none",
      actualDomain: "192.168.1.104 [RAW IP]",
      tld: "None [PORT 8080]",
      path: "/sbi-online-banking/update-pan.html",
    },
    vectorName: "Raw IP Exposure & Insecure Cleartext Protocol",
    explanation:
      "CRITICAL THREAT. The URL relies on plaintext `http://` without TLS encryption and points to a raw IP address over a non-standard port `8080`. No legitimate banking institution operates on raw IP endpoints.",
    forensicClue: "Never enter credentials or PII into raw numeric IP addresses or unencrypted HTTP connections.",
  },
  {
    id: "link-5",
    displayUrl: "https://store.steampowered.com/app/730/CounterStrike_2/",
    isSafe: true,
    breakdown: {
      protocol: "https://",
      subdomain: "store",
      actualDomain: "steampowered.com",
      tld: ".com",
      path: "/app/730/CounterStrike_2/",
    },
    vectorName: "Canonical Platform Endpoint",
    explanation:
      "VERIFIED GENUINE. The primary registered domain is `steampowered.com`, Valve's authentic digital distribution domain, utilizing a standard `store` subdomain and valid HTTPS certificate.",
    forensicClue: "Official digital ecosystems deploy clean, registered subdomains over valid TLS.",
  },
];

export interface LeadershipMember {
  id: string;
  role: string;
  code: string;
  name: string;
  department: string;
  clearanceLevel: string;
  status: "ACTIVE_SENTINEL" | "FACULTY_MENTOR" | "COUNCIL_LEAD";
  bio: string;
  specialization: string;
}

export const LEADERSHIP_ROSTER: LeadershipMember[] = [
  {
    id: "faculty-01",
    role: "TEACHER COORDINATOR / FACULTY MENTOR",
    code: "FAC_COORD // CS_IT",
    name: "MUSTAFA AZIZI",
    department: "Department of Computer Science & Information Technology",
    clearanceLevel: "LEVEL_05 [PATRONAGE]",
    status: "FACULTY_MENTOR",
    bio: "Senior CS/IT faculty orchestrating institutional defense policies, Cyber Jagrookta Diwas homeroom sessions, and direct liaison with CBSE and Ministry cyber advisories.",
    specialization: "Institutional Cyber Policy, Network Defense, Student Mentorship",
  },
  {
    id: "student-01",
    role: "STUDENT PRESIDENT (CLUB HEAD)",
    code: "EXEC_01 // PRES",
    name: "PRESIDENT_SENTINEL",
    department: "Class XII (Computer Science / Advanced IT Stream)",
    clearanceLevel: "LEVEL_04 [STUDENT_COMMAND]",
    status: "COUNCIL_LEAD",
    bio: "Chief student spokesperson directing Cyber Shield operations, presiding over school-wide assembly addresses, incident triage, and cross-wing technical execution.",
    specialization: "Incident Triage, Assembly Briefings, Strategic Defense",
  },
  {
    id: "student-02",
    role: "STUDENT VICE-PRESIDENT (STUDENT VC)",
    code: "EXEC_02 // VC",
    name: "VICE_PRESIDENT_SENTINEL",
    department: "Class XI (Senior Wing)",
    clearanceLevel: "LEVEL_04 [OPERATIONS]",
    status: "COUNCIL_LEAD",
    bio: "Directs internal technical workflows, coordinates middle wing peer sentinels (Grades VI-X), and prepares tactical agendas for monthly Cyber Jagrookta Diwas.",
    specialization: "Peer Sentinel Network, Defense Workflows, CJD Scheduling",
  },
  {
    id: "student-03",
    role: "GENERAL SECRETARY",
    code: "EXEC_03 // SEC",
    name: "SECRETARY_SENTINEL",
    department: "Class XI / XII",
    clearanceLevel: "LEVEL_03 [DOCUMENTATION]",
    status: "ACTIVE_SENTINEL",
    bio: "Maintains formal club archives, incident registers, official school circular dispatches, and statutory records for school administration archives.",
    specialization: "Statutory Documentation, Incident Logs, Administration Liaison",
  },
  {
    id: "student-04",
    role: "TECHNICAL & WEB DEFENSE LEAD",
    code: "TECH_01 // ARCH",
    name: "TECH_LEAD_SENTINEL",
    department: "Class X / XI / XII",
    clearanceLevel: "LEVEL_04 [TECHNICAL]",
    status: "ACTIVE_SENTINEL",
    bio: "Engineers club digital tooling, non-tracking scam simulators, CTF challenge deployments, and static defense web architectures.",
    specialization: "Zero-Tracking Web Architectures, Sandbox Engineering, CTF Platforms",
  },
  {
    id: "student-05",
    role: "CYBER JAGROOKTA DIWAS (CJD) LEAD",
    code: "CJD_01 // DISPATCH",
    name: "CJD_COORD_SENTINEL",
    department: "Class XI",
    clearanceLevel: "LEVEL_03 [AWARENESS]",
    status: "ACTIVE_SENTINEL",
    bio: "Curates monthly MHA/CBSE homeroom defense modules, live scam simulation debriefs, and interactive Q&A sessions across all grade sections.",
    specialization: "Peer Education, MHA/CBSE Curricula, Interactive Simulations",
  },
];

export interface PledgeRule {
  id: string;
  code: string;
  rule: string;
  technicalReason: string;
}

export const PLEDGE_RULES: PledgeRule[] = [
  {
    id: "rule-1",
    code: "PLG_01",
    rule: "I will install mobile software and applications exclusively from official sovereign stores (Google Play, Apple App Store).",
    technicalReason: "Blocks trojanized APKs, rogue sideloaded accessibility hooks, and background keyloggers.",
  },
  {
    id: "rule-2",
    code: "PLG_02",
    rule: "I will rigorously verify URLs and sender credentials before trusting links or promotional claims.",
    technicalReason: "Neutralizes subdomain spoofing, homoglyph typosquatting, and malicious credential harvesters.",
  },
  {
    id: "rule-3",
    code: "PLG_03",
    rule: "I will never disclose One-Time Passwords (OTPs) or input UPI PINs to 'receive' money or prizes.",
    technicalReason: "Inviolable principle: UPI PINs are exclusively for debits, and OTPs are zero-trust private tokens.",
  },
  {
    id: "rule-4",
    code: "PLG_04",
    rule: "I reject 'Digital Arrest' extortion and will immediately disconnect and report coercive video calls.",
    technicalReason: "Recognizes that Digital Arrest is non-existent in Indian jurisprudence and constitutes extortion.",
  },
  {
    id: "rule-5",
    code: "PLG_05",
    rule: "I enforce the core doctrine: 'Stop. Think. Then Take Action.' before acting on any high-pressure prompt.",
    technicalReason: "Deliberate latency breaks the psychological urgency loop engineered by social engineering syndicates.",
  },
  {
    id: "rule-6",
    code: "PLG_06",
    rule: "If targeted by cybercrime, I will dial National Helpline 1930 within the 2-Hour Golden Hour window.",
    technicalReason: "Triggers the I4C automated banking interlock to freeze stolen currency before mule extraction.",
  },
  {
    id: "rule-7",
    code: "PLG_07",
    rule: "I pledge absolute Defense-Only (White-Hat) integrity: zero misuse of tools, zero victim-blaming of peers.",
    technicalReason: "Upholds the ethical creed of Cyber Shield HPS and safeguards the integrity of the student body.",
  },
];

export interface ResourceLink {
  id: string;
  code: string;
  title: string;
  authority: string;
  badge: string;
  contactOrUrl: string;
  isEmergency?: boolean;
  description: string;
}

export const STATUTORY_RESOURCES: ResourceLink[] = [
  {
    id: "res-1930",
    code: "HOTLINE // 1930",
    title: "National Cybercrime Helpline 1930",
    authority: "Ministry of Home Affairs / I4C",
    badge: "24x7 TOLL-FREE // GOLDEN HOUR",
    contactOrUrl: "tel:1930",
    isEmergency: true,
    description: "Citizen Financial Cyber Fraud Reporting System. Interlocks directly with 250+ banking APIs to freeze stolen funds within 120 minutes.",
  },
  {
    id: "res-portal",
    code: "PORTAL // GOV.IN",
    title: "National Cyber Crime Reporting Portal",
    authority: "Government of India",
    badge: "STATUTORY FILING",
    contactOrUrl: "https://cybercrime.gov.in",
    description: "Official legal portal to lodge complaints with state cyber cells, featuring dedicated priority lanes for minors and child safety.",
  },
  {
    id: "res-i4c",
    code: "ACADEMY // I4C",
    title: "Indian Cyber Crime Coordination Centre (I4C)",
    authority: "Ministry of Home Affairs",
    badge: "RESEARCH & MODULES",
    contactOrUrl: "https://i4c.mha.gov.in",
    description: "National repository of free cyber hygiene publications, student security frameworks, and verified awareness circulars.",
  },
  {
    id: "res-chakshu",
    code: "CHAKSHU // TELECOM",
    title: "Chakshu Sanchar Saathi Portal",
    authority: "Department of Telecommunications (DoT)",
    badge: "NUMBER BLACKLISTING",
    contactOrUrl: "https://sancharsaathi.gov.in",
    description: "Citizen reporting portal for fraudulent calls, SMS spam, and malicious international VoIP numbers impersonating law enforcement.",
  },
  {
    id: "res-cyberdost",
    code: "INTEL // @CYBERDOST",
    title: "@Cyberdost Official Intelligence Feed",
    authority: "Ministry of Home Affairs",
    badge: "REAL-TIME ADVISORIES",
    contactOrUrl: "https://x.com/cyberdost",
    description: "Real-time dispatch of active malware APK signatures, UPI exploit warnings, and emerging cyber deception campaigns.",
  },
  {
    id: "res-childline",
    code: "HELPLINE // 1098",
    title: "Childline Emergency Support 1098",
    authority: "Ministry of Women and Child Development",
    badge: "EMERGENCY PEER ESCORT",
    contactOrUrl: "tel:1098",
    description: "Confidential 24x7 distress helpline offering immediate counseling, adult advocacy, and protection for students facing online abuse.",
  },
];

