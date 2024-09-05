import styled from 'styled-components';
import FlexContainer from '../../components/FlexContainer';

export const StyledHeroSection = styled(FlexContainer)`
	position: relative;
	flex-direction: column;
	background-image: url('images/homebackground.webp');
	background-size: 100%;
	background-color: gray;
	background-blend-mode: multiply;
	background-position: top;
	background-repeat: no-repeat;
	height: 100vh;
	width: 100%;

	&::before,
	&::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 300px;
	}

	&::before {
		top: 0;
		background: linear-gradient(180deg, #111, transparent);
	}

	&::after {
		bottom: 0;
		background: linear-gradient(180deg, transparent, #111);
	}
`;

export const StyledContentSection = styled(FlexContainer)`
	flex-direction: column;
	max-width: 1280px;
	max-width: 100%;
	min-height: 50vh;
`;
