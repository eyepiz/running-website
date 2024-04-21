import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Main/Main";
import MainError from "./Main/MainError";

function Components() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="*" element={<MainError />} />
            </Routes>
        </Router>
    )
}

export default Components;
