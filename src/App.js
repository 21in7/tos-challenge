import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChallengeComponent from './Today';
import TomorrowChallengeComponent from './Tomorrow';
import Main from './Main';

function App() {
    return (
        <Router>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/today" element={<ChallengeComponent />} />
                    <Route path="/tomorrow" element={<TomorrowChallengeComponent />} />
                </Routes>

        </Router>
    );
}

export default App;