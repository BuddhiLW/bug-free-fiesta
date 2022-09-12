// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.debug_loader_QMARK_ = (function figwheel$client$file_reloading$debug_loader_QMARK_(){
return (!((goog.debugLoader_ == null)));
});
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4126__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){

return goog.debugLoader_.getPathFromDeps_(ns);
}):(function (ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
}));
figwheel.client.file_reloading.provided_QMARK_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
return goog.getObjectByName(ns);
}):(function (ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
}));
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(ns){
return ((cljs.core._EQ_.call(null,"goog",ns)) || (cljs.core._EQ_.call(null,"cljs.core",ns)) || (cljs.core._EQ_.call(null,"cljs.nodejs",ns)) || (goog.string.startsWith(ns,"clojure.")) || (goog.string.startsWith(ns,"goog.")));
});
figwheel.client.file_reloading.base_requires_for_ns_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__35169 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__35169 == null)){
return null;
} else {
return goog.object.get(G__35169,"requires");
}
}):(function (path){
var G__35170 = goog.object.get(goog.dependencies_.requires,path);
if((G__35170 == null)){
return null;
} else {
return goog.object.getKeys(G__35170);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__35171_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__35171_SHARP_)));
}),figwheel.client.file_reloading.base_requires_for_ns_path.call(null,figwheel.client.file_reloading.name__GT_path.call(null,ns))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (_,___$1){
return null;
}):(function (path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
}));
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return null;
}):(function (){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
}));
figwheel.client.file_reloading.path__GT_name = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__35172 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__35172__$1 = (((G__35172 == null))?null:goog.object.get(G__35172,"provides"));
if((G__35172__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__35172__$1);
}
}):(function (path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
}));
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),parent_ns);
});
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return goog.object.forEach(goog.object.filter(goog.debugLoader_.dependencies_,(function (dep,path,_){
return cljs.core.not.call(null,cljs.core.some.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_,goog.object.get(dep,"provides")));
})),(function (dep,path,_){
var provides = goog.object.get(dep,"provides");
var requires = goog.object.get(dep,"requires");
var seq__35173 = cljs.core.seq.call(null,provides);
var chunk__35174 = null;
var count__35175 = (0);
var i__35176 = (0);
while(true){
if((i__35176 < count__35175)){
var prov = cljs.core._nth.call(null,chunk__35174,i__35176);
var seq__35185_35197 = cljs.core.seq.call(null,requires);
var chunk__35186_35198 = null;
var count__35187_35199 = (0);
var i__35188_35200 = (0);
while(true){
if((i__35188_35200 < count__35187_35199)){
var req_35201 = cljs.core._nth.call(null,chunk__35186_35198,i__35188_35200);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35201,prov);


var G__35202 = seq__35185_35197;
var G__35203 = chunk__35186_35198;
var G__35204 = count__35187_35199;
var G__35205 = (i__35188_35200 + (1));
seq__35185_35197 = G__35202;
chunk__35186_35198 = G__35203;
count__35187_35199 = G__35204;
i__35188_35200 = G__35205;
continue;
} else {
var temp__5720__auto___35206 = cljs.core.seq.call(null,seq__35185_35197);
if(temp__5720__auto___35206){
var seq__35185_35207__$1 = temp__5720__auto___35206;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35185_35207__$1)){
var c__4556__auto___35208 = cljs.core.chunk_first.call(null,seq__35185_35207__$1);
var G__35209 = cljs.core.chunk_rest.call(null,seq__35185_35207__$1);
var G__35210 = c__4556__auto___35208;
var G__35211 = cljs.core.count.call(null,c__4556__auto___35208);
var G__35212 = (0);
seq__35185_35197 = G__35209;
chunk__35186_35198 = G__35210;
count__35187_35199 = G__35211;
i__35188_35200 = G__35212;
continue;
} else {
var req_35213 = cljs.core.first.call(null,seq__35185_35207__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35213,prov);


var G__35214 = cljs.core.next.call(null,seq__35185_35207__$1);
var G__35215 = null;
var G__35216 = (0);
var G__35217 = (0);
seq__35185_35197 = G__35214;
chunk__35186_35198 = G__35215;
count__35187_35199 = G__35216;
i__35188_35200 = G__35217;
continue;
}
} else {
}
}
break;
}


var G__35218 = seq__35173;
var G__35219 = chunk__35174;
var G__35220 = count__35175;
var G__35221 = (i__35176 + (1));
seq__35173 = G__35218;
chunk__35174 = G__35219;
count__35175 = G__35220;
i__35176 = G__35221;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__35173);
if(temp__5720__auto__){
var seq__35173__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35173__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__35173__$1);
var G__35222 = cljs.core.chunk_rest.call(null,seq__35173__$1);
var G__35223 = c__4556__auto__;
var G__35224 = cljs.core.count.call(null,c__4556__auto__);
var G__35225 = (0);
seq__35173 = G__35222;
chunk__35174 = G__35223;
count__35175 = G__35224;
i__35176 = G__35225;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35173__$1);
var seq__35189_35226 = cljs.core.seq.call(null,requires);
var chunk__35190_35227 = null;
var count__35191_35228 = (0);
var i__35192_35229 = (0);
while(true){
if((i__35192_35229 < count__35191_35228)){
var req_35230 = cljs.core._nth.call(null,chunk__35190_35227,i__35192_35229);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35230,prov);


var G__35231 = seq__35189_35226;
var G__35232 = chunk__35190_35227;
var G__35233 = count__35191_35228;
var G__35234 = (i__35192_35229 + (1));
seq__35189_35226 = G__35231;
chunk__35190_35227 = G__35232;
count__35191_35228 = G__35233;
i__35192_35229 = G__35234;
continue;
} else {
var temp__5720__auto___35235__$1 = cljs.core.seq.call(null,seq__35189_35226);
if(temp__5720__auto___35235__$1){
var seq__35189_35236__$1 = temp__5720__auto___35235__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35189_35236__$1)){
var c__4556__auto___35237 = cljs.core.chunk_first.call(null,seq__35189_35236__$1);
var G__35238 = cljs.core.chunk_rest.call(null,seq__35189_35236__$1);
var G__35239 = c__4556__auto___35237;
var G__35240 = cljs.core.count.call(null,c__4556__auto___35237);
var G__35241 = (0);
seq__35189_35226 = G__35238;
chunk__35190_35227 = G__35239;
count__35191_35228 = G__35240;
i__35192_35229 = G__35241;
continue;
} else {
var req_35242 = cljs.core.first.call(null,seq__35189_35236__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35242,prov);


var G__35243 = cljs.core.next.call(null,seq__35189_35236__$1);
var G__35244 = null;
var G__35245 = (0);
var G__35246 = (0);
seq__35189_35226 = G__35243;
chunk__35190_35227 = G__35244;
count__35191_35228 = G__35245;
i__35192_35229 = G__35246;
continue;
}
} else {
}
}
break;
}


