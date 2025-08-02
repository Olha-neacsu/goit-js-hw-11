import{a as f,i as a}from"./assets/vendor-Cl-WcV8j.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d="51593230-95869a69d21a93ebacba8501d",g="https://pixabay.com/api/";async function y(s){const r=`${g}?key=${d}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=9`;return(await f.get(r)).data.hits}function h(s,r){const o=s.map(n=>{const{webformatURL:e,largeImageURL:t,tags:i,likes:l,views:u,comments:p,downloads:m}=n;return`
        <li class="gallery-item">
        <a href="${t}" class="gallery-link">
        <img src="${e}" alt="${i}" class="gallery-image"/>
        </a>
        <div class="info">
        <p><b>Likes:</b>${l}</p>
        <p><b>Views:</b>${u}</p>
        <p><bComments:b>${p}</p>
        <p><b>Downloads:</b>${m}</p>
        </div>
        </li>`}).join("");r.innerHTML=`<ul class="gallery-list">${o}</ul>`}const c=document.querySelector(".form"),b=document.querySelector(".gallery");c.addEventListener("submit",async s=>{s.preventDefault();const r=c.elements["search-text"].value.trim();if(r===""){a.warning({title:"Empty",message:"Type here to search",position:"topRight"});return}try{const o=await y(r);o.length===0&&a.info({title:"No results",message:`No images found for "${r}".  Try again.`,position:"topRight"}),h(o,b)}catch(o){a.error({title:"Error",message:`Something went wrong: ${o.message}`,position:"topRight"})}});
//# sourceMappingURL=index.js.map
