import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChallengeComponent from './components/pages/Today.jsx';
import TomorrowChallengeComponent from './components/pages/Tomorrow.jsx';
import Main from './components/main/Main.jsx';
import JobsComponent from './components/pages/Jobs.jsx';
import WarriorComponents from './components/pages/Warrior.jsx';
import WizardComponents from './components/pages/Wizard.jsx';
import ArcherComponents from './components/pages/Archer.jsx';
import ClericComponents from './components/pages/Cleric.jsx';
import ScoutComponents from './components/pages/Scout.jsx';
import SteamNewsFeed from './components/pages/Update.jsx';
import ErrorBoundary from './components/env/ErrorBoundary.jsx';
import IchorComponents from './components/pages/Ichor.jsx';
import DebuffsComponents from './components/pages/Debuffs.jsx';
import EnchantComponents from './components/pages/Enchant.jsx';

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
                    <Route path="/tos-challenge/ichor" element={<IchorComponents />} />
                    <Route path="/tos-challenge/debuff" element={<DebuffsComponents />} />
                    <Route path="/tos-challenge/enchant" element={<EnchantComponents />} />
                </Routes>
            </Router>
        </ErrorBoundary>
    );
}

export default App;