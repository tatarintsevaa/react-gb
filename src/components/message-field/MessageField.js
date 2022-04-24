import React from "react";
import {Message} from "../messege";

export class MessageField extends React.Component {
    state = {
        messages: [{ author: "User", value: "Test1" }],
    };

    sendMessage = () => {
        const { messages } = this.state;

        this.setState({
            messages: [...messages, { author: "User", value: "How are you?" }],
        });
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { messages } = this.state;
        console.log(messages[prevState.messages.length - 1]);
        if (messages[messages.length - 1].author === 'User') {
            setTimeout(() => {
                this.setState({
                    messages: [...messages, { author: "Robot", value: "I am a robot!" }]
                })
            }, 500);
        }
    }

    render() {
        const { messages } = this.state;

        return (
            <div>
                <button onClick={this.sendMessage}>Отправить</button>
                {messages.map((message, index) => (
                    <Message message={message} key={index} />
                ))}
            </div>
        );
    }
}
