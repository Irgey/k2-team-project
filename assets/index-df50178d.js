(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{new Swiper(".swiper-container",{slidesPerView:1.5,centeredSlides:!0,roundLengths:!0,loop:!0,effect:"creative",creativeEffect:{limitProgress:10,prev:{scale:.9,translate:["-100%",0,0]},next:{scale:.9,translate:["100%",0,0]}},breakpoints:{320:{slidesPerView:1.5},1280:{slidesPerView:3,scale:1}},loopAdditionalSlides:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})});(function(){var n=document.documentElement,o=window,c=o.scrollY||n.scrollTop,r,e=0,t=0,s=document.getElementById("header"),i=function(){r=o.scrollY||n.scrollTop,r>c?e=2:r<c&&(e=1),e!==t&&a(e,r),c=r},a=function(l,d){l===2&&d>87?(s.classList.add("hide"),t=l):l===1&&(s.classList.remove("hide"),t=l)};window.addEventListener("scroll",i)})();window.onscroll=()=>u();function u(){const n=document.querySelector("[data-header]"),o=n.offsetHeight;window.pageYOffset>o?n.classList.add("header--no-transparency"):n.classList.remove("header--no-transparency")}(()=>{const n=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),c=document.querySelector(".js-close-menu"),r=document.querySelectorAll(".nav-mob__link"),e=()=>{const t=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!t),n.classList.toggle("is-open");const s=t?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[s](document.body)};o.addEventListener("click",e),c.addEventListener("click",e),window.matchMedia("(max-width: 767px)").addEventListener("change",t=>{console.log(!t.matches),t.matches&&r.forEach(s=>s.addEventListener("click",e))}),window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(n.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();(()=>{const n={openModalBtnSubscribe:document.querySelector("[data-modal-open-Subscribe]"),closeModalBtnSubscribe:document.querySelector("[data-modal-close-Subscribe]"),closeOpenModalBtnSubscribe:document.querySelector("[data-modal-close-open-Subscribe]"),modalSubscribe:document.querySelector("[data-modal-Subscribe]")};n.openModalBtnSubscribe.addEventListener("click",o),n.closeModalBtnSubscribe.addEventListener("click",o),n.closeOpenModalBtnSubscribe.addEventListener("click",o);function o(){n.modalSubscribe.classList.toggle("is-hidden"),n.modalSubscribe.classList.toggle("is-show")}})();