import React, {useContext} from 'react';


import {Transaction} from './Transaction';

import {GlobalContext} from '../context/GlobalState';


export const TransactionHistory = () => {
    const {transactions} = useContext(GlobalContext);
    return (

        <div className="heading1">
             <h3> Transaction History</h3>
               <ul className="transition-list">
                {transactions.map(transaction => (
                <Transaction key={transaction.id} transaction={transaction} />
               )
               )}   
            </ul>
        
        </div>
    )
}
