import{a as C,S,i as n}from"./assets/vendor-DjDxajEQ.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))p(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&p(f)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function p(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();let a=[],h=0,m=0,y=15;const w="35615577-2bf6ed1d70f9a1c328f0e4a49",H="https://pixabay.com/api/";async function b(o,i=1){a=[];try{const e=await C({url:H,params:{key:w,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:y,page:i}});return a=e.data.hits,h=e.data.totalHits,m=h/y,{hits:a,totalHits:h}}catch(e){return console.error("Error fetching data:",e),{hits:[],totalHits:0}}}let F=new S(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function g(o){if(o.length===0){console.log("Нет данных для отображения");return}const i=o.map(e=>`<li class="list-photo">
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
              </li>`).join("");r.userContainerUL.insertAdjacentHTML("beforeend",i),F.refresh()}let c="",u=1;const r={userContainerUL:document.querySelector(".users-list"),loader:document.querySelector(".loader"),loaderButton:document.querySelector(".loader-button"),form:document.querySelector(".form-serch"),btn:document.querySelector(".loadButton"),gallery:document.querySelector(".gallery"),input:document.querySelector(".input-serch")};function z(){r.loader.classList.add("loader")}function d(){r.loader.classList.remove("loader")}function B(){r.loaderButton.style.display="flex"}function v(){r.loaderButton.style.display="none"}function q(){r.btn.classList.remove("buttonHiden")}function l(){r.btn.classList.add("buttonHiden")}document.addEventListener("DOMContentLoaded",()=>{d()});function R(){r.userContainerUL&&(r.userContainerUL.innerHTML="")}async function A(o){if(o.preventDefault(),R(),c=r.input.value.trim(),u=1,!c){l(),d(),n.warning({message:"Запрос пустой",backgroundColor:"#ffa500",messageSize:16,messageColor:"#FFF",iconColor:"",titleColor:"#fa0598e5",icon:"info-outline",titleSize:16,messageLineHeight:24,position:"topRight"});return}z();try{await b(c),m<=1?l():q(),a.length===0?(l(),n.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ffa500",messageSize:16,messageColor:"#FFF",iconColor:"",titleColor:"#ffa500",icon:"info-outline",titleSize:16,messageLineHeight:24,position:"topRight"})):g(a),d()}catch(i){console.error("Ошибка при получении данных:",i),d(),n.error({message:"Произошла ошибка при загрузке данных",backgroundColor:"#ff0000",position:"topRight"})}r.input.value=""}r.form.addEventListener("submit",A);v();function L(){const e=r.userContainerUL.lastElementChild.getBoundingClientRect().height*2;window.scrollBy({top:e,left:0,behavior:"smooth"})}r.btn.addEventListener("click",async()=>{try{u+=1,B();const{hits:o,totalHits:i}=await b(c,u);if(u>m){g(o),L(),l(),n.warning({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#ffa500",messageSize:16,messageColor:"#FFF",iconColor:"",titleColor:"#fa0598e5",icon:"info-outline",titleSize:16,messageLineHeight:24,position:"topRight"});return}o.length>0?g(o):(l(),n.warning({message:"No more images to load.",backgroundColor:"#ffa500",messageSize:16,messageColor:"#FFF",iconColor:"",titleColor:"#fa0598e5",icon:"info-outline",titleSize:16,messageLineHeight:24,position:"topRight"})),L()}catch(o){console.log("Ошибка при загрузке следующей страницы:",o),n.error({message:"Ошибка при загрузке следующей страницы",backgroundColor:"#ff0000",position:"topRight"})}finally{v()}});
//# sourceMappingURL=index.js.map
