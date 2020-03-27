import React, { Component } from "react";
import TrelloList from "./TrelloList";
import TrelloActionBtn from "./TrelloActionBtn";
import { connect } from "react-redux";
import styled from "styled-components";
import { deleteTask } from "../actions";

const Listcontainer = styled.div`
  background-color: #fefefe;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

class App extends Component {
  deleteTaskFunction = data => {
    this.props.deleteTask(data);
  };
  render() {
    const List = this.props.lists;
    return (
      <div className="App">
        <h2>Trello-clone</h2>
        <Listcontainer>
          {console.log(List)}
          {List.map(item => (
            <TrelloList
              delete={this.deleteTaskFunction}
              key={item.id}
              id={item.id}
              tasks={item.tasks}
              title={item.title}
            />
          ))}
          <TrelloActionBtn List />
        </Listcontainer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.list
});

const mapDispatchToProps = {
  deleteTask
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
