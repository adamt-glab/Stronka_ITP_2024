import React, { useState } from "react";
//@ts-ignore
import img2_desktop from "../images/desktop_backgrounds/2.svg";
//@ts-ignore
import img2_mobile from "../images/mobile_backgrounds/2.jpg";
import yaml from 'js-yaml';

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

// function ReadBlock() {
//   const [fileContent, setFileContent] = useState([]);
//   try {
//     const doc = loadedYaml;
//     setFileContent(doc);
//   } catch (e) {
//     console.error(e);
//   };
//   return fileContent;
// }

// function ReadFile() {
//   const [selectedFile, setSelectedFile] = useState();
//   const [fileContent, setFileContent] = useState([]);

//   // handle file selection
//   const fileChangedHandler = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   // handle file read
//   const handleFileRead = () => {
//     const fileReader = new FileReader();
//     fileReader.onloadend = () => {
//       const content = fileReader.result;

//       try {
//         const doc = yaml.load(content);
//         setFileContent(doc);
//       } catch (e) {
//         console.error(e);
//       }
//     };

//     if (selectedFile) {
//       fileReader.readAsText(selectedFile);
//     } else {
//       console.warn("No file selected");
//     }
//   };

//   return (
//     <div>
//       {/* File input */}
//       <input type="file" onChange={fileChangedHandler} />
//       <button onClick={handleFileRead}>Read File</button>

//       {/* Render HelloWorld component for each 'comp' property in the config */}
//       {
//         fileContent.map((blockConfig: any) =>
//           chooseComponent(blockConfig)
//         )}

//       {/* Debug */}
//       {/* NIE ODKOMENTOWYWAĆ */}
//       {/* <pre>{JSON.stringify(fileContent, null, 2)}</pre> */}
//     </div>
//   );
// }

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
        <div style={{ position: 'relative' }}>
          {blockConfig.blocks.map((block: any) => chooseComponent(block))}
        </div>
      );
    }
  }
};

function TextBox(props: any) {
  return (
    <div style={{
      ...props,
      justifyContent: "center",
      position: "absolute",
      display: "flexbox"
    }}>{props.content}</div>
  )
}

function Img(props: any) {
  return (
    <image style={{ width: "100%", height: "100%", position: "relative" }} />
  )
}

function Container(props: any) {
  return (
    <div style={{ top: "2rem", position: "relative", display: "grid" }} />
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
