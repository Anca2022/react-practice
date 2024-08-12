import { useReducer } from "react";

//initialState si reducer pot fi mutate in fisier propriu
const initialState = {
    title: "", 
    price: 0, 
    category:"sneakers", 
    quantity:0
}

function formReducer(state, action) {
    switch(action.type){
        case 'added_input':
            return{...state, 
                [action.payload.name]: action.payload.value
            };
        case 'increased':
            return{...state, quantity: state.quantity+1}; 
        case 'decreased':
            return{...state, quantity: state.quantity-1}; 
        default: 
            return state;
    }
    
}

export default function UseReducerComp() {
    const [state, dispatch] = useReducer(formReducer, initialState)
    console.log(state);
    return(
        <div>
            <h2>useReducer Hook</h2>
            <form className="use-reducer-form"> 
                <input onChange={(e)=> dispatch({type:'added_input', payload:{name:e.target.name, value:e.target.value}})} type='text' placeholder="Title" name="title"/>
                <input onChange={(e)=> dispatch({type:'added_input', payload:{name:e.target.name, value:e.target.value}})} type='number' placeholder="Price" name="price"/>
                <p>Category</p>
                <select onChange={(e)=> dispatch({type:'added_input', payload:{name:e.target.name, value:e.target.value}})} name='category'> 
                    <option>Sneakers</option>
                    <option>T-shirts</option>
                    <option>Jeans</option>
                </select>
                <div className='form-quantity'>
                    <button onClick={()=>dispatch({type: 'decreased'})} type='button'>-</button>
                    <span>Quantity ({state.quantity})</span> 
                    <button onClick={()=>dispatch({type: 'increased'})} type='button'>+</button>
                </div>
            </form>
            {state.title.length>0 &&
            <div>
                <p>Title: {state.title}, category: {state.category}</p>
                <p>Price: {state.price}, quantity: {state.quantity}</p>
            </div>}
        </div>
    );
}