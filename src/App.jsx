import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from '../pages/Home page/Home.jsx'
import EquipList from '../pages/equip list page/equipList.jsx'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="equipList" element={<EquipList />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
