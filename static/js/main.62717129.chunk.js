(this["webpackJsonpimage-search"]=this["webpackJsonpimage-search"]||[]).push([[0],{12:function(e,a,t){},19:function(e,a,t){e.exports=t(43)},43:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(5),s=t.n(o),l=t(1),c=t(3),u=t(18),i=t(4),d=t(2),m={photos:{},error:null,loading:!1,query:null,savedQueries:[],onDisplay:[],loadProgress:0,savePrompt:null},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"QUERY_LOADING":return a.queryKeyword===e.query?e:Object(d.a)({},e,{loading:!0,loadProgress:0});case"QUERY_SUCCESS":return Object(d.a)({},e,{photos:Object(d.a)({},e.photos,Object(i.a)({},a.queryKeyword,a.payload)),error:null,query:a.queryKeyword,loadProgress:0,onDisplay:a.payload});case"QUERY_FAILURE":return Object(d.a)({},e,{photos:Object(d.a)({},e.photos,Object(i.a)({},a.queryKeyword,a.payload)),error:a.error,loading:!1,query:a.queryKeyword,loadProgress:0,onDisplay:[]});case"QUERY_SAVE_REQUEST":return!e.savedQueries.includes(e.query)&&e.onDisplay.length>0?Object(d.a)({},e,{savePrompt:'Do you want to save "'.concat(e.query,'" to favourites?')}):e.savedQueries.includes(e.query)?Object(d.a)({},e,{loadProgress:0,savePrompt:'"'.concat(e.query,'" is already recorded')}):Object(d.a)({},e,{loadProgress:0,savePrompt:"Nothing to save"});case"QUERY_SAVE_CONFIRM":if(!e.savedQueries.includes(e.query)&&e.onDisplay.length>0)return Object(d.a)({},e,{photos:Object(d.a)({},e.photos,Object(i.a)({},a.queryKeyword,a.payload)),error:null,loading:!1,loadProgress:0,savedQueries:[].concat(Object(u.a)(e.savedQueries),[e.query]),savePrompt:null});case"QUERY_SAVE_CANCEL":return Object(d.a)({},e,{savePrompt:null});case"QUERY_LOAD_SAVED":return Object(d.a)({},e,{onDisplay:e.photos[a.query],error:null,loadProgress:0,query:a.query});case"IMAGE_LOADING":return console.log(e.loadProgress),console.log(e.onDisplay.length-1),console.log(e.loadProgress===e.onDisplay.length-1),e.loadProgress===e.onDisplay.length-1?Object(d.a)({},e,{loadProgress:e.loadProgress+1,loading:!1}):(console.log("ELSE"),Object(d.a)({},e,{loading:!0,loadProgress:e.loadProgress+1}));case"TOGGLE_MODAL":return Object(d.a)({},e,{loading:a.value,loadProgress:0,error:null});default:return e}},E=Object(c.c)({queries:p}),y=t(17),h=(t(12),t(8)),v=new(0,t(8).default)({accessKey:"G30dGv3bmlBVahi1AuWqaLxS7g7f4x0bABqwPhd8hHs",secret:"RhWCrY76VVhLkjHkrLDtkSYGgnaL3pb19YdHv2OveBw"}),g={queryRequest:function(e){return function(a){return a({type:"QUERY_LOADING",queryKeyword:e,error:null,loading:!0}),v.search.photos(e,1,10,{orientation:"portrait"}).then(h.toJson).then((function(t){t.results.length>0?a({type:"QUERY_SUCCESS",payload:t.results,queryKeyword:e,error:null}):a({type:"QUERY_FAILURE",payload:t.photos,queryKeyword:e,error:"Your query returned no results. Please try a different keyword"})})).catch((function(t){return a({type:"QUERY_FAILURE",queryKeyword:e,error:"Your query returned no results. Please try a different keyword"})}))}},saveQueryRequest:function(){return function(e){e({type:"QUERY_SAVE_REQUEST"})}},saveQueryCancel:function(){return function(e){e({type:"QUERY_SAVE_CANCEL"})}},saveQueryConfirm:function(){return function(e){e({type:"QUERY_SAVE_CONFIRM"})}},loadSaved:function(e){return function(a){a({type:"QUERY_LOAD_SAVED",query:e})}}},b=function(e){var a=Object(l.c)();return n.a.createElement("div",{className:"searchBar-wrapper"},n.a.createElement("form",{className:"searchField-form"},n.a.createElement("input",{className:"searchField-input",id:"searchField",type:"search",name:"",defaultValue:"",placeholder:"enter your query"}),n.a.createElement("div",{className:"searchBar-buttons-wrapper"},n.a.createElement("input",{className:"searchField-button button",htmlFor:"searchField",type:"submit",value:"Search",onClick:function(e){return function(e){e.preventDefault();var t=document.getElementById("searchField").value;a(g.queryRequest(t))}(e)}}),e.children)))},f=function(e){return function(a){a({type:"IMAGE_LOADING",id:e})}},q=function(e){var a=Object(l.c)(),t="?utm_source=image-search&utm_medium=referral";return n.a.createElement("div",{className:"photoPreview-container"},n.a.createElement("img",{src:e.photo.urls.thumb,alt:e.photo.description,onLoad:function(){console.log("preview index ".concat(e.index)),a(f())}}),n.a.createElement("div",{className:"photoPreview-attribution_wrapper"},n.a.createElement("div",{className:"photoPreview-attribution"},n.a.createElement("span",null,"Photo by "),n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"".concat(e.photo.links.html,"/").concat(t)},n.a.createElement("em",null,e.photo.user.username)),n.a.createElement("span",null," on "),n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://unsplash.com/".concat(t)},n.a.createElement("em",null,"Unsplash")))))},O=function(e){return function(a){a({type:"TOGGLE_MODAL",value:e})}},Q=Object(l.b)((function(e){return{photos:e.queries}}),{})((function(e){var a=e.photos.loadProgress?e.photos.loadProgress:0,t=e.photos.onDisplay&&e.photos.onDisplay>0?e.photos.onDisplay.length:10;return n.a.createElement("div",{className:"loader-wrapper modal-box"},n.a.createElement("div",{className:"loader-bar"},n.a.createElement("div",{className:"loader-length"}),n.a.createElement("div",{className:"loader-progress",style:{width:"".concat(a/t*100,"%")}})),n.a.createElement("div",{className:"loader-counter"},n.a.createElement("p",null,!a>0?"Initiating query...":"loading images: ".concat(a/t*100,"%"))))})),N=function(e){console.log("ERORR MODAL"),console.log(e);Object(l.c)();return n.a.createElement("div",{id:"errorModal",className:"modal-wrapper ".concat(e.customClass?e.customClass:""," ").concat(e.message||e.loading?"modal-message_display":"")},e.message?n.a.createElement("div",{className:"modal-box"},n.a.createElement("p",null,e.message?e.message:""),e.message?n.a.createElement("div",null,e.children):null):e.loading?n.a.createElement(Q,null):null)},_=Object(l.b)((function(e){return{photos:e.queries}}),{})((function(e){var a=Object(l.c)(),t=e.photos.query,r=e.photos.onDisplay;return n.a.createElement("div",{className:"gallery"},n.a.createElement(N,{message:e.photos.error,loading:e.photos.loading},n.a.createElement("button",{className:"button modal-button",onClick:function(e){a(O(!1))}},"OKAY")),n.a.createElement("div",{className:"searchResults"},t&&r?r.map((function(e,a){return n.a.createElement(q,{key:a,photo:e})})):null))})),w=Object(l.b)((function(e){return{queries:e.queries}}),{})((function(e){var a=Object(l.c)();return n.a.createElement("div",{className:"savedQueries-wrapper",id:"savedQueries"},n.a.createElement("div",{className:"savedQueries-results"},n.a.createElement(N,{customClass:"savedQueries-modal",message:e.queries.savePrompt},e.queries.savedQueries.includes(e.queries.query)?n.a.createElement("button",{className:"button modal-button",onClick:function(e){a(g.saveQueryCancel())}},"THANKS"):n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{className:"button modal-button",onClick:function(e){a(g.saveQueryConfirm())}},"YES"),n.a.createElement("button",{className:"button modal-button",onClick:function(e){a(g.saveQueryCancel())}},"NO"))),n.a.createElement("ul",null,e.queries.savedQueries?e.queries.savedQueries.map((function(e){return n.a.createElement("li",{key:"savedQuer-".concat(e)},n.a.createElement("button",{className:"savedQueries-button button",onClick:function(){a(g.loadSaved(e))}},e))})):null)))})),j=function(e){var a=Object(l.c)();return n.a.createElement("div",{className:"saveButton-wrapper"},n.a.createElement("button",{className:"searchField-button button saveButton ".concat(e.className),onClick:function(e){e.preventDefault(),document.documentElement.clientWidth<768&&document.getElementById("savedQueries").classList.add("savedQueries-wrapper_display"),a(g.saveQueryRequest())}},n.a.createElement("span",null,"SAVE")),n.a.createElement("button",{className:"hamburger",onClick:function(e){e.preventDefault(),document.getElementById("savedQueries").classList.toggle("savedQueries-wrapper_display")}},n.a.createElement("span",{role:"img","aria-label":"hamburger icon"},"\ud83c\udf54")))},P=function(e){return n.a.createElement("div",{className:"App"},n.a.createElement(b,null,n.a.createElement(j,null)),n.a.createElement("section",{className:"main"},n.a.createElement(_,null),n.a.createElement(w,null)))},R=Object(c.d)(E,{},Object(c.a)(y.a));s.a.render(n.a.createElement(l.a,{store:R},n.a.createElement(P,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.62717129.chunk.js.map