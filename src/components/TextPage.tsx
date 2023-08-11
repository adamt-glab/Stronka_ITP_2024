import React, { useState } from "react";
//@ts-ignore
import img2_desktop from "../images/desktop_backgrounds/2.svg";
//@ts-ignore
import img2_mobile from "../images/mobile_backgrounds/2.jpg";
import styled from "styled-components";
import yaml from 'js-yaml';

// const TestBox = styled.div`
//   color: ${props => props.color};
//   background-color: ${props => props.backgroundColor};
//   content: ${props => props.content};
//   width: ${props => props.width};
//   height: ${props => props.height};
//   top: ${props => props.top};
//   left: ${props => props.left};
//   font-size: ${props => props.fontSize};
//   border: ${props => props.border};
//   padding: ${props => props.padding};
//   text-align: ${props => props.textAlign};
//   align-items: ${props => props.alignItems};
//   justify-content: center;
//   position: absolute;
//   display: flexbox;
//   @media (max-width: 768px) {
//     width: ${props => props.mediaWidth};
//     left: ${props => props.mediaLeft};
//     top: ${props => props.mediaTop};
//     height: ${props => props.mediaHeight};
//     font-size: ${props => props.mediaFontSize};
//   } ;
// `;

function TestBox(props: any){
  return (
      <div style={{...props, 
        justifyContent:"center", 
        position:"absolute", 
        display:"flexbox"}}>{props.content}</div>
    )
}

function MyText(props: any) { 
  return (
  <div>
    <p style={{...props}}>{props.content}</p>
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
        <TestBox {...blockConfig}/>
      </>
      // return <MyText content={blockConfig.content} color={blockConfig.color} backgroundColor={blockConfig.backgroundColor}/>
    }
    case "image": {
      return <>
        <TestImg {...blockConfig} src = {blockConfig.src} />
      </>
    }

    //Array.isArray(blockConfig.composite)

    case "container": {
      return <>
      <TestContainer {...blockConfig}>
        <picture>
          <source srcSet={blockConfig.backgroundDesktop} media="(min-width: 769px)"/>
          <source srcSet={blockConfig.backgroundMobile} media="(min-width: 768px)"/>
          <TestImg src={blockConfig.fallbackBackground} alt="text page"/>
        </picture>
        asdf
      </TestContainer>
    </>
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

const TextBox1 = styled.div`
  width: 38%;
  height: 12%;
  position: absolute;
  top: 18%;
  left: 4%;
  background-color: #e8d9cb;
  font-size: 1.3vw;
  color: #d2764a;
  border: 0.15rem solid;
  padding: 0.3rem;
  display: flexbox;
  text-align: justify;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 80%;
    left: 10%;
    top: 7%;
    height: 8%;
    font-size: 3vw;
  } ;
`;

const TextBox2 = styled(TextBox1)`
  height: 5%;
  top: 33%;
  @media (max-width: 768px) {
    height: 4%;
    top: 19%;
  }
`;

const TextBox3 = styled(TextBox1)`
  top: 54%;
  left: 56%;
  @media (max-width: 768px) {
    height: 8.4%;
    top: 73.5%;
    left: 10%;
  }
`;

const TextBox4 = styled(TextBox3)`
  top: 69%;
  height: 6.5%;
  @media (max-width: 768px) {
    height: 6%;
    top: 86%;
    left: 10%;
  }
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
