import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TopMenu from "./components/TopMenu";
function App() {
    return (
        <div className="App">
            <TopMenu></TopMenu>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
