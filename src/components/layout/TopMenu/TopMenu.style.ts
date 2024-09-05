import styled from 'styled-components';

export const StyledTopMenuWrapper = styled.nav`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: center;
	z-index: 1;
`;

export const StyledTopMenuList = styled.ul`
	display: flex;
	align-items: flex-end;
`;

export const StyledTopMenuItem = styled.li`
	padding: 0 2rem 0.75rem;
	font-weight: bold;
	text-transform: uppercase;
`;
