import React, {useContext, useState} from 'react';

import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {

    const [description, setDescription] = useState('');
    
    const [transactionAmount, setTransactionAmount]  = useState('');
   
    const { addTransaction } =  useContext(GlobalContext);
    const onSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id : new Date().getTime(),
            description,
            transactionAmount: +transactionAmount
        }
        addTransaction(newTransaction);
    }
    return (
        <div>
             <h3 className="heading1">Add new Transaction</h3>
             <form onSubmit={onSubmit}>
                 <div className="form-container">
                        <label htmlFor='description'>
                                Description
                                </label>
                                <input 
                                 type="text"
                                 id="description" 
                                 value={description}onChange={(e) => setDescription(e.target.value)}
                                 placeholder="Details of transaction" 
                                 required="required" 
                                 />
                       
                 </div>
                 <div className="form-container-1">
                        <label htmlFor='transactionAmount'>
                                Amount
                                </label>
                                <input 
                                type="number" 
                                id="transactionamount" 
                                value={transactionAmount}
                                onChange={(e) => setTransactionAmount(e.target.value)}
                                placeholder="Enter amount" 
                                required="required" 
                                />
                        
                        <br />
                        </div>
                        <button className="add-button">Add Transaction</button>
                 
             </form>
        </div>
    )
}
