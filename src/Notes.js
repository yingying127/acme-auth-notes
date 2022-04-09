import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Notes = ()=> {
  return (
    <div>
      <Link to='/home'>Home</Link>
      <div>
        TODO - Ability of User to manage notes
      </div>
    </div>
  );
};

export default connect()(Notes);
