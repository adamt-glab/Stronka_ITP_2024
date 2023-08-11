import React, { useState } from "react";
//@ts-ignore
import img2_desktop from "../images/desktop_backgrounds/2.svg";
//@ts-ignore
import img2_mobile from "../images/mobile_backgrounds/2.jpg";
import styled from "styled-components";
import yaml from 'js-yaml';

function TestBox(props: any) {
  return (
    <div style={{
      ...props,
      justifyContent: "center",
      position: "absolute",
      display: "flexbox"
    }}>{props.content}</div>
  )
}

function MyText(props: any) {
  return (
    <div>
      <p style={{ ...props }}>{props.content}</p>
    </div>
  )
}

const TestImg = styled.img`
width: ${props => props.width};
height: ${props => props.height};
position: relative;
`;

const TestContainer = styled.div`
top: ${props => props.top};
position: relative;
display: grid;
`;

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
      {fileContent.map((blockConfig: any) =>
        chooseComponent(blockConfig)
      )}

      {/* Debug */}
      {/* NIE ODKOMENTOWYWAĆ */}
      {/* <pre>{JSON.stringify(fileContent, null, 2)}</pre> */}
    </div>
  );
}

function chooseComponent(blockConfig: any) {
  switch (blockConfig.type) {
    case "text": {
      return <>
        <TestBox {...blockConfig} />
      </>
    }
    case "image": {
      return <>
        <TestImg {...blockConfig} src={blockConfig.src} />
      </>
    }

    //Array.isArray(blockConfig.composite)
    case "composite": {
      return (
        // <TestContainer {...blockConfig}>
        //   <picture>
        //     <source srcSet={blockConfig.backgroundDesktop} media="(min-width: 769px)" />
        //     <source srcSet={blockConfig.backgroundMobile} media="(min-width: 768px)" />
        //     <TestImg src={blockConfig.fallbackBackground} alt="text page" />
        //   </picture>
        //   asdf
        // </TestContainer>
        <div  style={{position: 'relative'}}>
          {blockConfig.blocks.map((block: any) => chooseComponent(block))}
        </div>
      );
    }
  }
};

const Img = styled.img`
width: 100%;
height: 100%;
position: relative;
`;

const Container = styled.div`
  position: relative;
  display: grid;
  top: 2rem;
`;

const TextPage: React.FC = () => {
  return (
    <>
      <Container>
        <picture>
          <source srcSet={img2_desktop} media="(min-width: 769px)" />
          <source srcSet={img2_mobile} media="(max-width: 768px)" />
          <Img src={img2_desktop} alt="text page" />
        </picture>
        <ReadFile></ReadFile>
      </Container>
    </>
  );
};

export default TextPage;
