import { ComponentType, useState } from 'react';
import FlexContainer from '../../FlexContainer';
import FacebookIcon from '../../icons/FacebookIcon';
import TelegramIcon from '../../icons/TelegramIcon';
import SocialMediaIcon from './SocialMediaIcon';
import { SocialMediaIconProps } from '../../icons/types';

const socials = [
	{
		link: '/f',
		Icon: FacebookIcon,
	},
	{
		link: '/t',
		Icon: TelegramIcon,
	},
];

const SocialLink = ({
	link,
	Icon,
}: {
	link: string;
	Icon: ComponentType<SocialMediaIconProps>;
}) => {
	const [hover, setHover] = useState(false);

	return (
		<SocialMediaIcon
			link={link}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<Icon fill={hover ? '#FCBF00' : '#fff'} />
		</SocialMediaIcon>
	);
};

const SocialLinks = () => (
	<FlexContainer $alignItems="center" $gap={15} style={{ paddingLeft: 20 }}>
		{socials.map(item => (
			<SocialLink key={item.link} {...item} />
		))}
	</FlexContainer>
);

export default SocialLinks;
