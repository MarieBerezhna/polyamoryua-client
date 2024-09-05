const HamburgerIcon = ({ onClick }: { onClick?: () => void }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0,0,256,256"
		width="32px"
		height="32px"
		fillRule="nonzero"
		onClick={onClick}
		style={{
			position: 'absolute',
			zIndex: 5,
			top: 15,
			right: 15,
		}}
	>
		<g
			fill="#ffffff"
			fillRule="nonzero"
			stroke="none"
			strokeWidth="1"
			strokeLinecap="butt"
			strokeLinejoin="miter"
			strokeMiterlimit="10"
			strokeDasharray=""
			strokeDashoffset="0"
			fontFamily="none"
			fontWeight="none"
			fontSize="none"
			textAnchor="none"
		>
			<g transform="scale(5.12,5.12)">
				<path d="M0,7.5v5h50v-5zM0,22.5v5h50v-5zM0,37.5v5h50v-5z" />
			</g>
		</g>
	</svg>
);
export default HamburgerIcon;
