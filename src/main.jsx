import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

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

let tweets = [
    {
        id: 1,
        text: 'Practically invisible',
        alt: 'автомобиль',
        url: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/07/25/16587103907228.jpg'
    },
    {
        id: 2,
        text: 'Practically',
        alt: 'автомобиль',
        url: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/07/25/16587103907228.jpg'
    },
]

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App tweets={tweets} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>,
)
