// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__22038__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__22038 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22039__i = 0, G__22039__a = new Array(arguments.length -  0);
while (G__22039__i < G__22039__a.length) {G__22039__a[G__22039__i] = arguments[G__22039__i + 0]; ++G__22039__i;}
  args = new cljs.core.IndexedSeq(G__22039__a,0,null);
} 
return G__22038__delegate.call(this,args);};
G__22038.cljs$lang$maxFixedArity = 0;
G__22038.cljs$lang$applyTo = (function (arglist__22040){
var args = cljs.core.seq(arglist__22040);
return G__22038__delegate(args);
});
G__22038.cljs$core$IFn$_invoke$arity$variadic = G__22038__delegate;
return G__22038;
})()
);

(o.error = (function() { 
var G__22041__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__22041 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22042__i = 0, G__22042__a = new Array(arguments.length -  0);
while (G__22042__i < G__22042__a.length) {G__22042__a[G__22042__i] = arguments[G__22042__i + 0]; ++G__22042__i;}
  args = new cljs.core.IndexedSeq(G__22042__a,0,null);
} 
return G__22041__delegate.call(this,args);};
G__22041.cljs$lang$maxFixedArity = 0;
G__22041.cljs$lang$applyTo = (function (arglist__22043){
var args = cljs.core.seq(arglist__22043);
return G__22041__delegate(args);
});
G__22041.cljs$core$IFn$_invoke$arity$variadic = G__22041__delegate;
return G__22041;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1663005397309
