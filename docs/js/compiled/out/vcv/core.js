// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('vcv.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.dom');
goog.require('vcv.comp.cert');
vcv.core.app = (function vcv$core$app(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcv.comp.cert.certs], null);
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

//# sourceMappingURL=core.js.map?rel=1661828486944
