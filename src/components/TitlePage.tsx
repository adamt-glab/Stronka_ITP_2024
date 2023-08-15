import React, { useState } from "react";
import yaml from 'js-yaml';
import { css } from '@emotion/css';
import Wave from "./Wave";

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
      {
        fileContent &&
        (
          <div className={css({
            ...fileContent.page.styles,
            '@media (min-width: 768px)': {
              ...fileContent.page.media
            }
          })}>
            {fileContent.page.blocks.map((blockConfig) => (
              chooseComponent(blockConfig)
            ))}
          </div>
        )
      }
      {/* <pre>{JSON.stringify(fileContent, null, 2)}</pre> */}
    </div>
  );
}

function H2(props: any) {
  const { styles, media } = props;
  return (
    <h2 className={css({
      ...styles,
      '@media (min-width: 768px)': {
        ...media
      }
    })}> {styles.textContent} </h2>
  )
}

function TextBox(props: any) {
  const { styles, media } = props;
  return (
    <div className={css({
      ...styles,
      '@media (min-width: 768px)': {
        ...media
      }
    })} style={{ zIndex: 2 }}>
      {styles.textContent}
    </div>
  )
}

function Img(props: any) {
  const { styles, media } = props;
  return (
    <img className={css({
      ...styles,
      '@media (min-width: 768px)': {
        ...media
      }
    })} src={styles.src} />
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
        <Img {...blockConfig} />
      )
    }
    case "header2": {
      return (
        <H2 {...blockConfig} />
      )
    }
    case "wave": {
      return (
        <Wave />
      )
    }
    case "composite": {
      return (
        <div className={css({
          ...blockConfig.styles,
          '@media (min-width: 768px)': {
            ...blockConfig.media
          }
        })}>
          {blockConfig.blocks.map((block: any) => chooseComponent(block))}
        </div>
      );
    }
  }
};

const TitlePage: React.FC = () => {
  return (
    <>
      <ReadFile />
    </>
  );
};

export default TitlePage;