import React, { Component } from 'react';
import $ from 'jquery'; 
import io from "socket.io-client";

class Chat extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: 'Colin',
      message: '',
      messages: []
    };

    this.socket = io('localhost:3000');

    this.sendMessage = ev => {
      ev.preventDefault();
      this.socket.emit('SEND_MESSAGE', {
        author: this.state.username,
        message: this.state.message
      });
      this.setState({message: ''});
    }

    this.socket.on('RECEIVE_MESSAGE', function(data){
        addMessage(data);
    });

    const addMessage = data => {
        this.setState({messages: [...this.state.messages, data]});
    };
  }

  componentDidMount() {
    $(".chat-body").toggle();
  }

  toggleChat(e) {
    e.preventDefault();
    $(".chat-head img").on("click", function() {
      var src = $(".chat-head img").attr("src");
      $(".chat-body").toggle();
      if (src == "https://maxcdn.icons8.com/windows10/PNG/16/Arrows/angle_down-16.png") {
        $(".chat-head img").attr("src", "https://maxcdn.icons8.com/windows10/PNG/16/Arrows/angle_up-16.png");
      } else {
        $(".chat-head img").attr("src", "https://maxcdn.icons8.com/windows10/PNG/16/Arrows/angle_down-16.png");
      }
    });
  }

  render(){
    return(
      <div className="chat-box">
        <div className="chat-head">
          <h2>Customer Service Rep</h2>
          <img src="https://maxcdn.icons8.com/windows10/PNG/16/Arrows/angle_down-16.png" title="Expand Arrow" width="16" onClick={this.toggleChat}/>
        </div>
        <div className="chat-body">
          <div className="msg-insert">
            <div className="messages">
              {this.state.messages.map(message => {
                return (
                  <div className="msg-receive">{message.author}: {message.message}</div>
                )
              })}
            </div>
          </div>
          <div className="chat-text">
           <input type="text" placeholder="Message" className="form-control" value={this.state.message} onChange={ev => this.setState({message: ev.target.value})}/>
          </div>
          <div className="send">
            <button onClick={this.sendMessage}>SEND</button>
          </div>
        </div>
      </div>
    )
  }
}


export default Chat;