import{a as C,S,i as a}from"./assets/vendor-DjDxajEQ.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))y(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const g of s.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&y(g)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function y(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();let l=[],m=0,f=0,L=15;const w="35615577-2bf6ed1d70f9a1c328f0e4a49",H="https://pixabay.com/api/";async function b(o,i=1){l=[];try{const e=await C({url:H,params:{key:w,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:L,page:i}});return l=e.data.hits,m=e.data.totalHits,f=m/L,{hits:l,totalHits:m}}catch(e){return console.error("Error fetching data:",e),{hits:[],totalHits:0}}}let F=new S(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function h(o){if(o.length===0){console.log("Нет данных для отображения");return}const i=o.map(e=>`<li class="list-photo">
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
              </li>`).join("");r.userContainerUL.insertAdjacentHTML("beforeend",i),F.refresh()}let u="",c=1;const r={userContainerUL:document.querySelector(".users-list"),loader:document.querySelector(".loader"),loaderButton:document.querySelector(".loader-button"),form:document.querySelector(".form-serch"),btn:document.querySelector(".loadButton"),gallery:document.querySelector(".gallery"),input:document.querySelector(".input-serch")};function z(){r.loader.classList.add("loader")}function d(){r.loader.classList.remove("loader")}function B(){r.loaderButton.style.display="flex"}function v(){r.loaderButton.style.display="none"}function q(){r.btn.classList.remove("buttonHiden")}function n(){r.btn.classList.add("buttonHiden")}document.addEventListener("DOMContentLoaded",()=>{d()});function R(){r.userContainerUL&&(r.userContainerUL.innerHTML="")}async function A(o){if(o.preventDefault(),R(),u=r.input.value.trim(),c=1,c>f&&(h(hits),p(),n()),!u){n(),d(),a.warning({message:"Запрос пустой",backgroundColor:"#ffa500",messageSize:16,messageColor:"#FFF",iconColor:"",titleColor:"#fa0598e5",icon:"info-outline",titleSize:16,messageLineHeight:24,position:"topRight"});return}z();try{await b(u),f<=1?n():q(),l.length===0?(n(),a.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ffa500",messageSize:16,messageColor:"#FFF",iconColor:"",titleColor:"#ffa500",icon:"info-outline",titleSize:16,messageLineHeight:24,position:"topRight"})):h(l),d()}catch(i){console.error("Ошибка при получении данных:",i),d(),a.error({message:"Произошла ошибка при загрузке данных",backgroundColor:"#ff0000",position:"topRight"})}r.input.value=""}r.form.addEventListener("submit",A);v();function p(){const e=r.userContainerUL.lastElementChild.getBoundingClientRect().height*2;window.scrollBy({top:e,left:0,behavior:"smooth"})}r.btn.addEventListener("click",async()=>{try{c+=1,B();const{hits:o,totalHits:i}=await b(u,c);if(c>f){h(o),p(),n(),a.warning({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#ffa500",messageSize:16,messageColor:"#FFF",iconColor:"",titleColor:"#fa0598e5",icon:"info-outline",titleSize:16,messageLineHeight:24,position:"topRight"});return}o.length>0?h(o):(n(),a.warning({message:"No more images to load.",backgroundColor:"#ffa500",messageSize:16,messageColor:"#FFF",iconColor:"",titleColor:"#fa0598e5",icon:"info-outline",titleSize:16,messageLineHeight:24,position:"topRight"})),p()}catch(o){console.log("Ошибка при загрузке следующей страницы:",o),a.error({message:"Ошибка при загрузке следующей страницы",backgroundColor:"#ff0000",position:"topRight"})}finally{v()}});
//# sourceMappingURL=index.js.map
