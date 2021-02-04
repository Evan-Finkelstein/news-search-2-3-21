import React from 'react';
import PropTypes from 'prop-types';

const ColorControls = ({ onSearch, searchState }) => (
    <>
        <form onSubmit={onSearch}>
            <label htmlFor="search"> Search Bar
                <input

                    id="search"
                    name="search"
                    type="text"
                    onChange={searchState} /></label>
            <button>Search</button>
        </form>
    </>

);
ColorControls.propTypes = {

    onSearch: PropTypes.func.isRequired,
    searchState: PropTypes.func.isRequired,

};
export default ColorControls;