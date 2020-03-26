import React, { Component } from "react";
import TrelloList from "./TrelloList";
import { connect } from "react-redux";
import styled from "styled-components";

const Listcontainer = styled.div`
  background-color: #aeaeae;
  display: flex;
  flex-direction: row;
`;

class App extends Component {
  render() {
    const List = this.props.lists;

    return (
      <div className="App">
        <h2>Trello-clone</h2>
        <Listcontainer>
          {List.map(item => (
            <TrelloList id={item.id} tasks={item.tasks} title={item.title} />
          ))}
        </Listcontainer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.list
});

export default connect(mapStateToProps)(App);
