// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33212 = arguments.length;
switch (G__33212) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33213 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33213 = (function (f,blockable,meta33214){
this.f = f;
this.blockable = blockable;
this.meta33214 = meta33214;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33215,meta33214__$1){
var self__ = this;
var _33215__$1 = this;
return (new cljs.core.async.t_cljs$core$async33213(self__.f,self__.blockable,meta33214__$1));
}));

(cljs.core.async.t_cljs$core$async33213.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33215){
var self__ = this;
var _33215__$1 = this;
return self__.meta33214;
}));

(cljs.core.async.t_cljs$core$async33213.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33213.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33213.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async33213.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async33213.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33214","meta33214",-1737785527,null)], null);
}));

(cljs.core.async.t_cljs$core$async33213.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33213.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33213");

(cljs.core.async.t_cljs$core$async33213.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async33213");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33213.
 */
cljs.core.async.__GT_t_cljs$core$async33213 = (function cljs$core$async$__GT_t_cljs$core$async33213(f__$1,blockable__$1,meta33214){
return (new cljs.core.async.t_cljs$core$async33213(f__$1,blockable__$1,meta33214));
});

}

return (new cljs.core.async.t_cljs$core$async33213(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33219 = arguments.length;
switch (G__33219) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33222 = arguments.length;
switch (G__33222) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33225 = arguments.length;
switch (G__33225) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_33227 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_33227);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_33227);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33229 = arguments.length;
switch (G__33229) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___33231 = n;
var x_33232 = (0);
while(true){
if((x_33232 < n__4613__auto___33231)){
(a[x_33232] = x_33232);

var G__33233 = (x_33232 + (1));
x_33232 = G__33233;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33234 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33234 = (function (flag,meta33235){
this.flag = flag;
this.meta33235 = meta33235;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33236,meta33235__$1){
var self__ = this;
var _33236__$1 = this;
return (new cljs.core.async.t_cljs$core$async33234(self__.flag,meta33235__$1));
}));

(cljs.core.async.t_cljs$core$async33234.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33236){
var self__ = this;
var _33236__$1 = this;
return self__.meta33235;
}));

(cljs.core.async.t_cljs$core$async33234.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33234.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async33234.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33234.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33234.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33235","meta33235",-1228958437,null)], null);
}));

(cljs.core.async.t_cljs$core$async33234.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33234.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33234");

(cljs.core.async.t_cljs$core$async33234.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async33234");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33234.
 */
cljs.core.async.__GT_t_cljs$core$async33234 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33234(flag__$1,meta33235){
return (new cljs.core.async.t_cljs$core$async33234(flag__$1,meta33235));
});

}

return (new cljs.core.async.t_cljs$core$async33234(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33237 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33237 = (function (flag,cb,meta33238){
this.flag = flag;
this.cb = cb;
this.meta33238 = meta33238;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33239,meta33238__$1){
var self__ = this;
var _33239__$1 = this;
return (new cljs.core.async.t_cljs$core$async33237(self__.flag,self__.cb,meta33238__$1));
}));

(cljs.core.async.t_cljs$core$async33237.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33239){
var self__ = this;
var _33239__$1 = this;
return self__.meta33238;
}));

(cljs.core.async.t_cljs$core$async33237.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33237.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async33237.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33237.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33237.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33238","meta33238",633080407,null)], null);
}));

(cljs.core.async.t_cljs$core$async33237.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33237.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33237");

(cljs.core.async.t_cljs$core$async33237.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async33237");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33237.
 */
cljs.core.async.__GT_t_cljs$core$async33237 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33237(flag__$1,cb__$1,meta33238){
return (new cljs.core.async.t_cljs$core$async33237(flag__$1,cb__$1,meta33238));
});

}

