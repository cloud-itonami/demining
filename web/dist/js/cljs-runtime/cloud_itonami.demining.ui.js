goog.provide('cloud_itonami.demining.ui');
cloud_itonami.demining.ui.css_text = "\n.dmg-app { min-height: 100vh; padding: 24px; background: var(--liquid-glass-bg, #11161d); color: var(--liquid-glass-fg, #eef4f8); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif; }\n.dmg-top { margin-bottom: 18px; }\n.dmg-top p, .dmg-top span, .dmg-muted, .dmg-app h2, .dmg-facts span { color: #96a6b8; }\n.dmg-top p { margin: 0 0 8px; font-size: 12px; font-weight: 700; text-transform: uppercase; }\n.dmg-app h1, .dmg-app h2, .dmg-app p { margin: 0; }\n.dmg-app h1 { font-size: clamp(28px, 5vw, 48px); line-height: 1.05; }\n.dmg-top span { display: block; margin-top: 8px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; overflow-wrap: anywhere; }\n.dmg-facts { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; margin-bottom: 12px; }\n.dmg-facts > div, .dmg-panel { border: 1px solid #2b3948; border-radius: 8px; background: #171f28; }\n.dmg-facts > div { padding: 14px; }\n.dmg-facts span { display: block; margin-bottom: 8px; font-size: 12px; }\n.dmg-facts strong { overflow-wrap: anywhere; }\n.dmg-panel { margin-bottom: 12px; padding: 16px; }\n.dmg-app h2 { margin-bottom: 12px; font-size: 13px; text-transform: uppercase; }\n.dmg-app ul { display: grid; gap: 8px; margin: 0; padding: 0; list-style: none; }\n.dmg-app li, .dmg-path p { border: 1px solid #263443; border-radius: 6px; background: #101720; padding: 9px 10px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; overflow-wrap: anywhere; }\n.dmg-chips { grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); }\n@media (max-width: 760px) { .dmg-app { padding: 18px; } .dmg-facts { grid-template-columns: 1fr; } }\n";
cloud_itonami.demining.ui.panel = (function cloud_itonami$demining$ui$panel(title,body){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.dmg-panel","section.dmg-panel",1238818925),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null),body], null);
});
cloud_itonami.demining.ui.facts = (function cloud_itonami$demining$ui$facts(app){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.dmg-facts","section.dmg-facts",-894691124),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Project"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"project","project",1124394579).cljs$core$IFn$_invoke$arity$1(app)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Routes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"route-count","route-count",-1535759193).cljs$core$IFn$_invoke$arity$1(app)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"XRPC"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),(cljs.core.truth_(new cljs.core.Keyword(null,"xrpc?","xrpc?",938402752).cljs$core$IFn$_invoke$arity$1(app))?"enabled":"not configured")], null)], null)], null);
});
cloud_itonami.demining.ui.public_routes = (function cloud_itonami$demining$ui$public_routes(p__23317){
var map__23318 = p__23317;
var map__23318__$1 = cljs.core.__destructure_map(map__23318);
var routes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23318__$1,new cljs.core.Keyword(null,"routes","routes",457900162));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.demining.ui.panel,"Public Routes",((cljs.core.seq(routes))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5480__auto__ = (function cloud_itonami$demining$ui$public_routes_$_iter__23319(s__23320){
return (new cljs.core.LazySeq(null,(function (){
var s__23320__$1 = s__23320;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__23320__$1);
if(temp__5825__auto__){
var s__23320__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23320__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23320__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23322 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23321 = (0);
while(true){
if((i__23321 < size__5479__auto__)){
var r = cljs.core._nth(c__5478__auto__,i__23321);
cljs.core.chunk_append(b__23322,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),r], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),r], null)));

var G__23372 = (i__23321 + (1));
i__23321 = G__23372;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23322),cloud_itonami$demining$ui$public_routes_$_iter__23319(cljs.core.chunk_rest(s__23320__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23322),null);
}
} else {
var r = cljs.core.first(s__23320__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),r], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),r], null)),cloud_itonami$demining$ui$public_routes_$_iter__23319(cljs.core.rest(s__23320__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(routes);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.dmg-muted","p.dmg-muted",1111971560),"No public route is declared next to this app surface."], null))], null);
});
cloud_itonami.demining.ui.runtime_bindings = (function cloud_itonami$demining$ui$runtime_bindings(p__23335){
var map__23337 = p__23335;
var map__23337__$1 = cljs.core.__destructure_map(map__23337);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23337__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.demining.ui.panel,"Runtime Bindings",((cljs.core.seq(vars))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.dmg-chips","ul.dmg-chips",2038487785),(function (){var iter__5480__auto__ = (function cloud_itonami$demining$ui$runtime_bindings_$_iter__23340(s__23341){
return (new cljs.core.LazySeq(null,(function (){
var s__23341__$1 = s__23341;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__23341__$1);
if(temp__5825__auto__){
var s__23341__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23341__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23341__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23343 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23342 = (0);
while(true){
if((i__23342 < size__5479__auto__)){
var k = cljs.core._nth(c__5478__auto__,i__23342);
cljs.core.chunk_append(b__23343,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),k], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__23382 = (i__23342 + (1));
i__23342 = G__23382;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23343),cloud_itonami$demining$ui$runtime_bindings_$_iter__23340(cljs.core.chunk_rest(s__23341__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23343),null);
}
} else {
var k = cljs.core.first(s__23341__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),k], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),cloud_itonami$demining$ui$runtime_bindings_$_iter__23340(cljs.core.rest(s__23341__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(vars);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.dmg-muted","p.dmg-muted",1111971560),"No public vars are declared in the nearest wrangler config."], null))], null);
});
cloud_itonami.demining.ui.source = (function cloud_itonami$demining$ui$source(p__23349){
var map__23350 = p__23349;
var map__23350__$1 = cljs.core.__destructure_map(map__23350);
var relative_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23350__$1,new cljs.core.Keyword(null,"relative-path","relative-path",1848635172));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.dmg-panel.dmg-path","section.dmg-panel.dmg-path",155997404),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Source"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),relative_path], null)], null);
});
cloud_itonami.demining.ui.root = (function cloud_itonami$demining$ui$root(){
var map__23355 = cljs.core.deref(cloud_itonami.demining.state.state);
var map__23355__$1 = cljs.core.__destructure_map(map__23355);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23355__$1,new cljs.core.Keyword(null,"app","app",-560961707));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),cloud_itonami.demining.ui.css_text], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [appkit.core.panel,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.dmg-app","main.dmg-app",946422403),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.dmg-top","section.dmg-top",-916105361),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Cloudflare ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(app))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(app)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(app)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.demining.ui.facts,app], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.demining.ui.public_routes,app], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.demining.ui.runtime_bindings,app], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.demining.ui.source,app], null)], null)], null)], null);
});

//# sourceMappingURL=cloud_itonami.demining.ui.js.map
