import { ReactNode } from 'react';

type SocialMediaIconProps = {
	link: string;
	children: ReactNode;
	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
};

const SocialMediaIcon = ({ link, children, onMouseEnter, onMouseLeave }: SocialMediaIconProps) => (
	<a href={link} target="_blank" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
		{children}
	</a>
);

export default SocialMediaIcon;
