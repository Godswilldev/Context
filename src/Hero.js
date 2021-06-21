import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "./Context/ThemeContext";
import LightSwitch from "./images/icon-sun.svg";
import darkSwitch from "./images/icon-moon.svg";
import lightBackground from "./images/bg-desktop-light.jpg";
import darkBackground from "./images/bg-desktop-dark.jpg";

const HeroBackground = styled.div`
  height: 35vh;
  background-image: url(${({ theme }) => theme === "light" ? lightBackground : darkBackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition:.3s all;
`;

const Hero = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <HeroBackground theme={theme}>
            <div>
                <h2> {theme} </h2>
                <img
                    onClick={toggleTheme}
                    src={theme === "light" ? LightSwitch : darkSwitch}
                    alt={theme === "light" ? "LightSwitchIcon" : "darkSwitchIcon"}
                />
            </div>
        </HeroBackground>
    );
};

export default Hero;
