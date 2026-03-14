# 🚀 Myanmar HRV Website — Setup Guide
## GitHub Pages + Firebase ဖြင့် Free Hosting

---

## 📋 Overview

| အပိုင်း | Service | ကုန်ကျစရိတ် |
|---------|---------|------------|
| Website Hosting | GitHub Pages | **အခမဲ့** |
| Database | Firebase Realtime DB | **အခမဲ့** (1GB) |
| Authentication | Firebase Auth | **အခမဲ့** |
| Domain | github.io subdomain | **အခမဲ့** |

---

## STEP 1: GitHub Account ဖွင့်

1. https://github.com/signup သို့ သွား
2. Account ဖွင့်ပါ (free plan ရေးရမည်)
3. New Repository ဖွင့် → **myanmar-hrv** ဟု နာမည်ပေး
4. **Public** ရေးပြီး **Create Repository** နှိပ်

---

## STEP 2: Firebase Project ဖွင့်

1. https://console.firebase.google.com သို့ သွား
2. **Add project** နှိပ်
3. Project name: **myanmar-hrv-docs**
4. Google Analytics: skip လုပ်ဖို့ ရပါသည်
5. Project ဖွင့်ပြီး:

### Realtime Database Setup
```
Firebase Console → Build → Realtime Database → Create Database
Location: asia-southeast1 (Singapore)
Start in TEST mode ရွေး (ကနဦး)
```

### Database Rules (Security)
```json
{
  "rules": {
    "events": {
      ".read": true,
      ".write": "auth != null"
    },
    "news": {
      ".read": true,
      ".write": "auth != null"
    },
    "stats": {
      ".read": true,
      ".write": "auth != null"
    }
  }
}
```

### Authentication Setup
```
Firebase Console → Build → Authentication → Get started
Sign-in method → Email/Password → Enable
Users → Add user → admin@yoursite.com + password
```

### Firebase Config ရယူနည်း
```
Project Settings (⚙️) → General → Your apps → Web app → </> ကို နှိပ်
App nickname: hrv-website
Config ကို ကူးယူပါ
```

---

## STEP 3: firebase-config.js ပြင်ဆင်

`firebase-config.js` ဖိုင်ကို ဖွင့်ပြီး Firebase ကပေးသော values ဖြင့် အစားထိုးပါ:

```javascript
export const FIREBASE_CONFIG = {
  apiKey: "AIzaSy...",            // ← ဤနေရာတွင် ဖြည့်ပါ
  authDomain: "myanmar-hrv-docs.firebaseapp.com",
  databaseURL: "https://myanmar-hrv-docs-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "myanmar-hrv-docs",
  storageBucket: "myanmar-hrv-docs.appspot.com",
  messagingSenderId: "123456...",
  appId: "1:123456...:web:abc..."
};
```

---

## STEP 4: GitHub ပေါ် Upload လုပ်

### Method A: GitHub Website (Easy)
1. github.com/[username]/myanmar-hrv သို့ သွား
2. **Add file → Upload files** နှိပ်
3. ဤဖိုင်များကို drag & drop ပါ:
   - `index.html`
   - `admin.html`
   - `dashboard.html`
   - `firebase-config.js`
4. **Commit changes** နှိပ်

### Method B: Git Command Line
```bash
git clone https://github.com/[username]/myanmar-hrv
cp -r * myanmar-hrv/
cd myanmar-hrv
git add .
git commit -m "Initial upload"
git push
```

---

## STEP 5: GitHub Pages Enable

1. Repository → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** → **/ (root)**
4. **Save** နှိပ်
5. မိနစ်အနည်းငယ်ကြာပြီးနောက် URL ရမည်:
   ```
   https://[username].github.io/myanmar-hrv/
   ```

---

## STEP 6: Admin Panel ဝင်ရောက်

1. Browser တွင်: `https://[username].github.io/myanmar-hrv/admin.html`
2. Firebase Auth ထဲ ဖွင့်ထားသော Email + Password ဖြင့် Login
3. Login ပြီးနောက်:
   - **ဖြစ်ရပ်အသစ် ထည့်** — event record အသစ် ထည့်နိုင်
   - **Statistics Update** — ကိန်းဂဏာန်းများ update
   - **Bulk Import** — JSON ဖြင့် တစ်ခါတည်း ထည့်

---

## 🔄 Daily Update လုပ်နည်း

Admin panel သို့ `yoursite.github.io/myanmar-hrv/admin.html` ဝင်ပြီး:

### Event ထည့်သောအခါ
- ရက်စွဲ, ဒေသ, မြို့နယ် ဖြည့်ပါ
- သေဆုံး/ဒဏ်ရာ ကိန်းဂဏာန်းများ ထည့်ပါ
- "Database သို့ သိမ်းဆည်း" နှိပ်ပါ
- Website တွင် ချက်ချင်း ပြမည်

### Statistics Update
- Statistics Update panel သို့ သွားပါ
- အသစ်ရသော ကိန်းဂဏာန်းများ ပြင်ပါ
- "Update လုပ်" နှိပ်ပါ

---

## 🔒 Security သတိပေးချက်

⚠️ **firebase-config.js ကို public GitHub repo ထဲ မထည့်ပါနှင့်**

.gitignore ဖိုင်ထဲတွင်:
```
firebase-config.js
```

Netlify/Vercel ဖြင့် deploy လုပ်လျှင် Environment Variables ဖြင့် ထည့်သင့်သည်

---

## 📞 Support

ပြဿနာရှိလျှင် GitHub Issues တွင် တင်ပေးပါ

---

## 🌐 Custom Domain (Optional)

Custom domain (myanmar-hrv.org) ဖြင့် ချိတ်ဆက်လိုလျှင်:
1. Domain ဝယ် (Namecheap, GoDaddy) — ~$10/year
2. Repository Settings → Pages → Custom domain
3. DNS settings တွင် GitHub IP ထည့်ပါ
