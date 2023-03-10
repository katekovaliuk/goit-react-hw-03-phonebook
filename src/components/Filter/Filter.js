import React from "react";
import PropTypes from 'prop-types';
import {FilterLabel, FilterBox, FilterInput } from './Filter.styled'

const Filter = ({value, onChange}) => (
    <FilterBox>
        <FilterLabel>
            Find contact by name
        </FilterLabel>
    
        <FilterInput type='text' value={value} onChange={onChange}></FilterInput>

    </FilterBox>
        
);

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
}

export default Filter;

