import{a as g,S as y,i as p}from"./assets/vendor-DjDxajEQ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const v="35615577-2bf6ed1d70f9a1c328f0e4a49",L="https://pixabay.com/api/";let n=[];async function h(s){n=[];try{n=(await g({url:L,params:{key:v,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:S,page:d}})).data.hits,console.log(n.length)}catch(r){console.error("Error fetching data:",r)}}let b=new y(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function m(s){if(s.length===0){console.log("Нет данных для отображения");return}const r=s.map(i=>`<li class="list-photo">
                <div class="gallery">
                  <a href="${i.largeImageURL}" class="gallery-item">
                    <img src="${i.webformatURL}" alt="${i.tags}" loading="lazy" />
                  </a>
                </div>
                <div class="container-total">
                  <div class="item">
                    <h2 class="head-photo">likes</h2>
                    <p class="total-photo">${i.likes}</p>
                  </div>
                  <div class="item">
                    <h2 class="head-photo">views</h2>
                    <p class="total-photo">${i.views}</p>
                  </div>
                  <div class="item">
                    <h2 class="head-photo">comments</h2>
                    <p class="total-photo">${i.comments}</p>
                  </div>
                  <div class="item">
                    <h2 class="head-photo">downloads</h2>
                    <p class="total-photo">${i.downloads}</p>
                  </div>
                </div>
              </li>`).join("");t.userContainerUL.insertAdjacentHTML("beforeend",r),b.refresh()}let a="",d=1,S=15;const t={userContainerUL:document.querySelector(".users-list"),loader:document.querySelector(".loader"),form:document.querySelector(".form-serch"),btn:document.querySelector(".loadButton"),gallery:document.querySelector(".gallery"),input:document.querySelector(".input-serch")};console.log(t.input);console.log(t.form);function w(){t.loader.classList.add("loader")}function l(){t.loader.classList.remove("loader")}function C(){t.btn.classList.remove("buttonHiden")}function f(){t.btn.classList.add("buttonHiden")}document.addEventListener("DOMContentLoaded",()=>{l()});async function q(s){if(s.preventDefault(),a=t.input.value,console.log(a),!a){l(),p.warning({message:"Запрос пустой",backgroundColor:"#ffa500",messageSize:16,messageColor:"#FFF",iconColor:"",titleColor:"#fa0598e5",icon:"info-outline",titleSize:16,messageLineHeight:24,position:"topRight"}),f(),console.log("Запрос пустой");return}w();try{await h(a),n.length===0?p.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ffa500",messageSize:16,messageColor:"#FFF",iconColor:"",titleColor:"#ffa500",icon:"info-outline",titleSize:16,messageLineHeight:24,position:"topRight"}):(m(n),n.length>14&&C()),l()}catch(r){console.error("Ошибка при получении данных:",r),l()}t.input.value=""}t.form.addEventListener("submit",q);t.btn.addEventListener("click",async()=>{try{d+=1,await h(a,d),m(n)}catch(s){console.log("Ошибка при загрузке следующей страницы:",s)}});
//# sourceMappingURL=index.js.map
