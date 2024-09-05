import { Link } from 'react-router-dom';
import FlexContainer from '../components/FlexContainer';

const NotFound = () => {
	return (
		<FlexContainer $flexDirection="column" style={{ paddingTop: '40vh' }}>
			<h1>Page was not found</h1>
			<Link to="/">Go back</Link>
		</FlexContainer>
	);
};

export default NotFound;
