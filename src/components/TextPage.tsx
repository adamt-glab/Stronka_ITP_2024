import React from "react";
//@ts-ignore
import img2_desktop from "../images/desktop_backgrounds/2.svg";
//@ts-ignore
import img2_mobile from "../images/mobile_backgrounds/2.jpg";
import styled from "styled-components";

const Img = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Container = styled.div`
  position: relative;
  display: grid;
  top: 2rem;
`;

const TextBox1 = styled.div`
  width: 38%;
  height: 12%;
  top: 18%;
  left: 4%;

  position: absolute;
  display: flexbox;
  text-align: justify;
  align-items: center;
  justify-content: center;

  font-size: 1.3vw;
  color: #d2764a;

  @media (max-width: 768px) {
    width: 80%;
    left: 10%;
    top: 7%;
    height: 8%;
    font-size: 3vw;
  } ;
`;

const TextBox2 = styled(TextBox1)`
  height: 5%;
  top: 33%;
  @media (max-width: 768px) {
    height: 4%;
    top: 19%;
  }
`;

const TextBox3 = styled(TextBox1)`
  top: 54%;
  left: 56%;
  @media (max-width: 768px) {
    height: 8.4%;
    top: 73.5%;
    left: 10%;
  }
`;

const TextBox4 = styled(TextBox3)`
  top: 69%;
  height: 6.5%;
  @media (max-width: 768px) {
    height: 6%;
    top: 86%;
    left: 10%;
  }
`;

const TextBoxTitle = styled(TextBox1)`
  font-size: 200%;
  font-weight: 600;
  top: 5%;
  height: 6.5%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 768px) {
    height: 6%;
    top: 5%;
  }
`;

const HeroTextContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  // height: 20%;
  transform: translateX(-50%);
  width: clamp(6rem, 80vw, 36rem);
  text-align: center;

  @media (max-width: 769px) {
    width: clamp(6rem, 50vw, 36rem);
  }
`;

const H2 = styled.h2`
  font-size: clamp(0.2rem, 3.5vw, 2.5rem);
  line-height: 1.15;
  @media (max-width: 769px) {
    font-size: clamp(0.4rem, 3vw, 2rem);
  }
`;

const H2_smaller = styled.h2`
  font-size: clamp(0.15rem, 3vw, 2rem);
  line-height: 1.15;
  @media (max-width: 769px) {
    font-size: clamp(0.3rem, 2vw, 1.5rem);
  }
`;

const TextPage: React.FC = () => {
  return (
    <>
      <Container>
        <picture>
          <source srcSet={img2_desktop} media="(min-width: 769px)" />
          <source srcSet={img2_mobile} media="(max-width: 768px)" />
          <Img src={img2_desktop} alt="text page" />
        </picture>
        <HeroTextContainer>
          <H2>
            6 marca 2024
          </H2>
          <H2>
            10:00-16:00
          </H2>
          <H2_smaller>
            Stadion Miejski im. Henryka Reymana
          </H2_smaller>
        </HeroTextContainer>

        <TextBox1>
          Inżynierskie Targi Pracy organizowane przez Stowarzyszenie Studentów BEST AGH Kraków to projekt, który już od 26 lat łączy środowisko akademickie i biznesowe.
          Naszym głównym celem jest zapewnienie wszystkim uczestnikom Targów, jak najwyższej jakości wydarzenia oraz pełnej satysfakcji.
        </TextBox1>

        <TextBox2>
          Aby to zrealizować, w tym roku zaprosiliśmy X firm, które są wiodącymi markami w swoich branżach.
          Z naszym wydarzeniem współpracuje także X firm medialnych.
        </TextBox2>

        <TextBox3>
          W dniu 6 marca spotkają się pracodawcy szukający
          przyszłych pracowników oraz studenci starający się
          o wymarzoną pracę lub staż.
          Na naszej stronie internetowej znajdziecie informacje
          o naszych wystawcach i ich ofertach pracy.
        </TextBox3>

        <TextBox4>
          Istnieje również możliwość przesłania swojego CV do naszej bazy,
          dzięki której nasi wystawcy poznają Was jeszcze lepiej
          pod kątem waszego doświadczenia i umiejętności.
        </TextBox4>

      </Container>
    </>
  );
};

export default TextPage;
