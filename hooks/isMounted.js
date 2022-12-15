import { useEffect } from "react";
import { useState } from "react";

//need to use ismounted before using any wagmi hooks

export function isMounted() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    return mounted;
}