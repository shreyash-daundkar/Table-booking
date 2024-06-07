import { useContext } from "react";
import orderContext from "../context/orderContext";

function Order(props) {

    const c = useContext(orderContext);

    const { id, menu, price } = props.order;

    const deleteOrder = e => {
        c.setOrder(prevState => {
            const arr = prevState;
            return arr.filter(o => o.id !== id);
        });
    }

    return (
        <li>
            Menu: {menu} Price: {price} <button onClick={deleteOrder}>Delete</button>
        </li>
    );
}

export default Order;