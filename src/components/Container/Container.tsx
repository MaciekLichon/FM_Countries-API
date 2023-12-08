import React from 'react';
import './Container.scss';

interface IProps {
    children: React.ReactNode;
}

const Container: React.FC<IProps> = ({children}) => {
    return (
        <div className="container">
            {children}
        </div>
    );
};

export default Container;