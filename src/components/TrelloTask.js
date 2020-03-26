import React from "react";
import styled from "styled-components";

const TaskBg = styled.div`
  background-color: #dedede;
  padding: 4px;
  margin-bottom: 12px;
  border-radius: 4px;
`;

const TrelloTask = props => {
  return (
    <TaskBg>
      <h3>{props.task}</h3>
    </TaskBg>
  );
};

export default TrelloTask;
