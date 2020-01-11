import React from "react";
import "./App.css";
import ActiveFriends from "./Activefriends";
import InactiveFriends from "./Inactivefriends";

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
          id: 1
        },
        {
          name: "Tom",
          active: true,
          id: 2
        },
        {
          name: "Jerry",
          active: false,
          id: 3
        }
      ],
      input: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.markFriendAsInactive = this.markFriendAsInactive.bind(this);
    this.handleAddFriends = this.handleAddFriends.bind(this);
    this.markFriendAsActive = this.markFriendAsActive.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({
      input: value
    });
  }

  handleAddFriends() {
    this.setState(cur => {
      return {
        friends: cur.friends.concat([
          {
            name: cur.input,
            active: true,
            id: generateIncrementalId()

          }
        ]),
        input: ""
      };
    });
  }

  markFriendAsInactive(friendToRemove) {
    this.setState(cur => {
      return {
        friends: cur.friends.map(friend => {
          if (friend.id === friendToRemove.id){
            return {...friend,active:false}
          }

          return friend
        })
      };
    });
  }

  markFriendAsActive(friendToAdd){
    this.setState(cur => {
      return {
        friends: cur.friends.map(friend => {
          if (friend.id === friendToAdd.id){
            return {...friend,active:true}
          }

          return friend
        })
      };
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Friends App</h1>
        <input
          type="text"
          value={this.state.input}
          placeholder="new friends"
          onChange={this.handleChange}
        />
        <button className="button-add" onClick={this.handleAddFriends}>
          add new friends
        </button>

        <div>
          <button
            className="button-clear"
            onClick={() => {
              this.setState({ friends: [] });
            }}
          >
            Clear All
          </button>
        </div>

        <hr />

        <ActiveFriends
          className="active-friends"
          list={this.state.friends.filter(friend => friend.active === true)}
          onRemove={this.markFriendAsInactive}
        />
        <hr />

        <InactiveFriends
          list={this.state.friends.filter(friend => friend.active === false)}
          onAdd={this.markFriendAsActive}

        />
      </div>
    );
  }
}

export default App;
