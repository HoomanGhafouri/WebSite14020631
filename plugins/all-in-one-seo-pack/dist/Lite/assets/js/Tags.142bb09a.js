import{b as l}from"./links.b05f56db.js";import{t as r}from"./tags.59b5d3e2.js";import{c as p}from"./postContent.14ea6e70.js";const d={methods:{parseTags(e){const n=l();return!e||!n.tags?e:(n.tags.forEach(o=>{if(o.id==="custom_field"){const a=new RegExp(`#${o.id}-([a-zA-Z0-9_-]+)`),c=e.match(a);c&&c[1]&&(e=e.replace(a,p(c[1])));return}if(o.id==="tax_name"){const a=new RegExp(`#${o.id}-([a-zA-Z0-9_-]+)`,"g");e=e.replace(a,`[${o.name} - $1]`);return}const t=new RegExp(`#${o.id}(?![a-zA-Z0-9_])`,"g");o.id==="separator_sa"&&this.separator!==void 0&&(e=e.replace(t,this.separator));const s=e.match(t),u=n.liveTags[o.id]||o.value;s&&(e=e.replace(t,"%|%"+u))}),e=e.replace(/%\|%/g,""),r.decodeHTMLEntities(r.decodeHTMLEntities(e.replace(/<(?:.|\n)*?>/gm," ").replace(/\s/g," "))))}}};export{d as T};
