import React from 'react';
import styled from 'styled-components';

export default function Login(props)
{
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src='/img/logos/cta-logo-one.svg' alt='' />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Disfrútalo en tu pantalla favorita, ya sea tu TV, tableta, computadora, teléfono y otros. Vive una experiencia única con una amplia selección de títulos en 4K. Además, puedes ver en cuatro pantallas en simultáneo para que nadie se quede afuera.
          </Description>
          <CTALogoTwo src='/img/logos/cta-logo-two.png' alt='' />
        </CTA>
        <BackgroundImage />
      </Content>
    </Container>
  );
}

const Container = styled.section`
	overflow: hidden;
	display: flex;
	flex-direction: column;
	text-align: center;
	height: 100vh;
`;

const Content = styled.div`
	margin-bottom: 10vw;
	width: 100%;
	position: relative;
	min-height: 100vh;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 80px 40px;
	height: 100%;
`;

const BackgroundImage = styled.div`
	background-image: url('/img/background/login-background.jpg');
	background-position: top;
	background-size: cover;
	background-repeat: no-repeat;
	position: absolute;
	height: 100%;
	top: 0;
	right: 0;
	left: 0;
	z-index: -1;
`;

const CTA = styled.div`
	max-width: 650px;
	width: 100%;
	display: flex;
	flex-direction: column;
	/* margin-bottom: 2vw;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  transition-timing-function: ease-out;
  transition: opacity 0.2s; */
`;

const CTALogoOne = styled.img`
	margin-bottom: 12px;
	max-width: 600px;
	min-height: 1px;
	display: block;
	width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e3;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 12px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  display: inline-block;
  vertical-align: bottom;
`;
