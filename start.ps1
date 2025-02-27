# Start backend
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd backend; npm run start:dev"

# Start frontend
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd frontend; npm run dev"
