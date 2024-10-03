import{a as g,S as y,i as f}from"./assets/vendor-DjDxajEQ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const L="35615577-2bf6ed1d70f9a1c328f0e4a49",v="https://pixabay.com/api/";let i=[];async function h(s){i=[];try{i=(await g({url:v,params:{key:L,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:S,page:d}})).data.hits,console.log(i.length)}catch(r){console.error("Error fetching data:",r)}}let b=new y(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function m(s){if(s.length===0){console.log("Нет данных для отображения");return}const r=s.map(n=>`<li class="list-photo">
                <div class="gallery">
                  <a href="${n.largeImageURL}" class="gallery-item">
                    <img src="${n.webformatURL}" alt="${n.tags}" loading="lazy" />
                  </a>
                </div>
                <div class="container-total">
                  <div class="item">
                    <h2 class="head-photo">likes</h2>
                    <p class="total-photo">${n.likes}</p>
                  </div>
                  <div class="item">
                    <h2 class="head-photo">views</h2>
                    <p class="total-photo">${n.views}</p>
                  </div>
                  <div class="item">
                    <h2 class="head-photo">comments</h2>
                    <p class="total-photo">${n.comments}</p>
                  </div>
                  <div class="item">
                    <h2 class="head-photo">downloads</h2>
                    <p class="total-photo">${n.downloads}</p>
                  </div>
                </div>
              </li>`).join("");o.userContainerUL.insertAdjacentHTML("beforeend",r),b.refresh()}let a="",d=1,S=15;const o={userContainerUL:document.querySelector(".users-list"),loader:document.querySelector(".loader"),form:document.querySelector(".form-serch"),btn:document.querySelector(".loadButton"),gallery:document.querySelector(".gallery"),input:document.querySelector(".input-serch")};console.log(o.input);console.log(o.form);function w(){o.loader.classList.add("loader")}function l(){o.loader.classList.remove("loader")}function p(){o.btn.classList.add("buttonHiden")}function C(){o.btn.classList.remove("buttonHiden")}document.addEventListener("DOMContentLoaded",()=>{l()});function q(){o.userContainerUL&&(o.userContainerUL.innerHTML="")}async function F(s){if(s.preventDefault(),a=o.input.value,console.log(a),!a){l(),f.warning({message:"Запрос пустой",backgroundColor:"#ffa500",messageSize:16,messageColor:"#FFF",iconColor:"",titleColor:"#fa0598e5",icon:"info-outline",titleSize:16,messageLineHeight:24,position:"topRight"}),q(),p(),console.log("Запрос пустой");return}w();try{await h(a),i.length===0?(p(),f.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ffa500",messageSize:16,messageColor:"#FFF",iconColor:"",titleColor:"#ffa500",icon:"info-outline",titleSize:16,messageLineHeight:24,position:"topRight"})):(m(i),i.length>14&&C()),l()}catch(r){console.error("Ошибка при получении данных:",r),l()}o.input.value=""}o.form.addEventListener("submit",F);o.btn.addEventListener("click",async()=>{try{d+=1,await h(a,d),m(i)}catch(s){console.log("Ошибка при загрузке следующей страницы:",s)}});
//# sourceMappingURL=index.js.map
