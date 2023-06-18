import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { completeTodo, deleteTodo } from './store/todo';
function TodoList () {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todo.todos);
    console.log('todos', todos);
    const users = useSelector((state) => state.user.users);
    console.log('users', users);
    const delTodo = (id, name) => {
        dispatch(deleteTodo({id, name}))
    }
    const setCompleteTodo = (id) => {
        dispatch(completeTodo(id))
    }
    return (
        <div>
            <h1>Todo List</h1>
            {todos.map((todo) => (
                <div key={todo.id} style={{display: 'flex', marginLeft: '50%'}}>
                    <p className={todo.completed ? 'complete' : ''}>{todo.name}</p>
                    <button onClick={() => delTodo(todo.id, todo.name)}>Delete</button>
                    <button onClick={() => setCompleteTodo(todo.id)}>Complete</button>
                </div>
            ))}
        </div>
    )
}

export default TodoList;