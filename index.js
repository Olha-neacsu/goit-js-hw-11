import{a as d,S as m,i as a}from"./assets/vendor-BK_rxH-O.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();async function f(n){const o=`https://pixabay.com/api/?key=51593230-95869a69d21a93ebacba8501d&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=28`;return(await d.get(o)).data.hits}const l=document.querySelector(".gallery");let p=new m(".gallery a",{captionsData:"alt",captionsDelay:250});function g(n){const r=n.map(({webformatURL:i,largeImageURL:o,tags:e,likes:t,views:s,comments:c,downloads:u})=>`
    <a href="${o}" class="gallery-item">
      <div class="image-card">
        <img src="${i}" alt="${e}" loading="lazy" />
        <ul class="image-stats">
          <li><b>Likes</b> ${t}</li>
          <li><b>Views</b> ${s}</li>
          <li><b>Comments</b> ${c}</li>
          <li><b>Downloads</b> ${u}</li>
        </ul>
      </div>
    </a>
  `).join("");l.insertAdjacentHTML("beforeend",r),p.refresh()}function y(){l.innerHTML=""}function h(){document.querySelector(".loader").classList.remove("hidden")}function b(){document.querySelector(".loader").classList.add("hidden")}const L=document.querySelector(".form"),w=document.querySelector(".input");L.addEventListener("submit",async function(r){r.preventDefault();const i=w.value.trim();if(!i){a.info({title:"Empty",message:"Type here to search",position:"topRight"});return}y(),h();try{const o=await f(i);await new Promise(e=>setTimeout(e,2e3)),o.length===0?a.warning({title:"No results",message:`No images found for "${i}".  Try again.`,position:"topRight"}):g(o)}catch(o){a.error({title:"Error",message:`Something went wrong: ${o.message}`,position:"topRight"})}finally{b()}});
//# sourceMappingURL=index.js.map
