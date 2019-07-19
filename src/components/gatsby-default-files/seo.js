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
                    href: `https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/consumer-drones%2Fconsumer-bg.jpg?alt=media&token=cfc4edd7-df2c-4904-ba22-23a0fe7c3723`,
                },
                {
                    rel: `prefetch`,
                    as: `image`,
                    href: `https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/professional-drones%2Fprofessional-bg.jpg?alt=media&token=6eb4503c-ccb8-4f7e-9562-10bd22eae7a8`,
                },
                {
                    rel: `prefetch`,
                    as: `image`,
                    href: `https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/enterprise-bg-flip.jpg?alt=media&token=8d6d2ed3-88bd-4569-a219-6bc2dd240216`,
                },
                {
                    rel: `prefetch`,
                    as: `image`,
                    href: `https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/drone-3453361_1280uflip.jpg?alt=media&token=c412ca6a-ed03-41fb-baf0-78383f0f0e83`,
                },
                {
                    rel: `preload`,
                    as: `image`,
                    href: `https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/consumer-drones%2Fphantom-3-se.png?alt=media&token=07f00be4-b994-4e35-91f6-90335b2b74b6`,
                },
                {
                    rel: `prefetch`,
                    as: `image`,
                    href: `https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/professional-drones%2Fzenmuse-x7.png?alt=media&token=f40badd9-5aa6-4b05-812d-bda0e8186933`,
                },
                {
                    rel: `prefetch`,
                    as: `image`,
                    href: `https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/enterprise-drones%2Fmatrice-200v2-ii.png?alt=media&token=c8176e7c-4869-4f0f-abce-48e6fd4d8cf3`,
                },
                {
                    rel: `preload`,
                    as: `image`,
                    href: `https://dronify.netlify.com/icons/icon-48x48.png`,
                },
                {
                    rel: `preload`,
                    as: `image`,
                    href: `https://dronify.netlify.com/icons/icon-72x72.png`,
                },
                {
                    rel: `preload`,
                    as: `image`,
                    href: `https://dronify.netlify.com/icons/icon-96x96.png`,
                },
                {
                    rel: `preload`,
                    as: `image`,
                    href: `https://dronify.netlify.com/icons/icon-144x144.png`,
                },
                {
                    rel: `prefetch`,
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
                    rel: `preload`,
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
