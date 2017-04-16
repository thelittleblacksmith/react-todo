import uuid from 'node-uuid';
import moment from 'moment';

let searchTextReducer = (state='', action) => {
  switch(action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  }
}

let showCompletedReducer = (state=false, action) => {
  switch(action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default: 
      return state;
  }
}

let todosReducer = (state = [], action) => {
  switch(action.type){
    case 'ADD_TODO':
      return [
        ...state,
        action.todo
      ];
    case 'UPDATE_TODO':
      return state.map((todo) => {
        if(todo.id === action.id){
          return {
            ...todo,            
            ...action.updates
          }
        }
      })
    case 'ADD_TODOS':
      return [
        ...state,
        ...action.todos
      ]
    default:
      return state;
  }
}

export {
  searchTextReducer,
  showCompletedReducer,
  todosReducer
}