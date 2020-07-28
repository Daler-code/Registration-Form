import styled from  'styled-components';

export const Container = styled.div`
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  overflow-x: hidden;
  margin-left: -20px;
  margin-top: -20px;
  margin-bottom: -20px;
  @media screen and (max-width: 550px) {
    margin-left: -5px;
  }
`;