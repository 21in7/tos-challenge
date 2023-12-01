import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import ChallengeComponent from './Today';
import TomorrowChallengeComponent from './Tomorrow';
import Main from './Main';

function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Router>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/today" element={<ChallengeComponent />} />
                    <Route path="/tomorrow" element={<TomorrowChallengeComponent />} />
                </Routes>

            </Router>
        </BrowserRouter>
    );
}

export default App;