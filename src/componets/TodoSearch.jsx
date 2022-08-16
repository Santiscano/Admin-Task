import React from 'react';
import './TodoSearch.css';
import lupa from '../img/search.svg';

function TodoSearch({SearchValue, setSearchValue}) {

    const onSearchValue = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return (
        <form className="search">
            <input 
                type="text" 
                placeholder="Search Task"
                className="search__input" 
                value={SearchValue}
                onChange={onSearchValue}
            />
            <button type="button" className="search__btn" >
                <img className="ri-rearch-2-line" src={lupa} alt="imagen lupa de filtro buscador"/>
            </button>
        </form>
    )
}

export {TodoSearch};
