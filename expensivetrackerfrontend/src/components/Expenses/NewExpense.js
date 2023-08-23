import React from "react";
import '../styles/NewExpense.css';
import { ExpenseForm } from "./ExpenseForm";

 export function NewExpense(props){
      const saveExpenseDataHandler=(enteredExpenseData)=>{
            
        const ExpenseData={
            ...enteredExpenseData,id:Math.random().toString()
        }
       props.onAddExpense(ExpenseData)
      }

    return(
        <div className="new-expense"> 
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>

        </div>
    )
 }
