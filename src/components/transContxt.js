import { createContext } from 'react';
//const { createContext } = require("react")

const initialTransactions = [
    {amount : 500,  decs: 'cash'},
    {amount : -50,  decs: 'Book'},
    {amount : -200,  decs: 'Keyboard'}
]

export const TransactionContext = createContext(initialTransactions);

 