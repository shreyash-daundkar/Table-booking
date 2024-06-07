import { createContext, useEffect, useState } from "react";

const orderContext = createContext({
    orders: [],
    setOrder: () => {}
});

const initialOrders = JSON.parse(localStorage.getItem('order-data')) || [];

 export const OrderContextProvider = props => {
    
    const [orderState, setOrderState] = useState(initialOrders);
    
    useEffect(() => {
        localStorage.setItem('order-data', JSON.stringify(orderState));
    }, [orderState]);
    
    return (
        <orderContext.Provider value={{
            orders: orderState,
            setOrder: setOrderState,
        }}>
            {props.children}
        </orderContext.Provider>
    );
}

export default orderContext;