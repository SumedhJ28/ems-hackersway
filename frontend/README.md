

## Prerequisites

Make sure the following are installed on your system:

```
Node.js (v18 or above)
npm
Git
```

---

## Installation & Setup

Follow these steps to run the project on your system.

### 1. Clone the repository

```
git clone <REPOSITORY_URL>
```

---

### 2. Navigate to the frontend folder

```
cd frontend
```

---

### 3. Install dependencies

```
npm install
```

---

### 4. Start the development server

```
npm run dev
```

---

## Open in Browser

After starting the server, open:

```
http://localhost:3000
```

The application will **automatically redirect to the Login page**.

---

## Login Details (Mock)

### Admin Login

```
Email: admin@hackersway.com
Password: any
```

Redirects to:

```
/admin/dashboard
```

---

### Employee Login

```
Email: any other email
Password: any
```

Redirects to:

```
/employee/dashboard
```

---

## Project Structure (Simplified)

```
frontend/
├── app/
│   ├── admin/
│   ├── employee/
│   ├── login/
│   └── page.tsx
├── components/
│   ├── dashboard/
│   ├── employee/
│   ├── layout/
│   └── ui/
├── middleware.ts
├── next.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## Notes

- Application always starts from the **Login page**
- Role-based routing is handled using **Next.js middleware**
- UI components are already included in the project
- No additional UI setup is required
- Backend integration can be added later

---

## Status

```
✔ Basic frontend completed
✔ Ready for review
✔ Backend integration pending
```
