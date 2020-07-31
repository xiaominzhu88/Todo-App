import React from "react";
import "./App.css";
import ActiveFriends from "./Activefriends";
import InactiveFriends from "./Inactivefriends";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";

let counter = 4;
function generateIncrementalId() {
  counter++;
  return counter;
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [
        {
          name: "Lola",
          active: true,
          id: 1,
        },
        {
          name: "Tom",
          active: true,
          id: 2,
        },
        {
          name: "Jerry",
          active: false,
          id: 3,
        },
      ],
      input: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.markFriendAsInactive = this.markFriendAsInactive.bind(this);
    this.handleAddFriends = this.handleAddFriends.bind(this);
    this.markFriendAsActive = this.markFriendAsActive.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({
      input: value,
    });
  }

  handleAddFriends() {
    this.setState((cur) => {
      return {
        friends: cur.friends.concat([
          {
            name: cur.input,
            active: true,
            id: generateIncrementalId(),
          },
        ]),
        input: "",
      };
    });
  }

  markFriendAsInactive(friendToRemove) {
    this.setState((cur) => {
      return {
        friends: cur.friends.map((friend) =>
          friend.id === friendToRemove.id
            ? { ...friend, active: false }
            : friend
        ),
      };
    });
  }

  markFriendAsActive(friendToAdd) {
    this.setState((cur) => {
      return {
        friends: cur.friends.map((friend) =>
          friend.id === friendToAdd.id ? { ...friend, active: true } : friend
        ),
      };
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Friends App</h1>

        <Input
          id="filled-basic"
          label="Filled"
          variant="filled"
          type="text"
          value={this.state.input}
          placeholder="new friends"
          onChange={this.handleChange}
        />

        <div className="Button">
          <Button
            className="button-add"
            onClick={this.handleAddFriends}
            variant="contained"
            color="primary"
          >
            add new friends
          </Button>
        </div>
        <div className="Button">
          <Button
            variant="contained"
            color="secondary"
            className="button-clear"
            onClick={() => {
              this.setState({ friends: [] });
            }}
          >
            Clear All
          </Button>
        </div>

        <hr />

        <ActiveFriends
          className="active-friends"
          list={this.state.friends.filter((friend) => friend.active === true)}
          onRemove={this.markFriendAsInactive}
        />
        <hr />

        <InactiveFriends
          list={this.state.friends.filter((friend) => friend.active === false)}
          onAdd={this.markFriendAsActive}
        />
      </div>
    );
  }
}

export default App;
