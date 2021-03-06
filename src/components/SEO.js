import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ title }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    titleTemplate,
    description,
    siteUrl,
    image,
    twitterUsername,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    metaTitle: `${title} | Textify`,
    description,
    image,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name='description' content={seo.description} />
      <meta name='image' content={seo.image} />
      <meta
        name='google-site-verification'
        content='yGdYK6tGmhLsJIcdEyc8NMSz2WpP4tGVjkT1K6woGdk'
      />

      {seo.url && <meta property='og:url' content={seo.url} />}

      {seo.metaTitle && <meta property='og:title' content={seo.metaTitle} />}

      {seo.description && (
        <meta property='og:description' content={seo.description} />
      )}

      {seo.image && <meta property='og:image' content={seo.image} />}

      <meta name='twitter:card' content='summary_large_image' />

      {twitterUsername && (
        <meta name='twitter:creator' content={twitterUsername} />
      )}

      {seo.metaTitle && <meta name='twitter:title' content={seo.metaTitle} />}

      {seo.description && (
        <meta name='twitter:description' content={seo.description} />
      )}

      {seo.image && <meta name='twitter:image' content={seo.image} />}
    </Helmet>
  );
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        description
        siteUrl
        image
        twitterUsername
      }
    }
  }
`;

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
};
