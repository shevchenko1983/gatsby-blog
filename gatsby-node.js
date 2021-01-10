const path = require('path');
const slash = require(`slash`);

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
    reporter.info(`Your Gatsby site has been built!`)
}

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            slug
            title
            path
          }
        }
      }
    }
  `)
    /** Pages */
    const pageTemplate = path.resolve(`./src/pages/index.js`);
    const pageMainTemplate = path.resolve(`./src/pages/main.js`);
    const pageServiceTemplate = path.resolve(`./src/pages/service.js`);
    const pageWorksTemplate = path.resolve(`./src/pages/works.js`);
    const pageSkillsTemplate = path.resolve(`./src/pages/skills.js`);
    const pageTestimonialsTemplate = path.resolve(`./src/pages/testimonials.js`);
    const pageContactsTemplate = path.resolve(`./src/pages/contacts.js`);

    result.data.allWordpressPage.edges.forEach(edge => {
        let pageTemplateCurrent;
        switch (edge.node.slug) {
            case "/":
                pageTemplateCurrent = pageMainTemplate;
                break;
            // case "services":
            //     pageTemplateCurrent = pageServiceTemplate;
            //     break;
            // case "works":
            //     pageTemplateCurrent = pageWorksTemplate;
            //     break;
            // case "skills":
            //     pageTemplateCurrent = pageSkillsTemplate;
            //     break;
            // case "testimonials":
            //     pageTemplateCurrent = pageTestimonialsTemplate;
            //     break;
            // case "contact":
            //     pageTemplateCurrent = pageContactsTemplate;
            //     break;
            default: pageTemplateCurrent = pageTemplate;
        }

        createPage({
            path: edge.node.path === "/" ? "/home" : edge.node.path,
            //path: `${decodeURI(edge.node.path)}`,
            component: slash(pageTemplateCurrent),
            context: {
                id: edge.node.id,
                title: edge.node.title,
            },
        })
    })



    // Check for any errors
    if (result.errors) {
        throw new Error(result.errors)
    }


    // Access query results via object destructuring
    const { allWordpressPage, allWordpressPost, allWordpressCategory } = result.data;

}

