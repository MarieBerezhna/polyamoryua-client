import BrandFlag from './BrandFlag';
import { StyledTopMenuList, StyledTopMenuWrapper } from './TopMenu.style';
import TopMenuItem from './TopMenuItem';

const TopMenu = () => (
	<StyledTopMenuWrapper>
		<StyledTopMenuList>
			<BrandFlag />
			<TopMenuItem to="/">Home</TopMenuItem>
			<TopMenuItem to="/about">Non existant page</TopMenuItem>
		</StyledTopMenuList>
	</StyledTopMenuWrapper>
);

export default TopMenu;
