goog.provide('cloud_itonami.demining.desktop');
if((typeof cloud_itonami !== 'undefined') && (typeof cloud_itonami.demining !== 'undefined') && (typeof cloud_itonami.demining.desktop !== 'undefined') && (typeof cloud_itonami.demining.desktop.root !== 'undefined')){
} else {
cloud_itonami.demining.desktop.root = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
cloud_itonami.demining.desktop.mount_BANG_ = (function cloud_itonami$demining$desktop$mount_BANG_(){
var el = document.getElementById("app");
if(cljs.core.truth_(cljs.core.deref(cloud_itonami.demining.desktop.root))){
} else {
cljs.core.reset_BANG_(cloud_itonami.demining.desktop.root,reagent.dom.client.create_root(el));
}

return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cloud_itonami.demining.desktop.root),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.demining.ui.root], null));
});
cloud_itonami.demining.desktop.init_BANG_ = (function cloud_itonami$demining$desktop$init_BANG_(){
return cloud_itonami.demining.desktop.mount_BANG_();
});

//# sourceMappingURL=cloud_itonami.demining.desktop.js.map
