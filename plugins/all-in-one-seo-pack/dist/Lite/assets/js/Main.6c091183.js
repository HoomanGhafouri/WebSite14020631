import{k as d}from"./links.6d4c0bdb.js";import{a as l}from"./addons.34d5dad4.js";import{o,c as n,r as f,b as _,w as h,D as g}from"./vue.runtime.esm-bundler.b39e1078.js";import{_ as e}from"./_plugin-vue_export-helper.b97bdf23.js";import"./index.0eabb636.js";import"./Caret.164d8058.js";/* empty css                                            *//* empty css                                              */import"./default-i18n.3881921e.js";import"./constants.1758f66e.js";import{R as x,a as $}from"./RequiresUpdate.87de8f65.js";import"./TruSeoHighlighter.3c8290a7.js";/* empty css                                              */import{C as v}from"./Index.181491e3.js";import b from"./Redirects.28f78652.js";import"./isArrayLikeObject.10b615a9.js";import"./upperFirst.d65414ba.js";import"./_stringToArray.a4422725.js";import"./RequiresUpdate.ee5fd5bd.js";import"./postContent.37ac0296.js";import"./cleanForSlug.a67f7e84.js";import"./Ellipse.f3d45202.js";import"./toFinite.c2274946.js";import"./license.188ce8ae.js";import"./allowed.487e325b.js";/* empty css             */import"./params.f0608262.js";import"./SaveChanges.64df9080.js";import"./Header.9ecbf768.js";import"./LicenseKeyBar.d79b3571.js";import"./LogoGear.c42c709f.js";import"./AnimatedNumber.b765a5ab.js";import"./numbers.c7cb4085.js";import"./Logo.1077fe36.js";import"./Support.a273228a.js";import"./Tabs.2d98f126.js";import"./TruSeoScore.29220195.js";import"./Information.70c6532e.js";import"./Slide.cdf6c622.js";import"./Date.c2cbc7a0.js";import"./Exclamation.2f8bed1f.js";import"./Url.477ef5ff.js";import"./Gear.a85d4a2b.js";import"./Redirects.800c53f7.js";import"./Index.81946320.js";import"./JsonValues.870a4901.js";import"./strings.01407ca7.js";import"./isString.395b35ce.js";import"./ProBadge.34da75c2.js";import"./External.8186427a.js";import"./Checkbox.17c05fc5.js";import"./Checkmark.e0bb6305.js";import"./Row.5242dafa.js";import"./Tooltip.6979830f.js";import"./Plus.3a43a085.js";import"./Blur.8cc39c73.js";import"./Card.9b0c1a15.js";import"./Table.1ce53c08.js";import"./Index.f7bbb33f.js";import"./RequiredPlans.fd5cb1f6.js";import"./AddonConditions.f3923ddb.js";const y={};function S(t,r){return o(),n("div")}const R=e(y,[["render",S]]),w={};function A(t,r){return o(),n("div")}const B=e(w,[["render",A]]),C={};function k(t,r){return o(),n("div")}const E=e(C,[["render",k]]),L={};function T(t,r){return o(),n("div")}const M=e(L,[["render",T]]),U={};function q(t,r){return o(),n("div")}const D=e(U,[["render",q]]);const N={setup(){return{redirectsStore:d()}},components:{CoreMain:v,FullSiteRedirect:R,ImportExport:B,Logs:E,Logs404:M,Redirects:b,Settings:D},mixins:[x,$],data(){return{strings:{pageName:this.$t.__("Redirects",this.$td)}}},computed:{showSaveButton(){return this.$route.name!=="redirects"&&this.$route.name!=="groups"&&this.$route.name!=="logs-404"&&this.$route.name!=="logs"&&this.$route.name!=="import-export"},excludeTabs(){var r,m,p,s,i,c,a,u;const t=l.isActive("aioseo-redirects")?this.getExcludedUpdateTabs("aioseo-redirects"):this.getExcludedActivationTabs("aioseo-redirects");return(p=(m=(r=this.redirectsStore.options)==null?void 0:r.logs)==null?void 0:m.log404)!=null&&p.enabled||t.push("logs-404"),(!((c=(i=(s=this.redirectsStore.options)==null?void 0:s.logs)==null?void 0:i.redirects)!=null&&c.enabled)||((u=(a=this.redirectsStore.options)==null?void 0:a.main)==null?void 0:u.method)==="server")&&t.push("logs"),t}}};function F(t,r,m,p,s,i){const c=f("core-main");return o(),_(c,{"page-name":s.strings.pageName,"show-save-button":i.showSaveButton,"exclude-tabs":i.excludeTabs},{default:h(()=>[(o(),_(g(t.$route.name)))]),_:1},8,["page-name","show-save-button","exclude-tabs"])}const Kt=e(N,[["render",F]]);export{Kt as default};
