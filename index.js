import{S as l,K as d,N as p,a as u,i as c}from"./assets/vendor-A99WFo5x.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const f="https://portfolio-js.b.goit.study/api/reviews",a=document.querySelector(".reviews-list");function w(){new l(".swiper",{direction:"horizontal",modules:[d,p],speed:500,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:32},768:{slidesPerView:1,spaceBetween:32},1280:{slidesPerView:2,spaceBetween:32}},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0}})}async function m(){try{const t=await u.get(`${f}`);t.data.length===0?a.innerHTML="No reviews found.":a.insertAdjacentHTML("beforeend",g(t.data))}catch(t){t?(h(),c.error({title:"404 Error",message:"The requested URL was not found.",position:"bottomCenter"})):c.error({title:"Error",message:"An error occurred while loading data.",position:"bottomCenter"})}}function g(t){return t.map(({author:o,avatar_url:i,review:s,_id:e})=>`<li class="swiper-slide" id="${e}">
           <p class="card-text">${s}</p>
           <div class="card-person-info">
             <img class="card-avatar" src="${i}" alt="${o}" width="40" height="40"/>
             <p class="card-author">${o}</p>
           </div>
       </li> `).join("")}function h(){const t=`<li class="swiper-slide error-styles">
  <h2 class="error-code">404</h2>
  <p class="error-text">Not found</p>
  </li>`;a.innerHTML=t}w();m();
//# sourceMappingURL=index.js.map
