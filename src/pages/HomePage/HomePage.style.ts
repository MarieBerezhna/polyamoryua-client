import styled from 'styled-components';
import FlexContainer from '../../components/FlexContainer';

export const StyledHomePageWrapper = styled(FlexContainer)`
	flex-direction: column;
	background-image: url('images/homebackground.webp');
	background-size: 100%;
	background-color: gray;
	background-blend-mode: multiply;
	background-position: top;
	height: 100vh;
	padding: 0 2rem;
`;
