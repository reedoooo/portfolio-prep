import React from 'react';
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import UserProfileContainer from '../../containers/profile/UserProfileContainer';
import NavBar from '../../components/headings/navbar/Navigation';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        backgroundColor: '#f0f8ff', // AliceBlue color
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderWidth: '1px',
        borderColor: 'black',
        color: 'black',
      },
    },
  },
});

const UserProfilePage = () => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <NavBar />
      <UserProfileContainer />
    </ChakraProvider>
  );
};

export default UserProfilePage;
