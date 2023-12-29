import React, { useState, useEffect } from "react";
import darkPng from "../../assets/website/dark-mode-button.png";
import lightPng from "../../assets/website/light-mode-button.png";

const DarkMode = () => {
    const storedTheme = localStorage.getItem("theme") || "light";
    const [theme, setTheme] = useState(storedTheme);
    const element = document.documentElement;

    useEffect(() => {
        element.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

    return (
        <div className="relative">
            <img
                src={theme === "dark" ? darkPng : lightPng}
                alt="dark"
                onClick={toggleTheme}
                className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"
                    }`}
            />
            <img
                src={darkPng}
                alt="dark"
                onClick={toggleTheme}
                className="w-12 cursor-pointer drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] duration-300"
            />
        </div>
    );
};

export default DarkMode;
