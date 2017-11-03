import React from 'react';
import LandingPageIntro from './LandingPageIntro';
import LandingPageWhy from './LandingPageWhy';
import LandingPageTech from './LandingPageTech';


class LandingPage extends React.Component{
	render(){
		return(
			<div>
				<LandingPageIntro />
				<LandingPageWhy />
				<LandingPageTech />
			</div>
		)
	}
}

export default LandingPage;