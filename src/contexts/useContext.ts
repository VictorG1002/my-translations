import { useContext } from "react";
import { IndexContext } from "./index";

export const useIndexContext = () => {
    const context = useContext(IndexContext) 

    if (!context) {
        throw new Error('useIndexContext must be used within a IndexProvider')
    }

    return context
}