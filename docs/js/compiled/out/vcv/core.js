// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('vcv.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.dom');
goog.require('vcv.comp.cert');
goog.require('vcv.comp.header');
goog.require('vcv.comp.footer');
vcv.core.app = (function vcv$core$app(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcv.comp.header.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcv.comp.cert.certs], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcv.comp.footer.footer], null)], null);
});
vcv.core.get_app_element = (function vcv$core$get_app_element(){
return goog.dom.getElement("app");
});
vcv.core.mount = (function vcv$core$mount(el){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcv.core.app], null),el);
});
vcv.core.mount_app_element = (function vcv$core$mount_app_element(){
var temp__5720__auto__ = vcv.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
return vcv.core.mount.call(null,el);
} else {
return null;
}
});
vcv.core.mount_app_element.call(null);

//# sourceMappingURL=core.js.map?rel=1663174946889
