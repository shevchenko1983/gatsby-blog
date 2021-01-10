/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents, pathname }) => {
    const headComponents = getHeadComponents();
    let clearedHeadComponents = headComponents.map(function(component) {
        if(component.props && (component.type === 'meta' || component.type === 'title')
            && typeof component.props['data-react-helmet'] !== 'undefined'){
            delete component.props['data-react-helmet'];
        }
        return component;
    });
    replaceHeadComponents(clearedHeadComponents);
};

