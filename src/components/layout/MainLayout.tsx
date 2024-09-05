import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import TopMenu from './TopMenu';

const Layout = () => {
	return (
		<>
			<TopMenu />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default Layout;
