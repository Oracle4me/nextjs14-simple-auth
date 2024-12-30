# Simple Auth dengan Next.js 14 dan NextAuth

Ini adalah sistem autentikasi sederhana yang dibangun dengan [Next.js 14](https://nextjs.org/) dan [NextAuth.js](https://next-auth.js.org/). Aplikasi ini menyediakan solusi autentikasi yang mudah digunakan untuk aplikasi Next.js, dengan berbagai penyedia autentikasi (Google, GitHub, Email).

## Memulai

Ikuti petunjuk di bawah ini untuk menjalankan proyek ini secara lokal.

### Clone Repository

```bash
git clone https://github.com/Oracle4me/nextjs14-simple-auth.git
cd nextjs14-simple-auth

## Langkah-Langkah

Pertama, jalankan untuk server pengembang:

```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
# atau
bun dev
```


## Atur Variable Lingkungan
Buat file .env.local di root proyek 

.env
```
DATABASE_URL= your_database
GOOGLE_ID = google_id
GOOGLE_CLIENT_SECRET = Oauth Google
GITHUB_ID = id
GITHUB_CLIENT_SECRET = Oauth Github
RESEND_API_KEY = resend_api
PUBLIC_API_ROUTE = "http://localhost:3000
```

.env.local
```
NEXTAUTH_SECRET = 
GITHUB_SECRET = 
GITHUB_ID = 
```

