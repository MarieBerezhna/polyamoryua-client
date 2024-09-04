import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div>
			<h1>Page was not found</h1>
			<Link to="/">Go back</Link>
		</div>
	);
};

export default NotFound;
