import{a as v,S as C,i as n}from"./assets/vendor-DjDxajEQ.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))m(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const h of s.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&m(h)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function m(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();let a=[],f=0,g=0,p=15;const S="35615577-2bf6ed1d70f9a1c328f0e4a49",w="https://pixabay.com/api/";async function y(r,i=1){a=[];try{const e=await v({url:w,params:{key:S,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:p,page:i}});return a=e.data.hits,f=e.data.totalHits,g=Math.ceil(f/p),{hits:a,totalHits:f}}catch(e){return console.error("Error fetching data:",e),{hits:[],totalHits:0}}}let H=new C(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function L(r){if(r.length===0){console.log("Нет данных для отображения");return}const i=r.map(e=>`<li class="list-photo">
                <div class="gallery">
                  <a href="${e.largeImageURL}" class="gallery-item">
                    <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
                  </a>
                </div>
                <div class="container-total">
                  <div class="item">
                    <h2 class="head-photo">likes</h2>
                    <p class="total-photo">${e.likes}</p>
                  </div>
                  <div class="item">
                    <h2 class="head-photo">views</h2>
                    <p class="total-photo">${e.views}</p>
                  </div>
                  <div class="item">
                    <h2 class="head-photo">comments</h2>
                    <p class="total-photo">${e.comments}</p>
                  </div>
                  <div class="item">
                    <h2 class="head-photo">downloads</h2>
                    <p class="total-photo">${e.downloads}</p>
                  </div>
                </div>
              </li>`).join("");o.userContainerUL.insertAdjacentHTML("beforeend",i),H.refresh()}let u="",l=1;const o={userContainerUL:document.querySelector(".users-list"),loader:document.querySelector(".loader"),loaderButton:document.querySelector(".loader-button"),form:document.querySelector(".form-serch"),btn:document.querySelector(".loadButton"),gallery:document.querySelector(".gallery"),input:document.querySelector(".input-serch")};function F(){o.loader.classList.add("loader")}function d(){o.loader.classList.remove("loader")}function z(){o.loaderButton.style.display="flex"}function b(){o.loaderButton.style.display="none"}function B(){o.btn.classList.remove("buttonHiden")}function c(){o.btn.classList.add("buttonHiden")}document.addEventListener("DOMContentLoaded",()=>{d()});function q(){o.userContainerUL&&(o.userContainerUL.innerHTML="")}async function R(r){if(r.preventDefault(),q(),u=o.input.value.trim(),l=1,!u){c(),d(),n.warning({message:"Запрос пустой",backgroundColor:"#ffa500",messageSize:16,messageColor:"#FFF",iconColor:"",titleColor:"#fa0598e5",icon:"info-outline",titleSize:16,messageLineHeight:24,position:"topRight"});return}F();try{await y(u),g<=1?(c(),console.log("Только одна страница, скрываем кнопку")):B(),a.length===0?(c(),n.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ffa500",messageSize:16,messageColor:"#FFF",iconColor:"",titleColor:"#ffa500",icon:"info-outline",titleSize:16,messageLineHeight:24,position:"topRight"})):L(a),d()}catch(i){console.error("Ошибка при получении данных:",i),d(),n.error({message:"Произошла ошибка при загрузке данных",backgroundColor:"#ff0000",position:"topRight"})}o.input.value=""}o.form.addEventListener("submit",R);b();function A(){const e=o.userContainerUL.lastElementChild.getBoundingClientRect().height*2;window.scrollBy({top:e,left:0,behavior:"smooth"}),console.log(`Страница ${l}`)}o.btn.addEventListener("click",async()=>{try{l+=1,z();const{hits:r,totalHits:i}=await y(u,l);if(l>g){c(),n.warning({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#ffa500",messageSize:16,messageColor:"#FFF",iconColor:"",titleColor:"#fa0598e5",icon:"info-outline",titleSize:16,messageLineHeight:24,position:"topRight"});return}r.length>0?L(r):(c(),n.warning({message:"No more images to load.",backgroundColor:"#ffa500",messageSize:16,messageColor:"#FFF",iconColor:"",titleColor:"#fa0598e5",icon:"info-outline",titleSize:16,messageLineHeight:24,position:"topRight"})),A()}catch(r){console.log("Ошибка при загрузке следующей страницы:",r),n.error({message:"Ошибка при загрузке следующей страницы",backgroundColor:"#ff0000",position:"topRight"})}finally{b()}});
//# sourceMappingURL=index.js.map
