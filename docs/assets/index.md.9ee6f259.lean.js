import{h as n,o,c as i}from"./chunks/framework.716bc990.js";function l(){return fetch("https://api.github.com/repos/z-song/laravel-admin/releases/latest").then(e=>e.json()).then(e=>e.tag_name??"").then(e=>{if(!e)return;const t=document.querySelector("div.VPHero.has-image.VPHomeHero > div > div.main > p.tagline"),a=document.createElement("samp");a.classList.add("docs-cn-github-release-tag"),a.innerText=e,t==null||t.appendChild(a)})}const r=JSON.parse('{"title":"Laravel-Admin","titleTemplate":"a tool to quickly build back office management","description":"","frontmatter":{"layout":"home","title":"Laravel-Admin","titleTemplate":"a tool to quickly build back office management","hero":{"name":"Laravel-Admin","text":"a tool to quickly build back office management","tagline":"It provides features such as page components and form elements that can help you implement full-featured back-end management functions with very little code","image":{"src":"/logo.png","alt":"Laravel-Admin"},"actions":[{"theme":"brand","text":"Begin","link":"/guide/"}]},"features":[{"icon":"📄","title":"model-grid","details":"support for quickly building data tables"},{"icon":"📄","title":"model-form","details":"enables rapid construction of data forms"},{"icon":"📄","title":"model-tree","details":"enables rapid construction of tree data"},{"icon":"📄","title":"RBAC","details":"role based permission control"},{"icon":"📄","title":"built in components","details":"Built-in 40+ form element components, as well as support extension components, support custom charts"},{"icon":"📄","title":"high flexibility","details":"Multiple model relationships, local and OSS file upload, and multi-database support"}]},"headers":[],"relativePath":"index.md"}'),s={name:"index.md"},d=Object.assign(s,{setup(e){return n(()=>{l()}),(t,a)=>(o(),i("div"))}});export{r as __pageData,d as default};