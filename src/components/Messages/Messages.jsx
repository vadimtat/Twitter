import React from 'react'
import styled from "styled-components";
import {Dialog} from "./Dialog.jsx";
import {Message} from "./Message.jsx";

const MessagesBlock = styled.div`
  display: grid;
  grid-template-columns: 5fr 10fr;
  width: 100%;
`

let messages = [
    {id: 1, message: 'hi'},
    {id: 2, message: 'lol'},
    {id: 3, message: 'grisha'},
    {id: 4, message: 'alwlele'},
    {id: 5, message: 'you'},
    {id: 6, message: 'you'}
]
let dialogs = [
    {id: 1, name: 'kolya'},
    {id: 2, name: 'dmitriy'},
    {id: 3, name: 'ivan'},
    {id: 4, name: 'dmitriy'},
    {id: 5, name: 'dmitriy'},
    {id: 6, name: 'dmitriy'}
]
let dialogElement = dialogs.map(el => <Dialog key={el.id} id={el.id} name={el.name}/>);

let messagesElement = messages.map(el => <Message key={el.id} id={el.id} message={el.message}/>)
const Messages = () => {
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