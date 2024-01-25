import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
// @ts-ignore
import gear_icon from "../images/gear.svg";
// @ts-ignore
import itp_logo from "../images/navbar/itp-01.svg";
// @ts-ignore
import fb_icon from "../images/navbar/fb-01.svg";
// @ts-ignore
import ig_icon from "../images/navbar/ig-01.svg";
// @ts-ignore
import li_icon from "../images/navbar/li-01.svg";

const socialLinks = {
  facebook: "https://www.facebook.com/BEST.itp",
  instagram: "https://www.instagram.com/itp_best/",
  linkedin: "https://www.linkedin.com/company/in%C5%BCynierskie-targi-pracy/",
};

const NavContainer = styled.div`
  position: relative;
  height: 60vh;
`;

const Nav = styled.nav`
  position: absolute;
  
  left: 0;
  right: 0;
  bottom: 0;

  background-color: #e5821a;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  height: 4vh;
  padding: 0.5em;
  border-radius: 20vh;
  margin: 0em 4em;

  a {
    text-decoration: none;
    color: #ffffff;
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

const LogoContainer = styled.div`
  min-width: 10%;
  width: 15%;

  img {
    display: block;
    height: 100%;
  }

  @media (max-width: 768px) {
    & {
      height: 15vh;
      width: 50%;
      display: flex;
      justify-content: center;
    }
  }
`;

const SocialsContainer = styled.div`
  position: absolute;
  
  left: 0;
  right: 0;
  bottom: 0;
  top: 12em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 10%;
  margin-right: 15%;

  a {
    height: 80%;
  }

  img {
    display: block;
    height: 100%;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    & {
      height: 15%;
      min-width: 40vw;
      margin-right: 0;

      a {
        max-width: 33%;
      }

      img {
        width: 95%;
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
  // {
  //   name: "Wyślij CV",
  //   path: "https://docs.google.com/forms/d/e/1FAIpQLSc36Pr-ib_wTRvGmZ5Lt8QUBBYu5BdenBO2TvuImyFKWEZxfQ/viewform?usp=sf_link",
  // },
  // {
  //   name: "Zapisz się na warsztaty",
  //   path: "https://forms.gle/6iHgFDjkCfxJ3n3E8",
  // },
  { name: "O Beście", path: "https://www.newsite.best.krakow.pl/" },
  // {
  //   name: "Harmonogram",
  //   path: "https://itp.best.krakow.pl/Harmonogram wydarzenia.pdf",
  // },
  {
    name: "Regulamin",
    path: "https://itp.best.krakow.pl/ITP2023-Regulamin.pdf",
  },
];

const Navigation: React.FC = () => {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = (toggleScroll = false) => {
    if (!showNav && toggleScroll) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    setShowNav(!showNav);
  };

  const navClass = showNav ? "" : "hidden";
  const buttonClass = showNav ? "opened" : "";

  // media query
  const [width, setWidth] = useState(0);
  const breakpoint = 768;

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
    }

    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const linkStyle =
  {
    fontSize: "clamp(0.8rem, 1.3vw, 1.2rem)",
    // fontWeight: "bold",
    flexBasis: "100%",
    alignSelf: "center",
    whiteSpace: "nowrap"
  };

  return (
    <>
      <NavContainer>
        {/* <LogoContainer>
          <img src={itp_logo} alt="XXVI Inżynierskie Targi Pracy" />
        </LogoContainer>
        <LogoContainer>
          <img src={itp_logo} alt="XXVI Inżynierskie Targi Pracy" />
        </LogoContainer> */}
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

        <Nav className={"navigation " + navClass}>
          <LinkContainer className="links">
            {links.map((link, i) => (
              <Link
                style={linkStyle}
                to={link.path}
                key={i}
                onClick={() => toggleNav()}
              >
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
