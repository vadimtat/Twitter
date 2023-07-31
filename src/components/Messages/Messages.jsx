import React from 'react'
import styled from "styled-components";
import {Dialog} from "./Dialog.jsx";
import {Message} from "./Message.jsx";

const MessagesBlock = styled.div`
  display: grid;
  grid-template-columns: 5fr 10fr;
  width: 100%;
`
const Messages = (props) => {
    let dialogElement = props.dialogs.map(el => <Dialog key={el.id} id={el.id} name={el.name}/>);

    let messagesElement = props.messages.map(el => <Message key={el.id} id={el.id} message={el.message}/>)
    return (
        <MessagesBlock>
            <div>
                {dialogElement}
            </div>
            <div>
                {messagesElement}
            </div>
        </MessagesBlock>
    )
        ;
}
export {
    Messages
};