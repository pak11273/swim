import { ContactBtn, Flex, Input, Label, Textarea } from "components"

import styled from "styled-components"
import { useState } from "react"

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
  padding: 20px;
  margin: 100px 5%;
  width: ${(props) => props.width || "100%"};
  max-width: 1248px;
`

export const ContactForm = () => {
  const [state, changeState] = useState({
    name: "",
    message: "",
    email: "",
    sent: false,
    buttonText: "Send",
  })

  const resetForm = () => {
    changeState({
      name: "",
      message: "",
      email: "",
      buttonText: "Sent",
    })
  }

  const onChange = (e) => {
    useState({ name: e.target.value })
  }

  const formSubmit = (e) => {
    e.preventDefault()

    console.log("sumbitted")

    //   this.setState({
    //     buttonText: "...sending",
    //   })

    //   let data = {
    //     name: this.state.name,
    //     email: this.state.email,
    //     message: this.state.message,
    //   }

    //   axios
    //     .post("API_URI", data)
    //     .then((res) => {
    //       this.setState({ sent: true }, this.resetForm())
    //     })
    //     .catch(() => {
    //       console.log("Message not sent")
    //     })
  }

  return (
    <StyledForm onSubmit={(e) => formSubmit(e)}>
      <Flex>
        <Label name="message-name" htmlFor="message-name">
          Name
        </Label>
        <Input
          onChange={(e) => onChange(e)}
          name="name"
          type="text"
          value={state.name}
          required
        />
      </Flex>
      <Flex>
        <Label name="message-email" htmlFor="message-email">
          Email Address
        </Label>
        <Input
          onChange={(e) => useState({ email: e.target.value })}
          name="email"
          type="email"
          required
          value={state.email}
        />
      </Flex>
      <Flex>
        <Label name="message" htmlFor="message-input">
          Your Message
        </Label>
        <Textarea
          onChange={(e) => changeState({ message: e.target.value })}
          height="300px"
          name="message"
          type="text"
          value={state.message}
          required
        />
      </Flex>

      <div className="button--container">
        <ContactBtn type="submit" className="button button-primary">
          {state.buttonText}
        </ContactBtn>
      </div>
    </StyledForm>
  )
}
