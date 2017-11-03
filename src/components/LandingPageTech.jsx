import React from 'react';

const styles = {
	centered: {
		textAlign: 'center'
	}
}

class LandingPageTech extends React.Component{
	render(){
		return(
			<div className="row">
				<div className="three columns" style={ styles.centered }>
					<img src="" alt=""/>
				</div>
				<div className="three columns" style={ styles.centered }>
					<img src="" alt=""/>
				</div>
				<div className="three columns" style={ styles.centered }>
					<img src="" alt=""/>
				</div>
				<div className="three columns" style={ styles.centered }>
					<img src="" alt=""/>
				</div>
			</div>
		)
	}
}

export default LandingPageTech;