import React from 'react';

import "./ExpenseFilter.css"

const ExpenseFilter = props => {

    const dropdownChangeHandler = event => {
        // console.log(event.target.value);
        props.onChangeHandler(event.target.value);
    }

    return (
        <div className="expense-filter">
            <div className="expense-filter__controll">
                <label className="label">Filter by Year</label>
                <i class="las la-calendar calender-icon"></i>
                <select onChange={dropdownChangeHandler} value={props.selected} className="selectTag">
                    <option value='all' className="option">All</option>
                    <option value='2022' className="option">2022</option>
                    <option value='2021' className="option">2021</option>
                    <option value='2020' className="option">2020</option>
                    <option value='2019' className="option">2019</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter;