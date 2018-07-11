import React, { Component, Fragment } from "react";

export default class Tarefas extends Component {

    state = {
        tarefa : "",
        tarefas : []
    }

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <Fragment>
                <input onChange={ this.handleChange } type="text" value={ this.state.tarefa }/>
                <button onClick={ this.handleClick }>Adicionar</button>
                <ul>
                    { this.state.tarefas.map(tarefa => <li key={ tarefa }>{ tarefa }</li>) }
                </ul>
            </Fragment>
        );
    }

    handleChange(event) {
        this.setState({ tarefa : event.target.value });
    }

    handleClick() {
        this.setState({ tarefas : [].concat(this.state.tarefas, this.state.tarefa) });
    }

}