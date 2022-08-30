// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('vcv.helpers');
goog.require('cljs.core');
vcv.helpers.toggle_modal = (function vcv$helpers$toggle_modal(var_args){
var G__22592 = arguments.length;
switch (G__22592) {
case 2:
return vcv.helpers.toggle_modal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return vcv.helpers.toggle_modal.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(vcv.helpers.toggle_modal.cljs$core$IFn$_invoke$arity$2 = (function (p__22593,modal){
var map__22594 = p__22593;
var map__22594__$1 = (((((!((map__22594 == null))))?(((((map__22594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22594):map__22594);
var active = cljs.core.get.call(null,map__22594__$1,new cljs.core.Keyword(null,"active","active",1895962068));
return cljs.core.swap_BANG_.call(null,modal,cljs.core.assoc,new cljs.core.Keyword(null,"active","active",1895962068),active);
}));

(vcv.helpers.toggle_modal.cljs$core$IFn$_invoke$arity$3 = (function (p__22596,modal,values){
var map__22597 = p__22596;
var map__22597__$1 = (((((!((map__22597 == null))))?(((((map__22597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22597):map__22597);
var active = cljs.core.get.call(null,map__22597__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var cert = cljs.core.get.call(null,map__22597__$1,new cljs.core.Keyword(null,"cert","cert",648499243));
console.log("hello!!");

cljs.core.swap_BANG_.call(null,modal,cljs.core.assoc,new cljs.core.Keyword(null,"active","active",1895962068),active);

cljs.core.reset_BANG_.call(null,values,cert);

return console.log("Bye bye");
}));

(vcv.helpers.toggle_modal.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=helpers.js.map?rel=1661828486839
