import { useCallback, useEffect, useState } from "react";

export const useAsync = <T>(
    asyncFunction: () => Promise<T>,
    immediate = true
) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const execute = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await asyncFunction();
            setData(response);
            return response;
        } catch (err) {
            setError(err as Error);
            setData(null);
            throw err;
        } finally {
            setLoading(false);
        }
    }, [asyncFunction]);
    useEffect(() => {
        if (immediate) {
            execute();
        }
    }, [execute, immediate]);
    return { data, loading, error, execute, setData };
}