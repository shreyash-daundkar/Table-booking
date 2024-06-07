import { useEffect, useState } from 'react';
import './App.css';
import TableBooking from './components/TableBooking';
import List from './components/List';
import { OrderContextProvider } from './context/orderContext'

const initialOrders = JSON.parse(localStorage.getItem('order-data')) || [];

function App() {
  
  const [orderState, setOrderState] = useState(initialOrders);

  useEffect(() => {
    localStorage.setItem('order-data', JSON.stringify(orderState));
  }, [orderState]);

  return (
    <>
    <h1>Restaurant Table Booking</h1>
    <OrderContextProvider>
      <TableBooking onBooking={setOrderState} />
      <List orders={orderState} />
    </OrderContextProvider>
    </>
  );
}

export default App;
