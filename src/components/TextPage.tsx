import React, { useState } from "react";
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
      <button onClick={handleFileRead}>Read Text</button>
      {
        fileContent &&
        (
          <div className={css({
            ...fileContent.page.styles,
            '@media (min-width: 768px)': {
              ...fileContent.page.media
            }
          })} style={{ position: "relative", display: "grid" }}>
            <picture>
              <source srcSet={fileContent.page.background.desktopBackground} media="(min-width: 769px)" />
              <source srcSet={fileContent.page.background.mobileBackground} media="(max-width: 768px)" />
              <Img src={fileContent.page.background.fallbackBackground} alt="page" />
            </picture>
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
    case "composite": {
      return (
        <div className={css({
          ...blockConfig.styles,
          '@media (min-width: 768px)': {
            ...blockConfig.media
          }
        })} style={{ position: 'relative' }}>
          {blockConfig.blocks.map((block: any) => chooseComponent(block))}
        </div>
      );
    }
  }
};

function TextBox(props: any) {
  const { styles, media } = props;
  return (
    <div className={css(
      {
        ...styles,
        '@media (max-width: 768px)': {
          ...media
        }
      })}
      style={{ justifyContent: "center", position: "absolute", display: "flexbox" }}>
      {styles.textContent}
    </div>
  )
}

function Img(props: any) {
  const { styles, media } = props;
  return (
    <img className={css({
      ...styles,
      '@media (max-width: 768px)': {
        ...media
      }
    })
    }
    style={{ width: "100%", height: "100%", position: "relative" }}/>
  )
}

const TextPage: React.FC = () => {
  return (
    <>
      <ReadFile />
    </>
  );
};

export default TextPage;