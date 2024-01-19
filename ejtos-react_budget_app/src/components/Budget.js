import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    const { dispatch } = useContext(AppContext)
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);


    const handleBudgetChange = (event) => {
        let budgetValue = parseInt(event.target.value);
        
        if (budgetValue > 20000) {
            alert("Maximum value is 20,000!")
        }
        else if (budgetValue < totalExpenses) {
            alert("Budget cannot be lower than spending!")
        }
        else {
            dispatch({
                type: 'SET_BUDGET',
                payload: event.target.value
            })
        }
    }

    return (
<div className='alert alert-secondary'>
<span>Budget: £</span>
<input type="number" step="10" value={budget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;