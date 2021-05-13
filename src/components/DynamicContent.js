import React from "react";
import Slider from "./Slider";
import Markdown from "./Markdown";

const CONTENT = {
    SLIDE: "Slide",
    MARKDOWN: "markdown"
}

const DynamicContent = ({content}) =>
{
    return content ? (
        Object.keys(content).map((key,i) =>
        {
            if(!content[key]) return null;
            switch (key)
            {
                case CONTENT.SLIDE:
                    return <Slider key={`${content.id}-${i}`} data={content[key]}/>;
                case CONTENT.MARKDOWN:
                    return <Markdown key={`${content.id}-${i}`} data={content[key]}/>;
                default:
                    return null;
            }
        })
    ) : null;
};

export default DynamicContent;