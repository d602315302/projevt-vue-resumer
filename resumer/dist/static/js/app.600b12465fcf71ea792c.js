webpackJsonp([1],{"/XVN":function(e,t,s){"use strict";var a=s("ohTm"),i=s("hDS5"),n=s("dc6V");t.a={name:"SignInForm",data:function(){return{formData:{username:"",password:""},errorMessage:""}},methods:{signIn:function(){var e=this,t=this.formData,r=t.username,o=t.password;a.a.User.logIn(r,o).then(function(){e.$emit("success",s.i(n.a)())},function(t){e.errorMessage=s.i(i.a)(t)})},focus:function(e){var t=e.target;""===t.value&&$(t).parent().find(".inputTitle").animate({top:"0","font-size":"12px"},150)},blur:function(e){var t=e.target;""===$(t).val()&&$(t).parent().find(".inputTitle").animate({top:"12px","font-size":"14px"},150)},move:function(e){var t=e.target;$(t).parent().find("input").focus()}}}},"2tks":function(e,t){},"3u8G":function(e,t,s){"use strict";t.a={name:"MyDialog",props:["title","visible"],methods:{close:function(){this.$emit("close")}}}},"4YlF":function(e,t,s){"use strict";var a=s("ZzzE"),i=s("vrL3"),n=s("vrPW"),r=s("ohTm");t.a={name:"Topbar",data:function(){return{signUpDialogVisible:!1,signInDialogVisible:!1}},computed:{user:function(){return this.$store.state.user},logined:function(){return this.user.id}},components:{MyDialog:a.a,SignUpForm:i.a,SignInForm:n.a},methods:{signOut:function(){r.a.User.logOut(),this.$store.commit("removeUser")},signIn:function(e){this.signUpDialogVisible=!1,this.signInDialogVisible=!1,this.$store.commit("setUser",e)}}}},"864O":function(e,t){},"90qS":function(e,t,s){"use strict";function a(e){s("xGSj")}var i=s("MQRQ"),n=s("wa49"),r=s("J0+h"),o=a,c=r(i.a,n.a,o,null,null);t.a=c.exports},BlsU:function(e,t,s){"use strict";t.a={name:"ResumeEditor",computed:{selected:{get:function(){return this.$store.state.selected},set:function(e){return this.$store.commit("switchTab",e)}},resume:function(){return this.$store.state.resume},resumeConfig:function(){return this.$store.state.resumeConfig},show:function(){return this.$store.state.show}},methods:{changeResumeField:function(e,t){this.$store.commit("updateResume",{path:e,value:t})},addResumeSubfield:function(e){this.$store.commit("addResumeSubfield",{field:e})},removeResumeSubfield:function(e,t){this.$store.commit("removeResumeSubfield",{field:e,index:t})}}}},C9XL:function(e,t,s){"use strict";var a=s("90qS");t.a={name:"Preview",components:{ResumePreview:a.a}}},FeuB:function(e,t,s){"use strict";var a=s("ohTm"),i=s("hDS5"),n=s("dc6V");t.a={name:"SignUpForm",data:function(){return{formData:{username:"",password:""},errorMessage:""}},created:function(){},methods:{signUp:function(){var e=this,t=this.formData,r=t.username,o=t.password,c=new a.a.User;c.setUsername(r),c.setPassword(o),c.signUp().then(function(){e.$emit("success",s.i(n.a)())},function(t){e.errorMessage=s.i(i.a)(t)})},focus:function(e){var t=e.target;""===t.value&&$(t).parent().find(".inputTitle").animate({top:"0","font-size":"12px"},150)},blur:function(e){var t=e.target;""===$(t).val()&&$(t).parent().find(".inputTitle").animate({top:"12px","font-size":"14px"},150)},move:function(e){var t=e.target;$(t).parent().find("input").focus()}}}},Gcjt:function(e,t){},IA60:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"topbar"}},[s("div",{staticClass:"wrapper"},[s("span",{staticClass:"logo"},[e._v("Resumer")]),e._v(" "),s("div",{staticClass:"actions"},[e.logined?s("div",{staticClass:"userActions"},[s("span",{staticClass:"welcome"},[e._v("你好，"+e._s(e.user.username))]),e._v(" "),s("a",{staticClass:"button",attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.signOut(t)}}},[e._v("登出")])]):s("div",{staticClass:"userActions"},[s("a",{staticClass:"button primary",attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.signUpDialogVisible=!0}}},[e._v("注册")]),e._v(" "),s("a",{staticClass:"button signIn",attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.signInDialogVisible=!0}}},[e._v("登录")])])])]),e._v(" "),s("MyDialog",{attrs:{title:"注册",visible:e.signUpDialogVisible},on:{close:function(t){e.signUpDialogVisible=!1}}},[s("SignUpForm",{attrs:{signUpVisible:e.signUpDialogVisible,signInVisible:e.signInDialogVisible},on:{success:function(t){e.signIn(t)}}})],1),e._v(" "),s("MyDialog",{attrs:{title:"登录",visible:e.signInDialogVisible},on:{close:function(t){e.signInDialogVisible=!1}}},[s("SignInForm",{on:{success:function(t){e.signIn(t)}}})],1)],1)},i=[],n={render:a,staticRenderFns:i};t.a=n},IcnI:function(e,t,s){"use strict";var a=s("4YfN"),i=s.n(a),n=s("3cXf"),r=s.n(n),o=s("aA9S"),c=s.n(o),u=s("Gwb+"),l=s("UFcW"),m=s("lk51"),v=s.n(m),d=s("ohTm"),f=s("dc6V");l.a.use(u.a),t.a=new u.a.Store({state:{selected:"profile",user:{id:"",username:""},resumeConfig:[{field:"profile",icon:"id",keys:["name","city","birthday","self"]},{field:"workHistory",icon:"work",type:"array",keys:["company","details"]},{field:"education",icon:"book",type:"array",keys:["school","details"]},{field:"projects",icon:"heart",type:"array",keys:["name","link","details"]},{field:"awards",icon:"cup",type:"array",keys:["name","details"]},{field:"contacts",icon:"phone",type:"array",keys:["phone","QQ","wechat","Email"]}],resume:{id:""}},mutations:{initState:function(e,t){e.resumeConfig.map(function(t){"array"===t.type?l.a.set(e.resume,t.field,[]):(l.a.set(e.resume,t.field,{}),t.keys.map(function(s){l.a.set(e.resume[t.field],s,"")}))}),t&&c()(e,t)},switchTab:function(e,t){e.selected=t},updateResume:function(e,t){var s=t.path,a=t.value;v.a.set(e.resume,s,a),localStorage.setItem("resume",r()(e.resume))},setUser:function(e,t){c()(e.user,t)},removeUser:function(e){e.user.id=""},addResumeSubfield:function(e,t){var s=t.field,a={};e.resume[s].push(a),e.resumeConfig.filter(function(e){return e.field===s})[0].keys.map(function(e){l.a.set(a,e,"")})},removeResumeSubfield:function(e,t){var s=t.field,a=t.index;e.resume[s].splice(a,1)},setResumeId:function(e,t){var s=t.id;e.resume.id=s},setResume:function(e,t){e.resumeConfig.map(function(s){var a=s.field;l.a.set(e.resume,a,t[a])}),e.resume.id=t.id}},actions:{saveResume:function(e,t){var a=e.state,i=e.commit,n=d.a.Object.extend("Resume"),r=new n;a.resume.id&&(r.id=a.resume.id),r.set("profile",a.resume.profile),r.set("workHistory",a.resume.workHistory),r.set("education",a.resume.education),r.set("projects",a.resume.projects),r.set("awards",a.resume.awards),r.set("contacts",a.resume.contacts),r.set("owner_id",s.i(f.a)().id);var o=new d.a.ACL;o.setPublicReadAccess(!0),o.setWriteAccess(d.a.User.current(),!0),r.setACL(o),r.save().then(function(e){a.resume.id||i("setResumeId",{id:e.id})}).catch(function(e){console.log(e)})},fetchResume:function(e,t){var a=e.commit,n=new d.a.Query("Resume");n.equalTo("owner_id",s.i(f.a)().id),n.first().then(function(e){e&&a("setResume",i()({id:e.id},e.attributes))})}}})},KvDf:function(e,t,s){"use strict";function a(e){s("rCNY")}var i=s("C9XL"),n=s("eBBZ"),r=s("J0+h"),o=a,c=r(i.a,n.a,o,"data-v-22a26a32",null);t.a=c.exports},M6ng:function(e,t){},M93x:function(e,t,s){"use strict";function a(e){s("Gcjt")}var i=s("h8+N"),n=s("yJuK"),r=s("J0+h"),o=a,c=r(i.a,n.a,o,"data-v-cc3dbbe4",null);t.a=c.exports},MPzD:function(e,t){},MQRQ:function(e,t,s){"use strict";t.a={name:"ResumePreview",computed:{resume:function(){return this.$store.state.resume}},methods:{save:function(){this.$store.dispatch("saveResume"),""===this.$store.state.user.id&&alert("请先登录，再保存")}}}},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("UFcW"),i=s("M93x"),n=s("YaEn"),r=s("IcnI");new a.a({el:"#app",router:n.a,store:r.a,template:"<App/>",components:{App:i.a}})},Nxkp:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"editorNav"}},[s("nav",[s("ol",e._l(e.resumeConfig,function(t,a){return s("li",{class:{active:t.field===e.selected},on:{click:function(s){e.selected=t.field}}},[s("svg",{staticClass:"icon"},[s("use",{attrs:{"xlink:href":"#icon-"+t.icon}})])])}))])])},i=[],n={render:a,staticRenderFns:i};t.a=n},OBsF:function(e,t){},RQ13:function(e,t){},SFkG:function(e,t){},SuMi:function(e,t,s){"use strict";var a=s("v4YQ"),i=s("rRep"),n=s("90qS"),r=s("g2+m");t.a={name:"Resume",components:{Topbar:a.a,NavBar:r.a,ResumeEditor:i.a,ResumePreview:n.a},created:function(){}}},TSC3:function(e,t,s){"use strict";t.a={name:"NavBar",computed:{selected:{get:function(){return this.$store.state.selected},set:function(e){return this.$store.commit("switchTab",e)}},resume:function(){return this.$store.state.resume},resumeConfig:function(){return this.$store.state.resumeConfig}}}},WaGU:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("form",{on:{submit:function(t){t.preventDefault(),e.signUp(t)}}},[s("div",{staticClass:"row"},[s("label",{staticClass:"inputTitle",on:{click:function(t){e.move(t)}}},[e._v("用户名")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.username,expression:"formData.username"}],attrs:{type:"text",required:""},domProps:{value:e.formData.username},on:{focus:function(t){e.focus(t)},blur:function(t){e.blur(t)},input:function(t){t.target.composing||(e.formData.username=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"row"},[s("label",{staticClass:"inputTitle",on:{click:function(t){e.move(t)}}},[e._v("密码")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.password,expression:"formData.password"}],attrs:{type:"password",required:""},domProps:{value:e.formData.password},on:{focus:function(t){e.focus(t)},blur:function(t){e.blur(t)},input:function(t){t.target.composing||(e.formData.password=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"actions"},[s("input",{staticClass:"Button",attrs:{type:"submit",value:"Go"}}),e._v(" "),s("span",{staticClass:"errorMessage"},[e._v(e._s(e.errorMessage))])])])])},i=[],n={render:a,staticRenderFns:i};t.a=n},YaEn:function(e,t,s){"use strict";var a=s("UFcW"),i=s("u28b"),n=s("fc3l"),r=s("KvDf");a.a.use(i.a),t.a=new i.a({routes:[{path:"/",name:"Resume",component:n.a},{path:"/preview",name:"Preview",component:r.a}]})},ZXS4:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"resumeEditor"}},[s("ol",{staticClass:"panels"},e._l(e.resumeConfig,function(t){return s("li",{directives:[{name:"show",rawName:"v-show",value:t.field===e.selected,expression:"item.field === selected"}]},["array"===t.type?s("div",[s("h2",[e._v(e._s(t.field))]),e._v(" "),e._l(e.resume[t.field],function(a,i){return s("div",{staticClass:"subitem"},[s("svg",{staticClass:"icon delete",on:{click:function(s){e.removeResumeSubfield(t.field,i)}}},[s("use",{attrs:{"xlink:href":"#icon-shanchu"}})]),e._v(" "),e._l(a,function(a,n){return s("div",{staticClass:"resumeField"},[s("label",[e._v(" "+e._s(n)+" ")]),e._v(" "),s("input",{attrs:{type:"text"},domProps:{value:a},on:{input:function(s){e.changeResumeField(t.field+"."+i+"."+n,s.target.value)}}})])}),e._v(" "),s("hr")],2)}),e._v(" "),s("svg",{staticClass:"icon add",on:{click:function(s){e.addResumeSubfield(t.field)}}},[s("use",{attrs:{"xlink:href":"#icon-tianjia"}})])],2):e._l(e.resume[t.field],function(a,i){return s("div",{staticClass:"resumeField"},[s("label",[e._v(" "+e._s(i)+" ")]),e._v(" "),s("input",{attrs:{type:"text"},domProps:{value:a},on:{input:function(s){e.changeResumeField(t.field+"."+i,s.target.value)}}})])})],2)}))])},i=[],n={render:a,staticRenderFns:i};t.a=n},Zjrq:function(e,t){},ZzzE:function(e,t,s){"use strict";function a(e){s("2tks")}var i=s("3u8G"),n=s("p+H8"),r=s("J0+h"),o=a,c=r(i.a,n.a,o,"data-v-5083911a",null);t.a=c.exports},ckns:function(e,t,s){"use strict";t.a='<svg style="display:none">\n<symbol id="icon-add" width="200px" height="200.00px" viewBox="0 0 1024 1024" ><path d="M1000.704728 1023.968001h-139.643636a23.295272 23.295272 0 0 1 0-46.558545h116.348364V861.093091a23.295272 23.295272 0 0 1 46.558545 0v139.643636a23.295272 23.295272 0 0 1-23.263273 23.263273z m0-279.255273a23.295272 23.295272 0 0 1-23.295272-23.295272v-139.611637a23.295272 23.295272 0 0 1 46.558545 0v139.611637a23.295272 23.295272 0 0 1-23.263273 23.295272z m0-279.287273a23.295272 23.295272 0 0 1-23.295272-23.263273V302.550545a23.295272 23.295272 0 0 1 46.558545 0v139.611637a23.295272 23.295272 0 0 1-23.263273 23.263273z m0-279.255273a23.295272 23.295272 0 0 1-23.295272-23.263273V46.558545H861.093091a23.295272 23.295272 0 0 1 0-46.558545h139.643636c12.7996 0 23.263273 10.431674 23.263273 23.263273v139.643636a23.295272 23.295272 0 0 1-23.263273 23.263273zM721.417456 1023.968001h-139.611637a23.295272 23.295272 0 0 1 0-46.558545h139.611637a23.295272 23.295272 0 0 1 0 46.558545z m0-977.409456h-139.611637a23.295272 23.295272 0 0 1 0-46.558545h139.611637a23.295272 23.295272 0 0 1 0 46.558545z m-26.143183 418.86691a46.526546 46.526546 0 1 1 0 93.117091h-139.643636v139.611637a46.558545 46.558545 0 0 1-93.085092 0v-139.611637h-139.611637a46.558545 46.558545 0 0 1 0-93.117091h139.611637v-139.611637a46.526546 46.526546 0 1 1 93.117091 0v139.611637h139.611637z m-253.112091-418.86691H302.550545a23.295272 23.295272 0 0 1 0-46.558545h139.611637a23.295272 23.295272 0 0 1 0 46.558545zM162.906909 1023.968001H23.263273A23.295272 23.295272 0 0 1 0 1000.704728v-139.643636a23.295272 23.295272 0 0 1 46.558545 0v116.348364H162.87491a23.295272 23.295272 0 0 1 0 46.558545z m0-977.409456H46.558545V162.87491A23.295272 23.295272 0 0 1 0 162.87491V23.263273C0 10.431674 10.431674 0 23.263273 0h139.643636a23.295272 23.295272 0 0 1 0 46.558545zM23.263273 279.255273c12.863598 0 23.295272 10.431674 23.295272 23.295272v139.611637a23.295272 23.295272 0 0 1-46.558545 0V302.550545c0-12.863598 10.431674-23.295272 23.263273-23.295272z m0 279.287273c12.863598 0 23.295272 10.399675 23.295272 23.263273v139.611637a23.295272 23.295272 0 0 1-46.558545 0v-139.611637c0-12.863598 10.431674-23.263273 23.263273-23.263273z m279.287272 418.86691h139.611637a23.295272 23.295272 0 0 1 0 46.558545H302.550545a23.295272 23.295272 0 0 1 0-46.558545z" /></symbol>\n<symbol id="icon-book" width="200px" height="168.84px" viewBox="0 0 1213 1024" ><path d="M1211.58163 124.09363s-68.645926-57.685333-138.808889-88.064c-76.382815-37.05363-184.32-35.346963-184.32-35.346963s-76.003556-5.688889-153.941334 31.478518a658.773333 658.773333 0 0 0-135.471407 87.684741S519.585185 58.405926 449.308444 26.244741C379.031704-5.95437 277.617778 0.682667 277.617778 0.682667S181.172148 5.688889 119.125333 33.867852C57.002667 62.084741 0 129.21363 0 129.21363V994.797037s87.722667-76.724148 140.060444-98.304 134.181926-20.859259 134.181926-20.859259 98.076444 11.908741 156.520297 35.764148c58.405926 23.893333 168.239407 112.336593 168.239407 112.336593s70.011259-75.472593 126.217482-103.80326c95.269926-49.796741 189.743407-42.590815 189.743407-42.590815s58.026667 2.578963 138.808889 33.223112c73.424593 27.83763 159.250963 85.940148 159.250963 85.940148l-1.517037-872.410074zM569.192296 928.426667s-150.262519-120.187259-294.912-117.456593c-136.305778 2.541037-188.453926 37.432889-223.762963 73.197037 1.251556-42.097778-0.644741-723.512889-0.64474-723.512889s52.337778-95.269926 229.072592-102.930963c150.186667-12.781037 279.74163 94.435556 287.706074 114.915556 3.792593 26.775704 2.541037 755.787852 2.541037 755.787852z m586.827852-28.065186c-35.309037-35.764148-129.972148-89.391407-266.277926-91.932444-144.649481-2.730667-258.503111 121.287111-258.503111 121.287111s-1.289481-729.012148 2.503111-755.825778c12.629333-20.404148 111.085037-122.538667 287.744-114.915555 153.144889 6.750815 236.506074 100.617481 236.506074 100.617481s-1.820444 698.974815-1.972148 740.73126z" /></symbol>\n<symbol id="icon-cup" width="200px" height="200.00px" viewBox="0 0 1024 1024" ><path d="M257.613576 557.676606a17.811394 17.811394 0 0 1-5.306182-0.806788l-29.416727-8.998788a18.059636 18.059636 0 0 1-4.468364-2.016969C78.072242 456.921212 10.053818 372.70497 16.259879 295.501576 23.024485 210.944 115.246545 170.790788 119.156364 169.115152a18.214788 18.214788 0 0 1 7.136969-1.458425h17.873455c9.867636 0 17.997576 7.881697 18.369939 17.842425 5.740606 141.28097 110.312727 342.884848 111.336728 344.901818a18.742303 18.742303 0 0 1-2.048 20.48 18.307879 18.307879 0 0 1-14.211879 6.826666zM127.069091 206.506667c-18.307879 9.557333-70.128485 40.92897-74.162424 92.16-4.499394 58.212848 52.844606 128.341333 166.198303 203.465697-30.471758-65.784242-82.354424-190.526061-92.035879-295.625697z m652.443151 344.622545a18.307879 18.307879 0 0 1-13.498181-5.957818 18.742303 18.742303 0 0 1-3.227152-20.355879c0.930909-2.07903 93.835636-209.423515 91.477333-350.797576a18.525091 18.525091 0 0 1 17.34594-18.897454l17.811394-1.024a18.959515 18.959515 0 0 1 7.23006 1.024c4.002909 1.458424 98.33503 36.150303 109.909334 120.180363 10.581333 76.737939-52.503273 164.770909-187.547152 261.709576a18.618182 18.618182 0 0 1-4.313212 2.296243l-28.858182 10.705454a17.935515 17.935515 0 0 1-6.330182 1.117091zM890.88 192.915394c-3.692606 105.472-48.345212 233.006545-75.031273 300.466424 108.885333-81.578667 162.133333-154.903273 154.282667-212.774788-6.888727-50.889697-60.38497-79.189333-79.251394-87.691636z" /><path d="M511.100121 737.900606c-221.059879 0-400.911515-300.807758-400.911515-670.533818 0-13.312 0.279273-26.499879 0.713697-39.594667a27.741091 27.741091 0 0 1 27.61697-26.934303h745.161697c14.894545 0 27.089455 11.915636 27.585939 26.934303 0.434424 13.094788 0.744727 26.282667 0.744727 39.594667 0 369.726061-179.851636 670.533818-400.911515 670.533818zM165.453576 56.630303l-0.062061 10.736485c0 338.97503 155.089455 614.710303 345.708606 614.710303s345.708606-275.735273 345.708606-614.710303c0-3.599515 0-7.13697-0.06206-10.736485H165.453576z" /><path d="M579.025455 602.049939a18.649212 18.649212 0 0 1-7.230061-35.684848c122.352485-53.030788 156.082424-206.041212 156.392727-207.561697a18.46303 18.46303 0 0 1 21.845334-14.30497 18.618182 18.618182 0 0 1 14.180848 22.031515c-1.458424 7.043879-37.794909 173.304242-177.958788 233.999516a17.935515 17.935515 0 0 1-7.23006 1.520484z m-67.925334 272.32194c-15.235879 0-27.61697-10.550303-27.616969-23.583031v-145.097696c0-13.032727 12.381091-23.58303 27.616969-23.583031s27.61697 10.550303 27.61697 23.583031v145.097696c0 13.032727-12.381091 23.58303-27.61697 23.583031z" /><path d="M747.675152 1023.875879H287.961212a27.772121 27.772121 0 0 1-27.61697-27.927273c0-92.966788 113.105455-165.825939 257.458425-165.825939 144.384 0 257.458424 72.859152 257.458424 165.856969a27.772121 27.772121 0 0 1-27.61697 27.896243zM322.466909 968.083394h390.733576c-23.365818-46.669576-103.39297-82.168242-195.366788-82.168242-91.973818 0-172.00097 35.498667-195.366788 82.168242z" /></symbol>\n<symbol id="icon-heart" width="200px" height="187.55px" viewBox="0 0 1092 1024" ><path d="M1090.321067 305.732267c-15.906133-176.64-140.0832-304.810667-295.5264-304.810667-103.5264 0-198.382933 56.081067-251.733334 145.988267C490.1888 55.876267 399.291733 0.9216 297.3696 0.9216 141.9264 0.9216 17.749333 129.092267 1.8432 305.664c-1.262933 7.850667-6.485333 48.878933 9.284267 115.848533 22.596267 96.597333 74.922667 184.388267 151.210666 253.952l380.450134 347.477334 387.037866-347.477334c76.288-69.563733 128.580267-157.354667 151.210667-253.952 15.7696-66.9696 10.581333-108.032 9.284267-115.780266z m-50.176 106.052266c-20.650667 88.2688-68.608 168.618667-138.4448 232.2432L543.061333 966.109867 190.5664 644.096c-69.973333-63.7952-117.896533-144.110933-138.581333-232.3456-14.848-63.351467-8.704-99.157333-8.704-99.328l0.3072-2.1504c13.653333-154.794667 120.354133-267.093333 253.781333-267.093333 98.440533 0 185.105067 60.893867 226.269867 158.856533l19.319466 46.216533 19.319467-46.216533c40.482133-96.4608 131.754667-158.8224 232.516267-158.8224 133.393067 0 240.128 112.298667 254.0544 269.038933 0.068267 0.341333 6.212267 36.181333-8.704 99.498667z" /><path d="M336.0768 129.467733c-115.848533 0-210.056533 94.8224-210.056533 211.387734 0 11.6736 9.4208 21.162667 21.026133 21.162666 11.605333 0 20.992-9.489067 20.992-21.162666 0-93.2864 75.3664-169.130667 168.0384-169.130667 11.605333 0 20.992-9.454933 20.992-21.128533a21.060267 21.060267 0 0 0-20.992-21.162667z" /></symbol>\n<symbol id="icon-id" width="200px" height="156.34px" viewBox="0 0 1310 1024" ><path d="M370.4832 464.52736c-82.82112 0-150.15936-66.68288-150.15936-148.6848 0-81.92 67.33824-148.60288 150.15936-148.60288 82.78016 0 150.15936 66.68288 150.15936 148.64384 0 81.92-67.3792 148.64384-150.15936 148.64384z m0-245.67808c-54.0672 0-98.01728 43.54048-98.01728 97.03424 0 53.49376 43.95008 97.03424 98.01728 97.03424 54.02624 0 97.97632-43.54048 97.97632-97.0752 0-53.4528-43.95008-96.99328-97.97632-96.99328z m218.27584 410.29632H536.576c0-90.68544-74.5472-164.4544-166.13376-164.4544-91.62752 0-166.13376 73.728-166.13376 164.4544H152.20736c0-119.1936 97.8944-216.10496 218.27584-216.10496 120.34048 0 218.27584 96.95232 218.27584 216.10496z m637.7472 394.15808H84.1728c-45.6704 0-82.86208-36.864-82.86208-82.08384V82.86208C1.31072 37.60128 38.5024 0.77824 84.1728 0.77824h1142.3744c45.6704 0 82.86208 36.864 82.86208 82.08384v858.35776a82.61632 82.61632 0 0 1-82.90304 82.08384zM84.1728 52.4288a30.59712 30.59712 0 0 0-30.72 30.43328v858.35776c0 16.7936 13.80352 30.43328 30.72 30.43328h1142.3744c16.91648 0 30.72-13.68064 30.72-30.43328V82.86208a30.63808 30.63808 0 0 0-30.72-30.43328H84.13184z m643.60448 206.97088h410.29632v51.6096H727.77728v-51.6096z m0 247.07072h410.29632v51.6096H727.77728v-51.6096zM151.01952 742.89152h987.05408v51.6096H151.01952v-51.6096z" /></symbol>\n<symbol id="icon-phone" width="200px" height="200.00px" viewBox="0 0 1024 1024" ><path d="M197.632381 41.178403c37.763833 0 140.877405 98.769335 172.435185 165.174103 7.136961 14.956588 9.464231 27.772088 5.740599 31.123356L330.84531 278.342722c-32.116325 29.23051-49.182971 59.981503-50.765514 91.353101-1.644604 31.55778 12.319015 63.363802 41.363344 94.518189l242.532555 260.002594c30.44069 32.7059 61.657137 48.562365 95.356005 48.562365 31.216447 0 61.688168-13.901559 93.152857-42.573524l44.838734-40.835829c1.17915-1.086059 2.761694-1.489453 4.995872-1.644604 37.794863 0 128.930753 90.949708 155.399569 146.773155 7.447264 15.670284 9.464231 28.423723 5.213085 32.271476l-44.838733 40.773769c-44.869764 40.835829-95.200854 65.256648-149.379698 72.393609a253.548299 253.548299 0 0 1-33.543717 2.203149c-87.319167 0-175.786454-43.28722-249.110971-121.855852L161.358001 512.372984C26.376346 367.647826 21.597685 199.184515 149.101046 83.224413l44.931824-40.835829a5.461327 5.461327 0 0 1 3.009936-1.14812l0.589575-0.062061z m0-41.177162a47.476306 47.476306 0 0 0-32.054264 12.163864L120.801444 52.907844c-143.887341 130.823599-139.977527 326.655604 9.836594 487.299288l324.638637 348.097517c81.392386 87.288137 181.527053 135.198866 279.799903 135.198867 13.063742 0 26.127483-0.837817 39.098135-2.575512 62.929378-8.285081 120.862884-36.21232 172.217973-82.97493l44.838733-40.773769c13.498165-12.225925 25.227606-36.057168 4.344237-80.120145-28.299602-59.485019-128.992813-170.511308-193.163402-170.511309a48.438244 48.438244 0 0 0-33.202384 12.505197l-45.024915 40.990981c-23.055487 20.945429-44.187098 31.650871-64.853255 31.650871-21.535004 0-42.511464-11.605319-64.542952-35.343473l-242.625645-260.002593c-21.224702-22.776215-31.464689-44.46637-30.37863-64.511922 0.992968-20.386884 13.560226-41.580556 37.36044-63.270711l44.869763-40.742739c13.218893-12.008713 24.54494-35.436563 3.816723-78.972025C376.894224 123.687879 263.044181 0.001241 197.663411 0.001241z" /></symbol>\n<symbol id="icon-work" width="200px" height="181.40px" viewBox="0 0 1129 1024" ><path d="M971.74069 178.811586H790.951724v-66.736552c0-62.252138-49.716966-111.192276-112.993103-111.192275h-225.986207c-63.276138 0-112.993103 48.940138-112.993104 111.227586v66.701241H158.190345C70.055724 178.811586 0 247.737379 0 334.494897v533.715862c0 86.757517 70.055724 155.68331 158.190345 155.68331h813.550345c88.134621 0 158.190345-68.925793 158.190344-155.68331V334.494897c0-86.757517-72.315586-155.718621-158.190344-155.718621z m-587.564138-66.736552c0-37.782069 29.378207-66.701241 67.795862-66.701241h225.986207c38.417655 0 67.795862 28.919172 67.795862 66.736552v66.701241H384.176552v-66.736552z m-225.986207 111.227587h813.550345c63.276138 0 112.993103 48.904828 112.993103 111.192276v206.812689L564.965517 748.120276 45.197241 541.307586V334.494897c0-62.287448 49.716966-111.227586 112.993104-111.227587z m813.550345 756.100413H158.190345c-63.276138 0-112.993103-48.904828-112.993104-111.192275v-277.963035L564.965517 797.060414l519.768276-206.81269v277.963035c0 60.027586-51.976828 111.227586-112.993103 111.227586z" /></symbol>\n</svg>'},dc6V:function(e,t,s){"use strict";var a=s("ohTm");t.a=function(e){var t=e||a.a.User.current()||{attributes:{}},s=t.id,i=t.attributes.username;return{id:s||"",username:i||""}}},eBBZ:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("ResumePreview")],1)},i=[],n={render:a,staticRenderFns:i};t.a=n},fc3l:function(e,t,s){"use strict";function a(e){s("y/ws")}var i=s("SuMi"),n=s("lnZE"),r=s("J0+h"),o=a,c=r(i.a,n.a,o,"data-v-34e96233",null);t.a=c.exports},"g2+m":function(e,t,s){"use strict";function a(e){s("RQ13")}var i=s("TSC3"),n=s("Nxkp"),r=s("J0+h"),o=a,c=r(i.a,n.a,o,"data-v-a696b714",null);t.a=c.exports},"h8+N":function(e,t,s){"use strict";var a=s("OBsF"),i=(s.n(a),s("MPzD")),n=(s.n(i),s("ckns")),r=s("qF28"),o=(s.n(r),s("ohTm"),s("dc6V"));document.body.insertAdjacentHTML("afterbegin",n.a),t.a={name:"app",created:function(){var e=this;this.$store.commit("initState");var t=s.i(o.a)();this.$store.commit("setUser",t),t.id?this.$store.dispatch("fetchResume").then(function(){e.restoreResumeFromLocalStorage()}):this.restoreResumeFromLocalStorage()},methods:{restoreResumeFromLocalStorage:function(){var e=localStorage.getItem("resume");e&&this.$store.commit("setResume",JSON.parse(e))}}}},hDS5:function(e,t,s){"use strict";var a={202:"用户名已被占用",210:"用户名和密码不匹配",211:"找不到该用户",217:"无效的用户名",unknown:"请求失败，请稍后再试"};t.a=function(e){var t=e.code;return a[t]||a.unknown}},lnZE:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"page"},[s("nav",[s("NavBar")],1),e._v(" "),s("section",[s("Topbar"),e._v(" "),s("main",[s("ResumeEditor"),e._v(" "),s("ResumePreview")],1)],1)])])},i=[],n={render:a,staticRenderFns:i};t.a=n},oGVL:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("form",{on:{submit:function(t){t.preventDefault(),e.signIn(t)}}},[s("div",{staticClass:"row"},[s("label",{staticClass:"inputTitle",on:{click:function(t){e.move(t)}}},[e._v("用户名")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.username,expression:"formData.username"}],attrs:{type:"text",required:""},domProps:{value:e.formData.username},on:{focus:function(t){e.focus(t)},blur:function(t){e.blur(t)},input:function(t){t.target.composing||(e.formData.username=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"row"},[s("label",{staticClass:"inputTitle",on:{click:function(t){e.move(t)}}},[e._v("密码")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.password,expression:"formData.password"}],attrs:{type:"password",required:""},domProps:{value:e.formData.password},on:{focus:function(t){e.focus(t)},blur:function(t){e.blur(t)},input:function(t){t.target.composing||(e.formData.password=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"actions"},[s("input",{staticClass:"Button",attrs:{type:"submit",value:"Go"}}),e._v(" "),s("span",[e._v(e._s(e.errorMessage))])])])])},i=[],n={render:a,staticRenderFns:i};t.a=n},ohTm:function(e,t,s){"use strict";var a=s("man6"),i=s.n(a);i.a.init({appId:"exNlrOAl2JRjcKrrKCbrmKGV-gzGzoHsz",appKey:"0B6zW2HwiTE1Rp2zpDM70ifH"}),t.a=i.a},"p+H8":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"dialogWrapper"},[s("div",{staticClass:"dialog"},[s("header",[s("h3",[e._v(e._s(e.title))]),e._v(" "),s("span",{staticClass:"close",on:{click:e.close}},[e._v("X")])]),e._v(" "),s("main",[e._t("default")],2)])])},i=[],n={render:a,staticRenderFns:i};t.a=n},qF28:function(e,t){},rCNY:function(e,t){},rRep:function(e,t,s){"use strict";function a(e){s("864O")}var i=s("BlsU"),n=s("ZXS4"),r=s("J0+h"),o=a,c=r(i.a,n.a,o,"data-v-53358100",null);t.a=c.exports},v4YQ:function(e,t,s){"use strict";function a(e){s("M6ng")}var i=s("4YlF"),n=s("IA60"),r=s("J0+h"),o=a,c=r(i.a,n.a,o,"data-v-a0a88fb8",null);t.a=c.exports},vrL3:function(e,t,s){"use strict";function a(e){s("Zjrq")}var i=s("FeuB"),n=s("WaGU"),r=s("J0+h"),o=a,c=r(i.a,n.a,o,"data-v-285814bc",null);t.a=c.exports},vrPW:function(e,t,s){"use strict";function a(e){s("SFkG")}var i=s("/XVN"),n=s("oGVL"),r=s("J0+h"),o=a,c=r(i.a,n.a,o,"data-v-4fd9ca2c",null);t.a=c.exports},wa49:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"resumePreview"}},[s("div",{staticClass:"content"},[s("svg",{staticClass:"iconSave",on:{click:e.save}},[s("use",{attrs:{"xlink:href":"#icon-tubiaozhizuomoban"}})]),e._v(" "),s("router-link",{attrs:{to:"/preview"}},[s("svg",{staticClass:"iconPreview "},[s("use",{attrs:{"xlink:href":"#icon-chakan"}})])]),e._v(" "),e._m(0),e._v(" "),s("div",{staticClass:"previewContent"},[e.resume.profile&&e.resume.profile.name?s("section",{attrs:{"data-name":"profile"}},[s("ul",[s("li",[s("h3",[e._v("个人信息")]),e._v(" "),s("p",[e._v("\n                            姓名："+e._s(e.resume.profile.name)+"\n                        ")]),e._v(" "),s("p",[e._v(e._s(e.resume.profile.title))]),e._v(" "),s("p",[e._v("城市："+e._s(e.resume.profile.city))]),e._v(" "),s("p",[e._v("生日："+e._s(e.resume.profile.birthday))]),e._v(" "),s("p",[e._v("自我评价："+e._s(e.resume.profile.self))])])])]):e._e(),e._v(" "),e.resume.workHistory&&e.resume.workHistory.length>0?s("section",{attrs:{"data-name":"workHistory"}},[s("ul",[s("h3",[e._v("工作经历")]),e._v(" "),e._l(e.resume.workHistory,function(t){return s("li",[s("p",{directives:[{name:"show",rawName:"v-show",value:t.company,expression:"item.company"}]},[e._v("公司："+e._s(t.company))]),e._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:t.details,expression:"item.details"}]},[e._v(" 工作描述："+e._s(t.details)+" ")]),e._v(" "),s("hr",{directives:[{name:"show",rawName:"v-show",value:t.details,expression:"item.details"}]})])})],2)]):e._e(),e._v(" "),e.resume.education&&e.resume.education.length>0?s("section",{attrs:{"data-name":"education"}},[s("ul",[s("h3",[e._v("毕业院校")]),e._v(" "),e._l(e.resume.education,function(t){return s("li",[s("p",{directives:[{name:"show",rawName:"v-show",value:t.school,expression:"item.school"}]},[e._v("毕业学校："+e._s(t.school))]),e._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:t.details,expression:"item.details"}]},[e._v(" 详细情况："+e._s(t.details)+" ")]),e._v(" "),s("hr",{directives:[{name:"show",rawName:"v-show",value:t.details,expression:"item.details"}]})])})],2)]):e._e(),e._v(" "),e.resume.projects&&e.resume.projects.length>0?s("section",{attrs:{"data-name":"projects"}},[s("ul",[s("h3",[e._v("项目经历")]),e._v(" "),e._l(e.resume.projects,function(t){return s("li",[s("p",{directives:[{name:"show",rawName:"v-show",value:t.name,expression:"item.name"}]},[e._v("项目名称："+e._s(t.name))]),e._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:t.link,expression:"item.link"}]},[e._v("项目链接："+e._s(t.link)+" ")]),e._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:t.details,expression:"item.details"}]},[e._v("项目介绍： "+e._s(t.details)+" ")]),e._v(" "),s("hr",{directives:[{name:"show",rawName:"v-show",value:t.details,expression:"item.details"}]})])})],2)]):e._e(),e._v(" "),e.resume.awards&&e.resume.awards.length>0?s("section",{attrs:{"data-name":"awards"}},[s("ul",[s("h3",[e._v("获奖情况")]),e._v(" "),e._l(e.resume.awards,function(t){return s("li",[s("p",{directives:[{name:"show",rawName:"v-show",value:t.name,expression:"item.name"}]},[e._v("奖项："+e._s(t.name))]),e._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:t.details,expression:"item.details"}]},[e._v("详细情况： "+e._s(t.details)+" ")]),e._v(" "),s("hr",{directives:[{name:"show",rawName:"v-show",value:t.details,expression:"item.details"}]})])})],2)]):e._e(),e._v(" "),e.resume.contacts&&e.resume.contacts.length>0?s("section",{attrs:{"data-name":"contacts"}},[s("ul",[s("h3",[e._v("联系方式")]),e._v(" "),e._l(e.resume.contacts,function(t){return s("li",[s("p",{directives:[{name:"show",rawName:"v-show",value:t.phone,expression:"item.phone"}]},[e._v("手机："+e._s(t.phone))]),e._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:t.QQ,expression:"item.QQ"}]},[e._v("QQ： "+e._s(t.QQ)+" ")]),e._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:t.wechat,expression:"item.wechat"}]},[e._v("微信： "+e._s(t.wechat)+" ")]),e._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:t.Email,expression:"item.Email"}]},[e._v("邮箱： "+e._s(t.Email)+" ")]),e._v(" "),s("hr",{directives:[{name:"show",rawName:"v-show",value:t.Email,expression:"item.Email"}]})])})],2)]):e._e()])],1)])},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"previewHeader"},[s("h1",[e._v("ABOUT")]),e._v(" "),s("p",[e._v("Some words to say...")])])}],n={render:a,staticRenderFns:i};t.a=n},xGSj:function(e,t){},"y/ws":function(e,t){},yJuK:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("router-view")],1)},i=[],n={render:a,staticRenderFns:i};t.a=n}},["NHnr"]);
//# sourceMappingURL=app.600b12465fcf71ea792c.js.map