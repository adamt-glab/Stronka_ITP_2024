import React from "react";
//@ts-ignore
import img3_desktop from "../images/desktop_backgrounds/3.svg";
//@ts-ignore
import img3_mobile from "../images/mobile_backgrounds/3.png";
//@ts-ignore
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

function Image(props: any){
  return (
    <div className={css(
      {
        ...props.style,
        '@media (max-width: 769px)': {
          ...props.media
        }
      }
    )}
      style={{
        position: 'absolute',
        zIndex: 2
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

function Page(){
  return(
  <>
    <Container>
      <picture>
        <source srcSet={loadedYaml.page.background.desktopBackground} media="(min-width: 769px)" />
        <source srcSet={loadedYaml.page.background.mobileBackground} media="(max-width: 768px)" />
        <Img src={loadedYaml.page.background.fallbackBackground} />
      </picture>
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
        <Image {...blockConfig} src={blockConfig.src} />
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

const Map: React.FC = () => {
  return (
    <div id="map">
      <Page />
    </div>
  );
};

export default Map;
