// exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
//   const headComponents = getHeadComponents();
//   //   const styleHeadComponents = headComponents.filter(
//   //     (component) => component.type === 'style'
//   //   );
//   //   console.log(styleHeadComponents);
//   //   const nonStyleHeadComponents = headComponents.filter(
//   //     (component) => component.type !== 'style'
//   //   );
//   //   replaceHeadComponents([nonStyleHeadComponents, styleHeadComponents]);
//   //   headComponents.sort((x, y) => {
//   //     if (x.key === 'TypographyStyle') {
//   //       return 1;
//   //     } else if (y.key === 'TypographyStyle') {
//   //       return -1;
//   //     }
//   //     return 0;
//   //   });
//   console.log(headComponents);
//   replaceHeadComponents(headComponents);
// };

var React = require('react');

// Hack, to reorder the helmet components as first in <head> tag
exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  /**
   * @type {any[]} headComponents
   */
  const headComponents = getHeadComponents();
  console.log(headComponents);

  headComponents.sort((a, b) => {
    // console.log(a);
    if (a.props && a.props['data-react-helmet']) {
      return 0;
    }
    return 1;
  });
  replaceHeadComponents(headComponents);
};
