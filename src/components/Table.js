import { useContext } from "react";
import Order from "./Order";
import orderContext from "../context/orderContext";

function Table(props) {

    const c = useContext(orderContext);

    return (
        <>
        <h3>Table {props.id}</h3>
        <ul>
            {c.orders.filter(o => o.table === props.id).map(o => {
                return (
                    <Order order={o} key={o.id} />
                );
            })}
        </ul>
        </>
    );
}

export default Table;