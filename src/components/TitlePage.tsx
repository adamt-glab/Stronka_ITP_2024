import React, { useState } from "react";
// @ts-ignore
import BEST_logo from "../images/landing_page/BEST_logo.png";
// @ts-ignore
import ITP_logo from "../images/landing_page/ITP_logo.png";
// @ts-ignore
import tlo_pc_1 from "../images/landing_page/1.svg";
import styled from "styled-components";
import Wave from "./Wave";
import yaml from 'js-yaml';
import { css } from '@emotion/css';

function ReadFile() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileContent, setFileContent] = useState(null);

  const fileChangedHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setFileContent(null); // Reset file content when a new file is selected
  };

  const handleFileRead = async () => {
    if (!selectedFile) {
      console.warn("No file selected");
      return;
    }

    try {
      const content = await selectedFile.text();
      const doc = yaml.load(content);
      setFileContent(doc);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <input type="file" onChange={fileChangedHandler} />
      <button onClick={handleFileRead}>Read File</button>

      {fileContent && (
        // Assuming 'Page' component takes 'loadedYaml' as prop
        <Page loadedYaml={fileContent} />
      )}

      <pre>{JSON.stringify(fileContent, null, 2)}</pre>
    </div>
  );
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
    )}>
      {props.content}
    </h2>
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
    )}></div>
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
    )} style={{ zIndex: 2 }}>
      {props.content}
    </div>
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

// Outermost component
// page:
//  styles:
//  ...
//  blocks:
//    - type: ...
function Page({ loadedYaml }) {
  return (
    <Container style={loadedYaml.page.styles}>
      {loadedYaml.page.blocks.map((blockConfig) => (
        chooseComponent(blockConfig)
      ))}
    </Container>
  );
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
    case "composite": {
      return (
        <div {...blockConfig}>
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
      <ReadFile/>
    </>
  );
};

export default TitlePage;
