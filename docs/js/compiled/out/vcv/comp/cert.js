// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('vcv.comp.cert');
goog.require('cljs.core');
goog.require('vcv.state');
goog.require('vcv.helpers');
goog.require('vcv.comp.full_cert');
goog.require('reagent.core');
/**
 * Element that enables the modal for the =gig-editor=-component.
 */
vcv.comp.cert.modal_add = (function vcv$comp$cert$modal_add(cert_data,values,modal){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-warning.float-left","button.btn.btn-warning.float-left",-2759720),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return vcv.helpers.toggle_modal.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"cert","cert",648499243),cert_data], null),modal,values);
})], null),"Click to expand"], null);
});
/**
 * Display the certification for an activity.
 */
vcv.comp.cert.cert = (function vcv$comp$cert$cert(id,header,img,title,inst,descr,link,date,modal,cert_data,values){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card.shadow.h-100","div.card.shadow.h-100",1341418380),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.card-header.row.align-items.align-middle","h1.card-header.row.align-items.align-middle",-647431948),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011),header], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-5","div.col-5",-2108746862),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.test.text-center.w-100.align-middle","span.test.text-center.w-100.align-middle",-91934125),inst], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011),vcv.comp.cert.modal_add.call(null,cert_data,values,modal)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.shadow-sm.mb-1.bg-body.rounded.ratio.ratio-16x9","div.shadow-sm.mb-1.bg-body.rounded.ratio.ratio-16x9",-1652373909),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return vcv.helpers.toggle_modal.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"cert","cert",648499243),cert_data], null),modal,values);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.card-img-top.img-fluid.rounded.img-thumbnail","img.card-img-top.img-fluid.rounded.img-thumbnail",-1299615291),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),img,new cljs.core.Keyword(null,"alt","alt",-3214426),title,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return vcv.helpers.toggle_modal.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"cert","cert",648499243),cert_data], null),modal,values);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-body","div.card-body",1538579065),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-light.bg-dark.bg-gradient.border.text-center","div.text-light.bg-dark.bg-gradient.border.text-center",1912459286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.card-title","h3.card-title",-1840819568),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-light","a.text-light",-579201929),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),link], null),title], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.card-text","p.card-text",815200113),descr], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-footer","div.card-footer",1034080687),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.text-muted","small.text-muted",1906258664),date], null)], null)], null)], null);
});
vcv.comp.cert.certs = (function vcv$comp$cert$certs(){
var modal = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),false], null));
var values = reagent.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"institution","institution",-70023072),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"descr","descr",-574015785),new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.Keyword(null,"platform","platform",-1086422114)],["","","","","","",["cert-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid.call(null))].join(''),"","",""]));
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.container","main.container",-815859223),vcv.comp.full_cert.full_cert.call(null,modal,values),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.row-cols-1.row-cols-md-2.g-4","div.row.row-cols-1.row-cols-md-2.g-4",1933994098),(function (){var iter__4529__auto__ = (function vcv$comp$cert$certs_$_iter__22114(s__22115){
return (new cljs.core.LazySeq(null,(function (){
var s__22115__$1 = s__22115;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__22115__$1);
if(temp__5720__auto__){
var s__22115__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22115__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__22115__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__22117 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__22116 = (0);
while(true){
if((i__22116 < size__4528__auto__)){
var map__22118 = cljs.core._nth.call(null,c__4527__auto__,i__22116);
var map__22118__$1 = (((((!((map__22118 == null))))?(((((map__22118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22118):map__22118);
var cert_data = map__22118__$1;
var id = cljs.core.get.call(null,map__22118__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var header = cljs.core.get.call(null,map__22118__$1,new cljs.core.Keyword(null,"header","header",119441134));
var img = cljs.core.get.call(null,map__22118__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var title = cljs.core.get.call(null,map__22118__$1,new cljs.core.Keyword(null,"title","title",636505583));
var institution = cljs.core.get.call(null,map__22118__$1,new cljs.core.Keyword(null,"institution","institution",-70023072));
var descr = cljs.core.get.call(null,map__22118__$1,new cljs.core.Keyword(null,"descr","descr",-574015785));
var link = cljs.core.get.call(null,map__22118__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var date = cljs.core.get.call(null,map__22118__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
cljs.core.chunk_append.call(null,b__22117,vcv.comp.cert.cert.call(null,id,header,img,title,institution,descr,link,date,modal,cert_data,values));

var G__22122 = (i__22116 + (1));
i__22116 = G__22122;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22117),vcv$comp$cert$certs_$_iter__22114.call(null,cljs.core.chunk_rest.call(null,s__22115__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22117),null);
}
} else {
var map__22120 = cljs.core.first.call(null,s__22115__$2);
var map__22120__$1 = (((((!((map__22120 == null))))?(((((map__22120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22120):map__22120);
var cert_data = map__22120__$1;
var id = cljs.core.get.call(null,map__22120__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var header = cljs.core.get.call(null,map__22120__$1,new cljs.core.Keyword(null,"header","header",119441134));
var img = cljs.core.get.call(null,map__22120__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var title = cljs.core.get.call(null,map__22120__$1,new cljs.core.Keyword(null,"title","title",636505583));
var institution = cljs.core.get.call(null,map__22120__$1,new cljs.core.Keyword(null,"institution","institution",-70023072));
var descr = cljs.core.get.call(null,map__22120__$1,new cljs.core.Keyword(null,"descr","descr",-574015785));
var link = cljs.core.get.call(null,map__22120__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var date = cljs.core.get.call(null,map__22120__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
return cljs.core.cons.call(null,vcv.comp.cert.cert.call(null,id,header,img,title,institution,descr,link,date,modal,cert_data,values),vcv$comp$cert$certs_$_iter__22114.call(null,cljs.core.rest.call(null,s__22115__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,vcv.state.certs)));
})()], null)], null);
});
});

//# sourceMappingURL=cert.js.map?rel=1663006498245
