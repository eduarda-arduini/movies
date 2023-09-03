import { MainMenuContainer } from "../styles/MainMenuContainer";
import { useNavigate } from 'react-router-dom'

export function MainMenu() {
    const navigate = useNavigate()

    return (
    <MainMenuContainer>
        <ul>
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/about")}>Sobre</li>
        </ul>
    </MainMenuContainer>
    )
}