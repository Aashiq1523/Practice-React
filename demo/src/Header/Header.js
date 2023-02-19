import React, {Component} from 'react';
import './Header.css'; 
import Button from '../Button/Button';

class Header extends Component {
	
	constructor (props) {
		super(props);
		this.state = {showLogoutButton : true};
	}

	onLogout = () => {		
		this.setState(prevState => ({showLogoutButton: !prevState.showLogoutButton}) );
		console.log("Hoo");
	};

	render () {
	
		let logoutButton = null;
		
		if (this.state.showLogoutButton) {
			logoutButton = (
				<div className = "logoutDiv">
					<Button className = "logout" 
							name = "Logout" 							
							onClick = {this.onLogout}
							isPrimary = {false}>										
					</Button>
				</div>
			);
		}
	
		return (

			<div className = "header">
				<div className = "menubar">
					<div className = "bar"></div>
					<div className = "bar"></div>
					<div className = "bar"></div>
				</div>
				<div className = "title">			
					IPL Auction
				</div>	
				{logoutButton}			
			</div>
		);
	}
}

export default Header;



// let onLogout = () => {
// 	console.log("Hoo");
// }

// let logoutButton = <div className = "logoutDiv">
// 						<Button className = "logout" 
// 								name = "Logout" 
// 								Icon = {RiLogoutBoxLine} 
// 								onClick = {onLogout}>										
// 						</Button>
//                 	</div>

// let header = () => {
//     return (
//         <div className = "header">
// 			<div className = "menubar">
// 				<div className = "bar"></div>
// 				<div className = "bar"></div>
// 				<div className = "bar"></div>
// 			</div>
// 	    	<div className = "title">			
// 		    	IPL Auction
// 		    </div>	
// 			{logoutButton}			
// 	    </div>
//     );

// export default header;