import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import useMediaQuery from "../utils/UseMediaQuery";
import PartnerGears from "./PartnerGears";

function importAll(r: any) {
  return r.keys().map(r);
}

const imagesDesktop = importAll(
  require.context("../images/desktop_backgrounds", false, /\.(png|jpe?g|svg)$/)
);
const imagesMobile = importAll(
  require.context("../images/mobile_backgrounds", false, /\.(png|jpe?g|svg)$/)
);
const logos = importAll(
  require.context("../images/logos", false, /\.(png|jpe?g|svg)$/)
);

// PANELS

const ParentDiv = styled.div`
  margin-top: clamp(3rem, 10vw, 12em);
  width: 100%;
  display: flex;
`;

const ChildDiv = styled.div`
  flex: 1;
`;

const LeftDiv = styled(ChildDiv)`
  position: relative;
  padding: 0 0.5rem 0 0.5rem;
  display:grid;
  grid-template-rows: auto 1fr;
  `;

const RightDiv = styled(ChildDiv)`
`;

const Card = styled.div`
  height: 80vh;
  background: #fffffa;
  display:flex;
  flex-direction: column;
  position:sticky;
  top:0;

  @media (max-width: 768px) {
    height: 40vh;
  } ;
`;

const Container = styled.div`
  position: relative;
  display: grid;
  top: 1.75rem;
  aspect-ratio:1;
`;

const SponsorsPanel = styled.div`
  height: 100%;
  box-sizing: border-box;
  padding: 10%;
  display: grid;
  grid-template-columns: repeat(3, calc(1/3 * 100%));
  align-content: center;
  // background: #bb25de44;
  justify-content: space-around;
  gap: 2.5%;
  @media (max-width: 768px) {
      grid-template-columns: repeat(2, 50%);
  };
`;

// ELEMENTS

const PartnershipText = styled.span`
  font-size: 2.2vw;
  font-weight: 600;
  grid-column: span 3;
  justify-self: center;
  @media (max-width: 768px) {
    grid-column: span 2;
  } ;
`;

const SponsorImg = styled.img`
  width: 100%;
  display: block;
  // background-color: rgba(0,0,0,0.15);
  
  aspect-raito: 1;
  aspect-ratio: 3/2;
  object-fit: contain;
`;

const SabreText = styled.span`
  font-size: 2.2vw;
  font-weight: 600;
  margin-bottom: 2rem;
  margin-top: 2rem;
  position: absolute;

  transform: translate(-50%, -50%);
  left: 50%;
  top: 25%;
`;

const SabreImg = styled.img`
  // background-color: rgba(0,0,0,0.15);
  width: 50%;
  display: block;
  // background-color: rgba(0,0,0,0.15);
  aspect-raito: 1;
  height: 100%;
  margin: 0 auto;
`;

const PMIImg = styled(SabreImg)``;

const PMIText = styled(SabreText)``;

// ##################################
// SPONSORS
// ##################################

const ParentLink = styled.a`
  align-self: center;
  width: 100%;
`;

const Sabre = styled.a`
  width: 100%;
  position: absolute;
  align-self: center;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
`;

const PMI = styled(Sabre)`
  width: 50%;
  top: 55%;
`;

const GE = styled(ParentLink)`
`;

const Woodward = styled(ParentLink)`
`;

const IBM = styled(ParentLink)`
`;

const Aptiv = styled(ParentLink)`
`;

const Pega = styled(ParentLink)`
`;
const Mars = styled(ParentLink)`
`;

