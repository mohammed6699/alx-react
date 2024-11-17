import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import WithLoggingHOC from '../HOC/WithLogging'

class Login extends Component {
	constructor(props){
		super(props);
		this.state = {
			enableSubmit: false,
		}
		this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
	};
	handleLoginSubmit(event) {
		event.prevrntDefault();
		this.setState({ isLoggedIn: true });
	}
	validatedForm(){
		const { email, password } = this.state;
		this.setState({enableSubmit: email.trim() !== '' && password.trim() !== ''});
	}
	render() {
		return (
			<React.Fragment>
				<div className="App">
					<main className={css(loginStyles.appBody)}>
						<p>Login to access the full dashboard</p>
						<div className={css(loginStyles.inputs)}>
							<label className={css(loginStyles.label)} htmlFor="email" onClick={() => {
								// select corresponding input
								document.getElementById('password').focus();
							}}>Email</label>
							<form onSubmit={this.handleLoginSubmit}>
								<input type="email" id="email" 
								className={css(loginStyles.input)} 
								value={this.state.email} 
								onChange={this.handleChangeEmail} 
								/>
								<label 
								className={css(loginStyles.label)}
							 	htmlFor="password" onClick={() => {
									// select corresponding input
									document.getElementById('password').focus();
								}} 
								value={this.state.password}
								onChange={this.handleChangePassword}
								>Password</label>
								<input type="password" id="password" className={css(loginStyles.input)} />
							</form>
							<input type='submit' disabled={!this.state.enableSubmit}className={css(loginStyles.button)}>OK</input>
						</div>
					</main>
				</div>
			</React.Fragment>
		)
	}
}


const loginStyles = StyleSheet.create({
	appBody: {
		display: 'flex',
		flexDirection: 'column',
		marginBottom: '3rem',
		height: '100%',
	},

	inputs: {
		'@media (min-width: 350px)': {
			display: 'flex',
			flexDirection: 'column',
			maxWidth: '200px'
		},
		'@media (min-width: 900px)': {
			display: 'flex',
			flexDirection: 'row',
		}
	},

	input: {
		height: '15px',
		marginLeft: '0.2rem',
		marginTop: '0.5rem',
	},

	label: {
		marginTop: '0.5rem',
	},

	button: {
		height: '21px',
		marginTop: '0.6rem',
		maxWidth: '40px',
	}
})


export default WithLoggingHOC(Login)