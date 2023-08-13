import React from "react";
//@ts-ignore
import img8_desktop from "../images/desktop_backgrounds/8.svg";
//@ts-ignore
import img6_mobile from "../images/mobile_backgrounds/6.jpg";
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
    )}
      style={{
        position: 'relative',
        display: 'grid'
      }} />
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
        display: "flexbox",
        textAlign: 'center',
        alignItems: 'center'
      }}>{props.content}</div>
  )
}

function OrganizerName(props: any) {
  return (
    <span className={css(
      {
        fontSize: { ...props.styles.nameFontSize },
        fontWeight: { ...props.styles.nameFontWeight },
        '@media (max-width: 768px)': {
          ...props.media
        }
      }
    )}>{props.organizerName}</span>
  )
}

function Picture(props: any) {
  return (
    <picture style={{ position: "relative", ...props.page.background.top }} />
  )
}

function Img(props: any) {
  return (
    <img
      style={{
        width: '100%',
        height: '100%',
        position: "relative"
      }} />
  )
}

function H2(props: any) {
  return (
    <h2 className={css(
      {
        ...props.style,
        '@media (max-width: 768px)': {
          ...props.media
        }
      }
    )}
      style={{
        fontFamily: "Unica One, sans-serif", 
        position: "absolute",
        textAlign: 'center'
      }}>{props.content}</h2>
  )
}

function Page() {
  return (
    <>
      <Container>
        <Picture {...loadedYaml}>
          <source srcSet={loadedYaml.page.background.desktopBackground} media="(min-width: 769px)" />
          <source srcSet={loadedYaml.page.background.mobileBackground} media="(max-width: 768px)" />
          <Img src={loadedYaml.page.background.fallbackBackground} alt="page" />
        </Picture>
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
    case "image": {
      return (
        <Img {...blockConfig} src={blockConfig.src} />
      )
    }
    case "header2": {
      return (
        <H2 {...blockConfig} />
      )
    }
    case "organizer":{
      return (
        <TextBox {...blockConfig}>
          <OrganizerName {...blockConfig} />
          {blockConfig.content}
        </TextBox>
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

const Organizers: React.FC = () => {
  return (
    <>
      <Page />
    </>
  );
};

export default Organizers;
