export const HABIT_CATEGORIES = [
  {
    id: 'passwords-2fa',
    title: 'Passwords & 2FA',
    icon: 'KeyRound',
    tagline: 'Lock down your perimeter with unbreakable secrets',
    tips: [
      {
        title: 'Craft Long Passphrases, Not Complex Strings',
        detail: 'Instead of hard-to-remember "P@$$w0rd1", choose four random memorable words like "BlueTigerMoonRocket2026!". Passphrase length exponentially beats short complexity against brute-force attacks.',
        action: 'Aim for at least 14 characters on all primary accounts.',
      },
      {
        title: 'Turn On Two-Factor Authentication (2FA) Everywhere',
        detail: 'Even if an attacker cracks your password, 2FA prevents unauthorized sign-ins. Whenever possible, use an Authenticator app (like Google Authenticator, Aegis, or Bitwarden) over SMS.',
        action: 'Enable 2FA immediately on Gmail, Instagram, WhatsApp, and Discord.',
      },
      {
        title: 'Use a Trusted Password Manager',
        detail: 'Do not store passwords in notes apps or web browser memories on shared computers. Open-source or trusted password managers generate and auto-fill unique passwords for every site.',
        action: 'Recommended: Bitwarden (free, audited, cross-platform).',
      },
      {
        title: 'Zero Password Reuse across Platforms',
        detail: 'Never reuse your main school portal or email password on third-party gaming forums, Discord bots, or shopping portals. When one leaks, all become compromised.',
        action: 'Treat your primary email account like the master vault key.',
      },
    ],
  },
  {
    id: 'otp-pin-discipline',
    title: 'OTP & PIN Discipline',
    icon: 'ShieldCheck',
    tagline: 'Your verification codes are personal — never reveal them',
    tips: [
      {
        title: 'OTP = One-Time Permission to Empty Accounts',
        detail: 'No legitimate school teacher, bank executive, gaming admin, or delivery agent will ever ask you to read back an OTP over a call or text message.',
        action: 'Never share OTPs with anyone, no matter how urgent their tone sounds.',
      },
      {
        title: 'UPI PIN is Exclusively for DEBITING Money',
        detail: 'To receive a scholarship, prize, refund, or peer transfer, you DO NOT need to enter a PIN or scan a merchant QR code. Money enters your account automatically via your VPA.',
        action: 'If prompted for UPI PIN during a "receive" transaction, abort instantly.',
      },
      {
        title: 'Beware of Screen-Sharing Requests',
        detail: 'Scammers frequently ask students or parents to install AnyDesk, TeamViewer, or QuickSupport under the pretense of "remote tech support". This exposes OTP popups in real-time.',
        action: 'Never install remote desktop apps at the instruction of an unknown caller.',
      },
    ],
  },
  {
    id: 'apps-downloads',
    title: 'Apps & Store Hygiene',
    icon: 'DownloadCloud',
    tagline: 'Guard what runs on your phone and laptop',
    tips: [
      {
        title: 'Official Stores Only',
        detail: 'Sideloading APK files from websites, WhatsApp forwards, or Telegram channels bypasses the security checks of Google Play and Apple App Store.',
        action: 'Keep "Install unknown apps" turned OFF in your Android system settings.',
      },
      {
        title: 'Audit App Permissions Strictly',
        detail: 'Why does a simple flashlight, calculator, or wallpaper app need permission to read your contacts, SMS messages, microphone, or precise location?',
        action: 'Review app permissions under Settings > Privacy > Permission Manager.',
      },
      {
        title: 'Avoid "Modded" Games & Cracks',
        detail: 'Game hacks promising "unlimited coins" or cracked desktop software are the #1 distribution channel for info-stealers like RedLine and LummaC2 targeting students.',
        action: 'Play fair and stick to genuine game releases.',
      },
    ],
  },
  {
    id: 'social-privacy',
    title: 'Social & Privacy',
    icon: 'EyeOff',
    tagline: 'Curate your digital footprint and protect your identity',
    tips: [
      {
        title: 'Switch Personal Profiles to Private',
        detail: 'Keep your personal Instagram, Snapchat, and social profiles visible only to approved friends. Public accounts expose photos to deepfake and imposter abuse.',
        action: 'Review your follower list and remove people you do not personally know in real life.',
      },
      {
        title: 'Think Before You Share (Digital Permanence)',
        detail: 'Once a picture, screenshot, or video is sent — even on "disappearing" mode — the recipient can record or photograph it from another device. Nothing online is truly temporary.',
        action: 'Never post or share content you wouldn\'t want family or school teachers to see.',
      },
      {
        title: 'Avoid Oversharing Location & Identity Assets',
        detail: 'Avoid posting photos displaying your school uniform logo, boarding passes, Aadhaar cards, home address landmarks, or live travel itineraries.',
        action: 'Disable location tags (EXIF data) when sharing photos online.',
      },
    ],
  },
  {
    id: 'wifi-public-devices',
    title: 'Public Wi-Fi & Devices',
    icon: 'WifiOff',
    tagline: 'Stay vigilant on public routers and school lab machines',
    tips: [
      {
        title: 'Untrusted Public Hotspots',
        detail: 'Free Wi-Fi at cafes, railway stations, or parks can be intercepted by "Evil Twin" hotspots that log unencrypted traffic or push fake updates.',
        action: 'Avoid banking or entering critical passwords over public open Wi-Fi.',
      },
      {
        title: 'Log Out of School & Lab Computers',
        detail: 'When using computers in the Hamdard Public School computer lab or library, always click "Log Out" and never check "Remember me on this computer".',
        action: 'Use Incognito/Private browsing windows when using shared workstations.',
      },
      {
        title: 'Never Plug in Unverified USB Flash Drives',
        detail: 'Found a USB flash drive on the ground or in the corridor? Do NOT plug it into your laptop. Attackers drop malicious drives hoping curiosity will infect systems.',
        action: 'Hand lost storage devices directly to the school administrative or IT office.',
      },
    ],
  },
];

export const RED_FLAG_CHECKLIST = [
  {
    flag: 'Extreme Urgency or Panic Inducement',
    meaning: 'Saying your account will close in 30 minutes, or threatening police arrest immediately. Scammers rush you so you don\'t have time to think.',
  },
  {
    flag: 'Requests to Keep Things a Secret',
    meaning: '"Don\'t tell your parents", "Don\'t consult teachers", or "Stay alone in your room while on this call". Legitimate authorities never demand secrecy.',
  },
  {
    flag: 'Asking for OTP, Passwords, or UPI PIN',
    meaning: 'Any caller or text asking for a 4/6-digit code or instructing you to type your UPI PIN to receive money.',
  },
  {
    flag: 'Grammar Errors, Typos & Strange Domains',
    meaning: 'Websites ending in strange suffixes like `.xyz`, `.top`, `.tk` or email addresses like `support@bank-security-india.net`.',
  },
  {
    flag: 'Too Good To Be True Rewards',
    meaning: 'Winning lottery tickets you never bought, free high-end smartphones, or earning thousands for liking YouTube videos.',
  },
  {
    flag: 'Demands for Remote Screen Sharing',
    meaning: 'Asking you to download AnyDesk, TeamViewer, or QuickSupport to "solve a KYC problem".',
  },
  {
    flag: 'Payment Demanded via Gift Cards or Crypto',
    meaning: 'Asking to settle fines or fees through Google Play gift cards, Amazon vouchers, or USDT transfers.',
  },
];

