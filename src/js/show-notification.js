import "../styles.css"
import { success, error, notice } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";



export function showSuccess() {
    success({
        text: "It`s OK. This country was found!",
        delay: 1300,
    })
};

export function showError() {
    error({
        text: "No mathes found. Enter a correct query!",
        delay: 1300,
    })
};

export function showNotice() {
    notice({
        text: "Too many mathes found. Please enter a more specific query!",
        delay: 1300,
    })
};
