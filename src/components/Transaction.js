import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ( {transaction} ) => {
    const { delTransaction } = useContext(GlobalContext);
    const sign = transaction.transactionAmount > 0 ? '+' : '-';
    const transactionType = transaction.transactionAmount > 0 ? 'plus' : 'minus';

    return (
        <div className="transition-list" >
            
           <li className={transactionType}> 
                  <button className="delete-btn" onClick={() => 
                delTransaction(transaction.id)
                }>x</button>
                  {transaction.description}
                  
    <span>{sign}${Math.abs(transaction.transactionAmount)}</span>
                   
                </li>
                
        </div>
    )
}
