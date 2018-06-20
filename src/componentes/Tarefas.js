import React, { Component } from "react";

export default class Tarefas extends Component {

    render() {
        const tarefas = ["Acordar", "Tomar café", "Escovar os dentes", "Ir trabalhar"];
        return (
            <ul>
                { tarefas.map(tarefa => <li>{ tarefa }</li>) }
            </ul>
        );
    }

}