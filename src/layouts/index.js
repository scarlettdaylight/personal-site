import '../assets/styles/app.scss';

import React from 'react';
import Helmet from 'react-helmet';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import theme from '../assets/styles/theme';

import { useSiteMetadata } from '../utilis/hooks';
import { LANG_LIST, DEFAULT_LANG } from '../configs/langSetting';

const getMessages = locale => require(`../lang/${locale}.json`);

const messagesList = {};

LANG_LIST.forEach((lang) => {
  try {
    messagesList[lang] = getMessages(lang);
  } catch (e) {
    console.log(e);
  }
});

const TemplateWrapper = ({
  children, pageContext, location, ...rest
}) => {
  const meta = useSiteMetadata();
  const { title, description } = meta;

  const lang = pageContext.lang || DEFAULT_LANG;

  let purePath = `${location.pathname}/`.replace('//', '/');

  LANG_LIST.forEach((lang) => {
    purePath = purePath.replace(`/${lang}/`, '/');
  });

  return (
    <IntlProvider key={lang} locale={lang} messages={messagesList[lang]} initialNow={Date.now()}>
      <ThemeProvider theme={theme}>
        <>
          <Helmet>
            <html lang={lang} />
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32" />
            <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16" />
            <meta name="theme-color" content="#fff" />
            <meta property="og:type" content="business.business" />
            <meta property="og:title" content={title} />
            <meta property="og:url" content="/" />
            <meta property="og:image" content="/img/og-image.jpg" />
          </Helmet>
          <Navbar lang={lang} pathname={purePath} />
          <div>{children}</div>
          <Footer />
        </>
      </ThemeProvider>
    </IntlProvider>
  );
};

export default TemplateWrapper;
