import { SET_LANGUAGE } from "./constants";

export function setLanguage(name) {
    return {
        type: SET_LANGUAGE,
        name,
    }
}