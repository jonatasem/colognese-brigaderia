import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Opened from './pages/Opened';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/edit/:id" element={<Opened />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;