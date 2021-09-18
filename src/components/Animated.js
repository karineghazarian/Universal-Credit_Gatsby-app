import React, { useEffect, useRef, useState } from "react";

const Animated = props => {
  const [animatedProps, setAnimatedProps] = useState(props.from)
  const animationIdRef = useRef()
  const timeoutIdRef = useRef()

  useEffect(() => {
    if (props.reset) {
      setAnimatedProps(props.from)
    }
    timeoutIdRef.current = setTimeout(() => {
      animationIdRef.current = requestAnimationFrame(() =>
        setAnimatedProps({
          ...(props.inverse ? props.from : props.to),
          transition: `${props.transitionProperty || "all"} .${
            props.duration || 700 / 100
          }s  cubic-bezier(.19,1,.21,1) `,
        })
      )
    }, props.delay || 0)

    return () => {
      clearTimeout(timeoutIdRef.current)
      cancelAnimationFrame(animationIdRef.current)
    }
  }, [
    props.reset,
    props.inverse,
    props.delay,
    props.from,
    props.to,
    props.transitionProperty,
    props.duration,
  ])

  return props.children(animatedProps)
}

export default Animated
