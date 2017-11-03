import React from 'react';
import { Link } from 'react-router';

const styles = {
	formContainer: {
		paddingTop: '7%'
	},
	noDecoration: {
		textDecoration: 'none'
	},
	mainContainer: {
		padding: '0vw 5vw 0vw 5vw'
	}
};


class SignUp extends React.Component{

	submitHandler(event){
		event.preventDefault();
		const credentials = {
			email: this.email.value,
			password: this.password.value
		}
		this.props.signIn( credentials );
	}

	render(){
		return(
			<div style={ styles.mainContainer }>
				<form style={styles.formContainer} onSubmit={ (e) => this.submitHandler(e) } onChange={ () => this.props.signInResetErrorMessage() }>
					<div className="row">
						<div className="offset-by-three columns six columns">
							{ this.props.signInStatus.message }
						</div>
					</div>
					<br/>
					<div className="row">
						<div className="offset-by-three columns six columns">
							<input ref={ (input) => this.email = input } className="u-full-width" type="email" placeholder="Email"/>
						</div>
					</div>
					<div className="row">
						<div className="offset-by-three columns six columns">
							<input ref={ (input) => this.password = input } className="u-full-width" type="password" placeholder="Password"/>
						</div>
					</div>				
					<div className="row">
						<div className="offset-by-three columns six columns">
							<input className="button-primary" type="submit" value="Sign In!"/>
						</div>
					</div>					
				</form>
				<div className="row">
					<div className="offset-by-three columns six columns">
						<Link to="" style={ styles.noDecoration }>Forgot password?</Link>
					</div>
				</div>
				<div className="row">
					<div className="offset-by-three columns six columns">
						New to Disconeq? <Link to={'/signup'} style={ styles.noDecoration} >Create an account</Link>
					</div>
				</div>		
			</div>
		)
	}
}

export default SignUp;