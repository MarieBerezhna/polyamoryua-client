import TopMenuDesktop from './TopMenuDesktop';
import TopMenuMobile from './TopMenuMobile';
import { isMobile } from 'react-device-detect';

console.log(isMobile);

const TopMenu = () => (isMobile ? <TopMenuMobile /> : <TopMenuDesktop />);

export default TopMenu;
