(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const _ of n.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&i(_)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const u=document.querySelector(".addTask__input"),f=document.querySelector(".addTask__button"),p=document.querySelector(".todo__list");document.querySelector(".todo__options");const g=document.querySelector(".todo__options__tasksLeft"),L=document.querySelector(".todo__options__clearCompleted"),k=document.querySelectorAll(".todo__options__filter"),r=document.querySelector(".header__themeToggle__icon"),v=()=>document.querySelectorAll(".todo__list__task__deleteButton"),T=()=>document.querySelectorAll(".todo__list__task__button"),c=e=>localStorage.getItem(e)?JSON.parse(localStorage.getItem(e)):[],l=(e,t)=>{localStorage.setItem(e,JSON.stringify(t))},d=()=>{k.forEach(e=>{e.classList.remove("todo__options__filter-isActive"),e.id==="allTasks"&&e.classList.add("todo__options__filter-isActive")})},h=e=>{let t=c("tasks");const o={value:e,isCompleted:!1};o.value.trim()&&t.push(o),l("tasks",t),a(t)},y=e=>{const t=c("tasks");t.splice(e,1),l("tasks",t),a(t)},E=e=>{const t=c("tasks");t[e].isCompleted=!t[e].isCompleted,l("tasks",t),a(t)},C=()=>{let e=c("tasks");e=e.filter(t=>!t.isCompleted),l("tasks",e),a(e),m()},S=()=>{const t=c("tasks").filter(o=>!o.isCompleted);l("activeTasks",t),a(t)},D=()=>{const t=c("tasks").filter(o=>o.isCompleted);l("completedTasks",t),a(t)},b=e=>{e.parentElement.querySelectorAll(".todo__options__filter").forEach(t=>{t.classList.remove("todo__options__filter-isActive")}),e.classList.add("todo__options__filter-isActive"),e.id==="activeTasks"?S():e.id==="completedTasks"?D():a(c("tasks"))},q=()=>{c("toggleDarkTheme")?(document.body.classList.add("app-isDark"),r.src="images/icon-sun.svg"):(r.src="images/icon-moon.svg",document.body.classList.remove("app-isDark"))},A=()=>{document.body.classList.toggle("app-isDark"),l("toggleDarkTheme",document.body.classList.contains("app-isDark")),c("toggleDarkTheme")?r.src="images/icon-sun.svg":r.src="images/icon-moon.svg"},m=()=>{T().forEach((e,t)=>{e.addEventListener("click",()=>{E(t),d()})}),k.forEach(e=>{P(e)}),v().forEach((e,t)=>{e.addEventListener("click",()=>{y(t),d()})})},B=e=>{g.textContent=e>0?`${e} items left`:"No Tasks"},a=e=>{p.innerHTML="",e.forEach(t=>{const o=document.createElement("li");o.classList.add("textBox","todo__list__task"),t.isCompleted?o.classList.add("todo__list__task-isCompleted"):o.classList.remove("todo__list__task-isCompleted");const i=document.createElement("button");i.classList.add("textBox__button","todo__list__task__button");const s=document.createElement("div");s.classList.add("textBox__task","todo__list__task__content"),s.textContent=t.value;const n=document.createElement("button");n.classList.add("todo__list__task__deleteButton"),n.innerHTML='<img src="images/icon-cross.svg" alt="delete icon" />',o.appendChild(s),o.appendChild(i),o.appendChild(n),p.appendChild(o)}),B(e.length),m()},I=e=>{e.value=""},x=()=>{f.addEventListener("click",e=>{e.preventDefault(),h(u.value),d(),I(u)})},O=()=>{L.addEventListener("click",e=>{e.preventDefault(),C(),d()})},N=()=>{r.addEventListener("click",A)},P=e=>{e.addEventListener("click",t=>{t.preventDefault(),b(e)})};m();x();O();q();N();a(c("tasks"));
