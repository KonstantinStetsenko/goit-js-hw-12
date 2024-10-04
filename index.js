import{a as b,S as C,i as u}from"./assets/vendor-DjDxajEQ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))g(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&g(d)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function g(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();let n=[],f=1,p=0,m=15;const S="35615577-2bf6ed1d70f9a1c328f0e4a49",w="https://pixabay.com/api/";async function y(t){n=[];try{const e=await b({url:w,params:{key:S,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:m,page:l}});n=e.data.hits,f=e.data.totalHits,p=f/m}catch(e){console.error("Error fetching data:",e)}}let F=new C(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function L(t){if(t.length===0){console.log("Нет данных для отображения");return}const e=t.map(r=>`<li class="list-photo">
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
              </li>`).join("");s.userContainerUL.insertAdjacentHTML("beforeend",e),F.refresh()}let a="cat",l=1;const s={userContainerUL:document.querySelector(".users-list"),loader:document.querySelector(".loader"),form:document.querySelector(".form-serch"),btn:document.querySelector(".loadButton"),gallery:document.querySelector(".gallery"),input:document.querySelector(".input-serch")};function H(){s.loader.classList.add("loader")}function c(){s.loader.classList.remove("loader")}function v(){s.btn.classList.remove("buttonHiden")}function h(){s.btn.classList.add("buttonHiden")}document.addEventListener("DOMContentLoaded",()=>{c()});function q(){s.userContainerUL&&(s.userContainerUL.innerHTML="")}async function z(t){if(t.preventDefault(),q(),a=s.input.value,!a){h(),c(),u.warning({message:"Запрос пустой",backgroundColor:"#ffa500",messageSize:16,messageColor:"#FFF",iconColor:"",titleColor:"#fa0598e5",icon:"info-outline",titleSize:16,messageLineHeight:24,position:"topRight"}),console.log("Запрос пустой");return}H();try{await y(a),n.length===0?(h(),u.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ffa500",messageSize:16,messageColor:"#FFF",iconColor:"",titleColor:"#ffa500",icon:"info-outline",titleSize:16,messageLineHeight:24,position:"topRight"})):(L(n),n.length>=15&&v()),c()}catch(e){console.error("Ошибка при получении данных:",e),c()}s.input.value=""}s.form.addEventListener("submit",z);s.btn.addEventListener("click",async()=>{try{l+=1,l>p?(h(),u.warning({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#ffa500",messageSize:16,messageColor:"#FFF",iconColor:"",titleColor:"#fa0598e5",icon:"info-outline",titleSize:16,messageLineHeight:24,position:"topRight"}),console.log("Скрываем кнопку")):(v(),console.log("показываем кнопку")),await y(a,l),L(n),E(),console.log(l)}catch(t){console.log("Ошибка при загрузке следующей страницы:",t)}});function E(){const t=s.userContainerUL.lastElementChild;console.log(t);const e=t.getBoundingClientRect().height;console.log(e);const r=e*5;console.log(r),window.scrollBy({top:r,left:0,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
