import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { height } from 'styled-system';

const StyledImg = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  ${height}
`;

const Image = ({ imageInfo, imageStyle = {}, ...rest }) => {
  if (!imageInfo) {
    console.warn('imageInfo is missing');
    return null;
  }

  const { alt = '', childImageSharp, image } = imageInfo;

  if (!!image && image.extension === 'svg') {
    return <img style={imageStyle} src={image.publicURL} alt={alt} />;
  }

  if (!!image && !!image.childImageSharp) {
    return <Img style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} {...rest} />;
  }

  if (!!childImageSharp) {
    return <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} {...rest} />;
  }

  if (!!image && typeof image === 'string') {
    return (
      <div style={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
        <div style={{ width: '100%', paddingBottom: '62.5%' }} />
        <StyledImg style={{ ...imageStyle }} src={image} alt={alt} />
      </div>
    );
  }

  //cms
  if (!!image && typeof image === 'object') {
    return <img style={imageStyle} src={image} alt={alt} />;
  }

  console.warn('Unable to load image');

  return null;
};

export default Image;
