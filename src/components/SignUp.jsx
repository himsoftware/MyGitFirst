import React from 'react';

const styles = {
	container: {
		padding: '7% 5vw 0 5vw',
	}
};


class SignUp extends React.Component{

	submitHandler(event){
		event.preventDefault();
		const signUpDetails = {
			name    : this.name.value,
			email   : this.email.value,
			password: this.password.value
		}
		this.props.signUp( signUpDetails );
		this.name.value     = '';
		this.email.value    = '';
		this.password.value = '';
	}

	render(){
		return(

			<form style={styles.container} onSubmit={ (e) => this.submitHandler(e) } onChange={ () => this.props.signUpErrorReset() }>
				<div className="row">
					<div className="offset-by-three columns six columns">
						{ this.props.auth.message }
					</div>
				</div>
				<br/>
				
				<div className="row">
					<div className="offset-by-three columns six columns">
						<input ref={ (input) => this.name = input} className="u-full-width" type="text" placeholder="Name" required/>
					</div>
				</div>
				<div className="row">
					<div className="offset-by-three columns six columns">
						<input ref={ (input) => this.email = input} className="u-full-width" type="email" placeholder="Email" required/>
					</div>
				</div>
				<div className="row">
					<div className="offset-by-three columns six columns">
						<input ref={ (input) => this.password = input} className="u-full-width" type="password" placeholder="Password" required/>
					</div>
				</div>				
				<div className="row">
					<div className="offset-by-three columns six columns">
						<input className="button-primary" type="submit" value="Sign Up!"/>
					</div>
				</div>					
			</form>
		)
	}
}

export default SignUp;