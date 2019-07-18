/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, image, url }) {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        image
                        author
                        url
                    }
                }
            }
        `
    )

    description = description || site.siteMetadata.description
    title = title || site.siteMetadata.title
    image = `${url}${image || site.siteMetadata.image}`
    url = `${url}${url || "/"}`

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
                {
                    name: `description`,
                    content: description,
                },
                {
                    name: `image`,
                    content: image,
                },
                {
                    name: `google-site-verification`,
                    content: "RmgE0on5MmIp0Uw0MBUnCjeldCSRxDdWA6N4yrsMp_Q",
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:url`,
                    content: url,
                },
                {
                    property: `og:description`,
                    content: description,
                },
                {
                    property: `og:image`,
                    content: image,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.author,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: description,
                },
                {
                    name: `twitter:image`,
                    content: image,
                },
            ].concat(meta)}
        />
    )
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
    image: null,
    title: null,
    url: null,
}

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    url: PropTypes.string,
}

export default SEO
