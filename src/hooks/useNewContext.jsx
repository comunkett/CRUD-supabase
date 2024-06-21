import { useContext } from "react";
import { ContextApi } from "../components/context/Context.api";

export function useNewContext() {
    const context = useContext(ContextApi);
    if(!context) throw new Error('useNewContext must be used with provider + contextAPI')
    return context;
}

