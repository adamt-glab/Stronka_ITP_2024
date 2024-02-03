import React from "react";
import styled from "styled-components";
import Gears from './Gears';

const Container = styled.div`
  position: relative;
  display: grid;
  top: 2rem;
`;

const TextBox1 = styled.div`
  width: 38%;
  height: 12%;
  top: 18%;
  left: 6%;

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
    top: clamp(5em, 50vh, 4rem);
    height: clamp(7em, 20vh, 6rem);
    font-size: 3vw;
  };
`;

const TextBox2 = styled(TextBox1)`
  height: 5%;
  top: 33%;
  @media (max-width: 768px) {
    top: clamp(9em, 60vh, 8rem);
    height: clamp(10em, 40vh, 9rem);
  }
`;

const TextBox3 = styled(TextBox1)`
  top: 70%;
  left: 56%;
  @media (max-width: 768px) {
    height: 8.4%;
    top: 78%;
    left: 10%;
  }
`;

const TextBox4 = styled(TextBox3)`
  top: 85%;
  height: 6.5%;
  @media (max-width: 768px) {
    height: 6%;
    top: 89%;
    left: 10%;
  }
`;

const HeroTextContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: clamp(6rem, 80vw, 36rem);
  text-align: center;
`;

const H2 = styled.h2`
  font-size: clamp(0.8rem, 5vw, 2.5rem);
  line-height: 1.15;
`;

const H2_smaller = styled.h2`
  font-size: clamp(0.8rem, 4.6vw, 2rem);
  line-height: 1.15;
`;

const TextPage: React.FC = () => {
  return (
    <>
      <Container>
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

        <Gears />
      </Container>
    </>
  );
};

export default TextPage;
