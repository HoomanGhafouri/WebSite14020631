import{B as v}from"./Checkbox.17c05fc5.js";import{B as S}from"./RadioToggle.334ba6b1.js";import{C as R}from"./Blur.8cc39c73.js";import{C as z}from"./SettingsRow.1adac8e2.js";import{r as c,o as u,c as f,d as o,w as i,a as s,g as l,t,b as m,f as h}from"./vue.runtime.esm-bundler.b39e1078.js";import{_ as g}from"./_plugin-vue_export-helper.b97bdf23.js";import{R as w}from"./RequiredPlans.5dd93867.js";import{C as T}from"./Card.c4f6abf5.js";import{C as A}from"./ProBadge.34da75c2.js";import{C as U}from"./Index.f7bbb33f.js";import{C}from"./Cta.41e96926.js";import{A as V}from"./AddonConditions.34aeb0ab.js";import"./default-i18n.3881921e.js";import"./constants.1758f66e.js";import"./links.b05f56db.js";/* empty css                                              */import"./Checkmark.e0bb6305.js";import"./Row.5242dafa.js";/* empty css                                            */import"./addons.0c4e9c46.js";import"./upperFirst.8df5cd57.js";import"./_stringToArray.4de3b1f3.js";import"./toString.0891eb3e.js";import"./isArrayLikeObject.22a096cb.js";import"./license.9a33db36.js";import"./index.0eabb636.js";import"./Caret.164d8058.js";import"./Tooltip.6979830f.js";import"./Slide.cdf6c622.js";/* empty css                                              */const k={components:{BaseCheckbox:v,BaseRadioToggle:S,CoreBlur:R,CoreSettingsRow:z},data(){return{strings:{showOpeningHours:this.$t.__("Show Opening Hours",this.$td),displayOpeningHours:this.$t.__("Display Opening Hours",this.$td),labels:this.$t.__("Labels",this.$td),open247:this.$t.__("Open 24/7",this.$td),use24hFormat:this.$t.__("Use 24h format",this.$td),timezone:this.$t.__("Timezone",this.$td),selectTimeZone:this.$t.__("Select your timezone:",this.$td),hours:this.$t.__("Opening Hours",this.$td),monday:this.$t.__("Monday",this.$td),tuesday:this.$t.__("Tuesday",this.$td),wednesday:this.$t.__("Wednesday",this.$td),thursday:this.$t.__("Thursday",this.$td),friday:this.$t.__("Friday",this.$td),saturday:this.$t.__("Saturday",this.$td),sunday:this.$t.__("Sunday",this.$td),open24h:this.$t.__("Open 24h",this.$td),closed:this.$t.__("Closed",this.$td)}}}},B={class:"aioseo-opening-hours-blur"},F={class:"aioseo-col col-xs-12 text-xs-left"},M={class:"aioseo-col col-xs-12 text-xs-left"},L={class:"aioseo-col col-xs-12 text-xs-left mt-16"},G={class:"aioseo-col col-xs-12 text-xs-left"},N={class:"aioseo-col-flex text-xs-left"},P={class:"aioseo-col-day text-xs-left"},I={class:"aioseo-col-hours text-xs-left"},E=s("span",{class:"separator"},"-",-1),q={class:"aioseo-col-alwaysopen text-xs-left"},D={class:"aioseo-col-flex text-xs-left"},K={class:"aioseo-col-day text-xs-left"},W={class:"aioseo-col-hours text-xs-left"},Z=s("span",{class:"separator"},"-",-1),j={class:"aioseo-col-alwaysopen text-xs-left"},J={class:"aioseo-col-flex text-xs-left"},Q={class:"aioseo-col-day text-xs-left"},X={class:"aioseo-col-hours text-xs-left"},Y=s("span",{class:"separator"},"-",-1),ss={class:"aioseo-col-alwaysopen text-xs-left"},os={class:"aioseo-col-flex text-xs-left"},es={class:"aioseo-col-day text-xs-left"},ts={class:"aioseo-col-hours text-xs-left"},ns=s("span",{class:"separator"},"-",-1),is={class:"aioseo-col-alwaysopen text-xs-left"},ls={class:"aioseo-col-flex text-xs-left"},as={class:"aioseo-col-day text-xs-left"},rs={class:"aioseo-col-hours text-xs-left"},cs=s("span",{class:"separator"},"-",-1),ds={class:"aioseo-col-alwaysopen text-xs-left"},_s={class:"aioseo-col-flex text-xs-left"},us={class:"aioseo-col-day text-xs-left"},ps={class:"aioseo-col-hours text-xs-left"},ms=s("span",{class:"separator"},"-",-1),hs={class:"aioseo-col-alwaysopen text-xs-left"},fs={class:"aioseo-col-flex text-xs-left"},gs={class:"aioseo-col-day text-xs-left"},xs={class:"aioseo-col-hours text-xs-left"},$s=s("span",{class:"separator"},"-",-1),ys={class:"aioseo-col-alwaysopen text-xs-left"};function Os(n,x,$,y,e,O){const p=c("base-radio-toggle"),d=c("core-settings-row"),_=c("base-toggle"),a=c("base-select"),r=c("base-checkbox"),b=c("core-blur");return u(),f("div",B,[o(b,null,{default:i(()=>[o(d,{name:e.strings.showOpeningHours,class:"info-openinghours-row",align:""},{content:i(()=>[s("div",F,[o(p,{name:"openingHours",modelValue:!0,options:[{label:n.$constants.GLOBAL_STRINGS.no,value:!1},{label:n.$constants.GLOBAL_STRINGS.yes,value:!0}]},null,8,["options"])])]),_:1},8,["name"]),o(d,{name:e.strings.hours,class:"info-hours-row",align:""},{content:i(()=>[s("div",M,[o(_,null,{default:i(()=>[l(t(e.strings.open247),1)]),_:1})]),s("div",L,[o(_,null,{default:i(()=>[l(t(e.strings.use24hFormat),1)]),_:1})]),s("div",G,[s("div",N,[s("div",P,t(e.strings.monday),1),s("div",I,[o(a,{size:"medium",options:n.$constants.HOURS_24H_FORMAT,modelValue:"09:00"},null,8,["options"]),E,o(a,{size:"medium",options:n.$constants.HOURS_24H_FORMAT,modelValue:"17:00"},null,8,["options"])]),s("div",q,[o(r,{size:"medium"},{default:i(()=>[l(t(e.strings.open24h),1)]),_:1}),o(r,{size:"medium",class:"closed-label"},{default:i(()=>[l(t(e.strings.closed),1)]),_:1})])]),s("div",D,[s("div",K,t(e.strings.tuesday),1),s("div",W,[o(a,{size:"medium",options:n.$constants.HOURS_24H_FORMAT,modelValue:"09:00"},null,8,["options"]),Z,o(a,{size:"medium",options:n.$constants.HOURS_24H_FORMAT,modelValue:"17:00"},null,8,["options"])]),s("div",j,[o(r,{size:"medium"},{default:i(()=>[l(t(e.strings.open24h),1)]),_:1}),o(r,{size:"medium",class:"closed-label"},{default:i(()=>[l(t(e.strings.closed),1)]),_:1})])]),s("div",J,[s("div",Q,t(e.strings.wednesday),1),s("div",X,[o(a,{size:"medium",options:n.$constants.HOURS_24H_FORMAT,modelValue:"09:00"},null,8,["options"]),Y,o(a,{size:"medium",options:n.$constants.HOURS_24H_FORMAT,modelValue:"17:00"},null,8,["options"])]),s("div",ss,[o(r,{size:"medium"},{default:i(()=>[l(t(e.strings.open24h),1)]),_:1}),o(r,{size:"medium",class:"closed-label"},{default:i(()=>[l(t(e.strings.closed),1)]),_:1})])]),s("div",os,[s("div",es,t(e.strings.thursday),1),s("div",ts,[o(a,{size:"medium",options:n.$constants.HOURS_24H_FORMAT,modelValue:"09:00"},null,8,["options"]),ns,o(a,{size:"medium",options:n.$constants.HOURS_24H_FORMAT,modelValue:"17:00"},null,8,["options"])]),s("div",is,[o(r,{size:"medium"},{default:i(()=>[l(t(e.strings.open24h),1)]),_:1}),o(r,{size:"medium",class:"closed-label"},{default:i(()=>[l(t(e.strings.closed),1)]),_:1})])]),s("div",ls,[s("div",as,t(e.strings.friday),1),s("div",rs,[o(a,{size:"medium",options:n.$constants.HOURS_24H_FORMAT,modelValue:"09:00"},null,8,["options"]),cs,o(a,{size:"medium",options:n.$constants.HOURS_24H_FORMAT,modelValue:"17:00"},null,8,["options"])]),s("div",ds,[o(r,{size:"medium"},{default:i(()=>[l(t(e.strings.open24h),1)]),_:1}),o(r,{size:"medium",class:"closed-label"},{default:i(()=>[l(t(e.strings.closed),1)]),_:1})])]),s("div",_s,[s("div",us,t(e.strings.saturday),1),s("div",ps,[o(a,{size:"medium",options:n.$constants.HOURS_24H_FORMAT,modelValue:"09:00"},null,8,["options"]),ms,o(a,{size:"medium",options:n.$constants.HOURS_24H_FORMAT,modelValue:"17:00"},null,8,["options"])]),s("div",hs,[o(r,{size:"medium"},{default:i(()=>[l(t(e.strings.open24h),1)]),_:1}),o(r,{size:"medium",class:"closed-label"},{default:i(()=>[l(t(e.strings.closed),1)]),_:1})])]),s("div",fs,[s("div",gs,t(e.strings.sunday),1),s("div",xs,[o(a,{size:"medium",options:n.$constants.HOURS_24H_FORMAT,modelValue:"09:00"},null,8,["options"]),$s,o(a,{size:"medium",options:n.$constants.HOURS_24H_FORMAT,modelValue:"17:00"},null,8,["options"])]),s("div",ys,[o(r,{size:"medium"},{default:i(()=>[l(t(e.strings.open24h),1)]),_:1}),o(r,{size:"medium",class:"closed-label"},{default:i(()=>[l(t(e.strings.closed),1)]),_:1})])])])]),_:1},8,["name"])]),_:1})])}const Hs=g(k,[["render",Os]]);const bs={components:{Blur:Hs,RequiredPlans:w,CoreCard:T,CoreProBadge:A,Cta:U},data(){return{features:[this.$t.__("Show Opening Hours",this.$td),this.$t.__("Multiple Locations",this.$td),this.$t.__("Opening Hours block, widget and shortcode",this.$td)],strings:{locationInfo1:this.$t.__("Local Business schema markup enables you to tell Google about your business, including your business name, address and phone number, opening hours and price range. This information may be displayed as a Knowledge Graph card or business carousel.",this.$td),openingHours:this.$t.__("Opening Hours Settings",this.$td),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock Local SEO",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Local SEO is only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro")}}}},vs={class:"aioseo-opening-hours"};function Ss(n,x,$,y,e,O){const p=c("core-pro-badge"),d=c("blur"),_=c("required-plans"),a=c("cta"),r=c("core-card");return u(),f("div",vs,[o(r,{slug:"localBusinessOpeningHours",noSlide:!0},{header:i(()=>[s("span",null,t(e.strings.openingHours),1),o(p)]),default:i(()=>[o(d),o(a,{"cta-link":n.$links.getPricingUrl("local-seo","local-seo-upsell","opening-hours"),"button-text":e.strings.ctaButtonText,"learn-more-link":n.$links.getUpsellUrl("local-seo",null,"home"),"feature-list":e.features,"align-top":""},{"header-text":i(()=>[l(t(e.strings.ctaHeader),1)]),description:i(()=>[o(_,{addon:"aioseo-local-business"}),l(" "+t(e.strings.locationInfo1),1)]),_:1},8,["cta-link","button-text","learn-more-link","feature-list"])]),_:1})])}const H=g(bs,[["render",Ss]]),Rs={mixins:[V],components:{OpeningHours:H,Cta:C,Lite:H},data(){return{addonSlug:"aioseo-local-business",strings:{openingHours:this.$t.__("Opening Hours Settings",this.$td)}}}},zs={class:"aioseo-opening-hours"};function ws(n,x,$,y,e,O){const p=c("opening-hours",!0),d=c("cta"),_=c("lite");return u(),f("div",zs,[n.shouldShowMain?(u(),m(p,{key:0})):h("",!0),n.shouldShowUpdate||n.shouldShowActivate?(u(),m(d,{key:1,"card-slug":"localBusinessOpeningHours","header-text":e.strings.openingHours,"align-top":""},null,8,["header-text"])):h("",!0),n.shouldShowLite?(u(),m(_,{key:2})):h("",!0)])}const io=g(Rs,[["render",ws]]);export{io as default};
