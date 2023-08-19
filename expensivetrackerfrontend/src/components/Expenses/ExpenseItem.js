import './styles/ExpenseItem.css'
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props){
    return(
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
            <h2>${props.amount}</h2>
            <div className='expense-item__price'>{props.title}</div>
            </div>
        </div>
    
    )
}

export default ExpenseItem;