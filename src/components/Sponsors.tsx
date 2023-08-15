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
      <button onClick={handleFileRead}>Read Sponsors</button>
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

function Image(props: any) {
  const { styles, media } = props;
  return (
    <img className={css(
      {
        ...styles,
        '@media (max-width: 768px)': {
          ...media
        }
      }
    )} src={styles.src} alt={styles.alt}/>
  )
}

function PartnerTitle(props: any) {
  const { styles, media } = props;
  return (
    <div className={css({
      ...styles,
      '@media (max-width: 768px)': {
        ...media
      }
    })}
      style={{
        position: 'absolute',
        textAlign: 'center',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
      }} dangerouslySetInnerHTML={{ __html: styles.textContent }} />
  )
}

function PartnerLinkWrapper(props: any) {
  const { styles, media } = props;
  return (
    <a className={css({
      ...styles,
      '@media (min-width: 768px)': {
        ...media
      }
    })} href={styles.link} target="_blank"/>
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
    })}
      style={{
        justifyContent: "center",
        position: "absolute",
        display: "flexbox"
      }}>{styles.textContent}</div>
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
    case "title": {
      return (
        <PartnerTitle {...blockConfig} />
      )
    }
    case "image": {
      return (
        <Image {...blockConfig} />
      )
    }
    case "partner": {
      return (
        <PartnerLinkWrapper {...blockConfig}>
          <Image {...blockConfig} className={
            css({
              width: '100%',
              height: '100%',
              padding: '0.5rem',
              transform: 'translate(-0.5rem, -0.5rem)',
              '@media (min-width: 768px)': {
                padding: '1.5rem',
                transform: 'translate(-1.5rem, -1.5rem)',
              }
            })}/>
        </PartnerLinkWrapper>
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

// const ImgDesktop = styled.img`
//   width: 100%;
//   height: 100%;
//   position: relative;
//   @media (max-width: 768px) {
//     display: none;
//   } ;
// `;

// const ImgMobile = styled.img`
//   width: 100%;
//   height: 100%;
//   position: relative;
//   @media (min-width: 769px) {
//     display: none;
//   } ;
// `;

const Sponsors: React.FC = () => {
  // const isMobile = useMediaQuery("(max-width: 768px)");
  // console.log(isMobile);

  // TODO: missing id-s of partners
  return (
    <div id="sponsors">
      <ReadFile />
    </div>
  );
};

export default Sponsors;
