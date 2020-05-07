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

const StyledFlex = styled((props) => <Flex {...props} />)`
  ${(props) => props.theme.mq.sm`
    width: 50%;
  `}
`

export const ContactForm = () => {
  const [state, changeState] = useState({
    name: "",
    message: "",
    subject: "",
    email: "",
    sent: false,
    buttonText: "Send",
  })

  const resetForm = () => {
    changeState({
      name: "",
      message: "",
      subject: "",
      email: "",
      sent: false,
      buttonText: "Sent",
    })
  }

  const onChange = (e) => {
    e.preventDefault()
    changeState({ ...state, [e.target.name]: e.target.value })
  }

  const formSubmit = async (e) => {
    e.preventDefault()

    console.log(state)

    changeState({
      buttonText: "...sending",
    })

    let data = {
      name: state.name,
      email: state.email,
      message: state.message,
    }

    // let url = "https://swim-api.pak11273.now.sh/api/contact"
    let url = "http://localhost:5000/api/contact"

    const res = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
      .then((response) => response.json())
      .then((data) => {
        changeState({ sent: true })
        setTimeout(() => resetForm(), 2000)
      })
      .catch((error) => {
        console.error("Error:", error)
      })
  }

  //   axios
  //     .post("API_URI", data)
  //     .then((res) => {
  //       this.setState({ sent: true }, this.resetForm())
  //     })
  //     .catch(() => {
  //       console.log("Message not sent")
  //     })

  return (
    <StyledForm onSubmit={async (e) => await formSubmit(e)}>
      <Flex padding="0">
        <StyledFlex>
          <Label name="name" htmlFor="name">
            Name
          </Label>
          <Input
            onChange={(e) => onChange(e)}
            name="name"
            type="text"
            value={state.name || ""}
            required
          />
        </StyledFlex>
        <StyledFlex>
          <Label name="email" htmlFor="email">
            Email Address
          </Label>
          <Input
            onChange={(e) => onChange(e)}
            name="email"
            type="email"
            required
            value={state.email || ""}
          />
        </StyledFlex>
      </Flex>
      <Flex>
        <Label name="subject" htmlFor="subject">
          Subject
        </Label>
        <Input
          onChange={(e) => onChange(e)}
          name="subject"
          type="text"
          value={state.name || ""}
          required
        />
      </Flex>
      <Flex>
        <Label name="message" htmlFor="message">
          Your Message
        </Label>
        <Textarea
          onChange={(e) => onChange(e)}
          height="300px"
          name="message"
          type="text"
          value={state.message || ""}
          required
        />
      </Flex>

      <div>
        <ContactBtn type="submit">{state.buttonText}</ContactBtn>
      </div>
    </StyledForm>
  )
}