var G__35247 = cljs.core.next.call(null,seq__35173__$1);
var G__35248 = null;
var G__35249 = (0);
var G__35250 = (0);
seq__35173 = G__35247;
chunk__35174 = G__35248;
count__35175 = G__35249;
i__35176 = G__35250;
continue;
}
} else {
return null;
}
}
break;
}
}));
}):(function (){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,(function (deps,path,_){
var seq__35193 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__35194 = null;
var count__35195 = (0);
var i__35196 = (0);
while(true){
if((i__35196 < count__35195)){
var prov = cljs.core._nth.call(null,chunk__35194,i__35196);
goog.object.forEach(deps,((function (seq__35193,chunk__35194,count__35195,i__35196,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__35193,chunk__35194,count__35195,i__35196,prov,requires))
);


var G__35251 = seq__35193;
var G__35252 = chunk__35194;
var G__35253 = count__35195;
var G__35254 = (i__35196 + (1));
seq__35193 = G__35251;
chunk__35194 = G__35252;
count__35195 = G__35253;
i__35196 = G__35254;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__35193);
if(temp__5720__auto__){
var seq__35193__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35193__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__35193__$1);
var G__35255 = cljs.core.chunk_rest.call(null,seq__35193__$1);
var G__35256 = c__4556__auto__;
var G__35257 = cljs.core.count.call(null,c__4556__auto__);
var G__35258 = (0);
seq__35193 = G__35255;
chunk__35194 = G__35256;
count__35195 = G__35257;
i__35196 = G__35258;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35193__$1);
goog.object.forEach(deps,((function (seq__35193,chunk__35194,count__35195,i__35196,prov,seq__35193__$1,temp__5720__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__35193,chunk__35194,count__35195,i__35196,prov,seq__35193__$1,temp__5720__auto__,requires))
);


var G__35259 = cljs.core.next.call(null,seq__35193__$1);
var G__35260 = null;
var G__35261 = (0);
var G__35262 = (0);
seq__35193 = G__35259;
chunk__35194 = G__35260;
count__35195 = G__35261;
i__35196 = G__35262;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__35263){
var vec__35264 = p__35263;
var _ = cljs.core.nth.call(null,vec__35264,(0),null);
var v = cljs.core.nth.call(null,vec__35264,(1),null);
var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return v.call(null,dep);
} else {
return and__4115__auto__;
}
}),cljs.core.filter.call(null,(function (p__35267){
var vec__35268 = p__35267;
var k = cljs.core.nth.call(null,vec__35268,(0),null);
var v = cljs.core.nth.call(null,vec__35268,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__35280_35288 = cljs.core.seq.call(null,deps);
var chunk__35281_35289 = null;
var count__35282_35290 = (0);
var i__35283_35291 = (0);
while(true){
if((i__35283_35291 < count__35282_35290)){
var dep_35292 = cljs.core._nth.call(null,chunk__35281_35289,i__35283_35291);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_35292;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_35292));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_35292,(depth + (1)),state);
} else {
}


var G__35293 = seq__35280_35288;
var G__35294 = chunk__35281_35289;
var G__35295 = count__35282_35290;
var G__35296 = (i__35283_35291 + (1));
seq__35280_35288 = G__35293;
chunk__35281_35289 = G__35294;
count__35282_35290 = G__35295;
i__35283_35291 = G__35296;
continue;
} else {
var temp__5720__auto___35297 = cljs.core.seq.call(null,seq__35280_35288);
if(temp__5720__auto___35297){
var seq__35280_35298__$1 = temp__5720__auto___35297;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35280_35298__$1)){
var c__4556__auto___35299 = cljs.core.chunk_first.call(null,seq__35280_35298__$1);
var G__35300 = cljs.core.chunk_rest.call(null,seq__35280_35298__$1);
var G__35301 = c__4556__auto___35299;
var G__35302 = cljs.core.count.call(null,c__4556__auto___35299);
var G__35303 = (0);
seq__35280_35288 = G__35300;
chunk__35281_35289 = G__35301;
count__35282_35290 = G__35302;
i__35283_35291 = G__35303;
continue;
} else {
var dep_35304 = cljs.core.first.call(null,seq__35280_35298__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_35304;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_35304));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_35304,(depth + (1)),state);
} else {
}


var G__35305 = cljs.core.next.call(null,seq__35280_35298__$1);
var G__35306 = null;
var G__35307 = (0);
var G__35308 = (0);
seq__35280_35288 = G__35305;
chunk__35281_35289 = G__35306;
count__35282_35290 = G__35307;
i__35283_35291 = G__35308;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__35284){
var vec__35285 = p__35284;
var seq__35286 = cljs.core.seq.call(null,vec__35285);
var first__35287 = cljs.core.first.call(null,seq__35286);
var seq__35286__$1 = cljs.core.next.call(null,seq__35286);
var x = first__35287;
var xs = seq__35286__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__35271_SHARP_){
return clojure.set.difference.call(null,p1__35271_SHARP_,x);
}),xs)));
}
});
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.debugLoader_.written_,path);

return goog.object.remove(goog.debugLoader_.written_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}):(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}));
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__35309_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__35309_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__35310 = cljs.core.seq.call(null,provides);
var chunk__35311 = null;
var count__35312 = (0);
var i__35313 = (0);
while(true){
if((i__35313 < count__35312)){
var prov = cljs.core._nth.call(null,chunk__35311,i__35313);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35322_35330 = cljs.core.seq.call(null,requires);
var chunk__35323_35331 = null;
var count__35324_35332 = (0);
var i__35325_35333 = (0);
while(true){
if((i__35325_35333 < count__35324_35332)){
var req_35334 = cljs.core._nth.call(null,chunk__35323_35331,i__35325_35333);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35334,prov);


var G__35335 = seq__35322_35330;
var G__35336 = chunk__35323_35331;
var G__35337 = count__35324_35332;
var G__35338 = (i__35325_35333 + (1));
seq__35322_35330 = G__35335;
chunk__35323_35331 = G__35336;
count__35324_35332 = G__35337;
i__35325_35333 = G__35338;
continue;
} else {
var temp__5720__auto___35339 = cljs.core.seq.call(null,seq__35322_35330);
if(temp__5720__auto___35339){
var seq__35322_35340__$1 = temp__5720__auto___35339;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35322_35340__$1)){
var c__4556__auto___35341 = cljs.core.chunk_first.call(null,seq__35322_35340__$1);
var G__35342 = cljs.core.chunk_rest.call(null,seq__35322_35340__$1);
var G__35343 = c__4556__auto___35341;
var G__35344 = cljs.core.count.call(null,c__4556__auto___35341);
var G__35345 = (0);
seq__35322_35330 = G__35342;
chunk__35323_35331 = G__35343;
count__35324_35332 = G__35344;
i__35325_35333 = G__35345;
continue;
} else {
var req_35346 = cljs.core.first.call(null,seq__35322_35340__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35346,prov);


var G__35347 = cljs.core.next.call(null,seq__35322_35340__$1);
var G__35348 = null;
var G__35349 = (0);
var G__35350 = (0);
seq__35322_35330 = G__35347;
chunk__35323_35331 = G__35348;
count__35324_35332 = G__35349;
i__35325_35333 = G__35350;
continue;
}
} else {
}
}
break;
}


