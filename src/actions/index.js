export function addTask(data) {
  return {
    type: "ADD_TASK",
    payload: {
      list_id: data.id,
      task_name: data.task,
      list_title: data.title
    }
  };
}

export function addList(data) {
  return {
    type: "ADD_LIST",
    payload: {
      list_title: data.title
    }
  };
}

export function deleteTask(data) {
  console.log("deleteTask action initiated", data);
  return {
    type: "DELETE_TASK",
    payload: {
      list_id: data.listid,
      list_title: data.title,
      taskID: data.id
    }
  };
}
