import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from './store/todo';
function Todo () {
    const dispatch = useDispatch();
    const message = useSelector((state) => state.todo.message);
    const [todo, setTodo] = useState('');
    const handleChange = (e) => {
        setTodo(e.target.value);
    }
    const addNewTodo = (e) => {
        e.preventDefault();
        dispatch(addTodo(todo));
        setTodo('');
    }
    return (
        <form>
        <input type="text" onChange={handleChange} value={todo}/>
        <button onClick={addNewTodo}>Add Todo</button>
        {message && (
        <span>{message}</span>
        )}
        </form>
    )
}

export default Todo;