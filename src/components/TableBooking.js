import { useContext, useReducer } from "react";
import orderContext from "../context/orderContext";

const initialForm = {
    id: '',
    menu: '',
    price: '',
    table: '',
    idValid: '',
    menuValid: '',
    tableValid: '',
}

const reducerForm = (state, action) => {
    const { type, data } = action;
    if (type === 'reset') return initialForm;
    return {
        ...state,
        [type]: data,
        [`${type}Valid`]: data.length > 0
    };
}



function TableBooking(props) {


    const c = useContext(orderContext)


    const [formState, dispatchForm] = useReducer(reducerForm, initialForm);


    const changeHandler = type => e => dispatchForm({
        type,
        data: e.target.value,
    });


    const addOrder = e => {

        e.preventDefault();
        const { id, menu, price, table } = formState;
        const order = {
            id,
            menu,
            price,
            table,
        }
        
        c.setOrder( prevState => {
            return [
                ...prevState,
                order,
            ]
        });

        dispatchForm({
            type: 'reset',
        });
    }

    
    return (
        <form onSubmit={addOrder}>
            <label htmlFor='id'>
                ID
            </label>
            <input 
            id='id' 
            type="number" 
            value={formState.id} 
            onChange={changeHandler('id')} 
            />
            <label htmlFor= 'menu'>
                Menu
            </label>
            <input 
            id='menu' 
            type="text" 
            value={formState.menu} 
            onChange={changeHandler('menu')} 
            />
            <label htmlFor='price'>
                Price
            </label>
            <input 
            id='price' 
            type="number" 
            value={formState.price} 
            onChange={changeHandler('price')}
            />
            <label htmlFor='table'>
                Table
            </label>
            <select 
            id='table' 
            value={formState.table} 
            onChange={changeHandler('table')}
            >
                <option value='1'>Table 1</option>
                <option value='2'>Table 2</option>
                <option value='3'>Table 3</option>
            </select>
            { 
            formState.idValid && 
            formState.menuValid && 
            formState.priceValid && 
            formState.tableValid && 
            <button type="submit" >
                Add
            </button>
            }
        </form>
    );
}

export default TableBooking;