const Sponsors: React.FC = () => {
  return (
    <Container id="sponsors">
      <ParentDiv>
        <LeftDiv>
          <Card>
            <SabreText>Sponsor główny</SabreText>
            <Sabre href="https://www.sabre.com/locations/poland/" target="_blank">
              <SabreImg src={logos[0].default} alt="Sabre" />
            </Sabre>
          </Card>
          <Card>
            <SponsorsPanel>
              <PartnershipText>Sponsorzy</PartnershipText>
              <Pega href="https://www.pega.com/" target="_blank">
                <SponsorImg src={logos[2].default} alt="Pega" />
              </Pega>

              <Aptiv href="https://www.aptiv.com/" target="_blank">
                <SponsorImg src={logos[4].default} alt="Aptiv" />
              </Aptiv>

              <Woodward href="https://www.woodward.com/" target="_blank">
                <SponsorImg src={logos[1].default} alt="Woodward" />
              </Woodward>

              <Mars href="https://www.mars.com/" target="_blank">
                <SponsorImg src={logos[3].default} alt="Mars" />
              </Mars>

              <GE href="https://www.ge.com/" target="_blank">
                <SponsorImg src={logos[7].default} alt="GE" />
              </GE>

              <IBM href="https://www.ibm.com/blogs/ibm-poland/" target="_blank">
                <SponsorImg src={logos[16].default} alt="IBM" />
              </IBM>
            </SponsorsPanel>
          </Card>
          <Card>
            <PMIText>Partner Strefy Studenta</PMIText>
            <PMI href="https://www.pmi.com/markets/poland/pl/about-us/overview" target="_blank">
              <PMIImg src={logos[17].default} alt="PMI" />
            </PMI>
            {/* <PartnershipText>Sponsor merytoryczny</PartnershipText>
              <p>SM</p> */}
          </Card>
          {/* <Card>
            <PartnershipText>Partner techniczny</PartnershipText>
              <p>PT</p>
          </Card> */}
          {/* <Card>
            <PartnershipText>Patroni medialni</PartnershipText>
          </Card> */}
        </LeftDiv>
        <RightDiv>
          <PartnerGears />
        </RightDiv>
      </ParentDiv>
    </Container>
  );
};

export default Sponsors;

//   <div id="sponsors">
//     <Container>
//       {!isMobile && (
//         <>
//           <ImgDesktop src={imagesDesktop[3].default} alt="img4" />
//           <ImgDesktop src={imagesDesktop[4].default} alt="img5" />
//           <ImgDesktop
//             id="partners"
//             src={imagesDesktop[5].default}
//             alt="img6"
//           />
//           <ImgDesktop
//             id="patrons"
//             src={imagesDesktop[6].default}
//             alt="img7"
//           />
//           {/* <Crane src={imagesDesktop[8].default} alt="crane" /> */}

//           {/* <MovingGears /> */}

//           {/* <MainSponsorTitle>SPONSOR GŁÓWNY</MainSponsorTitle>
//           <SponsorsTitle>SPONSORZY</SponsorsTitle>

//           <StudentPartner>
//             PARTNER <br /> STREFY <br /> STUDENTA
//           </StudentPartner>
//           <ContentPartner>
//             PARTNER <br /> MERYTORYCZNY{" "}
//           </ContentPartner>
//           <TechnicalPartner>
//             {" "}
//             PARTNER <br /> TECHNICZNY{" "}
//           </TechnicalPartner>
//           <MediaTitle>
//             {" "}
//             PARTNERZY <br /> MEDIALNI{" "}
//           </MediaTitle> */}
//         </>
//       )}

//       {isMobile && (
//         <>
//           <ImgMobile src={imagesMobile[3].default} alt="img4" />
//           <ImgMobile
//             id="partners patrons"
//             src={imagesMobile[4].default}
//             alt="img5"
//           />
//         </>
//       )}

//       <Motorola
//         href="https://www.motorolasolutions.com/en_us/home.html"
//         target="_blank"
//       >
//         <SponsorImg src={logos[5].default} alt="Motorola" />
//       </Motorola>

//       <Autodesk href="https://www.autodesk.com/" target="_blank">
//         <SponsorImg src={logos[6].default} alt="Autodesk" />
//       </Autodesk>

//       <GE href="https://www.ge.com/" target="_blank">
//         <SponsorImg src={logos[7].default} alt="GE" />
//       </GE>

//       <Adecco href="https://www.adecco.pl/" target="_blank">
//         <SponsorImg src={logos[8].default} alt="Adecco" />
//       </Adecco>

