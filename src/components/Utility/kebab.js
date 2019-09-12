import React, { useEffect, useState } from 'react';
import kebabCase from 'lodash/kebabCase';
import toLower from 'lodash/toLower';
import debounce from 'react-reveal/src/lib/debounce';
import { FormattedMessage } from 'react-intl';
import Box from '../Atoms/Box';
import Paragraph from '../Atoms/Paragraph';
import Heading from '../Atoms/Heading';
import theme from '../../assets/styles/theme';

const Kebab = () => {
  const [word, setWord] = useState('');

  const debounceOnChange = debounce(value => setWord(value), 300);

  return (
    <Box border={`1px solid ${theme.color.lightGray}`} px={4} py={5} borderRadius={4}>
      <Heading h={2}>
        <FormattedMessage id="utility.kebab.title" defaultMessage="Kebab!" />
      </Heading>
      <Box>
        <input
          className="input"
          type="text"
          onChange={({ target: { value } }) => debounceOnChange(value)}
          placeholder="Enter word"
        />
      </Box>
      <Box pt={3}>
        <Paragraph>
          {kebabCase(word)}
        </Paragraph>
      </Box>
    </Box>
  );
};

export default Kebab;