var G__35351 = seq__35310;
var G__35352 = chunk__35311;
var G__35353 = count__35312;
var G__35354 = (i__35313 + (1));
seq__35310 = G__35351;
chunk__35311 = G__35352;
count__35312 = G__35353;
i__35313 = G__35354;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__35310);
if(temp__5720__auto__){
var seq__35310__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35310__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__35310__$1);
var G__35355 = cljs.core.chunk_rest.call(null,seq__35310__$1);
var G__35356 = c__4556__auto__;
var G__35357 = cljs.core.count.call(null,c__4556__auto__);
var G__35358 = (0);
seq__35310 = G__35355;
chunk__35311 = G__35356;
count__35312 = G__35357;
i__35313 = G__35358;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35310__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35326_35359 = cljs.core.seq.call(null,requires);
var chunk__35327_35360 = null;
var count__35328_35361 = (0);
var i__35329_35362 = (0);
while(true){
if((i__35329_35362 < count__35328_35361)){
var req_35363 = cljs.core._nth.call(null,chunk__35327_35360,i__35329_35362);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35363,prov);


var G__35364 = seq__35326_35359;
var G__35365 = chunk__35327_35360;
var G__35366 = count__35328_35361;
var G__35367 = (i__35329_35362 + (1));
seq__35326_35359 = G__35364;
chunk__35327_35360 = G__35365;
count__35328_35361 = G__35366;
i__35329_35362 = G__35367;
continue;
} else {
var temp__5720__auto___35368__$1 = cljs.core.seq.call(null,seq__35326_35359);
if(temp__5720__auto___35368__$1){
var seq__35326_35369__$1 = temp__5720__auto___35368__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35326_35369__$1)){
var c__4556__auto___35370 = cljs.core.chunk_first.call(null,seq__35326_35369__$1);
var G__35371 = cljs.core.chunk_rest.call(null,seq__35326_35369__$1);
var G__35372 = c__4556__auto___35370;
var G__35373 = cljs.core.count.call(null,c__4556__auto___35370);
var G__35374 = (0);
seq__35326_35359 = G__35371;
chunk__35327_35360 = G__35372;
count__35328_35361 = G__35373;
i__35329_35362 = G__35374;
continue;
} else {
var req_35375 = cljs.core.first.call(null,seq__35326_35369__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35375,prov);


var G__35376 = cljs.core.next.call(null,seq__35326_35369__$1);
var G__35377 = null;
var G__35378 = (0);
var G__35379 = (0);
seq__35326_35359 = G__35376;
chunk__35327_35360 = G__35377;
count__35328_35361 = G__35378;
i__35329_35362 = G__35379;
continue;
}
} else {
}
}
break;
}


