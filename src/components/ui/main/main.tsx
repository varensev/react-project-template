import React, {ReactNode} from 'react';
import style from "./main.module.scss"
import {Container} from "../container/container";
interface MainProps {
    children: ReactNode;
}

const Main : React.FC<MainProps> = ({children}) =>{
    return (
        <div className={style.wrapper}>
            <Container>
                {children}
            </Container>
        </div>
    );
};

export {Main};
