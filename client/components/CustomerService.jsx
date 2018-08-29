import React, { Component } from 'react';
import $ from 'jquery'; 
import io from "socket.io-client";
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js'

const mapStateToProps = store => ({
  username: store.chat.username,
  messages: store.chat.messages,
  socket: store.chat.socket
});

const dispatchStateToProps = dispatch => ({
  addMessage: (message) => dispatch(actions.addMessage(message)),
  updateUserName: (name) => dispatch(actions.updateUserName(name))
});

class Chat extends Component {
  constructor(props) {
    super(props);

    // keeping this because it's the only thing that updates the page :(
    this.state = {
      message: '',
      dummy: false
    };

    const that = this;
    this.props.socket.on('RECEIVE_MESSAGE', data => {
      that.props.addMessage(data);

      // I made this dummy boolean to force the page to rerender.
      // It's probably not right but it works so there.
      this.setState(previousState => {
        previousState.received === !previousState.received;
        return previousState;
      })
    });

    fetch('/getname').then(function(response) {
      return response.text().then(function(text) {
        that.props.updateUserName(text);
      });
    })

    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount() {
    $(".chat-body").toggle();
  }

  sendMessage = ev => {
    ev.preventDefault();
    if (this.state.message.length > 0) {
      this.props.socket.emit('SEND_MESSAGE', {
        author: this.props.username,
        message: this.state.message,
      });
      this.setState({message: ''});
    }
  }

  toggleChat(e) {
    e.preventDefault();
    let src = $(".chat-head img").attr("src");
    $(".chat-body").toggle();
    if (src == "https://maxcdn.icons8.com/windows10/PNG/16/Arrows/angle_down-16.png") {
      $(".chat-head img").attr("src", "https://maxcdn.icons8.com/windows10/PNG/16/Arrows/angle_up-16.png");
    } else {
      $(".chat-head img").attr("src", "https://maxcdn.icons8.com/windows10/PNG/16/Arrows/angle_down-16.png");
    }
  }

  render(){

    const messages = this.props.messages.map((message, i) => {
      return (
        <div style={{fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'}} key={i} className="msg-receive"><b>{message.author}</b>: {message.message}</div>
      )
    })

    return(
      <div style={{'position': 'fixed'}}className="chat-box">
        <div className="chat-head">
          <h2 style={{fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'}}>Customer Service Rep</h2>
          <img src="https://maxcdn.icons8.com/windows10/PNG/16/Arrows/angle_down-16.png" title="Expand Arrow" width="16" onClick={this.toggleChat}/>
        </div>
        <div className="chat-body">
          <div className="msg-insert">
            <div className="messages">
              {messages ? messages : <div></div>}
            </div>
          </div>
          <div className="chat-text">
            <input type="text" placeholder="Message" className="form-control" value={this.state.message} onKeyDown={ev => {if(ev.keyCode === 13){this.sendMessage(ev)}}} onChange={ev => this.setState({message: ev.target.value})}/>
          </div>
          <div className="send">
            <button onClick={this.sendMessage}>SEND</button>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, dispatchStateToProps)(Chat);