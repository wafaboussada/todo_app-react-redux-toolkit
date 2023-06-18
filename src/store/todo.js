import { createSlice } from '@reduxjs/toolkit';
const addNewTodo = (todos, todo) => {
    const ids = todos.map((item) => item.id);
    const maxId = ids.reduce((item, max) => {
      console.log('item', item);
      return Math.max(item, max);
    }, 0);
    const newTodo = {
      id: maxId + 1,
      name: todo,
      completed: false,
    }
    const nTodos = [...todos, newTodo];
    return nTodos;
  }
  
  const delTodo = (todos, id) => {
    const nTodos = todos.filter(t => t.id !== id);
    return nTodos;
  }
  const setCompleteTodos = (todos, id) => {
    const nTodos = todos.map((t) => {
      const nItem = { ...t };
      if (t.id === id) {
        nItem.completed = true;
      }
      return nItem
    })
    return nTodos;
  }
  const setMessage = (todo, action) => {
    if (action === 'add') {
        return `'${todo}' ajouté avec succès`;
    } else {
        return `'${todo}' a été supprimé avec succès`;
    }
    
  }
const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [],
        message: '',
    },
    reducers: {
        addTodo: (state, action) => {
            return {
                ...state,
                todos: addNewTodo(state.todos, action.payload),
                message: setMessage(action.payload, 'add'),
            }
        },
        deleteTodo: (state, action) => {
            return {
                ...state,
                todos: delTodo(state.todos, action.payload.id),
                message: setMessage(action.payload.name, 'delete')
            }
        },
        completeTodo: (state, action) => {
            return {
                ...state,
                todos: setCompleteTodos(state.todos, action.payload)
            }
        }
    }
})

export const { addTodo, completeTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;