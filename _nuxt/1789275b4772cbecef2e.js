(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{293:function(t,e,n){var map={"./af":150,"./af.js":150,"./ar":151,"./ar-dz":152,"./ar-dz.js":152,"./ar-kw":153,"./ar-kw.js":153,"./ar-ly":154,"./ar-ly.js":154,"./ar-ma":155,"./ar-ma.js":155,"./ar-sa":156,"./ar-sa.js":156,"./ar-tn":157,"./ar-tn.js":157,"./ar.js":151,"./az":158,"./az.js":158,"./be":159,"./be.js":159,"./bg":160,"./bg.js":160,"./bm":161,"./bm.js":161,"./bn":162,"./bn.js":162,"./bo":163,"./bo.js":163,"./br":164,"./br.js":164,"./bs":165,"./bs.js":165,"./ca":166,"./ca.js":166,"./cs":167,"./cs.js":167,"./cv":168,"./cv.js":168,"./cy":169,"./cy.js":169,"./da":170,"./da.js":170,"./de":171,"./de-at":172,"./de-at.js":172,"./de-ch":173,"./de-ch.js":173,"./de.js":171,"./dv":174,"./dv.js":174,"./el":175,"./el.js":175,"./en-au":176,"./en-au.js":176,"./en-ca":177,"./en-ca.js":177,"./en-gb":178,"./en-gb.js":178,"./en-ie":179,"./en-ie.js":179,"./en-il":180,"./en-il.js":180,"./en-in":181,"./en-in.js":181,"./en-nz":182,"./en-nz.js":182,"./en-sg":183,"./en-sg.js":183,"./eo":184,"./eo.js":184,"./es":185,"./es-do":186,"./es-do.js":186,"./es-us":187,"./es-us.js":187,"./es.js":185,"./et":188,"./et.js":188,"./eu":189,"./eu.js":189,"./fa":190,"./fa.js":190,"./fi":191,"./fi.js":191,"./fil":192,"./fil.js":192,"./fo":193,"./fo.js":193,"./fr":194,"./fr-ca":195,"./fr-ca.js":195,"./fr-ch":196,"./fr-ch.js":196,"./fr.js":194,"./fy":197,"./fy.js":197,"./ga":198,"./ga.js":198,"./gd":199,"./gd.js":199,"./gl":200,"./gl.js":200,"./gom-deva":201,"./gom-deva.js":201,"./gom-latn":202,"./gom-latn.js":202,"./gu":203,"./gu.js":203,"./he":204,"./he.js":204,"./hi":205,"./hi.js":205,"./hr":206,"./hr.js":206,"./hu":207,"./hu.js":207,"./hy-am":208,"./hy-am.js":208,"./id":209,"./id.js":209,"./is":210,"./is.js":210,"./it":211,"./it-ch":212,"./it-ch.js":212,"./it.js":211,"./ja":213,"./ja.js":213,"./jv":214,"./jv.js":214,"./ka":215,"./ka.js":215,"./kk":216,"./kk.js":216,"./km":217,"./km.js":217,"./kn":218,"./kn.js":218,"./ko":219,"./ko.js":219,"./ku":220,"./ku.js":220,"./ky":221,"./ky.js":221,"./lb":222,"./lb.js":222,"./lo":223,"./lo.js":223,"./lt":224,"./lt.js":224,"./lv":225,"./lv.js":225,"./me":226,"./me.js":226,"./mi":227,"./mi.js":227,"./mk":228,"./mk.js":228,"./ml":229,"./ml.js":229,"./mn":230,"./mn.js":230,"./mr":231,"./mr.js":231,"./ms":232,"./ms-my":233,"./ms-my.js":233,"./ms.js":232,"./mt":234,"./mt.js":234,"./my":235,"./my.js":235,"./nb":236,"./nb.js":236,"./ne":237,"./ne.js":237,"./nl":238,"./nl-be":239,"./nl-be.js":239,"./nl.js":238,"./nn":240,"./nn.js":240,"./oc-lnc":241,"./oc-lnc.js":241,"./pa-in":242,"./pa-in.js":242,"./pl":243,"./pl.js":243,"./pt":244,"./pt-br":245,"./pt-br.js":245,"./pt.js":244,"./ro":246,"./ro.js":246,"./ru":247,"./ru.js":247,"./sd":248,"./sd.js":248,"./se":249,"./se.js":249,"./si":250,"./si.js":250,"./sk":251,"./sk.js":251,"./sl":252,"./sl.js":252,"./sq":253,"./sq.js":253,"./sr":254,"./sr-cyrl":255,"./sr-cyrl.js":255,"./sr.js":254,"./ss":256,"./ss.js":256,"./sv":257,"./sv.js":257,"./sw":258,"./sw.js":258,"./ta":259,"./ta.js":259,"./te":260,"./te.js":260,"./tet":261,"./tet.js":261,"./tg":262,"./tg.js":262,"./th":263,"./th.js":263,"./tl-ph":264,"./tl-ph.js":264,"./tlh":265,"./tlh.js":265,"./tr":266,"./tr.js":266,"./tzl":267,"./tzl.js":267,"./tzm":268,"./tzm-latn":269,"./tzm-latn.js":269,"./tzm.js":268,"./ug-cn":270,"./ug-cn.js":270,"./uk":271,"./uk.js":271,"./ur":272,"./ur.js":272,"./uz":273,"./uz-latn":274,"./uz-latn.js":274,"./uz.js":273,"./vi":275,"./vi.js":275,"./x-pseudo":276,"./x-pseudo.js":276,"./yo":277,"./yo.js":277,"./zh-cn":278,"./zh-cn.js":278,"./zh-hk":279,"./zh-hk.js":279,"./zh-mo":280,"./zh-mo.js":280,"./zh-tw":281,"./zh-tw.js":281};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=293},294:function(t,e,n){"use strict";n.r(e);var o=n(283),r=n.n(o),l=n(292),c=n.n(l),d={name:"introduction",data:function(){return{isin:"LU1615092217",chart:{},fund:{},server:"https://test-api.zurianalytics.com//fund/"}},methods:{getFund:function(){var t=this,e="https://test-api.zurianalytics.com/fund/"+this.isin;console.log("Loading fund on: "+e),r.a.get(e).then((function(e){t.fund=e.data;var n=e.data.sectors,o=e.data.regions;t.chart.sectors&&t.chart.sectors.destroy(),t.chart.sectors=t.drawChart("sectors",n,"sector"),t.chart.regions&&t.chart.regions.destroy(),t.chart.regions=t.drawChart("countries",o,"country")})).catch((function(t){console.log(t),document.querySelector("#demo-content").innerHTML=t.response.data.message}))},drawChart:function(element,data,t){var e=document.getElementById(element);if(console.log(element),0!==(data=data.slice(0,9)).length)return e.style.display="block",new c.a(e.getContext("2d"),{type:"pie",data:{labels:data.map((function(e){return e[t]})),datasets:[{label:"# of Votes",data:data.map((function(t){return t.percentage})),backgroundColor:palette("cb-Blues",data.length).map((function(t){return"#"+t})),borderColor:"rgba(0, 0, 0, 0)",borderWidth:8}]},options:{legend:{position:"sectors"===element?"left":"right",labels:{fontColor:"#a4cdfe",fontSize:10},align:"end"}}});e.style.display="none"}}},j=n(19),component=Object(j.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid"},[n("h1",{attrs:{id:"introduction"}},[t._v("Introduction")]),t._v(" "),n("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:function(e,n){return t.visibilityChanged(e,n,"introduction")},expression:"(isVisible, entry) => visibilityChanged(isVisible, entry, 'introduction')"}],staticClass:"row"},[t._m(0),t._v(" "),n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"accent-box .light"},[n("header",{attrs:{id:"demo-header"}},[n("code",{staticClass:"info",attrs:{"data-tippy-content":"Input an ISIN into the field to the right, to check what information we store about the security"}},[t._v("\n                        LIVE DEMO (ISIN):")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.isin,expression:"isin"}],domProps:{value:t.isin},on:{change:function(e){return t.getFund()},input:function(e){e.target.composing||(t.isin=e.target.value)}}})]),t._v(" "),n("div",{attrs:{id:"demo-content"}},[t._m(1),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-12"},[n("label",[t._v("Fund Name:")]),t._v(" "),n("span",[t._v(t._s(t.fund.name))])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-4"},[n("label",[t._v("indexName")]),t._v(" "),n("span",[t._v(t._s(t.fund.indexName))])]),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("label",[t._v("indexProvider")]),t._v(" "),n("span",[t._v(t._s(t.fund.indexProvider))])]),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("label",[t._v("provider")]),t._v(" "),n("span",[t._v(t._s(t.fund.provider))])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-4"},[n("label",[t._v("Asset Class")]),t._v(" "),n("span",[t._v(t._s(t.fund.assetClass))])]),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("label",[t._v("Domicile")]),t._v(" "),n("span",[t._v(t._s(t.fund.domicile))])]),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("label",[t._v("Base Currency")]),t._v(" "),n("span",[t._v(t._s(t.fund.baseCurrency))])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-4"},[n("label",[t._v("ReplicationMethod")]),t._v(" "),n("span",[t._v(t._s(t.fund.replicationMethod))])]),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("label",[t._v("Distribution Type")]),t._v(" "),n("span",[t._v(t._s(t.fund.distributionType))])]),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("label",[t._v("Distribution Frequency")]),t._v(" "),n("span",[t._v(t._s(t.fund.distributionFrequency))])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-4"},[n("label",[t._v("Product Type")]),t._v(" "),n("span",[t._v(t._s(t.fund.productType))])]),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("label",[t._v("Factor")]),t._v(" "),n("span",[t._v(t._s(t.fund.factor))])])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-6"},[e("p",[this._v("\n                This API contains all ETFs listed on all major european exchanges (LSE, XETRA, SIX).\n            ")]),this._v(" "),e("p",[this._v("\n                The API provides deep machine-learned information about the ETFs, not easily available, such as: sector\n                allocation,\n                country allocation, dividend yield, an index the etf is followed, etc.\n            ")]),this._v(" "),e("p",[this._v("\n                The information is updated each day and any structural changes / listing / delisting of an ETF is available\n                immediately.\n            ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12"},[e("canvas",{staticStyle:{width:"100%"},attrs:{id:"countries"}})]),this._v(" "),e("div",{staticClass:"col-sm-12"},[e("canvas",{staticStyle:{width:"100%"},attrs:{id:"sectors"}})])])}],!1,null,null,null);e.default=component.exports}}]);