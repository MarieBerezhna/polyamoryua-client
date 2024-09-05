import BrandFlag from './BrandFlag';
import SocialLinks from './SocialLinks';
import { StyledTopMenuList, StyledTopMenuWrapper } from './TopMenu.style';
import TopMenuItem from './TopMenuItem';

const TopMenu = () => (
	<StyledTopMenuWrapper>
		<StyledTopMenuList>
			<TopMenuItem to="/">Home</TopMenuItem>
			<BrandFlag />
			<TopMenuItem to="/about">Non existant page</TopMenuItem>
			<SocialLinks />
		</StyledTopMenuList>
	</StyledTopMenuWrapper>
);

export default TopMenu;
