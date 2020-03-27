import React from "react";
import styled from "styled-components";
import TrelloTask from "./TrelloTask";
import TrelloActionBtn from "./TrelloActionBtn";

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
        <TrelloTask key={task.id} list={props.title} task={task.title} />
      ))}
      <TrelloActionBtn title={props.title} id={props.id} />
    </ListBg>
  );
};

export default TrelloList;
