webpackJsonp([13],{BrJ6:function(e,t,n){"use strict";function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return f.default.get("/question-topics",{params:e,validateStatus:function(e){return 200===e}})}function i(){return o({offset:arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,limit:arguments.length>1&&void 0!==arguments[1]?arguments[1]:15,follow:!(arguments.length>2&&void 0!==arguments[2])||arguments[2]})}function s(){return o({name:arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,offset:arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,limit:arguments.length>2&&void 0!==arguments[2]?arguments[2]:15,follow:!(arguments.length>3&&void 0!==arguments[3])||arguments[3]})}function A(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return f.default.get("/user/question-topics",{params:e,validateStatus:function(e){return 200===e}})}function r(){return A({after:arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,limit:arguments.length>1&&void 0!==arguments[1]?arguments[1]:15,type:"follow"})}function l(e){return f.default.put("/user/question-topics/"+e,{},{validateStatus:function(e){return 201===e}})}function a(e){return f.default.delete("/user/question-topics/"+e,{validateStatus:function(e){return 204===e}})}function c(e){return f.default.get("/question-topics/"+e,{validateStatus:function(e){return 200===e}})}function u(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:15;return f.default.get("/question-topics/"+e+"/questions",{params:{type:t,offset:n,limit:o},validateStatus:function(e){return 200===e}})}Object.defineProperty(t,"__esModule",{value:!0}),t.query=o,t.all=i,t.search=s,t.userQuery=A,t.followTopics=r,t.follow=l,t.unfollow=a,t.show=c,t.questions=u;var d=n("0zyd"),f=function(e){return e&&e.__esModule?e:{default:e}}(d)},"E+jH":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"module-questions-topics"},[n("nav",{staticClass:"module-questions-topics-nav"},[n("router-link",{attrs:{to:"/question/topics",replace:"",exact:"","exact-active-class":"active"}},[e._v("全部话题")]),e._v(" "),n("router-link",{attrs:{to:{path:"/question/topics",query:{type:"follow"}},replace:"",exact:"","exact-active-class":"active"}},[e._v("我关注的")])],1),e._v(" "),n("load-more",{ref:"LoadQuestionTopicsContainer",attrs:{"on-refresh":e.handleRefresh,"on-load-more":e.handleLoadMore}},e._l(e.topics,function(t){return n("div",{key:t.id,staticClass:"module-questions-topics-item"},[n("router-link",{directives:[{name:"show",rawName:"v-show",value:t.avatar,expression:"topic.avatar"}],attrs:{tag:"img",src:t.avatar,to:"/question-topics/"+t.id}}),e._v(" "),n("router-link",{staticClass:"title",attrs:{tag:"a",to:"/question-topics/"+t.id}},[n("span",{staticClass:"topic"},[e._v(e._s(t.name))]),e._v(" "),n("span",{staticClass:"label"},[n("span",[e._v(e._s(t.follows_count))]),e._v(" 关注\n          ·\n          "),n("span",[e._v(e._s(t.questions_count))]),e._v(" 问题\n        ")])]),e._v(" "),t.has_follow||"follow"===e.type?n("button",{staticClass:"follow active",on:{click:function(n){e.handleUnfollow(t)}}},[n("span",[e._v("✓")]),e._v("已关注")]):n("button",{staticClass:"follow",on:{click:function(n){e.handleFollow(t)}}},[n("span",[e._v("+")]),e._v("关注")])],1)}))],1)},i=[],s={render:o,staticRenderFns:i};t.a=s},HOA6:function(e,t,n){t=e.exports=n("FZ+f")(!0),t.push([e.i,".module-questions-topics{padding-top:2.06rem;padding-bottom:1rem;min-height:100vh}.module-questions-topics-nav{position:fixed;top:1.16rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:.9rem;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background:#fff;color:#999;font-size:.3rem;font-weight:400;font-stretch:normal;line-height:0;letter-spacing:0;border-bottom:.01rem solid #d7d8d8;z-index:100}.module-questions-topics-nav .active{color:#333}.module-questions-topics-item{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:100%;height:1.75rem;padding:.28rem .43rem;background-color:#fff;border-bottom:.01rem solid #d7d8d8}.module-questions-topics-item>img{width:1.2rem;height:1.2rem;margin-right:.18rem}.module-questions-topics-item .title{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:1.2rem;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.module-questions-topics-item .title .topic{margin-top:.17rem;font-size:.32rem;font-weight:400;font-stretch:normal;line-height:0;height:.3rem;letter-spacing:0;color:#333}.module-questions-topics-item .title .label{margin-top:.19rem;height:.26rem;font-size:.28rem;font-weight:400;font-stretch:normal;line-height:0;letter-spacing:0;color:#666}.module-questions-topics-item .title .label>span{color:#59b6d7}.module-questions-topics-item .follow{height:.5rem;background-color:#fff;border-radius:.08rem;border:.02rem solid #59b6d7;color:#59b6d7;font-size:.26rem;font-weight:400;font-stretch:normal;line-height:.05rem;letter-spacing:0;outline:none}.module-questions-topics-item .follow>span{width:.2rem;height:.2rem;font-size:.36rem;margin-right:.02rem}.module-questions-topics-item .follow.active{color:#ccc;border:.02rem solid #ccc}","",{version:3,sources:["/Users/SevenDu/Desktop/working/plus-component-h5/src/components/modules/question/Topics.vue"],names:[],mappings:"AACA,yBACE,oBAAqB,AACrB,oBAAqB,AACrB,gBAAkB,CACnB,AACD,6BACE,eAAgB,AAChB,YAAa,AACb,oBAAqB,AACrB,qBAAsB,AACtB,oBAAqB,AACrB,aAAc,AACd,WAAY,AACZ,aAAe,AACf,qCAAsC,AAClC,yBAA0B,AACtB,6BAA8B,AACtC,yBAA0B,AAC1B,2BAA4B,AACxB,sBAAuB,AACnB,mBAAoB,AAC5B,gBAAiB,AACjB,WAAY,AACZ,gBAAkB,AAClB,gBAAoB,AACpB,oBAAqB,AACrB,cAAe,AACf,iBAAkB,AAClB,mCAAqC,AACrC,WAAa,CACd,AACD,qCACE,UAAY,CACb,AACD,8BACE,oBAAqB,AACrB,qBAAsB,AACtB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AAC1B,sCAAuC,AACnC,sBAAuB,AACnB,8BAA+B,AACvC,yBAA0B,AAC1B,2BAA4B,AACxB,sBAAuB,AACnB,mBAAoB,AAC5B,WAAY,AACZ,eAAgB,AAChB,sBAAyB,AACzB,sBAAuB,AACvB,kCAAqC,CACtC,AACD,kCACE,aAAc,AACd,cAAe,AACf,mBAAsB,CACvB,AACD,qCACE,mBAAoB,AACpB,oBAAqB,AACjB,oBAAqB,AACjB,YAAa,AACrB,2BAA4B,AAC5B,4BAA6B,AAC7B,2BAA4B,AAC5B,oBAAqB,AACrB,wBAAyB,AACzB,+BAAgC,AAC5B,qBAAsB,AAClB,uBAAwB,AAChC,4BAA6B,AAC7B,6BAA8B,AAC9B,8BAA+B,AAC3B,0BAA2B,AACvB,sBAAuB,AAC/B,cAAe,AACf,wBAAyB,AACzB,+BAAgC,AAC5B,qBAAsB,AAClB,sBAAwB,CACjC,AACD,4CACE,kBAAoB,AACpB,iBAAmB,AACnB,gBAAoB,AACpB,oBAAqB,AACrB,cAAe,AACf,aAAe,AACf,iBAAkB,AAClB,UAAY,CACb,AACD,4CACE,kBAAoB,AACpB,cAAgB,AAChB,iBAAmB,AACnB,gBAAoB,AACpB,oBAAqB,AACrB,cAAe,AACf,iBAAkB,AAClB,UAAY,CACb,AACD,iDACE,aAAe,CAChB,AACD,sCACE,aAAe,AACf,sBAAuB,AACvB,qBAAuB,AACvB,4BAA8B,AAC9B,cAAe,AACf,iBAAmB,AACnB,gBAAoB,AACpB,oBAAqB,AACrB,mBAAqB,AACrB,iBAAkB,AAClB,YAAc,CACf,AACD,2CACE,YAAc,AACd,aAAe,AACf,iBAAmB,AACnB,mBAAsB,CACvB,AACD,6CACE,WAAY,AACZ,wBAA2B,CAC5B",file:"Topics.vue",sourcesContent:["\n.module-questions-topics {\n  padding-top: 2.06rem;\n  padding-bottom: 1rem;\n  min-height: 100vh;\n}\n.module-questions-topics-nav {\n  position: fixed;\n  top: 1.16rem;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  height: 0.9rem;\n  -webkit-justify-content: space-around;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #fff;\n  color: #999;\n  font-size: 0.3rem;\n  font-weight: normal;\n  font-stretch: normal;\n  line-height: 0;\n  letter-spacing: 0;\n  border-bottom: solid 0.01rem #d7d8d8;\n  z-index: 100;\n}\n.module-questions-topics-nav .active {\n  color: #333;\n}\n.module-questions-topics-item {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n  height: 1.75rem;\n  padding: 0.28rem 0.43rem;\n  background-color: #fff;\n  border-bottom: solid 0.01rem #d7d8d8;\n}\n.module-questions-topics-item > img {\n  width: 1.2rem;\n  height: 1.2rem;\n  margin-right: 0.18rem;\n}\n.module-questions-topics-item .title {\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 1.2rem;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.module-questions-topics-item .title .topic {\n  margin-top: 0.17rem;\n  font-size: 0.32rem;\n  font-weight: normal;\n  font-stretch: normal;\n  line-height: 0;\n  height: 0.3rem;\n  letter-spacing: 0;\n  color: #333;\n}\n.module-questions-topics-item .title .label {\n  margin-top: 0.19rem;\n  height: 0.26rem;\n  font-size: 0.28rem;\n  font-weight: normal;\n  font-stretch: normal;\n  line-height: 0;\n  letter-spacing: 0;\n  color: #666;\n}\n.module-questions-topics-item .title .label > span {\n  color: #59b6d7;\n}\n.module-questions-topics-item .follow {\n  height: 0.5rem;\n  background-color: #fff;\n  border-radius: 0.08rem;\n  border: solid 0.02rem #59b6d7;\n  color: #59b6d7;\n  font-size: 0.26rem;\n  font-weight: normal;\n  font-stretch: normal;\n  line-height: 0.05rem;\n  letter-spacing: 0;\n  outline: none;\n}\n.module-questions-topics-item .follow > span {\n  width: 0.2rem;\n  height: 0.2rem;\n  font-size: 0.36rem;\n  margin-right: 0.02rem;\n}\n.module-questions-topics-item .follow.active {\n  color: #ccc;\n  border: solid 0.02rem #ccc;\n}"],sourceRoot:""}])},HUdE:function(e,t,n){var o=n("HOA6");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n("rjj0")("16858f78",o,!0,{})},M93i:function(e,t,n){"use strict";function o(e){n("HUdE")}Object.defineProperty(t,"__esModule",{value:!0});var i=n("y8F7"),s=n.n(i);for(var A in i)"default"!==A&&function(e){n.d(t,e,function(){return i[e]})}(A);var r=n("E+jH"),l=n("VU/8"),a=o,c=l(s.a,r.a,!1,a,null,null);t.default=c.exports},y8F7:function(e,t,n){"use strict";function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return(0,s.default)(e)}Object.defineProperty(t,"__esModule",{value:!0});var i=n("c/Tr"),s=function(e){return e&&e.__esModule?e:{default:e}}(i),A=n("BrJ6");t.default={name:"module-questions-topics",components:{},data:function(){return{topics:[]}},computed:{type:function(){var e=this.$route.query.type;return void 0===e?"hot":e},loadContainer:function(){return this.$refs.LoadQuestionTopicsContainer},user:function(){return this.$store.state.CURRENTUSER}},watch:{type:function(){this.topics=[],this.loadContainer.beforeRefresh()}},methods:{handleRefresh:function(){if("follow"===this.type)return void this.handleRefreshByFollow();this.handleRefreshByAll()},handleRefreshByAll:function(){var e=this;(0,A.all)(0,15).then(function(t){var n=t.data;e.topics=n,e.loadContainer.topEnd(!1),e.loadContainer.bottomEnd(n.length<15)}).catch(function(t){var n=t.response;n=void 0===n?{}:n;var o=n.data;e.$Message.error(o),e.loadContainer.topEnd(!1),e.loadContainer.bottomEnd(!0)})},handleRefreshByFollow:function(){var e=this;(0,A.followTopics)(0,15).then(function(t){var n=t.data;e.topics=n,e.loadContainer.topEnd(!1),e.loadContainer.bottomEnd(n.length<15)}).catch(function(t){var n=t.response;n=void 0===n?{}:n;var o=n.data;e.$Message.error(o),e.loadContainer.topEnd(!1),e.loadContainer.bottomEnd(!0)})},handleLoadMore:function(){if("follow"===this.type)return void this.handleLoadMoreByFollow();this.handleLoadMoreByAll()},handleLoadMoreByAll:function(){var e=this,t=this.topics.length;(0,A.all)(t,15).then(function(t){var n=t.data;e.topics=[].concat(o(e.topics),o(n)),e.loadContainer.bottomEnd(n.length<15)}).catch(function(t){var n=t.response;n=void 0===n?{}:n;var o=n.data;e.loadContainer.bottomEnd(!0),e.$Message.error(o)})},handleLoadMoreByFollow:function(){var e=this,t=this.topisc[this.topics.length].id;(0,A.followTopics)(t,15).then(function(t){var n=t.data;e.topics=[].concat(o(e.topics),o(n)),e.loadContainer.bottomEnd(n.length<15)}).catch(function(t){var n=t.response;n=void 0===n?{}:n;var o=n.data;e.loadContainer.bottomEnd(!0),e.$Message.error(o)})},handleFollow:function(e){var t=this;(0,A.follow)(e.id).then(function(){e.has_follow=!0,t.follows_count+=1}).catch(function(e){var n=e.response;n=void 0===n?{}:n;var o=n.data;t.$Message.error(o)})},handleUnfollow:function(e){var t=this;(0,A.unfollow)(e.id).then(function(){if(e.has_follow=!1,e.follows_count-=1,"follow"===t.type){var n=[];t.topics.forEach(function(t){t.id!==e.id&&n.push(t)}),t.topics=n}}).catch(function(e){var n=e.response;n=void 0===n?{}:n;var o=n.data;t.$Message.error(o)})}}}}});
//# sourceMappingURL=13.61ce461153fc8be5b5a1.js.map