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
      <button onClick={handleFileRead}>Read Orgs</button>
      {
        fileContent &&
        (
          <div className={css({
            ...fileContent.page.styles,
            '@media (max-width: 768px)': {
              ...fileContent.page.media
            }
          })} style={{ position: "relative", display: "grid" }}>
            <picture style={{ position: "relative", top: fileContent.page.background.top }}>
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
      style={{
        justifyContent: "center",
        position: "absolute",
        display: "flexbox",
        textAlign: 'center',
        alignItems: 'center'
      }} dangerouslySetInnerHTML={{ __html: styles.textContent }}/>
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

function Image(props: any) {
  const { styles, media } = props;
  return (
    <img className={css({
      ...styles,
      '@media (max-width: 768px)': {
        ...media
      }
    })}
      src={styles.src} />
  )
}

function H2(props: any) {
  const { styles, media } = props;
  return (
    <h2 className={css(
      {
        ...styles,
        '@media (max-width: 768px)': {
          ...media
        }
      })}
      style={{
        fontFamily: "Unica One, sans-serif",
        position: "absolute",
        textAlign: 'center'
      }}dangerouslySetInnerHTML={{ __html: styles.textContent }}/>
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
        <Image {...blockConfig} />
      )
    }
    case "header2": {
      return (
        <H2 {...blockConfig} />
      )
    }
    // TODO:
    // when taking InnerHTML an element may not have children
    // this component is essentialy textbox with additional span
    // a workaround would be creating a composite styled as a textbox
    case "organizer": {
      return (
        <TextBox {...blockConfig}>
          <span className={css(
            {
              fontSize: blockConfig.styles.nameFontSize,
              fontWeight: blockConfig.styles.nameFontWeight,
              '@media (max-width: 768px)': {
                ...blockConfig.media
              }
            }
          )}>{blockConfig.styles.organizerName}</span>
        </TextBox>
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

const Organizers: React.FC = () => {
  return (
    <>
      <ReadFile />
    </>
  );
};

export default Organizers;
