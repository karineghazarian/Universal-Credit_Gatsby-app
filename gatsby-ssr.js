/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this files.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this files if you're not using it
import React from "react";


export const onRenderBody = ({ setPostBodyComponents }, pluginOptions) =>
{
    setPostBodyComponents([
        <div
            key={pluginOptions.key ? pluginOptions.key : "portal"}
            id={pluginOptions.id ? pluginOptions.id : "portal"}
        >
            {pluginOptions.text}
        </div>
    ]);
};