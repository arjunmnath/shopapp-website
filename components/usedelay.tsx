import React, { CSSProperties, useEffect, useState } from "react";

interface useMountAnimationProps {
    render: JSX.Element,
    fallback: JSX.Element,
}

interface useMountAnimationReturn {
    mount:boolean,
    mountedStyle: CSSProperties,
    unmountedStyle: CSSProperties,
    ContentOrSkeleton: JSX.Element
}

const useMountAnimation = ({render, fallback}:useMountAnimationProps): useMountAnimationReturn => {
    const [shouldRender, setShouldRender] = useState<boolean>(false);
    const mountedStyle:CSSProperties = { opacity: 1, transition: "opacity 1500ms ease-in" };
    const unmountedStyle:CSSProperties = {
        opacity: 0.5,
        transition: "opacity 1500ms ease-in",
    };
    useEffect(() => {
        setShouldRender(true);
    })
    return {mount: shouldRender, mountedStyle: mountedStyle, unmountedStyle: unmountedStyle, ContentOrSkeleton: shouldRender ? <> {render} </> : <>{fallback}</>};
}

export default useMountAnimation;


