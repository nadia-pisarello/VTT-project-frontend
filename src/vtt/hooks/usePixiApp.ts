import type React from "react";
import { useEffect, useRef, useState } from "react";
import * as PIXI from "pixi.js"
import { createPixiApp } from "../engine/createApp";

export function usePixiApp(containerRef: React.RefObject<HTMLDivElement | null>) {
    const appRef = useRef<PIXI.Application | null>(null);
    const [app, setApp] = useState<PIXI.Application | null>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        let destroyed = false;

        (async () => {
            const pixiApp = await createPixiApp(container);
            if (destroyed) return;
            appRef.current = pixiApp;
            setApp(pixiApp)
        })();
        return () => {
            destroyed = true;
            appRef.current?.destroy(true);
            appRef.current = null;
            setApp(null);
        };
    }, [containerRef]);
    return { app, appRef };

}