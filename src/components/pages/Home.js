import React from 'react';
import styled from 'styled-components';
import ImgSlider from '../ImgSlider';
import Viewers from '../Viewers';

export default function Home(props)
{
  return (
    <Container>
      <ImgSlider />
      <Viewers />
    </Container>
  );
}

const Container = styled.main`
	position: relative;
	min-height: calc(100vh - 250px);
	overflow-x: hidden;
	display: block;
	top: 72px;
	padding: 0 calc(3.5vw + 5px);

	&:after {
		background: url('/img/background/home-background.png') center center / cover no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0px;
    opacity: 0.5;
    z-index: -1;
	}
`;
