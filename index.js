import { RENDERPAGE } from "./src/renderPage.js";
let isUkrLayout;
function initUkrLayout() {
  isUkrLayout = localStorage.getItem('isUkrLayout');
  if(isUkrLayout === null){
    localStorage.setItem('isUkrLayout', 'false');
  }
  return isUkrLayout;
}
initUkrLayout();
console.log(isUkrLayout);
document.addEventListener("DOMContentLoaded", RENDERPAGE);
