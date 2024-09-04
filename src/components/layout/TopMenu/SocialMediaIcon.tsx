type SocialMediaIconProps = {
	link: string;
	imgSrc: string;
};

const SocialMediaIcon = ({ link, imgSrc }: SocialMediaIconProps) => (
	<a href={link} target="_blank">
		<img src={imgSrc} width="32" height="32" />
	</a>
);

export default SocialMediaIcon;
