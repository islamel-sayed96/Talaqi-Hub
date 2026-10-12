/**
 * Runs in <head> before paint so the page never flashes the wrong theme.
 * Dark is the default; light only when the visitor picked it with the toggle.
 */
export const THEME_SCRIPT = `(function(){var t="dark";try{if(localStorage.getItem("theme")==="light")t="light"}catch(e){}document.documentElement.dataset.theme=t})()`;
