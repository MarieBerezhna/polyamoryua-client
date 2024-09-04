import { ReactNode } from 'react';
import FlexContainer from './FlexContainer';

type PageWrapperProps = {
	children: ReactNode;
};
const PageWrapper = ({ children }: PageWrapperProps) => (
	<FlexContainer $flexDirection="column">{children}</FlexContainer>
);

export default PageWrapper;
