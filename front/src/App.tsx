import React from 'react';
import './App.css';
import AppRoutes from './routes';
import { db } from './db/db'
import { useLiveQuery } from 'dexie-react-hooks'
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App() {
  const userDb = useLiveQuery(() => db.user.toArray())
  console.log('userDb: ', userDb)
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <AppRoutes user={userDb}/>
    </LocalizationProvider>
  );
}

export default App;
