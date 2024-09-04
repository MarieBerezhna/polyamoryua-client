import FlexContainer from '../../FlexContainer';
import BrandFlag from './BrandFlag';
import SocialMediaIcon from './SocialMediaIcon';
import { StyledTopMenuList, StyledTopMenuWrapper } from './TopMenu.style';
import TopMenuItem from './TopMenuItem';

const TopMenu = () => (
	<StyledTopMenuWrapper>
		<StyledTopMenuList>
			<BrandFlag />
			<TopMenuItem to="/">Home</TopMenuItem>
			<TopMenuItem to="/about">Non existant page</TopMenuItem>
			<FlexContainer $alignItems="center" $gap={15}>
				<SocialMediaIcon link="/" imgSrc="images/telegram.webp" />
				<SocialMediaIcon link="/" imgSrc="images/facebook.webp" />
			</FlexContainer>
		</StyledTopMenuList>
	</StyledTopMenuWrapper>
);

export default TopMenu;
