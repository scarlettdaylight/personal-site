import React from 'react';
import Helmet from 'react-helmet';
import { useSiteMetadata } from '../utilis/hooks';
import { DEFAULT_LANG } from '../configs/langSetting';

function SEO({
  description, lang = DEFAULT_LANG, meta = [], pageTitle,
}) {
  const defaultMeta = useSiteMetadata();
  const metaDescription = description || defaultMeta.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={pageTitle}
      titleTemplate={`%s | ${defaultMeta.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: pageTitle,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: defaultMeta.author,
        },
        {
          name: 'twitter:title',
          content: pageTitle,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
}

export default SEO;
