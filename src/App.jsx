import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChallengeComponent from './components/pages/Today.jsx';
import TomorrowChallengeComponent from './components/pages/Tomorrow.jsx';
import Main from './components/main/Main.jsx';
import JobsComponent from './components/pages/Jobs.jsx';
import WarriorComponents from './components/pages/warrior.jsx';
import WizardComponents from './components/pages/wizard.jsx';
import ArcherComponents from './components/pages/archer.jsx';
import ClericComponents from './components/pages/cleric.jsx';
import ScoutComponents from './components/pages/scout.jsx';
import SteamNewsFeed from './components/pages/update.jsx';
import ErrorBoundary from './components/env/ErrorBoundary.jsx';

function App() {
    return (
        <ErrorBoundary fallback={<p>Something went wrong</p>}>
            <Router>
                <Routes>
                    <Route path="/tos-challenge" element={<Main />} />
                    <Route path="/tos-challenge/today" element={<ChallengeComponent />} />
                    <Route path="/tos-challenge/tomorrow" element={<TomorrowChallengeComponent />} />
                    <Route path="/tos-challenge/jobs" element={<JobsComponent />} />
                    <Route path="/tos-challenge/warrior" element={<WarriorComponents />} />
                    <Route path="/tos-challenge/wizard" element={<WizardComponents />} />
                    <Route path="/tos-challenge/archer" element={<ArcherComponents />} />
                    <Route path="/tos-challenge/cleric" element={<ClericComponents />} />
                    <Route path="/tos-challenge/scout" element={<ScoutComponents />} />
                    <Route path="/tos-challenge/update" element={<SteamNewsFeed />} />
                </Routes>
            </Router>
        </ErrorBoundary>
    );
}

export default App;