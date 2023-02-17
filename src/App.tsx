import React from 'react';
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Dashboard from "./components/subsides/Dashboard";
import Matches from "./components/subsides/Matches";
import Referees from "./components/subsides/Referees";
import Statistics from "./components/subsides/Statistics";
import Teams from "./components/subsides/Teams";
import Settings from "./components/subsides/Settings";
import Sidebar from "./components/Sidebar";

function App() {


    return (
        <BrowserRouter>
            <Sidebar>
                <Routes>
                    <Route path="/" element={<Dashboard></Dashboard>}></Route>
                    <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
                    <Route path="/teams" element={<Teams></Teams>}></Route>
                    <Route path="/referees" element={<Referees></Referees>}></Route>
                    <Route path="/statistics" element={<Statistics></Statistics>}></Route>
                    <Route path="/matches" element={<Matches></Matches>}></Route>
                    <Route path="/settings" element={<Settings></Settings>}></Route>
                </Routes>
            </Sidebar>

        </BrowserRouter>
    );
}

export default App;
