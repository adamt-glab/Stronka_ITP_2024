import React from "react";
// @ts-ignore
import BEST_logo from "../images/landing_page/BEST_logo.png";
// @ts-ignore
import ITP_logo from "../images/landing_page/ITP_logo.png";
// @ts-ignore
import tlo_pc_1 from "../images/landing_page/1.svg";
import styled from "styled-components";
import Wave from "./Wave";
import yaml from 'js-yaml';

var yamlFile=`
page:
  styles:
  background:
  media:
  blocks:
`;
var loadedYaml = yaml.load(yamlFile);

function H2(props: any) {
  return (
    <h2 style={{ ...props }}>
      {props.content}
    </h2>
  )
}

function Container(props: any) {
  return (
    <div style={{ ...props }}></div>
  )
}

function TextBox(props: any) {
  return (
    <div style={{ ...props, zIndex:2 }}>{props.content}</div>
  )
}

function Img(props: any) {
  return (
    <image style={{ ...props }} />
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
      return <>
        <TextBox {...blockConfig} />
      </>
    }
    case "image": {
      return <>
        <Img {...blockConfig} src={blockConfig.src} />
      </>
    }
    case "header2": {
      return <>
        <H2 {...blockConfig}>{blockConfig.content}</H2>
      </>
    }
    case "composite": {
      const blockStyle = {
        ...blockConfig.style,
        '@media (max-width: 768px)': {
          ...blockConfig.media
        }
      }
      return (
        <div style={{...blockStyle}}>
          {blockConfig.blocks.map((block: any) => chooseComponent(block))}
        </div>
      );
    }
  }
};

const TitlePage: React.FC = () => {
  return (
    <>
      {/*<Wave />*/}
      <Page />
    </>
  );
};

export default TitlePage;