var G__35380 = cljs.core.next.call(null,seq__35310__$1);
var G__35381 = null;
var G__35382 = (0);
var G__35383 = (0);
seq__35310 = G__35380;
chunk__35311 = G__35381;
count__35312 = G__35382;
i__35313 = G__35383;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__35384_35388 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35385_35389 = null;
var count__35386_35390 = (0);
var i__35387_35391 = (0);
while(true){
if((i__35387_35391 < count__35386_35390)){
var ns_35392 = cljs.core._nth.call(null,chunk__35385_35389,i__35387_35391);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35392);


var G__35393 = seq__35384_35388;
var G__35394 = chunk__35385_35389;
var G__35395 = count__35386_35390;
var G__35396 = (i__35387_35391 + (1));
seq__35384_35388 = G__35393;
chunk__35385_35389 = G__35394;
count__35386_35390 = G__35395;
i__35387_35391 = G__35396;
continue;
} else {
var temp__5720__auto___35397 = cljs.core.seq.call(null,seq__35384_35388);
if(temp__5720__auto___35397){
var seq__35384_35398__$1 = temp__5720__auto___35397;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35384_35398__$1)){
var c__4556__auto___35399 = cljs.core.chunk_first.call(null,seq__35384_35398__$1);
var G__35400 = cljs.core.chunk_rest.call(null,seq__35384_35398__$1);
var G__35401 = c__4556__auto___35399;
var G__35402 = cljs.core.count.call(null,c__4556__auto___35399);
var G__35403 = (0);
seq__35384_35388 = G__35400;
chunk__35385_35389 = G__35401;
count__35386_35390 = G__35402;
i__35387_35391 = G__35403;
continue;
} else {
var ns_35404 = cljs.core.first.call(null,seq__35384_35398__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35404);


var G__35405 = cljs.core.next.call(null,seq__35384_35398__$1);
var G__35406 = null;
var G__35407 = (0);
var G__35408 = (0);
seq__35384_35388 = G__35405;
chunk__35385_35389 = G__35406;
count__35386_35390 = G__35407;
i__35387_35391 = G__35408;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
(goog.require_figwheel_backup_ = (function (){var or__4126__auto__ = goog.require__;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__35409__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35409 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35410__i = 0, G__35410__a = new Array(arguments.length -  0);
while (G__35410__i < G__35410__a.length) {G__35410__a[G__35410__i] = arguments[G__35410__i + 0]; ++G__35410__i;}
  args = new cljs.core.IndexedSeq(G__35410__a,0,null);
} 
return G__35409__delegate.call(this,args);};
G__35409.cljs$lang$maxFixedArity = 0;
G__35409.cljs$lang$applyTo = (function (arglist__35411){
var args = cljs.core.seq(arglist__35411);
return G__35409__delegate(args);
});
G__35409.cljs$core$IFn$_invoke$arity$variadic = G__35409__delegate;
return G__35409;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__35412_SHARP_,p2__35413_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35412_SHARP_)),p2__35413_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__35414_SHARP_,p2__35415_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35414_SHARP_),p2__35415_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__35416 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__35416.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__35416.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__35416;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e35417){if((e35417 instanceof Error)){
var e = e35417;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35417;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35418){if((e35418 instanceof Error)){
var e = e35418;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35418;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35419 = cljs.core._EQ_;
var expr__35420 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35419.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35420))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__35419.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35420))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__35419.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__35420))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35422,callback){
var map__35423 = p__35422;
var map__35423__$1 = (((((!((map__35423 == null))))?(((((map__35423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35423):map__35423);
var file_msg = map__35423__$1;
var request_url = cljs.core.get.call(null,map__35423__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4126__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__33152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33153__auto__ = (function (){var switch__33057__auto__ = (function (state_35461){
var state_val_35462 = (state_35461[(1)]);
if((state_val_35462 === (7))){
var inst_35457 = (state_35461[(2)]);
var state_35461__$1 = state_35461;
var statearr_35463_35489 = state_35461__$1;
(statearr_35463_35489[(2)] = inst_35457);

(statearr_35463_35489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35462 === (1))){
var state_35461__$1 = state_35461;
var statearr_35464_35490 = state_35461__$1;
(statearr_35464_35490[(2)] = null);

(statearr_35464_35490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35462 === (4))){
var inst_35427 = (state_35461[(7)]);
var inst_35427__$1 = (state_35461[(2)]);
var state_35461__$1 = (function (){var statearr_35465 = state_35461;
(statearr_35465[(7)] = inst_35427__$1);

return statearr_35465;
})();
if(cljs.core.truth_(inst_35427__$1)){
var statearr_35466_35491 = state_35461__$1;
(statearr_35466_35491[(1)] = (5));

} else {
var statearr_35467_35492 = state_35461__$1;
(statearr_35467_35492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35462 === (15))){
var inst_35442 = (state_35461[(8)]);
var inst_35440 = (state_35461[(9)]);
var inst_35444 = inst_35442.call(null,inst_35440);
var state_35461__$1 = state_35461;
var statearr_35468_35493 = state_35461__$1;
(statearr_35468_35493[(2)] = inst_35444);

(statearr_35468_35493[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35462 === (13))){
var inst_35451 = (state_35461[(2)]);
var state_35461__$1 = state_35461;
var statearr_35469_35494 = state_35461__$1;
(statearr_35469_35494[(2)] = inst_35451);

(statearr_35469_35494[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35462 === (6))){
var state_35461__$1 = state_35461;
var statearr_35470_35495 = state_35461__$1;
(statearr_35470_35495[(2)] = null);

(statearr_35470_35495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35462 === (17))){
var inst_35448 = (state_35461[(2)]);
var state_35461__$1 = state_35461;
var statearr_35471_35496 = state_35461__$1;
(statearr_35471_35496[(2)] = inst_35448);

(statearr_35471_35496[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35462 === (3))){
var inst_35459 = (state_35461[(2)]);
var state_35461__$1 = state_35461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35461__$1,inst_35459);
} else {
if((state_val_35462 === (12))){
var state_35461__$1 = state_35461;
var statearr_35472_35497 = state_35461__$1;
(statearr_35472_35497[(2)] = null);

(statearr_35472_35497[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35462 === (2))){
var state_35461__$1 = state_35461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35461__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35462 === (11))){
var inst_35432 = (state_35461[(10)]);
var inst_35438 = figwheel.client.file_reloading.blocking_load.call(null,inst_35432);
var state_35461__$1 = state_35461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35461__$1,(14),inst_35438);
} else {
if((state_val_35462 === (9))){
var inst_35432 = (state_35461[(10)]);
var state_35461__$1 = state_35461;
if(cljs.core.truth_(inst_35432)){
var statearr_35473_35498 = state_35461__$1;
(statearr_35473_35498[(1)] = (11));

} else {
var statearr_35474_35499 = state_35461__$1;
(statearr_35474_35499[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35462 === (5))){
var inst_35427 = (state_35461[(7)]);
var inst_35433 = (state_35461[(11)]);
var inst_35432 = cljs.core.nth.call(null,inst_35427,(0),null);
var inst_35433__$1 = cljs.core.nth.call(null,inst_35427,(1),null);
var state_35461__$1 = (function (){var statearr_35475 = state_35461;
(statearr_35475[(10)] = inst_35432);

(statearr_35475[(11)] = inst_35433__$1);

return statearr_35475;
})();
if(cljs.core.truth_(inst_35433__$1)){
var statearr_35476_35500 = state_35461__$1;
(statearr_35476_35500[(1)] = (8));

} else {
var statearr_35477_35501 = state_35461__$1;
(statearr_35477_35501[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35462 === (14))){
var inst_35442 = (state_35461[(8)]);
var inst_35432 = (state_35461[(10)]);
var inst_35440 = (state_35461[(2)]);
var inst_35441 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35442__$1 = cljs.core.get.call(null,inst_35441,inst_35432);
var state_35461__$1 = (function (){var statearr_35478 = state_35461;
(statearr_35478[(8)] = inst_35442__$1);

(statearr_35478[(9)] = inst_35440);

return statearr_35478;
})();
if(cljs.core.truth_(inst_35442__$1)){
var statearr_35479_35502 = state_35461__$1;
(statearr_35479_35502[(1)] = (15));

} else {
var statearr_35480_35503 = state_35461__$1;
(statearr_35480_35503[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35462 === (16))){
var inst_35440 = (state_35461[(9)]);
var inst_35446 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35440);
var state_35461__$1 = state_35461;
var statearr_35481_35504 = state_35461__$1;
(statearr_35481_35504[(2)] = inst_35446);

(statearr_35481_35504[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35462 === (10))){
var inst_35453 = (state_35461[(2)]);
var state_35461__$1 = (function (){var statearr_35482 = state_35461;
(statearr_35482[(12)] = inst_35453);

return statearr_35482;
})();
var statearr_35483_35505 = state_35461__$1;
(statearr_35483_35505[(2)] = null);

(statearr_35483_35505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35462 === (8))){
var inst_35433 = (state_35461[(11)]);
var inst_35435 = eval(inst_35433);
var state_35461__$1 = state_35461;
var statearr_35484_35506 = state_35461__$1;
(statearr_35484_35506[(2)] = inst_35435);

(statearr_35484_35506[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__33058__auto__ = null;
var figwheel$client$file_reloading$state_machine__33058__auto____0 = (function (){
var statearr_35485 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35485[(0)] = figwheel$client$file_reloading$state_machine__33058__auto__);

(statearr_35485[(1)] = (1));

return statearr_35485;
});
var figwheel$client$file_reloading$state_machine__33058__auto____1 = (function (state_35461){
while(true){
var ret_value__33059__auto__ = (function (){try{while(true){
var result__33060__auto__ = switch__33057__auto__.call(null,state_35461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33060__auto__;
}
break;
}
}catch (e35486){if((e35486 instanceof Object)){
var ex__33061__auto__ = e35486;
var statearr_35487_35507 = state_35461;
(statearr_35487_35507[(5)] = ex__33061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35508 = state_35461;
state_35461 = G__35508;
continue;
} else {
return ret_value__33059__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33058__auto__ = function(state_35461){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33058__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33058__auto____1.call(this,state_35461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33058__auto____0;
figwheel$client$file_reloading$state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33058__auto____1;
return figwheel$client$file_reloading$state_machine__33058__auto__;
})()
})();
var state__33154__auto__ = (function (){var statearr_35488 = f__33153__auto__.call(null);
(statearr_35488[(6)] = c__33152__auto__);

return statearr_35488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33154__auto__);
}));

return c__33152__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__35510 = arguments.length;
switch (G__35510) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35512,callback){
var map__35513 = p__35512;
var map__35513__$1 = (((((!((map__35513 == null))))?(((((map__35513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35513):map__35513);
var file_msg = map__35513__$1;
var namespace = cljs.core.get.call(null,map__35513__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__35515){
var map__35516 = p__35515;
var map__35516__$1 = (((((!((map__35516 == null))))?(((((map__35516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35516):map__35516);
var file_msg = map__35516__$1;
var namespace = cljs.core.get.call(null,map__35516__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35518){
var map__35519 = p__35518;
var map__35519__$1 = (((((!((map__35519 == null))))?(((((map__35519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35519):map__35519);
var file_msg = map__35519__$1;
var namespace = cljs.core.get.call(null,map__35519__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if(cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg))){
var or__4126__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return false;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35521,callback){
var map__35522 = p__35521;
var map__35522__$1 = (((((!((map__35522 == null))))?(((((map__35522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35522):map__35522);
var file_msg = map__35522__$1;
var request_url = cljs.core.get.call(null,map__35522__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35522__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__33152__auto___35572 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33153__auto__ = (function (){var switch__33057__auto__ = (function (state_35557){
var state_val_35558 = (state_35557[(1)]);
if((state_val_35558 === (1))){
var inst_35531 = cljs.core.seq.call(null,files);
var inst_35532 = cljs.core.first.call(null,inst_35531);
var inst_35533 = cljs.core.next.call(null,inst_35531);
var inst_35534 = files;
var state_35557__$1 = (function (){var statearr_35559 = state_35557;
(statearr_35559[(7)] = inst_35533);

(statearr_35559[(8)] = inst_35532);

(statearr_35559[(9)] = inst_35534);

return statearr_35559;
})();
var statearr_35560_35573 = state_35557__$1;
(statearr_35560_35573[(2)] = null);

(statearr_35560_35573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35558 === (2))){
var inst_35540 = (state_35557[(10)]);
var inst_35534 = (state_35557[(9)]);
var inst_35539 = cljs.core.seq.call(null,inst_35534);
var inst_35540__$1 = cljs.core.first.call(null,inst_35539);
var inst_35541 = cljs.core.next.call(null,inst_35539);
var inst_35542 = (inst_35540__$1 == null);
var inst_35543 = cljs.core.not.call(null,inst_35542);
var state_35557__$1 = (function (){var statearr_35561 = state_35557;
(statearr_35561[(10)] = inst_35540__$1);

(statearr_35561[(11)] = inst_35541);

return statearr_35561;
})();
if(inst_35543){
var statearr_35562_35574 = state_35557__$1;
(statearr_35562_35574[(1)] = (4));

} else {
var statearr_35563_35575 = state_35557__$1;
(statearr_35563_35575[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35558 === (3))){
var inst_35555 = (state_35557[(2)]);
var state_35557__$1 = state_35557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35557__$1,inst_35555);
} else {
if((state_val_35558 === (4))){
var inst_35540 = (state_35557[(10)]);
var inst_35545 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35540);
var state_35557__$1 = state_35557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35557__$1,(7),inst_35545);
} else {
if((state_val_35558 === (5))){
var inst_35551 = cljs.core.async.close_BANG_.call(null,out);
var state_35557__$1 = state_35557;
var statearr_35564_35576 = state_35557__$1;
(statearr_35564_35576[(2)] = inst_35551);

(statearr_35564_35576[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35558 === (6))){
var inst_35553 = (state_35557[(2)]);
var state_35557__$1 = state_35557;
var statearr_35565_35577 = state_35557__$1;
(statearr_35565_35577[(2)] = inst_35553);

(statearr_35565_35577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35558 === (7))){
var inst_35541 = (state_35557[(11)]);
var inst_35547 = (state_35557[(2)]);
var inst_35548 = cljs.core.async.put_BANG_.call(null,out,inst_35547);
var inst_35534 = inst_35541;
var state_35557__$1 = (function (){var statearr_35566 = state_35557;
(statearr_35566[(12)] = inst_35548);

(statearr_35566[(9)] = inst_35534);

return statearr_35566;
})();
var statearr_35567_35578 = state_35557__$1;
(statearr_35567_35578[(2)] = null);

(statearr_35567_35578[(1)] = (2));


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
});
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33058__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33058__auto____0 = (function (){
var statearr_35568 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35568[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33058__auto__);

(statearr_35568[(1)] = (1));

return statearr_35568;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33058__auto____1 = (function (state_35557){
while(true){
var ret_value__33059__auto__ = (function (){try{while(true){
var result__33060__auto__ = switch__33057__auto__.call(null,state_35557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33060__auto__;
}
break;
}
}catch (e35569){if((e35569 instanceof Object)){
var ex__33061__auto__ = e35569;
var statearr_35570_35579 = state_35557;
(statearr_35570_35579[(5)] = ex__33061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35569;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35580 = state_35557;
state_35557 = G__35580;
continue;
} else {
return ret_value__33059__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33058__auto__ = function(state_35557){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33058__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33058__auto____1.call(this,state_35557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33058__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33058__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33058__auto__;
})()
})();
var state__33154__auto__ = (function (){var statearr_35571 = f__33153__auto__.call(null);
(statearr_35571[(6)] = c__33152__auto___35572);

return statearr_35571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33154__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35581,opts){
var map__35582 = p__35581;
var map__35582__$1 = (((((!((map__35582 == null))))?(((((map__35582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35582):map__35582);
var eval_body = cljs.core.get.call(null,map__35582__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35582__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4115__auto__ = eval_body;
if(cljs.core.truth_(and__4115__auto__)){
return typeof eval_body === 'string';
} else {
return and__4115__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e35584){var e = e35584;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__35585_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35585_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__35586){
var vec__35587 = p__35586;
var k = cljs.core.nth.call(null,vec__35587,(0),null);
var v = cljs.core.nth.call(null,vec__35587,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35590){
var vec__35591 = p__35590;
var k = cljs.core.nth.call(null,vec__35591,(0),null);
var v = cljs.core.nth.call(null,vec__35591,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35597,p__35598){
var map__35599 = p__35597;
var map__35599__$1 = (((((!((map__35599 == null))))?(((((map__35599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35599):map__35599);
var opts = map__35599__$1;
var before_jsload = cljs.core.get.call(null,map__35599__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35599__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35599__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35600 = p__35598;
var map__35600__$1 = (((((!((map__35600 == null))))?(((((map__35600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35600):map__35600);
var msg = map__35600__$1;
var files = cljs.core.get.call(null,map__35600__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35600__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35600__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33153__auto__ = (function (){var switch__33057__auto__ = (function (state_35754){
var state_val_35755 = (state_35754[(1)]);
if((state_val_35755 === (7))){
var inst_35615 = (state_35754[(7)]);
var inst_35617 = (state_35754[(8)]);
var inst_35616 = (state_35754[(9)]);
var inst_35614 = (state_35754[(10)]);
var inst_35622 = cljs.core._nth.call(null,inst_35615,inst_35617);
var inst_35623 = figwheel.client.file_reloading.eval_body.call(null,inst_35622,opts);
var inst_35624 = (inst_35617 + (1));
var tmp35756 = inst_35615;
var tmp35757 = inst_35616;
var tmp35758 = inst_35614;
var inst_35614__$1 = tmp35758;
var inst_35615__$1 = tmp35756;
var inst_35616__$1 = tmp35757;
var inst_35617__$1 = inst_35624;
var state_35754__$1 = (function (){var statearr_35759 = state_35754;
(statearr_35759[(7)] = inst_35615__$1);

(statearr_35759[(8)] = inst_35617__$1);

(statearr_35759[(9)] = inst_35616__$1);

(statearr_35759[(11)] = inst_35623);

(statearr_35759[(10)] = inst_35614__$1);

return statearr_35759;
})();
var statearr_35760_35843 = state_35754__$1;
(statearr_35760_35843[(2)] = null);

(statearr_35760_35843[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (20))){
var inst_35657 = (state_35754[(12)]);
var inst_35665 = figwheel.client.file_reloading.sort_files.call(null,inst_35657);
var state_35754__$1 = state_35754;
var statearr_35761_35844 = state_35754__$1;
(statearr_35761_35844[(2)] = inst_35665);

(statearr_35761_35844[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (27))){
var state_35754__$1 = state_35754;
var statearr_35762_35845 = state_35754__$1;
(statearr_35762_35845[(2)] = null);

(statearr_35762_35845[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (1))){
var inst_35606 = (state_35754[(13)]);
var inst_35603 = before_jsload.call(null,files);
var inst_35604 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35605 = (function (){return (function (p1__35594_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35594_SHARP_);
});
})();
var inst_35606__$1 = cljs.core.filter.call(null,inst_35605,files);
var inst_35607 = cljs.core.not_empty.call(null,inst_35606__$1);
var state_35754__$1 = (function (){var statearr_35763 = state_35754;
(statearr_35763[(14)] = inst_35603);

(statearr_35763[(13)] = inst_35606__$1);

(statearr_35763[(15)] = inst_35604);

return statearr_35763;
})();
if(cljs.core.truth_(inst_35607)){
var statearr_35764_35846 = state_35754__$1;
(statearr_35764_35846[(1)] = (2));

} else {
var statearr_35765_35847 = state_35754__$1;
(statearr_35765_35847[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (24))){
var state_35754__$1 = state_35754;
var statearr_35766_35848 = state_35754__$1;
(statearr_35766_35848[(2)] = null);

(statearr_35766_35848[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (39))){
var inst_35707 = (state_35754[(16)]);
var state_35754__$1 = state_35754;
var statearr_35767_35849 = state_35754__$1;
(statearr_35767_35849[(2)] = inst_35707);

(statearr_35767_35849[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (46))){
var inst_35749 = (state_35754[(2)]);
var state_35754__$1 = state_35754;
var statearr_35768_35850 = state_35754__$1;
(statearr_35768_35850[(2)] = inst_35749);

(statearr_35768_35850[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (4))){
var inst_35651 = (state_35754[(2)]);
var inst_35652 = cljs.core.List.EMPTY;
var inst_35653 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35652);
var inst_35654 = (function (){return (function (p1__35595_SHARP_){
var and__4115__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35595_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35595_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__35595_SHARP_))));
} else {
return and__4115__auto__;
}
});
})();
var inst_35655 = cljs.core.filter.call(null,inst_35654,files);
var inst_35656 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35657 = cljs.core.concat.call(null,inst_35655,inst_35656);
var state_35754__$1 = (function (){var statearr_35769 = state_35754;
(statearr_35769[(12)] = inst_35657);

(statearr_35769[(17)] = inst_35651);

(statearr_35769[(18)] = inst_35653);

return statearr_35769;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35770_35851 = state_35754__$1;
(statearr_35770_35851[(1)] = (16));

} else {
var statearr_35771_35852 = state_35754__$1;
(statearr_35771_35852[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (15))){
var inst_35641 = (state_35754[(2)]);
var state_35754__$1 = state_35754;
var statearr_35772_35853 = state_35754__$1;
(statearr_35772_35853[(2)] = inst_35641);

(statearr_35772_35853[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (21))){
var inst_35667 = (state_35754[(19)]);
var inst_35667__$1 = (state_35754[(2)]);
var inst_35668 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35667__$1);
var state_35754__$1 = (function (){var statearr_35773 = state_35754;
(statearr_35773[(19)] = inst_35667__$1);

return statearr_35773;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35754__$1,(22),inst_35668);
} else {
if((state_val_35755 === (31))){
var inst_35752 = (state_35754[(2)]);
var state_35754__$1 = state_35754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35754__$1,inst_35752);
} else {
if((state_val_35755 === (32))){
var inst_35707 = (state_35754[(16)]);
var inst_35712 = inst_35707.cljs$lang$protocol_mask$partition0$;
var inst_35713 = (inst_35712 & (64));
var inst_35714 = inst_35707.cljs$core$ISeq$;
var inst_35715 = (cljs.core.PROTOCOL_SENTINEL === inst_35714);
var inst_35716 = ((inst_35713) || (inst_35715));
var state_35754__$1 = state_35754;
if(cljs.core.truth_(inst_35716)){
var statearr_35774_35854 = state_35754__$1;
(statearr_35774_35854[(1)] = (35));

} else {
var statearr_35775_35855 = state_35754__$1;
(statearr_35775_35855[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (40))){
var inst_35729 = (state_35754[(20)]);
var inst_35728 = (state_35754[(2)]);
var inst_35729__$1 = cljs.core.get.call(null,inst_35728,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35730 = cljs.core.get.call(null,inst_35728,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35731 = cljs.core.not_empty.call(null,inst_35729__$1);
var state_35754__$1 = (function (){var statearr_35776 = state_35754;
(statearr_35776[(21)] = inst_35730);

(statearr_35776[(20)] = inst_35729__$1);

return statearr_35776;
})();
if(cljs.core.truth_(inst_35731)){
var statearr_35777_35856 = state_35754__$1;
(statearr_35777_35856[(1)] = (41));

} else {
var statearr_35778_35857 = state_35754__$1;
(statearr_35778_35857[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (33))){
var state_35754__$1 = state_35754;
var statearr_35779_35858 = state_35754__$1;
(statearr_35779_35858[(2)] = false);

(statearr_35779_35858[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (13))){
var inst_35627 = (state_35754[(22)]);
var inst_35631 = cljs.core.chunk_first.call(null,inst_35627);
var inst_35632 = cljs.core.chunk_rest.call(null,inst_35627);
var inst_35633 = cljs.core.count.call(null,inst_35631);
var inst_35614 = inst_35632;
var inst_35615 = inst_35631;
var inst_35616 = inst_35633;
var inst_35617 = (0);
var state_35754__$1 = (function (){var statearr_35780 = state_35754;
(statearr_35780[(7)] = inst_35615);

(statearr_35780[(8)] = inst_35617);

(statearr_35780[(9)] = inst_35616);

(statearr_35780[(10)] = inst_35614);

return statearr_35780;
})();
var statearr_35781_35859 = state_35754__$1;
(statearr_35781_35859[(2)] = null);

(statearr_35781_35859[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (22))){
var inst_35667 = (state_35754[(19)]);
var inst_35671 = (state_35754[(23)]);
var inst_35675 = (state_35754[(24)]);
var inst_35670 = (state_35754[(25)]);
var inst_35670__$1 = (state_35754[(2)]);
var inst_35671__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35670__$1);
var inst_35672 = (function (){var all_files = inst_35667;
var res_SINGLEQUOTE_ = inst_35670__$1;
var res = inst_35671__$1;
return (function (p1__35596_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35596_SHARP_));
});
})();
var inst_35673 = cljs.core.filter.call(null,inst_35672,inst_35670__$1);
var inst_35674 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35675__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35674);
var inst_35676 = cljs.core.not_empty.call(null,inst_35675__$1);
var state_35754__$1 = (function (){var statearr_35782 = state_35754;
(statearr_35782[(26)] = inst_35673);

(statearr_35782[(23)] = inst_35671__$1);

(statearr_35782[(24)] = inst_35675__$1);

(statearr_35782[(25)] = inst_35670__$1);

return statearr_35782;
})();
if(cljs.core.truth_(inst_35676)){
var statearr_35783_35860 = state_35754__$1;
(statearr_35783_35860[(1)] = (23));

} else {
var statearr_35784_35861 = state_35754__$1;
(statearr_35784_35861[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (36))){
var state_35754__$1 = state_35754;
var statearr_35785_35862 = state_35754__$1;
(statearr_35785_35862[(2)] = false);

(statearr_35785_35862[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (41))){
var inst_35729 = (state_35754[(20)]);
var inst_35733 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35734 = cljs.core.map.call(null,inst_35733,inst_35729);
var inst_35735 = cljs.core.pr_str.call(null,inst_35734);
var inst_35736 = ["figwheel-no-load meta-data: ",inst_35735].join('');
var inst_35737 = figwheel.client.utils.log.call(null,inst_35736);
var state_35754__$1 = state_35754;
var statearr_35786_35863 = state_35754__$1;
(statearr_35786_35863[(2)] = inst_35737);

(statearr_35786_35863[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (43))){
var inst_35730 = (state_35754[(21)]);
var inst_35740 = (state_35754[(2)]);
var inst_35741 = cljs.core.not_empty.call(null,inst_35730);
var state_35754__$1 = (function (){var statearr_35787 = state_35754;
(statearr_35787[(27)] = inst_35740);

return statearr_35787;
})();
if(cljs.core.truth_(inst_35741)){
var statearr_35788_35864 = state_35754__$1;
(statearr_35788_35864[(1)] = (44));

} else {
var statearr_35789_35865 = state_35754__$1;
(statearr_35789_35865[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (29))){
var inst_35673 = (state_35754[(26)]);
var inst_35667 = (state_35754[(19)]);
var inst_35671 = (state_35754[(23)]);
var inst_35707 = (state_35754[(16)]);
var inst_35675 = (state_35754[(24)]);
var inst_35670 = (state_35754[(25)]);
var inst_35703 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35706 = (function (){var all_files = inst_35667;
var res_SINGLEQUOTE_ = inst_35670;
var res = inst_35671;
var files_not_loaded = inst_35673;
var dependencies_that_loaded = inst_35675;
return (function (p__35705){
var map__35790 = p__35705;
var map__35790__$1 = (((((!((map__35790 == null))))?(((((map__35790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35790):map__35790);
var namespace = cljs.core.get.call(null,map__35790__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
})();
var inst_35707__$1 = cljs.core.group_by.call(null,inst_35706,inst_35673);
var inst_35709 = (inst_35707__$1 == null);
var inst_35710 = cljs.core.not.call(null,inst_35709);
var state_35754__$1 = (function (){var statearr_35792 = state_35754;
(statearr_35792[(28)] = inst_35703);

(statearr_35792[(16)] = inst_35707__$1);

return statearr_35792;
})();
if(inst_35710){
var statearr_35793_35866 = state_35754__$1;
(statearr_35793_35866[(1)] = (32));

} else {
var statearr_35794_35867 = state_35754__$1;
(statearr_35794_35867[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (44))){
var inst_35730 = (state_35754[(21)]);
var inst_35743 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35730);
var inst_35744 = cljs.core.pr_str.call(null,inst_35743);
var inst_35745 = ["not required: ",inst_35744].join('');
var inst_35746 = figwheel.client.utils.log.call(null,inst_35745);
var state_35754__$1 = state_35754;
var statearr_35795_35868 = state_35754__$1;
(statearr_35795_35868[(2)] = inst_35746);

(statearr_35795_35868[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (6))){
var inst_35648 = (state_35754[(2)]);
var state_35754__$1 = state_35754;
var statearr_35796_35869 = state_35754__$1;
(statearr_35796_35869[(2)] = inst_35648);

(statearr_35796_35869[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (28))){
var inst_35673 = (state_35754[(26)]);
var inst_35700 = (state_35754[(2)]);
var inst_35701 = cljs.core.not_empty.call(null,inst_35673);
var state_35754__$1 = (function (){var statearr_35797 = state_35754;
(statearr_35797[(29)] = inst_35700);

return statearr_35797;
})();
if(cljs.core.truth_(inst_35701)){
var statearr_35798_35870 = state_35754__$1;
(statearr_35798_35870[(1)] = (29));

} else {
var statearr_35799_35871 = state_35754__$1;
(statearr_35799_35871[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (25))){
var inst_35671 = (state_35754[(23)]);
var inst_35687 = (state_35754[(2)]);
var inst_35688 = cljs.core.not_empty.call(null,inst_35671);
var state_35754__$1 = (function (){var statearr_35800 = state_35754;
(statearr_35800[(30)] = inst_35687);

return statearr_35800;
})();
if(cljs.core.truth_(inst_35688)){
var statearr_35801_35872 = state_35754__$1;
(statearr_35801_35872[(1)] = (26));

} else {
var statearr_35802_35873 = state_35754__$1;
(statearr_35802_35873[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (34))){
var inst_35723 = (state_35754[(2)]);
var state_35754__$1 = state_35754;
if(cljs.core.truth_(inst_35723)){
var statearr_35803_35874 = state_35754__$1;
(statearr_35803_35874[(1)] = (38));

} else {
var statearr_35804_35875 = state_35754__$1;
(statearr_35804_35875[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (17))){
var state_35754__$1 = state_35754;
var statearr_35805_35876 = state_35754__$1;
(statearr_35805_35876[(2)] = recompile_dependents);

(statearr_35805_35876[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (3))){
var state_35754__$1 = state_35754;
var statearr_35806_35877 = state_35754__$1;
(statearr_35806_35877[(2)] = null);

(statearr_35806_35877[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (12))){
var inst_35644 = (state_35754[(2)]);
var state_35754__$1 = state_35754;
var statearr_35807_35878 = state_35754__$1;
(statearr_35807_35878[(2)] = inst_35644);

(statearr_35807_35878[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (2))){
var inst_35606 = (state_35754[(13)]);
var inst_35613 = cljs.core.seq.call(null,inst_35606);
var inst_35614 = inst_35613;
var inst_35615 = null;
var inst_35616 = (0);
var inst_35617 = (0);
var state_35754__$1 = (function (){var statearr_35808 = state_35754;
(statearr_35808[(7)] = inst_35615);

(statearr_35808[(8)] = inst_35617);

(statearr_35808[(9)] = inst_35616);

(statearr_35808[(10)] = inst_35614);

return statearr_35808;
})();
var statearr_35809_35879 = state_35754__$1;
(statearr_35809_35879[(2)] = null);

(statearr_35809_35879[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (23))){
var inst_35673 = (state_35754[(26)]);
var inst_35667 = (state_35754[(19)]);
var inst_35671 = (state_35754[(23)]);
var inst_35675 = (state_35754[(24)]);
var inst_35670 = (state_35754[(25)]);
var inst_35678 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35680 = (function (){var all_files = inst_35667;
var res_SINGLEQUOTE_ = inst_35670;
var res = inst_35671;
var files_not_loaded = inst_35673;
var dependencies_that_loaded = inst_35675;
return (function (p__35679){
var map__35810 = p__35679;
var map__35810__$1 = (((((!((map__35810 == null))))?(((((map__35810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35810):map__35810);
var request_url = cljs.core.get.call(null,map__35810__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_35681 = cljs.core.reverse.call(null,inst_35675);
var inst_35682 = cljs.core.map.call(null,inst_35680,inst_35681);
var inst_35683 = cljs.core.pr_str.call(null,inst_35682);
var inst_35684 = figwheel.client.utils.log.call(null,inst_35683);
var state_35754__$1 = (function (){var statearr_35812 = state_35754;
(statearr_35812[(31)] = inst_35678);

return statearr_35812;
})();
var statearr_35813_35880 = state_35754__$1;
(statearr_35813_35880[(2)] = inst_35684);

(statearr_35813_35880[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (35))){
var state_35754__$1 = state_35754;
var statearr_35814_35881 = state_35754__$1;
(statearr_35814_35881[(2)] = true);

(statearr_35814_35881[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (19))){
var inst_35657 = (state_35754[(12)]);
var inst_35663 = figwheel.client.file_reloading.expand_files.call(null,inst_35657);
var state_35754__$1 = state_35754;
var statearr_35815_35882 = state_35754__$1;
(statearr_35815_35882[(2)] = inst_35663);

(statearr_35815_35882[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (11))){
var state_35754__$1 = state_35754;
var statearr_35816_35883 = state_35754__$1;
(statearr_35816_35883[(2)] = null);

(statearr_35816_35883[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (9))){
var inst_35646 = (state_35754[(2)]);
var state_35754__$1 = state_35754;
var statearr_35817_35884 = state_35754__$1;
(statearr_35817_35884[(2)] = inst_35646);

(statearr_35817_35884[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (5))){
var inst_35617 = (state_35754[(8)]);
var inst_35616 = (state_35754[(9)]);
var inst_35619 = (inst_35617 < inst_35616);
var inst_35620 = inst_35619;
var state_35754__$1 = state_35754;
if(cljs.core.truth_(inst_35620)){
var statearr_35818_35885 = state_35754__$1;
(statearr_35818_35885[(1)] = (7));

} else {
var statearr_35819_35886 = state_35754__$1;
(statearr_35819_35886[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (14))){
var inst_35627 = (state_35754[(22)]);
var inst_35636 = cljs.core.first.call(null,inst_35627);
var inst_35637 = figwheel.client.file_reloading.eval_body.call(null,inst_35636,opts);
var inst_35638 = cljs.core.next.call(null,inst_35627);
var inst_35614 = inst_35638;
var inst_35615 = null;
var inst_35616 = (0);
var inst_35617 = (0);
var state_35754__$1 = (function (){var statearr_35820 = state_35754;
(statearr_35820[(7)] = inst_35615);

(statearr_35820[(8)] = inst_35617);

(statearr_35820[(32)] = inst_35637);

(statearr_35820[(9)] = inst_35616);

(statearr_35820[(10)] = inst_35614);

return statearr_35820;
})();
var statearr_35821_35887 = state_35754__$1;
(statearr_35821_35887[(2)] = null);

(statearr_35821_35887[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (45))){
var state_35754__$1 = state_35754;
var statearr_35822_35888 = state_35754__$1;
(statearr_35822_35888[(2)] = null);

(statearr_35822_35888[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (26))){
var inst_35673 = (state_35754[(26)]);
var inst_35667 = (state_35754[(19)]);
var inst_35671 = (state_35754[(23)]);
var inst_35675 = (state_35754[(24)]);
var inst_35670 = (state_35754[(25)]);
var inst_35690 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35692 = (function (){var all_files = inst_35667;
var res_SINGLEQUOTE_ = inst_35670;
var res = inst_35671;
var files_not_loaded = inst_35673;
var dependencies_that_loaded = inst_35675;
return (function (p__35691){
var map__35823 = p__35691;
var map__35823__$1 = (((((!((map__35823 == null))))?(((((map__35823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35823):map__35823);
var namespace = cljs.core.get.call(null,map__35823__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35823__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_35693 = cljs.core.map.call(null,inst_35692,inst_35671);
var inst_35694 = cljs.core.pr_str.call(null,inst_35693);
var inst_35695 = figwheel.client.utils.log.call(null,inst_35694);
var inst_35696 = (function (){var all_files = inst_35667;
var res_SINGLEQUOTE_ = inst_35670;
var res = inst_35671;
var files_not_loaded = inst_35673;
var dependencies_that_loaded = inst_35675;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_35697 = setTimeout(inst_35696,(10));
var state_35754__$1 = (function (){var statearr_35825 = state_35754;
(statearr_35825[(33)] = inst_35690);

(statearr_35825[(34)] = inst_35695);

return statearr_35825;
})();
var statearr_35826_35889 = state_35754__$1;
(statearr_35826_35889[(2)] = inst_35697);

(statearr_35826_35889[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (16))){
var state_35754__$1 = state_35754;
var statearr_35827_35890 = state_35754__$1;
(statearr_35827_35890[(2)] = reload_dependents);

(statearr_35827_35890[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (38))){
var inst_35707 = (state_35754[(16)]);
var inst_35725 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35707);
var state_35754__$1 = state_35754;
var statearr_35828_35891 = state_35754__$1;
(statearr_35828_35891[(2)] = inst_35725);

(statearr_35828_35891[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (30))){
var state_35754__$1 = state_35754;
var statearr_35829_35892 = state_35754__$1;
(statearr_35829_35892[(2)] = null);

(statearr_35829_35892[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (10))){
var inst_35627 = (state_35754[(22)]);
var inst_35629 = cljs.core.chunked_seq_QMARK_.call(null,inst_35627);
var state_35754__$1 = state_35754;
if(inst_35629){
var statearr_35830_35893 = state_35754__$1;
(statearr_35830_35893[(1)] = (13));

} else {
var statearr_35831_35894 = state_35754__$1;
(statearr_35831_35894[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (18))){
var inst_35661 = (state_35754[(2)]);
var state_35754__$1 = state_35754;
if(cljs.core.truth_(inst_35661)){
var statearr_35832_35895 = state_35754__$1;
(statearr_35832_35895[(1)] = (19));

} else {
var statearr_35833_35896 = state_35754__$1;
(statearr_35833_35896[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (42))){
var state_35754__$1 = state_35754;
var statearr_35834_35897 = state_35754__$1;
(statearr_35834_35897[(2)] = null);

(statearr_35834_35897[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (37))){
var inst_35720 = (state_35754[(2)]);
var state_35754__$1 = state_35754;
var statearr_35835_35898 = state_35754__$1;
(statearr_35835_35898[(2)] = inst_35720);

(statearr_35835_35898[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35755 === (8))){
var inst_35627 = (state_35754[(22)]);
var inst_35614 = (state_35754[(10)]);
var inst_35627__$1 = cljs.core.seq.call(null,inst_35614);
var state_35754__$1 = (function (){var statearr_35836 = state_35754;
(statearr_35836[(22)] = inst_35627__$1);

return statearr_35836;
})();
if(inst_35627__$1){
var statearr_35837_35899 = state_35754__$1;
(statearr_35837_35899[(1)] = (10));

} else {
var statearr_35838_35900 = state_35754__$1;
(statearr_35838_35900[(1)] = (11));

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
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33058__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33058__auto____0 = (function (){
var statearr_35839 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35839[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33058__auto__);

(statearr_35839[(1)] = (1));

return statearr_35839;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33058__auto____1 = (function (state_35754){
while(true){
var ret_value__33059__auto__ = (function (){try{while(true){
var result__33060__auto__ = switch__33057__auto__.call(null,state_35754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33060__auto__;
}
break;
}
}catch (e35840){if((e35840 instanceof Object)){
var ex__33061__auto__ = e35840;
var statearr_35841_35901 = state_35754;
(statearr_35841_35901[(5)] = ex__33061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35902 = state_35754;
state_35754 = G__35902;
continue;
} else {
return ret_value__33059__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33058__auto__ = function(state_35754){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33058__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33058__auto____1.call(this,state_35754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33058__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33058__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33058__auto__;
})()
})();
var state__33154__auto__ = (function (){var statearr_35842 = f__33153__auto__.call(null);
(statearr_35842[(6)] = c__33152__auto__);

return statearr_35842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33154__auto__);
}));

return c__33152__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35905,link){
var map__35906 = p__35905;
var map__35906__$1 = (((((!((map__35906 == null))))?(((((map__35906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35906):map__35906);
var file = cljs.core.get.call(null,map__35906__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__35903_SHARP_,p2__35904_SHARP_){
if(cljs.core._EQ_.call(null,p1__35903_SHARP_,p2__35904_SHARP_)){
return p1__35903_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35909){
var map__35910 = p__35909;
var map__35910__$1 = (((((!((map__35910 == null))))?(((((map__35910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35910):map__35910);
var match_length = cljs.core.get.call(null,map__35910__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35910__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35908_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35908_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35912_SHARP_,p2__35913_SHARP_){
return cljs.core.assoc.call(null,p1__35912_SHARP_,cljs.core.get.call(null,p2__35913_SHARP_,key),p2__35913_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_35914 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35914);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35914);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35915,p__35916){
var map__35917 = p__35915;
var map__35917__$1 = (((((!((map__35917 == null))))?(((((map__35917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35917):map__35917);
var on_cssload = cljs.core.get.call(null,map__35917__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35918 = p__35916;
var map__35918__$1 = (((((!((map__35918 == null))))?(((((map__35918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35918):map__35918);
var files_msg = map__35918__$1;
var files = cljs.core.get.call(null,map__35918__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1663010192613
