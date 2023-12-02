import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChallengeComponent from './component/pages/Today';
import TomorrowChallengeComponent from './component/pages/Tomorrow';
import Main from './component/pages/Main';

function App() {
    return (
            <Router>
                <Routes>
                    <Route path="/tos-challenge" element={<Main />} />
                    <Route path="/tos-challenge/today" element={<ChallengeComponent />} />
                    <Route path="/tos-challenge/tomorrow" element={<TomorrowChallengeComponent />} />
                </Routes>
            </Router>
    );
}

export default App;