import { Outlet } from 'react-router-dom';
import TopMenu from './TopMenu';
import Footer from './Footer';

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
