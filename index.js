import{a as b,S as C,i as u}from"./assets/vendor-DjDxajEQ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))f(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&f(d)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function f(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();let a=[],g=1,p=0,m=15;const S="35615577-2bf6ed1d70f9a1c328f0e4a49",w="https://pixabay.com/api/";async function y(i){a=[];try{const t=await b({url:w,params:{key:S,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:m,page:l}});a=t.data.hits,g=t.data.totalHits,p=g/m}catch(t){console.error("Error fetching data:",t)}}let F=new C(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function L(i){if(i.length===0){console.log("Нет данных для отображения");return}const t=i.map(r=>`<li class="list-photo">
                <div class="gallery">
                  <a href="${r.largeImageURL}" class="gallery-item">
                    <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
                  </a>
                </div>
                <div class="container-total">
                  <div class="item">
                    <h2 class="head-photo">likes</h2>
                    <p class="total-photo">${r.likes}</p>
                  </div>
                  <div class="item">
                    <h2 class="head-photo">views</h2>
                    <p class="total-photo">${r.views}</p>
                  </div>
                  <div class="item">
                    <h2 class="head-photo">comments</h2>
                    <p class="total-photo">${r.comments}</p>
                  </div>
                  <div class="item">
                    <h2 class="head-photo">downloads</h2>
                    <p class="total-photo">${r.downloads}</p>
                  </div>
                </div>
              </li>`).join("");o.userContainerUL.insertAdjacentHTML("beforeend",t),F.refresh()}let n="cat",l=1;const o={userContainerUL:document.querySelector(".users-list"),loader:document.querySelector(".loader"),form:document.querySelector(".form-serch"),btn:document.querySelector(".loadButton"),gallery:document.querySelector(".gallery"),input:document.querySelector(".input-serch")};function H(){o.loader.classList.add("loader")}function c(){o.loader.classList.remove("loader")}function v(){o.btn.classList.remove("buttonHiden")}function h(){o.btn.classList.add("buttonHiden")}document.addEventListener("DOMContentLoaded",()=>{c()});function q(){o.userContainerUL&&(o.userContainerUL.innerHTML="")}async function z(i){if(i.preventDefault(),q(),n=o.input.value,!n){h(),c(),u.warning({message:"Запрос пустой",backgroundColor:"#ffa500",messageSize:16,messageColor:"#FFF",iconColor:"",titleColor:"#fa0598e5",icon:"info-outline",titleSize:16,messageLineHeight:24,position:"topRight"}),console.log("Запрос пустой");return}H();try{await y(n),a.length===0?(h(),u.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ffa500",messageSize:16,messageColor:"#FFF",iconColor:"",titleColor:"#ffa500",icon:"info-outline",titleSize:16,messageLineHeight:24,position:"topRight"})):(L(a),a.length>=15&&v()),c()}catch(t){console.error("Ошибка при получении данных:",t),c()}o.input.value=""}o.form.addEventListener("submit",z);o.btn.addEventListener("click",async()=>{try{l+=1,l>p?(h(),u.warning({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#ffa500",messageSize:16,messageColor:"#FFF",iconColor:"",titleColor:"#fa0598e5",icon:"info-outline",titleSize:16,messageLineHeight:24,position:"topRight"})):v(),await y(n,l),L(a),A()}catch(i){console.log("Ошибка при загрузке следующей страницы:",i)}});function A(){const r=o.userContainerUL.lastElementChild.getBoundingClientRect().height*2;window.scrollBy({top:r,left:0,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
