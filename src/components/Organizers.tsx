import React from "react";
//@ts-ignore
import img8_desktop from "../images/desktop_backgrounds/CT_bg.jpg";
//@ts-ignore
import img6_mobile from "../images/mobile_backgrounds/6_fix.jpg";
import styled from "styled-components";
const Img = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Container = styled.div`
  position: relative;
  display: grid;
`;

const ContactBoxTitle = styled.h2`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: clamp(1rem, 2vw, 2.4rem);
  font-family: "Unica One", sans-serif;
  text-align: center;
  line-height: 1.2;
  @media (max-width: 768px) {
    display: none;
  } ;
};
`;

const TextBox = styled.div`
  position: absolute;
  width: 17%;
  height: 10%;
  // bottom: 8%;
  font-size: 1vw;
  line-height: 130%;
  color: #d2764a;
  text-align: center;
  align-items: center;
  display: flexbox;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  } ;
`;

const Picture = styled.picture`
  position: relative;
  top: 1.75rem;
};
`;

const NameText = styled.span`
  font-size: 120%;
  font-weight: 600;
`;

const TextBoxLG = styled(TextBox)`
  left: 23%;
  top: 73%;
`;

const TextBoxMO = styled(TextBox)`
  left: 39.75%;
  top: 69%;
`;

const TextBoxFR = styled(TextBox)`
  left: 56.75%;
  top: 73%;
`;

const Organizers: React.FC = () => {
  return (
    <>
      <Container>
        <Picture>
          <source srcSet={img8_desktop} media="(min-width: 769px)" />
          <source srcSet={img6_mobile} media="(max-width: 768px)" />
          <Img src={img8_desktop} alt="last page" />
        </Picture>
        <ContactBoxTitle id="organizers">
          Kontakt z organizatorami
        </ContactBoxTitle>
        <TextBoxLG>
          <NameText>
            SZYMON LIPKOWSKI <br />{" "}
          </NameText>
          KOODRYNATOR DS. LOGISTYKI <br />
          513 809 540 <br />
          SZYMON.LIPKOWSKI@BEST.KRAKOW.PL <br />
        </TextBoxLG>
        <TextBoxMO>
          <NameText>
            ROZALIA STĘPIEŃ <br />{" "}
          </NameText>
          GŁÓWNY KOORDYNATOR <br />
          783 871 850 <br />
          ROZALIA.STEPIEN@BEST.KRAKOW.PL <br />
        </TextBoxMO>
        <TextBoxFR>
          <NameText>
            TOMASZ PORĘBA <br />{" "}
          </NameText>
          KOODRYNATOR DS. KONTAKTU Z FIRMAMI <br />
          513 800 812 <br />
          TOMASZ.POREBA@BEST.KRAKOW.PL <br />
        </TextBoxFR>
      </Container>
    </>
  );
};

export default Organizers;
