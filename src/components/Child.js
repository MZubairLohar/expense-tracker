import React from 'react'

function Child() {
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
                <h4>History</h4>
                <hr />
                <h4>Add new transaction</h4>
                <hr />
                <form className= "form-container">
                    <label>
                        Enter text.. <br />
                        <input type="text" />
                    </label> 
                    <br />
                    <label>
                        Enter amount.. <br />
                        <input type="number" />
                    </label>
                    <br />
                    <input type="submit" value="Add transaction" className="add-button" />
                </form>
            </div>
            </div>
        </div>
    )
}

export default Child
