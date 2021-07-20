import * as React from "react"

const Animated = (props) =>
{
    const [animatedProps, setAnimatedProps] = React.useState(props.from)

    React.useEffect(() =>
    {
        if (props.reset)
        {
            setAnimatedProps(props.from)
        }
        const timer = setTimeout(() =>
        {
            requestAnimationFrame(() =>
                setAnimatedProps({
                    ...(props.inverse ? props.from : props.to),
                    transition: `${props.transitionProperty || "all"} .${props.duration ||
                        700 / 100}s  cubic-bezier(.19,1,.21,1) `,
                })
            )
        }, props.delay || 0)

        return () => clearTimeout(timer)
    }, [props.reset, props.inverse])

    return props.children(animatedProps)
}

export default Animated;