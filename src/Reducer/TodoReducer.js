import uuid from "uuid/v4";

export const initialState = [
  { id: uuid(), task: "Milk the cows", completed: true },
  { id: uuid(), task: "Mawn the lawn", completed: false },
  { id: uuid(), task: "Eat sleep repeat", completed: false },
];

const TodoReducer = (state, action) => {
  switch (action.type) {
    case "Add_Todo":
      return [...state, { id: uuid(), completed: false, task: action.task }];
    case "Delete_Todo":
      return [...state.filter((todo) => todo.id !== action.id)];
    case "Toggle_Todo":
      return [
        ...state.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      ];
    default:
      return state;
  }
};

export default TodoReducer;
