import React, { useState } from "react";
import '../styles/ExpenseForm.css'
import ExpensesFilter from "./ExpensesFilter";


export function ExpenseForm(props){
  
    const[enteredTitle,setEnteredTitle]=useState('');
    const[enteredAmount,setEnteredAmount]=useState('');
    const[enteredDate,setEnteredDate]=useState('')



    const titleChange=(event)=>{
        setEnteredTitle(event.target.value)   
    }

    const amountChange=(event)=>{
        setEnteredAmount(event.target.value)   
    }

    const dateChange=(event)=>{
        setEnteredDate(event.target.value)   
    }

    const handleSubmitForm=(event)=>{
         event.preventDefault();

          const newExpense={
            title:enteredTitle,
           amount:enteredAmount,
           date:new Date(enteredDate)
          }
          props.onSaveExpenseData(newExpense)
          setEnteredAmount('');
          setEnteredDate('');
          setEnteredTitle('');

    }

    return(
        <form onSubmit={handleSubmitForm}>
        <div className="new-expense__controls">
          
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChange} value={enteredTitle}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01"  step="0.01" onChange={amountChange} value={enteredAmount}/>
                </div>
                <div className="new-expense__control" >
                    <label>Date</label>
                    <input type="date" min="2019-01-01"  max="2023-12-31" onChange={dateChange} value={enteredDate}/>
                </div>
                <div className="new-expense">
                    <button type="submit" >Add Expense</button>
                </div>
           
        </div>
         </form>
    )
}