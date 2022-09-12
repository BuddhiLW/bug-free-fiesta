// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36785){
var map__36786 = p__36785;
var map__36786__$1 = (((((!((map__36786 == null))))?(((((map__36786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36786):map__36786);
var m = map__36786__$1;
var n = cljs.core.get.call(null,map__36786__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36786__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36788_36820 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36789_36821 = null;
var count__36790_36822 = (0);
var i__36791_36823 = (0);
while(true){
if((i__36791_36823 < count__36790_36822)){
var f_36824 = cljs.core._nth.call(null,chunk__36789_36821,i__36791_36823);
cljs.core.println.call(null,"  ",f_36824);


var G__36825 = seq__36788_36820;
var G__36826 = chunk__36789_36821;
var G__36827 = count__36790_36822;
var G__36828 = (i__36791_36823 + (1));
seq__36788_36820 = G__36825;
chunk__36789_36821 = G__36826;
count__36790_36822 = G__36827;
i__36791_36823 = G__36828;
continue;
} else {
var temp__5720__auto___36829 = cljs.core.seq.call(null,seq__36788_36820);
if(temp__5720__auto___36829){
var seq__36788_36830__$1 = temp__5720__auto___36829;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36788_36830__$1)){
var c__4556__auto___36831 = cljs.core.chunk_first.call(null,seq__36788_36830__$1);
var G__36832 = cljs.core.chunk_rest.call(null,seq__36788_36830__$1);
var G__36833 = c__4556__auto___36831;
var G__36834 = cljs.core.count.call(null,c__4556__auto___36831);
var G__36835 = (0);
seq__36788_36820 = G__36832;
chunk__36789_36821 = G__36833;
count__36790_36822 = G__36834;
i__36791_36823 = G__36835;
continue;
} else {
var f_36836 = cljs.core.first.call(null,seq__36788_36830__$1);
cljs.core.println.call(null,"  ",f_36836);


var G__36837 = cljs.core.next.call(null,seq__36788_36830__$1);
var G__36838 = null;
var G__36839 = (0);
var G__36840 = (0);
seq__36788_36820 = G__36837;
chunk__36789_36821 = G__36838;
count__36790_36822 = G__36839;
i__36791_36823 = G__36840;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36841 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36841);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36841)))?cljs.core.second.call(null,arglists_36841):arglists_36841));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36792_36842 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36793_36843 = null;
var count__36794_36844 = (0);
var i__36795_36845 = (0);
while(true){
if((i__36795_36845 < count__36794_36844)){
var vec__36806_36846 = cljs.core._nth.call(null,chunk__36793_36843,i__36795_36845);
var name_36847 = cljs.core.nth.call(null,vec__36806_36846,(0),null);
var map__36809_36848 = cljs.core.nth.call(null,vec__36806_36846,(1),null);
var map__36809_36849__$1 = (((((!((map__36809_36848 == null))))?(((((map__36809_36848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36809_36848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36809_36848):map__36809_36848);
var doc_36850 = cljs.core.get.call(null,map__36809_36849__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36851 = cljs.core.get.call(null,map__36809_36849__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36847);

cljs.core.println.call(null," ",arglists_36851);

if(cljs.core.truth_(doc_36850)){
cljs.core.println.call(null," ",doc_36850);
} else {
}


var G__36852 = seq__36792_36842;
var G__36853 = chunk__36793_36843;
var G__36854 = count__36794_36844;
var G__36855 = (i__36795_36845 + (1));
seq__36792_36842 = G__36852;
chunk__36793_36843 = G__36853;
count__36794_36844 = G__36854;
i__36795_36845 = G__36855;
continue;
} else {
var temp__5720__auto___36856 = cljs.core.seq.call(null,seq__36792_36842);
if(temp__5720__auto___36856){
var seq__36792_36857__$1 = temp__5720__auto___36856;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36792_36857__$1)){
var c__4556__auto___36858 = cljs.core.chunk_first.call(null,seq__36792_36857__$1);
var G__36859 = cljs.core.chunk_rest.call(null,seq__36792_36857__$1);
var G__36860 = c__4556__auto___36858;
var G__36861 = cljs.core.count.call(null,c__4556__auto___36858);
var G__36862 = (0);
seq__36792_36842 = G__36859;
chunk__36793_36843 = G__36860;
count__36794_36844 = G__36861;
i__36795_36845 = G__36862;
continue;
} else {
var vec__36811_36863 = cljs.core.first.call(null,seq__36792_36857__$1);
var name_36864 = cljs.core.nth.call(null,vec__36811_36863,(0),null);
var map__36814_36865 = cljs.core.nth.call(null,vec__36811_36863,(1),null);
var map__36814_36866__$1 = (((((!((map__36814_36865 == null))))?(((((map__36814_36865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36814_36865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36814_36865):map__36814_36865);
var doc_36867 = cljs.core.get.call(null,map__36814_36866__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36868 = cljs.core.get.call(null,map__36814_36866__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36864);

cljs.core.println.call(null," ",arglists_36868);

if(cljs.core.truth_(doc_36867)){
cljs.core.println.call(null," ",doc_36867);
} else {
}


var G__36869 = cljs.core.next.call(null,seq__36792_36857__$1);
var G__36870 = null;
var G__36871 = (0);
var G__36872 = (0);
seq__36792_36842 = G__36869;
chunk__36793_36843 = G__36870;
count__36794_36844 = G__36871;
i__36795_36845 = G__36872;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__36816 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36817 = null;
var count__36818 = (0);
var i__36819 = (0);
while(true){
if((i__36819 < count__36818)){
var role = cljs.core._nth.call(null,chunk__36817,i__36819);
var temp__5720__auto___36873__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___36873__$1)){
var spec_36874 = temp__5720__auto___36873__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36874));
} else {
}


var G__36875 = seq__36816;
var G__36876 = chunk__36817;
var G__36877 = count__36818;
var G__36878 = (i__36819 + (1));
seq__36816 = G__36875;
chunk__36817 = G__36876;
count__36818 = G__36877;
i__36819 = G__36878;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__36816);
if(temp__5720__auto____$1){
var seq__36816__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36816__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__36816__$1);
var G__36879 = cljs.core.chunk_rest.call(null,seq__36816__$1);
var G__36880 = c__4556__auto__;
var G__36881 = cljs.core.count.call(null,c__4556__auto__);
var G__36882 = (0);
seq__36816 = G__36879;
chunk__36817 = G__36880;
count__36818 = G__36881;
i__36819 = G__36882;
continue;
} else {
var role = cljs.core.first.call(null,seq__36816__$1);
var temp__5720__auto___36883__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___36883__$2)){
var spec_36884 = temp__5720__auto___36883__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36884));
} else {
}


var G__36885 = cljs.core.next.call(null,seq__36816__$1);
var G__36886 = null;
var G__36887 = (0);
var G__36888 = (0);
seq__36816 = G__36885;
chunk__36817 = G__36886;
count__36818 = G__36887;
i__36819 = G__36888;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__36889 = cljs.core.conj.call(null,via,t);
var G__36890 = cljs.core.ex_cause.call(null,t);
via = G__36889;
t = G__36890;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__36893 = datafied_throwable;
var map__36893__$1 = (((((!((map__36893 == null))))?(((((map__36893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36893):map__36893);
var via = cljs.core.get.call(null,map__36893__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__36893__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__36893__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36894 = cljs.core.last.call(null,via);
var map__36894__$1 = (((((!((map__36894 == null))))?(((((map__36894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36894):map__36894);
var type = cljs.core.get.call(null,map__36894__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__36894__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__36894__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36895 = data;
var map__36895__$1 = (((((!((map__36895 == null))))?(((((map__36895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36895):map__36895);
var problems = cljs.core.get.call(null,map__36895__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__36895__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__36895__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36896 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__36896__$1 = (((((!((map__36896 == null))))?(((((map__36896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36896):map__36896);
var top_data = map__36896__$1;
var source = cljs.core.get.call(null,map__36896__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__36901 = phase;
var G__36901__$1 = (((G__36901 instanceof cljs.core.Keyword))?G__36901.fqn:null);
switch (G__36901__$1) {
case "read-source":
var map__36902 = data;
var map__36902__$1 = (((((!((map__36902 == null))))?(((((map__36902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36902):map__36902);
var line = cljs.core.get.call(null,map__36902__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__36902__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36904 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__36904__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__36904,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36904);
var G__36904__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__36904__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36904__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__36904__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36904__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36905 = top_data;
var G__36905__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__36905,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36905);
var G__36905__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__36905__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36905__$1);
var G__36905__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__36905__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36905__$2);
var G__36905__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__36905__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36905__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__36905__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36905__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36906 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__36906,(0),null);
var method = cljs.core.nth.call(null,vec__36906,(1),null);
var file = cljs.core.nth.call(null,vec__36906,(2),null);
var line = cljs.core.nth.call(null,vec__36906,(3),null);
var G__36909 = top_data;
var G__36909__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__36909,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36909);
var G__36909__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__36909__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36909__$1);
var G__36909__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__36909__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36909__$2);
var G__36909__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__36909__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36909__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__36909__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36909__$4;
}

break;
case "execution":
var vec__36910 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__36910,(0),null);
var method = cljs.core.nth.call(null,vec__36910,(1),null);
var file = cljs.core.nth.call(null,vec__36910,(2),null);
var line = cljs.core.nth.call(null,vec__36910,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__36892_SHARP_){
var or__4126__auto__ = (p1__36892_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__36892_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__36913 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36913__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__36913,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36913);
var G__36913__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__36913__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36913__$1);
var G__36913__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__36913__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36913__$2);
var G__36913__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__36913__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36913__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__36913__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36913__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36901__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36917){
var map__36918 = p__36917;
var map__36918__$1 = (((((!((map__36918 == null))))?(((((map__36918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36918):map__36918);
var triage_data = map__36918__$1;
var phase = cljs.core.get.call(null,map__36918__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__36918__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__36918__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__36918__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__36918__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__36918__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__36918__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__36918__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__36920 = phase;
var G__36920__$1 = (((G__36920 instanceof cljs.core.Keyword))?G__36920.fqn:null);
switch (G__36920__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36921_36930 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36922_36931 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36923_36932 = true;
var _STAR_print_fn_STAR__temp_val__36924_36933 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36923_36932);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36924_36933);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__36915_SHARP_){
return cljs.core.dissoc.call(null,p1__36915_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36922_36931);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36921_36930);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36925_36934 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36926_36935 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36927_36936 = true;
var _STAR_print_fn_STAR__temp_val__36928_36937 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36927_36936);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36928_36937);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__36916_SHARP_){
return cljs.core.dissoc.call(null,p1__36916_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36926_36935);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36925_36934);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36920__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1663010193628
