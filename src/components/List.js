import Table from "./Table";

function List(props) {
    return (
        <>
        <h2>Orders List</h2>
        <Table key='1' id='1' orders={props.orders}/>
        <Table key='2' id='2' orders={props.orders}/>
        <Table key='3' id='3' orders={props.orders}/>
        </>
    );
}

export default List;