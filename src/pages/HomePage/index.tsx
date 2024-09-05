import FlexContainer from '../../components/FlexContainer';
import { StyledContentSection, StyledHeroSection } from './HomePage.style';

const Home = () => {
	return (
		<FlexContainer $flexDirection="column" $gap={0}>
			<StyledHeroSection>
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
