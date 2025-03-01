import styled from 'styled-components'

export const HeroH = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;

  ::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.corPrincipal};
    content: '';
    opacity: 0.7;
  }
  div {
    position: relative;
    color: ${(props) => props.theme.corTextoHero};
  }
  @media (max-width: 767px) {
    height: auto;
    padding: 24px 0;
  }
`
export const HeroTitle = styled.h2`
  font-size: 48px;
  font-family: Gloock, serif;
`
