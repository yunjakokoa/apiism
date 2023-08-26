exports.ids = [11];
exports.modules = {

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/homepage/ContenthomebtnCom.vue?vue&type=template&id=11783a4c&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "text-center"
  }, [_vm._ssrNode("<div class=\"btngroup\" data-v-11783a4c>", "</div>", [_c('b-row', [_c('b-col', [_c('div', {
    staticClass: "buttoncontent"
  }, [_c('nuxt-link', {
    staticClass: "text-decoration-none",
    attrs: {
      "to": "/"
    }
  }, [_c('b-button', {
    staticClass: "text-center"
  }, [_c('i', {
    staticClass: "fa-solid fa-house fa-shake fa-lg"
  }), _vm._v(" "), _c('span', [_vm._v("หน้าหลัก")])])], 1)], 1)]), _vm._v(" "), _c('b-col', [_c('div', {
    staticClass: "buttoncontent"
  }, [_c('nuxt-link', {
    staticClass: "text-decoration-none",
    attrs: {
      "to": "/game"
    }
  }, [_c('b-button', {
    staticClass: "text-center"
  }, [_c('i', {
    staticClass: "fa-solid fa-gamepad fa-shake fa-lg"
  }), _vm._v(" "), _c('span', [_vm._v("เกม")])])], 1)], 1)]), _vm._v(" "), _c('b-col', [_c('div', {
    staticClass: "buttoncontent"
  }, [_c('nuxt-link', {
    staticClass: "text-decoration-none",
    attrs: {
      "to": "/promotion"
    }
  }, [_c('b-button', {
    staticClass: "text-center"
  }, [_c('i', {
    staticClass: "fa-solid fa-bullhorn fa-shake fa-lg"
  }), _vm._v(" "), _c('span', [_vm._v("โปรโมชั่น")])])], 1)], 1)]), _vm._v(" "), _c('b-col', [_c('div', {
    staticClass: "buttoncontent"
  }, [_c('nuxt-link', {
    staticClass: "text-decoration-none",
    attrs: {
      "to": "/about"
    }
  }, [_c('b-button', {
    staticClass: "text-center"
  }, [_c('i', {
    staticClass: "fa-solid fa-book fa-shake fa-lg"
  }), _vm._v(" "), _c('span', [_vm._v("บทความ")])])], 1)], 1)]), _vm._v(" "), _c('b-col', [_c('div', {
    staticClass: "buttoncontent"
  }, [_c('nuxt-link', {
    staticClass: "text-decoration-none",
    attrs: {
      "to": "/contack"
    }
  }, [_c('b-button', {
    staticClass: "text-center"
  }, [_c('i', {
    staticClass: "fa-solid fa-comments fa-shake fa-lg"
  }), _vm._v(" "), _c('span', [_vm._v("ติดต่อเรา")])])], 1)], 1)])], 1)], 1), _vm._ssrNode(" <h1 style=\"color: #cf00ff\" data-v-11783a4c>\n    ismgamecasino <br data-v-11783a4c>ยินดีให้คำแนะนำ พร้อมบริการ 24 ชั่วโมง\n  </h1> "), _vm._ssrNode("<div class=\"imagecontackregister\" data-v-11783a4c>", "</div>", [_vm._ssrNode("<div class=\"imagecontackregister01\" data-v-11783a4c>", "</div>", [_vm._ssrNode("<div class=\"images\" data-v-11783a4c>", "</div>", [_c('b-img', {
    attrs: {
      "src": _vm.imagecontackregister01,
      "alt": "ismgamecasino"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<span class=\"btn-image\" data-v-11783a4c>", "</span>", [_c('b-img', {
    ref: "spanimagecontackregister01",
    attrs: {
      "src": _vm.imagebtnregister01,
      "alt": "ismgamecasino"
    }
  })], 1)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"imagecontackregister02\" data-v-11783a4c>", "</div>", [_vm._ssrNode("<span class=\"btn-image\" data-v-11783a4c>", "</span>", [_c('b-img', {
    ref: "spanimagecontackregister02",
    attrs: {
      "src": _vm.imagebtnregister02,
      "alt": "ismgamecasino"
    }
  })], 1), _vm._ssrNode(" "), _c('b-img', {
    attrs: {
      "src": _vm.imagecontackregister02,
      "alt": "ismgamecasino"
    }
  })], 2)], 2), _vm._ssrNode(" "), _c('RegisterFromCom', {
    ref: "RegisterFromCom"
  })], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/homepage/ContenthomebtnCom.vue?vue&type=template&id=11783a4c&scoped=true&

// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(6);

// EXTERNAL MODULE: ./components/From/RegisterFromCom.vue + 4 modules
var RegisterFromCom = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/homepage/ContenthomebtnCom.vue?vue&type=script&lang=js&


/* harmony default export */ var ContenthomebtnComvue_type_script_lang_js_ = ({
  components: {
    RegisterFromCom: RegisterFromCom["default"]
  },
  data: () => ({
    imagecontackregister01: __webpack_require__(89),
    imagecontackregister02: __webpack_require__(90),
    imagebtnregister01: __webpack_require__(91),
    imagebtnregister02: __webpack_require__(92)
  }),
  methods: {
    OpenmodaRegister() {
      this.$refs.RegisterFromCom.openModalRegister();
    },
    setanimeimageregister02() {
      const animeregister02 = this.$refs.spanimagecontackregister02;
      external_gsap_["gsap"].to(animeregister02, {
        duration: 2,
        // ระยะเวลาในการเลื่อน
        x: '100px',
        // เลื่อนไปด้านขวา 100px
        scale: 1.5,
        // ขยายขนาด
        ease: 'power1.inOut',
        // ตั้งค่าความเร็วและเร่งความเร็ว
        onComplete: () => {
          external_gsap_["gsap"].to(animeregister02, {
            duration: 2,
            // ระยะเวลาในการเลื่อนกลับมาที่ตำแหน่งแรก
            x: 0,
            // เลื่อนกลับมาที่ตำแหน่งแรก
            scale: 1,
            // กลับสู่ขนาดเดิม
            ease: 'power1.inOut',
            yoyo: true,
            // สลับกลับเป็นขนาดเริ่มต้น
            repeat: -1 // ทำซ้ำตลอดเวลา
          });
        }
      });
    },

    setanimeimageregister01() {
      const animeregister01 = this.$refs.spanimagecontackregister01;
      external_gsap_["gsap"].to(animeregister01, {
        duration: 2,
        // ระยะเวลาในการเลื่อน
        x: '-100px',
        // เลื่อนไปด้านขวา 100px
        scale: 1.5,
        // ขยายขนาด
        ease: 'power1.inOut',
        // ตั้งค่าความเร็วและเร่งความเร็ว
        onComplete: () => {
          external_gsap_["gsap"].to(animeregister01, {
            duration: 2,
            // ระยะเวลาในการเลื่อนกลับมาที่ตำแหน่งแรก
            x: 0,
            // เลื่อนกลับมาที่ตำแหน่งแรก
            scale: 1,
            // กลับสู่ขนาดเดิม
            ease: 'power1.inOut',
            yoyo: true,
            // สลับกลับเป็นขนาดเริ่มต้น
            repeat: -1 // ทำซ้ำตลอดเวลา
          });
        }
      });
    }
  },

  mounted() {
    this.setanimeimageregister01();
    this.setanimeimageregister02();
  }
});
// CONCATENATED MODULE: ./components/homepage/ContenthomebtnCom.vue?vue&type=script&lang=js&
 /* harmony default export */ var homepage_ContenthomebtnComvue_type_script_lang_js_ = (ContenthomebtnComvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/homepage/ContenthomebtnCom.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(93)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  homepage_ContenthomebtnComvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "11783a4c",
  "f79d5f30"
  
)

/* harmony default export */ var ContenthomebtnCom = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(94);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("5fc26474", content, true, context)
};

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/001.9882c54.webp";

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/002.1654e22.webp";

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/008.3bdcab6.webp";

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/007.a099969.webp";

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContenthomebtnCom_vue_vue_type_style_index_0_id_11783a4c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContenthomebtnCom_vue_vue_type_style_index_0_id_11783a4c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContenthomebtnCom_vue_vue_type_style_index_0_id_11783a4c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContenthomebtnCom_vue_vue_type_style_index_0_id_11783a4c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContenthomebtnCom_vue_vue_type_style_index_0_id_11783a4c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".imagecontackregister[data-v-11783a4c]{margin-bottom:50px}.imagecontackregister01[data-v-11783a4c]{text-align:left}.imagecontackregister02[data-v-11783a4c]{text-align:right}.imagecontackregister img[data-v-11783a4c]{height:auto;max-width:100%;width:700px}.imagecontackregister span img[data-v-11783a4c]{height:auto;max-width:100%;width:200px}div h1[data-v-11783a4c]{color:#000;font-size:40px;font-weight:700;text-shadow:0 0 1px rgba(0,0,0,.5);text-transform:uppercase}.btngroup[data-v-11783a4c],div h1[data-v-11783a4c]{margin-bottom:50px}.btngroup[data-v-11783a4c]{margin-top:50px}.buttoncontent[data-v-11783a4c]{margin:10px;max-width:100%;text-align:center;width:100%}.buttoncontent button[data-v-11783a4c]{background-image:linear-gradient(to right top,#cf00ff,#d006ff,#d10bff,#d210ff,#d314ff,#d41aff,#d51fff,#d623ff,#d729ff,#d82fff,#d934ff,#da39ff);border:3px solid #fff;border-radius:0 30px;box-shadow:0 0 6px 2px rgba(0,0,0,.3);font-size:20px;height:60px;max-width:100%;width:100%}.buttoncontent[data-v-11783a4c] :hover{transform:scale(1.1)}@media screen and (max-width:992px){.imagecontackregister img[data-v-11783a4c]{height:auto;max-width:100%;width:500px}.imagecontackregister span img[data-v-11783a4c]{height:auto;max-width:100%;width:150px}.imagecontackregister[data-v-11783a4c]{margin-bottom:50px}.buttoncontent button[data-v-11783a4c]{background-image:linear-gradient(to right top,#cf00ff,#d006ff,#d10bff,#d210ff,#d314ff,#d41aff,#d51fff,#d623ff,#d729ff,#d82fff,#d934ff,#da39ff);border-radius:0 30px;box-shadow:0 0 6px 2px rgba(0,0,0,.3);font-size:15px;height:50px;max-width:100%;width:100%}div h1[data-v-11783a4c]{color:#464646;font-size:30px;font-weight:700;margin-bottom:30px;text-shadow:2px 2px 5px rgba(0,0,0,.5);text-transform:uppercase}}@media screen and (max-width:780px){.imagecontackregister img[data-v-11783a4c]{height:auto;max-width:100%;width:250px}.imagecontackregister span img[data-v-11783a4c]{height:auto;max-width:100%;width:100px}div h1[data-v-11783a4c]{color:#464646;font-size:28px;font-weight:700;margin-bottom:30px;text-shadow:1px 1px 3px rgba(0,0,0,.3);text-transform:uppercase}}@media screen and (max-width:576px){.buttoncontent button span[data-v-11783a4c]{display:none}.buttoncontent button[data-v-11783a4c]{background-image:linear-gradient(to right top,#cf00ff,#d006ff,#d10bff,#d210ff,#d314ff,#d41aff,#d51fff,#d623ff,#d729ff,#d82fff,#d934ff,#da39ff);border:2px solid #fff;border-radius:0 30px;box-shadow:0 0 6px 2px rgba(0,0,0,.3);font-size:20px;height:50px;max-width:100%;width:100%}div h1[data-v-11783a4c]{color:#000;font-size:22px;font-weight:700;text-shadow:1px 1px 3px rgba(0,0,0,.1);text-transform:uppercase}}@media screen and (max-width:390px){.imagecontackregister img[data-v-11783a4c]{height:auto;max-width:100%;width:180px}.imagecontackregister span img[data-v-11783a4c]{height:auto;max-width:100%;width:80px}}@media screen and (max-width:380px){.buttoncontent button span[data-v-11783a4c]{display:none}.buttoncontent button[data-v-11783a4c]{background-image:linear-gradient(to right top,#cf00ff,#d006ff,#d10bff,#d210ff,#d314ff,#d41aff,#d51fff,#d623ff,#d729ff,#d82fff,#d934ff,#da39ff);border-radius:0 30px;box-shadow:0 0 6px 2px rgba(0,0,0,.3);font-size:18px;height:40px;max-width:100%;width:100%}div h1[data-v-11783a4c]{color:#000;font-size:20px;font-weight:700;text-shadow:1px 1px 3px rgba(0,0,0,.3);text-transform:uppercase}}@media screen and (max-width:294px){.imagecontackregister img[data-v-11783a4c]{height:auto;max-width:100%;width:120px}.imagecontackregister span img[data-v-11783a4c]{height:auto;max-width:100%;width:60px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=homepage-contenthomebtn-com.js.map