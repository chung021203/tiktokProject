import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Following from './pages/Following';

function App() {
    return (
        <Router>
            <div className="App"></div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/following" element={<Following />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
