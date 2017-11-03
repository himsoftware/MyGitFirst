import React from 'react';

const styles = {
	container: {
		paddingTop: '6%'
	}
};

class NotFound extends React.Component{
	render(){
		return(
			<div>
				<div style={styles.container}>
					<div className="row">
						<div className="two columns">&ensp;</div>
						<div className="eight columns">
							<h3>Oops it seems that you have entered or followed an invalid link</h3>
							<p>Check the address for typing errors such as <b>ww.</b>example.com instead of <b>www.</b>example.com.</p>
							<p>Or click on this <a href="/">link</a> to go back to home page.</p>	
						</div>
						<div className="two columns"></div>	
					</div>	
				</div>
			</div>
		)
	}
}

export default NotFound;