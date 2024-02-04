import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
// @ts-ignore
import gear_icon from "../images/gear.svg";
// @ts-ignore
import itp_logo from "../images/navbar/itp-01.svg";
// @ts-ignore
import BEST_logo from "../images/navbar/BEST_black.svg";
// @ts-ignore
import fb_icon from "../images/navbar/FB_black.svg";
// @ts-ignore
import ig_icon from "../images/navbar/INSTA_black.svg";
// @ts-ignore
import li_icon from "../images/navbar/LNKDN_black.svg";

const socialLinks = {
  facebook: "https://www.facebook.com/BEST.itp",
  instagram: "https://www.instagram.com/itp_best/",
  linkedin: "https://www.linkedin.com/company/in%C5%BCynierskie-targi-pracy/",
};

const NavContainer = styled.div`
  position: relative;
  height: 60vh;

  min-height: 12em;

  @media (max-width: 768px) {
    height: 30vh;
  }
`;

const Nav = styled.nav`
  position: absolute;
  
  left: 6%;
  right: 6%;
  bottom: 0%;
  height: 8vh;

  min-height: 2rem;

  background-color: #e5821a;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  
  border-radius: 20vh;

  a {
    text-decoration: none;
    color: #fffffa;
  }

  @media (max-width: 768px) {
    height: 4vh;
  }
`;

const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0.5em;
  flex-direction: inherit;
  text-align: center;
  text-transform: none;
`;

const ITPLogo = styled.img`
  position: absolute;
  // width: 24rem;
  width: clamp(16rem, 32vw, 24rem);
  top: 18%;
  left: 6%;
  user-select: none;
  @media (max-width: 768px) {
    width: clamp(8rem, 32vw, 24rem);
    top: 22%;
  }
`;

const BESTLogoContainer = styled.img`
  position: absolute;
  // width: 20rem;
  width: clamp(13rem, 24vw, 20rem);
  right: 6%;
  top: 6%;
  user-select: none;
  @media (max-width: 768px) {
    width: clamp(8rem, 24vw, 20rem);
    top: 14%;
  }
  @media (min-width: 769px) {
    top: calc(5.5% + 0.9vw);
  }
`;

const SocialsContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  top: 55%;
  gap: 1rem;
  left: 6%;

  a {
    min-height: 2rem;
    height: 8vh;
  }

  img {
    display: block;
    height: 100%;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    & {
      top: 57.5%;
      width: clamp(20vw, 30vw, 50vw);
      a {
        height: 4vh;
      }
    }
  }
`;

interface ILink {
  name: String;
  path: string;
}

const links: ILink[] = [
  { name: "Home", path: "/" },
  { name: "Mapa Stoisk", path: "/#map" },
  { name: "Organizatorzy", path: "/#organizers" },
  // { name: "Sponsorzy", path: "/#sponsors" },
  // { name: "Patroni", path: "/#patrons" },
  // { name: "Partnerzy", path: "/#partners" },
  // {
  //   name: "Katalog wystawców",
  //   path: "https://itp.best.krakow.pl/ITP2023-katalog.pdf",
  // },
  {
    name: "Wyślij CV",
    path: "https://forms.gle/fG86afGGonoiqeAV8",
  },
  { name: "O Beście", path: "https://www.newsite.best.krakow.pl/" },
  // {
  //   name: "Harmonogram",
  //   path: "https://itp.best.krakow.pl/Harmonogram wydarzenia.pdf",
  // },
  // {
  //   name: "Regulamin",
  //   path: "https://itp.best.krakow.pl/ITP2023-Regulamin.pdf",
  // },
];

const Navigation: React.FC = () => {
  const linkStyle =
  {
    fontSize: "clamp(0.7rem, 1.9vw, 2rem)",
    flexBasis: "100%",
    alignSelf: "center",
    whiteSpace: "nowrap"
  };

  return (
    <>
      <NavContainer>
        <ITPLogo src={itp_logo} alt="XXVI ITP" />
        <BESTLogoContainer src={BEST_logo} alt="BEST" />
        <SocialsContainer>
          <a href={socialLinks["facebook"]}>
            <img src={fb_icon} alt="facebook" />
          </a>
          <a href={socialLinks["instagram"]}>
            <img src={ig_icon} alt="instagram" />
          </a>
          <a href={socialLinks["linkedin"]}>
            <img src={li_icon} alt="linkedin" />
          </a>
        </SocialsContainer>

        <Nav>
          <LinkContainer className="links">
            {links.map((link, i) => (
              <Link
                style={linkStyle}
                to={link.path}
                key={i}>
                {link.name}
              </Link>
            ))}
          </LinkContainer>
        </Nav>
      </NavContainer>
    </>
  );
};
export default Navigation;
