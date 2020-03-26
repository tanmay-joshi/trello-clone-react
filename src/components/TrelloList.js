import React from "react";
import styled from "styled-components";
import TrelloTask from "./TrelloTask";

const ListBg = styled.div`
  background-color: #ededed;
  width: 320px;
  padding: 12px;
`;

const TrelloList = props => {
  return (
    <ListBg>
      <h2>{props.title}</h2>
      {props.tasks.map(task => (
        <TrelloTask task={task.title} />
      ))}
    </ListBg>
  );
};

export default TrelloList;
