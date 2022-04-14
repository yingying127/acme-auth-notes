import React from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { setNotes, deleteNotes } from './store/index';
import CreateNote from './CreateNote';

const Notes = ({ auth, notes, setNotes, deleteNotes })=> {
  return (
    <div>
      <Link to='/home'>Home</Link>
      <div>
        <h3>Notes for { auth.username }</h3> 
        {
          notes.map(note => {
            return (
                <li key={note.id}>
                  {note.text}
                  <button onClick={() => deleteNotes(note.id)}>x</button>
                </li>
            )
          })
        }
      </div>
      <Route component={ CreateNote } />
    </div>
  );
};

const mapDispatch = (dispatch) => {
  return {
    setNotes: async() => await dispatch(setNotes()),
    deleteNotes: async(notes) => await dispatch(deleteNotes(notes))
  }
}

export default connect((state) => state, mapDispatch)(Notes);
