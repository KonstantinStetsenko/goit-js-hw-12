import{a as b,S as C,i as l}from"./assets/vendor-DjDxajEQ.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))m(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&m(f)}).observe(document,{childList:!0,subtree:!0});function r(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function m(e){if(e.ep)return;e.ep=!0;const i=r(e);fetch(e.href,i)}})();let n=[],y=1,p=0,h=15;const S="35615577-2bf6ed1d70f9a1c328f0e4a49",w="https://pixabay.com/api/";async function L(s){n=[];try{const o=await b({url:w,params:{key:S,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:h,page:a}});n=o.data.hits,y=o.data.totalHits,p=y/h}catch(o){console.error("Error fetching data:",o)}}let B=new C(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function g(s){if(s.length===0){console.log("Нет данных для отображения");return}const o=s.map(r=>`<li class="list-photo">
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
              </li>`).join("");t.userContainerUL.insertAdjacentHTML("beforeend",o),B.refresh()}let c="",a=30;const t={userContainerUL:document.querySelector(".users-list"),loader:document.querySelector(".loader"),loaderButton:document.querySelector(".loader-button"),form:document.querySelector(".form-serch"),btn:document.querySelector(".loadButton"),gallery:document.querySelector(".gallery"),input:document.querySelector(".input-serch")};function F(){t.loader.classList.add("loader")}function d(){t.loader.classList.remove("loader")}function H(){t.loaderButton.style.display="flex"}function v(){t.loaderButton.style.display="none"}function q(){t.btn.classList.remove("buttonHiden")}function u(){t.btn.classList.add("buttonHiden")}document.addEventListener("DOMContentLoaded",()=>{d()});function z(){t.userContainerUL&&(t.userContainerUL.innerHTML="")}async function R(s){if(p===1&&u(),s.preventDefault(),z(),c=t.input.value.trim(),a=1,!c){u(),d(),l.warning({message:"Запрос пустой",backgroundColor:"#ffa500",messageSize:16,messageColor:"#FFF",iconColor:"",titleColor:"#fa0598e5",icon:"info-outline",titleSize:16,messageLineHeight:24,position:"topRight"});return}F();try{await L(c),n.length===0?(u(),l.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ffa500",messageSize:16,messageColor:"#FFF",iconColor:"",titleColor:"#ffa500",icon:"info-outline",titleSize:16,messageLineHeight:24,position:"topRight"})):(g(n),n.length>=h&&q()),d()}catch(o){console.error("Ошибка при получении данных:",o),d(),l.error({message:"Произошла ошибка при загрузке данных",backgroundColor:"#ff0000",position:"topRight"})}t.input.value=""}t.form.addEventListener("submit",R);v();t.btn.addEventListener("click",async()=>{try{if(a+=1,a>p){g(n),u(),l.warning({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#ffa500",messageSize:16,messageColor:"#FFF",iconColor:"",titleColor:"#fa0598e5",icon:"info-outline",titleSize:16,messageLineHeight:24,position:"topRight"});return}H(),await L(c,a),g(n),A()}catch(s){console.log("Ошибка при загрузке следующей страницы:",s),l.error({message:"Ошибка при загрузке следующей страницы",backgroundColor:"#ff0000",position:"topRight"})}finally{v()}});function A(){const r=t.userContainerUL.lastElementChild.getBoundingClientRect().height*2;window.scrollBy({top:r,left:0,behavior:"smooth"}),console.log(`Страница ${a}`)}
//# sourceMappingURL=index.js.map
