import React, {useEffect, useState} from 'react';
import {Container} from "../ui/container/container";
import {themeColor} from "../../helper/theme.constants";
import {IoMoon, IoMoonOutline} from "react-icons/io5";
import style from "./header.module.scss"

const Header = () => {
    const [theme, setTheme] = useState(themeColor.light)
    const handleClick = () => {
        setTheme(() => theme === themeColor.light ? themeColor.dark : themeColor.light)
    }
    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])

    return (
        <header>
            <Container>
                <div className={style.wrapper}>
                    <p className={style.title}>Title</p>

                    <div className={style.modeSwither} onClick={handleClick}>
                        {theme === themeColor.light ? <IoMoonOutline size="14px"/> : <IoMoon size="14px"/>}
                        <span>{theme} Theme</span>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export {Header};
