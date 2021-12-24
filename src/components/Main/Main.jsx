import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import CrewPage from '../../pages/CrewPage/CrewPage'

import DestinationPage from '../../pages/DestinationPage/DestinationPage'
import HomePage from '../../pages/HomePage/HomePage'
import TechnologyPage from '../../pages/TechnologyPage/TechnologyPage'

export const Context = React.createContext(null)

function Main() {
    // const slideHeightMaxStateTuple = useState(0)
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
                    // <Context.Provider value={slideHeightMaxStateTuple}>
                    <CrewPage />
                    // </Context.Provider>
                } />
                <Route path="/*" element={
                    <Navigate to="/" />
                } />
            </Routes>
        </div>
    )
}

export default Main
