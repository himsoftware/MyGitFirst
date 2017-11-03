import React from 'react';

const styles = {
	rightAlign: {
		textAlign: 'right',
		paddingRight: 25,
	},
	profile: {
		textDecoration: 'none'
	},
	thin: {
		marginTop: 0,
		marginBottom: 10
	}
}

class Footer extends React.Component{
	render(){
		return(
			<div>
				<hr style={styles.thin}/>
				<div style={styles.rightAlign}>&copy; {new Date().getFullYear()}
					<a href="#" style={styles.profile}> Disconeq</a>
				</div>
			</div>
			
		)
	}
}

export default Footer;