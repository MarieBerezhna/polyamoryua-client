import { Link } from 'react-router-dom';
import { StyledTopMenuItem } from './TopMenu.style';

type TopMenuItemProps = {
	to: string;
	children: JSX.Element | string;
};

const TopMenuItem = ({ to, children }: TopMenuItemProps) => (
	<StyledTopMenuItem>
		<Link to={to}> {children}</Link>
	</StyledTopMenuItem>
);

export default TopMenuItem;
