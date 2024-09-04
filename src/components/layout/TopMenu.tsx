import { Link } from 'react-router-dom';
import FlexContainer from '../FlexContainer';

const TopMenu = () => (
	<FlexContainer>
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
			</ul>
		</nav>
	</FlexContainer>
);

export default TopMenu;
