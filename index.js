import{a as b,S as C,i as g}from"./assets/vendor-DjDxajEQ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))h(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&h(d)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function h(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();let l=[],u=1,m=0,f=15;const S="35615577-2bf6ed1d70f9a1c328f0e4a49",w="https://pixabay.com/api/";async function p(r){l=[];try{const e=await b({url:w,params:{key:S,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:f,page:a}});l=e.data.hits,u=e.data.totalHits,m=u/f,console.log(u),console.log(l.length),console.log(e)}catch(e){console.error("Error fetching data:",e)}}let F=new C(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function y(r){if(r.length===0){console.log("Нет данных для отображения");return}const e=r.map(s=>`<li class="list-photo">
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
              </li>`).join("");t.userContainerUL.insertAdjacentHTML("beforeend",e),F.refresh()}let i="cat",a=1;const t={userContainerUL:document.querySelector(".users-list"),loader:document.querySelector(".loader"),form:document.querySelector(".form-serch"),btn:document.querySelector(".loadButton"),gallery:document.querySelector(".gallery"),input:document.querySelector(".input-serch")};console.log(t.input);console.log(t.form);function H(){t.loader.classList.add("loader")}function c(){t.loader.classList.remove("loader")}function L(){t.btn.classList.remove("buttonHiden")}function v(){t.btn.classList.add("buttonHiden")}document.addEventListener("DOMContentLoaded",()=>{c()});function q(){t.userContainerUL&&(t.userContainerUL.innerHTML="")}async function z(r){if(r.preventDefault(),q(),i=t.input.value,console.log(i),!i){c(),g.warning({message:"Запрос пустой",backgroundColor:"#ffa500",messageSize:16,messageColor:"#FFF",iconColor:"",titleColor:"#fa0598e5",icon:"info-outline",titleSize:16,messageLineHeight:24,position:"topRight"}),console.log("Запрос пустой");return}H();try{await p(i),l.length===0?(v(),g.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ffa500",messageSize:16,messageColor:"#FFF",iconColor:"",titleColor:"#ffa500",icon:"info-outline",titleSize:16,messageLineHeight:24,position:"topRight"})):(y(l),l.length>=15&&L()),c()}catch(e){console.error("Ошибка при получении данных:",e),c()}t.input.value=""}t.form.addEventListener("submit",z);t.btn.addEventListener("click",async()=>{try{a+=1,a>m?(v(),g.warning({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#ffa500",messageSize:16,messageColor:"#FFF",iconColor:"",titleColor:"#fa0598e5",icon:"info-outline",titleSize:16,messageLineHeight:24,position:"topRight"}),console.log("Скрываем кнопку")):(L(),console.log("показываем кнопку")),await p(i,a),y(l),E(),console.log(a)}catch(r){console.log("Ошибка при загрузке следующей страницы:",r)}});function E(){const r=t.userContainerUL.lastElementChild;console.log(r);const e=r.getBoundingClientRect().height;console.log(e);const s=e*5;console.log(s),window.scrollBy({top:s,left:0,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
