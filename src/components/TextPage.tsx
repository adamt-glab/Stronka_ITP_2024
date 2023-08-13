import React, { useState } from "react";
//@ts-ignore
import img2_desktop from "../images/desktop_backgrounds/2.svg";
//@ts-ignore
import img2_mobile from "../images/mobile_backgrounds/2.jpg";
import yaml from 'js-yaml';
import { css } from '@emotion/css';

var yamlFile = `
page:
  styles:
    top: 2rem
  background:
    backgroundDesktop: img2_desktop
    backgroundMobile: img2_mobile
    fallbackBackground: img2_desktop
  media:
  blocks:
`;
var loadedYaml = yaml.load(yamlFile);

function Page() {
   // Blocks
   return (
     <>
       <Container top={loadedYaml.page.styles.top}>
         <picture>
           <source srcSet={loadedYaml.page.background.backgroundDesktop} media={loadedYaml.page.background.minWidth} />
           <source srcSet={loadedYaml.page.background.backgroundMobile} media={loadedYaml.page.background.maxWidth} />
           <Img src={loadedYaml.page.background.fallbackBackgroundackground} alt="page" />
         </picture>
         {
           loadedYaml.page.blocks.map((blockConfig: any) =>
             chooseComponent(blockConfig)
           )
         }
       </Container>
     </>
   );
}

function chooseComponent(blockConfig: any) {
  // Read block type and generate a block of given type accordingly
  switch (blockConfig.type) {
    case "text": {
      return <>
        <TextBox {...blockConfig} />
      </>
    }
    case "image": {
      return <>
        <Img {...blockConfig} src={blockConfig.src} />
      </>
    }
    case "composite": {
      return (
        <div {...blockConfig} style={{ position: 'relative' }}>
          {blockConfig.blocks.map((block: any) => chooseComponent(block))}
        </div>
      );
    }
  }
};

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
      ...props,
      justifyContent: "center",
      position: "absolute",
      display: "flexbox"
    }}>{props.content}</div>
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
    )}
    style={{ width: "100%", height: "100%", position: "relative" }} />
  )
}

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
    style={{ top: "2rem", position: "relative", display: "grid" }} />
  )
}

const TextPage: React.FC = () => {
  return (
    <>
      <Page />
    </>
  );
};

export default TextPage;