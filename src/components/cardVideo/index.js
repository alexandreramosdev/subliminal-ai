import React, { useState } from "react"
import { MdPlayCircleFilled } from "react-icons/md"
import { Wrapper, Content, HeaderCard, TitleCard, Play } from "./styles"

const CardVideo = () => {
  const [email, setEmail] = useState("")

  const submit = e => {
    e.preventDefault()
    console.log(email)
    setEmail("Sending ...")

    setTimeout(() => setEmail(""), 1000)
  }

  return (
    <Wrapper>
      <Content>
        <HeaderCard src={require("../../assets/images/basket.svg")} />
        <TitleCard>Browse The Marketplace For All Services.</TitleCard>

        <Play href="#">
          <MdPlayCircleFilled size="1.5em" style={{ marginRight: "10px" }} />
          WATCH THE FILM
        </Play>
      </Content>
    </Wrapper>
  )
}

export default CardVideo
