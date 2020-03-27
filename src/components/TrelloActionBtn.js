import React from "react";
import { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { addTask, addList } from "../actions";

const TrelloTextarea = styled.textarea`
  width: 100%;
  border: none;
  border-radius: 2px;
  padding: 8px 4px;
`;

class TrelloActionBtn extends Component {
  constructor(props) {
    super(props);
    this.state = { title: props.title, id: props.id, btn: true, value: "" };

    this.changeTextArea = this.changeTextArea.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  label = this.props.List ? "+ Add List" : "+ Add Task";

  renderactionBtn = () => (
    <div
      onClick={() => {
        this.setState({ btn: false });
      }}
    >
      <h4>{this.label}</h4>
    </div>
  );

  changeTextArea = event => {
    this.setState({ value: event.target.value });
  };

  handleKeyDown = e => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
    // In case you have a limitation
    // e.target.style.height = `${Math.min(e.target.scrollHeight, limit)}px`;
  };

  createList = e => {
    var data = {
      title: this.state.value
    };
    e.preventDefault();
    console.log(data);
    this.setState({ btn: true });
    this.props.addList(data);
  };

  handleSubmit = e => {
    var data = {
      id: this.state.id,
      title: this.state.title,
      task: this.state.value
    };
    e.preventDefault();
    console.log(data);
    this.setState({ btn: true });
    this.props.addTask(data);
  };

  renderAddState = () => (
    <div>
      <TrelloTextarea
        onKeyDown={this.handleKeyDown}
        value={this.state.value}
        onChange={this.changeTextArea}
        placeholder={this.props.List ? "Add List" : "Add Task"}
      />
      <button onClick={this.props.List ? this.createList : this.handleSubmit}>
        Add
      </button>
      <button
        onClick={() => {
          this.setState({ btn: true });
        }}
      >
        X
      </button>
    </div>
  );

  render() {
    return this.state.btn ? this.renderactionBtn() : this.renderAddState();
  }
}

const mapStateToProps = state => ({
  list: state.List
});

const mapDispatchToProps = {
  addTask,
  addList
};

export default connect(mapStateToProps, mapDispatchToProps)(TrelloActionBtn);
