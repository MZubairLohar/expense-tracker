import React, { useContext } from 'react';
import {TransactionContext} from './transContxt';


function Child() {

    let transactions = useContext(TransactionContext);
    return (
        <div className="App">
            <h1  className= "title">Expense Tracker</h1>
            <div className="wholeApp">
            <h3 className="block1">Your Balance <br/> $250</h3>
            <div className="expense-counter">
                <h4>Income <br/> $500 </h4>
                <h4>Expense <br/> $250 </h4>
            </div>
            <div>
                <h4 className="heading1">History</h4>
                <hr />
                <ul className="transition-list">
                  {transactions.map((transObj,ind) =>{
                      return(
                        <li>
                        <span>{transObj.decs}</span>
                      <span>{transObj.amount}</span>
                    </li>      
                      )
                  })}

                </ul>
                <h4 className="heading1">Add new transaction</h4>
                <hr />
                <form className= "form-container">
                    <label>
                        Enter text.. <br />
                        <input type="text" required/>
                    </label> 
                    <br />
                    <label>
                        Enter amount.. <br />
                        <input type="number" required/>
                    </label>
                    <br />
                    <br />
                    <input type="submit" value="Add transaction" className="add-button" />
                </form>
            </div>
            </div>
        </div>
    )
}

export default Child
