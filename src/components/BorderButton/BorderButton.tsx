import React from 'react';
import './BorderButton.scss';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCountryByCode } from '../../redux/countriesRedux';

interface IProps {
    code: string;
}

const BorderButton: React.FC<IProps> = ({code}) => {

    const countryName: string = useSelector(state => getCountryByCode(state, code))?.name;
    
    return (
        <Link to={`/${countryName}`} className="tag tag_small">{countryName}</Link>
    );
};

export default BorderButton; 