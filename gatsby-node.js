/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// Implement Gatsby's API “onCreatePage” - override its default function. This is called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
    
    const { createPage } = actions
  
    // page.matchPath is a special key that's used for matching pages only on the client.

    if (page.path.match(/^\/account/)) {
      page.matchPath = "/account/*"
  
      // Update the page.
      createPage(page)
    }
}

      /* During the build step, `auth0-js` will break because it relies on
       ** browser-specific APIs. Fortunately, we don’t need it during the build.
       ** Using Webpack’s null loader, we’re able to effectively ignore `auth0-js`
       ** during the build. (See `src/utils/auth.js` to see how we prevent this
       ** from breaking the app.)
       */
      
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {

      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /auth0-js/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
  }
