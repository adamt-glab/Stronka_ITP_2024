import React from "react";
import useMediaQuery from "../utils/UseMediaQuery";
import MovingGears from "./MovingGears";
import yaml from 'js-yaml';
import { css } from '@emotion/css';

var yamlFile = `
page:
  styles:
  background:
  media:
  blocks:
`;
var loadedYaml = yaml.load(yamlFile);

function Container(props: any) {
  return (
    <div className={css(
      {
        ...props.style,
        '@media (max-width: 768px)': {
          ...props.media
        }
      }
    )} />
  )
}

function Img(props: any) {
  return (
    <image className={css(
      {
        ...props.style,
        '@media (max-width: 768px)': {
          ...props.media
        }
      }
    )} />
  )
}

function PartnerTitle(props: any) {
  return (
    <div className={css(
      {
        ...props.style,
        '@media (max-width: 768px)': {
          ...props.media
        }
      }
    )}
      style={{
        position: 'absolute',
        textAlign: 'center',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
      }}>{props.content} </div>
  )
}

function PartnerLinkWrapper(props: any) {
  return (
    <a className={css(
      {
        ...props.style,
        '@media (max-width: 768px)': {
          ...props.media
        }
      }
    )} />
  )
}

function TextBox(props: any) {
  return (
    <div className={css(
      {
        ...props.style,
        '@media (max-width: 768px)': {
          ...props.media
        }
      }
    )}
      style={{
        justifyContent: "center",
        position: "absolute",
        display: "flexbox"
      }}>{props.content}</div>
  )
}

function Page() {
  return (
    <>
      <Container {...loadedYaml}>
        {
          loadedYaml.page.blocks.map((blockConfig: any) =>
            chooseComponent(blockConfig)
          )
        }
      </Container>
    </>
  )
}

function chooseComponent(blockConfig: any) {
  // Read block type and generate a block of given type accordingly
  switch (blockConfig.type) {
    case "text": {
      return (
        <TextBox {...blockConfig} />
      )
    }
    case "title": {
      return (
        <PartnerTitle {...blockConfig} />
      )
    }
    case "image": {
      return (
        <Img {...blockConfig} src={blockConfig.src} />
      )
    }
    case "partner": {
      return (
        <PartnerLinkWrapper {...blockConfig} href={blockConfig.link} target="_blank">
          <Img className={
            css({
              width: '100%',
              height: '100%',
              padding: '0.5rem',
              transform: 'translate(-0.5rem, -0.5rem)',
              '@media (min-width: 768px)': {
                padding: '1.5rem',
                transform: 'translate(-1.5rem, -1.5rem)',
              }
            })} 
            src={blockConfig.src} alt={blockConfig.alt} />
        </PartnerLinkWrapper>
      )
    }
    case "composite": {
      return (
        <div {...blockConfig}>
          {blockConfig.blocks.map((block: any) => chooseComponent(block))}
        </div>
      );
    }
  }
};

// const ImgDesktop = styled.img`
//   width: 100%;
//   height: 100%;
//   position: relative;
//   @media (max-width: 768px) {
//     display: none;
//   } ;
// `;

// const ImgMobile = styled.img`
//   width: 100%;
//   height: 100%;
//   position: relative;
//   @media (min-width: 769px) {
//     display: none;
//   } ;
// `;

const Sponsors: React.FC = () => {
  // const isMobile = useMediaQuery("(max-width: 768px)");
  // console.log(isMobile);

  // TODO: missing id-s of partners
  return (
    <div id="sponsors">
      <Page />
    </div>
  );
};

export default Sponsors;
