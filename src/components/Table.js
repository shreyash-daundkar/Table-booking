import Order from "./Order";

function Table(props) {
    return (
        <>
        <h3>Table {props.id}</h3>
        <ul>
            {props.orders.filter(o => o.table === props.id).map(o => {
                return (
                    <Order order={o} key={o.id} id={o.id}/>
                );
            })}
        </ul>
        </>
    );
}

export default Table;