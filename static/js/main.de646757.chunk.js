(this.webpackJsonpcapture_bot_image_viewer=this.webpackJsonpcapture_bot_image_viewer||[]).push([[0],{21:function(e,t,a){e.exports={"main-container":"view_main-container__171D4"}},39:function(e,t,a){"use strict";a.r(t);var n=a(9),i=a.n(n),s=a(20),r=a.n(s),c=a(18),o=a(10),u=a.n(o),l=a(13),d=a(16),b=a(17),g=a(11),h=a(26),m=a(25),j=a(21),p=a.n(j),f=a(3),x=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={pagination:{startAt:"aa0000",ammount:10,currentImageKey:""},currentImages:{},imageFlag:"m"},n.allowedImageFlags=["l","m","t","s"],n.loadImages=n.loadImages.bind(Object(g.a)(n)),n.getCurrentImage=n.getCurrentImage.bind(Object(g.a)(n)),n.viewNext=n.viewNext.bind(Object(g.a)(n)),n.viewPrevious=n.viewPrevious.bind(Object(g.a)(n)),n.setFlag=n.setFlag.bind(Object(g.a)(n)),n.goTo=n.goTo.bind(Object(g.a)(n)),n}return Object(b.a)(a,[{key:"goTo",value:function(){var e=window.prompt("Please introduce your code");if(e&&this.isValidCode(e)){var t="".concat(window.location.origin).concat(window.location.pathname,"?code=").concat(e);window.location.href=t}else window.alert("Code not valid! Must start with two lowercase letters and end with 4 numbers.")}},{key:"loadImages",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.props.imageManager.loadImages(this.state.pagination.startAt,this.state.pagination.ammount);case 3:t=e.sent,this.setState((function(e){var a=Object.keys(t||{});if(Object.keys(a).length>1){var n=Object.assign(JSON.parse(JSON.stringify(e.currentImages)),t||{});return console.log("Adding new keys: ",{data:t,newData:n}),e.currentImages=n,e.pagination.currentImageKey=a[0],e}return e})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log({err:e.t0});case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"viewNext",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t,a,n=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state.pagination.currentImageKey,!((a=Object.keys(this.state.currentImages)).length<1)){e.next=4;break}return e.abrupt("return");case 4:a.indexOf(t)==a.length-1?(console.log("//Load next set of keys."),this.setState((function(e){return e.pagination.startAt=a[a.indexOf(t)],e}),(function(){n.loadImages()}))):(console.log("//Load next key to the index."),this.setState((function(e){return e.pagination.currentImageKey=a[a.indexOf(t)+1],e}),(function(){})));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"viewPrevious",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state.pagination.currentImageKey,!((a=Object.keys(this.state.currentImages)).length<1)){e.next=4;break}return e.abrupt("return");case 4:0==a.indexOf(t)||(console.log("//Load next key to the index."),this.setState((function(e){return e.pagination.currentImageKey=a[a.indexOf(t)-1],e}),(function(){})));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"isValidCode",value:function(e){return e.match(/[a-z]{2}[0-9]{4}/)}},{key:"loadQuery",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t,a,n,i=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=window.location.search,a=new URLSearchParams(t),(n=a.get("code"))&&this.isValidCode(n)&&this.setState((function(e){return e.pagination.startAt=n,e}),(function(){i.loadImages()}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.loadQuery()}},{key:"getResizedImage",value:function(e){if(e.indexOf("imgur.com")<1)return e;var t=this.state.imageFlag,a=e.split("/"),n=a[a.length-1].split(".")[0];return"https://i.imgur.com/".concat(n).concat(t,".png")}},{key:"setFlag",value:function(e){this.setState({imageFlag:e})}},{key:"imageFlag",get:function(){return this.state.imageFlag}},{key:"getCurrentImage",value:function(){var e=this.state.currentImages[this.state.pagination.currentImageKey];return e&&"null"!==e?e:"https://via.placeholder.com/350x150"}},{key:"render",value:function(){var e=this;return Object(f.jsx)("div",{className:"container ".concat(p.a["main-container"]),children:Object(f.jsxs)("div",{className:"row",children:[Object(f.jsxs)("div",{className:"col-xs-12",children:[Object(f.jsx)("h1",{children:"Hello There"}),Object(f.jsx)("br",{}),Object(f.jsx)("button",{onClick:this.loadImages,className:"btn btn-success",children:"Initial Load"}),Object(f.jsx)("span",{style:{marginRight:"25pt"}}),Object(f.jsx)("button",{onClick:this.goTo,className:"btn btn-success",children:"Go To"}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),this.allowedImageFlags.map((function(t,a){return Object(f.jsx)("button",{disabled:e.state.imageFlag===t,className:"btn btn-default",onClick:function(){e.setFlag(t)},children:t},a)})),Object(f.jsx)("br",{})]}),Object(f.jsx)("div",{className:"col-xs-12",children:Object(f.jsx)("table",{className:"table",children:Object(f.jsx)("tfoot",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{onClick:this.viewPrevious,children:Object(f.jsx)("button",{className:"btn btn-info",children:"Prev"})}),Object(f.jsx)("td",{onClick:this.viewNext,children:Object(f.jsx)("button",{className:"btn btn-info",children:"Next"})})]})})})}),Object(f.jsxs)("div",{className:"col-xs-12 col-md-6",children:[Object(f.jsxs)("h1",{children:["Image code: ",this.state.pagination.currentImageKey]}),Object(f.jsx)("img",{src:this.getResizedImage(this.getCurrentImage()),className:"img-fluid",alt:"Responsive image",style:{maxWidth:"100%"}})]}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{})]})})}}]),a}(i.a.Component),v=i.a.createContext({}),O=function(){function e(t){Object(d.a)(this,e),this.id=Math.floor(1e5*Math.random()).toString(32),this.app=void 0,this.database=void 0,this.app=t,this.database=this.app.database(),this.database.goOnline()}return Object(b.a)(e,[{key:"loadImages",value:function(){var e=Object(l.a)(u.a.mark((function e(t,a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.database.ref("image_refs").orderByKey().startAt(t).limitToFirst(a).get();case 2:return n=e.sent,e.abrupt("return",n.exists()?n.toJSON():{});case 4:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()}]),e}(),w=a(22);c.a.initializeApp({apiKey:"AIzaSyB0MMqMb9j-TXl7q8qhcPZis2La1ef_IVc",authDomain:"captured-image-viewer.firebaseapp.com",projectId:"captured-image-viewer",storageBucket:"captured-image-viewer.appspot.com",messagingSenderId:"887099902",appId:"1:887099902:web:5524e6eb1b95f91cc9f0af"});var y=new O(c.a.app());r.a.render(Object(f.jsxs)("div",{children:[Object(f.jsxs)(w.a,{children:[Object(f.jsx)("title",{children:"Bootstrap Example"}),Object(f.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),Object(f.jsx)("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"}),Object(f.jsx)("script",{src:"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"}),Object(f.jsx)("script",{src:"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"}),Object(f.jsx)("link",{rel:"stylesheet",href:"./customStyles/main.css"})]}),Object(f.jsx)(v.Provider,{value:{imageManager:y},children:Object(f.jsx)(v.Consumer,{children:function(e){return Object(f.jsx)(x,{imageManager:e.imageManager})}})})]}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.de646757.chunk.js.map