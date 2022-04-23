import { ReactNode } from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const MainContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
}));

export interface MainContainerProps {
  children: ReactNode;
}

function Main({ children }: MainContainerProps) {
  return (
    <MainContainer>
      <Container maxWidth="md">{children}</Container>
    </MainContainer>
  );
}

export default Main;
