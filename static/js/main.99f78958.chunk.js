(this["webpackJsonpimage-search"]=this["webpackJsonpimage-search"]||[]).push([[0],{192:function(e,t,r){},200:function(e,t,r){e.exports=r(458)},458:function(e,t,r){"use strict";r.r(t);r(201),r(144),r(250);var a=r(1),n=r.n(a),o=r(88),s=r.n(o),c=r(18),u={photos:{},error:null,loading:!1,query:"",savedQueries:[],onDisplay:[],loadProgress:0,savePrompt:null,burgerActive:!1,allIds:[]},l=r(56),i=r(122),d=r(57),m=r(19),p=function(){return document.documentElement.clientWidth<769},v=r(197),y=Object(v.a)(u,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"QUERY_LOADING":return Object.keys(e.photos).indexOf(t.queryKeyword)>-1?Object(m.a)({},e,{onDisplay:e.photos[t.queryKeyword],burgerActive:!1,loadProgress:0}):Object(m.a)({},e,{loading:!0,burgerActive:!1,loadProgress:0});case"QUERY_SUCCESS":return Object(m.a)({},e,{photos:Object(m.a)({},e.photos,Object(d.a)({},t.queryKeyword,t.payload)),error:null,query:t.queryKeyword,loadProgress:0,onDisplay:t.payload});case"QUERY_FAILURE":return Object(m.a)({},e,{photos:Object(m.a)({},e.photos,Object(d.a)({},t.queryKeyword,t.payload)),error:t.error,loading:!1,query:t.queryKeyword,loadProgress:0,onDisplay:[]});case"IMAGE_LOADING":var r=Object(m.a)({},e,{loading:!0,allIds:[].concat(Object(i.a)(e.allIds),[t.id])});return r.loadProgress=e.loadProgress+1,r.loadProgress===e.onDisplay.length&&(r.loadProgress=0,r.loading=!1),r;case"TOGGLE_MODAL":return Object(m.a)({},e,{loading:t.value,loadProgress:0,error:null});case"TOGGLE_BURGER":return Object(m.a)({},e,{burgerActive:!e.burgerActive});case"QUERY_NEW":return Object(m.a)({},e,{query:t.value,loadProgress:0});default:return e}}),(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"QUERY_SAVE_REQUEST":return e.savedQueries.indexOf(e.query)<0&&e.onDisplay.length>0?Object(m.a)({},e,{burgerActive:!!p(),savePrompt:'Do you want to save "'.concat(e.query,'" to favourites?')}):e.savedQueries.indexOf(e.query)>=0?Object(m.a)({},e,{loadProgress:0,burgerActive:!!p(),savePrompt:'"'.concat(e.query,'" is already recorded')}):Object(m.a)({},e,{loadProgress:0,burgerActive:!!p(),savePrompt:"Nothing to save"});case"QUERY_SAVE_CONFIRM":if(!e.savedQueries.indexOf(e.query)>=0&&e.onDisplay.length>0)return Object(m.a)({},e,{photos:Object(m.a)({},e.photos,Object(d.a)({},t.queryKeyword,t.payload)),error:null,loading:!1,loadProgress:0,burgerActive:!!p(),savedQueries:[].concat(Object(i.a)(e.savedQueries),[e.query]),savePrompt:null});break;case"QUERY_SAVE_CANCEL":return Object(m.a)({},e,{burgerActive:!!p(),savePrompt:null});case"QUERY_LOAD_SAVED":return Object(m.a)({},e,{onDisplay:e.photos[t.query],error:null,loadProgress:0,query:t.query});default:return e}})),E=r(198),g=(r(192),r(119)),h={saveQueryRequest:function(){return function(e){e({type:"QUERY_SAVE_REQUEST"})}},saveQueryCancel:function(){return function(e){e({type:"QUERY_SAVE_CANCEL"})}},saveQueryConfirm:function(){return function(e){e({type:"QUERY_SAVE_CONFIRM"})}},loadSaved:function(e){return function(t){t({type:"QUERY_LOAD_SAVED",query:e})}}},f=new(0,r(119).default)({accessKey:"G30dGv3bmlBVahi1AuWqaLxS7g7f4x0bABqwPhd8hHs",secret:"RhWCrY76VVhLkjHkrLDtkSYGgnaL3pb19YdHv2OveBw"}),b={queryRequest:function(e,t){return function(r){return Object.keys(t.photos).indexOf(e)>=0?r({type:"QUERY_LOAD_SAVED",query:e}):(r({type:"QUERY_LOADING",queryKeyword:e,error:null,loading:!0,loadProgress:0}),f.search.photos(e,1,10,{orientation:"portrait"}).then(g.toJson).then((function(t){t.results.length>0?r({type:"QUERY_SUCCESS",payload:t.results,queryKeyword:e,error:null,loadProgress:0}):r({type:"QUERY_FAILURE",payload:t.photos,queryKeyword:e,error:"Your query returned no results. Please try a different keyword",loadProgress:0})})).catch((function(t){return r({type:"QUERY_FAILURE",queryKeyword:e,error:"Your query returned no results. Please try a different keyword",loadProgress:0})})))}},savedQueries:h,newQuery:function(e){return function(t){t({type:"QUERY_NEW",value:e})}}},O=Object(c.b)((function(e){return{photos:e}}),{})((function(e){var t=Object(c.c)();return n.a.createElement("div",{className:"searchBar-wrapper"},n.a.createElement("form",{className:"searchField-form"},n.a.createElement("input",{className:"searchField-input",id:"searchField",type:"search",name:"",value:e.photos.query,placeholder:"enter your query",onChange:function(e){t(b.newQuery(e.target.value))}}),n.a.createElement("div",{className:"searchBar-buttons-wrapper"},n.a.createElement("input",{className:"searchField-button button",htmlFor:"searchField",type:"submit",value:"Search",onClick:function(r){return function(e,r){var a=0;e.preventDefault(),document.getElementById("savedQueries").classList.contains("savedQueries-wrapper_display")&&(document.getElementById("savedQueries").classList.toggle("savedQueries-wrapper_display"),a=400);var n=document.getElementById("searchField").value;setTimeout((function(){t(b.queryRequest(n,r))}),a)}(r,e.photos)},onMouseDown:function(e){return e.target.classList.add("clicked")},onMouseUp:function(e){return e.target.classList.remove("clicked")}}),e.children)))})),Q=function(e){return function(t){t({type:"IMAGE_LOADING",id:e})}},q=Object(c.b)((function(e){return{photos:e}}),{})((function(e){var t=Object(c.c)(),r="?utm_source=image-search&utm_medium=referral";return n.a.createElement("div",{className:"photoPreview-container"},n.a.createElement("img",{src:e.photo.urls.thumb,alt:e.photo.description,onLoad:function(){var r=!1;e.photos.allIds.includes(e.photo.id)&&(r=!0),t(Q(e.photo.id,r))}}),n.a.createElement("div",{className:"photoPreview-attribution_wrapper"},n.a.createElement("div",{className:"photoPreview-attribution"},n.a.createElement("span",null,"Photo by "),n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"".concat(e.photo.links.html,"/").concat(r)},n.a.createElement("em",null,e.photo.user.username)),n.a.createElement("span",null," on "),n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://unsplash.com/".concat(r)},n.a.createElement("em",null,"Unsplash")))))})),w=Object(c.b)((function(e){return{photos:e}}),{})((function(e){var t=e.photos.loadProgress,r=e.photos.onDisplay.length;return n.a.createElement("div",{className:"loader-wrapper modal-box"},n.a.createElement("div",{className:"loader-bar"},n.a.createElement("div",{className:"loader-length"}),n.a.createElement("div",{className:"loader-progress",style:{width:"".concat(t/r*100,"%")}})),n.a.createElement("div",{className:"loader-counter"},n.a.createElement("p",null,!t>0?"Initiating query...":"loading images: ".concat(t/r*100,"%"))))})),A=function(e){return n.a.createElement("div",{id:"errorModal",className:"modal-wrapper ".concat(e.customClass?e.customClass:""," ").concat(e.message||e.loading?"modal-message_display":"")},e.message?n.a.createElement("div",{className:"modal-box"},n.a.createElement("p",null,e.message?e.message:""),e.message?n.a.createElement("div",null,e.children):null):e.loading?n.a.createElement(w,null):null)},N=function(e){return function(t){t({type:"TOGGLE_MODAL",value:e})}},_=Object(c.b)((function(e){return{photos:e}}),{})((function(e){var t=Object(c.c)(),r=e.photos.query,a=e.photos.onDisplay;return n.a.createElement("div",{className:"gallery"},n.a.createElement(A,{message:e.photos.error,loading:e.photos.loading},n.a.createElement("button",{className:"button modal-button",onClick:function(e){t(N(!1))},onMouseDown:function(e){return e.target.classList.add("clicked")},onMouseUp:function(e){return e.target.classList.remove("clicked")}},"OKAY")),n.a.createElement("div",{className:"searchResults"},r&&a?a.map((function(e,t){return n.a.createElement(q,{key:t,photo:e})})):null))})),L=Object(c.b)((function(e){return{queries:e}}),{})((function(e){var t=Object(c.c)();return n.a.createElement("div",{className:"savedQueries-wrapper",id:"savedQueries"},n.a.createElement("div",{className:"savedQueries-results"},n.a.createElement(A,{customClass:"savedQueries-modal",message:e.queries.savePrompt},e.queries.savedQueries.indexOf(e.queries.query)>=0||!e.queries.query||e.queries.onDisplay.length<=0?n.a.createElement("button",{className:"button modal-button",onClick:function(e){t(b.savedQueries.saveQueryCancel())},onMouseDown:function(e){return e.target.classList.add("clicked")},onMouseUp:function(e){return e.target.classList.remove("clicked")}},"OKAY"):n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{className:"button modal-button",onClick:function(e){t(b.savedQueries.saveQueryConfirm())},onMouseDown:function(e){return e.target.classList.add("clicked")},onMouseUp:function(e){return e.target.classList.remove("clicked")}},"YES"),n.a.createElement("button",{className:"button modal-button",onClick:function(e){t(b.savedQueries.saveQueryCancel())},onMouseDown:function(e){return e.target.classList.add("clicked")},onMouseUp:function(e){return e.target.classList.remove("clicked")}},"NO"))),n.a.createElement("ul",null,e.queries.savedQueries.length>0?e.queries.savedQueries.map((function(e){return n.a.createElement("li",{key:"savedQuer-".concat(e)},n.a.createElement("button",{className:"savedQueries-button button",onClick:function(){t(b.savedQueries.loadSaved(e))},onMouseDown:function(e){return e.target.classList.add("clicked")},onMouseUp:function(e){return e.target.classList.remove("clicked")}},e))})):n.a.createElement("li",{className:"saveQueries-message"},n.a.createElement("span",null,"You haven't saved any queries yet.")))))})),j=r(199),k=function(){return function(e){e({type:"TOGGLE_BURGER"})}},D=Object(c.b)((function(e){return{photos:e}}),{})((function(e){var t=Object(c.c)(),r=e.photos.burgerActive;return n.a.createElement(j.a,{onClick:function(e){e.preventDefault(),r=!r,t(k()),document.getElementById("savedQueries").classList.toggle("savedQueries-wrapper_display")},active:e.photos.burgerActive,burger:"vortex",marginTop:"0",marginLeft:"0"})})),R=function(e){var t=Object(c.c)();return n.a.createElement("div",{className:"saveButton-wrapper"},n.a.createElement("button",{className:"searchField-button button saveButton ".concat(e.className),onClick:function(e){e.preventDefault(),document.documentElement.clientWidth<768&&document.getElementById("savedQueries").classList.add("savedQueries-wrapper_display"),t(b.savedQueries.saveQueryRequest())},onMouseDown:function(e){return e.target.classList.add("clicked")},onMouseUp:function(e){return e.target.classList.remove("clicked")}},"SAVE"),n.a.createElement("div",{className:"hamburger"},n.a.createElement(D,null)))},U=function(e){return n.a.createElement("div",{className:"App"},n.a.createElement(O,null,n.a.createElement(R,null)),n.a.createElement("section",{className:"main"},n.a.createElement(_,null),n.a.createElement(L,null)))},P=Object(l.d)(y,u,Object(l.c)(Object(l.a)(E.a)));s.a.render(n.a.createElement(c.a,{store:P},n.a.createElement(U,null)),document.getElementById("root"))}},[[200,1,2]]]);
//# sourceMappingURL=main.99f78958.chunk.js.map