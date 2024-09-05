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

export const StyledTopMenuWrapperMobile = styled.nav`
	display: flex;
	justify-content: space-between;
	width: 100%;
	z-index: 1;
`;

export const StyledTopMenuList = styled.ul`
	display: flex;
	align-items: flex-end;
`;

export const StyledTopMenuListMobile = styled.ul<{
	open: boolean;
}>`
	position: absolute;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	display: ${({ open }) => (open ? 'flex' : 'none')};
	top: 0;
	bottom: 0;
	height: 100vh;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.8);
	gap: 30px;
	z-index: 2;
`;

export const StyledTopMenuItem = styled.li`
	padding: 0 2rem 0.75rem;
	font-weight: bold;
	text-transform: uppercase;
`;
