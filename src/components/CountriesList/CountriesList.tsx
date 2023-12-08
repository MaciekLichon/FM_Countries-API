import React from "react";
import "./CountriesList.scss";

interface IProps {
    children: React.ReactNode;
}

const CountriesList: React.FC<IProps> = ({children}) => {
    return (
        <div className="countries-list">
            {children}
        </div>
    );
};

export default CountriesList;