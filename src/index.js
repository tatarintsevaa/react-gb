import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
// import App from './App';
import reportWebVitals from "./reportWebVitals"

const root = ReactDOM.createRoot(document.getElementById("root"))

const messages = []

const addMessages = () => {
  messages.push("test1")
  render()
}

const Message = ({ message }) => {
  return (
    <React.Fragment>
      <h1>{message}</h1>
    </React.Fragment>
  )
}

const MessageField = ({ messages }) => {
  return (
    <>
      <Button />
      {messages.map((message, index) => (
        <Message message={message} key={index} />
      ))}
    </>
  )
}

const Button = () => {
  return (
    <React.Fragment>
      <button onClick={addMessages}>add</button>
    </React.Fragment>
  )
}

const render = () => {
  root.render(<MessageField messages={messages} />)
}

render()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
