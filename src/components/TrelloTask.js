import React from "react";
import styled from "styled-components";

const TaskBg = styled.div`
  background-color: #dedede;
  padding: 4px;
  margin-bottom: 12px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
`;

const DelBtn = styled.button`
  border: none;
  padding: 4px 16px;
  border-radius: 4px;
  align-items: center;
  height: 32px;
  margin: auto 4px;
  background-color: #999;
  display: none;

  ${TaskBg}:hover & {
    display: block;
  }
`;

const TrelloTask = props => {
  return (
    <TaskBg>
      <h3>{props.task}</h3>
      <DelBtn>Del</DelBtn>
    </TaskBg>
  );
};

export default TrelloTask;
