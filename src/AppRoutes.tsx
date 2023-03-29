import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import Home from "./components/Home";
import StoryDetail from "./components/StoryDetail";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path='/' element={<Navigate to='news'/>}/>
                <Route path='news' element={<Home/>}/>
                <Route path='news/:id' element={<StoryDetail/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes