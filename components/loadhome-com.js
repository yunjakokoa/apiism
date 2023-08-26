exports.ids = [19];
exports.modules = {

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(165);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("cb96d23c", content, true, context)
};

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadhomeCom_vue_vue_type_style_index_0_id_da4d799a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(126);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadhomeCom_vue_vue_type_style_index_0_id_da4d799a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadhomeCom_vue_vue_type_style_index_0_id_da4d799a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadhomeCom_vue_vue_type_style_index_0_id_da4d799a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadhomeCom_vue_vue_type_style_index_0_id_da4d799a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Russo+One&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "svg[data-v-da4d799a]{font-family:\"Russo One\",sans-serif;height:100%;width:100%}svg text[data-v-da4d799a]{stroke-width:2;stroke:#cf00ff;animation:stroke-da4d799a 2.9s infinite alternate;font-size:160px}@keyframes stroke-da4d799a{0%{fill:rgba(218,57,255,0);stroke:#cf00ff;stroke-dashoffset:25%;stroke-dasharray:0 50%;stroke-width:2}70%{fill:rgba(218,57,255,0);stroke:#cf00ff}80%{fill:rgba(218,57,255,0);stroke:#cf00ff;stroke-width:3}to{fill:#da39ff;stroke:rgba(207,0,255,0);stroke-dashoffset:-25%;stroke-dasharray:50% 0;stroke-width:0}}.wrapper[data-v-da4d799a]{background-color:#141b2d}.loading-screen[data-v-da4d799a],.wrapper[data-v-da4d799a]{align-items:center;display:flex;height:100vh;justify-content:center;width:100vw}.loading-screen[data-v-da4d799a]{background-color:rgba(0,0,0,.8);left:0;position:fixed;top:0;z-index:9999}@keyframes spin-da4d799a{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@media screen and (max-width:1200px){svg text[data-v-da4d799a]{font-size:8em}}@media screen and (max-width:828px){svg text[data-v-da4d799a]{font-size:6em}}@media screen and (max-width:637px){svg text[data-v-da4d799a]{font-size:4em}}@media screen and (max-width:480px){svg text[data-v-da4d799a]{font-size:3em}}@media screen and (max-width:310px){svg text[data-v-da4d799a]{font-size:2em}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/loadhome/LoadhomeCom.vue?vue&type=template&id=da4d799a&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "loading-screen"
  }, [_vm._ssrNode("<div class=\"wrapper\" data-v-da4d799a><svg data-v-da4d799a><text x=\"50%\" y=\"50%\" dy=\".35em\" text-anchor=\"middle\" data-v-da4d799a>ISMGAMING</text></svg></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/loadhome/LoadhomeCom.vue?vue&type=template&id=da4d799a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/loadhome/LoadhomeCom.vue?vue&type=script&lang=js&
/* harmony default export */ var LoadhomeComvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/loadhome/LoadhomeCom.vue?vue&type=script&lang=js&
 /* harmony default export */ var loadhome_LoadhomeComvue_type_script_lang_js_ = (LoadhomeComvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/loadhome/LoadhomeCom.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(164)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  loadhome_LoadhomeComvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "da4d799a",
  "bf7717c4"
  
)

/* harmony default export */ var LoadhomeCom = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=loadhome-com.js.map