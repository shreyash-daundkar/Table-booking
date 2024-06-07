function Order(props) {

    const { menu, price } = props.order;

    const deleteOrder = e => {
        
    }

    return (
        <li>
            Menu: {menu} Price: {price} <button onClick={deleteOrder}>Delete</button>
        </li>
    );
}

export default Order;