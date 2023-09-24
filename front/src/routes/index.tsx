import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { User } from '../models/user'
import Layout from '../pages/Layout'
import LoginPage from '../pages/Login'
import CreateClickPage from '../pages/CreateClick'
import CampaingsPage from '../pages/Campaings'
import EmplyeesPage from '../pages/Employees'

interface Props {
	user?: User []
}

const AppRoutes = ({ user }: Props) => {
	return (
		<BrowserRouter>
			<Routes>
       			<Route path='/create-click' element={<CreateClickPage />} /> 
				<Route path="/" element={<Layout user={user}/>}>
          			<Route path='login' element={<LoginPage/>} />
          			<Route path='campaings' element={<CampaingsPage user={user}/>} />
					<Route path='employees' element={<EmplyeesPage user={user}/>} />
					<Route path='*' element={<LoginPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default AppRoutes;
