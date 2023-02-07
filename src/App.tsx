import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopMenu from "./components/TopMenu";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <TopMenu></TopMenu>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/projects" element={<ProjectPage />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
