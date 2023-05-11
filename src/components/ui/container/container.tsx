import React, {ReactNode} from 'react';
import style from "./container.module.scss"
interface ContainerProps {
    children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({children}) => <div className={style.container}>{children}</div>;

export {Container};
