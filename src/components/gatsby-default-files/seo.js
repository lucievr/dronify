/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 **/

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, image, url, link }) {
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
            link={[
                {
                    rel: `preload`,
                    as: `image`,
                    href: `https://firebasestorage.googleapis.com/v0/b/dronify-245011.appspot.com/o/consumer-bg.jpg?alt=media&token=864ae70e-f0fe-436f-a3a5-0b7ba5171e45`,
                },
                {
                    rel: `prefetch`,
                    as: `image`,
                    href: `https://firebasestorage.googleapis.com/v0/b/dronify-245011.appspot.com/o/professional-bg.jpg?alt=media&token=6ccaa3b7-ef91-4ec4-a768-10fa810e50d9`,
                },
                {
                    rel: `prefetch`,
                    as: `image`,
                    href: `https://firebasestorage.googleapis.com/v0/b/dronify-245011.appspot.com/o/enterprise-bg-flip.jpg?alt=media&token=8e62633d-dda8-48d8-bb08-f70f55ff7ecd`,
                },
                {
                    rel: `prefetch`,
                    as: `image`,
                    href: `https://firebasestorage.googleapis.com/v0/b/dronify-245011.appspot.com/o/drone-3453361_1280uflip.jpg?alt=media&token=e222db86-88e0-4603-8b25-3ce616d5c321`,
                },
                {
                    rel: `preload`,
                    as: `image`,
                    href: `https://firebasestorage.googleapis.com/v0/b/dronify-245011.appspot.com/o/consumer%2Fphantom-3%2Fphantom-3-se_1.png?alt=media&token=f0712e2a-2fa7-4ede-a214-f858c4bf581d`,
                },
                {
                    rel: `prefetch`,
                    as: `image`,
                    href: `https://firebasestorage.googleapis.com/v0/b/dronify-245011.appspot.com/o/professional%2Fzenmuse-x7%2Fzenmuse-x7_3.png?alt=media&token=4a14687b-1796-440b-8ca9-932d31990e35`,
                },
                {
                    rel: `prefetch`,
                    as: `image`,
                    href: `https://firebasestorage.googleapis.com/v0/b/dronify-245011.appspot.com/o/enterprise%2Fmatrice-200%2Fmatrice-200v2_2.png?alt=media&token=763c34dc-60f5-44b5-a7fb-bb19ea57e391`,
                },
                {
                    rel: `prefetch`,
                    as: `image`,
                    href: `https://dronify.netlify.com/icons/icon-48x48.png`,
                },
                {
                    rel: `prefetch`,
                    as: `image`,
                    href: `https://dronify.netlify.com/icons/icon-72x72.png`,
                },
                {
                    rel: `prefetch`,
                    as: `image`,
                    href: `https://dronify.netlify.com/icons/icon-96x96.png`,
                },
                {
                    rel: `prefetch`,
                    as: `image`,
                    href: `https://dronify.netlify.com/icons/icon-144x144.png`,
                },
                {
                    rel: `preload`,
                    as: `image`,
                    href: `https://dronify.netlify.com/icons/icon-48x48.png?v=29402ea375cb0cfc45c42a82b61cb130`,
                    
                },                
                {
                    rel: `prefetch`,
                    as: `image`,
                    href: `https://dronify.netlify.com/icons/icon-72x72.png?v=29402ea375cb0cfc45c42a82b61cb130`,
                    
                },
                {
                    rel: `prefetch`,
                    as: `image`,
                    href: `https://dronify.netlify.com/icons/icon-96x96.png?v=29402ea375cb0cfc45c42a82b61cb130`,
                    
                },
                {
                    rel: `prefetch`,
                    as: `image`,
                    href: `https://dronify.netlify.com/icons/icon-144x144.png?v=29402ea375cb0cfc45c42a82b61cb130`,
                    
                },
                {
                    rel: `prefetch`,
                    as: `image`,
                    href: `https://dronify.netlify.com/icons/icon-192x192.png?v=29402ea375cb0cfc45c42a82b61cb130`,
                    
                },
                {
                    rel: `prefetch`,
                    as: `image`,
                    href: `https://dronify.netlify.com/icons/icon-256x256.png?v=29402ea375cb0cfc45c42a82b61cb130`,
                    
                },
                {
                    rel: `prefetch`,
                    as: `image`,
                    href: `https://dronify.netlify.com/icons/icon-384x384.png?v=29402ea375cb0cfc45c42a82b61cb130`,
                    
                },
                {
                    rel: `prefetch`,
                    as: `image`,
                    href: `https://dronify.netlify.com/icons/icon-512x512.png?v=29402ea375cb0cfc45c42a82b61cb130`,
                    
                },
            ].concat(link)}
        />
    )
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    link: [],
    description: ``,
    image: null,
    title: null,
    url: null,
}

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    link: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    url: PropTypes.string,
}

export default SEO
