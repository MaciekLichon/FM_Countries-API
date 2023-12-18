import React, {useState} from 'react';
import './Filters.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCountries } from '../../redux/countriesRedux';
import { updateFilters } from '../../redux/filtersRedux';

const Filters: React.FC = () => {

    const dispatch = useDispatch();
    const regions = [...new Set(useSelector(getAllCountries).map(country => country.region).sort())];
    
    const [selectOpen, setSelectOpen] = useState(false);
    const [filters, setFilters] = useState({
        name: '',
        region: ''
    })

    const handleNameSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newFilters = {...filters, name: e.target.value}
        setFilters(newFilters);
        dispatch(updateFilters(newFilters));
    };

    const handleRegionSelection = (region: string) => {
        const newFilters = {...filters, region: region};
        setFilters(newFilters);
        dispatch(updateFilters(newFilters));
        setSelectOpen(!selectOpen);
    }

    return (
        <div className="filters">
            <input 
                type="text" 
                placeholder="Search for a country..." 
                value={filters.name}
                onChange={handleNameSelection}
                className="filters-box filters__name"
            />

            <div className="filters__regions">
                {/* <input 
                    type="text" 
                    hidden 
                    readOnly 
                    value={filters.region} 
                    className="filters__regions__input-hidden" 
                /> */}
                <button 
                    className={`filters-box filters__regions__input-dummy ${selectOpen ? 'filters__regions__input-dummy_open' : ''}`} 
                    onClick={() => setSelectOpen(!selectOpen)}
                >
                    {filters.region !== '' ? filters.region : 'Filter by Region'}
                </button>
                <div>
                    <div>
                        <div className="filters-box filters__regions__options">
                            {regions.map(region => (
                                <button 
                                    key={region} 
                                    value={region} 
                                    className="filters__regions__options-item"
                                    onClick={() => handleRegionSelection(region)}
                                >
                                    {region}
                                </button>
                            ))}
                            <button 
                                value='All'
                                className="filters__regions__options-item"
                                onClick={() => handleRegionSelection('')}
                            >
                                -- All --
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filters;