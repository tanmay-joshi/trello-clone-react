const initialState = [
  {
    id: 0,
    title: "to-do",
    tasks: [
      {
        title: "Learn React"
      },
      {
        title: "Listen to music"
      },
      {
        title: "See ironman"
      }
    ]
  },
  {
    id: 1,
    title: "doing",
    tasks: [
      {
        title: "Learning react"
      }
    ]
  }
];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default listReducer;
