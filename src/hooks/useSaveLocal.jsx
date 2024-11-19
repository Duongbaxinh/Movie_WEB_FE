import { useEffect, useState } from "react";

const useSaveLocal = (key, value) => {
    const [data, setData] = useState()

    const handleSaveValue = (valueKey) => {
        localStorage.setItem('interact', valueKey)
        setData(valueKey)
    }
    useEffect(() => {
        const dataValue = localStorage.getItem(key)
        if (!dataValue) {
            localStorage.setItem(key, value)
            setData(value)
        } else {
            setData(dataValue)
        }
    }, [])

    return [data, handleSaveValue];
};

export default useSaveLocal;
