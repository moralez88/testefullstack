@echo off
cd backend
call npm install
cd ../frontend
call npm install
cd ..
npx concurrently "cd backend ^& npm run start:dev" "cd frontend ^& npm run dev"
