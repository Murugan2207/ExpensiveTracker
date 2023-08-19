import './styles/ExpenseItem.css'

function ExpenseItem(props){
    return(
        <div className='expense-item'>
            <div className='expense-item__description'>{props.title}</div>
            <div className='expense-item__description'>
            <h2>${props.amount}</h2>
            <div className='expense-item__price'>{props.date.toISOString()}</div>
            </div>
        </div>
    
    )
}

export default ExpenseItem;