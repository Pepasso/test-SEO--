!function(){var e={200:function(e,t,n){n(535),n(543),n(784),n(923)},535:function(){$(document).ready((function(){$(".header__burger").click((function(e){$(".header__burger, .header__menu").toggleClass("active")}))}))},543:function(){"use strict";function e(e){this.type=e}e.prototype.init=function(){const e=this;this.оbjects=[],this.daClassname="_dynamic_adapt_",this.nodes=document.querySelectorAll("[data-da]");for(let e=0;e<this.nodes.length;e++){const t=this.nodes[e],n=t.dataset.da.trim().split(","),i={};i.element=t,i.parent=t.parentNode,i.destination=document.querySelector(n[0].trim()),i.breakpoint=n[1]?n[1].trim():"767",i.place=n[2]?n[2].trim():"last",i.index=this.indexInParent(i.parent,i.element),this.оbjects.push(i)}this.arraySort(this.оbjects),this.mediaQueries=Array.prototype.map.call(this.оbjects,(function(e){return"("+this.type+"-width: "+e.breakpoint+"px),"+e.breakpoint}),this),this.mediaQueries=Array.prototype.filter.call(this.mediaQueries,(function(e,t,n){return Array.prototype.indexOf.call(n,e)===t}));for(let t=0;t<this.mediaQueries.length;t++){const n=this.mediaQueries[t],i=String.prototype.split.call(n,","),r=window.matchMedia(i[0]),a=i[1],o=Array.prototype.filter.call(this.оbjects,(function(e){return e.breakpoint===a}));r.addListener((function(){e.mediaHandler(r,o)})),this.mediaHandler(r,o)}},e.prototype.mediaHandler=function(e,t){if(e.matches)for(let e=0;e<t.length;e++){const n=t[e];n.index=this.indexInParent(n.parent,n.element),this.moveTo(n.place,n.element,n.destination)}else for(let e=0;e<t.length;e++){const n=t[e];n.element.classList.contains(this.daClassname)&&this.moveBack(n.parent,n.element,n.index)}},e.prototype.moveTo=function(e,t,n){t.classList.add(this.daClassname),"last"===e||e>=n.children.length?n.insertAdjacentElement("beforeend",t):"first"!==e?n.children[e].insertAdjacentElement("beforebegin",t):n.insertAdjacentElement("afterbegin",t)},e.prototype.moveBack=function(e,t,n){t.classList.remove(this.daClassname),void 0!==e.children[n]?e.children[n].insertAdjacentElement("beforebegin",t):e.insertAdjacentElement("beforeend",t)},e.prototype.indexInParent=function(e,t){const n=Array.prototype.slice.call(e.children);return Array.prototype.indexOf.call(n,t)},e.prototype.arraySort=function(e){"min"===this.type?Array.prototype.sort.call(e,(function(e,t){return e.breakpoint===t.breakpoint?e.place===t.place?0:"first"===e.place||"last"===t.place?-1:"last"===e.place||"first"===t.place?1:e.place-t.place:e.breakpoint-t.breakpoint})):Array.prototype.sort.call(e,(function(e,t){return e.breakpoint===t.breakpoint?e.place===t.place?0:"first"===e.place||"last"===t.place?1:"last"===e.place||"first"===t.place?-1:t.place-e.place:t.breakpoint-e.breakpoint}))},new e("max").init()},923:function(){!function(){let e=document.querySelectorAll("._ibg");for(var t=0;t<e.length;t++)e[t].querySelector("img")&&(e[t].style.backgroundImage="url("+e[t].querySelector("img").getAttribute("src")+")")}()},784:function(){new Swiper(".main-swiper",{navigation:{nextEl:".control-main-slider__next",prevEl:".control-main-slider__previous"},loop:!0,loopedSlides:2,updateOnWindowResize:!0,observer:!0,observeParents:!0,spaceBetween:0,speed:800,slidesPerView:1,autoHeight:!0,pagination:{el:".mainslider__dotts",clickable:!0}})}},t={};!function n(i){var r=t[i];if(void 0!==r)return r.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,n),a.exports}(200)}();