import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNotes } from './store/index';

class CreateNote extends Component {
    constructor() {
        super();
        this.state = {
            text: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }
    handleSubmit(ev) {
        ev.preventDefault()
        this.props.addNotes({ text: this.state.text })
        this.setState({ text: '' })
        //^ this gets rid of the previous input form after clicking the button
    }
    handleChange(ev) {
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }
    render() {
        const { text } = this.state;
        const { handleSubmit, handleChange } = this;
        return (
            <div>
                <form onSubmit={ handleSubmit }>
                    <label htmlFor='text'>Add New Tasks:</label>
                    <input onChange={ handleChange } name='text' placeholder='*' value={text} />

                    <button disabled={ !text }>Add to Notes</button>
                </form>
            </div>
        )
    }
}

const mapDispatch = (dispatch) => {
    return {
        addNotes: (text) => {
            dispatch(addNotes(text))
        }
    }
}

export default connect(null, mapDispatch)(CreateNote)