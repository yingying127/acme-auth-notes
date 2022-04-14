import React from 'react';
import { connect } from 'react-redux';
import { signIn } from './store';

class SignIn extends React.Component{
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
      error: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(ev){
    this.setState({ [ev.target.name]: ev.target.value });
  }
  async onSubmit(ev){
    ev.preventDefault();
    const { username, password } = this.state;
    try {
      await this.props.signIn({
        username,
        password
      });
    }
    catch(ex){
      console.log(ex);
      this.setState({ error: ex.response.data.error });
    }
  }
  render(){
    const { onChange, onSubmit } = this;
    const { username, password, error } = this.state;
    return (
      <form onSubmit={ onSubmit }>
        { error }
        <label id='login'htmlFor='username'>Username:</label>
        <input value={ username } onChange={ onChange } name='username'/>

        <label id='login' htmlFor='password'>Password:</label>
        <input value={ password } onChange={ onChange } name='password'/>
        <button disabled={ !username || !password }>Sign In</button>
      </form>
    );
  }
}

const mapDispatch = (dispatch)=> {
  return {
    signIn: (credentials)=> dispatch(signIn(credentials))

  };
};

export default connect(null, mapDispatch)(SignIn);
