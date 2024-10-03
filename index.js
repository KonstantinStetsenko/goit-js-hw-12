import{a as b,S as C,i as d}from"./assets/vendor-DjDxajEQ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))h(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&h(u)}).observe(document,{childList:!0,subtree:!0});function s(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function h(o){if(o.ep)return;o.ep=!0;const l=s(o);fetch(o.href,l)}})();const S="35615577-2bf6ed1d70f9a1c328f0e4a49",w="https://pixabay.com/api/";let n=[],g=1,f=null;f=g/y;async function m(r){n=[];try{const e=await b({url:w,params:{key:S,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:y,page:a}});n=e.data.hits,g=e.data.totalHits,console.log(g),console.log(n.length),console.log(e)}catch(e){console.error("Error fetching data:",e)}}let F=new C(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function p(r){if(r.length===0){console.log("Нет данных для отображения");return}const e=r.map(s=>`<li class="list-photo">
                <div class="gallery">
                  <a href="${s.largeImageURL}" class="gallery-item">
                    <img src="${s.webformatURL}" alt="${s.tags}" loading="lazy" />
                  </a>
                </div>
                <div class="container-total">
                  <div class="item">
                    <h2 class="head-photo">likes</h2>
                    <p class="total-photo">${s.likes}</p>
                  </div>
                  <div class="item">
                    <h2 class="head-photo">views</h2>
                    <p class="total-photo">${s.views}</p>
                  </div>
                  <div class="item">
                    <h2 class="head-photo">comments</h2>
                    <p class="total-photo">${s.comments}</p>
                  </div>
                  <div class="item">
                    <h2 class="head-photo">downloads</h2>
                    <p class="total-photo">${s.downloads}</p>
                  </div>
                </div>
              </li>`).join("");t.userContainerUL.insertAdjacentHTML("beforeend",e),F.refresh()}let i="cat",a=1,y=15;const t={userContainerUL:document.querySelector(".users-list"),loader:document.querySelector(".loader"),form:document.querySelector(".form-serch"),btn:document.querySelector(".loadButton"),gallery:document.querySelector(".gallery"),input:document.querySelector(".input-serch")};console.log(t.input);console.log(t.form);function H(){t.loader.classList.add("loader")}function c(){t.loader.classList.remove("loader")}function L(){t.btn.classList.remove("buttonHiden")}function v(){t.btn.classList.add("buttonHiden")}document.addEventListener("DOMContentLoaded",()=>{c()});function q(){t.userContainerUL&&(t.userContainerUL.innerHTML="")}async function z(r){if(r.preventDefault(),q(),i=t.input.value,console.log(i),!i){c(),d.warning({message:"Запрос пустой",backgroundColor:"#ffa500",messageSize:16,messageColor:"#FFF",iconColor:"",titleColor:"#fa0598e5",icon:"info-outline",titleSize:16,messageLineHeight:24,position:"topRight"}),console.log("Запрос пустой");return}H();try{await m(i),n.length===0?d.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ffa500",messageSize:16,messageColor:"#FFF",iconColor:"",titleColor:"#ffa500",icon:"info-outline",titleSize:16,messageLineHeight:24,position:"topRight"}):(p(n),n.length>14&&L()),c()}catch(e){console.error("Ошибка при получении данных:",e),c()}t.input.value=""}t.form.addEventListener("submit",z);t.btn.addEventListener("click",async()=>{try{a+=1,await m(i,a),p(n),E(),console.log(a)}catch(r){console.log("Ошибка при загрузке следующей страницы:",r)}a>=f?(v(),d.warning({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#ffa500",messageSize:16,messageColor:"#FFF",iconColor:"",titleColor:"#fa0598e5",icon:"info-outline",titleSize:16,messageLineHeight:24,position:"topRight"}),console.log("Скрываем кнопку")):(L(),console.log("показываем кнопку"))});function E(){const r=t.userContainerUL.lastElementChild;console.log(r);const e=r.getBoundingClientRect().height;console.log(e);const s=e*5;console.log(s),window.scrollBy({top:s,left:0,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
