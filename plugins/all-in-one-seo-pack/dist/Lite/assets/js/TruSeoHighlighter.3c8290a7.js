import{F as _,G as R,r as L,v as j,H as $,I as F}from"./links.6d4c0bdb.js";import{r as E,o as D,c as z,a as c,d as v,n as q,t as I,i as b,M as V,N as J,G as K,y as U}from"./vue.runtime.esm-bundler.b39e1078.js";import{r as G,i as X,n as Q,j as k}from"./postContent.37ac0296.js";import{S as Y}from"./Ellipse.f3d45202.js";import{b as Z,a as tt}from"./Caret.164d8058.js";import{_ as et}from"./_plugin-vue_export-helper.b97bdf23.js";import{u as it,j as rt,z as ot}from"./isArrayLikeObject.10b615a9.js";import{t as P,a as N}from"./toFinite.c2274946.js";var nt=function(){return it.Date.now()};const w=nt;var st="Expected a function",lt=Math.max,ht=Math.min;function x(t,e,i){var r,o,s,l,n,h,a=0,p=!1,u=!1,m=!0;if(typeof t!="function")throw new TypeError(st);e=P(e)||0,rt(i)&&(p=!!i.leading,u="maxWait"in i,s=u?lt(P(i.maxWait)||0,e):s,m="trailing"in i?!!i.trailing:m);function y(g){var d=r,f=o;return r=o=void 0,a=g,l=t.apply(f,d),l}function T(g){return a=g,n=setTimeout(S,e),p?y(g):l}function O(g){var d=g-h,f=g-a,B=e-d;return u?ht(B,s-f):B}function C(g){var d=g-h,f=g-a;return h===void 0||d>=e||d<0||u&&f>=s}function S(){var g=w();if(C(g))return M(g);n=setTimeout(S,O(g))}function M(g){return n=void 0,m&&r?y(g):(r=o=void 0,l)}function A(){n!==void 0&&clearTimeout(n),a=0,r=h=o=n=void 0}function W(){return n===void 0?l:M(w())}function H(){var g=w(),d=C(g);if(r=arguments,o=this,h=g,d){if(n===void 0)return T(h);if(u)return clearTimeout(n),n=setTimeout(S,e),y(h)}return n===void 0&&(n=setTimeout(S,e)),l}return H.cancel=A,H.flush=W,H}var at=Math.floor,gt=Math.random;function ct(t,e){return t+at(gt()*(e-t+1))}var dt=parseFloat,ut=Math.min,ft=Math.random;function pt(t,e,i){if(i&&typeof i!="boolean"&&ot(t,e,i)&&(e=i=void 0),i===void 0&&(typeof e=="boolean"?(i=e,e=void 0):typeof t=="boolean"&&(i=t,t=void 0)),t===void 0&&e===void 0?(t=0,e=1):(t=N(t),e===void 0?(e=t,t=0):e=N(e)),t>e){var r=t;t=e,e=r}if(i||t%1||e%1){var o=ft();return ut(t+o*(e-t+dt("1e-"+((o+"").length-1))),e)}return ct(t,e)}const St=t=>t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");const vt={setup(){return{truSeoHighlighterStore:_()}},emits:["next","previous"],components:{SvgEllipse:Y,SvgCaret:Z,SvgClose:tt},data(){return{error:this.truSeoHighlighterStore.highlightAnalyzerHasError,order:this.truSeoHighlighterStore.highlightMarks.findIndex(t=>t.active)+1,total:this.truSeoHighlighterStore.highlightMarks.length}},methods:{close(){this.truSeoHighlighterStore.toggleHighlightAnalyzer(null)}}},mt=t=>(V("data-v-966cf3f9"),t=t(),J(),t),yt={class:"tru-seo-highlight-popover","data-arrow-placement":"right"},Ht={class:"tru-seo-highlight-popover__count"},Et=mt(()=>c("div",{class:"tru-seo-highlight-popover__pipe"},null,-1)),bt={class:"tru-seo-highlight-popover__nav"},kt=["disabled"],wt=["disabled"],xt={class:"tru-seo-highlight-popover__close"};function _t(t,e,i,r,o,s){const l=E("svg-ellipse"),n=E("svg-caret"),h=E("svg-close");return D(),z("div",yt,[c("div",{class:q(["tru-seo-highlight-popover__bullet",{"tru-seo-highlight-popover__bullet--error":o.error}])},[v(l,{width:"8"})],2),c("div",Ht,[c("span",null,I(o.order)+"/"+I(o.total),1)]),Et,c("div",bt,[c("button",{type:"button",class:"caret-wrapper caret-wrapper--previous",tabindex:"0",disabled:o.order===1,onClick:e[0]||(e[0]=b(a=>t.$emit("previous"),["stop","exact"]))},[v(n,{width:"20"})],8,kt),c("button",{type:"button",class:"caret-wrapper",tabindex:"0",disabled:o.order===o.total,onClick:e[1]||(e[1]=b(a=>t.$emit("next"),["stop","exact"]))},[v(n,{width:"20"})],8,wt)]),c("div",xt,[c("button",{type:"button",class:"close-wrapper",tabindex:"0",onClickOnce:e[2]||(e[2]=b((...a)=>s.close&&s.close(...a),["stop","exact"]))},[v(h,{width:"10"})],32)])])}const Ct=et(vt,[["render",_t],["__scopeId","data-v-966cf3f9"]]),Wt={setup(){return{truSeoHighlighterStore:_()}},computed:{...R(_)},data(){var t,e,i,r;return{editorObserver:null,editorWrapperRect:{},isBlockEditor:L(),isClassicEditor:j(),tinymceEditor:null,selectBlockEditor:(e=(t=window==null?void 0:window.wp)==null?void 0:t.data)==null?void 0:e.select("core/block-editor"),selectEditPost:(r=(i=window==null?void 0:window.wp)==null?void 0:i.data)==null?void 0:r.select("core/edit-post"),strings:{highlightSections:this.$t.__("Highlight sections in the Editor",this.$td)}}},methods:{annotateBlock(t){var i,r,o,s,l,n;let e="content";(r=(i=t.block)==null?void 0:i.attributes)!=null&&r.caption?e="caption":(s=(o=t.block)==null?void 0:o.attributes)!=null&&s.value?e="value":(n=(l=t.block)==null?void 0:l.attributes)!=null&&n.citation&&(e="citation"),this.truSeoHighlighterStore.dispatchAnnotations.__experimentalAddAnnotation({id:t.id,range:t.range,source:this.truSeoHighlighterStore.source,blockClientId:t.block.clientId,richTextIdentifier:e})},annotateTinyMce(t,e){if(!e)return!1;!e.hasFocus()&&this.isBlockEditor&&e.focus();let i=e.selection.win.getSelection();i.selectAllChildren(t.parent);const r=i.toString().length;if(t.range.end<r)for(let o=t.range.end;o<r;o++)i.modify("extend","backward","character");if(0<t.range.start){i=G(i);for(let o=t.range.start;0<o;o--)i.modify("extend","forward","character")}e.undoManager.ignore(()=>{e.annotator.annotate(this.truSeoHighlighterStore.source,{uid:t.id})}),i.empty()},appendHighlightPopover(){if(this.truSeoHighlighterStore.clearHighlightPopover(),this.truSeoHighlighterStore.sanitizeHighlightMarks(),!this.truSeoHighlighterStore.activeMark)return!1;const t=this,e=K({name:"TruSeoHighlightPopover",render(){return U(Ct,{onNext(){t.incrementActiveMark(1)},onPrevious(){t.incrementActiveMark(-1)}})}}),i=X(),r=new ResizeObserver(x(this.repositionHighlightPopover,750)),o=this.getEditorNode("wrapper");if(!o)return!1;o.parentElement.appendChild(i),e.mount(i),r.observe(this.getEditorNode("wrapper"),{box:"border-box"}),this.truSeoHighlighterStore.highlightPopover.app=e,this.truSeoHighlighterStore.highlightPopover.node=i,this.truSeoHighlighterStore.highlightPopover.observer=r,this.repositionHighlightPopover()},disallowHighlighting(){this.truSeoHighlighterStore.toggleHighlightAnalyzer(null),this.truSeoHighlighterStore.allowHighlighting=!1},formatBlockContent({block:t,node:e}){var r,o,s,l;let i="";return e?i=e.outerText.replace(/\n\n/g,`
`):t&&(i=((r=t==null?void 0:t.attributes)==null?void 0:r.content)||((o=t==null?void 0:t.attributes)==null?void 0:o.caption)||((s=t==null?void 0:t.attributes)==null?void 0:s.value)||((l=t==null?void 0:t.attributes)==null?void 0:l.citation)||"",i=i.replace(/<br[^>]*>/gi,`
`),i=$(i)),Q(i)},getEditorNode(t){if(t==="closest-relative")return k({element:this.getEditorNode("wrapper").parentElement,property:"position",value:"relative"});if(t==="navigable")return k({element:this.getEditorNode("wrapper").parentElement,property:"overflow-y",value:"auto"});if(this.isClassicEditor){if(t==="wrapper")return document.getElementById("content_ifr");if(t==="first-block")return this.tinymceEditor.getBody().firstChild}if(this.isBlockEditor){if(t==="wrapper")return document.querySelector(".editor-styles-wrapper");if(t==="first-block"){const e=this.selectBlockEditor.getBlocks()[0];return document.getElementById(`block-${e==null?void 0:e.clientId}`)||{}}}},highlightBlockEditor(){var t;for(const e of this.selectBlockEditor.getBlocks()||[]){if(e.name==="core/freeform"){const i=window.tinymce.get(`editor-${e.clientId}`),r=((t=i.getBody())==null?void 0:t.children)||[];if(!r.length)continue;this.registerTinyMceAnnotator(i);for(const o of r)this.setHighlightMarks({block:e,node:o});continue}this.setHighlightMarks({block:e,node:null})}for(const[e,i]of Object.entries(this.truSeoHighlighterStore.highlightMarks))this.observeMarkParent(i.parent,parseInt(e)===this.truSeoHighlighterStore.highlightMarks.length-1),i.block.name==="core/freeform"?this.annotateTinyMce(i,window.tinymce.get(`editor-${i.block.clientId}`)):this.annotateBlock(i)},highlightClassicEditor(){var e;const t=((e=this.tinymceEditor.getBody())==null?void 0:e.children)||[];if(!t.length)return!1;this.registerTinyMceAnnotator(this.tinymceEditor);for(const i of t)this.setHighlightMarks({block:null,node:i});for(const[i,r]of Object.entries(this.truSeoHighlighterStore.highlightMarks))this.observeMarkParent(r.parent,parseInt(i)===this.truSeoHighlighterStore.highlightMarks.length-1),this.annotateTinyMce(r,this.tinymceEditor)},incrementActiveMark(t){const e=this.truSeoHighlighterStore.highlightMarks.findIndex(i=>i.active);if(!this.truSeoHighlighterStore.highlightMarks[e+t])return!1;this.truSeoHighlighterStore.allowScrolling=!0,this.truSeoHighlighterStore.highlightMarks[e].active=!1,this.truSeoHighlighterStore.highlightMarks[e+t].active=!0,this.appendHighlightPopover()},listenWindowCopy(t){var s,l;const e=()=>{t.preventDefault(),t.clipboardData.setData("text/html",window.getSelection().toString())},i=window.getSelection()||{};if(!(i!=null&&i.rangeCount))return!1;const r=((s=t.clipboardData)==null?void 0:s.getData("text/html"))||"";if(r&&r.indexOf(this.truSeoHighlighterStore.source)!==-1)return e(),!1;const o=i.getRangeAt(0)||{};for(const n of Object.values(((l=o==null?void 0:o.cloneContents())==null?void 0:l.children)||[]))if(Object.values((n==null?void 0:n.classList)||[]).some(h=>h.endsWith(this.truSeoHighlighterStore.source)))return e(),!1},listenWindowKeyup(t){var s,l;const e=(n,h)=>{n.collapse(h.firstChild,h.firstChild.length),n.deleteFromDocument()};if(["Delete","Backspace"].indexOf(t.key)===-1)return!1;const i=window.getSelection()||null;if(!(i!=null&&i.toString()))return!1;const r=((s=i==null?void 0:i.anchorNode)==null?void 0:s.parentElement)||null,o=((l=i==null?void 0:i.anchorNode)==null?void 0:l.nextElementSibling)||null;Object.values((r==null?void 0:r.classList)||[]).some(n=>n.endsWith(this.truSeoHighlighterStore.source))?e(i,r):Object.values((o==null?void 0:o.classList)||[]).some(n=>n.endsWith(this.truSeoHighlighterStore.source))&&e(i,o)},observeEditor(){var e;this.editorObserver=new MutationObserver(i=>{let r=!1;for(const o of i)for(const s of(o==null?void 0:o.removedNodes)||[])(this.truSeoHighlighterStore.highlightMarks.some(l=>s.isEqualNode(l.parent))||Object.values((s==null?void 0:s.classList)||[]).some(l=>l.endsWith(this.truSeoHighlighterStore.source)))&&(r=!0);r&&this.reset()});const t=(e=this.getEditorNode("first-block"))==null?void 0:e.parentElement;if(typeof t!="object")return!1;this.editorObserver.observe(t,{attributes:!1,childList:!0,subtree:!0})},observeMarkParent(t,e=!1){const i=(o,s)=>{var l;s.disconnect();for(const n of o){if(Object.values(((l=n==null?void 0:n.target)==null?void 0:l.classList)||[]).some(h=>h.endsWith(this.truSeoHighlighterStore.source))){this.setHighlightMarkNode(n.target);continue}for(const h of(n==null?void 0:n.addedNodes)||[])if(Object.values((h==null?void 0:h.classList)||[]).some(a=>a.endsWith(this.truSeoHighlighterStore.source))){this.setHighlightMarkNode(h);break}}e&&this.$nextTick().then(()=>x(this.appendHighlightPopover,250)())};if(typeof(t==null?void 0:t.parentElement)!="object")return!1;new MutationObserver(i).observe(t,{attributes:!0,childList:!0,subtree:!0})},observeWpBodyContent(){const t=e=>{var i,r,o;for(const s of e){if((s==null?void 0:s.type)!=="attributes")continue;if(!k({element:(i=this.getEditorNode("wrapper"))==null?void 0:i.parentElement,property:"display",value:"none"}).isEqualNode(document.documentElement))return this.disallowHighlighting(),!1;if(this.isBlockEditor&&(this.selectEditPost.getEditorMode()!=="visual"||this.selectBlockEditor.getBlockMode((r=this.selectBlockEditor.getSelectedBlock())==null?void 0:r.clientId)==="html"))return this.disallowHighlighting(),!1;if(this.isClassicEditor&&(this.setTinymceEditor(),((o=document.getElementById("content"))==null?void 0:o.nodeName)==="TEXTAREA"&&document.getElementById("content").style.display!=="none"))return this.disallowHighlighting(),!1;this.truSeoHighlighterStore.allowHighlighting=!0}};this.wpBodyContentObserver=new MutationObserver(x(t,250)),this.wpBodyContentObserver.observe(document.getElementById("wpbody-content"),{attributes:!0,childList:!1,subtree:!0})},registerTinyMceAnnotator(t){t.annotator.register(this.truSeoHighlighterStore.source,{persistent:!1,decorate:()=>({classes:["annotation-text",`annotation-text-${this.truSeoHighlighterStore.source}`]})})},repositionHighlightPopover(t=[]){var a;if(!this.truSeoHighlighterStore.activeMark||!this.truSeoHighlighterStore.highlightPopover.node)return!1;for(const p of t)if(JSON.stringify(p.contentRect)===JSON.stringify(this.editorWrapperRect))return!1;t.length&&(this.editorWrapperRect=((a=t[0])==null?void 0:a.contentRect)||this.editorWrapperRect,this.truSeoHighlighterStore.allowScrolling=!1);const e=this.truSeoHighlighterStore.activeMark.node.getBoundingClientRect(),i=this.getEditorNode("wrapper").getBoundingClientRect(),r=this.getEditorNode("closest-relative").getBoundingClientRect(),o=this.getEditorNode("first-block").getBoundingClientRect(),[s,l]=[140,32];let n=e.top,h=o.left-r.left;s<h?(this.truSeoHighlighterStore.highlightPopover.node.style.top=n-r.top+"px",this.truSeoHighlighterStore.highlightPopover.node.style.transform="translate(-105%, 0)",this.truSeoHighlighterStore.highlightPopover.node.childNodes[0].dataset.arrowPlacement="right"):(n=n-l-r.top,n=this.isClassicEditor?n+i.top:n,h=this.isClassicEditor?h+i.left:h,this.truSeoHighlighterStore.highlightPopover.node.style.top=n+"px",this.truSeoHighlighterStore.highlightPopover.node.style.transform="translate(0, 0)",this.truSeoHighlighterStore.highlightPopover.node.childNodes[0].dataset.arrowPlacement="bottomleft"),this.truSeoHighlighterStore.highlightPopover.node.style.left=h+"px",this.scrollToHighlightMark()},reset(){var t;window.removeEventListener("copy",this.listenWindowCopy),window.removeEventListener("keyup",this.listenWindowKeyup),(t=this.editorObserver)==null||t.disconnect(),this.truSeoHighlighterStore.clearAll(),this.$nextTick().then(()=>{if(!this.truSeoHighlighterStore.highlightSentences)return this.truSeoHighlighterStore.toggleHighlightAnalyzer(null),!1;this.isBlockEditor&&this.highlightBlockEditor(),this.isClassicEditor&&this.highlightClassicEditor(),this.observeEditor(),window.addEventListener("copy",this.listenWindowCopy),window.addEventListener("keyup",this.listenWindowKeyup)})},scrollToHighlightMark(){this.$nextTick().then(()=>{var i,r,o,s;if(!this.truSeoHighlighterStore.allowScrolling)return!1;this.truSeoHighlighterStore.activeMark.node.scrollIntoView();let t=this.getEditorNode("navigable"),e=t.scrollTop-60;this.isClassicEditor&&(e-=((r=(i=document.querySelector("#wp-content-editor-tools"))==null?void 0:i.getBoundingClientRect())==null?void 0:r.height)||0,e-=((s=(o=document.querySelector("#wp-content-editor-container .mce-toolbar-grp"))==null?void 0:o.getBoundingClientRect())==null?void 0:s.height)||0),t.isEqualNode(document.documentElement)&&(t=window),t.scrollTo({top:e}),this.truSeoHighlighterStore.allowScrolling=!1})},setHighlightMarkNode(t){const e=this.truSeoHighlighterStore.highlightMarks.findIndex(i=>t.hasAttribute("data-mce-annotation-uid")?t.dataset.mceAnnotationUid.indexOf(i.id)!==-1:t.id.indexOf(i.id)!==-1);e!==-1&&(this.truSeoHighlighterStore.highlightMarks[e].node=t)},setHighlightMarks({block:t,node:e}){const i=this.formatBlockContent({block:t,node:e});if(i)for(const[r,o]of Object.entries(this.truSeoHighlighterStore.highlightSentences||{})){const s=new RegExp(St(o),"g");let l;for(;(l=s.exec(i))!==null&&!this.truSeoHighlighterStore.highlightMarks.find(a=>a.sentenceIndex===r);){const n={start:l.index,end:l.index+l[0].length||1};this.truSeoHighlighterStore.highlightMarks.find(a=>e?(a.range.start===n.start||a.range.end===n.end)&&a.parent.isEqualNode(e):(a.range.start===n.start||a.range.end===n.end)&&a.block.clientId===t.clientId)||this.truSeoHighlighterStore.highlightMarks.push({id:pt(1,999999999),range:n,block:t,parent:e||document.getElementById(`block-${t.clientId}`),node:null,active:this.truSeoHighlighterStore.highlightMarks.length===0,sentenceIndex:r})}}if(t)for(const r of(t==null?void 0:t.innerBlocks)||[])this.setHighlightMarks({block:r,node:null})},setTinymceEditor(){if(this.tinymceEditor)return!1;const t=window.setInterval(()=>{var e;if(this.tinymceEditor=((e=window==null?void 0:window.tinymce)==null?void 0:e.get("content"))||null,!this.tinymceEditor)return!1;window.clearInterval(t),this.tinymceEditor.dom.addStyle(`
					span.annotation-text.annotation-text-${this.truSeoHighlighterStore.source} {
						background-color: #CCE0FF;
						border-radius: 4px;
						position: static;
					}
					`.trim())},500)},watchHighlightSentences(t,e){const i=JSON.stringify(t),r=JSON.stringify(e);i!==r&&this.reset()}},beforeMount(){if((F()||!this.isBlockEditor&&!this.isClassicEditor)&&(this.truSeoHighlighterStore.enabled=!1),this.isBlockEditor&&(!this.truSeoHighlighterStore.dispatchAnnotations||!this.selectBlockEditor||!this.selectEditPost)&&(this.truSeoHighlighterStore.enabled=!1),!this.truSeoHighlighterStore.enabled)return!1},mounted(){var e;this.wpBodyContentObserver&&((e=this.wpBodyContentObserver)==null||e.disconnect());const t=window.setInterval(()=>{typeof this.getEditorNode("wrapper")=="object"&&(window.clearInterval(t),this.observeWpBodyContent())},1e3)}};export{Wt as T,x as d,St as e};