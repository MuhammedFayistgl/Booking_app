import{r as s}from"./index-8b56be35.js";function c(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function p(...e){return s.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(r=>{c(r,t)})},e)}let n=!0,a=!1,l;const f={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function d(e){const{type:t,tagName:r}=e;return!!(r==="INPUT"&&f[t]&&!e.readOnly||r==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function y(e){e.metaKey||e.altKey||e.ctrlKey||(n=!0)}function i(){n=!1}function h(){this.visibilityState==="hidden"&&a&&(n=!0)}function m(e){e.addEventListener("keydown",y,!0),e.addEventListener("mousedown",i,!0),e.addEventListener("pointerdown",i,!0),e.addEventListener("touchstart",i,!0),e.addEventListener("visibilitychange",h,!0)}function b(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return n||d(t)}function E(){const e=s.useCallback(u=>{u!=null&&m(u.ownerDocument)},[]),t=s.useRef(!1);function r(){return t.current?(a=!0,window.clearTimeout(l),l=window.setTimeout(()=>{a=!1},100),t.current=!1,!0):!1}function o(u){return b(u)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:o,onBlur:r,ref:e}}export{E as a,c as s,p as u};
