import React from 'react';
import { Icon } from 'react-fa';
import Footer from './Footer';

const styles = {
	justified: {
		textAlign: 'justify'
	},
	blockHeight: {
		paddingTop: '15vh',
		backgroundColor: 'white',
		paddingLeft: 25,
		paddingRight: 25,
		position: 'absolute',
		zIndex: 2,
		minHeight: '85vh'
	}
}

class LandingPageWhy extends React.Component{
	render(){
		return(
			<div style={ styles.blockHeight }>
				<h1>Why Disconeq</h1>
				<br/><br/>
				<div className="row">
					<div className="offset-by-one column ten columns">
						<div className="one-third column" style={ styles.justified } >
							<h1><Icon name="floppy-o" size="2x" /></h1>
							<h5>Saved Forever</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum iste impedit labore eum perferendis, maxime id architecto numquam voluptate earum, ullam unde dolor aliquid non ea laborum sapiente, deleniti eaque!</p>
						</div>
						<div className="one-third column" style={ styles.justified } >
							<h1><Icon name="check-square-o" size="2x" /></h1>
							<h5>Better Organization</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum fugit ratione temporibus sit sapiente voluptas, quod esse officiis unde reiciendis nesciunt ipsa, nobis ipsam nemo aspernatur cumque natus voluptatibus at.</p>
						</div>
						<div className="one-third column" style={ styles.justified } >
							<h1><Icon name="exchange" size="2x" /></h1>
							<h5>Seamless Integration</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque provident harum officiis eos sapiente culpa cumque vitae cum sequi fugiat eaque excepturi, voluptatum laboriosam, at ullam nam sit, earum deleniti.</p>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

export default LandingPageWhy;