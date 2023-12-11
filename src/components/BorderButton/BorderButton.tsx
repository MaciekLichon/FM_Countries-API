import React from 'react';
import './BorderButton.scss';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCountryByCode } from '../../redux/countriesRedux';

const BorderButton: React.FC = ({code}) => {

    const countryName = useSelector(state => getCountryByCode(state, code)).name;
    
    return (
        <Link to={`/${countryName}`} className="tag tag_small">{countryName}</Link>
    );
};

export default BorderButton; 