return (new cljs.core.async.t_cljs$core$async33237(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33240_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33240_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33241_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33241_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33242 = (i + (1));
i = G__33242;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4115__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33248 = arguments.length;
var i__4737__auto___33249 = (0);
while(true){
if((i__4737__auto___33249 < len__4736__auto___33248)){
args__4742__auto__.push((arguments[i__4737__auto___33249]));

var G__33250 = (i__4737__auto___33249 + (1));
i__4737__auto___33249 = G__33250;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33245){
var map__33246 = p__33245;
var map__33246__$1 = (((((!((map__33246 == null))))?(((((map__33246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33246):map__33246);
var opts = map__33246__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33243){
var G__33244 = cljs.core.first.call(null,seq33243);
var seq33243__$1 = cljs.core.next.call(null,seq33243);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33244,seq33243__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33252 = arguments.length;
switch (G__33252) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33152__auto___33298 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33153__auto__ = (function (){var switch__33057__auto__ = (function (state_33276){
var state_val_33277 = (state_33276[(1)]);
if((state_val_33277 === (7))){
var inst_33272 = (state_33276[(2)]);
var state_33276__$1 = state_33276;
var statearr_33278_33299 = state_33276__$1;
(statearr_33278_33299[(2)] = inst_33272);

(statearr_33278_33299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33277 === (1))){
var state_33276__$1 = state_33276;
var statearr_33279_33300 = state_33276__$1;
(statearr_33279_33300[(2)] = null);

(statearr_33279_33300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33277 === (4))){
var inst_33255 = (state_33276[(7)]);
var inst_33255__$1 = (state_33276[(2)]);
var inst_33256 = (inst_33255__$1 == null);
var state_33276__$1 = (function (){var statearr_33280 = state_33276;
(statearr_33280[(7)] = inst_33255__$1);

return statearr_33280;
})();
if(cljs.core.truth_(inst_33256)){
var statearr_33281_33301 = state_33276__$1;
(statearr_33281_33301[(1)] = (5));

} else {
var statearr_33282_33302 = state_33276__$1;
(statearr_33282_33302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33277 === (13))){
var state_33276__$1 = state_33276;
var statearr_33283_33303 = state_33276__$1;
(statearr_33283_33303[(2)] = null);

(statearr_33283_33303[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33277 === (6))){
var inst_33255 = (state_33276[(7)]);
var state_33276__$1 = state_33276;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33276__$1,(11),to,inst_33255);
} else {
if((state_val_33277 === (3))){
var inst_33274 = (state_33276[(2)]);
var state_33276__$1 = state_33276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33276__$1,inst_33274);
} else {
if((state_val_33277 === (12))){
var state_33276__$1 = state_33276;
var statearr_33284_33304 = state_33276__$1;
(statearr_33284_33304[(2)] = null);

(statearr_33284_33304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33277 === (2))){
var state_33276__$1 = state_33276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33276__$1,(4),from);
} else {
if((state_val_33277 === (11))){
var inst_33265 = (state_33276[(2)]);
var state_33276__$1 = state_33276;
if(cljs.core.truth_(inst_33265)){
var statearr_33285_33305 = state_33276__$1;
(statearr_33285_33305[(1)] = (12));

} else {
var statearr_33286_33306 = state_33276__$1;
(statearr_33286_33306[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33277 === (9))){
var state_33276__$1 = state_33276;
var statearr_33287_33307 = state_33276__$1;
(statearr_33287_33307[(2)] = null);

(statearr_33287_33307[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33277 === (5))){
var state_33276__$1 = state_33276;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33288_33308 = state_33276__$1;
(statearr_33288_33308[(1)] = (8));

} else {
var statearr_33289_33309 = state_33276__$1;
(statearr_33289_33309[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33277 === (14))){
var inst_33270 = (state_33276[(2)]);
var state_33276__$1 = state_33276;
var statearr_33290_33310 = state_33276__$1;
(statearr_33290_33310[(2)] = inst_33270);

(statearr_33290_33310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33277 === (10))){
var inst_33262 = (state_33276[(2)]);
var state_33276__$1 = state_33276;
var statearr_33291_33311 = state_33276__$1;
(statearr_33291_33311[(2)] = inst_33262);

(statearr_33291_33311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33277 === (8))){
var inst_33259 = cljs.core.async.close_BANG_.call(null,to);
var state_33276__$1 = state_33276;
var statearr_33292_33312 = state_33276__$1;
(statearr_33292_33312[(2)] = inst_33259);

(statearr_33292_33312[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__33058__auto__ = null;
var cljs$core$async$state_machine__33058__auto____0 = (function (){
var statearr_33293 = [null,null,null,null,null,null,null,null];
(statearr_33293[(0)] = cljs$core$async$state_machine__33058__auto__);

(statearr_33293[(1)] = (1));

return statearr_33293;
});
var cljs$core$async$state_machine__33058__auto____1 = (function (state_33276){
while(true){
var ret_value__33059__auto__ = (function (){try{while(true){
var result__33060__auto__ = switch__33057__auto__.call(null,state_33276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33060__auto__;
}
break;
}
}catch (e33294){if((e33294 instanceof Object)){
var ex__33061__auto__ = e33294;
var statearr_33295_33313 = state_33276;
(statearr_33295_33313[(5)] = ex__33061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33294;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33314 = state_33276;
state_33276 = G__33314;
continue;
} else {
return ret_value__33059__auto__;
}
break;
}
});
cljs$core$async$state_machine__33058__auto__ = function(state_33276){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33058__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33058__auto____1.call(this,state_33276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33058__auto____0;
cljs$core$async$state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33058__auto____1;
return cljs$core$async$state_machine__33058__auto__;
})()
})();
var state__33154__auto__ = (function (){var statearr_33296 = f__33153__auto__.call(null);
(statearr_33296[(6)] = c__33152__auto___33298);

return statearr_33296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33154__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__33315){
var vec__33316 = p__33315;
var v = cljs.core.nth.call(null,vec__33316,(0),null);
var p = cljs.core.nth.call(null,vec__33316,(1),null);
var job = vec__33316;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33152__auto___33487 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33153__auto__ = (function (){var switch__33057__auto__ = (function (state_33323){
var state_val_33324 = (state_33323[(1)]);
if((state_val_33324 === (1))){
var state_33323__$1 = state_33323;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33323__$1,(2),res,v);
} else {
if((state_val_33324 === (2))){
var inst_33320 = (state_33323[(2)]);
var inst_33321 = cljs.core.async.close_BANG_.call(null,res);
var state_33323__$1 = (function (){var statearr_33325 = state_33323;
(statearr_33325[(7)] = inst_33320);

return statearr_33325;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33323__$1,inst_33321);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33058__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33058__auto____0 = (function (){
var statearr_33326 = [null,null,null,null,null,null,null,null];
(statearr_33326[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33058__auto__);

(statearr_33326[(1)] = (1));

return statearr_33326;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33058__auto____1 = (function (state_33323){
while(true){
var ret_value__33059__auto__ = (function (){try{while(true){
var result__33060__auto__ = switch__33057__auto__.call(null,state_33323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33060__auto__;
}
break;
}
}catch (e33327){if((e33327 instanceof Object)){
var ex__33061__auto__ = e33327;
var statearr_33328_33488 = state_33323;
(statearr_33328_33488[(5)] = ex__33061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33489 = state_33323;
state_33323 = G__33489;
continue;
} else {
return ret_value__33059__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33058__auto__ = function(state_33323){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33058__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33058__auto____1.call(this,state_33323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33058__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33058__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33058__auto__;
})()
})();
var state__33154__auto__ = (function (){var statearr_33329 = f__33153__auto__.call(null);
(statearr_33329[(6)] = c__33152__auto___33487);

return statearr_33329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33154__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__33330){
var vec__33331 = p__33330;
var v = cljs.core.nth.call(null,vec__33331,(0),null);
var p = cljs.core.nth.call(null,vec__33331,(1),null);
var job = vec__33331;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4613__auto___33490 = n;
var __33491 = (0);
while(true){
if((__33491 < n__4613__auto___33490)){
var G__33334_33492 = type;
var G__33334_33493__$1 = (((G__33334_33492 instanceof cljs.core.Keyword))?G__33334_33492.fqn:null);
switch (G__33334_33493__$1) {
case "compute":
var c__33152__auto___33495 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33491,c__33152__auto___33495,G__33334_33492,G__33334_33493__$1,n__4613__auto___33490,jobs,results,process,async){
return (function (){
var f__33153__auto__ = (function (){var switch__33057__auto__ = ((function (__33491,c__33152__auto___33495,G__33334_33492,G__33334_33493__$1,n__4613__auto___33490,jobs,results,process,async){
return (function (state_33347){
var state_val_33348 = (state_33347[(1)]);
if((state_val_33348 === (1))){
var state_33347__$1 = state_33347;
var statearr_33349_33496 = state_33347__$1;
(statearr_33349_33496[(2)] = null);

(statearr_33349_33496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33348 === (2))){
var state_33347__$1 = state_33347;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33347__$1,(4),jobs);
} else {
if((state_val_33348 === (3))){
var inst_33345 = (state_33347[(2)]);
var state_33347__$1 = state_33347;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33347__$1,inst_33345);
} else {
if((state_val_33348 === (4))){
var inst_33337 = (state_33347[(2)]);
var inst_33338 = process.call(null,inst_33337);
var state_33347__$1 = state_33347;
if(cljs.core.truth_(inst_33338)){
var statearr_33350_33497 = state_33347__$1;
(statearr_33350_33497[(1)] = (5));

} else {
var statearr_33351_33498 = state_33347__$1;
(statearr_33351_33498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33348 === (5))){
var state_33347__$1 = state_33347;
var statearr_33352_33499 = state_33347__$1;
(statearr_33352_33499[(2)] = null);

(statearr_33352_33499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33348 === (6))){
var state_33347__$1 = state_33347;
var statearr_33353_33500 = state_33347__$1;
(statearr_33353_33500[(2)] = null);

(statearr_33353_33500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33348 === (7))){
var inst_33343 = (state_33347[(2)]);
var state_33347__$1 = state_33347;
var statearr_33354_33501 = state_33347__$1;
(statearr_33354_33501[(2)] = inst_33343);

(statearr_33354_33501[(1)] = (3));


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
});})(__33491,c__33152__auto___33495,G__33334_33492,G__33334_33493__$1,n__4613__auto___33490,jobs,results,process,async))
;
return ((function (__33491,switch__33057__auto__,c__33152__auto___33495,G__33334_33492,G__33334_33493__$1,n__4613__auto___33490,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33058__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33058__auto____0 = (function (){
var statearr_33355 = [null,null,null,null,null,null,null];
(statearr_33355[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33058__auto__);

(statearr_33355[(1)] = (1));

return statearr_33355;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33058__auto____1 = (function (state_33347){
while(true){
var ret_value__33059__auto__ = (function (){try{while(true){
var result__33060__auto__ = switch__33057__auto__.call(null,state_33347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33060__auto__;
}
break;
}
}catch (e33356){if((e33356 instanceof Object)){
var ex__33061__auto__ = e33356;
var statearr_33357_33502 = state_33347;
(statearr_33357_33502[(5)] = ex__33061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33503 = state_33347;
state_33347 = G__33503;
continue;
} else {
return ret_value__33059__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33058__auto__ = function(state_33347){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33058__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33058__auto____1.call(this,state_33347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33058__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33058__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33058__auto__;
})()
;})(__33491,switch__33057__auto__,c__33152__auto___33495,G__33334_33492,G__33334_33493__$1,n__4613__auto___33490,jobs,results,process,async))
})();
var state__33154__auto__ = (function (){var statearr_33358 = f__33153__auto__.call(null);
(statearr_33358[(6)] = c__33152__auto___33495);

return statearr_33358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33154__auto__);
});})(__33491,c__33152__auto___33495,G__33334_33492,G__33334_33493__$1,n__4613__auto___33490,jobs,results,process,async))
);


break;
case "async":
var c__33152__auto___33504 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33491,c__33152__auto___33504,G__33334_33492,G__33334_33493__$1,n__4613__auto___33490,jobs,results,process,async){
return (function (){
var f__33153__auto__ = (function (){var switch__33057__auto__ = ((function (__33491,c__33152__auto___33504,G__33334_33492,G__33334_33493__$1,n__4613__auto___33490,jobs,results,process,async){
return (function (state_33371){
var state_val_33372 = (state_33371[(1)]);
if((state_val_33372 === (1))){
var state_33371__$1 = state_33371;
var statearr_33373_33505 = state_33371__$1;
(statearr_33373_33505[(2)] = null);

(statearr_33373_33505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33372 === (2))){
var state_33371__$1 = state_33371;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33371__$1,(4),jobs);
} else {
if((state_val_33372 === (3))){
var inst_33369 = (state_33371[(2)]);
var state_33371__$1 = state_33371;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33371__$1,inst_33369);
} else {
if((state_val_33372 === (4))){
var inst_33361 = (state_33371[(2)]);
var inst_33362 = async.call(null,inst_33361);
var state_33371__$1 = state_33371;
if(cljs.core.truth_(inst_33362)){
var statearr_33374_33506 = state_33371__$1;
(statearr_33374_33506[(1)] = (5));

} else {
var statearr_33375_33507 = state_33371__$1;
(statearr_33375_33507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33372 === (5))){
var state_33371__$1 = state_33371;
var statearr_33376_33508 = state_33371__$1;
(statearr_33376_33508[(2)] = null);

(statearr_33376_33508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33372 === (6))){
var state_33371__$1 = state_33371;
var statearr_33377_33509 = state_33371__$1;
(statearr_33377_33509[(2)] = null);

(statearr_33377_33509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33372 === (7))){
var inst_33367 = (state_33371[(2)]);
var state_33371__$1 = state_33371;
var statearr_33378_33510 = state_33371__$1;
(statearr_33378_33510[(2)] = inst_33367);

(statearr_33378_33510[(1)] = (3));


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
});})(__33491,c__33152__auto___33504,G__33334_33492,G__33334_33493__$1,n__4613__auto___33490,jobs,results,process,async))
;
return ((function (__33491,switch__33057__auto__,c__33152__auto___33504,G__33334_33492,G__33334_33493__$1,n__4613__auto___33490,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33058__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33058__auto____0 = (function (){
var statearr_33379 = [null,null,null,null,null,null,null];
(statearr_33379[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33058__auto__);

(statearr_33379[(1)] = (1));

return statearr_33379;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33058__auto____1 = (function (state_33371){
while(true){
var ret_value__33059__auto__ = (function (){try{while(true){
var result__33060__auto__ = switch__33057__auto__.call(null,state_33371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33060__auto__;
}
break;
}
}catch (e33380){if((e33380 instanceof Object)){
var ex__33061__auto__ = e33380;
var statearr_33381_33511 = state_33371;
(statearr_33381_33511[(5)] = ex__33061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33512 = state_33371;
state_33371 = G__33512;
continue;
} else {
return ret_value__33059__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33058__auto__ = function(state_33371){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33058__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33058__auto____1.call(this,state_33371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33058__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33058__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33058__auto__;
})()
;})(__33491,switch__33057__auto__,c__33152__auto___33504,G__33334_33492,G__33334_33493__$1,n__4613__auto___33490,jobs,results,process,async))
})();
var state__33154__auto__ = (function (){var statearr_33382 = f__33153__auto__.call(null);
(statearr_33382[(6)] = c__33152__auto___33504);

return statearr_33382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33154__auto__);
});})(__33491,c__33152__auto___33504,G__33334_33492,G__33334_33493__$1,n__4613__auto___33490,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33334_33493__$1)].join('')));

}

var G__33513 = (__33491 + (1));
__33491 = G__33513;
continue;
} else {
}
break;
}

var c__33152__auto___33514 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33153__auto__ = (function (){var switch__33057__auto__ = (function (state_33404){
var state_val_33405 = (state_33404[(1)]);
if((state_val_33405 === (7))){
var inst_33400 = (state_33404[(2)]);
var state_33404__$1 = state_33404;
var statearr_33406_33515 = state_33404__$1;
(statearr_33406_33515[(2)] = inst_33400);

(statearr_33406_33515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33405 === (1))){
var state_33404__$1 = state_33404;
var statearr_33407_33516 = state_33404__$1;
(statearr_33407_33516[(2)] = null);

(statearr_33407_33516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33405 === (4))){
var inst_33385 = (state_33404[(7)]);
var inst_33385__$1 = (state_33404[(2)]);
var inst_33386 = (inst_33385__$1 == null);
var state_33404__$1 = (function (){var statearr_33408 = state_33404;
(statearr_33408[(7)] = inst_33385__$1);

return statearr_33408;
})();
if(cljs.core.truth_(inst_33386)){
var statearr_33409_33517 = state_33404__$1;
(statearr_33409_33517[(1)] = (5));

} else {
var statearr_33410_33518 = state_33404__$1;
(statearr_33410_33518[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33405 === (6))){
var inst_33390 = (state_33404[(8)]);
var inst_33385 = (state_33404[(7)]);
var inst_33390__$1 = cljs.core.async.chan.call(null,(1));
var inst_33391 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33392 = [inst_33385,inst_33390__$1];
var inst_33393 = (new cljs.core.PersistentVector(null,2,(5),inst_33391,inst_33392,null));
var state_33404__$1 = (function (){var statearr_33411 = state_33404;
(statearr_33411[(8)] = inst_33390__$1);

return statearr_33411;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33404__$1,(8),jobs,inst_33393);
} else {
if((state_val_33405 === (3))){
var inst_33402 = (state_33404[(2)]);
var state_33404__$1 = state_33404;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33404__$1,inst_33402);
} else {
if((state_val_33405 === (2))){
var state_33404__$1 = state_33404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33404__$1,(4),from);
} else {
if((state_val_33405 === (9))){
var inst_33397 = (state_33404[(2)]);
var state_33404__$1 = (function (){var statearr_33412 = state_33404;
(statearr_33412[(9)] = inst_33397);

return statearr_33412;
})();
var statearr_33413_33519 = state_33404__$1;
(statearr_33413_33519[(2)] = null);

(statearr_33413_33519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33405 === (5))){
var inst_33388 = cljs.core.async.close_BANG_.call(null,jobs);
var state_33404__$1 = state_33404;
var statearr_33414_33520 = state_33404__$1;
(statearr_33414_33520[(2)] = inst_33388);

(statearr_33414_33520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33405 === (8))){
var inst_33390 = (state_33404[(8)]);
var inst_33395 = (state_33404[(2)]);
var state_33404__$1 = (function (){var statearr_33415 = state_33404;
(statearr_33415[(10)] = inst_33395);

return statearr_33415;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33404__$1,(9),results,inst_33390);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33058__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33058__auto____0 = (function (){
var statearr_33416 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33416[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33058__auto__);

(statearr_33416[(1)] = (1));

return statearr_33416;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33058__auto____1 = (function (state_33404){
while(true){
var ret_value__33059__auto__ = (function (){try{while(true){
var result__33060__auto__ = switch__33057__auto__.call(null,state_33404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33060__auto__;
}
break;
}
}catch (e33417){if((e33417 instanceof Object)){
var ex__33061__auto__ = e33417;
var statearr_33418_33521 = state_33404;
(statearr_33418_33521[(5)] = ex__33061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33522 = state_33404;
state_33404 = G__33522;
continue;
} else {
return ret_value__33059__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33058__auto__ = function(state_33404){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33058__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33058__auto____1.call(this,state_33404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33058__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33058__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33058__auto__;
})()
})();
var state__33154__auto__ = (function (){var statearr_33419 = f__33153__auto__.call(null);
(statearr_33419[(6)] = c__33152__auto___33514);

return statearr_33419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33154__auto__);
}));


var c__33152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33153__auto__ = (function (){var switch__33057__auto__ = (function (state_33457){
var state_val_33458 = (state_33457[(1)]);
if((state_val_33458 === (7))){
var inst_33453 = (state_33457[(2)]);
var state_33457__$1 = state_33457;
var statearr_33459_33523 = state_33457__$1;
(statearr_33459_33523[(2)] = inst_33453);

(statearr_33459_33523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33458 === (20))){
var state_33457__$1 = state_33457;
var statearr_33460_33524 = state_33457__$1;
(statearr_33460_33524[(2)] = null);

(statearr_33460_33524[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33458 === (1))){
var state_33457__$1 = state_33457;
var statearr_33461_33525 = state_33457__$1;
(statearr_33461_33525[(2)] = null);

(statearr_33461_33525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33458 === (4))){
var inst_33422 = (state_33457[(7)]);
var inst_33422__$1 = (state_33457[(2)]);
var inst_33423 = (inst_33422__$1 == null);
var state_33457__$1 = (function (){var statearr_33462 = state_33457;
(statearr_33462[(7)] = inst_33422__$1);

return statearr_33462;
})();
if(cljs.core.truth_(inst_33423)){
var statearr_33463_33526 = state_33457__$1;
(statearr_33463_33526[(1)] = (5));

} else {
var statearr_33464_33527 = state_33457__$1;
(statearr_33464_33527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33458 === (15))){
var inst_33435 = (state_33457[(8)]);
var state_33457__$1 = state_33457;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33457__$1,(18),to,inst_33435);
} else {
if((state_val_33458 === (21))){
var inst_33448 = (state_33457[(2)]);
var state_33457__$1 = state_33457;
var statearr_33465_33528 = state_33457__$1;
(statearr_33465_33528[(2)] = inst_33448);

(statearr_33465_33528[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33458 === (13))){
var inst_33450 = (state_33457[(2)]);
var state_33457__$1 = (function (){var statearr_33466 = state_33457;
(statearr_33466[(9)] = inst_33450);

return statearr_33466;
})();
var statearr_33467_33529 = state_33457__$1;
(statearr_33467_33529[(2)] = null);

(statearr_33467_33529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33458 === (6))){
var inst_33422 = (state_33457[(7)]);
var state_33457__$1 = state_33457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33457__$1,(11),inst_33422);
} else {
if((state_val_33458 === (17))){
var inst_33443 = (state_33457[(2)]);
var state_33457__$1 = state_33457;
if(cljs.core.truth_(inst_33443)){
var statearr_33468_33530 = state_33457__$1;
(statearr_33468_33530[(1)] = (19));

} else {
var statearr_33469_33531 = state_33457__$1;
(statearr_33469_33531[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33458 === (3))){
var inst_33455 = (state_33457[(2)]);
var state_33457__$1 = state_33457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33457__$1,inst_33455);
} else {
if((state_val_33458 === (12))){
var inst_33432 = (state_33457[(10)]);
var state_33457__$1 = state_33457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33457__$1,(14),inst_33432);
} else {
if((state_val_33458 === (2))){
var state_33457__$1 = state_33457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33457__$1,(4),results);
} else {
if((state_val_33458 === (19))){
var state_33457__$1 = state_33457;
var statearr_33470_33532 = state_33457__$1;
(statearr_33470_33532[(2)] = null);

(statearr_33470_33532[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33458 === (11))){
var inst_33432 = (state_33457[(2)]);
var state_33457__$1 = (function (){var statearr_33471 = state_33457;
(statearr_33471[(10)] = inst_33432);

return statearr_33471;
})();
var statearr_33472_33533 = state_33457__$1;
(statearr_33472_33533[(2)] = null);

(statearr_33472_33533[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33458 === (9))){
var state_33457__$1 = state_33457;
var statearr_33473_33534 = state_33457__$1;
(statearr_33473_33534[(2)] = null);

(statearr_33473_33534[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33458 === (5))){
var state_33457__$1 = state_33457;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33474_33535 = state_33457__$1;
(statearr_33474_33535[(1)] = (8));

} else {
var statearr_33475_33536 = state_33457__$1;
(statearr_33475_33536[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33458 === (14))){
var inst_33435 = (state_33457[(8)]);
var inst_33435__$1 = (state_33457[(2)]);
var inst_33436 = (inst_33435__$1 == null);
var inst_33437 = cljs.core.not.call(null,inst_33436);
var state_33457__$1 = (function (){var statearr_33476 = state_33457;
(statearr_33476[(8)] = inst_33435__$1);

return statearr_33476;
})();
if(inst_33437){
var statearr_33477_33537 = state_33457__$1;
(statearr_33477_33537[(1)] = (15));

} else {
var statearr_33478_33538 = state_33457__$1;
(statearr_33478_33538[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33458 === (16))){
var state_33457__$1 = state_33457;
var statearr_33479_33539 = state_33457__$1;
(statearr_33479_33539[(2)] = false);

(statearr_33479_33539[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33458 === (10))){
var inst_33429 = (state_33457[(2)]);
var state_33457__$1 = state_33457;
var statearr_33480_33540 = state_33457__$1;
(statearr_33480_33540[(2)] = inst_33429);

(statearr_33480_33540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33458 === (18))){
var inst_33440 = (state_33457[(2)]);
var state_33457__$1 = state_33457;
var statearr_33481_33541 = state_33457__$1;
(statearr_33481_33541[(2)] = inst_33440);

(statearr_33481_33541[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33458 === (8))){
var inst_33426 = cljs.core.async.close_BANG_.call(null,to);
var state_33457__$1 = state_33457;
var statearr_33482_33542 = state_33457__$1;
(statearr_33482_33542[(2)] = inst_33426);

(statearr_33482_33542[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33058__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33058__auto____0 = (function (){
var statearr_33483 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33483[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33058__auto__);

(statearr_33483[(1)] = (1));

return statearr_33483;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33058__auto____1 = (function (state_33457){
while(true){
var ret_value__33059__auto__ = (function (){try{while(true){
var result__33060__auto__ = switch__33057__auto__.call(null,state_33457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33060__auto__;
}
break;
}
}catch (e33484){if((e33484 instanceof Object)){
var ex__33061__auto__ = e33484;
var statearr_33485_33543 = state_33457;
(statearr_33485_33543[(5)] = ex__33061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33544 = state_33457;
state_33457 = G__33544;
continue;
} else {
return ret_value__33059__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33058__auto__ = function(state_33457){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33058__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33058__auto____1.call(this,state_33457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33058__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33058__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33058__auto__;
})()
})();
var state__33154__auto__ = (function (){var statearr_33486 = f__33153__auto__.call(null);
(statearr_33486[(6)] = c__33152__auto__);

return statearr_33486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33154__auto__);
}));

return c__33152__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33546 = arguments.length;
switch (G__33546) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33549 = arguments.length;
switch (G__33549) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33552 = arguments.length;
switch (G__33552) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__33152__auto___33601 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33153__auto__ = (function (){var switch__33057__auto__ = (function (state_33578){
var state_val_33579 = (state_33578[(1)]);
if((state_val_33579 === (7))){
var inst_33574 = (state_33578[(2)]);
var state_33578__$1 = state_33578;
var statearr_33580_33602 = state_33578__$1;
(statearr_33580_33602[(2)] = inst_33574);

(statearr_33580_33602[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (1))){
var state_33578__$1 = state_33578;
var statearr_33581_33603 = state_33578__$1;
(statearr_33581_33603[(2)] = null);

(statearr_33581_33603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (4))){
var inst_33555 = (state_33578[(7)]);
var inst_33555__$1 = (state_33578[(2)]);
var inst_33556 = (inst_33555__$1 == null);
var state_33578__$1 = (function (){var statearr_33582 = state_33578;
(statearr_33582[(7)] = inst_33555__$1);

return statearr_33582;
})();
if(cljs.core.truth_(inst_33556)){
var statearr_33583_33604 = state_33578__$1;
(statearr_33583_33604[(1)] = (5));

} else {
var statearr_33584_33605 = state_33578__$1;
(statearr_33584_33605[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (13))){
var state_33578__$1 = state_33578;
var statearr_33585_33606 = state_33578__$1;
(statearr_33585_33606[(2)] = null);

(statearr_33585_33606[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (6))){
var inst_33555 = (state_33578[(7)]);
var inst_33561 = p.call(null,inst_33555);
var state_33578__$1 = state_33578;
if(cljs.core.truth_(inst_33561)){
var statearr_33586_33607 = state_33578__$1;
(statearr_33586_33607[(1)] = (9));

} else {
var statearr_33587_33608 = state_33578__$1;
(statearr_33587_33608[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (3))){
var inst_33576 = (state_33578[(2)]);
var state_33578__$1 = state_33578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33578__$1,inst_33576);
} else {
if((state_val_33579 === (12))){
var state_33578__$1 = state_33578;
var statearr_33588_33609 = state_33578__$1;
(statearr_33588_33609[(2)] = null);

(statearr_33588_33609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (2))){
var state_33578__$1 = state_33578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33578__$1,(4),ch);
} else {
if((state_val_33579 === (11))){
var inst_33555 = (state_33578[(7)]);
var inst_33565 = (state_33578[(2)]);
var state_33578__$1 = state_33578;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33578__$1,(8),inst_33565,inst_33555);
} else {
if((state_val_33579 === (9))){
var state_33578__$1 = state_33578;
var statearr_33589_33610 = state_33578__$1;
(statearr_33589_33610[(2)] = tc);

(statearr_33589_33610[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (5))){
var inst_33558 = cljs.core.async.close_BANG_.call(null,tc);
var inst_33559 = cljs.core.async.close_BANG_.call(null,fc);
var state_33578__$1 = (function (){var statearr_33590 = state_33578;
(statearr_33590[(8)] = inst_33558);

return statearr_33590;
})();
var statearr_33591_33611 = state_33578__$1;
(statearr_33591_33611[(2)] = inst_33559);

(statearr_33591_33611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (14))){
var inst_33572 = (state_33578[(2)]);
var state_33578__$1 = state_33578;
var statearr_33592_33612 = state_33578__$1;
(statearr_33592_33612[(2)] = inst_33572);

(statearr_33592_33612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (10))){
var state_33578__$1 = state_33578;
var statearr_33593_33613 = state_33578__$1;
(statearr_33593_33613[(2)] = fc);

(statearr_33593_33613[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (8))){
var inst_33567 = (state_33578[(2)]);
var state_33578__$1 = state_33578;
if(cljs.core.truth_(inst_33567)){
var statearr_33594_33614 = state_33578__$1;
(statearr_33594_33614[(1)] = (12));

} else {
var statearr_33595_33615 = state_33578__$1;
(statearr_33595_33615[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__33058__auto__ = null;
var cljs$core$async$state_machine__33058__auto____0 = (function (){
var statearr_33596 = [null,null,null,null,null,null,null,null,null];
(statearr_33596[(0)] = cljs$core$async$state_machine__33058__auto__);

(statearr_33596[(1)] = (1));

return statearr_33596;
});
var cljs$core$async$state_machine__33058__auto____1 = (function (state_33578){
while(true){
var ret_value__33059__auto__ = (function (){try{while(true){
var result__33060__auto__ = switch__33057__auto__.call(null,state_33578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33060__auto__;
}
break;
}
}catch (e33597){if((e33597 instanceof Object)){
var ex__33061__auto__ = e33597;
var statearr_33598_33616 = state_33578;
(statearr_33598_33616[(5)] = ex__33061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33617 = state_33578;
state_33578 = G__33617;
continue;
} else {
return ret_value__33059__auto__;
}
break;
}
});
cljs$core$async$state_machine__33058__auto__ = function(state_33578){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33058__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33058__auto____1.call(this,state_33578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33058__auto____0;
cljs$core$async$state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33058__auto____1;
return cljs$core$async$state_machine__33058__auto__;
})()
})();
var state__33154__auto__ = (function (){var statearr_33599 = f__33153__auto__.call(null);
(statearr_33599[(6)] = c__33152__auto___33601);

return statearr_33599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33154__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33153__auto__ = (function (){var switch__33057__auto__ = (function (state_33638){
var state_val_33639 = (state_33638[(1)]);
if((state_val_33639 === (7))){
var inst_33634 = (state_33638[(2)]);
var state_33638__$1 = state_33638;
var statearr_33640_33658 = state_33638__$1;
(statearr_33640_33658[(2)] = inst_33634);

(statearr_33640_33658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33639 === (1))){
var inst_33618 = init;
var state_33638__$1 = (function (){var statearr_33641 = state_33638;
(statearr_33641[(7)] = inst_33618);

return statearr_33641;
})();
var statearr_33642_33659 = state_33638__$1;
(statearr_33642_33659[(2)] = null);

(statearr_33642_33659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33639 === (4))){
var inst_33621 = (state_33638[(8)]);
var inst_33621__$1 = (state_33638[(2)]);
var inst_33622 = (inst_33621__$1 == null);
var state_33638__$1 = (function (){var statearr_33643 = state_33638;
(statearr_33643[(8)] = inst_33621__$1);

return statearr_33643;
})();
if(cljs.core.truth_(inst_33622)){
var statearr_33644_33660 = state_33638__$1;
(statearr_33644_33660[(1)] = (5));

} else {
var statearr_33645_33661 = state_33638__$1;
(statearr_33645_33661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33639 === (6))){
var inst_33618 = (state_33638[(7)]);
var inst_33625 = (state_33638[(9)]);
var inst_33621 = (state_33638[(8)]);
var inst_33625__$1 = f.call(null,inst_33618,inst_33621);
var inst_33626 = cljs.core.reduced_QMARK_.call(null,inst_33625__$1);
var state_33638__$1 = (function (){var statearr_33646 = state_33638;
(statearr_33646[(9)] = inst_33625__$1);

return statearr_33646;
})();
if(inst_33626){
var statearr_33647_33662 = state_33638__$1;
(statearr_33647_33662[(1)] = (8));

} else {
var statearr_33648_33663 = state_33638__$1;
(statearr_33648_33663[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33639 === (3))){
var inst_33636 = (state_33638[(2)]);
var state_33638__$1 = state_33638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33638__$1,inst_33636);
} else {
if((state_val_33639 === (2))){
var state_33638__$1 = state_33638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33638__$1,(4),ch);
} else {
if((state_val_33639 === (9))){
var inst_33625 = (state_33638[(9)]);
var inst_33618 = inst_33625;
var state_33638__$1 = (function (){var statearr_33649 = state_33638;
(statearr_33649[(7)] = inst_33618);

return statearr_33649;
})();
var statearr_33650_33664 = state_33638__$1;
(statearr_33650_33664[(2)] = null);

(statearr_33650_33664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33639 === (5))){
var inst_33618 = (state_33638[(7)]);
var state_33638__$1 = state_33638;
var statearr_33651_33665 = state_33638__$1;
(statearr_33651_33665[(2)] = inst_33618);

(statearr_33651_33665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33639 === (10))){
var inst_33632 = (state_33638[(2)]);
var state_33638__$1 = state_33638;
var statearr_33652_33666 = state_33638__$1;
(statearr_33652_33666[(2)] = inst_33632);

(statearr_33652_33666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33639 === (8))){
var inst_33625 = (state_33638[(9)]);
var inst_33628 = cljs.core.deref.call(null,inst_33625);
var state_33638__$1 = state_33638;
var statearr_33653_33667 = state_33638__$1;
(statearr_33653_33667[(2)] = inst_33628);

(statearr_33653_33667[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__33058__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33058__auto____0 = (function (){
var statearr_33654 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33654[(0)] = cljs$core$async$reduce_$_state_machine__33058__auto__);

(statearr_33654[(1)] = (1));

return statearr_33654;
});
var cljs$core$async$reduce_$_state_machine__33058__auto____1 = (function (state_33638){
while(true){
var ret_value__33059__auto__ = (function (){try{while(true){
var result__33060__auto__ = switch__33057__auto__.call(null,state_33638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33060__auto__;
}
break;
}
}catch (e33655){if((e33655 instanceof Object)){
var ex__33061__auto__ = e33655;
var statearr_33656_33668 = state_33638;
(statearr_33656_33668[(5)] = ex__33061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33669 = state_33638;
state_33638 = G__33669;
continue;
} else {
return ret_value__33059__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33058__auto__ = function(state_33638){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33058__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33058__auto____1.call(this,state_33638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33058__auto____0;
cljs$core$async$reduce_$_state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33058__auto____1;
return cljs$core$async$reduce_$_state_machine__33058__auto__;
})()
})();
var state__33154__auto__ = (function (){var statearr_33657 = f__33153__auto__.call(null);
(statearr_33657[(6)] = c__33152__auto__);

return statearr_33657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33154__auto__);
}));

return c__33152__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__33152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33153__auto__ = (function (){var switch__33057__auto__ = (function (state_33675){
var state_val_33676 = (state_33675[(1)]);
if((state_val_33676 === (1))){
var inst_33670 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_33675__$1 = state_33675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33675__$1,(2),inst_33670);
} else {
if((state_val_33676 === (2))){
var inst_33672 = (state_33675[(2)]);
var inst_33673 = f__$1.call(null,inst_33672);
var state_33675__$1 = state_33675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33675__$1,inst_33673);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__33058__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33058__auto____0 = (function (){
var statearr_33677 = [null,null,null,null,null,null,null];
(statearr_33677[(0)] = cljs$core$async$transduce_$_state_machine__33058__auto__);

(statearr_33677[(1)] = (1));

return statearr_33677;
});
var cljs$core$async$transduce_$_state_machine__33058__auto____1 = (function (state_33675){
while(true){
var ret_value__33059__auto__ = (function (){try{while(true){
var result__33060__auto__ = switch__33057__auto__.call(null,state_33675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33060__auto__;
}
break;
}
}catch (e33678){if((e33678 instanceof Object)){
var ex__33061__auto__ = e33678;
var statearr_33679_33681 = state_33675;
(statearr_33679_33681[(5)] = ex__33061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33682 = state_33675;
state_33675 = G__33682;
continue;
} else {
return ret_value__33059__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33058__auto__ = function(state_33675){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33058__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33058__auto____1.call(this,state_33675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33058__auto____0;
cljs$core$async$transduce_$_state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33058__auto____1;
return cljs$core$async$transduce_$_state_machine__33058__auto__;
})()
})();
var state__33154__auto__ = (function (){var statearr_33680 = f__33153__auto__.call(null);
(statearr_33680[(6)] = c__33152__auto__);

return statearr_33680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33154__auto__);
}));

return c__33152__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33684 = arguments.length;
switch (G__33684) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33153__auto__ = (function (){var switch__33057__auto__ = (function (state_33709){
var state_val_33710 = (state_33709[(1)]);
if((state_val_33710 === (7))){
var inst_33691 = (state_33709[(2)]);
var state_33709__$1 = state_33709;
var statearr_33711_33732 = state_33709__$1;
(statearr_33711_33732[(2)] = inst_33691);

(statearr_33711_33732[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33710 === (1))){
var inst_33685 = cljs.core.seq.call(null,coll);
var inst_33686 = inst_33685;
var state_33709__$1 = (function (){var statearr_33712 = state_33709;
(statearr_33712[(7)] = inst_33686);

return statearr_33712;
})();
var statearr_33713_33733 = state_33709__$1;
(statearr_33713_33733[(2)] = null);

(statearr_33713_33733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33710 === (4))){
var inst_33686 = (state_33709[(7)]);
var inst_33689 = cljs.core.first.call(null,inst_33686);
var state_33709__$1 = state_33709;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33709__$1,(7),ch,inst_33689);
} else {
if((state_val_33710 === (13))){
var inst_33703 = (state_33709[(2)]);
var state_33709__$1 = state_33709;
var statearr_33714_33734 = state_33709__$1;
(statearr_33714_33734[(2)] = inst_33703);

(statearr_33714_33734[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33710 === (6))){
var inst_33694 = (state_33709[(2)]);
var state_33709__$1 = state_33709;
if(cljs.core.truth_(inst_33694)){
var statearr_33715_33735 = state_33709__$1;
(statearr_33715_33735[(1)] = (8));

} else {
var statearr_33716_33736 = state_33709__$1;
(statearr_33716_33736[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33710 === (3))){
var inst_33707 = (state_33709[(2)]);
var state_33709__$1 = state_33709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33709__$1,inst_33707);
} else {
if((state_val_33710 === (12))){
var state_33709__$1 = state_33709;
var statearr_33717_33737 = state_33709__$1;
(statearr_33717_33737[(2)] = null);

(statearr_33717_33737[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33710 === (2))){
var inst_33686 = (state_33709[(7)]);
var state_33709__$1 = state_33709;
if(cljs.core.truth_(inst_33686)){
var statearr_33718_33738 = state_33709__$1;
(statearr_33718_33738[(1)] = (4));

} else {
var statearr_33719_33739 = state_33709__$1;
(statearr_33719_33739[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33710 === (11))){
var inst_33700 = cljs.core.async.close_BANG_.call(null,ch);
var state_33709__$1 = state_33709;
var statearr_33720_33740 = state_33709__$1;
(statearr_33720_33740[(2)] = inst_33700);

(statearr_33720_33740[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33710 === (9))){
var state_33709__$1 = state_33709;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33721_33741 = state_33709__$1;
(statearr_33721_33741[(1)] = (11));

} else {
var statearr_33722_33742 = state_33709__$1;
(statearr_33722_33742[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33710 === (5))){
var inst_33686 = (state_33709[(7)]);
var state_33709__$1 = state_33709;
var statearr_33723_33743 = state_33709__$1;
(statearr_33723_33743[(2)] = inst_33686);

(statearr_33723_33743[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33710 === (10))){
var inst_33705 = (state_33709[(2)]);
var state_33709__$1 = state_33709;
var statearr_33724_33744 = state_33709__$1;
(statearr_33724_33744[(2)] = inst_33705);

(statearr_33724_33744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33710 === (8))){
var inst_33686 = (state_33709[(7)]);
var inst_33696 = cljs.core.next.call(null,inst_33686);
var inst_33686__$1 = inst_33696;
var state_33709__$1 = (function (){var statearr_33725 = state_33709;
(statearr_33725[(7)] = inst_33686__$1);

return statearr_33725;
})();
var statearr_33726_33745 = state_33709__$1;
(statearr_33726_33745[(2)] = null);

(statearr_33726_33745[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__33058__auto__ = null;
var cljs$core$async$state_machine__33058__auto____0 = (function (){
var statearr_33727 = [null,null,null,null,null,null,null,null];
(statearr_33727[(0)] = cljs$core$async$state_machine__33058__auto__);

(statearr_33727[(1)] = (1));

return statearr_33727;
});
var cljs$core$async$state_machine__33058__auto____1 = (function (state_33709){
while(true){
var ret_value__33059__auto__ = (function (){try{while(true){
var result__33060__auto__ = switch__33057__auto__.call(null,state_33709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33060__auto__;
}
break;
}
}catch (e33728){if((e33728 instanceof Object)){
var ex__33061__auto__ = e33728;
var statearr_33729_33746 = state_33709;
(statearr_33729_33746[(5)] = ex__33061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33747 = state_33709;
state_33709 = G__33747;
continue;
} else {
return ret_value__33059__auto__;
}
break;
}
});
cljs$core$async$state_machine__33058__auto__ = function(state_33709){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33058__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33058__auto____1.call(this,state_33709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33058__auto____0;
cljs$core$async$state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33058__auto____1;
return cljs$core$async$state_machine__33058__auto__;
})()
})();
var state__33154__auto__ = (function (){var statearr_33730 = f__33153__auto__.call(null);
(statearr_33730[(6)] = c__33152__auto__);

return statearr_33730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33154__auto__);
}));

return c__33152__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_33748 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_33748.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33749 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_33749.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33750 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_33750.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33751 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_33751.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33752 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33752 = (function (ch,cs,meta33753){
this.ch = ch;
this.cs = cs;
this.meta33753 = meta33753;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33754,meta33753__$1){
var self__ = this;
var _33754__$1 = this;
return (new cljs.core.async.t_cljs$core$async33752(self__.ch,self__.cs,meta33753__$1));
}));

(cljs.core.async.t_cljs$core$async33752.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33754){
var self__ = this;
var _33754__$1 = this;
return self__.meta33753;
}));

(cljs.core.async.t_cljs$core$async33752.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33752.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33752.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33752.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33752.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33752.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33752.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33753","meta33753",148098955,null)], null);
}));

(cljs.core.async.t_cljs$core$async33752.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33752.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33752");

(cljs.core.async.t_cljs$core$async33752.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async33752");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33752.
 */
cljs.core.async.__GT_t_cljs$core$async33752 = (function cljs$core$async$mult_$___GT_t_cljs$core$async33752(ch__$1,cs__$1,meta33753){
return (new cljs.core.async.t_cljs$core$async33752(ch__$1,cs__$1,meta33753));
});

}

return (new cljs.core.async.t_cljs$core$async33752(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__33152__auto___33974 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33153__auto__ = (function (){var switch__33057__auto__ = (function (state_33889){
var state_val_33890 = (state_33889[(1)]);
if((state_val_33890 === (7))){
var inst_33885 = (state_33889[(2)]);
var state_33889__$1 = state_33889;
var statearr_33891_33975 = state_33889__$1;
(statearr_33891_33975[(2)] = inst_33885);

(statearr_33891_33975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (20))){
var inst_33788 = (state_33889[(7)]);
var inst_33800 = cljs.core.first.call(null,inst_33788);
var inst_33801 = cljs.core.nth.call(null,inst_33800,(0),null);
var inst_33802 = cljs.core.nth.call(null,inst_33800,(1),null);
var state_33889__$1 = (function (){var statearr_33892 = state_33889;
(statearr_33892[(8)] = inst_33801);

return statearr_33892;
})();
if(cljs.core.truth_(inst_33802)){
var statearr_33893_33976 = state_33889__$1;
(statearr_33893_33976[(1)] = (22));

} else {
var statearr_33894_33977 = state_33889__$1;
(statearr_33894_33977[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (27))){
var inst_33837 = (state_33889[(9)]);
var inst_33832 = (state_33889[(10)]);
var inst_33830 = (state_33889[(11)]);
var inst_33757 = (state_33889[(12)]);
var inst_33837__$1 = cljs.core._nth.call(null,inst_33830,inst_33832);
var inst_33838 = cljs.core.async.put_BANG_.call(null,inst_33837__$1,inst_33757,done);
var state_33889__$1 = (function (){var statearr_33895 = state_33889;
(statearr_33895[(9)] = inst_33837__$1);

return statearr_33895;
})();
if(cljs.core.truth_(inst_33838)){
var statearr_33896_33978 = state_33889__$1;
(statearr_33896_33978[(1)] = (30));

} else {
var statearr_33897_33979 = state_33889__$1;
(statearr_33897_33979[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (1))){
var state_33889__$1 = state_33889;
var statearr_33898_33980 = state_33889__$1;
(statearr_33898_33980[(2)] = null);

(statearr_33898_33980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (24))){
var inst_33788 = (state_33889[(7)]);
var inst_33807 = (state_33889[(2)]);
var inst_33808 = cljs.core.next.call(null,inst_33788);
var inst_33766 = inst_33808;
var inst_33767 = null;
var inst_33768 = (0);
var inst_33769 = (0);
var state_33889__$1 = (function (){var statearr_33899 = state_33889;
(statearr_33899[(13)] = inst_33769);

(statearr_33899[(14)] = inst_33807);

(statearr_33899[(15)] = inst_33767);

(statearr_33899[(16)] = inst_33768);

(statearr_33899[(17)] = inst_33766);

return statearr_33899;
})();
var statearr_33900_33981 = state_33889__$1;
(statearr_33900_33981[(2)] = null);

(statearr_33900_33981[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (39))){
var state_33889__$1 = state_33889;
var statearr_33904_33982 = state_33889__$1;
(statearr_33904_33982[(2)] = null);

(statearr_33904_33982[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (4))){
var inst_33757 = (state_33889[(12)]);
var inst_33757__$1 = (state_33889[(2)]);
var inst_33758 = (inst_33757__$1 == null);
var state_33889__$1 = (function (){var statearr_33905 = state_33889;
(statearr_33905[(12)] = inst_33757__$1);

return statearr_33905;
})();
if(cljs.core.truth_(inst_33758)){
var statearr_33906_33983 = state_33889__$1;
(statearr_33906_33983[(1)] = (5));

} else {
var statearr_33907_33984 = state_33889__$1;
(statearr_33907_33984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (15))){
var inst_33769 = (state_33889[(13)]);
var inst_33767 = (state_33889[(15)]);
var inst_33768 = (state_33889[(16)]);
var inst_33766 = (state_33889[(17)]);
var inst_33784 = (state_33889[(2)]);
var inst_33785 = (inst_33769 + (1));
var tmp33901 = inst_33767;
var tmp33902 = inst_33768;
var tmp33903 = inst_33766;
var inst_33766__$1 = tmp33903;
var inst_33767__$1 = tmp33901;
var inst_33768__$1 = tmp33902;
var inst_33769__$1 = inst_33785;
var state_33889__$1 = (function (){var statearr_33908 = state_33889;
(statearr_33908[(18)] = inst_33784);

(statearr_33908[(13)] = inst_33769__$1);

(statearr_33908[(15)] = inst_33767__$1);

(statearr_33908[(16)] = inst_33768__$1);

(statearr_33908[(17)] = inst_33766__$1);

return statearr_33908;
})();
var statearr_33909_33985 = state_33889__$1;
(statearr_33909_33985[(2)] = null);

(statearr_33909_33985[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (21))){
var inst_33811 = (state_33889[(2)]);
var state_33889__$1 = state_33889;
var statearr_33913_33986 = state_33889__$1;
(statearr_33913_33986[(2)] = inst_33811);

(statearr_33913_33986[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (31))){
var inst_33837 = (state_33889[(9)]);
var inst_33841 = done.call(null,null);
var inst_33842 = cljs.core.async.untap_STAR_.call(null,m,inst_33837);
var state_33889__$1 = (function (){var statearr_33914 = state_33889;
(statearr_33914[(19)] = inst_33841);

return statearr_33914;
})();
var statearr_33915_33987 = state_33889__$1;
(statearr_33915_33987[(2)] = inst_33842);

(statearr_33915_33987[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (32))){
var inst_33829 = (state_33889[(20)]);
var inst_33832 = (state_33889[(10)]);
var inst_33830 = (state_33889[(11)]);
var inst_33831 = (state_33889[(21)]);
var inst_33844 = (state_33889[(2)]);
var inst_33845 = (inst_33832 + (1));
var tmp33910 = inst_33829;
var tmp33911 = inst_33830;
var tmp33912 = inst_33831;
var inst_33829__$1 = tmp33910;
var inst_33830__$1 = tmp33911;
var inst_33831__$1 = tmp33912;
var inst_33832__$1 = inst_33845;
var state_33889__$1 = (function (){var statearr_33916 = state_33889;
(statearr_33916[(20)] = inst_33829__$1);

(statearr_33916[(10)] = inst_33832__$1);

(statearr_33916[(11)] = inst_33830__$1);

(statearr_33916[(21)] = inst_33831__$1);

(statearr_33916[(22)] = inst_33844);

return statearr_33916;
})();
var statearr_33917_33988 = state_33889__$1;
(statearr_33917_33988[(2)] = null);

(statearr_33917_33988[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (40))){
var inst_33857 = (state_33889[(23)]);
var inst_33861 = done.call(null,null);
var inst_33862 = cljs.core.async.untap_STAR_.call(null,m,inst_33857);
var state_33889__$1 = (function (){var statearr_33918 = state_33889;
(statearr_33918[(24)] = inst_33861);

return statearr_33918;
})();
var statearr_33919_33989 = state_33889__$1;
(statearr_33919_33989[(2)] = inst_33862);

(statearr_33919_33989[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (33))){
var inst_33848 = (state_33889[(25)]);
var inst_33850 = cljs.core.chunked_seq_QMARK_.call(null,inst_33848);
var state_33889__$1 = state_33889;
if(inst_33850){
var statearr_33920_33990 = state_33889__$1;
(statearr_33920_33990[(1)] = (36));

} else {
var statearr_33921_33991 = state_33889__$1;
(statearr_33921_33991[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (13))){
var inst_33778 = (state_33889[(26)]);
var inst_33781 = cljs.core.async.close_BANG_.call(null,inst_33778);
var state_33889__$1 = state_33889;
var statearr_33922_33992 = state_33889__$1;
(statearr_33922_33992[(2)] = inst_33781);

(statearr_33922_33992[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (22))){
var inst_33801 = (state_33889[(8)]);
var inst_33804 = cljs.core.async.close_BANG_.call(null,inst_33801);
var state_33889__$1 = state_33889;
var statearr_33923_33993 = state_33889__$1;
(statearr_33923_33993[(2)] = inst_33804);

(statearr_33923_33993[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (36))){
var inst_33848 = (state_33889[(25)]);
var inst_33852 = cljs.core.chunk_first.call(null,inst_33848);
var inst_33853 = cljs.core.chunk_rest.call(null,inst_33848);
var inst_33854 = cljs.core.count.call(null,inst_33852);
var inst_33829 = inst_33853;
var inst_33830 = inst_33852;
var inst_33831 = inst_33854;
var inst_33832 = (0);
var state_33889__$1 = (function (){var statearr_33924 = state_33889;
(statearr_33924[(20)] = inst_33829);

(statearr_33924[(10)] = inst_33832);

(statearr_33924[(11)] = inst_33830);

(statearr_33924[(21)] = inst_33831);

return statearr_33924;
})();
var statearr_33925_33994 = state_33889__$1;
(statearr_33925_33994[(2)] = null);

(statearr_33925_33994[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (41))){
var inst_33848 = (state_33889[(25)]);
var inst_33864 = (state_33889[(2)]);
var inst_33865 = cljs.core.next.call(null,inst_33848);
var inst_33829 = inst_33865;
var inst_33830 = null;
var inst_33831 = (0);
var inst_33832 = (0);
var state_33889__$1 = (function (){var statearr_33926 = state_33889;
(statearr_33926[(20)] = inst_33829);

(statearr_33926[(27)] = inst_33864);

(statearr_33926[(10)] = inst_33832);

(statearr_33926[(11)] = inst_33830);

(statearr_33926[(21)] = inst_33831);

return statearr_33926;
})();
var statearr_33927_33995 = state_33889__$1;
(statearr_33927_33995[(2)] = null);

(statearr_33927_33995[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (43))){
var state_33889__$1 = state_33889;
var statearr_33928_33996 = state_33889__$1;
(statearr_33928_33996[(2)] = null);

(statearr_33928_33996[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (29))){
var inst_33873 = (state_33889[(2)]);
var state_33889__$1 = state_33889;
var statearr_33929_33997 = state_33889__$1;
(statearr_33929_33997[(2)] = inst_33873);

(statearr_33929_33997[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (44))){
var inst_33882 = (state_33889[(2)]);
var state_33889__$1 = (function (){var statearr_33930 = state_33889;
(statearr_33930[(28)] = inst_33882);

return statearr_33930;
})();
var statearr_33931_33998 = state_33889__$1;
(statearr_33931_33998[(2)] = null);

(statearr_33931_33998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (6))){
var inst_33821 = (state_33889[(29)]);
var inst_33820 = cljs.core.deref.call(null,cs);
var inst_33821__$1 = cljs.core.keys.call(null,inst_33820);
var inst_33822 = cljs.core.count.call(null,inst_33821__$1);
var inst_33823 = cljs.core.reset_BANG_.call(null,dctr,inst_33822);
var inst_33828 = cljs.core.seq.call(null,inst_33821__$1);
var inst_33829 = inst_33828;
var inst_33830 = null;
var inst_33831 = (0);
var inst_33832 = (0);
var state_33889__$1 = (function (){var statearr_33932 = state_33889;
(statearr_33932[(20)] = inst_33829);

(statearr_33932[(30)] = inst_33823);

(statearr_33932[(29)] = inst_33821__$1);

(statearr_33932[(10)] = inst_33832);

(statearr_33932[(11)] = inst_33830);

(statearr_33932[(21)] = inst_33831);

return statearr_33932;
})();
var statearr_33933_33999 = state_33889__$1;
(statearr_33933_33999[(2)] = null);

(statearr_33933_33999[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (28))){
var inst_33829 = (state_33889[(20)]);
var inst_33848 = (state_33889[(25)]);
var inst_33848__$1 = cljs.core.seq.call(null,inst_33829);
var state_33889__$1 = (function (){var statearr_33934 = state_33889;
(statearr_33934[(25)] = inst_33848__$1);

return statearr_33934;
})();
if(inst_33848__$1){
var statearr_33935_34000 = state_33889__$1;
(statearr_33935_34000[(1)] = (33));

} else {
var statearr_33936_34001 = state_33889__$1;
(statearr_33936_34001[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (25))){
var inst_33832 = (state_33889[(10)]);
var inst_33831 = (state_33889[(21)]);
var inst_33834 = (inst_33832 < inst_33831);
var inst_33835 = inst_33834;
var state_33889__$1 = state_33889;
if(cljs.core.truth_(inst_33835)){
var statearr_33937_34002 = state_33889__$1;
(statearr_33937_34002[(1)] = (27));

} else {
var statearr_33938_34003 = state_33889__$1;
(statearr_33938_34003[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (34))){
var state_33889__$1 = state_33889;
var statearr_33939_34004 = state_33889__$1;
(statearr_33939_34004[(2)] = null);

(statearr_33939_34004[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (17))){
var state_33889__$1 = state_33889;
var statearr_33940_34005 = state_33889__$1;
(statearr_33940_34005[(2)] = null);

(statearr_33940_34005[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (3))){
var inst_33887 = (state_33889[(2)]);
var state_33889__$1 = state_33889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33889__$1,inst_33887);
} else {
if((state_val_33890 === (12))){
var inst_33816 = (state_33889[(2)]);
var state_33889__$1 = state_33889;
var statearr_33941_34006 = state_33889__$1;
(statearr_33941_34006[(2)] = inst_33816);

(statearr_33941_34006[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (2))){
var state_33889__$1 = state_33889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33889__$1,(4),ch);
} else {
if((state_val_33890 === (23))){
var state_33889__$1 = state_33889;
var statearr_33942_34007 = state_33889__$1;
(statearr_33942_34007[(2)] = null);

(statearr_33942_34007[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (35))){
var inst_33871 = (state_33889[(2)]);
var state_33889__$1 = state_33889;
var statearr_33943_34008 = state_33889__$1;
(statearr_33943_34008[(2)] = inst_33871);

(statearr_33943_34008[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (19))){
var inst_33788 = (state_33889[(7)]);
var inst_33792 = cljs.core.chunk_first.call(null,inst_33788);
var inst_33793 = cljs.core.chunk_rest.call(null,inst_33788);
var inst_33794 = cljs.core.count.call(null,inst_33792);
var inst_33766 = inst_33793;
var inst_33767 = inst_33792;
var inst_33768 = inst_33794;
var inst_33769 = (0);
var state_33889__$1 = (function (){var statearr_33944 = state_33889;
(statearr_33944[(13)] = inst_33769);

(statearr_33944[(15)] = inst_33767);

(statearr_33944[(16)] = inst_33768);

(statearr_33944[(17)] = inst_33766);

return statearr_33944;
})();
var statearr_33945_34009 = state_33889__$1;
(statearr_33945_34009[(2)] = null);

(statearr_33945_34009[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (11))){
var inst_33788 = (state_33889[(7)]);
var inst_33766 = (state_33889[(17)]);
var inst_33788__$1 = cljs.core.seq.call(null,inst_33766);
var state_33889__$1 = (function (){var statearr_33946 = state_33889;
(statearr_33946[(7)] = inst_33788__$1);

return statearr_33946;
})();
if(inst_33788__$1){
var statearr_33947_34010 = state_33889__$1;
(statearr_33947_34010[(1)] = (16));

} else {
var statearr_33948_34011 = state_33889__$1;
(statearr_33948_34011[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (9))){
var inst_33818 = (state_33889[(2)]);
var state_33889__$1 = state_33889;
var statearr_33949_34012 = state_33889__$1;
(statearr_33949_34012[(2)] = inst_33818);

(statearr_33949_34012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (5))){
var inst_33764 = cljs.core.deref.call(null,cs);
var inst_33765 = cljs.core.seq.call(null,inst_33764);
var inst_33766 = inst_33765;
var inst_33767 = null;
var inst_33768 = (0);
var inst_33769 = (0);
var state_33889__$1 = (function (){var statearr_33950 = state_33889;
(statearr_33950[(13)] = inst_33769);

(statearr_33950[(15)] = inst_33767);

(statearr_33950[(16)] = inst_33768);

(statearr_33950[(17)] = inst_33766);

return statearr_33950;
})();
var statearr_33951_34013 = state_33889__$1;
(statearr_33951_34013[(2)] = null);

(statearr_33951_34013[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (14))){
var state_33889__$1 = state_33889;
var statearr_33952_34014 = state_33889__$1;
(statearr_33952_34014[(2)] = null);

(statearr_33952_34014[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (45))){
var inst_33879 = (state_33889[(2)]);
var state_33889__$1 = state_33889;
var statearr_33953_34015 = state_33889__$1;
(statearr_33953_34015[(2)] = inst_33879);

(statearr_33953_34015[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (26))){
var inst_33821 = (state_33889[(29)]);
var inst_33875 = (state_33889[(2)]);
var inst_33876 = cljs.core.seq.call(null,inst_33821);
var state_33889__$1 = (function (){var statearr_33954 = state_33889;
(statearr_33954[(31)] = inst_33875);

return statearr_33954;
})();
if(inst_33876){
var statearr_33955_34016 = state_33889__$1;
(statearr_33955_34016[(1)] = (42));

} else {
var statearr_33956_34017 = state_33889__$1;
(statearr_33956_34017[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (16))){
var inst_33788 = (state_33889[(7)]);
var inst_33790 = cljs.core.chunked_seq_QMARK_.call(null,inst_33788);
var state_33889__$1 = state_33889;
if(inst_33790){
var statearr_33957_34018 = state_33889__$1;
(statearr_33957_34018[(1)] = (19));

} else {
var statearr_33958_34019 = state_33889__$1;
(statearr_33958_34019[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (38))){
var inst_33868 = (state_33889[(2)]);
var state_33889__$1 = state_33889;
var statearr_33959_34020 = state_33889__$1;
(statearr_33959_34020[(2)] = inst_33868);

(statearr_33959_34020[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (30))){
var state_33889__$1 = state_33889;
var statearr_33960_34021 = state_33889__$1;
(statearr_33960_34021[(2)] = null);

(statearr_33960_34021[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (10))){
var inst_33769 = (state_33889[(13)]);
var inst_33767 = (state_33889[(15)]);
var inst_33777 = cljs.core._nth.call(null,inst_33767,inst_33769);
var inst_33778 = cljs.core.nth.call(null,inst_33777,(0),null);
var inst_33779 = cljs.core.nth.call(null,inst_33777,(1),null);
var state_33889__$1 = (function (){var statearr_33961 = state_33889;
(statearr_33961[(26)] = inst_33778);

return statearr_33961;
})();
if(cljs.core.truth_(inst_33779)){
var statearr_33962_34022 = state_33889__$1;
(statearr_33962_34022[(1)] = (13));

} else {
var statearr_33963_34023 = state_33889__$1;
(statearr_33963_34023[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (18))){
var inst_33814 = (state_33889[(2)]);
var state_33889__$1 = state_33889;
var statearr_33964_34024 = state_33889__$1;
(statearr_33964_34024[(2)] = inst_33814);

(statearr_33964_34024[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (42))){
var state_33889__$1 = state_33889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33889__$1,(45),dchan);
} else {
if((state_val_33890 === (37))){
var inst_33857 = (state_33889[(23)]);
var inst_33757 = (state_33889[(12)]);
var inst_33848 = (state_33889[(25)]);
var inst_33857__$1 = cljs.core.first.call(null,inst_33848);
var inst_33858 = cljs.core.async.put_BANG_.call(null,inst_33857__$1,inst_33757,done);
var state_33889__$1 = (function (){var statearr_33965 = state_33889;
(statearr_33965[(23)] = inst_33857__$1);

return statearr_33965;
})();
if(cljs.core.truth_(inst_33858)){
var statearr_33966_34025 = state_33889__$1;
(statearr_33966_34025[(1)] = (39));

} else {
var statearr_33967_34026 = state_33889__$1;
(statearr_33967_34026[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (8))){
var inst_33769 = (state_33889[(13)]);
var inst_33768 = (state_33889[(16)]);
var inst_33771 = (inst_33769 < inst_33768);
var inst_33772 = inst_33771;
var state_33889__$1 = state_33889;
if(cljs.core.truth_(inst_33772)){
var statearr_33968_34027 = state_33889__$1;
(statearr_33968_34027[(1)] = (10));

} else {
var statearr_33969_34028 = state_33889__$1;
(statearr_33969_34028[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__33058__auto__ = null;
var cljs$core$async$mult_$_state_machine__33058__auto____0 = (function (){
var statearr_33970 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33970[(0)] = cljs$core$async$mult_$_state_machine__33058__auto__);

(statearr_33970[(1)] = (1));

return statearr_33970;
});
var cljs$core$async$mult_$_state_machine__33058__auto____1 = (function (state_33889){
while(true){
var ret_value__33059__auto__ = (function (){try{while(true){
var result__33060__auto__ = switch__33057__auto__.call(null,state_33889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33060__auto__;
}
break;
}
}catch (e33971){if((e33971 instanceof Object)){
var ex__33061__auto__ = e33971;
var statearr_33972_34029 = state_33889;
(statearr_33972_34029[(5)] = ex__33061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34030 = state_33889;
state_33889 = G__34030;
continue;
} else {
return ret_value__33059__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33058__auto__ = function(state_33889){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33058__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33058__auto____1.call(this,state_33889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33058__auto____0;
cljs$core$async$mult_$_state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33058__auto____1;
return cljs$core$async$mult_$_state_machine__33058__auto__;
})()
})();
var state__33154__auto__ = (function (){var statearr_33973 = f__33153__auto__.call(null);
(statearr_33973[(6)] = c__33152__auto___33974);

return statearr_33973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33154__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__34032 = arguments.length;
switch (G__34032) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_34034 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_34034.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34035 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_34035.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34036 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34036.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34037 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,state_map);
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_34037.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34038 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,mode);
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34038.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34049 = arguments.length;
var i__4737__auto___34050 = (0);
while(true){
if((i__4737__auto___34050 < len__4736__auto___34049)){
args__4742__auto__.push((arguments[i__4737__auto___34050]));

var G__34051 = (i__4737__auto___34050 + (1));
i__4737__auto___34050 = G__34051;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34043){
var map__34044 = p__34043;
var map__34044__$1 = (((((!((map__34044 == null))))?(((((map__34044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34044):map__34044);
var opts = map__34044__$1;
var statearr_34046_34052 = state;
(statearr_34046_34052[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_34047_34053 = state;
(statearr_34047_34053[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_34048_34054 = state;
(statearr_34048_34054[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34039){
var G__34040 = cljs.core.first.call(null,seq34039);
var seq34039__$1 = cljs.core.next.call(null,seq34039);
var G__34041 = cljs.core.first.call(null,seq34039__$1);
var seq34039__$2 = cljs.core.next.call(null,seq34039__$1);
var G__34042 = cljs.core.first.call(null,seq34039__$2);
var seq34039__$3 = cljs.core.next.call(null,seq34039__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34040,G__34041,G__34042,seq34039__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34055 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34055 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34056){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34056 = meta34056;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34057,meta34056__$1){
var self__ = this;
var _34057__$1 = this;
return (new cljs.core.async.t_cljs$core$async34055(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34056__$1));
}));

(cljs.core.async.t_cljs$core$async34055.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34057){
var self__ = this;
var _34057__$1 = this;
return self__.meta34056;
}));

(cljs.core.async.t_cljs$core$async34055.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34055.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async34055.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34055.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async34055.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async34055.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async34055.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async34055.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async34055.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34056","meta34056",-383622783,null)], null);
}));

(cljs.core.async.t_cljs$core$async34055.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34055.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34055");

(cljs.core.async.t_cljs$core$async34055.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async34055");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34055.
 */
cljs.core.async.__GT_t_cljs$core$async34055 = (function cljs$core$async$mix_$___GT_t_cljs$core$async34055(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34056){
return (new cljs.core.async.t_cljs$core$async34055(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34056));
});

}

return (new cljs.core.async.t_cljs$core$async34055(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33152__auto___34219 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33153__auto__ = (function (){var switch__33057__auto__ = (function (state_34159){
var state_val_34160 = (state_34159[(1)]);
if((state_val_34160 === (7))){
var inst_34074 = (state_34159[(2)]);
var state_34159__$1 = state_34159;
var statearr_34161_34220 = state_34159__$1;
(statearr_34161_34220[(2)] = inst_34074);

(statearr_34161_34220[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (20))){
var inst_34086 = (state_34159[(7)]);
var state_34159__$1 = state_34159;
var statearr_34162_34221 = state_34159__$1;
(statearr_34162_34221[(2)] = inst_34086);

(statearr_34162_34221[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (27))){
var state_34159__$1 = state_34159;
var statearr_34163_34222 = state_34159__$1;
(statearr_34163_34222[(2)] = null);

(statearr_34163_34222[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (1))){
var inst_34061 = (state_34159[(8)]);
var inst_34061__$1 = calc_state.call(null);
var inst_34063 = (inst_34061__$1 == null);
var inst_34064 = cljs.core.not.call(null,inst_34063);
var state_34159__$1 = (function (){var statearr_34164 = state_34159;
(statearr_34164[(8)] = inst_34061__$1);

return statearr_34164;
})();
if(inst_34064){
var statearr_34165_34223 = state_34159__$1;
(statearr_34165_34223[(1)] = (2));

} else {
var statearr_34166_34224 = state_34159__$1;
(statearr_34166_34224[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (24))){
var inst_34110 = (state_34159[(9)]);
var inst_34133 = (state_34159[(10)]);
var inst_34119 = (state_34159[(11)]);
var inst_34133__$1 = inst_34110.call(null,inst_34119);
var state_34159__$1 = (function (){var statearr_34167 = state_34159;
(statearr_34167[(10)] = inst_34133__$1);

return statearr_34167;
})();
if(cljs.core.truth_(inst_34133__$1)){
var statearr_34168_34225 = state_34159__$1;
(statearr_34168_34225[(1)] = (29));

} else {
var statearr_34169_34226 = state_34159__$1;
(statearr_34169_34226[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (4))){
var inst_34077 = (state_34159[(2)]);
var state_34159__$1 = state_34159;
if(cljs.core.truth_(inst_34077)){
var statearr_34170_34227 = state_34159__$1;
(statearr_34170_34227[(1)] = (8));

} else {
var statearr_34171_34228 = state_34159__$1;
(statearr_34171_34228[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (15))){
var inst_34104 = (state_34159[(2)]);
var state_34159__$1 = state_34159;
if(cljs.core.truth_(inst_34104)){
var statearr_34172_34229 = state_34159__$1;
(statearr_34172_34229[(1)] = (19));

} else {
var statearr_34173_34230 = state_34159__$1;
(statearr_34173_34230[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (21))){
var inst_34109 = (state_34159[(12)]);
var inst_34109__$1 = (state_34159[(2)]);
var inst_34110 = cljs.core.get.call(null,inst_34109__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34111 = cljs.core.get.call(null,inst_34109__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34112 = cljs.core.get.call(null,inst_34109__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34159__$1 = (function (){var statearr_34174 = state_34159;
(statearr_34174[(13)] = inst_34111);

(statearr_34174[(9)] = inst_34110);

(statearr_34174[(12)] = inst_34109__$1);

return statearr_34174;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_34159__$1,(22),inst_34112);
} else {
if((state_val_34160 === (31))){
var inst_34141 = (state_34159[(2)]);
var state_34159__$1 = state_34159;
if(cljs.core.truth_(inst_34141)){
var statearr_34175_34231 = state_34159__$1;
(statearr_34175_34231[(1)] = (32));

} else {
var statearr_34176_34232 = state_34159__$1;
(statearr_34176_34232[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (32))){
var inst_34118 = (state_34159[(14)]);
var state_34159__$1 = state_34159;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34159__$1,(35),out,inst_34118);
} else {
if((state_val_34160 === (33))){
var inst_34109 = (state_34159[(12)]);
var inst_34086 = inst_34109;
var state_34159__$1 = (function (){var statearr_34177 = state_34159;
(statearr_34177[(7)] = inst_34086);

return statearr_34177;
})();
var statearr_34178_34233 = state_34159__$1;
(statearr_34178_34233[(2)] = null);

(statearr_34178_34233[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (13))){
var inst_34086 = (state_34159[(7)]);
var inst_34093 = inst_34086.cljs$lang$protocol_mask$partition0$;
var inst_34094 = (inst_34093 & (64));
var inst_34095 = inst_34086.cljs$core$ISeq$;
var inst_34096 = (cljs.core.PROTOCOL_SENTINEL === inst_34095);
var inst_34097 = ((inst_34094) || (inst_34096));
var state_34159__$1 = state_34159;
if(cljs.core.truth_(inst_34097)){
var statearr_34179_34234 = state_34159__$1;
(statearr_34179_34234[(1)] = (16));

} else {
var statearr_34180_34235 = state_34159__$1;
(statearr_34180_34235[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (22))){
var inst_34118 = (state_34159[(14)]);
var inst_34119 = (state_34159[(11)]);
var inst_34117 = (state_34159[(2)]);
var inst_34118__$1 = cljs.core.nth.call(null,inst_34117,(0),null);
var inst_34119__$1 = cljs.core.nth.call(null,inst_34117,(1),null);
var inst_34120 = (inst_34118__$1 == null);
var inst_34121 = cljs.core._EQ_.call(null,inst_34119__$1,change);
var inst_34122 = ((inst_34120) || (inst_34121));
var state_34159__$1 = (function (){var statearr_34181 = state_34159;
(statearr_34181[(14)] = inst_34118__$1);

(statearr_34181[(11)] = inst_34119__$1);

return statearr_34181;
})();
if(cljs.core.truth_(inst_34122)){
var statearr_34182_34236 = state_34159__$1;
(statearr_34182_34236[(1)] = (23));

} else {
var statearr_34183_34237 = state_34159__$1;
(statearr_34183_34237[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (36))){
var inst_34109 = (state_34159[(12)]);
var inst_34086 = inst_34109;
var state_34159__$1 = (function (){var statearr_34184 = state_34159;
(statearr_34184[(7)] = inst_34086);

return statearr_34184;
})();
var statearr_34185_34238 = state_34159__$1;
(statearr_34185_34238[(2)] = null);

(statearr_34185_34238[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (29))){
var inst_34133 = (state_34159[(10)]);
var state_34159__$1 = state_34159;
var statearr_34186_34239 = state_34159__$1;
(statearr_34186_34239[(2)] = inst_34133);

(statearr_34186_34239[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (6))){
var state_34159__$1 = state_34159;
var statearr_34187_34240 = state_34159__$1;
(statearr_34187_34240[(2)] = false);

(statearr_34187_34240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (28))){
var inst_34129 = (state_34159[(2)]);
var inst_34130 = calc_state.call(null);
var inst_34086 = inst_34130;
var state_34159__$1 = (function (){var statearr_34188 = state_34159;
(statearr_34188[(7)] = inst_34086);

(statearr_34188[(15)] = inst_34129);

return statearr_34188;
})();
var statearr_34189_34241 = state_34159__$1;
(statearr_34189_34241[(2)] = null);

(statearr_34189_34241[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (25))){
var inst_34155 = (state_34159[(2)]);
var state_34159__$1 = state_34159;
var statearr_34190_34242 = state_34159__$1;
(statearr_34190_34242[(2)] = inst_34155);

(statearr_34190_34242[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (34))){
var inst_34153 = (state_34159[(2)]);
var state_34159__$1 = state_34159;
var statearr_34191_34243 = state_34159__$1;
(statearr_34191_34243[(2)] = inst_34153);

(statearr_34191_34243[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (17))){
var state_34159__$1 = state_34159;
var statearr_34192_34244 = state_34159__$1;
(statearr_34192_34244[(2)] = false);

(statearr_34192_34244[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (3))){
var state_34159__$1 = state_34159;
var statearr_34193_34245 = state_34159__$1;
(statearr_34193_34245[(2)] = false);

(statearr_34193_34245[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (12))){
var inst_34157 = (state_34159[(2)]);
var state_34159__$1 = state_34159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34159__$1,inst_34157);
} else {
if((state_val_34160 === (2))){
var inst_34061 = (state_34159[(8)]);
var inst_34066 = inst_34061.cljs$lang$protocol_mask$partition0$;
var inst_34067 = (inst_34066 & (64));
var inst_34068 = inst_34061.cljs$core$ISeq$;
var inst_34069 = (cljs.core.PROTOCOL_SENTINEL === inst_34068);
var inst_34070 = ((inst_34067) || (inst_34069));
var state_34159__$1 = state_34159;
if(cljs.core.truth_(inst_34070)){
var statearr_34194_34246 = state_34159__$1;
(statearr_34194_34246[(1)] = (5));

} else {
var statearr_34195_34247 = state_34159__$1;
(statearr_34195_34247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (23))){
var inst_34118 = (state_34159[(14)]);
var inst_34124 = (inst_34118 == null);
var state_34159__$1 = state_34159;
if(cljs.core.truth_(inst_34124)){
var statearr_34196_34248 = state_34159__$1;
(statearr_34196_34248[(1)] = (26));

} else {
var statearr_34197_34249 = state_34159__$1;
(statearr_34197_34249[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (35))){
var inst_34144 = (state_34159[(2)]);
var state_34159__$1 = state_34159;
if(cljs.core.truth_(inst_34144)){
var statearr_34198_34250 = state_34159__$1;
(statearr_34198_34250[(1)] = (36));

} else {
var statearr_34199_34251 = state_34159__$1;
(statearr_34199_34251[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (19))){
var inst_34086 = (state_34159[(7)]);
var inst_34106 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34086);
var state_34159__$1 = state_34159;
var statearr_34200_34252 = state_34159__$1;
(statearr_34200_34252[(2)] = inst_34106);

(statearr_34200_34252[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (11))){
var inst_34086 = (state_34159[(7)]);
var inst_34090 = (inst_34086 == null);
var inst_34091 = cljs.core.not.call(null,inst_34090);
var state_34159__$1 = state_34159;
if(inst_34091){
var statearr_34201_34253 = state_34159__$1;
(statearr_34201_34253[(1)] = (13));

} else {
var statearr_34202_34254 = state_34159__$1;
(statearr_34202_34254[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (9))){
var inst_34061 = (state_34159[(8)]);
var state_34159__$1 = state_34159;
var statearr_34203_34255 = state_34159__$1;
(statearr_34203_34255[(2)] = inst_34061);

(statearr_34203_34255[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (5))){
var state_34159__$1 = state_34159;
var statearr_34204_34256 = state_34159__$1;
(statearr_34204_34256[(2)] = true);

(statearr_34204_34256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (14))){
var state_34159__$1 = state_34159;
var statearr_34205_34257 = state_34159__$1;
(statearr_34205_34257[(2)] = false);

(statearr_34205_34257[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (26))){
var inst_34119 = (state_34159[(11)]);
var inst_34126 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34119);
var state_34159__$1 = state_34159;
var statearr_34206_34258 = state_34159__$1;
(statearr_34206_34258[(2)] = inst_34126);

(statearr_34206_34258[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (16))){
var state_34159__$1 = state_34159;
var statearr_34207_34259 = state_34159__$1;
(statearr_34207_34259[(2)] = true);

(statearr_34207_34259[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (38))){
var inst_34149 = (state_34159[(2)]);
var state_34159__$1 = state_34159;
var statearr_34208_34260 = state_34159__$1;
(statearr_34208_34260[(2)] = inst_34149);

(statearr_34208_34260[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (30))){
var inst_34111 = (state_34159[(13)]);
var inst_34110 = (state_34159[(9)]);
var inst_34119 = (state_34159[(11)]);
var inst_34136 = cljs.core.empty_QMARK_.call(null,inst_34110);
var inst_34137 = inst_34111.call(null,inst_34119);
var inst_34138 = cljs.core.not.call(null,inst_34137);
var inst_34139 = ((inst_34136) && (inst_34138));
var state_34159__$1 = state_34159;
var statearr_34209_34261 = state_34159__$1;
(statearr_34209_34261[(2)] = inst_34139);

(statearr_34209_34261[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (10))){
var inst_34061 = (state_34159[(8)]);
var inst_34082 = (state_34159[(2)]);
var inst_34083 = cljs.core.get.call(null,inst_34082,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34084 = cljs.core.get.call(null,inst_34082,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34085 = cljs.core.get.call(null,inst_34082,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34086 = inst_34061;
var state_34159__$1 = (function (){var statearr_34210 = state_34159;
(statearr_34210[(16)] = inst_34083);

(statearr_34210[(17)] = inst_34084);

(statearr_34210[(7)] = inst_34086);

(statearr_34210[(18)] = inst_34085);

return statearr_34210;
})();
var statearr_34211_34262 = state_34159__$1;
(statearr_34211_34262[(2)] = null);

(statearr_34211_34262[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (18))){
var inst_34101 = (state_34159[(2)]);
var state_34159__$1 = state_34159;
var statearr_34212_34263 = state_34159__$1;
(statearr_34212_34263[(2)] = inst_34101);

(statearr_34212_34263[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (37))){
var state_34159__$1 = state_34159;
var statearr_34213_34264 = state_34159__$1;
(statearr_34213_34264[(2)] = null);

(statearr_34213_34264[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (8))){
var inst_34061 = (state_34159[(8)]);
var inst_34079 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34061);
var state_34159__$1 = state_34159;
var statearr_34214_34265 = state_34159__$1;
(statearr_34214_34265[(2)] = inst_34079);

(statearr_34214_34265[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__33058__auto__ = null;
var cljs$core$async$mix_$_state_machine__33058__auto____0 = (function (){
var statearr_34215 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34215[(0)] = cljs$core$async$mix_$_state_machine__33058__auto__);

(statearr_34215[(1)] = (1));

return statearr_34215;
});
var cljs$core$async$mix_$_state_machine__33058__auto____1 = (function (state_34159){
while(true){
var ret_value__33059__auto__ = (function (){try{while(true){
var result__33060__auto__ = switch__33057__auto__.call(null,state_34159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33060__auto__;
}
break;
}
}catch (e34216){if((e34216 instanceof Object)){
var ex__33061__auto__ = e34216;
var statearr_34217_34266 = state_34159;
(statearr_34217_34266[(5)] = ex__33061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34216;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34267 = state_34159;
state_34159 = G__34267;
continue;
} else {
return ret_value__33059__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33058__auto__ = function(state_34159){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33058__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33058__auto____1.call(this,state_34159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33058__auto____0;
cljs$core$async$mix_$_state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33058__auto____1;
return cljs$core$async$mix_$_state_machine__33058__auto__;
})()
})();
var state__33154__auto__ = (function (){var statearr_34218 = f__33153__auto__.call(null);
(statearr_34218[(6)] = c__33152__auto___34219);

return statearr_34218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33154__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_34270 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_34270.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34271 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_34271.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34272 = (function() {
var G__34273 = null;
var G__34273__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__34273__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__34273 = function(p,v){
switch(arguments.length){
case 1:
return G__34273__1.call(this,p);
case 2:
return G__34273__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34273.cljs$core$IFn$_invoke$arity$1 = G__34273__1;
G__34273.cljs$core$IFn$_invoke$arity$2 = G__34273__2;
return G__34273;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34269 = arguments.length;
switch (G__34269) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34272.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34272.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__34277 = arguments.length;
switch (G__34277) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__34275_SHARP_){
if(cljs.core.truth_(p1__34275_SHARP_.call(null,topic))){
return p1__34275_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__34275_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34278 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34278 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34279){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34279 = meta34279;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34280,meta34279__$1){
var self__ = this;
var _34280__$1 = this;
return (new cljs.core.async.t_cljs$core$async34278(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34279__$1));
}));

(cljs.core.async.t_cljs$core$async34278.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34280){
var self__ = this;
var _34280__$1 = this;
return self__.meta34279;
}));

(cljs.core.async.t_cljs$core$async34278.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34278.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34278.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34278.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async34278.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async34278.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async34278.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async34278.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34279","meta34279",1542083225,null)], null);
}));

(cljs.core.async.t_cljs$core$async34278.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34278.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34278");

(cljs.core.async.t_cljs$core$async34278.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async34278");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34278.
 */
cljs.core.async.__GT_t_cljs$core$async34278 = (function cljs$core$async$__GT_t_cljs$core$async34278(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34279){
return (new cljs.core.async.t_cljs$core$async34278(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34279));
});

}

return (new cljs.core.async.t_cljs$core$async34278(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33152__auto___34398 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33153__auto__ = (function (){var switch__33057__auto__ = (function (state_34352){
var state_val_34353 = (state_34352[(1)]);
if((state_val_34353 === (7))){
var inst_34348 = (state_34352[(2)]);
var state_34352__$1 = state_34352;
var statearr_34354_34399 = state_34352__$1;
(statearr_34354_34399[(2)] = inst_34348);

(statearr_34354_34399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34353 === (20))){
var state_34352__$1 = state_34352;
var statearr_34355_34400 = state_34352__$1;
(statearr_34355_34400[(2)] = null);

(statearr_34355_34400[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34353 === (1))){
var state_34352__$1 = state_34352;
var statearr_34356_34401 = state_34352__$1;
(statearr_34356_34401[(2)] = null);

(statearr_34356_34401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34353 === (24))){
var inst_34331 = (state_34352[(7)]);
var inst_34340 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34331);
var state_34352__$1 = state_34352;
var statearr_34357_34402 = state_34352__$1;
(statearr_34357_34402[(2)] = inst_34340);

(statearr_34357_34402[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34353 === (4))){
var inst_34283 = (state_34352[(8)]);
var inst_34283__$1 = (state_34352[(2)]);
var inst_34284 = (inst_34283__$1 == null);
var state_34352__$1 = (function (){var statearr_34358 = state_34352;
(statearr_34358[(8)] = inst_34283__$1);

return statearr_34358;
})();
if(cljs.core.truth_(inst_34284)){
var statearr_34359_34403 = state_34352__$1;
(statearr_34359_34403[(1)] = (5));

} else {
var statearr_34360_34404 = state_34352__$1;
(statearr_34360_34404[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34353 === (15))){
var inst_34325 = (state_34352[(2)]);
var state_34352__$1 = state_34352;
var statearr_34361_34405 = state_34352__$1;
(statearr_34361_34405[(2)] = inst_34325);

(statearr_34361_34405[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34353 === (21))){
var inst_34345 = (state_34352[(2)]);
var state_34352__$1 = (function (){var statearr_34362 = state_34352;
(statearr_34362[(9)] = inst_34345);

return statearr_34362;
})();
var statearr_34363_34406 = state_34352__$1;
(statearr_34363_34406[(2)] = null);

(statearr_34363_34406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34353 === (13))){
var inst_34307 = (state_34352[(10)]);
var inst_34309 = cljs.core.chunked_seq_QMARK_.call(null,inst_34307);
var state_34352__$1 = state_34352;
if(inst_34309){
var statearr_34364_34407 = state_34352__$1;
(statearr_34364_34407[(1)] = (16));

} else {
var statearr_34365_34408 = state_34352__$1;
(statearr_34365_34408[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34353 === (22))){
var inst_34337 = (state_34352[(2)]);
var state_34352__$1 = state_34352;
if(cljs.core.truth_(inst_34337)){
var statearr_34366_34409 = state_34352__$1;
(statearr_34366_34409[(1)] = (23));

} else {
var statearr_34367_34410 = state_34352__$1;
(statearr_34367_34410[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34353 === (6))){
var inst_34283 = (state_34352[(8)]);
var inst_34333 = (state_34352[(11)]);
var inst_34331 = (state_34352[(7)]);
var inst_34331__$1 = topic_fn.call(null,inst_34283);
var inst_34332 = cljs.core.deref.call(null,mults);
var inst_34333__$1 = cljs.core.get.call(null,inst_34332,inst_34331__$1);
var state_34352__$1 = (function (){var statearr_34368 = state_34352;
(statearr_34368[(11)] = inst_34333__$1);

(statearr_34368[(7)] = inst_34331__$1);

return statearr_34368;
})();
if(cljs.core.truth_(inst_34333__$1)){
var statearr_34369_34411 = state_34352__$1;
(statearr_34369_34411[(1)] = (19));

} else {
var statearr_34370_34412 = state_34352__$1;
(statearr_34370_34412[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34353 === (25))){
var inst_34342 = (state_34352[(2)]);
var state_34352__$1 = state_34352;
var statearr_34371_34413 = state_34352__$1;
(statearr_34371_34413[(2)] = inst_34342);

(statearr_34371_34413[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34353 === (17))){
var inst_34307 = (state_34352[(10)]);
var inst_34316 = cljs.core.first.call(null,inst_34307);
var inst_34317 = cljs.core.async.muxch_STAR_.call(null,inst_34316);
var inst_34318 = cljs.core.async.close_BANG_.call(null,inst_34317);
var inst_34319 = cljs.core.next.call(null,inst_34307);
var inst_34293 = inst_34319;
var inst_34294 = null;
var inst_34295 = (0);
var inst_34296 = (0);
var state_34352__$1 = (function (){var statearr_34372 = state_34352;
(statearr_34372[(12)] = inst_34293);

(statearr_34372[(13)] = inst_34318);

(statearr_34372[(14)] = inst_34294);

(statearr_34372[(15)] = inst_34296);

(statearr_34372[(16)] = inst_34295);

return statearr_34372;
})();
var statearr_34373_34414 = state_34352__$1;
(statearr_34373_34414[(2)] = null);

(statearr_34373_34414[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34353 === (3))){
var inst_34350 = (state_34352[(2)]);
var state_34352__$1 = state_34352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34352__$1,inst_34350);
} else {
if((state_val_34353 === (12))){
var inst_34327 = (state_34352[(2)]);
var state_34352__$1 = state_34352;
var statearr_34374_34415 = state_34352__$1;
(statearr_34374_34415[(2)] = inst_34327);

(statearr_34374_34415[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34353 === (2))){
var state_34352__$1 = state_34352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34352__$1,(4),ch);
} else {
if((state_val_34353 === (23))){
var state_34352__$1 = state_34352;
var statearr_34375_34416 = state_34352__$1;
(statearr_34375_34416[(2)] = null);

(statearr_34375_34416[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34353 === (19))){
var inst_34283 = (state_34352[(8)]);
var inst_34333 = (state_34352[(11)]);
var inst_34335 = cljs.core.async.muxch_STAR_.call(null,inst_34333);
var state_34352__$1 = state_34352;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34352__$1,(22),inst_34335,inst_34283);
} else {
if((state_val_34353 === (11))){
var inst_34293 = (state_34352[(12)]);
var inst_34307 = (state_34352[(10)]);
var inst_34307__$1 = cljs.core.seq.call(null,inst_34293);
var state_34352__$1 = (function (){var statearr_34376 = state_34352;
(statearr_34376[(10)] = inst_34307__$1);

return statearr_34376;
})();
if(inst_34307__$1){
var statearr_34377_34417 = state_34352__$1;
(statearr_34377_34417[(1)] = (13));

} else {
var statearr_34378_34418 = state_34352__$1;
(statearr_34378_34418[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34353 === (9))){
var inst_34329 = (state_34352[(2)]);
var state_34352__$1 = state_34352;
var statearr_34379_34419 = state_34352__$1;
(statearr_34379_34419[(2)] = inst_34329);

(statearr_34379_34419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34353 === (5))){
var inst_34290 = cljs.core.deref.call(null,mults);
var inst_34291 = cljs.core.vals.call(null,inst_34290);
var inst_34292 = cljs.core.seq.call(null,inst_34291);
var inst_34293 = inst_34292;
var inst_34294 = null;
var inst_34295 = (0);
var inst_34296 = (0);
var state_34352__$1 = (function (){var statearr_34380 = state_34352;
(statearr_34380[(12)] = inst_34293);

(statearr_34380[(14)] = inst_34294);

(statearr_34380[(15)] = inst_34296);

(statearr_34380[(16)] = inst_34295);

return statearr_34380;
})();
var statearr_34381_34420 = state_34352__$1;
(statearr_34381_34420[(2)] = null);

(statearr_34381_34420[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34353 === (14))){
var state_34352__$1 = state_34352;
var statearr_34385_34421 = state_34352__$1;
(statearr_34385_34421[(2)] = null);

(statearr_34385_34421[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34353 === (16))){
var inst_34307 = (state_34352[(10)]);
var inst_34311 = cljs.core.chunk_first.call(null,inst_34307);
var inst_34312 = cljs.core.chunk_rest.call(null,inst_34307);
var inst_34313 = cljs.core.count.call(null,inst_34311);
var inst_34293 = inst_34312;
var inst_34294 = inst_34311;
var inst_34295 = inst_34313;
var inst_34296 = (0);
var state_34352__$1 = (function (){var statearr_34386 = state_34352;
(statearr_34386[(12)] = inst_34293);

(statearr_34386[(14)] = inst_34294);

(statearr_34386[(15)] = inst_34296);

(statearr_34386[(16)] = inst_34295);

return statearr_34386;
})();
var statearr_34387_34422 = state_34352__$1;
(statearr_34387_34422[(2)] = null);

(statearr_34387_34422[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34353 === (10))){
var inst_34293 = (state_34352[(12)]);
var inst_34294 = (state_34352[(14)]);
var inst_34296 = (state_34352[(15)]);
var inst_34295 = (state_34352[(16)]);
var inst_34301 = cljs.core._nth.call(null,inst_34294,inst_34296);
var inst_34302 = cljs.core.async.muxch_STAR_.call(null,inst_34301);
var inst_34303 = cljs.core.async.close_BANG_.call(null,inst_34302);
var inst_34304 = (inst_34296 + (1));
var tmp34382 = inst_34293;
var tmp34383 = inst_34294;
var tmp34384 = inst_34295;
var inst_34293__$1 = tmp34382;
var inst_34294__$1 = tmp34383;
var inst_34295__$1 = tmp34384;
var inst_34296__$1 = inst_34304;
var state_34352__$1 = (function (){var statearr_34388 = state_34352;
(statearr_34388[(12)] = inst_34293__$1);

(statearr_34388[(14)] = inst_34294__$1);

(statearr_34388[(15)] = inst_34296__$1);

(statearr_34388[(16)] = inst_34295__$1);

(statearr_34388[(17)] = inst_34303);

return statearr_34388;
})();
var statearr_34389_34423 = state_34352__$1;
(statearr_34389_34423[(2)] = null);

(statearr_34389_34423[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34353 === (18))){
var inst_34322 = (state_34352[(2)]);
var state_34352__$1 = state_34352;
var statearr_34390_34424 = state_34352__$1;
(statearr_34390_34424[(2)] = inst_34322);

(statearr_34390_34424[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34353 === (8))){
var inst_34296 = (state_34352[(15)]);
var inst_34295 = (state_34352[(16)]);
var inst_34298 = (inst_34296 < inst_34295);
var inst_34299 = inst_34298;
var state_34352__$1 = state_34352;
if(cljs.core.truth_(inst_34299)){
var statearr_34391_34425 = state_34352__$1;
(statearr_34391_34425[(1)] = (10));

} else {
var statearr_34392_34426 = state_34352__$1;
(statearr_34392_34426[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__33058__auto__ = null;
var cljs$core$async$state_machine__33058__auto____0 = (function (){
var statearr_34393 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34393[(0)] = cljs$core$async$state_machine__33058__auto__);

(statearr_34393[(1)] = (1));

return statearr_34393;
});
var cljs$core$async$state_machine__33058__auto____1 = (function (state_34352){
while(true){
var ret_value__33059__auto__ = (function (){try{while(true){
var result__33060__auto__ = switch__33057__auto__.call(null,state_34352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33060__auto__;
}
break;
}
}catch (e34394){if((e34394 instanceof Object)){
var ex__33061__auto__ = e34394;
var statearr_34395_34427 = state_34352;
(statearr_34395_34427[(5)] = ex__33061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34428 = state_34352;
state_34352 = G__34428;
continue;
} else {
return ret_value__33059__auto__;
}
break;
}
});
cljs$core$async$state_machine__33058__auto__ = function(state_34352){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33058__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33058__auto____1.call(this,state_34352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33058__auto____0;
cljs$core$async$state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33058__auto____1;
return cljs$core$async$state_machine__33058__auto__;
})()
})();
var state__33154__auto__ = (function (){var statearr_34396 = f__33153__auto__.call(null);
(statearr_34396[(6)] = c__33152__auto___34398);

return statearr_34396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33154__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34430 = arguments.length;
switch (G__34430) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__34433 = arguments.length;
switch (G__34433) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__34436 = arguments.length;
switch (G__34436) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__33152__auto___34503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33153__auto__ = (function (){var switch__33057__auto__ = (function (state_34475){
var state_val_34476 = (state_34475[(1)]);
if((state_val_34476 === (7))){
var state_34475__$1 = state_34475;
var statearr_34477_34504 = state_34475__$1;
(statearr_34477_34504[(2)] = null);

(statearr_34477_34504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (1))){
var state_34475__$1 = state_34475;
var statearr_34478_34505 = state_34475__$1;
(statearr_34478_34505[(2)] = null);

(statearr_34478_34505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (4))){
var inst_34439 = (state_34475[(7)]);
var inst_34441 = (inst_34439 < cnt);
var state_34475__$1 = state_34475;
if(cljs.core.truth_(inst_34441)){
var statearr_34479_34506 = state_34475__$1;
(statearr_34479_34506[(1)] = (6));

} else {
var statearr_34480_34507 = state_34475__$1;
(statearr_34480_34507[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (15))){
var inst_34471 = (state_34475[(2)]);
var state_34475__$1 = state_34475;
var statearr_34481_34508 = state_34475__$1;
(statearr_34481_34508[(2)] = inst_34471);

(statearr_34481_34508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (13))){
var inst_34464 = cljs.core.async.close_BANG_.call(null,out);
var state_34475__$1 = state_34475;
var statearr_34482_34509 = state_34475__$1;
(statearr_34482_34509[(2)] = inst_34464);

(statearr_34482_34509[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (6))){
var state_34475__$1 = state_34475;
var statearr_34483_34510 = state_34475__$1;
(statearr_34483_34510[(2)] = null);

(statearr_34483_34510[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (3))){
var inst_34473 = (state_34475[(2)]);
var state_34475__$1 = state_34475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34475__$1,inst_34473);
} else {
if((state_val_34476 === (12))){
var inst_34461 = (state_34475[(8)]);
var inst_34461__$1 = (state_34475[(2)]);
var inst_34462 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34461__$1);
var state_34475__$1 = (function (){var statearr_34484 = state_34475;
(statearr_34484[(8)] = inst_34461__$1);

return statearr_34484;
})();
if(cljs.core.truth_(inst_34462)){
var statearr_34485_34511 = state_34475__$1;
(statearr_34485_34511[(1)] = (13));

} else {
var statearr_34486_34512 = state_34475__$1;
(statearr_34486_34512[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (2))){
var inst_34438 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_34439 = (0);
var state_34475__$1 = (function (){var statearr_34487 = state_34475;
(statearr_34487[(7)] = inst_34439);

(statearr_34487[(9)] = inst_34438);

return statearr_34487;
})();
var statearr_34488_34513 = state_34475__$1;
(statearr_34488_34513[(2)] = null);

(statearr_34488_34513[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (11))){
var inst_34439 = (state_34475[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34475,(10),Object,null,(9));
var inst_34448 = chs__$1.call(null,inst_34439);
var inst_34449 = done.call(null,inst_34439);
var inst_34450 = cljs.core.async.take_BANG_.call(null,inst_34448,inst_34449);
var state_34475__$1 = state_34475;
var statearr_34489_34514 = state_34475__$1;
(statearr_34489_34514[(2)] = inst_34450);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34475__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (9))){
var inst_34439 = (state_34475[(7)]);
var inst_34452 = (state_34475[(2)]);
var inst_34453 = (inst_34439 + (1));
var inst_34439__$1 = inst_34453;
var state_34475__$1 = (function (){var statearr_34490 = state_34475;
(statearr_34490[(7)] = inst_34439__$1);

(statearr_34490[(10)] = inst_34452);

return statearr_34490;
})();
var statearr_34491_34515 = state_34475__$1;
(statearr_34491_34515[(2)] = null);

(statearr_34491_34515[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (5))){
var inst_34459 = (state_34475[(2)]);
var state_34475__$1 = (function (){var statearr_34492 = state_34475;
(statearr_34492[(11)] = inst_34459);

return statearr_34492;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34475__$1,(12),dchan);
} else {
if((state_val_34476 === (14))){
var inst_34461 = (state_34475[(8)]);
var inst_34466 = cljs.core.apply.call(null,f,inst_34461);
var state_34475__$1 = state_34475;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34475__$1,(16),out,inst_34466);
} else {
if((state_val_34476 === (16))){
var inst_34468 = (state_34475[(2)]);
var state_34475__$1 = (function (){var statearr_34493 = state_34475;
(statearr_34493[(12)] = inst_34468);

return statearr_34493;
})();
var statearr_34494_34516 = state_34475__$1;
(statearr_34494_34516[(2)] = null);

(statearr_34494_34516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (10))){
var inst_34443 = (state_34475[(2)]);
var inst_34444 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_34475__$1 = (function (){var statearr_34495 = state_34475;
(statearr_34495[(13)] = inst_34443);

return statearr_34495;
})();
var statearr_34496_34517 = state_34475__$1;
(statearr_34496_34517[(2)] = inst_34444);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34475__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (8))){
var inst_34457 = (state_34475[(2)]);
var state_34475__$1 = state_34475;
var statearr_34497_34518 = state_34475__$1;
(statearr_34497_34518[(2)] = inst_34457);

(statearr_34497_34518[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__33058__auto__ = null;
var cljs$core$async$state_machine__33058__auto____0 = (function (){
var statearr_34498 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34498[(0)] = cljs$core$async$state_machine__33058__auto__);

(statearr_34498[(1)] = (1));

return statearr_34498;
});
var cljs$core$async$state_machine__33058__auto____1 = (function (state_34475){
while(true){
var ret_value__33059__auto__ = (function (){try{while(true){
var result__33060__auto__ = switch__33057__auto__.call(null,state_34475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33060__auto__;
}
break;
}
}catch (e34499){if((e34499 instanceof Object)){
var ex__33061__auto__ = e34499;
var statearr_34500_34519 = state_34475;
(statearr_34500_34519[(5)] = ex__33061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34520 = state_34475;
state_34475 = G__34520;
continue;
} else {
return ret_value__33059__auto__;
}
break;
}
});
cljs$core$async$state_machine__33058__auto__ = function(state_34475){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33058__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33058__auto____1.call(this,state_34475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33058__auto____0;
cljs$core$async$state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33058__auto____1;
return cljs$core$async$state_machine__33058__auto__;
})()
})();
var state__33154__auto__ = (function (){var statearr_34501 = f__33153__auto__.call(null);
(statearr_34501[(6)] = c__33152__auto___34503);

return statearr_34501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33154__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34523 = arguments.length;
switch (G__34523) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33152__auto___34577 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33153__auto__ = (function (){var switch__33057__auto__ = (function (state_34555){
var state_val_34556 = (state_34555[(1)]);
if((state_val_34556 === (7))){
var inst_34535 = (state_34555[(7)]);
var inst_34534 = (state_34555[(8)]);
var inst_34534__$1 = (state_34555[(2)]);
var inst_34535__$1 = cljs.core.nth.call(null,inst_34534__$1,(0),null);
var inst_34536 = cljs.core.nth.call(null,inst_34534__$1,(1),null);
var inst_34537 = (inst_34535__$1 == null);
var state_34555__$1 = (function (){var statearr_34557 = state_34555;
(statearr_34557[(7)] = inst_34535__$1);

(statearr_34557[(8)] = inst_34534__$1);

(statearr_34557[(9)] = inst_34536);

return statearr_34557;
})();
if(cljs.core.truth_(inst_34537)){
var statearr_34558_34578 = state_34555__$1;
(statearr_34558_34578[(1)] = (8));

} else {
var statearr_34559_34579 = state_34555__$1;
(statearr_34559_34579[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34556 === (1))){
var inst_34524 = cljs.core.vec.call(null,chs);
var inst_34525 = inst_34524;
var state_34555__$1 = (function (){var statearr_34560 = state_34555;
(statearr_34560[(10)] = inst_34525);

return statearr_34560;
})();
var statearr_34561_34580 = state_34555__$1;
(statearr_34561_34580[(2)] = null);

(statearr_34561_34580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34556 === (4))){
var inst_34525 = (state_34555[(10)]);
var state_34555__$1 = state_34555;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34555__$1,(7),inst_34525);
} else {
if((state_val_34556 === (6))){
var inst_34551 = (state_34555[(2)]);
var state_34555__$1 = state_34555;
var statearr_34562_34581 = state_34555__$1;
(statearr_34562_34581[(2)] = inst_34551);

(statearr_34562_34581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34556 === (3))){
var inst_34553 = (state_34555[(2)]);
var state_34555__$1 = state_34555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34555__$1,inst_34553);
} else {
if((state_val_34556 === (2))){
var inst_34525 = (state_34555[(10)]);
var inst_34527 = cljs.core.count.call(null,inst_34525);
var inst_34528 = (inst_34527 > (0));
var state_34555__$1 = state_34555;
if(cljs.core.truth_(inst_34528)){
var statearr_34564_34582 = state_34555__$1;
(statearr_34564_34582[(1)] = (4));

} else {
var statearr_34565_34583 = state_34555__$1;
(statearr_34565_34583[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34556 === (11))){
var inst_34525 = (state_34555[(10)]);
var inst_34544 = (state_34555[(2)]);
var tmp34563 = inst_34525;
var inst_34525__$1 = tmp34563;
var state_34555__$1 = (function (){var statearr_34566 = state_34555;
(statearr_34566[(11)] = inst_34544);

(statearr_34566[(10)] = inst_34525__$1);

return statearr_34566;
})();
var statearr_34567_34584 = state_34555__$1;
(statearr_34567_34584[(2)] = null);

(statearr_34567_34584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34556 === (9))){
var inst_34535 = (state_34555[(7)]);
var state_34555__$1 = state_34555;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34555__$1,(11),out,inst_34535);
} else {
if((state_val_34556 === (5))){
var inst_34549 = cljs.core.async.close_BANG_.call(null,out);
var state_34555__$1 = state_34555;
var statearr_34568_34585 = state_34555__$1;
(statearr_34568_34585[(2)] = inst_34549);

(statearr_34568_34585[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34556 === (10))){
var inst_34547 = (state_34555[(2)]);
var state_34555__$1 = state_34555;
var statearr_34569_34586 = state_34555__$1;
(statearr_34569_34586[(2)] = inst_34547);

(statearr_34569_34586[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34556 === (8))){
var inst_34535 = (state_34555[(7)]);
var inst_34534 = (state_34555[(8)]);
var inst_34536 = (state_34555[(9)]);
var inst_34525 = (state_34555[(10)]);
var inst_34539 = (function (){var cs = inst_34525;
var vec__34530 = inst_34534;
var v = inst_34535;
var c = inst_34536;
return (function (p1__34521_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34521_SHARP_);
});
})();
var inst_34540 = cljs.core.filterv.call(null,inst_34539,inst_34525);
var inst_34525__$1 = inst_34540;
var state_34555__$1 = (function (){var statearr_34570 = state_34555;
(statearr_34570[(10)] = inst_34525__$1);

return statearr_34570;
})();
var statearr_34571_34587 = state_34555__$1;
(statearr_34571_34587[(2)] = null);

(statearr_34571_34587[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__33058__auto__ = null;
var cljs$core$async$state_machine__33058__auto____0 = (function (){
var statearr_34572 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34572[(0)] = cljs$core$async$state_machine__33058__auto__);

(statearr_34572[(1)] = (1));

return statearr_34572;
});
var cljs$core$async$state_machine__33058__auto____1 = (function (state_34555){
while(true){
var ret_value__33059__auto__ = (function (){try{while(true){
var result__33060__auto__ = switch__33057__auto__.call(null,state_34555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33060__auto__;
}
break;
}
}catch (e34573){if((e34573 instanceof Object)){
var ex__33061__auto__ = e34573;
var statearr_34574_34588 = state_34555;
(statearr_34574_34588[(5)] = ex__33061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34589 = state_34555;
state_34555 = G__34589;
continue;
} else {
return ret_value__33059__auto__;
}
break;
}
});
cljs$core$async$state_machine__33058__auto__ = function(state_34555){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33058__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33058__auto____1.call(this,state_34555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33058__auto____0;
cljs$core$async$state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33058__auto____1;
return cljs$core$async$state_machine__33058__auto__;
})()
})();
var state__33154__auto__ = (function (){var statearr_34575 = f__33153__auto__.call(null);
(statearr_34575[(6)] = c__33152__auto___34577);

return statearr_34575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33154__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34591 = arguments.length;
switch (G__34591) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33152__auto___34636 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33153__auto__ = (function (){var switch__33057__auto__ = (function (state_34615){
var state_val_34616 = (state_34615[(1)]);
if((state_val_34616 === (7))){
var inst_34597 = (state_34615[(7)]);
var inst_34597__$1 = (state_34615[(2)]);
var inst_34598 = (inst_34597__$1 == null);
var inst_34599 = cljs.core.not.call(null,inst_34598);
var state_34615__$1 = (function (){var statearr_34617 = state_34615;
(statearr_34617[(7)] = inst_34597__$1);

return statearr_34617;
})();
if(inst_34599){
var statearr_34618_34637 = state_34615__$1;
(statearr_34618_34637[(1)] = (8));

} else {
var statearr_34619_34638 = state_34615__$1;
(statearr_34619_34638[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (1))){
var inst_34592 = (0);
var state_34615__$1 = (function (){var statearr_34620 = state_34615;
(statearr_34620[(8)] = inst_34592);

return statearr_34620;
})();
var statearr_34621_34639 = state_34615__$1;
(statearr_34621_34639[(2)] = null);

(statearr_34621_34639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (4))){
var state_34615__$1 = state_34615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34615__$1,(7),ch);
} else {
if((state_val_34616 === (6))){
var inst_34610 = (state_34615[(2)]);
var state_34615__$1 = state_34615;
var statearr_34622_34640 = state_34615__$1;
(statearr_34622_34640[(2)] = inst_34610);

(statearr_34622_34640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (3))){
var inst_34612 = (state_34615[(2)]);
var inst_34613 = cljs.core.async.close_BANG_.call(null,out);
var state_34615__$1 = (function (){var statearr_34623 = state_34615;
(statearr_34623[(9)] = inst_34612);

return statearr_34623;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34615__$1,inst_34613);
} else {
if((state_val_34616 === (2))){
var inst_34592 = (state_34615[(8)]);
var inst_34594 = (inst_34592 < n);
var state_34615__$1 = state_34615;
if(cljs.core.truth_(inst_34594)){
var statearr_34624_34641 = state_34615__$1;
(statearr_34624_34641[(1)] = (4));

} else {
var statearr_34625_34642 = state_34615__$1;
(statearr_34625_34642[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (11))){
var inst_34592 = (state_34615[(8)]);
var inst_34602 = (state_34615[(2)]);
var inst_34603 = (inst_34592 + (1));
var inst_34592__$1 = inst_34603;
var state_34615__$1 = (function (){var statearr_34626 = state_34615;
(statearr_34626[(10)] = inst_34602);

(statearr_34626[(8)] = inst_34592__$1);

return statearr_34626;
})();
var statearr_34627_34643 = state_34615__$1;
(statearr_34627_34643[(2)] = null);

(statearr_34627_34643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (9))){
var state_34615__$1 = state_34615;
var statearr_34628_34644 = state_34615__$1;
(statearr_34628_34644[(2)] = null);

(statearr_34628_34644[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (5))){
var state_34615__$1 = state_34615;
var statearr_34629_34645 = state_34615__$1;
(statearr_34629_34645[(2)] = null);

(statearr_34629_34645[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (10))){
var inst_34607 = (state_34615[(2)]);
var state_34615__$1 = state_34615;
var statearr_34630_34646 = state_34615__$1;
(statearr_34630_34646[(2)] = inst_34607);

(statearr_34630_34646[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (8))){
var inst_34597 = (state_34615[(7)]);
var state_34615__$1 = state_34615;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34615__$1,(11),out,inst_34597);
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
});
return (function() {
var cljs$core$async$state_machine__33058__auto__ = null;
var cljs$core$async$state_machine__33058__auto____0 = (function (){
var statearr_34631 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34631[(0)] = cljs$core$async$state_machine__33058__auto__);

(statearr_34631[(1)] = (1));

return statearr_34631;
});
var cljs$core$async$state_machine__33058__auto____1 = (function (state_34615){
while(true){
var ret_value__33059__auto__ = (function (){try{while(true){
var result__33060__auto__ = switch__33057__auto__.call(null,state_34615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33060__auto__;
}
break;
}
}catch (e34632){if((e34632 instanceof Object)){
var ex__33061__auto__ = e34632;
var statearr_34633_34647 = state_34615;
(statearr_34633_34647[(5)] = ex__33061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34648 = state_34615;
state_34615 = G__34648;
continue;
} else {
return ret_value__33059__auto__;
}
break;
}
});
cljs$core$async$state_machine__33058__auto__ = function(state_34615){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33058__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33058__auto____1.call(this,state_34615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33058__auto____0;
cljs$core$async$state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33058__auto____1;
return cljs$core$async$state_machine__33058__auto__;
})()
})();
var state__33154__auto__ = (function (){var statearr_34634 = f__33153__auto__.call(null);
(statearr_34634[(6)] = c__33152__auto___34636);

return statearr_34634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33154__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34650 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34650 = (function (f,ch,meta34651){
this.f = f;
this.ch = ch;
this.meta34651 = meta34651;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34652,meta34651__$1){
var self__ = this;
var _34652__$1 = this;
return (new cljs.core.async.t_cljs$core$async34650(self__.f,self__.ch,meta34651__$1));
}));

(cljs.core.async.t_cljs$core$async34650.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34652){
var self__ = this;
var _34652__$1 = this;
return self__.meta34651;
}));

(cljs.core.async.t_cljs$core$async34650.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34650.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async34650.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async34650.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34650.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34653 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34653 = (function (f,ch,meta34651,_,fn1,meta34654){
this.f = f;
this.ch = ch;
this.meta34651 = meta34651;
this._ = _;
this.fn1 = fn1;
this.meta34654 = meta34654;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34655,meta34654__$1){
var self__ = this;
var _34655__$1 = this;
return (new cljs.core.async.t_cljs$core$async34653(self__.f,self__.ch,self__.meta34651,self__._,self__.fn1,meta34654__$1));
}));

(cljs.core.async.t_cljs$core$async34653.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34655){
var self__ = this;
var _34655__$1 = this;
return self__.meta34654;
}));

(cljs.core.async.t_cljs$core$async34653.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34653.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34653.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34653.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__34649_SHARP_){
return f1.call(null,(((p1__34649_SHARP_ == null))?null:self__.f.call(null,p1__34649_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async34653.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34651","meta34651",690888230,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34650","cljs.core.async/t_cljs$core$async34650",-74764240,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34654","meta34654",59803788,null)], null);
}));

(cljs.core.async.t_cljs$core$async34653.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34653.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34653");

(cljs.core.async.t_cljs$core$async34653.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async34653");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34653.
 */
cljs.core.async.__GT_t_cljs$core$async34653 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34653(f__$1,ch__$1,meta34651__$1,___$2,fn1__$1,meta34654){
return (new cljs.core.async.t_cljs$core$async34653(f__$1,ch__$1,meta34651__$1,___$2,fn1__$1,meta34654));
});

}

return (new cljs.core.async.t_cljs$core$async34653(self__.f,self__.ch,self__.meta34651,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34650.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34650.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34650.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34651","meta34651",690888230,null)], null);
}));

(cljs.core.async.t_cljs$core$async34650.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34650.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34650");

(cljs.core.async.t_cljs$core$async34650.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async34650");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34650.
 */
cljs.core.async.__GT_t_cljs$core$async34650 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34650(f__$1,ch__$1,meta34651){
return (new cljs.core.async.t_cljs$core$async34650(f__$1,ch__$1,meta34651));
});

}

return (new cljs.core.async.t_cljs$core$async34650(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34656 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34656 = (function (f,ch,meta34657){
this.f = f;
this.ch = ch;
this.meta34657 = meta34657;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34658,meta34657__$1){
var self__ = this;
var _34658__$1 = this;
return (new cljs.core.async.t_cljs$core$async34656(self__.f,self__.ch,meta34657__$1));
}));

(cljs.core.async.t_cljs$core$async34656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34658){
var self__ = this;
var _34658__$1 = this;
return self__.meta34657;
}));

(cljs.core.async.t_cljs$core$async34656.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34656.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async34656.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34656.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34656.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34656.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async34656.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34657","meta34657",1618244647,null)], null);
}));

(cljs.core.async.t_cljs$core$async34656.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34656.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34656");

(cljs.core.async.t_cljs$core$async34656.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async34656");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34656.
 */
cljs.core.async.__GT_t_cljs$core$async34656 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34656(f__$1,ch__$1,meta34657){
return (new cljs.core.async.t_cljs$core$async34656(f__$1,ch__$1,meta34657));
});

}

return (new cljs.core.async.t_cljs$core$async34656(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34659 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34659 = (function (p,ch,meta34660){
this.p = p;
this.ch = ch;
this.meta34660 = meta34660;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34661,meta34660__$1){
var self__ = this;
var _34661__$1 = this;
return (new cljs.core.async.t_cljs$core$async34659(self__.p,self__.ch,meta34660__$1));
}));

(cljs.core.async.t_cljs$core$async34659.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34661){
var self__ = this;
var _34661__$1 = this;
return self__.meta34660;
}));

(cljs.core.async.t_cljs$core$async34659.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34659.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async34659.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async34659.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34659.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34659.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34659.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34659.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34660","meta34660",1134636335,null)], null);
}));

(cljs.core.async.t_cljs$core$async34659.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34659.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34659");

(cljs.core.async.t_cljs$core$async34659.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async34659");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34659.
 */
cljs.core.async.__GT_t_cljs$core$async34659 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34659(p__$1,ch__$1,meta34660){
return (new cljs.core.async.t_cljs$core$async34659(p__$1,ch__$1,meta34660));
});

}

return (new cljs.core.async.t_cljs$core$async34659(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34663 = arguments.length;
switch (G__34663) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33152__auto___34703 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33153__auto__ = (function (){var switch__33057__auto__ = (function (state_34684){
var state_val_34685 = (state_34684[(1)]);
if((state_val_34685 === (7))){
var inst_34680 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
var statearr_34686_34704 = state_34684__$1;
(statearr_34686_34704[(2)] = inst_34680);

(statearr_34686_34704[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (1))){
var state_34684__$1 = state_34684;
var statearr_34687_34705 = state_34684__$1;
(statearr_34687_34705[(2)] = null);

(statearr_34687_34705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (4))){
var inst_34666 = (state_34684[(7)]);
var inst_34666__$1 = (state_34684[(2)]);
var inst_34667 = (inst_34666__$1 == null);
var state_34684__$1 = (function (){var statearr_34688 = state_34684;
(statearr_34688[(7)] = inst_34666__$1);

return statearr_34688;
})();
if(cljs.core.truth_(inst_34667)){
var statearr_34689_34706 = state_34684__$1;
(statearr_34689_34706[(1)] = (5));

} else {
var statearr_34690_34707 = state_34684__$1;
(statearr_34690_34707[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (6))){
var inst_34666 = (state_34684[(7)]);
var inst_34671 = p.call(null,inst_34666);
var state_34684__$1 = state_34684;
if(cljs.core.truth_(inst_34671)){
var statearr_34691_34708 = state_34684__$1;
(statearr_34691_34708[(1)] = (8));

} else {
var statearr_34692_34709 = state_34684__$1;
(statearr_34692_34709[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (3))){
var inst_34682 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34684__$1,inst_34682);
} else {
if((state_val_34685 === (2))){
var state_34684__$1 = state_34684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34684__$1,(4),ch);
} else {
if((state_val_34685 === (11))){
var inst_34674 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
var statearr_34693_34710 = state_34684__$1;
(statearr_34693_34710[(2)] = inst_34674);

(statearr_34693_34710[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (9))){
var state_34684__$1 = state_34684;
var statearr_34694_34711 = state_34684__$1;
(statearr_34694_34711[(2)] = null);

(statearr_34694_34711[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (5))){
var inst_34669 = cljs.core.async.close_BANG_.call(null,out);
var state_34684__$1 = state_34684;
var statearr_34695_34712 = state_34684__$1;
(statearr_34695_34712[(2)] = inst_34669);

(statearr_34695_34712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (10))){
var inst_34677 = (state_34684[(2)]);
var state_34684__$1 = (function (){var statearr_34696 = state_34684;
(statearr_34696[(8)] = inst_34677);

return statearr_34696;
})();
var statearr_34697_34713 = state_34684__$1;
(statearr_34697_34713[(2)] = null);

(statearr_34697_34713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (8))){
var inst_34666 = (state_34684[(7)]);
var state_34684__$1 = state_34684;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34684__$1,(11),out,inst_34666);
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
});
return (function() {
var cljs$core$async$state_machine__33058__auto__ = null;
var cljs$core$async$state_machine__33058__auto____0 = (function (){
var statearr_34698 = [null,null,null,null,null,null,null,null,null];
(statearr_34698[(0)] = cljs$core$async$state_machine__33058__auto__);

(statearr_34698[(1)] = (1));

return statearr_34698;
});
var cljs$core$async$state_machine__33058__auto____1 = (function (state_34684){
while(true){
var ret_value__33059__auto__ = (function (){try{while(true){
var result__33060__auto__ = switch__33057__auto__.call(null,state_34684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33060__auto__;
}
break;
}
}catch (e34699){if((e34699 instanceof Object)){
var ex__33061__auto__ = e34699;
var statearr_34700_34714 = state_34684;
(statearr_34700_34714[(5)] = ex__33061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34715 = state_34684;
state_34684 = G__34715;
continue;
} else {
return ret_value__33059__auto__;
}
break;
}
});
cljs$core$async$state_machine__33058__auto__ = function(state_34684){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33058__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33058__auto____1.call(this,state_34684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33058__auto____0;
cljs$core$async$state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33058__auto____1;
return cljs$core$async$state_machine__33058__auto__;
})()
})();
var state__33154__auto__ = (function (){var statearr_34701 = f__33153__auto__.call(null);
(statearr_34701[(6)] = c__33152__auto___34703);

return statearr_34701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33154__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34717 = arguments.length;
switch (G__34717) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33153__auto__ = (function (){var switch__33057__auto__ = (function (state_34780){
var state_val_34781 = (state_34780[(1)]);
if((state_val_34781 === (7))){
var inst_34776 = (state_34780[(2)]);
var state_34780__$1 = state_34780;
var statearr_34782_34820 = state_34780__$1;
(statearr_34782_34820[(2)] = inst_34776);

(statearr_34782_34820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (20))){
var inst_34746 = (state_34780[(7)]);
var inst_34757 = (state_34780[(2)]);
var inst_34758 = cljs.core.next.call(null,inst_34746);
var inst_34732 = inst_34758;
var inst_34733 = null;
var inst_34734 = (0);
var inst_34735 = (0);
var state_34780__$1 = (function (){var statearr_34783 = state_34780;
(statearr_34783[(8)] = inst_34734);

(statearr_34783[(9)] = inst_34757);

(statearr_34783[(10)] = inst_34732);

(statearr_34783[(11)] = inst_34733);

(statearr_34783[(12)] = inst_34735);

return statearr_34783;
})();
var statearr_34784_34821 = state_34780__$1;
(statearr_34784_34821[(2)] = null);

(statearr_34784_34821[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (1))){
var state_34780__$1 = state_34780;
var statearr_34785_34822 = state_34780__$1;
(statearr_34785_34822[(2)] = null);

(statearr_34785_34822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (4))){
var inst_34721 = (state_34780[(13)]);
var inst_34721__$1 = (state_34780[(2)]);
var inst_34722 = (inst_34721__$1 == null);
var state_34780__$1 = (function (){var statearr_34786 = state_34780;
(statearr_34786[(13)] = inst_34721__$1);

return statearr_34786;
})();
if(cljs.core.truth_(inst_34722)){
var statearr_34787_34823 = state_34780__$1;
(statearr_34787_34823[(1)] = (5));

} else {
var statearr_34788_34824 = state_34780__$1;
(statearr_34788_34824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (15))){
var state_34780__$1 = state_34780;
var statearr_34792_34825 = state_34780__$1;
(statearr_34792_34825[(2)] = null);

(statearr_34792_34825[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (21))){
var state_34780__$1 = state_34780;
var statearr_34793_34826 = state_34780__$1;
(statearr_34793_34826[(2)] = null);

(statearr_34793_34826[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (13))){
var inst_34734 = (state_34780[(8)]);
var inst_34732 = (state_34780[(10)]);
var inst_34733 = (state_34780[(11)]);
var inst_34735 = (state_34780[(12)]);
var inst_34742 = (state_34780[(2)]);
var inst_34743 = (inst_34735 + (1));
var tmp34789 = inst_34734;
var tmp34790 = inst_34732;
var tmp34791 = inst_34733;
var inst_34732__$1 = tmp34790;
var inst_34733__$1 = tmp34791;
var inst_34734__$1 = tmp34789;
var inst_34735__$1 = inst_34743;
var state_34780__$1 = (function (){var statearr_34794 = state_34780;
(statearr_34794[(8)] = inst_34734__$1);

(statearr_34794[(14)] = inst_34742);

(statearr_34794[(10)] = inst_34732__$1);

(statearr_34794[(11)] = inst_34733__$1);

(statearr_34794[(12)] = inst_34735__$1);

return statearr_34794;
})();
var statearr_34795_34827 = state_34780__$1;
(statearr_34795_34827[(2)] = null);

(statearr_34795_34827[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (22))){
var state_34780__$1 = state_34780;
var statearr_34796_34828 = state_34780__$1;
(statearr_34796_34828[(2)] = null);

(statearr_34796_34828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (6))){
var inst_34721 = (state_34780[(13)]);
var inst_34730 = f.call(null,inst_34721);
var inst_34731 = cljs.core.seq.call(null,inst_34730);
var inst_34732 = inst_34731;
var inst_34733 = null;
var inst_34734 = (0);
var inst_34735 = (0);
var state_34780__$1 = (function (){var statearr_34797 = state_34780;
(statearr_34797[(8)] = inst_34734);

(statearr_34797[(10)] = inst_34732);

(statearr_34797[(11)] = inst_34733);

(statearr_34797[(12)] = inst_34735);

return statearr_34797;
})();
var statearr_34798_34829 = state_34780__$1;
(statearr_34798_34829[(2)] = null);

(statearr_34798_34829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (17))){
var inst_34746 = (state_34780[(7)]);
var inst_34750 = cljs.core.chunk_first.call(null,inst_34746);
var inst_34751 = cljs.core.chunk_rest.call(null,inst_34746);
var inst_34752 = cljs.core.count.call(null,inst_34750);
var inst_34732 = inst_34751;
var inst_34733 = inst_34750;
var inst_34734 = inst_34752;
var inst_34735 = (0);
var state_34780__$1 = (function (){var statearr_34799 = state_34780;
(statearr_34799[(8)] = inst_34734);

(statearr_34799[(10)] = inst_34732);

(statearr_34799[(11)] = inst_34733);

(statearr_34799[(12)] = inst_34735);

return statearr_34799;
})();
var statearr_34800_34830 = state_34780__$1;
(statearr_34800_34830[(2)] = null);

(statearr_34800_34830[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (3))){
var inst_34778 = (state_34780[(2)]);
var state_34780__$1 = state_34780;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34780__$1,inst_34778);
} else {
if((state_val_34781 === (12))){
var inst_34766 = (state_34780[(2)]);
var state_34780__$1 = state_34780;
var statearr_34801_34831 = state_34780__$1;
(statearr_34801_34831[(2)] = inst_34766);

(statearr_34801_34831[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (2))){
var state_34780__$1 = state_34780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34780__$1,(4),in$);
} else {
if((state_val_34781 === (23))){
var inst_34774 = (state_34780[(2)]);
var state_34780__$1 = state_34780;
var statearr_34802_34832 = state_34780__$1;
(statearr_34802_34832[(2)] = inst_34774);

(statearr_34802_34832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (19))){
var inst_34761 = (state_34780[(2)]);
var state_34780__$1 = state_34780;
var statearr_34803_34833 = state_34780__$1;
(statearr_34803_34833[(2)] = inst_34761);

(statearr_34803_34833[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (11))){
var inst_34746 = (state_34780[(7)]);
var inst_34732 = (state_34780[(10)]);
var inst_34746__$1 = cljs.core.seq.call(null,inst_34732);
var state_34780__$1 = (function (){var statearr_34804 = state_34780;
(statearr_34804[(7)] = inst_34746__$1);

return statearr_34804;
})();
if(inst_34746__$1){
var statearr_34805_34834 = state_34780__$1;
(statearr_34805_34834[(1)] = (14));

} else {
var statearr_34806_34835 = state_34780__$1;
(statearr_34806_34835[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (9))){
var inst_34768 = (state_34780[(2)]);
var inst_34769 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34780__$1 = (function (){var statearr_34807 = state_34780;
(statearr_34807[(15)] = inst_34768);

return statearr_34807;
})();
if(cljs.core.truth_(inst_34769)){
var statearr_34808_34836 = state_34780__$1;
(statearr_34808_34836[(1)] = (21));

} else {
var statearr_34809_34837 = state_34780__$1;
(statearr_34809_34837[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (5))){
var inst_34724 = cljs.core.async.close_BANG_.call(null,out);
var state_34780__$1 = state_34780;
var statearr_34810_34838 = state_34780__$1;
(statearr_34810_34838[(2)] = inst_34724);

(statearr_34810_34838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (14))){
var inst_34746 = (state_34780[(7)]);
var inst_34748 = cljs.core.chunked_seq_QMARK_.call(null,inst_34746);
var state_34780__$1 = state_34780;
if(inst_34748){
var statearr_34811_34839 = state_34780__$1;
(statearr_34811_34839[(1)] = (17));

} else {
var statearr_34812_34840 = state_34780__$1;
(statearr_34812_34840[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (16))){
var inst_34764 = (state_34780[(2)]);
var state_34780__$1 = state_34780;
var statearr_34813_34841 = state_34780__$1;
(statearr_34813_34841[(2)] = inst_34764);

(statearr_34813_34841[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (10))){
var inst_34733 = (state_34780[(11)]);
var inst_34735 = (state_34780[(12)]);
var inst_34740 = cljs.core._nth.call(null,inst_34733,inst_34735);
var state_34780__$1 = state_34780;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34780__$1,(13),out,inst_34740);
} else {
if((state_val_34781 === (18))){
var inst_34746 = (state_34780[(7)]);
var inst_34755 = cljs.core.first.call(null,inst_34746);
var state_34780__$1 = state_34780;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34780__$1,(20),out,inst_34755);
} else {
if((state_val_34781 === (8))){
var inst_34734 = (state_34780[(8)]);
var inst_34735 = (state_34780[(12)]);
var inst_34737 = (inst_34735 < inst_34734);
var inst_34738 = inst_34737;
var state_34780__$1 = state_34780;
if(cljs.core.truth_(inst_34738)){
var statearr_34814_34842 = state_34780__$1;
(statearr_34814_34842[(1)] = (10));

} else {
var statearr_34815_34843 = state_34780__$1;
(statearr_34815_34843[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33058__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33058__auto____0 = (function (){
var statearr_34816 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34816[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33058__auto__);

(statearr_34816[(1)] = (1));

return statearr_34816;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33058__auto____1 = (function (state_34780){
while(true){
var ret_value__33059__auto__ = (function (){try{while(true){
var result__33060__auto__ = switch__33057__auto__.call(null,state_34780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33060__auto__;
}
break;
}
}catch (e34817){if((e34817 instanceof Object)){
var ex__33061__auto__ = e34817;
var statearr_34818_34844 = state_34780;
(statearr_34818_34844[(5)] = ex__33061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34845 = state_34780;
state_34780 = G__34845;
continue;
} else {
return ret_value__33059__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33058__auto__ = function(state_34780){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33058__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33058__auto____1.call(this,state_34780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33058__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33058__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33058__auto__;
})()
})();
var state__33154__auto__ = (function (){var statearr_34819 = f__33153__auto__.call(null);
(statearr_34819[(6)] = c__33152__auto__);

return statearr_34819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33154__auto__);
}));

return c__33152__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34847 = arguments.length;
switch (G__34847) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34850 = arguments.length;
switch (G__34850) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34853 = arguments.length;
switch (G__34853) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33152__auto___34900 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33153__auto__ = (function (){var switch__33057__auto__ = (function (state_34877){
var state_val_34878 = (state_34877[(1)]);
if((state_val_34878 === (7))){
var inst_34872 = (state_34877[(2)]);
var state_34877__$1 = state_34877;
var statearr_34879_34901 = state_34877__$1;
(statearr_34879_34901[(2)] = inst_34872);

(statearr_34879_34901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (1))){
var inst_34854 = null;
var state_34877__$1 = (function (){var statearr_34880 = state_34877;
(statearr_34880[(7)] = inst_34854);

return statearr_34880;
})();
var statearr_34881_34902 = state_34877__$1;
(statearr_34881_34902[(2)] = null);

(statearr_34881_34902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (4))){
var inst_34857 = (state_34877[(8)]);
var inst_34857__$1 = (state_34877[(2)]);
var inst_34858 = (inst_34857__$1 == null);
var inst_34859 = cljs.core.not.call(null,inst_34858);
var state_34877__$1 = (function (){var statearr_34882 = state_34877;
(statearr_34882[(8)] = inst_34857__$1);

return statearr_34882;
})();
if(inst_34859){
var statearr_34883_34903 = state_34877__$1;
(statearr_34883_34903[(1)] = (5));

} else {
var statearr_34884_34904 = state_34877__$1;
(statearr_34884_34904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (6))){
var state_34877__$1 = state_34877;
var statearr_34885_34905 = state_34877__$1;
(statearr_34885_34905[(2)] = null);

(statearr_34885_34905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (3))){
var inst_34874 = (state_34877[(2)]);
var inst_34875 = cljs.core.async.close_BANG_.call(null,out);
var state_34877__$1 = (function (){var statearr_34886 = state_34877;
(statearr_34886[(9)] = inst_34874);

return statearr_34886;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34877__$1,inst_34875);
} else {
if((state_val_34878 === (2))){
var state_34877__$1 = state_34877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34877__$1,(4),ch);
} else {
if((state_val_34878 === (11))){
var inst_34857 = (state_34877[(8)]);
var inst_34866 = (state_34877[(2)]);
var inst_34854 = inst_34857;
var state_34877__$1 = (function (){var statearr_34887 = state_34877;
(statearr_34887[(10)] = inst_34866);

(statearr_34887[(7)] = inst_34854);

return statearr_34887;
})();
var statearr_34888_34906 = state_34877__$1;
(statearr_34888_34906[(2)] = null);

(statearr_34888_34906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (9))){
var inst_34857 = (state_34877[(8)]);
var state_34877__$1 = state_34877;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34877__$1,(11),out,inst_34857);
} else {
if((state_val_34878 === (5))){
var inst_34857 = (state_34877[(8)]);
var inst_34854 = (state_34877[(7)]);
var inst_34861 = cljs.core._EQ_.call(null,inst_34857,inst_34854);
var state_34877__$1 = state_34877;
if(inst_34861){
var statearr_34890_34907 = state_34877__$1;
(statearr_34890_34907[(1)] = (8));

} else {
var statearr_34891_34908 = state_34877__$1;
(statearr_34891_34908[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (10))){
var inst_34869 = (state_34877[(2)]);
var state_34877__$1 = state_34877;
var statearr_34892_34909 = state_34877__$1;
(statearr_34892_34909[(2)] = inst_34869);

(statearr_34892_34909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (8))){
var inst_34854 = (state_34877[(7)]);
var tmp34889 = inst_34854;
var inst_34854__$1 = tmp34889;
var state_34877__$1 = (function (){var statearr_34893 = state_34877;
(statearr_34893[(7)] = inst_34854__$1);

return statearr_34893;
})();
var statearr_34894_34910 = state_34877__$1;
(statearr_34894_34910[(2)] = null);

(statearr_34894_34910[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__33058__auto__ = null;
var cljs$core$async$state_machine__33058__auto____0 = (function (){
var statearr_34895 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34895[(0)] = cljs$core$async$state_machine__33058__auto__);

(statearr_34895[(1)] = (1));

return statearr_34895;
});
var cljs$core$async$state_machine__33058__auto____1 = (function (state_34877){
while(true){
var ret_value__33059__auto__ = (function (){try{while(true){
var result__33060__auto__ = switch__33057__auto__.call(null,state_34877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33060__auto__;
}
break;
}
}catch (e34896){if((e34896 instanceof Object)){
var ex__33061__auto__ = e34896;
var statearr_34897_34911 = state_34877;
(statearr_34897_34911[(5)] = ex__33061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34896;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34912 = state_34877;
state_34877 = G__34912;
continue;
} else {
return ret_value__33059__auto__;
}
break;
}
});
cljs$core$async$state_machine__33058__auto__ = function(state_34877){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33058__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33058__auto____1.call(this,state_34877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33058__auto____0;
cljs$core$async$state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33058__auto____1;
return cljs$core$async$state_machine__33058__auto__;
})()
})();
var state__33154__auto__ = (function (){var statearr_34898 = f__33153__auto__.call(null);
(statearr_34898[(6)] = c__33152__auto___34900);

return statearr_34898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33154__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34914 = arguments.length;
switch (G__34914) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33152__auto___34980 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33153__auto__ = (function (){var switch__33057__auto__ = (function (state_34952){
var state_val_34953 = (state_34952[(1)]);
if((state_val_34953 === (7))){
var inst_34948 = (state_34952[(2)]);
var state_34952__$1 = state_34952;
var statearr_34954_34981 = state_34952__$1;
(statearr_34954_34981[(2)] = inst_34948);

(statearr_34954_34981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (1))){
var inst_34915 = (new Array(n));
var inst_34916 = inst_34915;
var inst_34917 = (0);
var state_34952__$1 = (function (){var statearr_34955 = state_34952;
(statearr_34955[(7)] = inst_34916);

(statearr_34955[(8)] = inst_34917);

return statearr_34955;
})();
var statearr_34956_34982 = state_34952__$1;
(statearr_34956_34982[(2)] = null);

(statearr_34956_34982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (4))){
var inst_34920 = (state_34952[(9)]);
var inst_34920__$1 = (state_34952[(2)]);
var inst_34921 = (inst_34920__$1 == null);
var inst_34922 = cljs.core.not.call(null,inst_34921);
var state_34952__$1 = (function (){var statearr_34957 = state_34952;
(statearr_34957[(9)] = inst_34920__$1);

return statearr_34957;
})();
if(inst_34922){
var statearr_34958_34983 = state_34952__$1;
(statearr_34958_34983[(1)] = (5));

} else {
var statearr_34959_34984 = state_34952__$1;
(statearr_34959_34984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (15))){
var inst_34942 = (state_34952[(2)]);
var state_34952__$1 = state_34952;
var statearr_34960_34985 = state_34952__$1;
(statearr_34960_34985[(2)] = inst_34942);

(statearr_34960_34985[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (13))){
var state_34952__$1 = state_34952;
var statearr_34961_34986 = state_34952__$1;
(statearr_34961_34986[(2)] = null);

(statearr_34961_34986[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (6))){
var inst_34917 = (state_34952[(8)]);
var inst_34938 = (inst_34917 > (0));
var state_34952__$1 = state_34952;
if(cljs.core.truth_(inst_34938)){
var statearr_34962_34987 = state_34952__$1;
(statearr_34962_34987[(1)] = (12));

} else {
var statearr_34963_34988 = state_34952__$1;
(statearr_34963_34988[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (3))){
var inst_34950 = (state_34952[(2)]);
var state_34952__$1 = state_34952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34952__$1,inst_34950);
} else {
if((state_val_34953 === (12))){
var inst_34916 = (state_34952[(7)]);
var inst_34940 = cljs.core.vec.call(null,inst_34916);
var state_34952__$1 = state_34952;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34952__$1,(15),out,inst_34940);
} else {
if((state_val_34953 === (2))){
var state_34952__$1 = state_34952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34952__$1,(4),ch);
} else {
if((state_val_34953 === (11))){
var inst_34932 = (state_34952[(2)]);
var inst_34933 = (new Array(n));
var inst_34916 = inst_34933;
var inst_34917 = (0);
var state_34952__$1 = (function (){var statearr_34964 = state_34952;
(statearr_34964[(10)] = inst_34932);

(statearr_34964[(7)] = inst_34916);

(statearr_34964[(8)] = inst_34917);

return statearr_34964;
})();
var statearr_34965_34989 = state_34952__$1;
(statearr_34965_34989[(2)] = null);

(statearr_34965_34989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (9))){
var inst_34916 = (state_34952[(7)]);
var inst_34930 = cljs.core.vec.call(null,inst_34916);
var state_34952__$1 = state_34952;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34952__$1,(11),out,inst_34930);
} else {
if((state_val_34953 === (5))){
var inst_34925 = (state_34952[(11)]);
var inst_34920 = (state_34952[(9)]);
var inst_34916 = (state_34952[(7)]);
var inst_34917 = (state_34952[(8)]);
var inst_34924 = (inst_34916[inst_34917] = inst_34920);
var inst_34925__$1 = (inst_34917 + (1));
var inst_34926 = (inst_34925__$1 < n);
var state_34952__$1 = (function (){var statearr_34966 = state_34952;
(statearr_34966[(11)] = inst_34925__$1);

(statearr_34966[(12)] = inst_34924);

return statearr_34966;
})();
if(cljs.core.truth_(inst_34926)){
var statearr_34967_34990 = state_34952__$1;
(statearr_34967_34990[(1)] = (8));

} else {
var statearr_34968_34991 = state_34952__$1;
(statearr_34968_34991[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (14))){
var inst_34945 = (state_34952[(2)]);
var inst_34946 = cljs.core.async.close_BANG_.call(null,out);
var state_34952__$1 = (function (){var statearr_34970 = state_34952;
(statearr_34970[(13)] = inst_34945);

return statearr_34970;
})();
var statearr_34971_34992 = state_34952__$1;
(statearr_34971_34992[(2)] = inst_34946);

(statearr_34971_34992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (10))){
var inst_34936 = (state_34952[(2)]);
var state_34952__$1 = state_34952;
var statearr_34972_34993 = state_34952__$1;
(statearr_34972_34993[(2)] = inst_34936);

(statearr_34972_34993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (8))){
var inst_34925 = (state_34952[(11)]);
var inst_34916 = (state_34952[(7)]);
var tmp34969 = inst_34916;
var inst_34916__$1 = tmp34969;
var inst_34917 = inst_34925;
var state_34952__$1 = (function (){var statearr_34973 = state_34952;
(statearr_34973[(7)] = inst_34916__$1);

(statearr_34973[(8)] = inst_34917);

return statearr_34973;
})();
var statearr_34974_34994 = state_34952__$1;
(statearr_34974_34994[(2)] = null);

(statearr_34974_34994[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__33058__auto__ = null;
var cljs$core$async$state_machine__33058__auto____0 = (function (){
var statearr_34975 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34975[(0)] = cljs$core$async$state_machine__33058__auto__);

(statearr_34975[(1)] = (1));

return statearr_34975;
});
var cljs$core$async$state_machine__33058__auto____1 = (function (state_34952){
while(true){
var ret_value__33059__auto__ = (function (){try{while(true){
var result__33060__auto__ = switch__33057__auto__.call(null,state_34952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33060__auto__;
}
break;
}
}catch (e34976){if((e34976 instanceof Object)){
var ex__33061__auto__ = e34976;
var statearr_34977_34995 = state_34952;
(statearr_34977_34995[(5)] = ex__33061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34996 = state_34952;
state_34952 = G__34996;
continue;
} else {
return ret_value__33059__auto__;
}
break;
}
});
cljs$core$async$state_machine__33058__auto__ = function(state_34952){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33058__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33058__auto____1.call(this,state_34952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33058__auto____0;
cljs$core$async$state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33058__auto____1;
return cljs$core$async$state_machine__33058__auto__;
})()
})();
var state__33154__auto__ = (function (){var statearr_34978 = f__33153__auto__.call(null);
(statearr_34978[(6)] = c__33152__auto___34980);

return statearr_34978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33154__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34998 = arguments.length;
switch (G__34998) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33152__auto___35068 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33153__auto__ = (function (){var switch__33057__auto__ = (function (state_35040){
var state_val_35041 = (state_35040[(1)]);
if((state_val_35041 === (7))){
var inst_35036 = (state_35040[(2)]);
var state_35040__$1 = state_35040;
var statearr_35042_35069 = state_35040__$1;
(statearr_35042_35069[(2)] = inst_35036);

(statearr_35042_35069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35041 === (1))){
var inst_34999 = [];
var inst_35000 = inst_34999;
var inst_35001 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35040__$1 = (function (){var statearr_35043 = state_35040;
(statearr_35043[(7)] = inst_35000);

(statearr_35043[(8)] = inst_35001);

return statearr_35043;
})();
var statearr_35044_35070 = state_35040__$1;
(statearr_35044_35070[(2)] = null);

(statearr_35044_35070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35041 === (4))){
var inst_35004 = (state_35040[(9)]);
var inst_35004__$1 = (state_35040[(2)]);
var inst_35005 = (inst_35004__$1 == null);
var inst_35006 = cljs.core.not.call(null,inst_35005);
var state_35040__$1 = (function (){var statearr_35045 = state_35040;
(statearr_35045[(9)] = inst_35004__$1);

return statearr_35045;
})();
if(inst_35006){
var statearr_35046_35071 = state_35040__$1;
(statearr_35046_35071[(1)] = (5));

} else {
var statearr_35047_35072 = state_35040__$1;
(statearr_35047_35072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35041 === (15))){
var inst_35030 = (state_35040[(2)]);
var state_35040__$1 = state_35040;
var statearr_35048_35073 = state_35040__$1;
(statearr_35048_35073[(2)] = inst_35030);

(statearr_35048_35073[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35041 === (13))){
var state_35040__$1 = state_35040;
var statearr_35049_35074 = state_35040__$1;
(statearr_35049_35074[(2)] = null);

(statearr_35049_35074[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35041 === (6))){
var inst_35000 = (state_35040[(7)]);
var inst_35025 = inst_35000.length;
var inst_35026 = (inst_35025 > (0));
var state_35040__$1 = state_35040;
if(cljs.core.truth_(inst_35026)){
var statearr_35050_35075 = state_35040__$1;
(statearr_35050_35075[(1)] = (12));

} else {
var statearr_35051_35076 = state_35040__$1;
(statearr_35051_35076[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35041 === (3))){
var inst_35038 = (state_35040[(2)]);
var state_35040__$1 = state_35040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35040__$1,inst_35038);
} else {
if((state_val_35041 === (12))){
var inst_35000 = (state_35040[(7)]);
var inst_35028 = cljs.core.vec.call(null,inst_35000);
var state_35040__$1 = state_35040;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35040__$1,(15),out,inst_35028);
} else {
if((state_val_35041 === (2))){
var state_35040__$1 = state_35040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35040__$1,(4),ch);
} else {
if((state_val_35041 === (11))){
var inst_35008 = (state_35040[(10)]);
var inst_35004 = (state_35040[(9)]);
var inst_35018 = (state_35040[(2)]);
var inst_35019 = [];
var inst_35020 = inst_35019.push(inst_35004);
var inst_35000 = inst_35019;
var inst_35001 = inst_35008;
var state_35040__$1 = (function (){var statearr_35052 = state_35040;
(statearr_35052[(11)] = inst_35018);

(statearr_35052[(12)] = inst_35020);

(statearr_35052[(7)] = inst_35000);

(statearr_35052[(8)] = inst_35001);

return statearr_35052;
})();
var statearr_35053_35077 = state_35040__$1;
(statearr_35053_35077[(2)] = null);

(statearr_35053_35077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35041 === (9))){
var inst_35000 = (state_35040[(7)]);
var inst_35016 = cljs.core.vec.call(null,inst_35000);
var state_35040__$1 = state_35040;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35040__$1,(11),out,inst_35016);
} else {
if((state_val_35041 === (5))){
var inst_35008 = (state_35040[(10)]);
var inst_35004 = (state_35040[(9)]);
var inst_35001 = (state_35040[(8)]);
var inst_35008__$1 = f.call(null,inst_35004);
var inst_35009 = cljs.core._EQ_.call(null,inst_35008__$1,inst_35001);
var inst_35010 = cljs.core.keyword_identical_QMARK_.call(null,inst_35001,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35011 = ((inst_35009) || (inst_35010));
var state_35040__$1 = (function (){var statearr_35054 = state_35040;
(statearr_35054[(10)] = inst_35008__$1);

return statearr_35054;
})();
if(cljs.core.truth_(inst_35011)){
var statearr_35055_35078 = state_35040__$1;
(statearr_35055_35078[(1)] = (8));

} else {
var statearr_35056_35079 = state_35040__$1;
(statearr_35056_35079[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35041 === (14))){
var inst_35033 = (state_35040[(2)]);
var inst_35034 = cljs.core.async.close_BANG_.call(null,out);
var state_35040__$1 = (function (){var statearr_35058 = state_35040;
(statearr_35058[(13)] = inst_35033);

return statearr_35058;
})();
var statearr_35059_35080 = state_35040__$1;
(statearr_35059_35080[(2)] = inst_35034);

(statearr_35059_35080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35041 === (10))){
var inst_35023 = (state_35040[(2)]);
var state_35040__$1 = state_35040;
var statearr_35060_35081 = state_35040__$1;
(statearr_35060_35081[(2)] = inst_35023);

(statearr_35060_35081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35041 === (8))){
var inst_35008 = (state_35040[(10)]);
var inst_35004 = (state_35040[(9)]);
var inst_35000 = (state_35040[(7)]);
var inst_35013 = inst_35000.push(inst_35004);
var tmp35057 = inst_35000;
var inst_35000__$1 = tmp35057;
var inst_35001 = inst_35008;
var state_35040__$1 = (function (){var statearr_35061 = state_35040;
(statearr_35061[(14)] = inst_35013);

(statearr_35061[(7)] = inst_35000__$1);

(statearr_35061[(8)] = inst_35001);

return statearr_35061;
})();
var statearr_35062_35082 = state_35040__$1;
(statearr_35062_35082[(2)] = null);

(statearr_35062_35082[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__33058__auto__ = null;
var cljs$core$async$state_machine__33058__auto____0 = (function (){
var statearr_35063 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35063[(0)] = cljs$core$async$state_machine__33058__auto__);

(statearr_35063[(1)] = (1));

return statearr_35063;
});
var cljs$core$async$state_machine__33058__auto____1 = (function (state_35040){
while(true){
var ret_value__33059__auto__ = (function (){try{while(true){
var result__33060__auto__ = switch__33057__auto__.call(null,state_35040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33060__auto__;
}
break;
}
}catch (e35064){if((e35064 instanceof Object)){
var ex__33061__auto__ = e35064;
var statearr_35065_35083 = state_35040;
(statearr_35065_35083[(5)] = ex__33061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35084 = state_35040;
state_35040 = G__35084;
continue;
} else {
return ret_value__33059__auto__;
}
break;
}
});
cljs$core$async$state_machine__33058__auto__ = function(state_35040){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33058__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33058__auto____1.call(this,state_35040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33058__auto____0;
cljs$core$async$state_machine__33058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33058__auto____1;
return cljs$core$async$state_machine__33058__auto__;
})()
})();
var state__33154__auto__ = (function (){var statearr_35066 = f__33153__auto__.call(null);
(statearr_35066[(6)] = c__33152__auto___35068);

return statearr_35066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33154__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1663010192137
