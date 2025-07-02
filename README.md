# 🚀 MongoDB Server Setup Template with Express + TypeScript

This template provides a clean and efficient setup for building a **TypeScript-based Node.js server** using **Express**, along with live-reload support using `ts-node-dev`. It's ideal for rapid backend development, especially when working with MongoDB.

---

## 🛠️ Setup Instructions

Follow the steps below to set up your development environment:

---

### 📁 1. Initialize the Project

```bash
npm init -y
📦 2. Install Dependencies
✅ Main Dependency:
bash
Copy code
npm install express
🧰 Development Dependencies:
bash
Copy code
npm install -D typescript
npm install --save-dev @types/express
⚙️ 3. Initialize TypeScript
bash
Copy code
tsc --init
Then update your tsconfig.json with:

json
Copy code
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist",
    "target": "ES6",
    "module": "commonjs",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  }
}
🔁 4. Enable Auto Reload with ts-node-dev
Install it:

bash
Copy code
npm install -D ts-node-dev
Then update the scripts section in your package.json:

json
Copy code
"scripts": {
  "dev": "ts-node-dev --respawn --transpile-only src/server.ts",
  "test": "echo \"Error: no test specified\" && exit 1"
}
📂 Project Structure
pgsql
Copy code
project-root/
├── src/
│   └── server.ts
├── dist/
├── node_modules/
├── package.json
├── tsconfig.json
└── README.md
▶️ Run the Server
Start the development server:

bash
Copy code
npm run dev
Your server will automatically restart when you make changes to .ts files in the src/ folder.