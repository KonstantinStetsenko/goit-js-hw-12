import{a as g,S as y,i as f}from"./assets/vendor-DjDxajEQ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const u of t.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&d(u)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const L="35615577-2bf6ed1d70f9a1c328f0e4a49",v="https://pixabay.com/api/";let n=[];async function p(s){n=[];try{n=(await g({url:v,params:{key:L,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:S,page:c}})).data.hits,console.log(n.length)}catch(r){console.error("Error fetching data:",r)}}let b=new y(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function m(s){if(s.length===0){console.log("Нет данных для отображения");return}const r=s.map(i=>`<li class="list-photo">
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
              </li>`).join("");o.userContainerUL.insertAdjacentHTML("beforeend",r),b.refresh()}let a="",c=1,S=15;const o={userContainerUL:document.querySelector(".users-list"),loader:document.querySelector(".loader"),form:document.querySelector(".form-serch"),btn:document.querySelector(".loadButton"),gallery:document.querySelector(".gallery"),input:document.querySelector(".input-serch")};function w(){o.loader.classList.add("loader")}function l(){o.loader.classList.remove("loader")}function C(){o.btn.classList.remove("buttonHiden")}function h(){o.btn.classList.add("buttonHiden")}document.addEventListener("DOMContentLoaded",()=>{l()});function q(){a="",c=1,o.userContainerUL&&(o.userContainerUL.innerHTML=""),o.input.value=""}async function F(s){if(s.preventDefault(),q(),console.log(o.userContainerUL),a=o.input.value,console.log(a),!a){l(),f.warning({message:"Запрос пустой",backgroundColor:"#ffa500",messageSize:16,messageColor:"#FFF",iconColor:"",titleColor:"#fa0598e5",icon:"info-outline",titleSize:16,messageLineHeight:24,position:"topRight"}),h(),console.log("Запрос пустой");return}w();try{await p(a),n.length===0?f.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ffa500",messageSize:16,messageColor:"#FFF",iconColor:"",titleColor:"#ffa500",icon:"info-outline",titleSize:16,messageLineHeight:24,position:"topRight"}):(m(n),n.length>14&&C()),l()}catch(r){console.error("Ошибка при получении данных:",r),l()}o.input.value=""}o.form.addEventListener("submit",F);o.btn.addEventListener("click",async()=>{try{c+=1,await p(a,c),m(n)}catch(s){console.log("Ошибка при загрузке следующей страницы:",s)}});
//# sourceMappingURL=index.js.map