//       <Fujijama href="https://www.fujijama.pl/" target="_blank">
//         <SponsorImg src={logos[15].default} alt="Fujijama" />
//       </Fujijama>

//       <Eska href="https://www.eska.pl/" target="_blank">
//         <SponsorImg src={logos[9].default} alt="Eska" />
//       </Eska>

//       <PodajDalej href="http://www.podajdalej.info.pl/" target="_blank">
//         <SponsorImg src={logos[10].default} alt="Podaj Dalej" />
//       </PodajDalej>

//       <DlaStudenta href="https://www.dlastudenta.pl/" target="_blank">
//         <SponsorImg src={logos[11].default} alt="Dla Studenta" />
//       </DlaStudenta>

//       <Eurostudent href="https://eurostudent.pl/" target="_blank">
//         <SponsorImg src={logos[12].default} alt="Eurostudent" />
//       </Eurostudent>

//       <KMS href="https://kms.org.pl/" target="_blank">
//         <SponsorImg src={logos[13].default} alt="KMS" />
//       </KMS>

//       <FXMAG href="https://fxmag.pl/" target="_blank">
//         <SponsorImg src={logos[14].default} alt="FXMAG" />
//       </FXMAG> */}
//     </Container>
//   </div>

// const Motorola = styled.a`
//   width: 9%;
//   position: absolute;
//   left: 45.8%;
//   top: 43%;
//   @media (max-width: 768px) {
//     left: 14.5%;
//     top: 38.5%;
//     width: 16%;
//   } ;
// `;

// const Autodesk = styled.a`
//   width: 18.8%;
//   position: absolute;
//   right: 9.4%;
//   top: 44.1%;
//   @media (max-width: 768px) {
//     right: 6.2%;
//     top: 48.5%;
//     width: 32%;
//   } ;
// `;



// const Adecco = styled.a`
//   width: 12%;
//   position: absolute;
//   right: 43.7%;
//   top: 65.3%;
//   @media (max-width: 768px) {
//     right: 38.8%;
//     top: 65.6%;
//     width: 22%;
//   } ;
// `;

// const Fujijama = styled(Adecco)`
//   right: 12.5%;
//   top: 65.5%;
//   @media (max-width: 768px) {
//     right: 7.1%;
//     top: 66%;
//     width: 19%;
//   } ;
// `;

// const Eska = styled.a`
//   width: 12%;
//   position: absolute;
//   left: 13%;
//   top: 86.2%;
//   @media (max-width: 768px) {
//     left: 8.8%;
//     top: 80.5%;
//     width: 28%;
//   } ;
// `;

// const PodajDalej = styled.a`
//   width: 10%;
//   position: absolute;
//   right: 45.2%;
//   top: 86.2%;
//   @media (max-width: 768px) {
//     right: 12%;
//     top: 96.2%;
//     width: 20%;
//   } ;
// `;

// const DlaStudenta = styled.a`
//   width: 11%;
//   position: absolute;
//   right: 13%;
//   top: 86.4%;
//   @media (max-width: 768px) {
//     right: 10.7%;
//     top: 80.8%;
//     width: 22%;
//   } ;
// `;

// const Eurostudent = styled.a`
//   width: 14%;
//   position: absolute;
//   left: 11.7%;
//   top: 93.2%;
//   @media (max-width: 768px) {
//     left: 7.5%;
//     top: 88.5%;
//     width: 30%;
//   } ;
// `;

// const KMS = styled.a`
//   width: 13%;
//   position: absolute;
//   right: 44%;
//   top: 93.4%;
//   @media (max-width: 768px) {
//     right: 66%;
//     top: 96.3%;
//     width: 25%;
//   } ;
// `;

// const FXMAG = styled.a`
//   width: 5%;
//   position: absolute;
//   right: 15.6%;
//   top: 93.4%;
//   @media (max-width: 768px) {
//     right: 16%;
//     top: 88.6%;
//     width: 11%;
//   } ;
// `;