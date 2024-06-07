import { useEffect, useState } from 'react';
import './App.css';
import TableBooking from './components/TableBooking';
import List from './components/List';
import { OrderContextProvider } from './context/orderContext'

function App() {
  return (
    <>
    <h1>Restaurant Table Booking</h1>
    <OrderContextProvider>
      <TableBooking />
      <List />
    </OrderContextProvider>
    </>
  );
}

export default App;
