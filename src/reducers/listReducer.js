const initialState = [
  {
    id: 0,
    title: "to-do",
    tasks: [
      {
        id: 0,
        title: "Learn React"
      },
      {
        id: 1,
        title: "Listen to music"
      },
      {
        id: 2,
        title: "See ironman"
      }
    ]
  },
  {
    id: 1,
    title: "doing",
    tasks: [
      {
        id: 0,
        title: "Learning react"
      }
    ]
  }
];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      console.log(action.payload);
      const taskID = state[action.payload.list_id].tasks.length;
      return [
        ...state.slice(0, action.payload.list_id),
        {
          id: action.payload.list_id,
          title: action.payload.list_title,
          tasks: [
            ...state[action.payload.list_id].tasks,
            {
              id: taskID,
              title: action.payload.task_name
            }
          ]
        },
        ...state.slice(action.payload.list_id + 1)
      ];

    case "ADD_LIST":
      return [
        ...state,
        { id: state.length, title: action.payload.list_title, tasks: [] }
      ];

    default:
      return state;
  }
};

export default listReducer;
