import{a as f,S as m,i as a}from"./assets/vendor-BK_rxH-O.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const p="51593230-95869a69d21a93ebacba8501d",g="https://pixabay.com/api/";async function h(i){const t=`${g}?key=${p}&q=${encodeURIComponent(i)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=28`;return(await f.get(t)).data.hits}let l;function y(i,t){t.innerHTML="";const s=i.map(r=>`
        <a class="gallery-item" href="${r.largeImageURL}">
          <div class="image-card">
            <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" width="360"/>
            <ul class="image-stats">
              <li><b>Likes:</b> ${r.likes}</li>
              <li><b>Views:</b> ${r.views}</li>
              <li><b>Comments:</b> ${r.comments}</li>
              <li><b>Downloads:</b> ${r.downloads}</li>
            </ul>
          </div>
        </a>
      `).join("");t.innerHTML=s,l?l.refresh():l=new m(".gallery a",{captionsData:"alt",captionDelay:250})}const u=document.querySelector(".form"),d=document.querySelector(".gallery"),c=document.querySelector(".loader");u.addEventListener("submit",async i=>{i.preventDefault();const t=u.elements["search-text"].value.trim();if(t===""){a.warning({title:"Empty",message:"Type here to search",position:"topRight"});return}d.innerHTML="",c.hidden=!1;try{c.hidden=!1;const s=await h(t);await new Promise(r=>setTimeout(r,3e3)),s.length===0&&a.info({title:"No results",message:`No images found for "${t}".  Try again.`,position:"topRight"}),y(s,d)}catch(s){a.error({title:"Error",message:`Something went wrong: ${s.message}`,position:"topRight"})}finally{c.hidden=!0}});
//# sourceMappingURL=index.js.map
