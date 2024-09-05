import { useState } from 'react';
import HamburgerIcon from '../../icons/Hamburger';
import BrandFlag from './BrandFlag';
import SocialLinks from './SocialLinks';
import { StyledTopMenuListMobile, StyledTopMenuWrapperMobile } from './TopMenu.style';
import TopMenuItem from './TopMenuItem';

const TopMenuMobile = () => {
	const [open, setOpen] = useState(false);

	return (
		<StyledTopMenuWrapperMobile>
			<BrandFlag width={90} height={51} />
			<HamburgerIcon onClick={() => setOpen(!open)} />
			<StyledTopMenuListMobile open={open}>
				<TopMenuItem to="/">Home</TopMenuItem>
				<TopMenuItem to="/about">Non existant page</TopMenuItem>
				<SocialLinks />
			</StyledTopMenuListMobile>
		</StyledTopMenuWrapperMobile>
	);
};

export default TopMenuMobile;
