import { styled } from '../../styles';

const StyledPageContainer = styled('div')(({ theme }) => `
  padding: ${theme.spacing(4, 3)};
`);

export interface PageContentProps {
  className?: string;
}

const PageContent: React.FC<PageContentProps> = ({
  children, className,
}) => (
  <StyledPageContainer className={className}>
    {children}
  </StyledPageContainer>
);

export default PageContent;
