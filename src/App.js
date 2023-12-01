import { BrowserRouter as Route, Routes, BrowserRouter } from 'react-router-dom';
import ChallengeComponent from './component/pages/Today';
import TomorrowChallengeComponent from './component/pages/Tomorrow';
import Main from './component/pages/Main';

function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/today" element={<ChallengeComponent />} />
                    <Route path="/tomorrow" element={<TomorrowChallengeComponent />} />
                </Routes>
        </BrowserRouter>
    );
}

export default App;