import FlexContainer from '../../components/FlexContainer';
import { StyledContentSection, StyledHeroSection } from './HomePage.style';
import { isMobile } from 'react-device-detect';

const Home = () => {
	return (
		<FlexContainer $flexDirection="column" $gap={0}>
			<StyledHeroSection
				backgroundUrl={`images/homebackground${isMobile ? 'mobile' : ''}.webp`}
			>
				<StyledContentSection>
					<h1>Polyamory UA</h1>
					<p>Welcome to the home page!</p>
				</StyledContentSection>
			</StyledHeroSection>
			<StyledContentSection>Block</StyledContentSection>
			<StyledContentSection>Block</StyledContentSection>
			<StyledContentSection>Block</StyledContentSection>
		</FlexContainer>
	);
};

export default Home;
