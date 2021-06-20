import { useState } from "react";
import { useTheme } from "next-themes";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Toggle: React.FC = ({}) => {
    const { theme, setTheme } = useTheme();
    const [isDarkMode, setIsDarkMode] = useState(theme === "light");

    const handleToggle = () => {
        setTheme(theme === "dark" ? "light" : "dark");
        setIsDarkMode(!isDarkMode);
    };

    const handleEnterCursorToggle = () => {
        document.querySelector(".cursor").classList.add("cursor__toggle");
    };

    const handleLeaveCursorToggle = () => {
        document.querySelector(".cursor").classList.remove("cursor__toggle");
    };

    return (
        <div
            onMouseEnter={handleEnterCursorToggle}
            onMouseLeave={handleLeaveCursorToggle}
            className="p-3 shadow-sm bg-gray-100 dark:bg-reallyBlack rounded-lg flex items-center justify-center w-12 h-12"
        >
            <DarkModeSwitch
                moonColor="#222"
                sunColor="#fff"
                checked={isDarkMode}
                onChange={handleToggle}
                size={50}
            />
        </div>
    );
};
export default Toggle;
