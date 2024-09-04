import FlexContainer from '../../FlexContainer';
import { StyledTopMenuList, StyledTopMenuWrapper } from './TopMenu.style';
import TopMenuItem from './TopMenuItem';

const TopMenu = () => (
	<FlexContainer>
		<StyledTopMenuWrapper>
			<StyledTopMenuList>
				<TopMenuItem to="/">Home</TopMenuItem>
				<TopMenuItem to="/about">Non existant page</TopMenuItem>
			</StyledTopMenuList>
		</StyledTopMenuWrapper>
	</FlexContainer>
);

export default TopMenu;
