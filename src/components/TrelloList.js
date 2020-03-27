import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import TrelloTask from "./TrelloTask";
import TrelloActionBtn from "./TrelloActionBtn";
import { deleteTask } from "../actions";

const ListBg = styled.div`
  background-color: #ededed;
  width: 320px;
  padding: 12px;
  margin-right: 24px;
  border-radius: 8px;
  height: 100%;
`;

const TrelloList = props => {
  return (
    <ListBg>
      <h2>{props.title}</h2>

      {props.tasks.map(task => (
        <TrelloTask
          delete={props.delete}
          listid={props.id}
          key={task.id}
          taskid={task}
          list={props.title}
          task={task.title}
        />
      ))}
      <TrelloActionBtn title={props.title} id={props.id} />
    </ListBg>
  );
};

const mapDispatchToProps = {
  deleteTask
};

export default connect(null, mapDispatchToProps)(TrelloList);
