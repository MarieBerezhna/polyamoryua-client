import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Layout from '../components/layout/MainLayout';

const RootRoutes = () => {
	return (
		<Routes>
			<Route path={'/'} element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
};

export default RootRoutes;
