import "../styles/TopMenuStyle.css";
import { useNavigate } from "react-router-dom";

function TopMenu() {
    const navigate = useNavigate();
    const goToProjects = () => {
        navigate("/projects");
    };
    const goToHome = () => {
        navigate("/");
    };

    return (
        <div className="top-menu-bar">
            <span className="icon" onClick={goToHome}>AM</span>
            <div className="menu">
                <div className="menu-item">Goal</div>
                <div className="menu-item" onClick={goToProjects}>
                    Projects
                </div>
            </div>
        </div>
    );
}

export default TopMenu;
