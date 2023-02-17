import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  & * {
    width: 100%;
    height: 100%;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
`;
