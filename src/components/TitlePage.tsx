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

// var yamlFile = `
// page:
//   styles:
//   background:
//   media:
//   blocks:
// `;
// var loadedYaml = yaml.load(yamlFile);

function ReadFile() {
  const [selectedFile, setSelectedFile] = useState();
  const [fileContent, setFileContent] = useState([]);

  // handle file selection
  const fileChangedHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // handle file read
  const handleFileRead = () => {
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      const content = fileReader.result;

      try {
        const doc = yaml.load(content);
        setFileContent(doc);
      } catch (e) {
        console.error(e);
      }
    };

    if (selectedFile) {
      fileReader.readAsText(selectedFile);
      GeneratePage(fileContent);
    } else {
      console.warn("No file selected");
    }
  };

  return (
    <div>
      {/* File input */}
      <input type="file" onChange={fileChangedHandler} />
      <button onClick={handleFileRead}>Read File</button>

      {/* Render HelloWorld component for each 'comp' property in the config */}
      {/* {GeneratePage(fileContent)} */}
      {/* {
        fileContent.map((blockConfig: any) =>
          chooseComponent(blockConfig)
        )} */}

      {/* Debug */}
      {/* NIE ODKOMENTOWYWAĆ */}
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

function Page(loadedYaml:any) {
  return (
    <>
      <Container {...loadedYaml}>
        {
          loadedYaml.blocks.map((blockConfig: any) =>
            chooseComponent(blockConfig)
          )
        }
      </Container>
    </>
  )
}

function GeneratePage(loadedYaml:any){
  return (
    <Page {...loadedYaml}/>
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
