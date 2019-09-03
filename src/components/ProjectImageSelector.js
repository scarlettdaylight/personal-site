import React from 'react';
import styled from 'styled-components';
import get from 'lodash/get';
import Box from './Atoms/Box';
import theme from '../assets/styles/theme';
import Image from './Atoms/Image';

const ImageBox = styled(Box)`
  //filter: grayscale(70%);
  border-radius: 4px;
  transition: filter 300ms ease-in-out;
  overflow: hidden;
  position: relative;
  &:hover {
    filter: opacity(80%);
    cursor: pointer;
    //filter: none;
  }
`;

const ProjectUrlWrapper = ({ url, children }) => (
  <>
    {url !== '' && (
      <a target="_blank" rel="noopener noreferrer" href={url}>
        {children}
      </a>
    )}
    {url === '' && children }
  </>
);

const SingleProjectImage = ({ coverImage }) => (
  <ImageBox
    height={[300, 300, 300, 400]}
  >
    <Image
      imageInfo={get(coverImage, 'imageArr.0', '')}
      imageStyle={{
        margin: 'auto',
        height: '100%',
      }}
    />
  </ImageBox>
);

const ProjectImageWithLogo = ({ coverImage }) => (
  <ImageBox
    height={[300, 300, 300, 400]}
    background={coverImage.coverColor || theme.color.greyish}
    display="flex"
  >
    <Image
      imageInfo={get(coverImage, 'logo', '')}
      imageStyle={{
        margin: 'auto',
        height: 'auto',
        display: 'block',
        width: get(coverImage, 'logo.width') || '30%',
      }}
    />
  </ImageBox>
);


const ProjectImageSelector = ({ url, coverImage }) => {
  let imageDom;

  switch (coverImage.effect) {
    case 'logoCenter':
      imageDom = <ProjectImageWithLogo coverImage={coverImage} />;
      break;

    case 'fade':
      imageDom = <ProjectImageWithLogo coverImage={coverImage} />;
      break;

    default:
      imageDom = <SingleProjectImage coverImage={coverImage} />;
      break;
  }

  return (
    <ProjectUrlWrapper url={url}>
      {imageDom}
    </ProjectUrlWrapper>
  );
};

export default ProjectImageSelector;
