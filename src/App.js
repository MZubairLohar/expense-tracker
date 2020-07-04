import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import { AccountSummery } from './components/AccountSummery';
import {TransactionHistory} from './components/TransactionHistory';
import {AddTransaction} from './components/AddTransaction';
import {GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
     <Header />
     <hr />
     <Balance />
     <hr />
     <AccountSummery />
     <hr />
     <TransactionHistory />
      <br />
     <hr />
     <AddTransaction />
     </div>
    </GlobalProvider>
  );
}

export default App;
