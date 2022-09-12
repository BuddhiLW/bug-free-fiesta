// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.20";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e37132){if((e37132 instanceof Error)){
var e = e37132;
return "Error: Unable to stringify";
} else {
throw e37132;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__37135 = arguments.length;
switch (G__37135) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__37133_SHARP_){
if(typeof p1__37133_SHARP_ === 'string'){
return p1__37133_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__37133_SHARP_);
}
}),args)], null)], null));

return null;
}));

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
}));

(figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2);

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37138 = arguments.length;
var i__4737__auto___37139 = (0);
while(true){
if((i__4737__auto___37139 < len__4736__auto___37138)){
args__4742__auto__.push((arguments[i__4737__auto___37139]));

var G__37140 = (i__4737__auto___37139 + (1));
i__4737__auto___37139 = G__37140;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
}));

(figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37137){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37137));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37142 = arguments.length;
var i__4737__auto___37143 = (0);
while(true){
if((i__4737__auto___37143 < len__4736__auto___37142)){
args__4742__auto__.push((arguments[i__4737__auto___37143]));

var G__37144 = (i__4737__auto___37143 + (1));
i__4737__auto___37143 = G__37144;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
}));

(figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37141){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37141));
}));

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37145){
var map__37146 = p__37145;
var map__37146__$1 = (((((!((map__37146 == null))))?(((((map__37146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37146):map__37146);
var message = cljs.core.get.call(null,map__37146__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37146__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4126__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return false;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__33152__auto___37225 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33153__auto__ = (function (){var switch__33057__auto__ = (function (state_37197){
var state_val_37198 = (state_37197[(1)]);
if((state_val_37198 === (7))){
var inst_37193 = (state_37197[(2)]);
var state_37197__$1 = state_37197;
var statearr_37199_37226 = state_37197__$1;
(statearr_37199_37226[(2)] = inst_37193);

(statearr_37199_37226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (1))){
var state_37197__$1 = state_37197;
var statearr_37200_37227 = state_37197__$1;
(statearr_37200_37227[(2)] = null);

(statearr_37200_37227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (4))){
var inst_37150 = (state_37197[(7)]);
var inst_37150__$1 = (state_37197[(2)]);
var state_37197__$1 = (function (){var statearr_37201 = state_37197;
(statearr_37201[(7)] = inst_37150__$1);

return statearr_37201;
})();
if(cljs.core.truth_(inst_37150__$1)){
var statearr_37202_37228 = state_37197__$1;
(statearr_37202_37228[(1)] = (5));

} else {
var statearr_37203_37229 = state_37197__$1;
(statearr_37203_37229[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (15))){
var inst_37157 = (state_37197[(8)]);
var inst_37172 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37157);
var inst_37173 = cljs.core.first.call(null,inst_37172);
var inst_37174 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37173);
var inst_37175 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37174)].join('');
var inst_37176 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37175);
var state_37197__$1 = state_37197;
var statearr_37204_37230 = state_37197__$1;
(statearr_37204_37230[(2)] = inst_37176);

(statearr_37204_37230[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (13))){
var inst_37181 = (state_37197[(2)]);
var state_37197__$1 = state_37197;
var statearr_37205_37231 = state_37197__$1;
(statearr_37205_37231[(2)] = inst_37181);

(statearr_37205_37231[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (6))){
var state_37197__$1 = state_37197;
var statearr_37206_37232 = state_37197__$1;
(statearr_37206_37232[(2)] = null);

(statearr_37206_37232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (17))){
var inst_37179 = (state_37197[(2)]);
var state_37197__$1 = state_37197;
var statearr_37207_37233 = state_37197__$1;
(statearr_37207_37233[(2)] = inst_37179);

(statearr_37207_37233[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (3))){
var inst_37195 = (state_37197[(2)]);
var state_37197__$1 = state_37197;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37197__$1,inst_37195);
} else {
if((state_val_37198 === (12))){
var inst_37156 = (state_37197[(9)]);
var inst_37170 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37156,opts);
var state_37197__$1 = state_37197;
if(inst_37170){
var statearr_37208_37234 = state_37197__$1;
(statearr_37208_37234[(1)] = (15));

} else {
var statearr_37209_37235 = state_37197__$1;
(statearr_37209_37235[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (2))){
var state_37197__$1 = state_37197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37197__$1,(4),ch);
} else {
if((state_val_37198 === (11))){
var inst_37157 = (state_37197[(8)]);
var inst_37162 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37163 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37157);
var inst_37164 = cljs.core.async.timeout.call(null,(1000));
var inst_37165 = [inst_37163,inst_37164];
var inst_37166 = (new cljs.core.PersistentVector(null,2,(5),inst_37162,inst_37165,null));
var state_37197__$1 = state_37197;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37197__$1,(14),inst_37166);
} else {
if((state_val_37198 === (9))){
var inst_37157 = (state_37197[(8)]);
var inst_37183 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37184 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37157);
var inst_37185 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37184);
var inst_37186 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37185)].join('');
var inst_37187 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37186);
var state_37197__$1 = (function (){var statearr_37210 = state_37197;
(statearr_37210[(10)] = inst_37183);

return statearr_37210;
})();
var statearr_37211_37236 = state_37197__$1;
(statearr_37211_37236[(2)] = inst_37187);

(statearr_37211_37236[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (5))){
var inst_37150 = (state_37197[(7)]);
var inst_37152 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37153 = (new cljs.core.PersistentArrayMap(null,2,inst_37152,null));
var inst_37154 = (new cljs.core.PersistentHashSet(null,inst_37153,null));
var inst_37155 = figwheel.client.focus_msgs.call(null,inst_37154,inst_37150);
var inst_37156 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37155);
var inst_37157 = cljs.core.first.call(null,inst_37155);
var inst_37158 = figwheel.client.autoload_QMARK_.call(null);
var state_37197__$1 = (function (){var statearr_37212 = state_37197;
(statearr_37212[(9)] = inst_37156);

(statearr_37212[(8)] = inst_37157);

return statearr_37212;
})();
if(cljs.core.truth_(inst_37158)){
var statearr_37213_37237 = state_37197__$1;
(statearr_37213_37237[(1)] = (8));

} else {
var statearr_37214_37238 = state_37197__$1;
(statearr_37214_37238[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (14))){
var inst_37168 = (state_37197[(2)]);
var state_37197__$1 = state_37197;
var statearr_37215_37239 = state_37197__$1;
(statearr_37215_37239[(2)] = inst_37168);

(statearr_37215_37239[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (16))){
var state_37197__$1 = state_37197;
var statearr_37216_37240 = state_37197__$1;
(statearr_37216_37240[(2)] = null);

(statearr_37216_37240[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (10))){
var inst_37189 = (state_37197[(2)]);
var state_37197__$1 = (function (){var statearr_37217 = state_37197;
(statearr_37217[(11)] = inst_37189);

return statearr_37217;
})();
var statearr_37218_37241 = state_37197__$1;
(statearr_37218_37241[(2)] = null);

(statearr_37218_37241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37198 === (8))){
var inst_37156 = (state_37197[(9)]);
var inst_37160 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37156,opts);
var state_37197__$1 = state_37197;
if(cljs.core.truth_(inst_37160)){
var statearr_37219_37242 = state_37197__$1;
(statearr_37219_37242[(1)] = (11));

} else {
var statearr_37220_37243 = state_37197__$1;
(statearr_37220_37243[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33058__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33058__auto____0 = (function (){
var statearr_37221 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37221[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33058__auto__);

(statearr_37221[(1)] = (1));

return statearr_37221;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33058__auto____1 = (function (state_37197){
while(true){
var ret_value__33059__auto__ = (function (){try{while(true){
var result__33060__auto__ = switch__33057__auto__.call(null,state_37197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33060__auto__;
}
break;
}
}catch (e37222){if((e37222 instanceof Object)){
var ex__33061__auto__ = e37222;
var statearr_37223_37244 = state_37197;
(statearr_37223_37244[(5)] = ex__33061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37245 = state_37197;
state_37197 = G__37245;
continue;
} else {
return ret_value__33059__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33058__auto__ = function(state_37197){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33058__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33058__auto____1.call(this,state_37197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33058__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33058__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33058__auto__;
})()
})();
var state__33154__auto__ = (function (){var statearr_37224 = f__33153__auto__.call(null);
(statearr_37224[(6)] = c__33152__auto___37225);

return statearr_37224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33154__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37246_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37246_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_37252 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37248 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37249 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37250 = true;
var _STAR_print_fn_STAR__temp_val__37251 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37250);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37251);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37249);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37248);
}}catch (e37247){if((e37247 instanceof Error)){
var e = e37247;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37252], null));
} else {
var e = e37247;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return (cljs.user = ({}));
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37253){
var map__37254 = p__37253;
var map__37254__$1 = (((((!((map__37254 == null))))?(((((map__37254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37254):map__37254);
var opts = map__37254__$1;
var build_id = cljs.core.get.call(null,map__37254__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__37256){
var vec__37257 = p__37256;
var seq__37258 = cljs.core.seq.call(null,vec__37257);
var first__37259 = cljs.core.first.call(null,seq__37258);
var seq__37258__$1 = cljs.core.next.call(null,seq__37258);
var map__37260 = first__37259;
var map__37260__$1 = (((((!((map__37260 == null))))?(((((map__37260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37260):map__37260);
var msg = map__37260__$1;
var msg_name = cljs.core.get.call(null,map__37260__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37258__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,(function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
}));
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37262){
var vec__37263 = p__37262;
var seq__37264 = cljs.core.seq.call(null,vec__37263);
var first__37265 = cljs.core.first.call(null,seq__37264);
var seq__37264__$1 = cljs.core.next.call(null,seq__37264);
var map__37266 = first__37265;
var map__37266__$1 = (((((!((map__37266 == null))))?(((((map__37266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37266):map__37266);
var msg = map__37266__$1;
var msg_name = cljs.core.get.call(null,map__37266__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37264__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37268){
var map__37269 = p__37268;
var map__37269__$1 = (((((!((map__37269 == null))))?(((((map__37269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37269):map__37269);
var on_compile_warning = cljs.core.get.call(null,map__37269__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37269__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__37271){
var vec__37272 = p__37271;
var seq__37273 = cljs.core.seq.call(null,vec__37272);
var first__37274 = cljs.core.first.call(null,seq__37273);
var seq__37273__$1 = cljs.core.next.call(null,seq__37273);
var map__37275 = first__37274;
var map__37275__$1 = (((((!((map__37275 == null))))?(((((map__37275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37275):map__37275);
var msg = map__37275__$1;
var msg_name = cljs.core.get.call(null,map__37275__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37273__$1;
var pred__37277 = cljs.core._EQ_;
var expr__37278 = msg_name;
if(cljs.core.truth_(pred__37277.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37278))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37277.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37278))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__33152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33153__auto__ = (function (){var switch__33057__auto__ = (function (state_37367){
var state_val_37368 = (state_37367[(1)]);
if((state_val_37368 === (7))){
var inst_37287 = (state_37367[(2)]);
var state_37367__$1 = state_37367;
if(cljs.core.truth_(inst_37287)){
var statearr_37369_37416 = state_37367__$1;
(statearr_37369_37416[(1)] = (8));

} else {
var statearr_37370_37417 = state_37367__$1;
(statearr_37370_37417[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37368 === (20))){
var inst_37361 = (state_37367[(2)]);
var state_37367__$1 = state_37367;
var statearr_37371_37418 = state_37367__$1;
(statearr_37371_37418[(2)] = inst_37361);

(statearr_37371_37418[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37368 === (27))){
var inst_37357 = (state_37367[(2)]);
var state_37367__$1 = state_37367;
var statearr_37372_37419 = state_37367__$1;
(statearr_37372_37419[(2)] = inst_37357);

(statearr_37372_37419[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37368 === (1))){
var inst_37280 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37367__$1 = state_37367;
if(cljs.core.truth_(inst_37280)){
var statearr_37373_37420 = state_37367__$1;
(statearr_37373_37420[(1)] = (2));

} else {
var statearr_37374_37421 = state_37367__$1;
(statearr_37374_37421[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37368 === (24))){
var inst_37359 = (state_37367[(2)]);
var state_37367__$1 = state_37367;
var statearr_37375_37422 = state_37367__$1;
(statearr_37375_37422[(2)] = inst_37359);

(statearr_37375_37422[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37368 === (4))){
var inst_37365 = (state_37367[(2)]);
var state_37367__$1 = state_37367;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37367__$1,inst_37365);
} else {
if((state_val_37368 === (15))){
var inst_37363 = (state_37367[(2)]);
var state_37367__$1 = state_37367;
var statearr_37376_37423 = state_37367__$1;
(statearr_37376_37423[(2)] = inst_37363);

(statearr_37376_37423[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37368 === (21))){
var inst_37316 = (state_37367[(2)]);
var inst_37317 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37318 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37317);
var state_37367__$1 = (function (){var statearr_37377 = state_37367;
(statearr_37377[(7)] = inst_37316);

return statearr_37377;
})();
var statearr_37378_37424 = state_37367__$1;
(statearr_37378_37424[(2)] = inst_37318);

(statearr_37378_37424[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37368 === (31))){
var inst_37346 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37367__$1 = state_37367;
if(inst_37346){
var statearr_37379_37425 = state_37367__$1;
(statearr_37379_37425[(1)] = (34));

} else {
var statearr_37380_37426 = state_37367__$1;
(statearr_37380_37426[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37368 === (32))){
var inst_37355 = (state_37367[(2)]);
var state_37367__$1 = state_37367;
var statearr_37381_37427 = state_37367__$1;
(statearr_37381_37427[(2)] = inst_37355);

(statearr_37381_37427[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37368 === (33))){
var inst_37342 = (state_37367[(2)]);
var inst_37343 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37344 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37343);
var state_37367__$1 = (function (){var statearr_37382 = state_37367;
(statearr_37382[(8)] = inst_37342);

return statearr_37382;
})();
var statearr_37383_37428 = state_37367__$1;
(statearr_37383_37428[(2)] = inst_37344);

(statearr_37383_37428[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37368 === (13))){
var inst_37301 = figwheel.client.heads_up.clear.call(null);
var state_37367__$1 = state_37367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37367__$1,(16),inst_37301);
} else {
if((state_val_37368 === (22))){
var inst_37322 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37323 = figwheel.client.heads_up.append_warning_message.call(null,inst_37322);
var state_37367__$1 = state_37367;
var statearr_37384_37429 = state_37367__$1;
(statearr_37384_37429[(2)] = inst_37323);

(statearr_37384_37429[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37368 === (36))){
var inst_37353 = (state_37367[(2)]);
var state_37367__$1 = state_37367;
var statearr_37385_37430 = state_37367__$1;
(statearr_37385_37430[(2)] = inst_37353);

(statearr_37385_37430[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37368 === (29))){
var inst_37333 = (state_37367[(2)]);
var inst_37334 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37335 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37334);
var state_37367__$1 = (function (){var statearr_37386 = state_37367;
(statearr_37386[(9)] = inst_37333);

return statearr_37386;
})();
var statearr_37387_37431 = state_37367__$1;
(statearr_37387_37431[(2)] = inst_37335);

(statearr_37387_37431[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37368 === (6))){
var inst_37282 = (state_37367[(10)]);
var state_37367__$1 = state_37367;
var statearr_37388_37432 = state_37367__$1;
(statearr_37388_37432[(2)] = inst_37282);

(statearr_37388_37432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37368 === (28))){
var inst_37329 = (state_37367[(2)]);
var inst_37330 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37331 = figwheel.client.heads_up.display_warning.call(null,inst_37330);
var state_37367__$1 = (function (){var statearr_37389 = state_37367;
(statearr_37389[(11)] = inst_37329);

return statearr_37389;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37367__$1,(29),inst_37331);
} else {
if((state_val_37368 === (25))){
var inst_37327 = figwheel.client.heads_up.clear.call(null);
var state_37367__$1 = state_37367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37367__$1,(28),inst_37327);
} else {
if((state_val_37368 === (34))){
var inst_37348 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37367__$1 = state_37367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37367__$1,(37),inst_37348);
} else {
if((state_val_37368 === (17))){
var inst_37307 = (state_37367[(2)]);
var inst_37308 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37309 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37308);
var state_37367__$1 = (function (){var statearr_37390 = state_37367;
(statearr_37390[(12)] = inst_37307);

return statearr_37390;
})();
var statearr_37391_37433 = state_37367__$1;
(statearr_37391_37433[(2)] = inst_37309);

(statearr_37391_37433[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37368 === (3))){
var inst_37299 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37367__$1 = state_37367;
if(inst_37299){
var statearr_37392_37434 = state_37367__$1;
(statearr_37392_37434[(1)] = (13));

} else {
var statearr_37393_37435 = state_37367__$1;
(statearr_37393_37435[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37368 === (12))){
var inst_37295 = (state_37367[(2)]);
var state_37367__$1 = state_37367;
var statearr_37394_37436 = state_37367__$1;
(statearr_37394_37436[(2)] = inst_37295);

(statearr_37394_37436[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37368 === (2))){
var inst_37282 = (state_37367[(10)]);
var inst_37282__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37367__$1 = (function (){var statearr_37395 = state_37367;
(statearr_37395[(10)] = inst_37282__$1);

return statearr_37395;
})();
if(cljs.core.truth_(inst_37282__$1)){
var statearr_37396_37437 = state_37367__$1;
(statearr_37396_37437[(1)] = (5));

} else {
var statearr_37397_37438 = state_37367__$1;
(statearr_37397_37438[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37368 === (23))){
var inst_37325 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37367__$1 = state_37367;
if(inst_37325){
var statearr_37398_37439 = state_37367__$1;
(statearr_37398_37439[(1)] = (25));

} else {
var statearr_37399_37440 = state_37367__$1;
(statearr_37399_37440[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37368 === (35))){
var state_37367__$1 = state_37367;
var statearr_37400_37441 = state_37367__$1;
(statearr_37400_37441[(2)] = null);

(statearr_37400_37441[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37368 === (19))){
var inst_37320 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37367__$1 = state_37367;
if(inst_37320){
var statearr_37401_37442 = state_37367__$1;
(statearr_37401_37442[(1)] = (22));

} else {
var statearr_37402_37443 = state_37367__$1;
(statearr_37402_37443[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37368 === (11))){
var inst_37291 = (state_37367[(2)]);
var state_37367__$1 = state_37367;
var statearr_37403_37444 = state_37367__$1;
(statearr_37403_37444[(2)] = inst_37291);

(statearr_37403_37444[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37368 === (9))){
var inst_37293 = figwheel.client.heads_up.clear.call(null);
var state_37367__$1 = state_37367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37367__$1,(12),inst_37293);
} else {
if((state_val_37368 === (5))){
var inst_37284 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37367__$1 = state_37367;
var statearr_37404_37445 = state_37367__$1;
(statearr_37404_37445[(2)] = inst_37284);

(statearr_37404_37445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37368 === (14))){
var inst_37311 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37367__$1 = state_37367;
if(inst_37311){
var statearr_37405_37446 = state_37367__$1;
(statearr_37405_37446[(1)] = (18));

} else {
var statearr_37406_37447 = state_37367__$1;
(statearr_37406_37447[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37368 === (26))){
var inst_37337 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37367__$1 = state_37367;
if(inst_37337){
var statearr_37407_37448 = state_37367__$1;
(statearr_37407_37448[(1)] = (30));

} else {
var statearr_37408_37449 = state_37367__$1;
(statearr_37408_37449[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37368 === (16))){
var inst_37303 = (state_37367[(2)]);
var inst_37304 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37305 = figwheel.client.heads_up.display_exception.call(null,inst_37304);
var state_37367__$1 = (function (){var statearr_37409 = state_37367;
(statearr_37409[(13)] = inst_37303);

return statearr_37409;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37367__$1,(17),inst_37305);
} else {
if((state_val_37368 === (30))){
var inst_37339 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37340 = figwheel.client.heads_up.display_warning.call(null,inst_37339);
var state_37367__$1 = state_37367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37367__$1,(33),inst_37340);
} else {
if((state_val_37368 === (10))){
var inst_37297 = (state_37367[(2)]);
var state_37367__$1 = state_37367;
var statearr_37410_37450 = state_37367__$1;
(statearr_37410_37450[(2)] = inst_37297);

(statearr_37410_37450[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37368 === (18))){
var inst_37313 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37314 = figwheel.client.heads_up.display_exception.call(null,inst_37313);
var state_37367__$1 = state_37367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37367__$1,(21),inst_37314);
} else {
if((state_val_37368 === (37))){
var inst_37350 = (state_37367[(2)]);
var state_37367__$1 = state_37367;
var statearr_37411_37451 = state_37367__$1;
(statearr_37411_37451[(2)] = inst_37350);

(statearr_37411_37451[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37368 === (8))){
var inst_37289 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37367__$1 = state_37367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37367__$1,(11),inst_37289);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33058__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33058__auto____0 = (function (){
var statearr_37412 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37412[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33058__auto__);

(statearr_37412[(1)] = (1));

return statearr_37412;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33058__auto____1 = (function (state_37367){
while(true){
var ret_value__33059__auto__ = (function (){try{while(true){
var result__33060__auto__ = switch__33057__auto__.call(null,state_37367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33060__auto__;
}
break;
}
}catch (e37413){if((e37413 instanceof Object)){
var ex__33061__auto__ = e37413;
var statearr_37414_37452 = state_37367;
(statearr_37414_37452[(5)] = ex__33061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37453 = state_37367;
state_37367 = G__37453;
continue;
} else {
return ret_value__33059__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33058__auto__ = function(state_37367){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33058__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33058__auto____1.call(this,state_37367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33058__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33058__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33058__auto__;
})()
})();
var state__33154__auto__ = (function (){var statearr_37415 = f__33153__auto__.call(null);
(statearr_37415[(6)] = c__33152__auto__);

return statearr_37415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33154__auto__);
}));

return c__33152__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33152__auto___37482 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33153__auto__ = (function (){var switch__33057__auto__ = (function (state_37468){
var state_val_37469 = (state_37468[(1)]);
if((state_val_37469 === (1))){
var state_37468__$1 = state_37468;
var statearr_37470_37483 = state_37468__$1;
(statearr_37470_37483[(2)] = null);

(statearr_37470_37483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37469 === (2))){
var state_37468__$1 = state_37468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37468__$1,(4),ch);
} else {
if((state_val_37469 === (3))){
var inst_37466 = (state_37468[(2)]);
var state_37468__$1 = state_37468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37468__$1,inst_37466);
} else {
if((state_val_37469 === (4))){
var inst_37456 = (state_37468[(7)]);
var inst_37456__$1 = (state_37468[(2)]);
var state_37468__$1 = (function (){var statearr_37471 = state_37468;
(statearr_37471[(7)] = inst_37456__$1);

return statearr_37471;
})();
if(cljs.core.truth_(inst_37456__$1)){
var statearr_37472_37484 = state_37468__$1;
(statearr_37472_37484[(1)] = (5));

} else {
var statearr_37473_37485 = state_37468__$1;
(statearr_37473_37485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37469 === (5))){
var inst_37456 = (state_37468[(7)]);
var inst_37458 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37456);
var state_37468__$1 = state_37468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37468__$1,(8),inst_37458);
} else {
if((state_val_37469 === (6))){
var state_37468__$1 = state_37468;
var statearr_37474_37486 = state_37468__$1;
(statearr_37474_37486[(2)] = null);

(statearr_37474_37486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37469 === (7))){
var inst_37464 = (state_37468[(2)]);
var state_37468__$1 = state_37468;
var statearr_37475_37487 = state_37468__$1;
(statearr_37475_37487[(2)] = inst_37464);

(statearr_37475_37487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37469 === (8))){
var inst_37460 = (state_37468[(2)]);
var state_37468__$1 = (function (){var statearr_37476 = state_37468;
(statearr_37476[(8)] = inst_37460);

return statearr_37476;
})();
var statearr_37477_37488 = state_37468__$1;
(statearr_37477_37488[(2)] = null);

(statearr_37477_37488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33058__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33058__auto____0 = (function (){
var statearr_37478 = [null,null,null,null,null,null,null,null,null];
(statearr_37478[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33058__auto__);

(statearr_37478[(1)] = (1));

return statearr_37478;
});
var figwheel$client$heads_up_plugin_$_state_machine__33058__auto____1 = (function (state_37468){
while(true){
var ret_value__33059__auto__ = (function (){try{while(true){
var result__33060__auto__ = switch__33057__auto__.call(null,state_37468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33060__auto__;
}
break;
}
}catch (e37479){if((e37479 instanceof Object)){
var ex__33061__auto__ = e37479;
var statearr_37480_37489 = state_37468;
(statearr_37480_37489[(5)] = ex__33061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37490 = state_37468;
state_37468 = G__37490;
continue;
} else {
return ret_value__33059__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33058__auto__ = function(state_37468){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33058__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33058__auto____1.call(this,state_37468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33058__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33058__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33058__auto__;
})()
})();
var state__33154__auto__ = (function (){var statearr_37481 = f__33153__auto__.call(null);
(statearr_37481[(6)] = c__33152__auto___37482);

return statearr_37481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33154__auto__);
}));


figwheel.client.heads_up.ensure_container.call(null);

return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33153__auto__ = (function (){var switch__33057__auto__ = (function (state_37496){
var state_val_37497 = (state_37496[(1)]);
if((state_val_37497 === (1))){
var inst_37491 = cljs.core.async.timeout.call(null,(3000));
var state_37496__$1 = state_37496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37496__$1,(2),inst_37491);
} else {
if((state_val_37497 === (2))){
var inst_37493 = (state_37496[(2)]);
var inst_37494 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37496__$1 = (function (){var statearr_37498 = state_37496;
(statearr_37498[(7)] = inst_37493);

return statearr_37498;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37496__$1,inst_37494);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__33058__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__33058__auto____0 = (function (){
var statearr_37499 = [null,null,null,null,null,null,null,null];
(statearr_37499[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33058__auto__);

(statearr_37499[(1)] = (1));

return statearr_37499;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33058__auto____1 = (function (state_37496){
while(true){
var ret_value__33059__auto__ = (function (){try{while(true){
var result__33060__auto__ = switch__33057__auto__.call(null,state_37496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33060__auto__;
}
break;
}
}catch (e37500){if((e37500 instanceof Object)){
var ex__33061__auto__ = e37500;
var statearr_37501_37503 = state_37496;
(statearr_37501_37503[(5)] = ex__33061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37504 = state_37496;
state_37496 = G__37504;
continue;
} else {
return ret_value__33059__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33058__auto__ = function(state_37496){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33058__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33058__auto____1.call(this,state_37496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33058__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33058__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33058__auto__;
})()
})();
var state__33154__auto__ = (function (){var statearr_37502 = f__33153__auto__.call(null);
(statearr_37502[(6)] = c__33152__auto__);

return statearr_37502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33154__auto__);
}));

return c__33152__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33153__auto__ = (function (){var switch__33057__auto__ = (function (state_37511){
var state_val_37512 = (state_37511[(1)]);
if((state_val_37512 === (1))){
var inst_37505 = cljs.core.async.timeout.call(null,(2000));
var state_37511__$1 = state_37511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37511__$1,(2),inst_37505);
} else {
if((state_val_37512 === (2))){
var inst_37507 = (state_37511[(2)]);
var inst_37508 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_37509 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37508);
var state_37511__$1 = (function (){var statearr_37513 = state_37511;
(statearr_37513[(7)] = inst_37507);

return statearr_37513;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37511__$1,inst_37509);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33058__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33058__auto____0 = (function (){
var statearr_37514 = [null,null,null,null,null,null,null,null];
(statearr_37514[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33058__auto__);

(statearr_37514[(1)] = (1));

return statearr_37514;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33058__auto____1 = (function (state_37511){
while(true){
var ret_value__33059__auto__ = (function (){try{while(true){
var result__33060__auto__ = switch__33057__auto__.call(null,state_37511);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33060__auto__;
}
break;
}
}catch (e37515){if((e37515 instanceof Object)){
var ex__33061__auto__ = e37515;
var statearr_37516_37518 = state_37511;
(statearr_37516_37518[(5)] = ex__33061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37515;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37519 = state_37511;
state_37511 = G__37519;
continue;
} else {
return ret_value__33059__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33058__auto__ = function(state_37511){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33058__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33058__auto____1.call(this,state_37511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33058__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33058__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33058__auto__;
})()
})();
var state__33154__auto__ = (function (){var statearr_37517 = f__33153__auto__.call(null);
(statearr_37517[(6)] = c__33152__auto__);

return statearr_37517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33154__auto__);
}));

return c__33152__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37520){
var map__37521 = p__37520;
var map__37521__$1 = (((((!((map__37521 == null))))?(((((map__37521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37521):map__37521);
var file = cljs.core.get.call(null,map__37521__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37521__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37521__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37523 = "";
var G__37523__$1 = (cljs.core.truth_(file)?[G__37523,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__37523);
var G__37523__$2 = (cljs.core.truth_(line)?[G__37523__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__37523__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__37523__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__37523__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37524){
var map__37525 = p__37524;
var map__37525__$1 = (((((!((map__37525 == null))))?(((((map__37525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37525):map__37525);
var ed = map__37525__$1;
var exception_data = cljs.core.get.call(null,map__37525__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37525__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_37528 = (function (){var G__37527 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37527)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__37527;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_37528);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37529){
var map__37530 = p__37529;
var map__37530__$1 = (((((!((map__37530 == null))))?(((((map__37530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37530):map__37530);
var w = map__37530__$1;
var message = cljs.core.get.call(null,map__37530__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4115__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4115__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37532 = cljs.core.seq.call(null,plugins);
var chunk__37533 = null;
var count__37534 = (0);
var i__37535 = (0);
while(true){
if((i__37535 < count__37534)){
var vec__37542 = cljs.core._nth.call(null,chunk__37533,i__37535);
var k = cljs.core.nth.call(null,vec__37542,(0),null);
var plugin = cljs.core.nth.call(null,vec__37542,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37548 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37532,chunk__37533,count__37534,i__37535,pl_37548,vec__37542,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37548.call(null,msg_hist);
});})(seq__37532,chunk__37533,count__37534,i__37535,pl_37548,vec__37542,k,plugin))
);
} else {
}


var G__37549 = seq__37532;
var G__37550 = chunk__37533;
var G__37551 = count__37534;
var G__37552 = (i__37535 + (1));
seq__37532 = G__37549;
chunk__37533 = G__37550;
count__37534 = G__37551;
i__37535 = G__37552;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__37532);
if(temp__5720__auto__){
var seq__37532__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37532__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__37532__$1);
var G__37553 = cljs.core.chunk_rest.call(null,seq__37532__$1);
var G__37554 = c__4556__auto__;
var G__37555 = cljs.core.count.call(null,c__4556__auto__);
var G__37556 = (0);
seq__37532 = G__37553;
chunk__37533 = G__37554;
count__37534 = G__37555;
i__37535 = G__37556;
continue;
} else {
var vec__37545 = cljs.core.first.call(null,seq__37532__$1);
var k = cljs.core.nth.call(null,vec__37545,(0),null);
var plugin = cljs.core.nth.call(null,vec__37545,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37557 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37532,chunk__37533,count__37534,i__37535,pl_37557,vec__37545,k,plugin,seq__37532__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37557.call(null,msg_hist);
});})(seq__37532,chunk__37533,count__37534,i__37535,pl_37557,vec__37545,k,plugin,seq__37532__$1,temp__5720__auto__))
);
} else {
}


var G__37558 = cljs.core.next.call(null,seq__37532__$1);
var G__37559 = null;
var G__37560 = (0);
var G__37561 = (0);
seq__37532 = G__37558;
chunk__37533 = G__37559;
count__37534 = G__37560;
i__37535 = G__37561;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__37563 = arguments.length;
switch (G__37563) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((((!((goog.dependencies_ == null)))) || ((((!((goog.debugLoader_ == null)))) && ((!((goog.debugLoader_.dependencies_ == null)))))))){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
(figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts));

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37564_37569 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37565_37570 = null;
var count__37566_37571 = (0);
var i__37567_37572 = (0);
while(true){
if((i__37567_37572 < count__37566_37571)){
var msg_37573 = cljs.core._nth.call(null,chunk__37565_37570,i__37567_37572);
figwheel.client.socket.handle_incoming_message.call(null,msg_37573);


var G__37574 = seq__37564_37569;
var G__37575 = chunk__37565_37570;
var G__37576 = count__37566_37571;
var G__37577 = (i__37567_37572 + (1));
seq__37564_37569 = G__37574;
chunk__37565_37570 = G__37575;
count__37566_37571 = G__37576;
i__37567_37572 = G__37577;
continue;
} else {
var temp__5720__auto___37578 = cljs.core.seq.call(null,seq__37564_37569);
if(temp__5720__auto___37578){
var seq__37564_37579__$1 = temp__5720__auto___37578;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37564_37579__$1)){
var c__4556__auto___37580 = cljs.core.chunk_first.call(null,seq__37564_37579__$1);
var G__37581 = cljs.core.chunk_rest.call(null,seq__37564_37579__$1);
var G__37582 = c__4556__auto___37580;
var G__37583 = cljs.core.count.call(null,c__4556__auto___37580);
var G__37584 = (0);
seq__37564_37569 = G__37581;
chunk__37565_37570 = G__37582;
count__37566_37571 = G__37583;
i__37567_37572 = G__37584;
continue;
} else {
var msg_37585 = cljs.core.first.call(null,seq__37564_37579__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37585);


var G__37586 = cljs.core.next.call(null,seq__37564_37579__$1);
var G__37587 = null;
var G__37588 = (0);
var G__37589 = (0);
seq__37564_37569 = G__37586;
chunk__37565_37570 = G__37587;
count__37566_37571 = G__37588;
i__37567_37572 = G__37589;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
} else {
return null;
}
}));

(figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(figwheel.client.start.cljs$lang$maxFixedArity = 1);

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37594 = arguments.length;
var i__4737__auto___37595 = (0);
while(true){
if((i__4737__auto___37595 < len__4736__auto___37594)){
args__4742__auto__.push((arguments[i__4737__auto___37595]));

var G__37596 = (i__4737__auto___37595 + (1));
i__4737__auto___37595 = G__37596;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37591){
var map__37592 = p__37591;
var map__37592__$1 = (((((!((map__37592 == null))))?(((((map__37592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37592):map__37592);
var opts = map__37592__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37590){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37590));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37597){if((e37597 instanceof Error)){
var e = e37597;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37597;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
(goog.dependencies_ = true);
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__37598){
var map__37599 = p__37598;
var map__37599__$1 = (((((!((map__37599 == null))))?(((((map__37599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37599):map__37599);
var msg_name = cljs.core.get.call(null,map__37599__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1663010193977
