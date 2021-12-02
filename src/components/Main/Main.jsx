import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import CrewPage from '../../pages/Crew/Crew'

import DestinationPage from '../../pages/DestinationPage/DestinationPage'
import HomePage from '../../pages/HomePage/HomePage'
import TechnologyPage from '../../pages/Technology/Technology'

function Main() {    
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={
                    <HomePage />
                } />
                <Route path="/destination" element={
                    <DestinationPage />
                } />
                <Route path="/technology" element={
                    <TechnologyPage />
                } />
                <Route path="/crew" element={
                    <CrewPage />
                } />
                <Route path="/*" element={
                    <Navigate to="/" />
                } />
            </Routes>
        </div>
    )
}

export default Main
