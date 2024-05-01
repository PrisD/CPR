"use strict";
(self["webpackChunkAPM_New"] = self["webpackChunkAPM_New"] || []).push([["main"],{

/***/ 484:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _common_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/home/home.component */ 2768);
/* harmony import */ var _screens_radiotherapy_screens_radiotherapy_radiotherapy_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/radiotherapy-screens/radiotherapy/radiotherapy.component */ 7672);
/* harmony import */ var _screens_psychology_screens_psychology_psychology_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screens/psychology-screens/psychology/psychology.component */ 1424);
/* harmony import */ var _screens_diagnostic_imaging_diagnostic_imaging_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screens/diagnostic-imaging/diagnostic-imaging.component */ 3156);
/* harmony import */ var _screens_our_center_our_center_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./screens/our-center/our-center.component */ 4612);
/* harmony import */ var _screens_radiotherapy_screens_brachytherapy_hdr_prostate_brachytherapy_hdr_prostate_brachytherapy_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./screens/radiotherapy-screens/brachytherapy/hdr-prostate-brachytherapy/hdr-prostate-brachytherapy.component */ 656);
/* harmony import */ var _screens_radiotherapy_screens_brachytherapy_hdr_skin_brachytherapy_hdr_skin_brachytherapy_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./screens/radiotherapy-screens/brachytherapy/hdr-skin-brachytherapy/hdr-skin-brachytherapy.component */ 3800);
/* harmony import */ var _screens_radiotherapy_screens_hybridarc_volumetric_dynamic_therapy_hybridarc_volumetric_dynamic_therapy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./screens/radiotherapy-screens/hybridarc-volumetric-dynamic-therapy/hybridarc-volumetric-dynamic-therapy.component */ 6524);
/* harmony import */ var _screens_radiotherapy_screens_igrt_exactrac_brainlab_image_guided_radiotherapy_igrt_exactrac_brainlab_image_guided_radiotherapy_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./screens/radiotherapy-screens/igrt-exactrac-brainlab-image-guided-radiotherapy/igrt-exactrac-brainlab-image-guided-radiotherapy.component */ 7200);
/* harmony import */ var _screens_radiotherapy_screens_imrt_intensity_modulated_radiotherapy_with_multileaf_imrt_intensity_modulated_radiotherapy_with_multileaf_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./screens/radiotherapy-screens/imrt-intensity-modulated-radiotherapy-with-multileaf/imrt-intensity-modulated-radiotherapy-with-multileaf.component */ 9343);
/* harmony import */ var _screens_radiotherapy_screens_brachytherapy_interstitial_gynecological_hdr_brachytherapy_interstitial_gynecological_hdr_brachytherapy_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./screens/radiotherapy-screens/brachytherapy/interstitial-gynecological-hdr-brachytherapy/interstitial-gynecological-hdr-brachytherapy.component */ 3704);
/* harmony import */ var _screens_radiotherapy_screens_brachytherapy_intracavitary_gynecological_hdr_brachytherapy_intracavitary_gynecological_hdr_brachytherapy_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./screens/radiotherapy-screens/brachytherapy/intracavitary-gynecological-hdr-brachytherapy/intracavitary-gynecological-hdr-brachytherapy.component */ 4788);
/* harmony import */ var _screens_radiotherapy_screens_r3_d_three_dimensional_conformal_radiotherapy_r3_d_three_dimensional_conformal_radiotherapy_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./screens/radiotherapy-screens/r3-d-three-dimensional-conformal-radiotherapy/r3-d-three-dimensional-conformal-radiotherapy.component */ 3379);
/* harmony import */ var _screens_radiotherapy_screens_sbrt_exactrac_body_stereotaxic_radiosurgery_sbrt_exactrac_body_stereotaxic_radiosurgery_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./screens/radiotherapy-screens/sbrt-exactrac-body-stereotaxic-radiosurgery/sbrt-exactrac-body-stereotaxic-radiosurgery.component */ 9924);
/* harmony import */ var _screens_radiotherapy_screens_srs_exactrac_cranial_stereotaxic_radiosurgery_srs_exactrac_cranial_stereotaxic_radiosurgery_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./screens/radiotherapy-screens/srs-exactrac-cranial-stereotaxic-radiosurgery/srs-exactrac-cranial-stereotaxic-radiosurgery.component */ 900);
/* harmony import */ var _screens_psychology_screens_mindfulness_workshop_mindfulness_workshop_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./screens/psychology-screens/mindfulness-workshop/mindfulness-workshop.component */ 7008);
/* harmony import */ var _screens_psychology_screens_psycho_oncology_psycho_oncology_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./screens/psychology-screens/psycho-oncology/psycho-oncology.component */ 4800);
/* harmony import */ var _screens_psychology_screens_what_is_mindfulness_what_is_mindfulness_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./screens/psychology-screens/what-is-mindfulness/what-is-mindfulness.component */ 47);
/* harmony import */ var _screens_shifts_shifts_options_shifts_options_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./screens/shifts/shifts-options/shifts-options.component */ 9344);
/* harmony import */ var _screens_radiotherapy_screens_brachytherapy_gynecological_hdr_brachytherapy_gynecological_hdr_brachytherapy_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./screens/radiotherapy-screens/brachytherapy/gynecological-hdr-brachytherapy/gynecological-hdr-brachytherapy.component */ 224);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 4280);























const routes = [{
  path: '',
  component: _common_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'radiotherapy',
  component: _screens_radiotherapy_screens_radiotherapy_radiotherapy_component__WEBPACK_IMPORTED_MODULE_1__.RadiotherapyComponent
}, {
  path: 'psychology',
  component: _screens_psychology_screens_psychology_psychology_component__WEBPACK_IMPORTED_MODULE_2__.PsychologyComponent
}, {
  path: 'diagnostic-imaging',
  component: _screens_diagnostic_imaging_diagnostic_imaging_component__WEBPACK_IMPORTED_MODULE_3__.DiagnosticImagingComponent
}, {
  path: 'our-center',
  component: _screens_our_center_our_center_component__WEBPACK_IMPORTED_MODULE_4__.OurCenterComponent
}, {
  path: 'hdr-prostate-brachytherapy',
  component: _screens_radiotherapy_screens_brachytherapy_hdr_prostate_brachytherapy_hdr_prostate_brachytherapy_component__WEBPACK_IMPORTED_MODULE_5__.HDRProstateBrachytherapyComponent
}, {
  path: 'hdr-skin-brachytherapy',
  component: _screens_radiotherapy_screens_brachytherapy_hdr_skin_brachytherapy_hdr_skin_brachytherapy_component__WEBPACK_IMPORTED_MODULE_6__.HDRSkinBrachytherapyComponent
}, {
  path: 'hybridarc-volumetric-dynamic-therapy',
  component: _screens_radiotherapy_screens_hybridarc_volumetric_dynamic_therapy_hybridarc_volumetric_dynamic_therapy_component__WEBPACK_IMPORTED_MODULE_7__.HybridarcVolumetricDynamicTherapyComponent
}, {
  path: 'igrt-exactrac-brainlab-image-guided-radiotherapy',
  component: _screens_radiotherapy_screens_igrt_exactrac_brainlab_image_guided_radiotherapy_igrt_exactrac_brainlab_image_guided_radiotherapy_component__WEBPACK_IMPORTED_MODULE_8__.IGRTExactracBrainlabImageGuidedRadiotherapyComponent
}, {
  path: 'imrt-intensity-modulated-radiotherapy-with-multileaf',
  component: _screens_radiotherapy_screens_imrt_intensity_modulated_radiotherapy_with_multileaf_imrt_intensity_modulated_radiotherapy_with_multileaf_component__WEBPACK_IMPORTED_MODULE_9__.IMRTIntensityModulatedRadiotherapyWithMultileafComponent
}, {
  path: 'interstitial-gynecological-hdr-brachytherapy',
  component: _screens_radiotherapy_screens_brachytherapy_interstitial_gynecological_hdr_brachytherapy_interstitial_gynecological_hdr_brachytherapy_component__WEBPACK_IMPORTED_MODULE_10__.InterstitialGynecologicalHDRBrachytherapyComponent
}, {
  path: 'intracavitary-gynecological-hdr-brachytherapy',
  component: _screens_radiotherapy_screens_brachytherapy_intracavitary_gynecological_hdr_brachytherapy_intracavitary_gynecological_hdr_brachytherapy_component__WEBPACK_IMPORTED_MODULE_11__.IntracavitaryGynecologicalHDRBrachytherapyComponent
}, {
  path: 'r3-d-three-dimensional-conformal-radiotherapy',
  component: _screens_radiotherapy_screens_r3_d_three_dimensional_conformal_radiotherapy_r3_d_three_dimensional_conformal_radiotherapy_component__WEBPACK_IMPORTED_MODULE_12__.R3DThreeDimensionalConformalRadiotherapyComponent
}, {
  path: 'sbrt-exactrac-body-stereotaxic-radiosurgery',
  component: _screens_radiotherapy_screens_sbrt_exactrac_body_stereotaxic_radiosurgery_sbrt_exactrac_body_stereotaxic_radiosurgery_component__WEBPACK_IMPORTED_MODULE_13__.SBRTExactracBodyStereotaxicRadiosurgeryComponent
}, {
  path: 'srs-exactrac-cranial-stereotaxic-radiosurgery',
  component: _screens_radiotherapy_screens_srs_exactrac_cranial_stereotaxic_radiosurgery_srs_exactrac_cranial_stereotaxic_radiosurgery_component__WEBPACK_IMPORTED_MODULE_14__.SRSExactracCranialStereotaxicRadiosurgeryComponent
}, {
  path: 'mindfulness-workshop',
  component: _screens_psychology_screens_mindfulness_workshop_mindfulness_workshop_component__WEBPACK_IMPORTED_MODULE_15__.MindfulnessWorkshopComponent
}, {
  path: 'psycho-oncology',
  component: _screens_psychology_screens_psycho_oncology_psycho_oncology_component__WEBPACK_IMPORTED_MODULE_16__.PsychoOncologyComponent
}, {
  path: 'what-is-mindfulness',
  component: _screens_psychology_screens_what_is_mindfulness_what_is_mindfulness_component__WEBPACK_IMPORTED_MODULE_17__.WhatIsMindfulnessComponent
}, {
  path: 'shifts-options',
  component: _screens_shifts_shifts_options_shifts_options_component__WEBPACK_IMPORTED_MODULE_18__.ShiftsOptionsComponent
}, {
  path: 'gynecological-hdr-brachytherapy',
  component: _screens_radiotherapy_screens_brachytherapy_gynecological_hdr_brachytherapy_gynecological_hdr_brachytherapy_component__WEBPACK_IMPORTED_MODULE_19__.GynecologicalHDRBrachytherapyComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule]
  });
})();

/***/ }),

/***/ 6108:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _common_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/header/header.component */ 1472);
/* harmony import */ var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/footer/footer.component */ 9076);






function AppComponent_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 3);
  }
}
class AppComponent {
  constructor(router) {
    this.router = router;
    this.title = 'APM-New';
    this.showBackgroundImage = false;
  }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd) {
        this.showBackgroundImage = event.urlAfterRedirects === '/';
      }
    });
  }
  onRouterOutletActivate(component) {
    // Aquí puedes realizar alguna lógica adicional si es necesario
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["pm-root"]],
    decls: 6,
    vars: 1,
    consts: [[1, "app-container"], ["class", "fondo h-full absolute top-0 left-0", "src", "../assets/images/CPR_fachada.jpg", "alt", "fondo", 4, "ngIf"], [1, "main-content"], ["src", "../assets/images/CPR_fachada.jpg", "alt", "fondo", 1, "fondo", "h-full", "absolute", "top-0", "left-0"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_img_1_Template, 1, 0, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showBackgroundImage);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _common_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
    styles: [".fondo[_ngcontent-%COMP%]{\n    object-fit: cover;\n    z-index: -1;\n    width: 100%;\n}\n.main-content[_ngcontent-%COMP%] {\n    margin: -8px;\n}\n@media screen and (max-width: 600px) {\n\n    .main-content[_ngcontent-%COMP%] {\n        margin: -2.3%;\n        margin-top: 2.3%;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBOztJQUVJO1FBQ0ksYUFBYTtRQUNiLGdCQUFnQjtJQUNwQjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLmZvbmRve1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5tYWluLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luOiAtOHB4O1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcblxyXG4gICAgLm1haW4tY29udGVudCB7XHJcbiAgICAgICAgbWFyZ2luOiAtMi4zJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyLjMlO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5204:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _screens_our_center_our_center_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screens/our-center/our-center.component */ 4612);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/platform-browser */ 168);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/platform-browser/animations */ 381);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 484);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 6108);
/* harmony import */ var _common_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/home/home.component */ 2768);
/* harmony import */ var _common_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/header/header.component */ 1472);
/* harmony import */ var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/footer/footer.component */ 9076);
/* harmony import */ var primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/tieredmenu */ 688);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! primeng/button */ 9276);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! primeng/toast */ 2984);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! primeng/menu */ 2544);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! primeng/divider */ 8856);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! primeng/sidebar */ 8200);
/* harmony import */ var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/panelmenu */ 6596);
/* harmony import */ var _mini_card_mini_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mini-card/mini-card.component */ 7572);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! primeng/card */ 9307);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! primeng/inputtext */ 2420);
/* harmony import */ var _title_card_title_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./title-card/title-card.component */ 6468);
/* harmony import */ var _screens_psychology_screens_psychology_psychology_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./screens/psychology-screens/psychology/psychology.component */ 1424);
/* harmony import */ var _screens_diagnostic_imaging_diagnostic_imaging_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./screens/diagnostic-imaging/diagnostic-imaging.component */ 3156);
/* harmony import */ var _screens_radiotherapy_screens_radiotherapy_radiotherapy_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./screens/radiotherapy-screens/radiotherapy/radiotherapy.component */ 7672);
/* harmony import */ var _screens_radiotherapy_screens_brachytherapy_hdr_prostate_brachytherapy_hdr_prostate_brachytherapy_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./screens/radiotherapy-screens/brachytherapy/hdr-prostate-brachytherapy/hdr-prostate-brachytherapy.component */ 656);
/* harmony import */ var _screens_radiotherapy_screens_brachytherapy_hdr_skin_brachytherapy_hdr_skin_brachytherapy_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./screens/radiotherapy-screens/brachytherapy/hdr-skin-brachytherapy/hdr-skin-brachytherapy.component */ 3800);
/* harmony import */ var _screens_radiotherapy_screens_hybridarc_volumetric_dynamic_therapy_hybridarc_volumetric_dynamic_therapy_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./screens/radiotherapy-screens/hybridarc-volumetric-dynamic-therapy/hybridarc-volumetric-dynamic-therapy.component */ 6524);
/* harmony import */ var _screens_radiotherapy_screens_igrt_exactrac_brainlab_image_guided_radiotherapy_igrt_exactrac_brainlab_image_guided_radiotherapy_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./screens/radiotherapy-screens/igrt-exactrac-brainlab-image-guided-radiotherapy/igrt-exactrac-brainlab-image-guided-radiotherapy.component */ 7200);
/* harmony import */ var _screens_radiotherapy_screens_imrt_intensity_modulated_radiotherapy_with_multileaf_imrt_intensity_modulated_radiotherapy_with_multileaf_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./screens/radiotherapy-screens/imrt-intensity-modulated-radiotherapy-with-multileaf/imrt-intensity-modulated-radiotherapy-with-multileaf.component */ 9343);
/* harmony import */ var _screens_radiotherapy_screens_brachytherapy_interstitial_gynecological_hdr_brachytherapy_interstitial_gynecological_hdr_brachytherapy_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./screens/radiotherapy-screens/brachytherapy/interstitial-gynecological-hdr-brachytherapy/interstitial-gynecological-hdr-brachytherapy.component */ 3704);
/* harmony import */ var _screens_radiotherapy_screens_brachytherapy_intracavitary_gynecological_hdr_brachytherapy_intracavitary_gynecological_hdr_brachytherapy_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./screens/radiotherapy-screens/brachytherapy/intracavitary-gynecological-hdr-brachytherapy/intracavitary-gynecological-hdr-brachytherapy.component */ 4788);
/* harmony import */ var _screens_radiotherapy_screens_r3_d_three_dimensional_conformal_radiotherapy_r3_d_three_dimensional_conformal_radiotherapy_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./screens/radiotherapy-screens/r3-d-three-dimensional-conformal-radiotherapy/r3-d-three-dimensional-conformal-radiotherapy.component */ 3379);
/* harmony import */ var _screens_radiotherapy_screens_sbrt_exactrac_body_stereotaxic_radiosurgery_sbrt_exactrac_body_stereotaxic_radiosurgery_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./screens/radiotherapy-screens/sbrt-exactrac-body-stereotaxic-radiosurgery/sbrt-exactrac-body-stereotaxic-radiosurgery.component */ 9924);
/* harmony import */ var _screens_radiotherapy_screens_srs_exactrac_cranial_stereotaxic_radiosurgery_srs_exactrac_cranial_stereotaxic_radiosurgery_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./screens/radiotherapy-screens/srs-exactrac-cranial-stereotaxic-radiosurgery/srs-exactrac-cranial-stereotaxic-radiosurgery.component */ 900);
/* harmony import */ var _screens_psychology_screens_mindfulness_workshop_mindfulness_workshop_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./screens/psychology-screens/mindfulness-workshop/mindfulness-workshop.component */ 7008);
/* harmony import */ var _screens_psychology_screens_psycho_oncology_psycho_oncology_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./screens/psychology-screens/psycho-oncology/psycho-oncology.component */ 4800);
/* harmony import */ var _screens_psychology_screens_what_is_mindfulness_what_is_mindfulness_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./screens/psychology-screens/what-is-mindfulness/what-is-mindfulness.component */ 47);
/* harmony import */ var _screens_shifts_shifts_options_shifts_options_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./screens/shifts/shifts-options/shifts-options.component */ 9344);
/* harmony import */ var _screens_radiotherapy_screens_brachytherapy_gynecological_hdr_brachytherapy_gynecological_hdr_brachytherapy_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./screens/radiotherapy-screens/brachytherapy/gynecological-hdr-brachytherapy/gynecological-hdr-brachytherapy.component */ 224);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ 4280);







































class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__.BrowserModule, primeng_panelmenu__WEBPACK_IMPORTED_MODULE_28__.PanelMenuModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_30__.RouterModule, primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_31__.TieredMenuModule, primeng_toast__WEBPACK_IMPORTED_MODULE_32__.ToastModule, primeng_menu__WEBPACK_IMPORTED_MODULE_33__.MenuModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_34__.SidebarModule, primeng_divider__WEBPACK_IMPORTED_MODULE_35__.DividerModule, primeng_button__WEBPACK_IMPORTED_MODULE_36__.ButtonModule, primeng_card__WEBPACK_IMPORTED_MODULE_37__.CardModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_38__.InputTextModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _common_home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent, _common_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent, _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent, _mini_card_mini_card_component__WEBPACK_IMPORTED_MODULE_6__.MiniCardComponent, _title_card_title_card_component__WEBPACK_IMPORTED_MODULE_7__.TitleCardComponent, _screens_psychology_screens_psychology_psychology_component__WEBPACK_IMPORTED_MODULE_8__.PsychologyComponent, _screens_diagnostic_imaging_diagnostic_imaging_component__WEBPACK_IMPORTED_MODULE_9__.DiagnosticImagingComponent, _screens_radiotherapy_screens_radiotherapy_radiotherapy_component__WEBPACK_IMPORTED_MODULE_10__.RadiotherapyComponent, _screens_our_center_our_center_component__WEBPACK_IMPORTED_MODULE_0__.OurCenterComponent, _screens_radiotherapy_screens_brachytherapy_hdr_prostate_brachytherapy_hdr_prostate_brachytherapy_component__WEBPACK_IMPORTED_MODULE_11__.HDRProstateBrachytherapyComponent, _screens_radiotherapy_screens_brachytherapy_hdr_skin_brachytherapy_hdr_skin_brachytherapy_component__WEBPACK_IMPORTED_MODULE_12__.HDRSkinBrachytherapyComponent, _screens_radiotherapy_screens_brachytherapy_interstitial_gynecological_hdr_brachytherapy_interstitial_gynecological_hdr_brachytherapy_component__WEBPACK_IMPORTED_MODULE_16__.InterstitialGynecologicalHDRBrachytherapyComponent, _screens_radiotherapy_screens_brachytherapy_intracavitary_gynecological_hdr_brachytherapy_intracavitary_gynecological_hdr_brachytherapy_component__WEBPACK_IMPORTED_MODULE_17__.IntracavitaryGynecologicalHDRBrachytherapyComponent, _screens_radiotherapy_screens_r3_d_three_dimensional_conformal_radiotherapy_r3_d_three_dimensional_conformal_radiotherapy_component__WEBPACK_IMPORTED_MODULE_18__.R3DThreeDimensionalConformalRadiotherapyComponent, _screens_radiotherapy_screens_sbrt_exactrac_body_stereotaxic_radiosurgery_sbrt_exactrac_body_stereotaxic_radiosurgery_component__WEBPACK_IMPORTED_MODULE_19__.SBRTExactracBodyStereotaxicRadiosurgeryComponent, _screens_radiotherapy_screens_hybridarc_volumetric_dynamic_therapy_hybridarc_volumetric_dynamic_therapy_component__WEBPACK_IMPORTED_MODULE_13__.HybridarcVolumetricDynamicTherapyComponent, _screens_radiotherapy_screens_igrt_exactrac_brainlab_image_guided_radiotherapy_igrt_exactrac_brainlab_image_guided_radiotherapy_component__WEBPACK_IMPORTED_MODULE_14__.IGRTExactracBrainlabImageGuidedRadiotherapyComponent, _screens_radiotherapy_screens_imrt_intensity_modulated_radiotherapy_with_multileaf_imrt_intensity_modulated_radiotherapy_with_multileaf_component__WEBPACK_IMPORTED_MODULE_15__.IMRTIntensityModulatedRadiotherapyWithMultileafComponent, _screens_radiotherapy_screens_srs_exactrac_cranial_stereotaxic_radiosurgery_srs_exactrac_cranial_stereotaxic_radiosurgery_component__WEBPACK_IMPORTED_MODULE_20__.SRSExactracCranialStereotaxicRadiosurgeryComponent, _screens_psychology_screens_mindfulness_workshop_mindfulness_workshop_component__WEBPACK_IMPORTED_MODULE_21__.MindfulnessWorkshopComponent, _screens_psychology_screens_psycho_oncology_psycho_oncology_component__WEBPACK_IMPORTED_MODULE_22__.PsychoOncologyComponent, _screens_psychology_screens_what_is_mindfulness_what_is_mindfulness_component__WEBPACK_IMPORTED_MODULE_23__.WhatIsMindfulnessComponent, _screens_shifts_shifts_options_shifts_options_component__WEBPACK_IMPORTED_MODULE_24__.ShiftsOptionsComponent, _screens_radiotherapy_screens_brachytherapy_gynecological_hdr_brachytherapy_gynecological_hdr_brachytherapy_component__WEBPACK_IMPORTED_MODULE_25__.GynecologicalHDRBrachytherapyComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__.BrowserModule, primeng_panelmenu__WEBPACK_IMPORTED_MODULE_28__.PanelMenuModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_30__.RouterModule, primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_31__.TieredMenuModule, primeng_toast__WEBPACK_IMPORTED_MODULE_32__.ToastModule, primeng_menu__WEBPACK_IMPORTED_MODULE_33__.MenuModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_34__.SidebarModule, primeng_divider__WEBPACK_IMPORTED_MODULE_35__.DividerModule, primeng_button__WEBPACK_IMPORTED_MODULE_36__.ButtonModule, primeng_card__WEBPACK_IMPORTED_MODULE_37__.CardModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_38__.InputTextModule]
  });
})();

/***/ }),

/***/ 9076:
/*!***************************************************!*\
  !*** ./src/app/common/footer/footer.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);

class FooterComponent {
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 0,
    vars: 0,
    template: function FooterComponent_Template(rf, ctx) {},
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1472:
/*!***************************************************!*\
  !*** ./src/app/common/header/header.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 1384);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/panelmenu */ 6596);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/sidebar */ 8200);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 9276);








const _c0 = () => ({
  "width": "100%"
});
const _c1 = () => ({
  "color": "white",
  "background": "rgb(51 51 51 / 0%)",
  "border": "none"
});
function HeaderComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "p-sidebar", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("visibleChange", function HeaderComponent_div_0_Template_p_sidebar_visibleChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r2.sidebarVisible, $event) || (ctx_r2.sidebarVisible = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p-panelMenu", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_0_Template_p_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.sidebarVisible = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8)(7, "p-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function HeaderComponent_div_0_Template_p_button_onClick_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.goToShifts());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("visible", ctx_r0.sidebarVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx_r0.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rounded", true)("text", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rounded", true);
  }
}
function HeaderComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10)(1, "div", 3)(2, "p-sidebar", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("visibleChange", function HeaderComponent_div_1_Template_p_sidebar_visibleChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r6.sidebarVisible, $event) || (ctx_r6.sidebarVisible = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p-panelMenu", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_1_Template_p_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.sidebarVisible = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_1_Template_img_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.redireccionar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("visible", ctx_r1.sidebarVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx_r1.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rounded", true)("text", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rounded", true);
  }
}
class HeaderComponent {
  constructor(router) {
    this.router = router;
    this.sidebarVisible = false;
    this.headerNoHome = true;
  }
  ngOnInit() {
    this.items = [{
      label: 'HOME',
      routerLink: '/'
    }, {
      label: 'RADIOTERAPIA',
      routerLink: '/radiotherapy',
      items: [{
        label: 'BRAQUITERAPIA HDR EN PRÓSTATA',
        routerLink: '/hdr-prostate-brachytherapy'
      }, {
        label: 'BRAQUITERAPIA HDR GINECOLÓGICA',
        routerLink: '/gynecological-hdr-brachytherapy'
      }, {
        label: 'BRAQUITERAPIA HDR DE PIEL',
        routerLink: '/hdr-skin-brachytherapy'
      }, {
        label: 'IGRT EXACTRAC – BRAINLAB – RADIOTERAPIA GUIADA POR IMÁGENES',
        routerLink: '/igrt-exactrac-brainlab-image-guided-radiotherapy'
      }, {
        label: 'SBRT EXACTRAC – RADIOCIRUGÍA ESTEREOTÁXICA CORPORAL',
        routerLink: '/sbrt-exactrac-body-stereotaxic-radiosurgery'
      }, {
        label: 'SRS EXACTRAC – RADIOCIRUGÍA ESTEREOTÁXICA CRANEAL',
        routerLink: '/srs-exactrac-cranial-stereotaxic-radiosurgery'
      }, {
        label: 'HYBRIDARC TERAPIA DINÁMICA VOLUMÉTRICA',
        routerLink: '/hybridarc-volumetric-dynamic-therapy'
      }, {
        label: 'IMRT – RADIOTERAPIA DE INTENSIDAD MODULADA CON MULTILÁMINAS',
        routerLink: '/imrt-intensity-modulated-radiotherapy-with-multileaf'
      }, {
        label: 'R3D – RADIOTERAPIA TRIDIMENSIONAL CONFORMADA',
        routerLink: '/r3-d-three-dimensional-conformal-radiotherapy'
      }]
    }, {
      label: 'DIAGNÓSTICO POR IMÁGENES',
      routerLink: '/diagnostic-imaging'
    }, {
      label: 'PSICOLOGÍA',
      routerLink: '/psychology',
      items: [{
        label: 'PSICO-ONCOLOGÍA',
        routerLink: '/psycho-oncology'
      }, {
        label: 'TALLER DE MINDFULNESS',
        routerLink: '/mindfulness-workshop'
      }]
    }, {
      label: 'TURNOS',
      routerLink: '/shifts-options'
    }, {
      label: 'NUESTRO CENTRO',
      routerLink: '/our-center'
    }, {
      label: 'STAFF DE PROFESIONALES',
      routerLink: '/staff-profesionales'
    }, {
      label: 'EQUIPAMIENTO',
      routerLink: '/equipamiento'
    }, {
      label: 'NOVEDADES',
      routerLink: '/novedades'
    }, {
      label: 'CONTACTO',
      routerLink: '/contacto'
    }];
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {
        this.headerNoHome = event.urlAfterRedirects === '/';
      }
    });
  }
  redireccionar() {
    window.location.href = "/";
  }
  goToShifts() {
    this.router.navigate(['\shifts-options']);
  }
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_2__.MessageService])],
    decls: 2,
    vars: 2,
    consts: [["class", "flex justify-content-between flex-wrap fondoHeaderHome align-items-center", 4, "ngIf"], ["class", "flex justify-content-between flex-wrap fondoHeader align-items-center", 4, "ngIf"], [1, "flex", "justify-content-between", "flex-wrap", "fondoHeaderHome", "align-items-center"], [1, "card", "flex"], ["position", "top", "styleClass", "h-auto", 1, "font-rubik", 3, "visible", "visibleChange"], [1, "flex", "justify-content-center"], [3, "model"], ["size", "large", "icon", "pi pi-bars", 3, "rounded", "text", "click"], [1, "flex", "turns"], ["label", "Turnos", 3, "rounded", "onClick"], [1, "flex", "justify-content-between", "flex-wrap", "fondoHeader", "align-items-center"], ["src", "../../assets/images/CPR_logo-apaisado.png", "alt", "", 1, "logo", "cursor-pointer", 3, "click"], ["label", "Turnos", 3, "rounded"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HeaderComponent_div_0_Template, 8, 11, "div", 0)(1, HeaderComponent_div_1_Template, 9, 11, "div", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.headerNoHome);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.headerNoHome);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, primeng_panelmenu__WEBPACK_IMPORTED_MODULE_4__.PanelMenu, primeng_sidebar__WEBPACK_IMPORTED_MODULE_5__.Sidebar, primeng_button__WEBPACK_IMPORTED_MODULE_6__.Button],
    styles: [".fondoHeaderHome[_ngcontent-%COMP%] {\n    background-color: #0009;\n    padding: 1%;\n    margin: -8px;\n}\n.fondoHeader[_ngcontent-%COMP%]{\n    background-color: #333333;\n    padding: 1%;\n    margin: -8px;\n}\n.logo[_ngcontent-%COMP%] {\n    width: 14%;\n}\n[_nghost-%COMP%]  .p-sidebar-top {\n    background: #333333;\n}\n\n[_nghost-%COMP%]  .p-sidebar .p-sidebar-header .p-sidebar-close, .p-sidebar[_ngcontent-%COMP%]   .p-sidebar-header[_ngcontent-%COMP%]   .p-sidebar-icon[_ngcontent-%COMP%] {\n    color: #ffffff;\n}\n@media screen and (max-width: 600px) {\n    .fondoHeaderHome[_ngcontent-%COMP%], .fondoHeader[_ngcontent-%COMP%] {\n        margin: -2.3%;\n    }\n    .logo[_ngcontent-%COMP%] {\n            width: 30%;\n    }\n}\n[_nghost-%COMP%]  .p-panelmenu .p-panelmenu-header .p-panelmenu-header-content .p-panelmenu-header-action, [_nghost-%COMP%]   .p-panelmenu .p-panelmenu-content .p-menuitem>.p-menuitem-content .p-menuitem-link .p-menuitem-text{\n    color: #ffffffe1;\n    padding: 0.25rem;\n    font-weight: 400;\n    \n}\n[_nghost-%COMP%]  .p-panelmenu .p-panelmenu-header .p-panelmenu-header-content, [_nghost-%COMP%]  .p-panelmenu .p-panelmenu-content{\n    border: none;\n    background: #ffffff00;\n} \n\n[_nghost-%COMP%]  .p-panelmenu .p-panelmenu-content .p-menuitem>.p-menuitem-content .p-menuitem-link {\n    padding: 0rem;\n    padding-left: 30px;\n}\n[_nghost-%COMP%]  .p-panelmenu .p-panelmenu-content .p-menuitem>.p-menuitem-content .p-menuitem-link :hover, [_nghost-%COMP%]  .p-panelmenu .p-panelmenu-header .p-panelmenu-header-content .p-panelmenu-header-action  :hover\n{\n    color: #919747;\n}\n\n[_nghost-%COMP%]  .p-panelmenu .p-panelmenu-content .p-menuitem:not(.p-highlight):not(.p-disabled)>.p-menuitem-content:hover{\n    background: transparent;\n}\n\n.turns[_ngcontent-%COMP%]{\n    margin-right: 65px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tbW9uL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksY0FBYztBQUNsQjtBQUNBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7WUFDUSxVQUFVO0lBQ2xCO0FBQ0o7QUFDQTs7SUFFSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjs7QUFFcEI7QUFDQTs7SUFFSSxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUNBOzs7SUFHSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb25kb0hlYWRlckhvbWUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDk7XHJcbiAgICBwYWRkaW5nOiAxJTtcclxuICAgIG1hcmdpbjogLThweDtcclxufVxyXG4uZm9uZG9IZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4gICAgcGFkZGluZzogMSU7XHJcbiAgICBtYXJnaW46IC04cHg7XHJcbn1cclxuLmxvZ28ge1xyXG4gICAgd2lkdGg6IDE0JTtcclxufVxyXG46aG9zdDo6bmctZGVlcCAucC1zaWRlYmFyLXRvcCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xyXG59XHJcblxyXG46aG9zdDo6bmctZGVlcCAucC1zaWRlYmFyIC5wLXNpZGViYXItaGVhZGVyIC5wLXNpZGViYXItY2xvc2UsXHJcbi5wLXNpZGViYXIgLnAtc2lkZWJhci1oZWFkZXIgLnAtc2lkZWJhci1pY29uIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuZm9uZG9IZWFkZXJIb21lLCAuZm9uZG9IZWFkZXIge1xyXG4gICAgICAgIG1hcmdpbjogLTIuMyU7XHJcbiAgICB9XHJcbiAgICAubG9nbyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICB9XHJcbn1cclxuOmhvc3Q6Om5nLWRlZXAgLnAtcGFuZWxtZW51IC5wLXBhbmVsbWVudS1oZWFkZXIgLnAtcGFuZWxtZW51LWhlYWRlci1jb250ZW50IC5wLXBhbmVsbWVudS1oZWFkZXItYWN0aW9uLFxyXG46aG9zdDo6bmctZGVlcCAgLnAtcGFuZWxtZW51IC5wLXBhbmVsbWVudS1jb250ZW50IC5wLW1lbnVpdGVtPi5wLW1lbnVpdGVtLWNvbnRlbnQgLnAtbWVudWl0ZW0tbGluayAucC1tZW51aXRlbS10ZXh0e1xyXG4gICAgY29sb3I6ICNmZmZmZmZlMTtcclxuICAgIHBhZGRpbmc6IDAuMjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgXHJcbn1cclxuOmhvc3Q6Om5nLWRlZXAgLnAtcGFuZWxtZW51IC5wLXBhbmVsbWVudS1oZWFkZXIgLnAtcGFuZWxtZW51LWhlYWRlci1jb250ZW50ICxcclxuOmhvc3Q6Om5nLWRlZXAgLnAtcGFuZWxtZW51IC5wLXBhbmVsbWVudS1jb250ZW50e1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjAwO1xyXG59IFxyXG5cclxuOmhvc3Q6Om5nLWRlZXAgLnAtcGFuZWxtZW51IC5wLXBhbmVsbWVudS1jb250ZW50IC5wLW1lbnVpdGVtPi5wLW1lbnVpdGVtLWNvbnRlbnQgLnAtbWVudWl0ZW0tbGluayB7XHJcbiAgICBwYWRkaW5nOiAwcmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG59XHJcbjpob3N0OjpuZy1kZWVwIC5wLXBhbmVsbWVudSAucC1wYW5lbG1lbnUtY29udGVudCAucC1tZW51aXRlbT4ucC1tZW51aXRlbS1jb250ZW50IC5wLW1lbnVpdGVtLWxpbmsgOmhvdmVyLFxyXG46aG9zdDo6bmctZGVlcCAucC1wYW5lbG1lbnUgLnAtcGFuZWxtZW51LWhlYWRlciAucC1wYW5lbG1lbnUtaGVhZGVyLWNvbnRlbnQgLnAtcGFuZWxtZW51LWhlYWRlci1hY3Rpb24gIDpob3ZlclxyXG57XHJcbiAgICBjb2xvcjogIzkxOTc0NztcclxufVxyXG5cclxuOmhvc3Q6Om5nLWRlZXAgLnAtcGFuZWxtZW51IC5wLXBhbmVsbWVudS1jb250ZW50IC5wLW1lbnVpdGVtOm5vdCgucC1oaWdobGlnaHQpOm5vdCgucC1kaXNhYmxlZCk+LnAtbWVudWl0ZW0tY29udGVudDpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4udHVybnN7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDY1cHg7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 2768:
/*!***********************************************!*\
  !*** ./src/app/common/home/home.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/divider */ 8856);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ 9276);
/* harmony import */ var _mini_card_mini_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mini-card/mini-card.component */ 7572);




class HomeComponent {
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 19,
    vars: 0,
    consts: [[1, "flex", "justify-content-center", "align-items-center", "fondoVerde", "mt-5"], ["src", "../../assets/images/CPR_logo-apaisado.png", "alt", "", 1, "logo"], ["layout", "vertical"], [1, "text-white", "texto"], [1, "flex", "flex-column", "justify-content-center", "align-items-center"], [1, "text-white", "textoPregunta"], [1, "input-container"], ["type", "text", "id", "roundedInput", "placeholder", "TURNOS, TRATAMIENTOS, ESPECIALIDADES, PROFESIONALES..."], ["type", "button", "pButton", "", "icon", "pi pi-search", 1, "p-button-warning", "search-button"], [1, "absolute", "bottom-0", "right-0", "m-3"], ["pButton", "", "pRipple", "", 1, "p-button-success", "p-button-rounded", "p-button-raised", "consultas-button"], ["src", "/assets/images/whatsapp_logo.png", "alt", "WhatsApp Logo"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1)(2, "p-divider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Excelencia m\u00E9dica y calidez");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "humana al servicio de su Salud ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4)(8, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u00BFEN QU\u00C9 PODEMOS AYUDARTE?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 7)(12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "app-mini-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9)(16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " CONSULTAS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [primeng_divider__WEBPACK_IMPORTED_MODULE_2__.Divider, primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonDirective, _mini_card_mini_card_component__WEBPACK_IMPORTED_MODULE_0__.MiniCardComponent],
    styles: [".fondoVerde[_ngcontent-%COMP%] {\n    background-color: #61663de0;\n    border-top-right-radius: 2rem;\n    margin: 0 1% 0 -5%;\n    width: 57%;\n}\n\n.texto[_ngcontent-%COMP%] {\n    font-size: 17px;\n}\n\n#roundedInput[_ngcontent-%COMP%] {\n    border-radius: 30px;\n    padding: 1.4%;\n    border: 1px solid #ccc;\n    width: 100%;\n}\n\n#roundedInput[_ngcontent-%COMP%]:focus, #roundedInput[_ngcontent-%COMP%]:focus-visible {\n    border-color: #919747;\n    box-shadow: 0 0 1px 1px #919747;\n    outline: #919747;\n}\n\ninput#roundedInput[_ngcontent-%COMP%], #roundedInput[_ngcontent-%COMP%]::placeholder {\n    font-size: medium;\n    color: #919747;\n    font-family: 'Rubik Medium', sans-serif;\n}\n.input-container[_ngcontent-%COMP%] {\n    position: relative;\n    width: 50%;\n}\n\n.search-button[_ngcontent-%COMP%] {\n    border-radius: 0 30px 30px 0 ;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    padding: 0 0.5rem;\n    cursor: pointer;\n    outline: none;\n}\n.logo[_ngcontent-%COMP%]{\n    width: 25%;\n}\n.consultas-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 20px;\n    width: 20px;\n    margin-left: 25px;\n}\n\n.consultas-button[_ngcontent-%COMP%]{\n    margin-right: 65px;\n}\n\n\n\n\n@media screen and (max-width: 600px) {\n    .texto[_ngcontent-%COMP%] {\n        font-size: 9px;\n    }\n\n    .textoPregunta[_ngcontent-%COMP%] {\n        font-size: 14px;\n    }\n\n    input#roundedInput[_ngcontent-%COMP%], #roundedInput[_ngcontent-%COMP%]::placeholder {\n        font-size: 0.5rem;\n    }\n\n    #roundedInput[_ngcontent-%COMP%] {\n        padding: 4%;\n    }\n    .logo[_ngcontent-%COMP%]{\n        width: 40%;\n    }\n    .input-container[_ngcontent-%COMP%]{\n            width: 90%;\n    }\n    .fondoVerde[_ngcontent-%COMP%]{\n        width: auto;\n    }\n    .consultas-button[_ngcontent-%COMP%]{\n        margin-right: 5px;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tbW9uL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxxQkFBcUI7SUFDckIsK0JBQStCO0lBQy9CLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLHVDQUF1QztBQUMzQztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBLGNBQWM7O0FBRWQ7SUFDSTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBOztRQUVJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7WUFDUSxVQUFVO0lBQ2xCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLmZvbmRvVmVyZGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYxNjYzZGUwO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDJyZW07XHJcbiAgICBtYXJnaW46IDAgMSUgMCAtNSU7XHJcbiAgICB3aWR0aDogNTclO1xyXG59XHJcblxyXG4udGV4dG8ge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4jcm91bmRlZElucHV0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiAxLjQlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jcm91bmRlZElucHV0OmZvY3VzLFxyXG4jcm91bmRlZElucHV0OmZvY3VzLXZpc2libGUge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjOTE5NzQ3O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAxcHggIzkxOTc0NztcclxuICAgIG91dGxpbmU6ICM5MTk3NDc7XHJcbn1cclxuXHJcbmlucHV0I3JvdW5kZWRJbnB1dCxcclxuI3JvdW5kZWRJbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICBjb2xvcjogIzkxOTc0NztcclxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsgTWVkaXVtJywgc2Fucy1zZXJpZjtcclxufVxyXG4uaW5wdXQtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5zZWFyY2gtYnV0dG9uIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMzBweCAzMHB4IDAgO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBwYWRkaW5nOiAwIDAuNXJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLmxvZ297XHJcbiAgICB3aWR0aDogMjUlO1xyXG59XHJcbi5jb25zdWx0YXMtYnV0dG9uIGltZyB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG59XHJcblxyXG4uY29uc3VsdGFzLWJ1dHRvbntcclxuICAgIG1hcmdpbi1yaWdodDogNjVweDtcclxufVxyXG5cclxuLyogUmVzcG9zaXZlICovXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLnRleHRvIHtcclxuICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgIH1cclxuXHJcbiAgICAudGV4dG9QcmVndW50YSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0I3JvdW5kZWRJbnB1dCxcclxuICAgICNyb3VuZGVkSW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICBmb250LXNpemU6IDAuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAjcm91bmRlZElucHV0IHtcclxuICAgICAgICBwYWRkaW5nOiA0JTtcclxuICAgIH1cclxuICAgIC5sb2dve1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICB9XHJcbiAgICAuaW5wdXQtY29udGFpbmVye1xyXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG4gICAgLmZvbmRvVmVyZGV7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICB9XHJcbiAgICAuY29uc3VsdGFzLWJ1dHRvbntcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 7572:
/*!**************************************************!*\
  !*** ./src/app/mini-card/mini-card.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MiniCardComponent: () => (/* binding */ MiniCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4040);


class MiniCardComponent {
  static #_ = this.ɵfac = function MiniCardComponent_Factory(t) {
    return new (t || MiniCardComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MiniCardComponent,
    selectors: [["app-mini-card"]],
    decls: 16,
    vars: 0,
    consts: [[1, "flex", "flex-wrap", "justify-content-center", "mt-3", "mb-3", "gap-3"], ["routerLink", "/radiotherapy", 1, "article-card", "shadow-6"], [1, "content"], [1, "ml-4", "m-0", "text-white", "title"], ["src", "..\\assets\\images\\CPR_JorgeSAR.jpg", "alt", "article-cover"], ["routerLink", "/diagnostic-imaging", 1, "article-card", "shadow-6"], [1, "content", "fondoNaranja"], ["src", "..\\assets\\images\\CPR_tomografo.jpeg", "alt", "article-cover"], ["routerLink", "/psychology", 1, "article-card", "shadow-6"], [1, "content", "fondoAmarillo"], ["src", "..\\assets\\images\\CPR_meditationgroup.jpeg", "alt", "article-cover"]],
    template: function MiniCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "a", 1)(2, "div", 2)(3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "RADIOTERAPIA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5)(7, "div", 6)(8, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "DIAGN\u00D3STICO POR IM\u00C1GENES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8)(12, "div", 9)(13, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "PSICOLOG\u00CDA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: [".article-card[_ngcontent-%COMP%] {\n        width: 30%;\n        height: 200px;\n        border-radius: 0 40px 0 0;\n        overflow: hidden;\n        position: relative;\n        font-family: Arial, Helvetica, sans-serif;\n        transition: all 300ms;\n    }\n\n    .article-card[_ngcontent-%COMP%]:hover {\n        transform: translateY(-2px);\n        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n    }\n\n    .article-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 150%;\n        object-fit: cover;\n    }\n\n    .article-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n        box-sizing: border-box;\n        width: 100%;\n        position: absolute;\n        padding: 10px 10px 10px 10px;\n        bottom: 0;\n        background: #919747;\n    }\n\n    .article-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n        margin: 0;\n    }\n    .title[_ngcontent-%COMP%] {\n        font-family: 'Rubik Light';\n        font-weight: 500;\n        font-size: x-large;\n    }\n\n    .fondoNaranja[_ngcontent-%COMP%] {\n        background-color: #d78a00 !important;\n    }\n\n    .fondoAmarillo[_ngcontent-%COMP%] {\n        background-color: #a7a11c !important;\n    }\n\n    img[_ngcontent-%COMP%] {\n        max-width: 100%;\n        height: auto;\n        display: block;\n        margin: 0 auto;\n    }\n\n    @media screen and (max-width: 600px) {\n        .article-card[_ngcontent-%COMP%] {\n            width: 90%;\n            height: 15vh;\n        }\n\n        .title[_ngcontent-%COMP%] {\n            font-size: medium;\n        }\n    }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWluaS1jYXJkL21pbmktY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJJQUFJO1FBQ0ksVUFBVTtRQUNWLGFBQWE7UUFDYix5QkFBeUI7UUFDekIsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQix5Q0FBeUM7UUFDekMscUJBQXFCO0lBQ3pCOztJQUVBO1FBQ0ksMkJBQTJCO1FBQzNCLDRFQUE0RTtJQUNoRjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksc0JBQXNCO1FBQ3RCLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsNEJBQTRCO1FBQzVCLFNBQVM7UUFDVCxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxTQUFTO0lBQ2I7SUFDQTtRQUNJLDBCQUEwQjtRQUMxQixnQkFBZ0I7UUFDaEIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksb0NBQW9DO0lBQ3hDOztJQUVBO1FBQ0ksb0NBQW9DO0lBQ3hDOztJQUVBO1FBQ0ksZUFBZTtRQUNmLFlBQVk7UUFDWixjQUFjO1FBQ2QsY0FBYztJQUNsQjs7SUFFQTtRQUNJO1lBQ0ksVUFBVTtZQUNWLFlBQVk7UUFDaEI7O1FBRUE7WUFDSSxpQkFBaUI7UUFDckI7SUFDSiIsInNvdXJjZXNDb250ZW50IjpbIiAgICAuYXJ0aWNsZS1jYXJkIHtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCA0MHB4IDAgMDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICB9XHJcblxyXG4gICAgLmFydGljbGUtY2FyZDpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XHJcbiAgICB9XHJcblxyXG4gICAgLmFydGljbGUtY2FyZCBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTUwJTtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIH1cclxuXHJcbiAgICAuYXJ0aWNsZS1jYXJkIC5jb250ZW50IHtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjOTE5NzQ3O1xyXG4gICAgfVxyXG5cclxuICAgIC5hcnRpY2xlLWNhcmQgLnRpdGxlIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUnViaWsgTGlnaHQnO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb25kb05hcmFuamEge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkNzhhMDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuZm9uZG9BbWFyaWxsbyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2E3YTExYyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgIC5hcnRpY2xlLWNhcmQge1xyXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1dmg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgICAgICB9XHJcbiAgICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3156:
/*!****************************************************************************!*\
  !*** ./src/app/screens/diagnostic-imaging/diagnostic-imaging.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DiagnosticImagingComponent: () => (/* binding */ DiagnosticImagingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ 9276);
/* harmony import */ var _title_card_title_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../title-card/title-card.component */ 6468);




class DiagnosticImagingComponent {
  constructor(router) {
    this.router = router;
  }
  goToDiagnosticTurns() {
    this.router.navigate(['\shifts-diagnosis-by-imaging']);
  }
  static #_ = this.ɵfac = function DiagnosticImagingComponent_Factory(t) {
    return new (t || DiagnosticImagingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DiagnosticImagingComponent,
    selectors: [["app-diagnostic-imaging"]],
    decls: 46,
    vars: 3,
    consts: [[1, "conteiner"], ["title", "DIAGN\u00D3STICO POR IM\u00C1GENES", "imageUrl", "..\\assets\\images\\CPR_tomografia1.jpg", "subtitle", "Nuestro Centro ofrece el servicio de Diagn\u00F3stico por Im\u00E1genes tanto para pacientes\n        del Centro, como para particulares.", "color", "rgba(215, 138, 0, 0.6)", 3, "titleFontSize", "titleFontSizeScreen"], [1, "content"], [1, "content-text"], [1, "titulo"], [1, "description"], [1, "flex", "align-items-center", "check"], [1, "pi", "pi-angle-right", 2, "color", "rgb(97, 102, 61)"], [1, "content-img"], ["src", "..\\assets\\images\\CPR_equipamiento5.jpg"], ["src", "..\\assets\\images\\CPR_tomografo2.jpg"], [1, "flex", "botones"], ["label", "SACAR TURNO", 1, "flex", "felx-row", "psy-button", 3, "rounded", "click"]],
    template: function DiagnosticImagingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-title-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Equipamiento de \u00FAltima generaci\u00F3n para realizar Tomograf\u00EDas de diagn\u00F3tico.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "El Centro cuenta con un tom\u00F3grafo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "SOMATOM go.Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " para Diagn\u00F3stico con Im\u00E1genes de forma simple y efectiva.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div")(14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p")(17, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Brinda im\u00E1genes de alta calidad con cortes multislice.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p")(22, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Cuenta con CARE i-Tilt para la protecci\u00F3n de \u00F3rganos sensibles.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p")(27, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Modula el amperaje y voltaje para cada ancho de corte, lo que significa menor dosis para el paciente.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Sus m\u00FAltiples receptores ofrecen una mejor resoluci\u00F3n y definen mejor el contorno de los \u00F3rganos. Brinda cortes submilim\u00E9tricos en todo el ancho del detector lo que permite im\u00E1genes ideales para tratamientos de ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "radiocirug\u00EDa y radioterapia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, ", as\u00ED como tambi\u00E9n para ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "escaneos de rutina, angiograf\u00EDas, ex\u00E1menes neurol\u00F3gicos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " y de ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "estructuras \u00F3seas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " hasta las m\u00E1s peque\u00F1as como las del o\u00EDdo interno. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "img", 9)(42, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 3)(44, "div", 11)(45, "p-button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DiagnosticImagingComponent_Template_p_button_click_45_listener() {
          return ctx.goToDiagnosticTurns();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("titleFontSize", 50)("titleFontSizeScreen", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rounded", true);
      }
    },
    dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_3__.Button, _title_card_title_card_component__WEBPACK_IMPORTED_MODULE_0__.TitleCardComponent],
    styles: ["div[_ngcontent-%COMP%] {\n    font-family: 'Rubik Regular', sans-serif\n}\n\n.container[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n    background: linear-gradient(to bottom, rgba(215, 107, 0, 0.316), rgba(255, 255, 255, 0.5) 25%);\n    padding-top: 10px;\n    font-family: 'Rubik', sans-serif;\n\n}\n\n.content-text[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n}\n\n.titulo[_ngcontent-%COMP%] {\n    font-size: 28px;\n    font-family: 'Rubik', sans-serif;\n}\n\n.titulo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #919747;\n\n}\n\n\n.description[_ngcontent-%COMP%] {\n    font-size: 22px;\n    color: black;\n\n}\n\n.description[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-weight: 800;\n}\n\n.description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-right: 10px;\n    font-weight: 900;\n    font-size: 1.5rem;\n}\n\n.check[_ngcontent-%COMP%] {\n    margin-bottom: -15px;\n}\n\n.botones[_ngcontent-%COMP%] {\n    justify-content: center;\n}\n\n.psy-button[_ngcontent-%COMP%] {\n    margin: 100px;\n    width: 300px;\n    height: 60px;\n}\n\n.content-img[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 60%;\n    height: 500px;\n    object-fit: cover;\n    border-radius: 0 40px 0 0;\n}\n\n.content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n    width: 35%;\n    \n\n    margin-right: 30px;\n}\n\n.content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:last-child {\n    width: 65%;\n    \n\n}\n\n@media screen and (max-width: 600px) {\n    .titulo[_ngcontent-%COMP%] {\n        font-size: 12px;\n    }\n\n    .description[_ngcontent-%COMP%] {\n        font-size: 10px;\n\n    }\n\n    .content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 60%;\n        height: 120px;\n        object-fit: cover;\n        border-radius: 0 20px 0 0;\n    }\n\n    .content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n        width: 35%;\n        \n\n        margin-right: 10px;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2NyZWVucy9kaWFnbm9zdGljLWltYWdpbmcvZGlhZ25vc3RpYy1pbWFnaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDhGQUE4RjtJQUM5RixpQkFBaUI7SUFDakIsZ0NBQWdDOztBQUVwQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksY0FBYzs7QUFFbEI7OztBQUdBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixvREFBb0Q7SUFDcEQsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG9EQUFvRDtBQUN4RDs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7O0lBRW5COztJQUVBO1FBQ0ksVUFBVTtRQUNWLGFBQWE7UUFDYixpQkFBaUI7UUFDakIseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLG9EQUFvRDtRQUNwRCxrQkFBa0I7SUFDdEI7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgICBmb250LWZhbWlseTogJ1J1YmlrIFJlZ3VsYXInLCBzYW5zLXNlcmlmXHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjE1LCAxMDcsIDAsIDAuMzE2KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDI1JSk7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xyXG5cclxufVxyXG5cclxuLmNvbnRlbnQtdGV4dCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG59XHJcblxyXG4udGl0dWxvIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4udGl0dWxvIHAge1xyXG4gICAgY29sb3I6ICM5MTk3NDc7XHJcblxyXG59XHJcblxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuXHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiBzdHJvbmcge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24gc3BhbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5jaGVjayB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMTVweDtcclxufVxyXG5cclxuLmJvdG9uZXMge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wc3ktYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMTAwcHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50LWltZyB7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250ZW50LWltZyBpbWcge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgNDBweCAwIDA7XHJcbn1cclxuXHJcbi5jb250ZW50LWltZyBpbWc6Zmlyc3QtY2hpbGQge1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIC8qIEVzdGFibGVjZXIgZWwgYW5jaG8gZGUgbGEgcHJpbWVyYSBpbWFnZW4gYWwgMzUlICovXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50LWltZyBpbWc6bGFzdC1jaGlsZCB7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgLyogRXN0YWJsZWNlciBlbCBhbmNobyBkZSBsYSBzZWd1bmRhIGltYWdlbiBhbCA2NSUgKi9cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC50aXR1bG8ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQtaW1nIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMjBweCAwIDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQtaW1nIGltZzpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgd2lkdGg6IDM1JTtcclxuICAgICAgICAvKiBFc3RhYmxlY2VyIGVsIGFuY2hvIGRlIGxhIHByaW1lcmEgaW1hZ2VuIGFsIDM1JSAqL1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 4612:
/*!************************************************************!*\
  !*** ./src/app/screens/our-center/our-center.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OurCenterComponent: () => (/* binding */ OurCenterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _title_card_title_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../title-card/title-card.component */ 6468);


class OurCenterComponent {
  static #_ = this.ɵfac = function OurCenterComponent_Factory(t) {
    return new (t || OurCenterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: OurCenterComponent,
    selectors: [["app-our-center"]],
    decls: 1,
    vars: 2,
    consts: [["title", "NUESTRO CENTRO", "subtitle", "Desde hace m\u00E1s de 40 a\u00F1os, el Centro Privado de Radioterapia brinda\n    tratamientos de \u00FAltima generaci\u00F3n para pacientes con c\u00E1ncer.", "imageUrl", "..\\assets\\images\\CPR_nuestro-centro.jpg", "color", "rgba(167, 160, 28, 0.799)", 3, "titleFontSize", "titleFontSizeScreen"]],
    template: function OurCenterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-title-card", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("titleFontSize", 40)("titleFontSizeScreen", 30);
      }
    },
    dependencies: [_title_card_title_card_component__WEBPACK_IMPORTED_MODULE_0__.TitleCardComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7008:
/*!***************************************************************************************************!*\
  !*** ./src/app/screens/psychology-screens/mindfulness-workshop/mindfulness-workshop.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MindfulnessWorkshopComponent: () => (/* binding */ MindfulnessWorkshopComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _title_card_title_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../title-card/title-card.component */ 6468);


class MindfulnessWorkshopComponent {
  static #_ = this.ɵfac = function MindfulnessWorkshopComponent_Factory(t) {
    return new (t || MindfulnessWorkshopComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MindfulnessWorkshopComponent,
    selectors: [["app-mindfulness-workshop"]],
    decls: 54,
    vars: 2,
    consts: [[1, "conteiner"], ["title", "TALLER DE MINDFULNESS", "imageUrl", "..\\assets\\images\\CPR_psicologia.jpg", "color", "rgba(167, 160, 28, 0.799)", 3, "titleFontSize", "titleFontSizeScreen"], [1, "content"], [1, "content-text"], [1, "titulo"], [1, "description"], [1, "flex", "align-items-center", "check"], [1, "pi", "pi-angle-right", 2, "color", "rgb(201, 221, 44)"], [2, "color", "rgb(123, 130, 14)"]],
    template: function MindfulnessWorkshopComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-title-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Dos veces a la semana, nuestro Centro ofrece el Taller de Mindfulness como parte del tratamiento de los pacientes, y lo hace extensivo a sus familiares.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "La pr\u00E1ctica del Mindfulness supone la generaci\u00F3n de una actitud de ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "no juzgar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, ", desarrollar la ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "paciencia, la aceptaci\u00F3n, la apertura y la no reactividad.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Esta actitud se puede desarrollar a trav\u00E9s de un entrenamiento sistem\u00E1tico en el que la principal herramienta es la meditaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Es una t\u00E9cnica de meditaci\u00F3n que busca entrenar la mente para centrar la atenci\u00F3n y redireccionar los pensamientos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Suele practicarse para reducir el estr\u00E9s, mejorar la concentraci\u00F3n o incrementar el bienestar emocional.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "El taller de Mindfulness para pacientes y familiares se realiza dos veces por semana, los ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "strong", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "martes y viernes a las 13 hs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "El ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "strong", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Lic. Juan Pablo Montanelli");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, ", psic\u00F3logo e instructor de Mindfulness, desarrolla ambas actividades en nuestro Centro.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Las pr\u00E1cticas tienen una duraci\u00F3n de ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "strong", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "30 minutos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Son GRATUITAS para ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "strong", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "pacientes y familiares del Centro.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "La ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "strong", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "constancia y compromiso");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " en la pr\u00E1ctica har\u00E1 que los resultados de bienestar sean visibles en poco tiempo y se prolonguen en el tiempo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("titleFontSize", 55)("titleFontSizeScreen", 30);
      }
    },
    dependencies: [_title_card_title_card_component__WEBPACK_IMPORTED_MODULE_0__.TitleCardComponent],
    styles: ["div[_ngcontent-%COMP%] {\n    font-family: 'Rubik Regular', sans-serif\n}\n\n.container[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n    background: linear-gradient(to bottom, rgba(158, 174, 38, 0.316), rgba(255, 255, 255, 0.5) 25%);\n    padding-top: 10px;\n    font-family: 'Rubik', sans-serif;\n\n}\n\n.content-text[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n}\n\n.titulo[_ngcontent-%COMP%] {\n    font-size: 28px;\n    font-family: 'Rubik', sans-serif;\n}\n\n.titulo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #585f12;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n    font-size: 28px;\n    font-family: 'Rubik', sans-serif;\n    margin-bottom: -20px;\n}\n\n.subtitle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #585f12;\n}\n\n.description[_ngcontent-%COMP%] {\n    font-size: 22px;\n}\n\n.description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-right: 10px;\n    margin-left: 60px;\n    font-weight: 900;\n    font-size: 1.5rem;\n}\n\n.check[_ngcontent-%COMP%] {\n    margin-bottom: -15px;\n}\n\n\n.description[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-weight: 800;\n}\n\n.content-img[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 60%;\n    height: 500px;\n    object-fit: cover;\n    border-radius: 0 40px 0 0;\n}\n\n.content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n    width: 35%;\n    \n\n    margin-right: 30px;\n}\n\n.content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:last-child {\n    width: 65%;\n    \n\n}\n\n@media screen and (max-width: 600px) {\n    .titulo[_ngcontent-%COMP%] {\n        font-size: 12px;\n    }\n\n    .description[_ngcontent-%COMP%] {\n        font-size: 10px;\n    }\n\n    .subtitle[_ngcontent-%COMP%] {\n        font-size: 12px;\n        margin-bottom: -10px;\n    }\n\n    .description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        margin-right: 7px;\n        font-size: 0.5rem;\n        margin-left: 20px;\n    }\n\n    .content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 60%;\n        height: 120px;\n        object-fit: cover;\n        border-radius: 0 20px 0 0;\n    }\n\n    .content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n        width: 35%;\n        \n\n        margin-right: 10px;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2NyZWVucy9wc3ljaG9sb2d5LXNjcmVlbnMvbWluZGZ1bG5lc3Mtd29ya3Nob3AvbWluZGZ1bG5lc3Mtd29ya3Nob3AuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksK0ZBQStGO0lBQy9GLGlCQUFpQjtJQUNqQixnQ0FBZ0M7O0FBRXBDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdDQUFnQztJQUNoQyxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7O0FBR0E7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixvREFBb0Q7SUFDcEQsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG9EQUFvRDtBQUN4RDs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO1FBQ2Ysb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsYUFBYTtRQUNiLGlCQUFpQjtRQUNqQix5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSxVQUFVO1FBQ1Ysb0RBQW9EO1FBQ3BELGtCQUFrQjtJQUN0QjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsgUmVndWxhcicsIHNhbnMtc2VyaWZcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgxNTgsIDE3NCwgMzgsIDAuMzE2KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDI1JSk7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xyXG5cclxufVxyXG5cclxuLmNvbnRlbnQtdGV4dCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG59XHJcblxyXG4udGl0dWxvIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4udGl0dWxvIHAge1xyXG4gICAgY29sb3I6ICM1ODVmMTI7XHJcbn1cclxuXHJcbi5zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi1ib3R0b206IC0yMHB4O1xyXG59XHJcblxyXG4uc3VidGl0bGUgcCB7XHJcbiAgICBjb2xvcjogIzU4NWYxMjtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHNwYW4ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5jaGVjayB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMTVweDtcclxufVxyXG5cclxuXHJcbi5kZXNjcmlwdGlvbiBzdHJvbmcge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4uY29udGVudC1pbWcge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGVudC1pbWcgaW1nIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDQwcHggMCAwO1xyXG59XHJcblxyXG4uY29udGVudC1pbWcgaW1nOmZpcnN0LWNoaWxkIHtcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICAvKiBFc3RhYmxlY2VyIGVsIGFuY2hvIGRlIGxhIHByaW1lcmEgaW1hZ2VuIGFsIDM1JSAqL1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uY29udGVudC1pbWcgaW1nOmxhc3QtY2hpbGQge1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIC8qIEVzdGFibGVjZXIgZWwgYW5jaG8gZGUgbGEgc2VndW5kYSBpbWFnZW4gYWwgNjUlICovXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAudGl0dWxvIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1YnRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRlc2NyaXB0aW9uIHNwYW4ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC41cmVtO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50LWltZyBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDIwcHggMCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50LWltZyBpbWc6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICAgICAgLyogRXN0YWJsZWNlciBlbCBhbmNobyBkZSBsYSBwcmltZXJhIGltYWdlbiBhbCAzNSUgKi9cclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 4800:
/*!*****************************************************************************************!*\
  !*** ./src/app/screens/psychology-screens/psycho-oncology/psycho-oncology.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PsychoOncologyComponent: () => (/* binding */ PsychoOncologyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ 9276);
/* harmony import */ var _title_card_title_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../title-card/title-card.component */ 6468);




class PsychoOncologyComponent {
  constructor(router) {
    this.router = router;
  }
  goToMindfulness() {
    this.router.navigate(['\mindfulness-workshop']);
  }
  goToWhatIsMindfulness() {
    this.router.navigate(['\what-is-mindfulness']);
  }
  static #_ = this.ɵfac = function PsychoOncologyComponent_Factory(t) {
    return new (t || PsychoOncologyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: PsychoOncologyComponent,
    selectors: [["app-psycho-oncology"]],
    decls: 29,
    vars: 4,
    consts: [[1, "conteiner"], ["title", "PSICO-ONCOLOG\u00CDA", "subtitle", "Para Pacientes y Familiares", "imageUrl", "..\\assets\\images\\CPR_psicologia.jpg", "color", "rgba(167, 160, 28, 0.799)", 3, "titleFontSize", "titleFontSizeScreen"], [1, "content"], [1, "content-text"], [1, "titulo"], [1, "description"], [1, "flex", "align-items-center", "check"], [1, "pi", "pi-angle-right", 2, "color", "rgb(201, 221, 44)"], [1, "flex", "botones"], ["label", "QU\u00C9 ES EL MINDFULNESS", 1, "flex", "felx-row", "psy-button", 3, "rounded", "click"], ["label", "TALLER DE MINDFULNESS", 1, "flex", "felx-row", "psy-button", 3, "rounded", "click"]],
    template: function PsychoOncologyComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-title-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Nuestro Centro ofrece atenci\u00F3n psicol\u00F3gica gratuita tanto para pacientes oncol\u00F3gicos del Centro como para familiares. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "La ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "estabilidad emocional y psicol\u00F3gica");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " como parte del proceso de cura, es sumamente importante y necesaria, para atravesar las distintas etapas del tratamiento.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "En nuestro Centro el paciente y sus familiares directos cuentan con atenci\u00F3n gratuita y realizan un ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "taller de Mindfulness");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, ", que complementa la atenci\u00F3n psicol\u00F3gica.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "El taller de Mindfulness para pacientes y familiares se realiza dos veces por semana, los martes y viernes a las 13 hs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "El Lic. Juan Pablo Montanelli, psic\u00F3logo e instructor de Mindfulness, desarrolla ambas actividades en nuestro Centro. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 8)(27, "p-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PsychoOncologyComponent_Template_p_button_click_27_listener() {
          return ctx.goToWhatIsMindfulness();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PsychoOncologyComponent_Template_p_button_click_28_listener() {
          return ctx.goToMindfulness();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("titleFontSize", 50)("titleFontSizeScreen", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rounded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rounded", true);
      }
    },
    dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_3__.Button, _title_card_title_card_component__WEBPACK_IMPORTED_MODULE_0__.TitleCardComponent],
    styles: ["div[_ngcontent-%COMP%] {\n    font-family: 'Rubik Regular', sans-serif\n}\n\n.container[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n    background: linear-gradient(to bottom, rgba(158, 174, 38, 0.316), rgba(255, 255, 255, 0.5) 25%);\n    padding-top: 10px;\n    font-family: 'Rubik', sans-serif;\n\n}\n\n.content-text[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n}\n\n.titulo[_ngcontent-%COMP%] {\n    font-size: 28px;\n    font-family: 'Rubik', sans-serif;\n}\n\n.titulo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #585f12;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n    font-size: 28px;\n    font-family: 'Rubik', sans-serif;\n    margin-bottom: -20px;\n}\n\n.subtitle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #585f12;\n}\n\n.description[_ngcontent-%COMP%] {\n    font-size: 22px;\n}\n\n.description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-right: 10px;\n    margin-left: 60px;\n    font-weight: 900;\n    font-size: 1.5rem;\n}\n\n.check[_ngcontent-%COMP%] {\n    margin-bottom: -15px;\n}\n\n\n.description[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-weight: 800;\n}\n\n.content-img[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 60%;\n    height: 500px;\n    object-fit: cover;\n    border-radius: 0 40px 0 0;\n}\n\n.content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n    width: 35%;\n    \n\n    margin-right: 30px;\n}\n\n.content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:last-child {\n    width: 65%;\n    \n\n}\n\n.botones[_ngcontent-%COMP%] {\n    justify-content: center;\n}\n\n.psy-button[_ngcontent-%COMP%] {\n    margin: 40px;\n    width: 300px;\n    height: 60px;\n}\n\n@media screen and (max-width: 600px) {\n    .titulo[_ngcontent-%COMP%] {\n        font-size: 12px;\n    }\n\n    .description[_ngcontent-%COMP%] {\n        font-size: 10px;\n    }\n\n    .subtitle[_ngcontent-%COMP%] {\n        font-size: 12px;\n        margin-bottom: -10px;\n    }\n\n    .description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        margin-right: 7px;\n        font-size: 0.5rem;\n        margin-left: 20px;\n    }\n\n    .content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 60%;\n        height: 120px;\n        object-fit: cover;\n        border-radius: 0 20px 0 0;\n    }\n\n    .content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n        width: 35%;\n        \n\n        margin-right: 10px;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2NyZWVucy9wc3ljaG9sb2d5LXNjcmVlbnMvcHN5Y2hvLW9uY29sb2d5L3BzeWNoby1vbmNvbG9neS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwrRkFBK0Y7SUFDL0YsaUJBQWlCO0lBQ2pCLGdDQUFnQzs7QUFFcEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0NBQWdDO0lBQ2hDLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOzs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG9EQUFvRDtJQUNwRCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysb0RBQW9EO0FBQ3hEOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLFVBQVU7UUFDVixhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLHlCQUF5QjtJQUM3Qjs7SUFFQTtRQUNJLFVBQVU7UUFDVixvREFBb0Q7UUFDcEQsa0JBQWtCO0lBQ3RCO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpayBSZWd1bGFyJywgc2Fucy1zZXJpZlxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDE1OCwgMTc0LCAzOCwgMC4zMTYpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMjUlKTtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XHJcblxyXG59XHJcblxyXG4uY29udGVudC10ZXh0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbn1cclxuXHJcbi50aXR1bG8ge1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi50aXR1bG8gcCB7XHJcbiAgICBjb2xvcjogIzU4NWYxMjtcclxufVxyXG5cclxuLnN1YnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XHJcbn1cclxuXHJcbi5zdWJ0aXRsZSBwIHtcclxuICAgIGNvbG9yOiAjNTg1ZjEyO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24gc3BhbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLmNoZWNrIHtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xNXB4O1xyXG59XHJcblxyXG5cclxuLmRlc2NyaXB0aW9uIHN0cm9uZyB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5jb250ZW50LWltZyB7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250ZW50LWltZyBpbWcge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgNDBweCAwIDA7XHJcbn1cclxuXHJcbi5jb250ZW50LWltZyBpbWc6Zmlyc3QtY2hpbGQge1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIC8qIEVzdGFibGVjZXIgZWwgYW5jaG8gZGUgbGEgcHJpbWVyYSBpbWFnZW4gYWwgMzUlICovXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50LWltZyBpbWc6bGFzdC1jaGlsZCB7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgLyogRXN0YWJsZWNlciBlbCBhbmNobyBkZSBsYSBzZWd1bmRhIGltYWdlbiBhbCA2NSUgKi9cclxufVxyXG5cclxuLmJvdG9uZXMge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wc3ktYnV0dG9uIHtcclxuICAgIG1hcmdpbjogNDBweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC50aXR1bG8ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc3VidGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGVzY3JpcHRpb24gc3BhbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjVyZW07XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQtaW1nIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMjBweCAwIDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQtaW1nIGltZzpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgd2lkdGg6IDM1JTtcclxuICAgICAgICAvKiBFc3RhYmxlY2VyIGVsIGFuY2hvIGRlIGxhIHByaW1lcmEgaW1hZ2VuIGFsIDM1JSAqL1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 1424:
/*!*******************************************************************************!*\
  !*** ./src/app/screens/psychology-screens/psychology/psychology.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PsychologyComponent: () => (/* binding */ PsychologyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ 9276);
/* harmony import */ var _title_card_title_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../title-card/title-card.component */ 6468);




class PsychologyComponent {
  constructor(router) {
    this.router = router;
  }
  goToPsychologyTurns() {
    this.router.navigate(['\shifts-psychology']);
  }
  static #_ = this.ɵfac = function PsychologyComponent_Factory(t) {
    return new (t || PsychologyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: PsychologyComponent,
    selectors: [["app-psychology"]],
    decls: 31,
    vars: 3,
    consts: [[1, "conteiner"], ["title", "PSICOLOG\u00CDA", "imageUrl", "..\\assets\\images\\CPR_psicologia.jpg", "color", "rgba(167, 160, 28, 0.799)", 3, "titleFontSize", "titleFontSizeScreen"], [1, "content"], [1, "content-text"], [1, "titulo"], [1, "description"], [1, "flex", "align-items-center", "check"], [1, "pi", "pi-angle-right", 2, "color", "rgb(201, 221, 44)"], [1, "flex", "botones"], ["label", "SACAR TURNO", 1, "flex", "felx-row", "psy-button", 3, "rounded", "click"]],
    template: function PsychologyComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-title-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "La atenci\u00F3n de Psicolog\u00EDa para pacientes privados en nuestro Centro, se realiza los lunes, martes, jueves y viernes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "La psicoterapia es un tratamiento de colaboraci\u00F3n basado en la relaci\u00F3n entre el consultante y el psic\u00F3logo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Como su base fundamental es el ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "di\u00E1logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, ", proporciona un ambiente de apoyo que le permite hablar abiertamente con alguien objetivo, neutral e imparcial.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "La psicolog\u00EDa trata de entender el comportamiento de las personas en diferentes situaciones. Por tanto, un especialista de la salud mental aplica evaluaciones que sirven para analizar c\u00F3mo piensan o se sienten las personas consigo mismas, sus familias, amistades o ambientes de trabajo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Hablar ayuda a sanar. Un espacio terap\u00E9utico es un \u00E1mbito absolutamente privado y confidencial. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Entre los trastornos o problemas m\u00E1s comunes que atienden en terapia se encuentran: trastornos del estado de \u00E1nimo, como la ansiedad y la depresi\u00F3n, timidez, fobias, conflictos personales directos o indirectos, miedos, traumas, adicciones o cualquier situaci\u00F3n adversa o dificultosa con la que la persona no est\u00E1 pudiendo lidiar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "El Lic. Juan Pablo Montanelli, psic\u00F3logo e instructor de Mindfulness, desarrolla ambas actividades en nuestro Centro.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 8)(30, "p-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PsychologyComponent_Template_p_button_click_30_listener() {
          return ctx.goToPsychologyTurns();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("titleFontSize", 60)("titleFontSizeScreen", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rounded", true);
      }
    },
    dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_3__.Button, _title_card_title_card_component__WEBPACK_IMPORTED_MODULE_0__.TitleCardComponent],
    styles: ["div[_ngcontent-%COMP%] {\n    font-family: 'Rubik Regular', sans-serif\n}\n\n.container[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n    background: linear-gradient(to bottom, rgba(158, 174, 38, 0.316), rgba(255, 255, 255, 0.5) 25%);\n    padding-top: 10px;\n    font-family: 'Rubik', sans-serif;\n\n}\n\n.content-text[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n}\n\n.titulo[_ngcontent-%COMP%] {\n    font-size: 28px;\n    font-family: 'Rubik', sans-serif;\n}\n\n.titulo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #585f12;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n    font-size: 28px;\n    font-family: 'Rubik', sans-serif;\n    margin-bottom: -20px;\n}\n\n.subtitle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #585f12;\n}\n\n.description[_ngcontent-%COMP%] {\n    font-size: 22px;\n}\n\n.description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-right: 10px;\n    margin-left: 60px;\n    font-weight: 900;\n    font-size: 1.5rem;\n}\n\n.check[_ngcontent-%COMP%] {\n    margin-bottom: -15px;\n}\n\n\n.description[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-weight: 800;\n}\n\n.content-img[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 60%;\n    height: 500px;\n    object-fit: cover;\n    border-radius: 0 40px 0 0;\n}\n\n.content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n    width: 35%;\n    \n\n    margin-right: 30px;\n}\n\n.content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:last-child {\n    width: 65%;\n    \n\n}\n\n.botones[_ngcontent-%COMP%] {\n    justify-content: center;\n}\n\n.psy-button[_ngcontent-%COMP%] {\n    margin: 100px;\n    width: 300px;\n    height: 60px;\n}\n\n@media screen and (max-width: 600px) {\n    .titulo[_ngcontent-%COMP%] {\n        font-size: 12px;\n    }\n\n    .description[_ngcontent-%COMP%] {\n        font-size: 10px;\n    }\n\n    .subtitle[_ngcontent-%COMP%] {\n        font-size: 12px;\n        margin-bottom: -10px;\n    }\n\n    .description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        margin-right: 7px;\n        font-size: 0.5rem;\n        margin-left: 20px;\n    }\n\n    .content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 60%;\n        height: 120px;\n        object-fit: cover;\n        border-radius: 0 20px 0 0;\n    }\n\n    .content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n        width: 35%;\n        \n\n        margin-right: 10px;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2NyZWVucy9wc3ljaG9sb2d5LXNjcmVlbnMvcHN5Y2hvbG9neS9wc3ljaG9sb2d5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLCtGQUErRjtJQUMvRixpQkFBaUI7SUFDakIsZ0NBQWdDOztBQUVwQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQ0FBZ0M7SUFDaEMsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7OztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysb0RBQW9EO0lBQ3BELGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixvREFBb0Q7QUFDeEQ7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtRQUNmLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLGFBQWE7UUFDYixpQkFBaUI7UUFDakIseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLG9EQUFvRDtRQUNwRCxrQkFBa0I7SUFDdEI7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgICBmb250LWZhbWlseTogJ1J1YmlrIFJlZ3VsYXInLCBzYW5zLXNlcmlmXHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMTU4LCAxNzQsIDM4LCAwLjMxNiksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAyNSUpO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcclxuXHJcbn1cclxuXHJcbi5jb250ZW50LXRleHQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxufVxyXG5cclxuLnRpdHVsbyB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnRpdHVsbyBwIHtcclxuICAgIGNvbG9yOiAjNTg1ZjEyO1xyXG59XHJcblxyXG4uc3VidGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMjBweDtcclxufVxyXG5cclxuLnN1YnRpdGxlIHAge1xyXG4gICAgY29sb3I6ICM1ODVmMTI7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiBzcGFuIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4uY2hlY2sge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTE1cHg7XHJcbn1cclxuXHJcblxyXG4uZGVzY3JpcHRpb24gc3Ryb25nIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLmNvbnRlbnQtaW1nIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRlbnQtaW1nIGltZyB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCA0MHB4IDAgMDtcclxufVxyXG5cclxuLmNvbnRlbnQtaW1nIGltZzpmaXJzdC1jaGlsZCB7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgLyogRXN0YWJsZWNlciBlbCBhbmNobyBkZSBsYSBwcmltZXJhIGltYWdlbiBhbCAzNSUgKi9cclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxufVxyXG5cclxuLmNvbnRlbnQtaW1nIGltZzpsYXN0LWNoaWxkIHtcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgICAvKiBFc3RhYmxlY2VyIGVsIGFuY2hvIGRlIGxhIHNlZ3VuZGEgaW1hZ2VuIGFsIDY1JSAqL1xyXG59XHJcblxyXG4uYm90b25lcyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnBzeS1idXR0b24ge1xyXG4gICAgbWFyZ2luOiAxMDBweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC50aXR1bG8ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc3VidGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGVzY3JpcHRpb24gc3BhbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjVyZW07XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQtaW1nIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMjBweCAwIDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQtaW1nIGltZzpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgd2lkdGg6IDM1JTtcclxuICAgICAgICAvKiBFc3RhYmxlY2VyIGVsIGFuY2hvIGRlIGxhIHByaW1lcmEgaW1hZ2VuIGFsIDM1JSAqL1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 47:
/*!*************************************************************************************************!*\
  !*** ./src/app/screens/psychology-screens/what-is-mindfulness/what-is-mindfulness.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WhatIsMindfulnessComponent: () => (/* binding */ WhatIsMindfulnessComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _title_card_title_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../title-card/title-card.component */ 6468);


class WhatIsMindfulnessComponent {
  static #_ = this.ɵfac = function WhatIsMindfulnessComponent_Factory(t) {
    return new (t || WhatIsMindfulnessComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: WhatIsMindfulnessComponent,
    selectors: [["app-what-is-mindfulness"]],
    decls: 36,
    vars: 2,
    consts: [[1, "conteiner", "mb-8"], ["title", "QU\u00C9 ES EL MINDFULNESS", "imageUrl", "..\\assets\\images\\CPR_mindfulness-popup.jpg", "color", "rgba(167, 160, 28, 0.799)", 3, "titleFontSize", "titleFontSizeScreen"], [1, "content"], [1, "content-text"], [1, "titulo"], [1, "description"]],
    template: function WhatIsMindfulnessComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-title-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Mindfulness puede definirse sencillamente como la capacidad de ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "prestar atenci\u00F3n de manera conciente a la experiencia del momento presente con inter\u00E9s, curiosidad y aceptaci\u00F3n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5)(10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Durante los \u00FAltimos 30 a\u00F1os, la pr\u00E1ctica de Mindfulness est\u00E1 integr\u00E1ndose a la medicina y psicolog\u00EDa de occidente.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Es aplicada y estudiada cient\u00EDf\u00EDcamente y por ello reconocida como una manera efectiva de ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "reducir el estr\u00E9s, aumentar la autoconciencia, reducir los s\u00EDntomas f\u00EDscos y psicol\u00F3gicos asociados al estr\u00E9s y mejora el bienestar general.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Jon Kabat-Zinn, profesor em\u00E9rito de medicina, fund\u00F3 la Cl\u00EDnica de Reducci\u00F3n de Estr\u00E9s en el Centro M\u00E9dico de la Universidad de Massachusetts. All\u00ED introdujo a los pacientes a la ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "pr\u00E1ctica de Mindfulness");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " para el ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "tratamiento de problemas f\u00EDsicos, y psicol\u00F3gicos, dolor cr\u00F3nico, y otros s\u00EDntomas asociados al estr\u00E9s.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "La atenci\u00F3n plena nos ayuda a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "recuperar nuestro equilibrio interno,");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " atendiendo de forma integral a los aspectos de la persona: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "cuerpo, mente y esp\u00EDritu.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Practicando la atenci\u00F3n plena desarrollamos una mayor capacidad de discernimiento y de compasi\u00F3n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Esta pr\u00E1ctica abre la puerta hacia nuevas posibilidades, nos trae al ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "aqu\u00ED y al ahora");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, ", nos invita a vivir una vida de manera plena y en el presente.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("titleFontSize", 50)("titleFontSizeScreen", 20);
      }
    },
    dependencies: [_title_card_title_card_component__WEBPACK_IMPORTED_MODULE_0__.TitleCardComponent],
    styles: ["div[_ngcontent-%COMP%] {\n    font-family: 'Rubik Regular', sans-serif\n}\n\n.container[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n    background: linear-gradient(to bottom, rgba(158, 174, 38, 0.316), rgba(255, 255, 255, 0.5) 25%);\n    padding-top: 10px;\n    font-family: 'Rubik', sans-serif;\n    background-color: #bfb839;\n    padding-bottom: 50px;\n\n}\n\n.content-text[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n}\n\n.titulo[_ngcontent-%COMP%] {\n    font-size: 28px;\n    font-family: 'Rubik', sans-serif;\n}\n\n.titulo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #585f12;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n    font-size: 28px;\n    font-family: 'Rubik', sans-serif;\n    margin-bottom: -20px;\n}\n\n.subtitle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #585f12;\n}\n\n.description[_ngcontent-%COMP%] {\n    font-size: 22px;\n}\n\n.description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-right: 10px;\n    margin-left: 60px;\n    font-weight: 900;\n    font-size: 1.5rem;\n}\n\n\n.description[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-weight: 600;\n}\n\n\n@media screen and (max-width: 600px) {\n    .titulo[_ngcontent-%COMP%] {\n        font-size: 12px;\n    }\n\n    .description[_ngcontent-%COMP%] {\n        font-size: 10px;\n    }\n\n    .subtitle[_ngcontent-%COMP%] {\n        font-size: 12px;\n        margin-bottom: -10px;\n    }\n\n    .description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        margin-right: 7px;\n        font-size: 0.5rem;\n        margin-left: 20px;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2NyZWVucy9wc3ljaG9sb2d5LXNjcmVlbnMvd2hhdC1pcy1taW5kZnVsbmVzcy93aGF0LWlzLW1pbmRmdWxuZXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLCtGQUErRjtJQUMvRixpQkFBaUI7SUFDakIsZ0NBQWdDO0lBQ2hDLHlCQUF5QjtJQUN6QixvQkFBb0I7O0FBRXhCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdDQUFnQztJQUNoQyxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7O0FBR0E7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOzs7QUFHQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO1FBQ2Ysb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixpQkFBaUI7SUFDckI7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgICBmb250LWZhbWlseTogJ1J1YmlrIFJlZ3VsYXInLCBzYW5zLXNlcmlmXHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMTU4LCAxNzQsIDM4LCAwLjMxNiksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAyNSUpO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZmI4Mzk7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuXHJcbn1cclxuXHJcbi5jb250ZW50LXRleHQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxufVxyXG5cclxuLnRpdHVsbyB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnRpdHVsbyBwIHtcclxuICAgIGNvbG9yOiAjNTg1ZjEyO1xyXG59XHJcblxyXG4uc3VidGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMjBweDtcclxufVxyXG5cclxuLnN1YnRpdGxlIHAge1xyXG4gICAgY29sb3I6ICM1ODVmMTI7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiBzcGFuIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG5cclxuLmRlc2NyaXB0aW9uIHN0cm9uZyB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLnRpdHVsbyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zdWJ0aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXNjcmlwdGlvbiBzcGFuIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICAgICAgICBmb250LXNpemU6IDAuNXJlbTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 224:
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/screens/radiotherapy-screens/brachytherapy/gynecological-hdr-brachytherapy/gynecological-hdr-brachytherapy.component.ts ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GynecologicalHDRBrachytherapyComponent: () => (/* binding */ GynecologicalHDRBrachytherapyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ 9276);
/* harmony import */ var _title_card_title_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../title-card/title-card.component */ 6468);




class GynecologicalHDRBrachytherapyComponent {
  constructor(router) {
    this.router = router;
  }
  goToBraquiIntersitial() {
    this.router.navigate(['\interstitial-gynecological-hdr-brachytherapy']);
  }
  goToBraquiIntracavitary() {
    this.router.navigate(['\intracavitary-gynecological-hdr-brachytherapy']);
  }
  static #_ = this.ɵfac = function GynecologicalHDRBrachytherapyComponent_Factory(t) {
    return new (t || GynecologicalHDRBrachytherapyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: GynecologicalHDRBrachytherapyComponent,
    selectors: [["app-gynecological-hdr-brachytherapy"]],
    decls: 40,
    vars: 5,
    consts: [["title", "BRAQUITERAPIA HDR GINECOL\u00D3GICA\n    INTRACAVITARIA / INSTERSTICIAL", "imageUrl", "..\\assets\\images\\CPR_braquiterapia.jpeg", "color", "rgba(97, 102, 61, 0.65)", 3, "titleFontSize", "titleFontSizeScreen", "titlePadding"], [1, "content"], [1, "content-text"], [1, "titulo"], [1, "description"], [1, "content-img"], ["src", "..\\assets\\images\\CPR_braqui-ginecologica.jpg"], ["src", "..\\assets\\images\\CPR_braqui-aparato-det.jpeg"], [1, "flex", "botones"], ["label", "BRAQUITERAPIA INTRACAVITARIA", 1, "flex", "felx-row", "bra-button", 3, "rounded", "click"], ["label", "BRAQUITERAPIA INTERSTICIAL", 1, "flex", "felx-row", "bra-button", 3, "rounded", "click"]],
    template: function GynecologicalHDRBrachytherapyComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-title-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Tratamiento seguro e indoloro, con un desarrollo m\u00E1s corto y confortable que otros m\u00E9todos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "La Braquiterapia forma parte de los protocolos de tratamiento de tumores ginecol\u00F3gicos y consiste en ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "irradiar selectivamente el tejido tumoral");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " mediante la inserci\u00F3n de fuentes radioactivas en el organismo que son controladas de forma ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "precisa y exacta");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " por un sistema rob\u00F3tico.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Las sesiones duran de ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "10 a 15 minutos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, ". Y se realiza de manera ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "ambulatoria");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Al ser un tratamiento indoloro, aumenta considerablemente la calidad de vida de la paciente.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 6)(27, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 2)(29, "div", 4)(30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "En funci\u00F3n al tipo de tumor a tratar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "-carcinoma de endometrio, de cervix, de vulva o vagina-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, ", se emplea la t\u00E9cnica m\u00E1s adecuada.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Estas t\u00E9cnicas pueden ser:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 8)(38, "p-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GynecologicalHDRBrachytherapyComponent_Template_p_button_click_38_listener() {
          return ctx.goToBraquiIntracavitary();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GynecologicalHDRBrachytherapyComponent_Template_p_button_click_39_listener() {
          return ctx.goToBraquiIntersitial();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("titleFontSize", 35)("titleFontSizeScreen", 15)("titlePadding", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rounded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rounded", true);
      }
    },
    dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_3__.Button, _title_card_title_card_component__WEBPACK_IMPORTED_MODULE_0__.TitleCardComponent],
    styles: ["div[_ngcontent-%COMP%] {\n    font-family: 'Rubik Regular', sans-serif\n}\n\n.container[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n    background: linear-gradient(to bottom, rgba(158, 174, 38, 0.316), rgba(255, 255, 255, 0.5) 25%);\n    padding-top: 10px;\n    font-family: 'Rubik', sans-serif;\n\n}\n\n.content-text[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n}\n\n.titulo[_ngcontent-%COMP%] {\n    font-size: 28px;\n    font-family: 'Rubik', sans-serif;\n}\n\n.titulo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #585f12;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n    font-size: 28px;\n    font-family: 'Rubik', sans-serif;\n    margin-bottom: -20px;\n}\n\n.subtitle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #585f12;\n}\n\n.description[_ngcontent-%COMP%] {\n    font-size: 22px;\n}\n\n.description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-right: 10px;\n    margin-left: 60px;\n    font-weight: 900;\n    font-size: 1.5rem;\n}\n\n.check[_ngcontent-%COMP%] {\n    margin-bottom: -15px;\n}\n\n\n.description[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-weight: 800;\n}\n\n.content-img[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 60%;\n    height: 500px;\n    object-fit: cover;\n    border-radius: 0 40px 0 0;\n}\n\n.content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n    width: 35%;\n    \n\n    margin-right: 30px;\n}\n\n.content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:last-child {\n    width: 65%;\n    \n\n}\n\n.botones[_ngcontent-%COMP%] {\n    justify-content: center;\n}\n\n\n.bra-button[_ngcontent-%COMP%] {\n    margin: 40px;\n    width: 250px;\n    height: 80px;\n}\n\n@media screen and (max-width: 600px) {\n    .titulo[_ngcontent-%COMP%] {\n        font-size: 12px;\n    }\n\n    .description[_ngcontent-%COMP%] {\n        font-size: 10px;\n    }\n\n    .subtitle[_ngcontent-%COMP%] {\n        font-size: 12px;\n        margin-bottom: -10px;\n    }\n\n    .description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        margin-right: 7px;\n        font-size: 0.5rem;\n        margin-left: 20px;\n    }\n\n    .content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 60%;\n        height: 120px;\n        object-fit: cover;\n        border-radius: 0 20px 0 0;\n    }\n\n    .content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n        width: 35%;\n        \n\n        margin-right: 10px;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2NyZWVucy9yYWRpb3RoZXJhcHktc2NyZWVucy9icmFjaHl0aGVyYXB5L2d5bmVjb2xvZ2ljYWwtaGRyLWJyYWNoeXRoZXJhcHkvZ3luZWNvbG9naWNhbC1oZHItYnJhY2h5dGhlcmFweS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwrRkFBK0Y7SUFDL0YsaUJBQWlCO0lBQ2pCLGdDQUFnQzs7QUFFcEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0NBQWdDO0lBQ2hDLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOzs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG9EQUFvRDtJQUNwRCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysb0RBQW9EO0FBQ3hEOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO1FBQ2Ysb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsYUFBYTtRQUNiLGlCQUFpQjtRQUNqQix5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSxVQUFVO1FBQ1Ysb0RBQW9EO1FBQ3BELGtCQUFrQjtJQUN0QjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsgUmVndWxhcicsIHNhbnMtc2VyaWZcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgxNTgsIDE3NCwgMzgsIDAuMzE2KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDI1JSk7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xyXG5cclxufVxyXG5cclxuLmNvbnRlbnQtdGV4dCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG59XHJcblxyXG4udGl0dWxvIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4udGl0dWxvIHAge1xyXG4gICAgY29sb3I6ICM1ODVmMTI7XHJcbn1cclxuXHJcbi5zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi1ib3R0b206IC0yMHB4O1xyXG59XHJcblxyXG4uc3VidGl0bGUgcCB7XHJcbiAgICBjb2xvcjogIzU4NWYxMjtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHNwYW4ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5jaGVjayB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMTVweDtcclxufVxyXG5cclxuXHJcbi5kZXNjcmlwdGlvbiBzdHJvbmcge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4uY29udGVudC1pbWcge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGVudC1pbWcgaW1nIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDQwcHggMCAwO1xyXG59XHJcblxyXG4uY29udGVudC1pbWcgaW1nOmZpcnN0LWNoaWxkIHtcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICAvKiBFc3RhYmxlY2VyIGVsIGFuY2hvIGRlIGxhIHByaW1lcmEgaW1hZ2VuIGFsIDM1JSAqL1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uY29udGVudC1pbWcgaW1nOmxhc3QtY2hpbGQge1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIC8qIEVzdGFibGVjZXIgZWwgYW5jaG8gZGUgbGEgc2VndW5kYSBpbWFnZW4gYWwgNjUlICovXHJcbn1cclxuXHJcbi5ib3RvbmVzIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmJyYS1idXR0b24ge1xyXG4gICAgbWFyZ2luOiA0MHB4O1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLnRpdHVsbyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zdWJ0aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXNjcmlwdGlvbiBzcGFuIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICAgICAgICBmb250LXNpemU6IDAuNXJlbTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudC1pbWcgaW1nIHtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAyMHB4IDAgMDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudC1pbWcgaW1nOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICB3aWR0aDogMzUlO1xyXG4gICAgICAgIC8qIEVzdGFibGVjZXIgZWwgYW5jaG8gZGUgbGEgcHJpbWVyYSBpbWFnZW4gYWwgMzUlICovXHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 656:
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/screens/radiotherapy-screens/brachytherapy/hdr-prostate-brachytherapy/hdr-prostate-brachytherapy.component.ts ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HDRProstateBrachytherapyComponent: () => (/* binding */ HDRProstateBrachytherapyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _title_card_title_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../title-card/title-card.component */ 6468);


class HDRProstateBrachytherapyComponent {
  static #_ = this.ɵfac = function HDRProstateBrachytherapyComponent_Factory(t) {
    return new (t || HDRProstateBrachytherapyComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: HDRProstateBrachytherapyComponent,
    selectors: [["app-hdr-prostate-brachytherapy"]],
    decls: 46,
    vars: 3,
    consts: [[1, "conteiner"], ["title", "BRAQUITERAPIA DE ALTA TASA DE DOSIS\n        - HDR - PARA C\u00C1NCER DE PR\u00D3STATA ", "imageUrl", "..\\assets\\images\\CPR_braquiterapia.jpeg", "color", "rgba(97, 102, 61, 0.65)", 3, "titleFontSize", "titleFontSizeScreen", "titlePadding"], [1, "content"], [1, "content-text"], [1, "titulo"], [1, "description"], [1, "content-img"], ["src", "..\\assets\\images\\CPR_braqui1.jpg"], ["src", "..\\assets\\images\\CPR_braqui2.jpeg"], [1, "subtitle"], [1, "flex", "align-items-center", "check"], [1, "pi", "pi-check", 2, "color", "rgba(97, 102, 61, 0.65)"], [1, "flex", "align-items-center", "check", "mb-6"]],
    template: function HDRProstateBrachytherapyComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-title-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Procedimiento corto, efectivo y con muy buena tolerancia.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Es una pr\u00E1ctica ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "innovadora");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " que consiste en aplicar una fuente de radiaci\u00F3n directamente en el tumor permitiendo aumentar la dosis en el objetivo y ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "conservar la integridad de los tejidos sanos y \u00F3rganos vecinos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p")(17, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Es un procedimiento ambulatorio que lleva entre 3 y 4 horas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Sus efectos secundarios son m\u00EDnimos y transitorios que se resuelven al cabo de unas semanas. .");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "img", 7)(22, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 3)(24, "div", 9)(25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "LA BRAQUITERAPIA HDR SE INDICA PARA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 5)(28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p")(31, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Pacientes de bajo riesgo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " como terapia \u00FAnica.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p")(37, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Pacientes de bajo riesgo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " como refuerzo o boost combinado con la radioterapia externa, luego de 3 semanas de tratamiento.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "p")(43, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Pacientes con reca\u00EDdas locales:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " como tratamiento indicado para este tipo de casos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("titleFontSize", 35)("titleFontSizeScreen", 15)("titlePadding", 42);
      }
    },
    dependencies: [_title_card_title_card_component__WEBPACK_IMPORTED_MODULE_0__.TitleCardComponent],
    styles: ["div[_ngcontent-%COMP%] {\n    font-family: 'Rubik Regular', sans-serif\n}\n\n.container[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n    background: linear-gradient(to bottom, rgba(158, 174, 38, 0.316), rgba(255, 255, 255, 0.5) 25%);\n    padding-top: 10px;\n    font-family: 'Rubik', sans-serif;\n\n}\n\n.content-text[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n}\n\n.titulo[_ngcontent-%COMP%] {\n    font-size: 28px;\n    font-family: 'Rubik', sans-serif;\n}\n\n.titulo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #919747;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n    margin-top: 50px;\n    font-size: 28px;\n    font-family: 'Rubik', sans-serif;\n}\n\n.subtitle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #919747;\n}\n\n.description[_ngcontent-%COMP%] {\n    font-size: 22px;\n}\n\n.description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-right: 10px;\n    font-weight: 900;\n    font-size: 1.5rem;\n}\n\n.check[_ngcontent-%COMP%] {\n    margin-bottom: -10px;\n}\n\n\n.description[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-weight: 800;\n}\n\n.content-img[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 60%;\n    height: 500px;\n    object-fit: cover;\n    border-radius: 0 40px 0 0;\n}\n\n.content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n    width: 35%;\n    \n\n    margin-right: 30px;\n}\n\n.content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:last-child {\n    width: 65%;\n    \n\n}\n\n@media screen and (max-width: 600px) {\n    .titulo[_ngcontent-%COMP%] {\n        font-size: 12px;\n    }\n\n    .description[_ngcontent-%COMP%] {\n        font-size: 10px;\n    }\n\n    .subtitle[_ngcontent-%COMP%] {\n        margin-top: 30px;\n        font-size: 12px;\n    }\n\n    .description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        margin-right: 7px;\n        font-size: 0.5rem;\n    }\n\n    .content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 60%;\n        height: 120px;\n        object-fit: cover;\n        border-radius: 0 20px 0 0;\n    }\n\n    .content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n        width: 35%;\n        \n\n        margin-right: 10px;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2NyZWVucy9yYWRpb3RoZXJhcHktc2NyZWVucy9icmFjaHl0aGVyYXB5L2hkci1wcm9zdGF0ZS1icmFjaHl0aGVyYXB5L2hkci1wcm9zdGF0ZS1icmFjaHl0aGVyYXB5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLCtGQUErRjtJQUMvRixpQkFBaUI7SUFDakIsZ0NBQWdDOztBQUVwQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7O0FBR0E7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixvREFBb0Q7SUFDcEQsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG9EQUFvRDtBQUN4RDs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsYUFBYTtRQUNiLGlCQUFpQjtRQUNqQix5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSxVQUFVO1FBQ1Ysb0RBQW9EO1FBQ3BELGtCQUFrQjtJQUN0QjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsgUmVndWxhcicsIHNhbnMtc2VyaWZcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgxNTgsIDE3NCwgMzgsIDAuMzE2KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDI1JSk7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xyXG5cclxufVxyXG5cclxuLmNvbnRlbnQtdGV4dCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG59XHJcblxyXG4udGl0dWxvIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4udGl0dWxvIHAge1xyXG4gICAgY29sb3I6ICM5MTk3NDc7XHJcbn1cclxuXHJcbi5zdWJ0aXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5zdWJ0aXRsZSBwIHtcclxuICAgIGNvbG9yOiAjOTE5NzQ3O1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24gc3BhbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5jaGVjayB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcclxufVxyXG5cclxuXHJcbi5kZXNjcmlwdGlvbiBzdHJvbmcge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4uY29udGVudC1pbWcge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGVudC1pbWcgaW1nIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDQwcHggMCAwO1xyXG59XHJcblxyXG4uY29udGVudC1pbWcgaW1nOmZpcnN0LWNoaWxkIHtcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICAvKiBFc3RhYmxlY2VyIGVsIGFuY2hvIGRlIGxhIHByaW1lcmEgaW1hZ2VuIGFsIDM1JSAqL1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uY29udGVudC1pbWcgaW1nOmxhc3QtY2hpbGQge1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIC8qIEVzdGFibGVjZXIgZWwgYW5jaG8gZGUgbGEgc2VndW5kYSBpbWFnZW4gYWwgNjUlICovXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAudGl0dWxvIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1YnRpdGxlIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGVzY3JpcHRpb24gc3BhbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQtaW1nIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMjBweCAwIDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQtaW1nIGltZzpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgd2lkdGg6IDM1JTtcclxuICAgICAgICAvKiBFc3RhYmxlY2VyIGVsIGFuY2hvIGRlIGxhIHByaW1lcmEgaW1hZ2VuIGFsIDM1JSAqL1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3800:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/screens/radiotherapy-screens/brachytherapy/hdr-skin-brachytherapy/hdr-skin-brachytherapy.component.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HDRSkinBrachytherapyComponent: () => (/* binding */ HDRSkinBrachytherapyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _title_card_title_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../title-card/title-card.component */ 6468);


class HDRSkinBrachytherapyComponent {
  static #_ = this.ɵfac = function HDRSkinBrachytherapyComponent_Factory(t) {
    return new (t || HDRSkinBrachytherapyComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: HDRSkinBrachytherapyComponent,
    selectors: [["app-hdr-skin-brachytherapy"]],
    decls: 32,
    vars: 3,
    consts: [["title", "BRAQUITERAPIA HDR DE PIEL", "imageUrl", "..\\assets\\images\\CPR_braquiterapia.jpeg", "color", "rgba(97, 102, 61, 0.65)", 3, "titleFontSize", "titleFontSizeScreen", "titlePadding"], [1, "content"], [1, "content-text"], [1, "titulo"], [1, "description"], [1, "content-img"], ["src", "..\\assets\\images\\CPR_cancer-piel.jpg"], ["src", "..\\assets\\images\\CPR_braqui-aparato-det.jpeg"]],
    template: function HDRSkinBrachytherapyComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-title-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Tratamiento ambulatorio que brinda excelentes resultados cosm\u00E9ticos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "El tratamiento se inicia con una ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "tomograf\u00EDa computada");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " del \u00E1rea de inter\u00E9s, y mediante un software se realiza una ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "planificaci\u00F3n tridimensional");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " entregando las dosis necesarias en el banco tumoral, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "minimizando los efectos adversos en los \u00F3rganos sanos circundantes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Luego se pone en contacto el tumor con una ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "fuente radiante");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " de alta energ\u00EDa. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Se puede hacer de contacto para ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "lesiones superficiales");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " o intersticial para ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "lesiones profundas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Cuenta con m\u00EDnimos o nulos efectos adversos y es administrable en pocas sesiones, entre 1 a 10. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "img", 6)(31, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("titleFontSize", 35)("titleFontSizeScreen", 15)("titlePadding", 42);
      }
    },
    dependencies: [_title_card_title_card_component__WEBPACK_IMPORTED_MODULE_0__.TitleCardComponent],
    styles: ["div[_ngcontent-%COMP%] {\n    font-family: 'Rubik Regular', sans-serif\n}\n\n.container[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n    background: linear-gradient(to bottom, rgba(158, 174, 38, 0.316), rgba(255, 255, 255, 0.5) 25%);\n    padding-top: 10px;\n    font-family: 'Rubik', sans-serif;\n\n}\n\n.content-text[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n}\n\n.titulo[_ngcontent-%COMP%] {\n    font-size: 28px;\n    font-family: 'Rubik', sans-serif;\n}\n\n.titulo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #919747;\n}\n\n.description[_ngcontent-%COMP%] {\n    font-size: 22px;\n}\n\n\n.description[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-weight: 800;\n}\n\n.content-img[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 100px;\n}\n\n.content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 60%;\n    height: 500px;\n    object-fit: cover;\n    border-radius: 0 40px 0 0;\n}\n\n.content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n    width: 35%;\n    \n\n    margin-right: 30px;\n}\n\n.content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:last-child {\n    width: 65%;\n    \n\n}\n\n@media screen and (max-width: 600px) {\n    .titulo[_ngcontent-%COMP%] {\n        font-size: 12px;\n    }\n\n    .description[_ngcontent-%COMP%] {\n        font-size: 10px;\n    }\n    \n    .content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 60%;\n        height: 120px;\n        object-fit: cover;\n        border-radius: 0 20px 0 0;\n    }\n\n    .content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n        width: 35%;\n        \n\n        margin-right: 10px;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2NyZWVucy9yYWRpb3RoZXJhcHktc2NyZWVucy9icmFjaHl0aGVyYXB5L2hkci1za2luLWJyYWNoeXRoZXJhcHkvaGRyLXNraW4tYnJhY2h5dGhlcmFweS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwrRkFBK0Y7SUFDL0YsaUJBQWlCO0lBQ2pCLGdDQUFnQzs7QUFFcEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixvREFBb0Q7SUFDcEQsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG9EQUFvRDtBQUN4RDs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsYUFBYTtRQUNiLGlCQUFpQjtRQUNqQix5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSxVQUFVO1FBQ1Ysb0RBQW9EO1FBQ3BELGtCQUFrQjtJQUN0QjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsgUmVndWxhcicsIHNhbnMtc2VyaWZcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgxNTgsIDE3NCwgMzgsIDAuMzE2KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDI1JSk7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xyXG5cclxufVxyXG5cclxuLmNvbnRlbnQtdGV4dCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG59XHJcblxyXG4udGl0dWxvIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4udGl0dWxvIHAge1xyXG4gICAgY29sb3I6ICM5MTk3NDc7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcblxyXG4uZGVzY3JpcHRpb24gc3Ryb25nIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLmNvbnRlbnQtaW1nIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG59XHJcblxyXG4uY29udGVudC1pbWcgaW1nIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDQwcHggMCAwO1xyXG59XHJcblxyXG4uY29udGVudC1pbWcgaW1nOmZpcnN0LWNoaWxkIHtcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICAvKiBFc3RhYmxlY2VyIGVsIGFuY2hvIGRlIGxhIHByaW1lcmEgaW1hZ2VuIGFsIDM1JSAqL1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uY29udGVudC1pbWcgaW1nOmxhc3QtY2hpbGQge1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIC8qIEVzdGFibGVjZXIgZWwgYW5jaG8gZGUgbGEgc2VndW5kYSBpbWFnZW4gYWwgNjUlICovXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAudGl0dWxvIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb250ZW50LWltZyBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDIwcHggMCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50LWltZyBpbWc6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICAgICAgLyogRXN0YWJsZWNlciBlbCBhbmNobyBkZSBsYSBwcmltZXJhIGltYWdlbiBhbCAzNSUgKi9cclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3704:
/*!*******************************************************************************************************************************************************************!*\
  !*** ./src/app/screens/radiotherapy-screens/brachytherapy/interstitial-gynecological-hdr-brachytherapy/interstitial-gynecological-hdr-brachytherapy.component.ts ***!
  \*******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InterstitialGynecologicalHDRBrachytherapyComponent: () => (/* binding */ InterstitialGynecologicalHDRBrachytherapyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ 9276);
/* harmony import */ var _title_card_title_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../title-card/title-card.component */ 6468);




class InterstitialGynecologicalHDRBrachytherapyComponent {
  constructor(router) {
    this.router = router;
  }
  goToBraquiIntracavitary() {
    this.router.navigate(['\intracavitary-gynecological-hdr-brachytherapy']);
  }
  static #_ = this.ɵfac = function InterstitialGynecologicalHDRBrachytherapyComponent_Factory(t) {
    return new (t || InterstitialGynecologicalHDRBrachytherapyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: InterstitialGynecologicalHDRBrachytherapyComponent,
    selectors: [["app-interstitial-gynecological-hdr-brachytherapy"]],
    decls: 37,
    vars: 4,
    consts: [["title", "BRAQUITERAPIA GINECOL\u00D3GICA INTERSTICIAL", "imageUrl", "..\\assets\\images\\CPR_braquiterapia.jpeg", "color", "rgba(97, 102, 61, 0.65)", 3, "titleFontSize", "titleFontSizeScreen", "titlePadding"], [1, "content"], [1, "content-text"], [1, "description"], [1, "content-img"], ["src", "..\\assets\\images\\CPR_CancerUtero2.jpeg"], ["src", "..\\assets\\images\\CPR_braqui-aparato-det.jpeg"], [1, "flex", "align-items-center", "check"], [1, "pi", "pi-angle-right", 2, "color", "rgb(97, 102, 61)"], [1, "mt-4"], [1, "flex", "botones"], ["label", "BRAQUITERAPIA INTRACAVITARIA", 1, "flex", "felx-row", "bra-button", 3, "rounded", "click"]],
    template: function InterstitialGynecologicalHDRBrachytherapyComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-title-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Consiste en colocar, bajo anestesia raqu\u00EDdea, una serie de cat\u00E9teres o tubos en la zona a irradiar (el lecho tumoral, o el propio tumor), a trav\u00E9s de los cuales la fuente radiactiva administra el tratamiento a esa zona y un margen pr\u00F3ximo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 5)(8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 2)(10, "div", 3)(11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Esta t\u00E9cnica se utiliza por varias razones:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div")(14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "El tumor es de gran tama\u00F1o.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "El tumor tiene una forma extra\u00F1a.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "El tumor afecta la parte inferior de la vagina.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "El tumor no se puede alcanzar con los aplicadores intracavitarios.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "La ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Braquiterapia Intersticial");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " es un tipo de Braquiterapia muy especializada y es espec\u00EDfica para las necesidades de cada paciente.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 10)(36, "p-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InterstitialGynecologicalHDRBrachytherapyComponent_Template_p_button_click_36_listener() {
          return ctx.goToBraquiIntracavitary();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("titleFontSize", 35)("titleFontSizeScreen", 15)("titlePadding", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rounded", true);
      }
    },
    dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_3__.Button, _title_card_title_card_component__WEBPACK_IMPORTED_MODULE_0__.TitleCardComponent],
    styles: ["div[_ngcontent-%COMP%] {\n    font-family: 'Rubik Regular', sans-serif;\n}\n\n.container[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n    background: linear-gradient(to bottom, rgba(158, 174, 38, 0.316), rgba(255, 255, 255, 0.5) 25%);\n    padding-top: 10px;\n    font-family: 'Rubik', sans-serif;\n\n}\n\n.content-text[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n}\n\n\n.description[_ngcontent-%COMP%] {\n    font-size: 22px;\n    color: black;\n}\n\n.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 22px;\n}\n\n.description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-right: 10px;\n    font-weight: 900;\n    font-size: 1.5rem;\n}\n\n.check[_ngcontent-%COMP%] {\n    margin-bottom: -25px;\n}\n\n.description[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-weight: 800;\n}\n\n.content-img[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 60%;\n    height: 500px;\n    object-fit: cover;\n    border-radius: 0 40px 0 0;\n}\n\n.content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n    width: 35%;\n    \n\n    margin-right: 30px;\n}\n\n.content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:last-child {\n    width: 65%;\n    \n\n}\n\n.botones[_ngcontent-%COMP%] {\n    justify-content: center;\n}\n\n\n.bra-button[_ngcontent-%COMP%] {\n    margin: 40px;\n    width: 250px;\n    height: 80px;\n}\n\n@media screen and (max-width: 600px) {\n\n    .description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n        font-size: 10px;\n    }\n\n    .description[_ngcontent-%COMP%] {\n        font-size: 10px;\n    }\n\n    .description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        margin-right: 5px;\n        margin-top:5px;\n        font-size: 0.6rem;\n    }\n\n    .check[_ngcontent-%COMP%] {\n        margin-bottom: -20px;\n    }\n    \n    \n    \n    .content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 60%;\n        height: 120px;\n        object-fit: cover;\n        border-radius: 0 20px 0 0;\n    }\n\n    .content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n        width: 35%;\n        \n\n        margin-right: 10px;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2NyZWVucy9yYWRpb3RoZXJhcHktc2NyZWVucy9icmFjaHl0aGVyYXB5L2ludGVyc3RpdGlhbC1neW5lY29sb2dpY2FsLWhkci1icmFjaHl0aGVyYXB5L2ludGVyc3RpdGlhbC1neW5lY29sb2dpY2FsLWhkci1icmFjaHl0aGVyYXB5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksK0ZBQStGO0lBQy9GLGlCQUFpQjtJQUNqQixnQ0FBZ0M7O0FBRXBDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG9EQUFvRDtJQUNwRCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysb0RBQW9EO0FBQ3hEOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTs7SUFFSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGNBQWM7UUFDZCxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxvQkFBb0I7SUFDeEI7Ozs7SUFJQTtRQUNJLFVBQVU7UUFDVixhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLHlCQUF5QjtJQUM3Qjs7SUFFQTtRQUNJLFVBQVU7UUFDVixvREFBb0Q7UUFDcEQsa0JBQWtCO0lBQ3RCO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpayBSZWd1bGFyJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgxNTgsIDE3NCwgMzgsIDAuMzE2KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDI1JSk7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xyXG5cclxufVxyXG5cclxuLmNvbnRlbnQtdGV4dCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG59XHJcblxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHAge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24gc3BhbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5jaGVjayB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMjVweDtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHN0cm9uZyB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5jb250ZW50LWltZyB7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250ZW50LWltZyBpbWcge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgNDBweCAwIDA7XHJcbn1cclxuXHJcbi5jb250ZW50LWltZyBpbWc6Zmlyc3QtY2hpbGQge1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIC8qIEVzdGFibGVjZXIgZWwgYW5jaG8gZGUgbGEgcHJpbWVyYSBpbWFnZW4gYWwgMzUlICovXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50LWltZyBpbWc6bGFzdC1jaGlsZCB7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgLyogRXN0YWJsZWNlciBlbCBhbmNobyBkZSBsYSBzZWd1bmRhIGltYWdlbiBhbCA2NSUgKi9cclxufVxyXG5cclxuLmJvdG9uZXMge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uYnJhLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDQwcHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcblxyXG4gICAgLmRlc2NyaXB0aW9uIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXNjcmlwdGlvbiBzcGFuIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICBtYXJnaW4tdG9wOjVweDtcclxuICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuY2hlY2sge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0yMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgLmNvbnRlbnQtaW1nIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMjBweCAwIDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQtaW1nIGltZzpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgd2lkdGg6IDM1JTtcclxuICAgICAgICAvKiBFc3RhYmxlY2VyIGVsIGFuY2hvIGRlIGxhIHByaW1lcmEgaW1hZ2VuIGFsIDM1JSAqL1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 4788:
/*!*********************************************************************************************************************************************************************!*\
  !*** ./src/app/screens/radiotherapy-screens/brachytherapy/intracavitary-gynecological-hdr-brachytherapy/intracavitary-gynecological-hdr-brachytherapy.component.ts ***!
  \*********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IntracavitaryGynecologicalHDRBrachytherapyComponent: () => (/* binding */ IntracavitaryGynecologicalHDRBrachytherapyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ 9276);
/* harmony import */ var _title_card_title_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../title-card/title-card.component */ 6468);




class IntracavitaryGynecologicalHDRBrachytherapyComponent {
  constructor(router) {
    this.router = router;
  }
  goToBraquiIntracavitary() {
    this.router.navigate(['\interstitial-gynecological-hdr-brachytherapy']);
  }
  static #_ = this.ɵfac = function IntracavitaryGynecologicalHDRBrachytherapyComponent_Factory(t) {
    return new (t || IntracavitaryGynecologicalHDRBrachytherapyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IntracavitaryGynecologicalHDRBrachytherapyComponent,
    selectors: [["app-intracavitary-gynecological-hdr-brachytherapy"]],
    decls: 18,
    vars: 4,
    consts: [["title", "BRAQUITERAPIA GINECOL\u00D3GICA INTRACAVITARIA", "imageUrl", "..\\assets\\images\\CPR_braquiterapia.jpeg", "color", "rgba(97, 102, 61, 0.65)", 3, "titleFontSize", "titleFontSizeScreen", "titlePadding"], [1, "content"], [1, "content-text"], [1, "description"], [1, "content-img"], ["src", "..\\assets\\images\\CPR_braqui-det1.jpeg"], ["src", "..\\assets\\images\\CPR_braqui-aparato-det.jpeg"], [1, "flex", "botones"], ["label", "BRAQUITERAPIA INTERSTICIAL", 1, "flex", "felx-row", "bra-button", 3, "rounded", "click"]],
    template: function IntracavitaryGynecologicalHDRBrachytherapyComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-title-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "En este tipo de intervenci\u00F3n la fuente radiactiva se introduce en unos dispositivos especiales (aplicadores, cat\u00E9teres), que se colocan en cavidades anat\u00F3micas para luego realizar la irradiaci\u00F3n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 5)(8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 2)(10, "div", 3)(11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "En la ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Braquiterapia Intracavitaria");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " se coloca un aplicador que contiene una sustancia radiactiva en la zona donde se encuentra el tumor, o de donde ha sido extirpado.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 7)(17, "p-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IntracavitaryGynecologicalHDRBrachytherapyComponent_Template_p_button_click_17_listener() {
          return ctx.goToBraquiIntracavitary();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("titleFontSize", 35)("titleFontSizeScreen", 15)("titlePadding", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rounded", true);
      }
    },
    dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_3__.Button, _title_card_title_card_component__WEBPACK_IMPORTED_MODULE_0__.TitleCardComponent],
    styles: ["div[_ngcontent-%COMP%] {\n    font-family: 'Rubik Regular', sans-serif;\n}\n\n.container[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n    background: linear-gradient(to bottom, rgba(158, 174, 38, 0.316), rgba(255, 255, 255, 0.5) 25%);\n    padding-top: 10px;\n    font-family: 'Rubik', sans-serif;\n\n}\n\n.content-text[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n}\n\n.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 22px;\n}\n\n.description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-right: 10px;\n    margin-top:5px;\n    font-size: 1.5rem;\n}\n\n.description[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-weight: 800;\n}\n\n.content-img[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 60%;\n    height: 500px;\n    object-fit: cover;\n    border-radius: 0 40px 0 0;\n}\n\n.content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n    width: 35%;\n    \n\n    margin-right: 30px;\n}\n\n.content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:last-child {\n    width: 65%;\n    \n\n}\n\n.botones[_ngcontent-%COMP%] {\n    justify-content: center;\n}\n\n\n.bra-button[_ngcontent-%COMP%] {\n    margin: 40px;\n    width: 250px;\n    height: 80px;\n}\n\n@media screen and (max-width: 600px) {\n\n    .description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n        font-size: 10px;\n    }\n\n    .content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 60%;\n        height: 120px;\n        object-fit: cover;\n        border-radius: 0 20px 0 0;\n    }\n\n    .content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n        width: 35%;\n        \n\n        margin-right: 10px;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2NyZWVucy9yYWRpb3RoZXJhcHktc2NyZWVucy9icmFjaHl0aGVyYXB5L2ludHJhY2F2aXRhcnktZ3luZWNvbG9naWNhbC1oZHItYnJhY2h5dGhlcmFweS9pbnRyYWNhdml0YXJ5LWd5bmVjb2xvZ2ljYWwtaGRyLWJyYWNoeXRoZXJhcHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwrRkFBK0Y7SUFDL0YsaUJBQWlCO0lBQ2pCLGdDQUFnQzs7QUFFcEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysb0RBQW9EO0lBQ3BELGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixvREFBb0Q7QUFDeEQ7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7OztBQUdBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFVBQVU7UUFDVixhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLHlCQUF5QjtJQUM3Qjs7SUFFQTtRQUNJLFVBQVU7UUFDVixvREFBb0Q7UUFDcEQsa0JBQWtCO0lBQ3RCO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpayBSZWd1bGFyJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgxNTgsIDE3NCwgMzgsIDAuMzE2KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDI1JSk7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xyXG5cclxufVxyXG5cclxuLmNvbnRlbnQtdGV4dCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24gcCB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiBzcGFuIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6NXB4O1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiBzdHJvbmcge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4uY29udGVudC1pbWcge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGVudC1pbWcgaW1nIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDQwcHggMCAwO1xyXG59XHJcblxyXG4uY29udGVudC1pbWcgaW1nOmZpcnN0LWNoaWxkIHtcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICAvKiBFc3RhYmxlY2VyIGVsIGFuY2hvIGRlIGxhIHByaW1lcmEgaW1hZ2VuIGFsIDM1JSAqL1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uY29udGVudC1pbWcgaW1nOmxhc3QtY2hpbGQge1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIC8qIEVzdGFibGVjZXIgZWwgYW5jaG8gZGUgbGEgc2VndW5kYSBpbWFnZW4gYWwgNjUlICovXHJcbn1cclxuXHJcbi5ib3RvbmVzIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmJyYS1idXR0b24ge1xyXG4gICAgbWFyZ2luOiA0MHB4O1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG5cclxuICAgIC5kZXNjcmlwdGlvbiBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudC1pbWcgaW1nIHtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAyMHB4IDAgMDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudC1pbWcgaW1nOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICB3aWR0aDogMzUlO1xyXG4gICAgICAgIC8qIEVzdGFibGVjZXIgZWwgYW5jaG8gZGUgbGEgcHJpbWVyYSBpbWFnZW4gYWwgMzUlICovXHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6524:
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/screens/radiotherapy-screens/hybridarc-volumetric-dynamic-therapy/hybridarc-volumetric-dynamic-therapy.component.ts ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HybridarcVolumetricDynamicTherapyComponent: () => (/* binding */ HybridarcVolumetricDynamicTherapyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _title_card_title_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../title-card/title-card.component */ 6468);


class HybridarcVolumetricDynamicTherapyComponent {
  static #_ = this.ɵfac = function HybridarcVolumetricDynamicTherapyComponent_Factory(t) {
    return new (t || HybridarcVolumetricDynamicTherapyComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: HybridarcVolumetricDynamicTherapyComponent,
    selectors: [["app-hybridarc-volumetric-dynamic-therapy"]],
    decls: 19,
    vars: 3,
    consts: [["title", "HYBRIDARC - TERAPIA DIN\u00C1MICA VOLUM\u00C9TRICA", "imageUrl", "..\\assets\\images\\CPR_tratamientoIGRT.jpg", "color", "rgba(97, 102, 61, 0.65)", 3, "titleFontSize", "titleFontSizeScreen", "titlePadding"], [1, "content"], [1, "content-text"], [1, "titulo"], [1, "description"], [1, "content-img"], ["src", "..\\assets\\images\\CPR_hybridarc.jpg"], ["src", "..\\assets\\images\\CPR_cirugia-esterotaxica.jpeg"]],
    template: function HybridarcVolumetricDynamicTherapyComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-title-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Tratamiento de vanguardia, eficaz y seguro, que permite la administraci\u00F3n de la radiaci\u00F3n de manera eficiente y adaptada a la anatom\u00EDa de la lesi\u00F3n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Como parte de la soluci\u00F3n de planificaci\u00F3n y tratamiento iPlan HybridArc\u00B0 proporciona la configuraci\u00F3n de dosis volum\u00E9trica rotacional, lo que ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "agiliza la planificaci\u00F3n de tratamientos tanto simples como complejos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Otorga un mayor confort en el procedimiento, aumenta la seguridad y la calidad en la administraci\u00F3n de dosis, y con esto la ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "protecci\u00F3n de los \u00F3rganos en riesgo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " mediante la optimizaci\u00F3n del arco din\u00E1mico.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 6)(18, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("titleFontSize", 35)("titleFontSizeScreen", 15)("titlePadding", 42);
      }
    },
    dependencies: [_title_card_title_card_component__WEBPACK_IMPORTED_MODULE_0__.TitleCardComponent],
    styles: ["div[_ngcontent-%COMP%] {\n    font-family: 'Rubik Regular', sans-serif\n}\n\n.container[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n    background: linear-gradient(to bottom, rgba(158, 174, 38, 0.316), rgba(255, 255, 255, 0.5) 25%);\n    padding-top: 10px;\n    font-family: 'Rubik', sans-serif;\n\n}\n\n.content-text[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n}\n\n.titulo[_ngcontent-%COMP%] {\n    font-size: 28px;\n    font-family: 'Rubik', sans-serif;\n}\n\n.titulo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #919747;\n}\n\n.description[_ngcontent-%COMP%] {\n    font-size: 22px;\n}\n\n\n.description[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-weight: 800;\n}\n\n.content-img[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 100px;\n}\n\n.content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 60%;\n    height: 500px;\n    object-fit: cover;\n    border-radius: 0 40px 0 0;\n}\n\n.content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n    width: 35%;\n    \n\n    margin-right: 30px;\n}\n\n.content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:last-child {\n    width: 65%;\n    \n\n}\n\n@media screen and (max-width: 600px) {\n    .titulo[_ngcontent-%COMP%] {\n        font-size: 12px;\n    }\n\n    .description[_ngcontent-%COMP%] {\n        font-size: 10px;\n    }\n    \n    .content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 60%;\n        height: 120px;\n        object-fit: cover;\n        border-radius: 0 20px 0 0;\n    }\n\n    .content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n        width: 35%;\n        \n\n        margin-right: 10px;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2NyZWVucy9yYWRpb3RoZXJhcHktc2NyZWVucy9oeWJyaWRhcmMtdm9sdW1ldHJpYy1keW5hbWljLXRoZXJhcHkvaHlicmlkYXJjLXZvbHVtZXRyaWMtZHluYW1pYy10aGVyYXB5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLCtGQUErRjtJQUMvRixpQkFBaUI7SUFDakIsZ0NBQWdDOztBQUVwQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG9EQUFvRDtJQUNwRCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysb0RBQW9EO0FBQ3hEOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFVBQVU7UUFDVixhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLHlCQUF5QjtJQUM3Qjs7SUFFQTtRQUNJLFVBQVU7UUFDVixvREFBb0Q7UUFDcEQsa0JBQWtCO0lBQ3RCO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpayBSZWd1bGFyJywgc2Fucy1zZXJpZlxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDE1OCwgMTc0LCAzOCwgMC4zMTYpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMjUlKTtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XHJcblxyXG59XHJcblxyXG4uY29udGVudC10ZXh0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbn1cclxuXHJcbi50aXR1bG8ge1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi50aXR1bG8gcCB7XHJcbiAgICBjb2xvcjogIzkxOTc0NztcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxuXHJcbi5kZXNjcmlwdGlvbiBzdHJvbmcge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4uY29udGVudC1pbWcge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50LWltZyBpbWcge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgNDBweCAwIDA7XHJcbn1cclxuXHJcbi5jb250ZW50LWltZyBpbWc6Zmlyc3QtY2hpbGQge1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIC8qIEVzdGFibGVjZXIgZWwgYW5jaG8gZGUgbGEgcHJpbWVyYSBpbWFnZW4gYWwgMzUlICovXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50LWltZyBpbWc6bGFzdC1jaGlsZCB7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgLyogRXN0YWJsZWNlciBlbCBhbmNobyBkZSBsYSBzZWd1bmRhIGltYWdlbiBhbCA2NSUgKi9cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC50aXR1bG8ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNvbnRlbnQtaW1nIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMjBweCAwIDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQtaW1nIGltZzpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgd2lkdGg6IDM1JTtcclxuICAgICAgICAvKiBFc3RhYmxlY2VyIGVsIGFuY2hvIGRlIGxhIHByaW1lcmEgaW1hZ2VuIGFsIDM1JSAqL1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 7200:
/*!*************************************************************************************************************************************************************!*\
  !*** ./src/app/screens/radiotherapy-screens/igrt-exactrac-brainlab-image-guided-radiotherapy/igrt-exactrac-brainlab-image-guided-radiotherapy.component.ts ***!
  \*************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IGRTExactracBrainlabImageGuidedRadiotherapyComponent: () => (/* binding */ IGRTExactracBrainlabImageGuidedRadiotherapyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _title_card_title_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../title-card/title-card.component */ 6468);


class IGRTExactracBrainlabImageGuidedRadiotherapyComponent {
  static #_ = this.ɵfac = function IGRTExactracBrainlabImageGuidedRadiotherapyComponent_Factory(t) {
    return new (t || IGRTExactracBrainlabImageGuidedRadiotherapyComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IGRTExactracBrainlabImageGuidedRadiotherapyComponent,
    selectors: [["app-igrt-exactrac-brainlab-image-guided-radiotherapy"]],
    decls: 24,
    vars: 3,
    consts: [["title", "IGRT EXACTRAC \u2013 BRAINLAB \u2013 RADIOTERAPIA GUIADA POR IM\u00C1GENES", "imageUrl", "..\\assets\\images\\CPR_tratamientoIGRT.jpg", "color", "rgba(97, 102, 61, 0.65)", 3, "titleFontSize", "titleFontSizeScreen", "titlePadding"], [1, "content"], [1, "content-text"], [1, "titulo"], [1, "description"], [1, "content-img"], ["src", "..\\assets\\images\\CPR_IGRT.jpeg"], ["src", "..\\assets\\images\\CPR_tratamiento1.jpg"]],
    template: function IGRTExactracBrainlabImageGuidedRadiotherapyComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-title-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "La IGRT es una t\u00E9cnica de tratamiento en la cual se utilizan im\u00E1genes de diagn\u00F3stico modernas para mejorar la precisi\u00F3n y la exactitud en la administraci\u00F3n de la radioterapia.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "ExacTrac es un sistema de revisi\u00F3n basado en rayos x e infrarrojos que permite ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "la posici\u00F3n del paciente en tiempo real y detectar movimientos intrafracci\u00F3n del tumor durante la aplicaci\u00F3n del tratamiento.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Durante la aplicaci\u00F3n se graba en forma digital la posici\u00F3n exacta del paciente verificando, de manera permanente, los movimientos involuntarios durante Ia administraci\u00F3n del mismo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Una vez detectado un error se interrumpe la irradiaci\u00F3n y se corrige autom\u00E1ticamente la posici\u00F3n del paciente para completar la fracci\u00F3n diaria. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 6)(17, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 2)(19, "div", 4)(20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "La planificaci\u00F3n se realiza a partir de im\u00E1genes en cuatro dimensiones, teniendo en cuenta el volumen y movimiento de los \u00F3rganos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Se emplea un software espec\u00EDfico para crear planes de tratamiento que dirigen con precisi\u00F3n varios haces de irradiaci\u00F3n de diferentes intensidades y desde \u00E1ngulos no coplanares, protegiendo el tejido sano circundante.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("titleFontSize", 35)("titleFontSizeScreen", 15)("titlePadding", 42);
      }
    },
    dependencies: [_title_card_title_card_component__WEBPACK_IMPORTED_MODULE_0__.TitleCardComponent],
    styles: ["div[_ngcontent-%COMP%] {\n    font-family: 'Rubik Regular', sans-serif;\n}\n\n.container[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n    background: linear-gradient(to bottom, rgba(158, 174, 38, 0.316), rgba(255, 255, 255, 0.5) 25%);\n    padding-top: 10px;\n    font-family: 'Rubik', sans-serif;\n\n}\n\n.content-text[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n}\n\n.titulo[_ngcontent-%COMP%] {\n    font-size: 28px;\n    font-family: 'Rubik', sans-serif;\n}\n\n.titulo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #919747;\n}\n\n\n.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 22px;\n}\n\n.description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-right: 10px;\n    margin-top:5px;\n    font-size: 1.5rem;\n}\n\n.description[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-weight: 800;\n}\n\n.content-img[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 60%;\n    height: 500px;\n    object-fit: cover;\n    border-radius: 0 40px 0 0;\n}\n\n.content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n    width: 35%;\n    \n\n    margin-right: 30px;\n}\n\n.content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:last-child {\n    width: 65%;\n    \n\n}\n\n@media screen and (max-width: 600px) {\n\n    .titulo[_ngcontent-%COMP%] {\n        font-size: 12px;\n    }\n\n\n    .description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n        font-size: 10px;\n    }\n\n    .content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 60%;\n        height: 120px;\n        object-fit: cover;\n        border-radius: 0 20px 0 0;\n    }\n\n    .content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n        width: 35%;\n        \n\n        margin-right: 10px;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2NyZWVucy9yYWRpb3RoZXJhcHktc2NyZWVucy9pZ3J0LWV4YWN0cmFjLWJyYWlubGFiLWltYWdlLWd1aWRlZC1yYWRpb3RoZXJhcHkvaWdydC1leGFjdHJhYy1icmFpbmxhYi1pbWFnZS1ndWlkZWQtcmFkaW90aGVyYXB5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksK0ZBQStGO0lBQy9GLGlCQUFpQjtJQUNqQixnQ0FBZ0M7O0FBRXBDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOzs7QUFHQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG9EQUFvRDtJQUNwRCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysb0RBQW9EO0FBQ3hEOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtJQUNuQjs7O0lBR0E7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksVUFBVTtRQUNWLGFBQWE7UUFDYixpQkFBaUI7UUFDakIseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLG9EQUFvRDtRQUNwRCxrQkFBa0I7SUFDdEI7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgICBmb250LWZhbWlseTogJ1J1YmlrIFJlZ3VsYXInLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDE1OCwgMTc0LCAzOCwgMC4zMTYpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMjUlKTtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XHJcblxyXG59XHJcblxyXG4uY29udGVudC10ZXh0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbn1cclxuXHJcbi50aXR1bG8ge1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi50aXR1bG8gcCB7XHJcbiAgICBjb2xvcjogIzkxOTc0NztcclxufVxyXG5cclxuXHJcbi5kZXNjcmlwdGlvbiBwIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHNwYW4ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDo1cHg7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHN0cm9uZyB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5jb250ZW50LWltZyB7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250ZW50LWltZyBpbWcge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgNDBweCAwIDA7XHJcbn1cclxuXHJcbi5jb250ZW50LWltZyBpbWc6Zmlyc3QtY2hpbGQge1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIC8qIEVzdGFibGVjZXIgZWwgYW5jaG8gZGUgbGEgcHJpbWVyYSBpbWFnZW4gYWwgMzUlICovXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50LWltZyBpbWc6bGFzdC1jaGlsZCB7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgLyogRXN0YWJsZWNlciBlbCBhbmNobyBkZSBsYSBzZWd1bmRhIGltYWdlbiBhbCA2NSUgKi9cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuXHJcbiAgICAudGl0dWxvIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5kZXNjcmlwdGlvbiBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudC1pbWcgaW1nIHtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAyMHB4IDAgMDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudC1pbWcgaW1nOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICB3aWR0aDogMzUlO1xyXG4gICAgICAgIC8qIEVzdGFibGVjZXIgZWwgYW5jaG8gZGUgbGEgcHJpbWVyYSBpbWFnZW4gYWwgMzUlICovXHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9343:
/*!*********************************************************************************************************************************************************************!*\
  !*** ./src/app/screens/radiotherapy-screens/imrt-intensity-modulated-radiotherapy-with-multileaf/imrt-intensity-modulated-radiotherapy-with-multileaf.component.ts ***!
  \*********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IMRTIntensityModulatedRadiotherapyWithMultileafComponent: () => (/* binding */ IMRTIntensityModulatedRadiotherapyWithMultileafComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _title_card_title_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../title-card/title-card.component */ 6468);


class IMRTIntensityModulatedRadiotherapyWithMultileafComponent {
  static #_ = this.ɵfac = function IMRTIntensityModulatedRadiotherapyWithMultileafComponent_Factory(t) {
    return new (t || IMRTIntensityModulatedRadiotherapyWithMultileafComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IMRTIntensityModulatedRadiotherapyWithMultileafComponent,
    selectors: [["app-imrt-intensity-modulated-radiotherapy-with-multileaf"]],
    decls: 21,
    vars: 3,
    consts: [["title", "IMRT \u2013 RADIOTERAPIA DE INTENSIDAD MODULADA CON MULTIL\u00C1MINAS", "imageUrl", "..\\assets\\images\\CPR_tratamientoIGRT.jpg", "color", "rgba(97, 102, 61, 0.65)", 3, "titleFontSize", "titleFontSizeScreen", "titlePadding"], [1, "content"], [1, "content-text"], [1, "titulo"], [1, "description"], [1, "content-img"], ["src", "..\\assets\\images\\CPR_tratamiento4.jpg"], ["src", "..\\assets\\images\\CPR_tratamiento5.png"]],
    template: function IMRTIntensityModulatedRadiotherapyWithMultileafComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-title-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Tratamiento ambulatorio, no doloroso que logra un grado de control y precisi\u00F3n imposible de obtener con otras t\u00E9cnicas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "p")(8, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Es una de las t\u00E9cnicas m\u00E1s avanzadas en tratamientos de radioterapia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " contra el c\u00E1ncer que brinda la posibilidad de irradiar con precisi\u00F3n y en altas dosis el blanco tumoral y minimizar los efectos adversos en los tejidos sanos, gracias a la modulaci\u00F3n del mapa de intensidad de cada haz utilizado.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Tiene amplia aplicaci\u00F3n en la mayor\u00EDa de los tumores y ha demostrado m\u00EDnima toxicidad aguda haciendo posible el escalamiento de dosis en el tumor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "La IMRT con Colimador Multil\u00E1minas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "brinda flexibilidad en el dise\u00F1o del tratamiento y adaptaci\u00F3n continua a los requerimientos particulares de cada paciente");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, ", permitiendo conformar los campos de radiaci\u00F3n y modular la intensidad de los haces mediante la utilizaci\u00F3n de las multil\u00E1minas de un colimador especial que produce una secuencia de haces de peque\u00F1o tama\u00F1o que, sumados en conjunto, dan como resultado el mapa de intensidad requerido por el sistema de planificaci\u00F3n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 6)(20, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("titleFontSize", 35)("titleFontSizeScreen", 15)("titlePadding", 42);
      }
    },
    dependencies: [_title_card_title_card_component__WEBPACK_IMPORTED_MODULE_0__.TitleCardComponent],
    styles: ["div[_ngcontent-%COMP%] {\n    font-family: 'Rubik Regular', sans-serif\n}\n\n.container[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n    background: linear-gradient(to bottom, rgba(158, 174, 38, 0.316), rgba(255, 255, 255, 0.5) 25%);\n    padding-top: 10px;\n    font-family: 'Rubik', sans-serif;\n\n}\n\n.content-text[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n}\n\n.titulo[_ngcontent-%COMP%] {\n    font-size: 28px;\n    font-family: 'Rubik', sans-serif;\n}\n\n.titulo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #919747;\n}\n\n.description[_ngcontent-%COMP%] {\n    font-size: 22px;\n}\n\n\n.description[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-weight: 800;\n}\n\n.content-img[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 100px;\n}\n\n.content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 60%;\n    height: 500px;\n    object-fit: cover;\n    border-radius: 0 40px 0 0;\n}\n\n.content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n    width: 35%;\n    \n\n    margin-right: 30px;\n}\n\n.content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:last-child {\n    width: 65%;\n    \n\n}\n\n@media screen and (max-width: 600px) {\n    .titulo[_ngcontent-%COMP%] {\n        font-size: 12px;\n    }\n\n    .description[_ngcontent-%COMP%] {\n        font-size: 10px;\n    }\n    \n    .content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 60%;\n        height: 120px;\n        object-fit: cover;\n        border-radius: 0 20px 0 0;\n    }\n\n    .content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n        width: 35%;\n        \n\n        margin-right: 10px;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2NyZWVucy9yYWRpb3RoZXJhcHktc2NyZWVucy9pbXJ0LWludGVuc2l0eS1tb2R1bGF0ZWQtcmFkaW90aGVyYXB5LXdpdGgtbXVsdGlsZWFmL2ltcnQtaW50ZW5zaXR5LW1vZHVsYXRlZC1yYWRpb3RoZXJhcHktd2l0aC1tdWx0aWxlYWYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksK0ZBQStGO0lBQy9GLGlCQUFpQjtJQUNqQixnQ0FBZ0M7O0FBRXBDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBR0E7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysb0RBQW9EO0lBQ3BELGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixvREFBb0Q7QUFDeEQ7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksVUFBVTtRQUNWLGFBQWE7UUFDYixpQkFBaUI7UUFDakIseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLG9EQUFvRDtRQUNwRCxrQkFBa0I7SUFDdEI7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgICBmb250LWZhbWlseTogJ1J1YmlrIFJlZ3VsYXInLCBzYW5zLXNlcmlmXHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMTU4LCAxNzQsIDM4LCAwLjMxNiksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAyNSUpO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcclxuXHJcbn1cclxuXHJcbi5jb250ZW50LXRleHQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxufVxyXG5cclxuLnRpdHVsbyB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnRpdHVsbyBwIHtcclxuICAgIGNvbG9yOiAjOTE5NzQ3O1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG5cclxuLmRlc2NyaXB0aW9uIHN0cm9uZyB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5jb250ZW50LWltZyB7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxufVxyXG5cclxuLmNvbnRlbnQtaW1nIGltZyB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCA0MHB4IDAgMDtcclxufVxyXG5cclxuLmNvbnRlbnQtaW1nIGltZzpmaXJzdC1jaGlsZCB7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgLyogRXN0YWJsZWNlciBlbCBhbmNobyBkZSBsYSBwcmltZXJhIGltYWdlbiBhbCAzNSUgKi9cclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxufVxyXG5cclxuLmNvbnRlbnQtaW1nIGltZzpsYXN0LWNoaWxkIHtcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgICAvKiBFc3RhYmxlY2VyIGVsIGFuY2hvIGRlIGxhIHNlZ3VuZGEgaW1hZ2VuIGFsIDY1JSAqL1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLnRpdHVsbyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY29udGVudC1pbWcgaW1nIHtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAyMHB4IDAgMDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudC1pbWcgaW1nOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICB3aWR0aDogMzUlO1xyXG4gICAgICAgIC8qIEVzdGFibGVjZXIgZWwgYW5jaG8gZGUgbGEgcHJpbWVyYSBpbWFnZW4gYWwgMzUlICovXHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3379:
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/screens/radiotherapy-screens/r3-d-three-dimensional-conformal-radiotherapy/r3-d-three-dimensional-conformal-radiotherapy.component.ts ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R3DThreeDimensionalConformalRadiotherapyComponent: () => (/* binding */ R3DThreeDimensionalConformalRadiotherapyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _title_card_title_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../title-card/title-card.component */ 6468);


class R3DThreeDimensionalConformalRadiotherapyComponent {
  static #_ = this.ɵfac = function R3DThreeDimensionalConformalRadiotherapyComponent_Factory(t) {
    return new (t || R3DThreeDimensionalConformalRadiotherapyComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: R3DThreeDimensionalConformalRadiotherapyComponent,
    selectors: [["app-r3-d-three-dimensional-conformal-radiotherapy"]],
    decls: 27,
    vars: 3,
    consts: [["title", "R3D \u2013 RADIOTERAPIA TRIDIMENSIONAL CONFORMADA", "imageUrl", "..\\assets\\images\\CPR_tratamiento2.jpg", "color", "rgba(97, 102, 61, 0.65)", 3, "titleFontSize", "titleFontSizeScreen", "titlePadding"], [1, "content"], [1, "content-text"], [1, "titulo"], [1, "description"], [1, "content-img"], ["src", "..\\assets\\images\\CPR_tomografia.jpeg"], ["src", "..\\assets\\images\\CPR_tratamiento6.jpg"]],
    template: function R3DThreeDimensionalConformalRadiotherapyComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-title-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Es una t\u00E9cnica de tratamiento en la que se realiza una planificaci\u00F3n virtual en tres dimensiones. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Esto se logra gracias a la utilizaci\u00F3n conjunta de un ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "acelerador lineal,");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " un ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "software especializado");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " para la planificaci\u00F3n de tratamientos y las ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "modernas t\u00E9cnicas de im\u00E1genes (TAC, RMN y PET).");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Estas im\u00E1genes pueden ser reconstruidas en el sistema de planificaci\u00F3n, determinando con exactitud el volumen de la lesi\u00F3n a tratar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Se reproduce una imagen exacta del tumor y de los \u00F3rganos vecinos, de modo que la radiaci\u00F3n conforme el contorno exacto del \u00E1rea de tratamiento, logrando envolver la zona a tratar y disminuyendo al m\u00EDnimo la radiaci\u00F3n en los tejidos sanos perif\u00E9ricos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "De esta manera, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "se disminuye la toxicidad producida por el tratamiento.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "img", 6)(26, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("titleFontSize", 35)("titleFontSizeScreen", 15)("titlePadding", 40);
      }
    },
    dependencies: [_title_card_title_card_component__WEBPACK_IMPORTED_MODULE_0__.TitleCardComponent],
    styles: ["div[_ngcontent-%COMP%] {\n    font-family: 'Rubik Regular', sans-serif\n}\n\n.container[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n    background: linear-gradient(to bottom, rgba(158, 174, 38, 0.316), rgba(255, 255, 255, 0.5) 25%);\n    padding-top: 10px;\n    font-family: 'Rubik', sans-serif;\n\n}\n\n.content-text[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n}\n\n.titulo[_ngcontent-%COMP%] {\n    font-size: 28px;\n    font-family: 'Rubik', sans-serif;\n}\n\n.titulo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #919747;\n}\n\n.description[_ngcontent-%COMP%] {\n    font-size: 22px;\n}\n\n\n.description[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-weight: 800;\n}\n\n.content-img[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 100px;\n}\n\n.content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 60%;\n    height: 500px;\n    object-fit: cover;\n    border-radius: 0 40px 0 0;\n}\n\n.content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n    width: 35%;\n    \n\n    margin-right: 30px;\n}\n\n.content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:last-child {\n    width: 65%;\n    \n\n}\n\n@media screen and (max-width: 600px) {\n    .titulo[_ngcontent-%COMP%] {\n        font-size: 12px;\n    }\n\n    .description[_ngcontent-%COMP%] {\n        font-size: 10px;\n    }\n    \n    .content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 60%;\n        height: 120px;\n        object-fit: cover;\n        border-radius: 0 20px 0 0;\n    }\n\n    .content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n        width: 35%;\n        \n\n        margin-right: 10px;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2NyZWVucy9yYWRpb3RoZXJhcHktc2NyZWVucy9yMy1kLXRocmVlLWRpbWVuc2lvbmFsLWNvbmZvcm1hbC1yYWRpb3RoZXJhcHkvcjMtZC10aHJlZS1kaW1lbnNpb25hbC1jb25mb3JtYWwtcmFkaW90aGVyYXB5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLCtGQUErRjtJQUMvRixpQkFBaUI7SUFDakIsZ0NBQWdDOztBQUVwQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG9EQUFvRDtJQUNwRCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysb0RBQW9EO0FBQ3hEOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFVBQVU7UUFDVixhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLHlCQUF5QjtJQUM3Qjs7SUFFQTtRQUNJLFVBQVU7UUFDVixvREFBb0Q7UUFDcEQsa0JBQWtCO0lBQ3RCO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpayBSZWd1bGFyJywgc2Fucy1zZXJpZlxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDE1OCwgMTc0LCAzOCwgMC4zMTYpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMjUlKTtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XHJcblxyXG59XHJcblxyXG4uY29udGVudC10ZXh0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbn1cclxuXHJcbi50aXR1bG8ge1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi50aXR1bG8gcCB7XHJcbiAgICBjb2xvcjogIzkxOTc0NztcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxuXHJcbi5kZXNjcmlwdGlvbiBzdHJvbmcge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4uY29udGVudC1pbWcge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50LWltZyBpbWcge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgNDBweCAwIDA7XHJcbn1cclxuXHJcbi5jb250ZW50LWltZyBpbWc6Zmlyc3QtY2hpbGQge1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIC8qIEVzdGFibGVjZXIgZWwgYW5jaG8gZGUgbGEgcHJpbWVyYSBpbWFnZW4gYWwgMzUlICovXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50LWltZyBpbWc6bGFzdC1jaGlsZCB7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgLyogRXN0YWJsZWNlciBlbCBhbmNobyBkZSBsYSBzZWd1bmRhIGltYWdlbiBhbCA2NSUgKi9cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC50aXR1bG8ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNvbnRlbnQtaW1nIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMjBweCAwIDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQtaW1nIGltZzpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgd2lkdGg6IDM1JTtcclxuICAgICAgICAvKiBFc3RhYmxlY2VyIGVsIGFuY2hvIGRlIGxhIHByaW1lcmEgaW1hZ2VuIGFsIDM1JSAqL1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 7672:
/*!*************************************************************************************!*\
  !*** ./src/app/screens/radiotherapy-screens/radiotherapy/radiotherapy.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RadiotherapyComponent: () => (/* binding */ RadiotherapyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _title_card_title_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../title-card/title-card.component */ 6468);



class RadiotherapyComponent {
  static #_ = this.ɵfac = function RadiotherapyComponent_Factory(t) {
    return new (t || RadiotherapyComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: RadiotherapyComponent,
    selectors: [["app-radiotherapy"]],
    decls: 48,
    vars: 2,
    consts: [["title", "RADIOTERAPIA", "imageUrl", "..\\assets\\images\\CPR_radioterapia.jpg", "subtitle", "Nuestro Centro ofrece tratamientos para diversos tipos de patolog\u00EDas oncol\u00F3gicas\n        con equipamiento y profesionales interdisciplinarios de excelencia, que est\u00E1n\n        siempre a disposici\u00F3n para brindar el mejor proceso de cura al paciente.", "color", "rgba(97, 102, 61, 0.65)", 3, "titleFontSize", "titleFontSizeScreen"], [1, "content"], [1, "content-text"], [1, "titulo"], [1, "description"], [1, "block", "flex", "flex-row"], ["src", "..\\assets\\images\\isologo.png"], ["routerLink", "/hdr-prostate-brachytherapy"], ["routerLink", "/intracavitary-gynecological-hdr-brachytherapy"], ["routerLink", "/interstitial-gynecological-hdr-brachytherapy"], ["routerLink", "/hdr-skin-brachytherapy"], ["routerLink", "/igrt-exactrac-brainlab-image-guided-radiotherapy"], ["routerLink", "/sbrt-exactrac-body-stereotaxic-radiosurgery"], ["routerLink", "/srs-exactrac-cranial-stereotaxic-radiosurgery"], ["routerLink", "/hybridarc-volumetric-dynamic-therapy"], ["routerLink", "/imrt-intensity-modulated-radiotherapy-with-multileaf"], ["routerLink", "/r3-d-three-dimensional-conformal-radiotherapy"]],
    template: function RadiotherapyComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-title-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Estos son los tratamientos de Radioterapia que se realizan en nuestro Centro.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4)(8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Braquiterapia HDR de Pr\u00F3stata");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Braquiterapia HDR Ginecol\u00F3gica Intracavitaria");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Braquiterapia HDR Ginecol\u00F3gica Intersticial");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Braquiterapia HDR de Piel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "IGRT Exactrac \u2013 Brainlab \u2013 Radioterapia Guiada por Im\u00E1genes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "SBRT Exactrac \u2013Radiocirug\u00EDa Estereot\u00E1xica Corporal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "SRS Exactrac \u2013 Radiocirug\u00EDa Estereot\u00E1xica Craneal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Hybridarc Terapia Din\u00E1mica Volum\u00E9trica");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "IMRT \u2013 Radioterapia de Intensidad Modulada con Multil\u00E1minas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "R3D \u2013 Radioterapia Tridimensional Conformada");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("titleFontSize", 50)("titleFontSizeScreen", 20);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _title_card_title_card_component__WEBPACK_IMPORTED_MODULE_0__.TitleCardComponent],
    styles: [".content[_ngcontent-%COMP%] {\n    background: linear-gradient(to bottom, rgba(158, 174, 38, 0.502), rgba(255, 255, 255, 0.5) 15%);\n    padding-top: 50px;\n    font-family: 'Rubik', sans-serif;\n}\n\n.content-text[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n}\n\n.titulo[_ngcontent-%COMP%] {\n    font-size: 28px;\n    font-family: 'Rubik', sans-serif;\n    margin-bottom: 30px;\n}\n\n.titulo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #919747;\n}\n\n.description[_ngcontent-%COMP%] {\n    font-size: 22px;\n    font-weight: 800;\n}\n\n\n.block[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    margin-bottom: 30px;\n    \n}\n\n.block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 30px; \n    height: 30px; \n    margin-right: 30px;\n}\n\n.block[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin: 0; \n\n    color: rgba(0, 0, 0, 0.773); \n\n    text-decoration: none; \n\n}\n\n@media screen and (max-width: 600px) {\n\n    .content[_ngcontent-%COMP%] {\n        background: linear-gradient(to bottom, rgba(158, 174, 38, 0.365), rgba(255, 255, 255, 0.7) 5%);\n        padding-top: 20px;\n    }\n\n    .titulo[_ngcontent-%COMP%] {\n        font-size: 12px;\n        margin-bottom: 20px;\n    }\n\n    .description[_ngcontent-%COMP%] {\n        font-size: 10px;\n    }\n\n    .block[_ngcontent-%COMP%] {\n        font-size: 9px;\n        display: flex;\n        margin-bottom: 10px;\n    }\n    \n    .block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n        width: 10px; \n        height: 10px; \n        margin-right: 10px;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2NyZWVucy9yYWRpb3RoZXJhcHktc2NyZWVucy9yYWRpb3RoZXJhcHkvcmFkaW90aGVyYXB5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwrRkFBK0Y7SUFDL0YsaUJBQWlCO0lBQ2pCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksU0FBUyxFQUFFLDREQUE0RDtJQUN2RSwyQkFBMkIsRUFBRSxxQ0FBcUM7SUFDbEUscUJBQXFCLEVBQUUsd0JBQXdCO0FBQ25EOztBQUVBOztJQUVJO1FBQ0ksOEZBQThGO1FBQzlGLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksY0FBYztRQUNkLGFBQWE7UUFDYixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQjtJQUN0QjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgxNTgsIDE3NCwgMzgsIDAuNTAyKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDE1JSk7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uY29udGVudC10ZXh0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbn1cclxuXHJcbi50aXR1bG8ge1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4udGl0dWxvIHAge1xyXG4gICAgY29sb3I6ICM5MTk3NDc7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG5cclxuLmJsb2NrIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIFxyXG59XHJcblxyXG4uYmxvY2sgaW1ne1xyXG4gICAgd2lkdGg6IDMwcHg7IFxyXG4gICAgaGVpZ2h0OiAzMHB4OyBcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxufVxyXG5cclxuLmJsb2NrIGEge1xyXG4gICAgbWFyZ2luOiAwOyAvKiBQYXJhIGV2aXRhciBlc3BhY2lvcyBpbm5lY2VzYXJpb3MgYWxyZWRlZG9yIGRlbCBww4PCoXJyYWZvICovXHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc3Myk7IC8qIE1hbnRlbmVyIGVsIHRleHRvIGVuIGNvbG9yIG5lZ3JvICovXHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IC8qIFF1aXRhciBlbCBzdWJyYXlhZG8gKi9cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgxNTgsIDE3NCwgMzgsIDAuMzY1KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDUlKTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAudGl0dWxvIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuYmxvY2sge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJsb2NrIGltZ3tcclxuICAgICAgICB3aWR0aDogMTBweDsgXHJcbiAgICAgICAgaGVpZ2h0OiAxMHB4OyBcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9924:
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/screens/radiotherapy-screens/sbrt-exactrac-body-stereotaxic-radiosurgery/sbrt-exactrac-body-stereotaxic-radiosurgery.component.ts ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SBRTExactracBodyStereotaxicRadiosurgeryComponent: () => (/* binding */ SBRTExactracBodyStereotaxicRadiosurgeryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _title_card_title_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../title-card/title-card.component */ 6468);


class SBRTExactracBodyStereotaxicRadiosurgeryComponent {
  static #_ = this.ɵfac = function SBRTExactracBodyStereotaxicRadiosurgeryComponent_Factory(t) {
    return new (t || SBRTExactracBodyStereotaxicRadiosurgeryComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SBRTExactracBodyStereotaxicRadiosurgeryComponent,
    selectors: [["app-sbrt-exactrac-body-stereotaxic-radiosurgery"]],
    decls: 47,
    vars: 3,
    consts: [[1, "conteiner"], ["title", "SBRT EXACTRAC \u2013 RADIOCIRUG\u00CDA ESTEREOT\u00C1XICA CORPORAL", "imageUrl", "..\\assets\\images\\CPR_tratamiento2.jpg", "color", "rgba(97, 102, 61, 0.65)", 3, "titleFontSize", "titleFontSizeScreen", "titlePadding"], [1, "content"], [1, "content-text"], [1, "titulo"], [1, "description"], [1, "content-img"], ["src", "..\\assets\\images\\CPR_SRBT.jpeg"], ["src", "..\\assets\\images\\CPR_tratamiento3.jpg"], [1, "subtitle"], [1, "flex", "align-items-center", "check"], [1, "pi", "pi-check", 2, "color", "rgb(97, 102, 61)"], [1, "pi", "pi-check", 2, "color", "rgba(97, 102, 61)"]],
    template: function SBRTExactracBodyStereotaxicRadiosurgeryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-title-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "La SRBT es ambulatoria, indolora y administrable en 1 o pocas fracciones de 15 minutos, permiti\u00E9ndole al paciente llevar una vida normal.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "La Radiocirug\u00EDa Estereot\u00E1xica Corporal \u2014 SBRT (Stereotactic Body Radiation Therapy) es una t\u00E9cnica terap\u00E9utica ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "moderna y precisa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " en la cual se irradian peque\u00F1os vol\u00FAmenes con altas dosis de radiaci\u00F3n, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "dirigida a pacientes con tumores primarios o metast\u00E1sicos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, ", produciendo tasas de control comparables a la cirug\u00EDa cl\u00E1sica.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 7)(18, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 3)(20, "div", 5)(21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "La planificaci\u00F3n se realiza a partir de im\u00E1genes en cuatro dimensiones, teniendo en cuenta el volumen y movimiento de los \u00F3rganos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 9)(24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "ALGUNO DE LOS BENEFICIOS DE ESTE TRATAMIENTO");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 5)(27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Ambulatoria");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "No invasiva");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Indolora");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Se realiza sin anestesia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Administrable en 1 o pocas fracciones de 15 minutos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("titleFontSize", 35)("titleFontSizeScreen", 15)("titlePadding", 42);
      }
    },
    dependencies: [_title_card_title_card_component__WEBPACK_IMPORTED_MODULE_0__.TitleCardComponent],
    styles: ["div[_ngcontent-%COMP%] {\n    font-family: 'Rubik Regular', sans-serif\n}\n\n.container[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n    background: linear-gradient(to bottom, rgba(158, 174, 38, 0.316), rgba(255, 255, 255, 0.5) 25%);\n    padding-top: 10px;\n    font-family: 'Rubik', sans-serif;\n\n}\n\n.content-text[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n}\n\n.titulo[_ngcontent-%COMP%] {\n    font-size: 28px;\n    font-family: 'Rubik', sans-serif;\n}\n\n.titulo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #585f12;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n    font-size: 28px;\n    font-family: 'Rubik', sans-serif;\n    margin-bottom: -20px;\n}\n\n.subtitle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #585f12;\n}\n\n.description[_ngcontent-%COMP%] {\n    font-size: 22px;\n}\n\n.description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-right: 10px;\n    font-weight: 900;\n    font-size: 1.5rem;\n}\n\n.check[_ngcontent-%COMP%] {\n    margin-bottom: -15px;\n}\n\n\n.description[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-weight: 800;\n}\n\n.content-img[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 60%;\n    height: 500px;\n    object-fit: cover;\n    border-radius: 0 40px 0 0;\n}\n\n.content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n    width: 35%;\n    \n\n    margin-right: 30px;\n}\n\n.content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:last-child {\n    width: 65%;\n    \n\n}\n\n@media screen and (max-width: 600px) {\n    .titulo[_ngcontent-%COMP%] {\n        font-size: 12px;\n    }\n\n    .description[_ngcontent-%COMP%] {\n        font-size: 10px;\n    }\n\n    .subtitle[_ngcontent-%COMP%] {\n        font-size: 12px;\n        margin-bottom: -10px;\n    }\n\n    .description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        margin-right: 7px;\n        font-size: 0.5rem;\n    }\n\n    .content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 60%;\n        height: 120px;\n        object-fit: cover;\n        border-radius: 0 20px 0 0;\n    }\n\n    .content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n        width: 35%;\n        \n\n        margin-right: 10px;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2NyZWVucy9yYWRpb3RoZXJhcHktc2NyZWVucy9zYnJ0LWV4YWN0cmFjLWJvZHktc3RlcmVvdGF4aWMtcmFkaW9zdXJnZXJ5L3NicnQtZXhhY3RyYWMtYm9keS1zdGVyZW90YXhpYy1yYWRpb3N1cmdlcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksK0ZBQStGO0lBQy9GLGlCQUFpQjtJQUNqQixnQ0FBZ0M7O0FBRXBDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdDQUFnQztJQUNoQyxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOzs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG9EQUFvRDtJQUNwRCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysb0RBQW9EO0FBQ3hEOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLGFBQWE7UUFDYixpQkFBaUI7UUFDakIseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLG9EQUFvRDtRQUNwRCxrQkFBa0I7SUFDdEI7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgICBmb250LWZhbWlseTogJ1J1YmlrIFJlZ3VsYXInLCBzYW5zLXNlcmlmXHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMTU4LCAxNzQsIDM4LCAwLjMxNiksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAyNSUpO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcclxuXHJcbn1cclxuXHJcbi5jb250ZW50LXRleHQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxufVxyXG5cclxuLnRpdHVsbyB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnRpdHVsbyBwIHtcclxuICAgIGNvbG9yOiAjNTg1ZjEyO1xyXG59XHJcblxyXG4uc3VidGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMjBweDtcclxufVxyXG5cclxuLnN1YnRpdGxlIHAge1xyXG4gICAgY29sb3I6ICM1ODVmMTI7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiBzcGFuIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLmNoZWNrIHtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xNXB4O1xyXG59XHJcblxyXG5cclxuLmRlc2NyaXB0aW9uIHN0cm9uZyB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5jb250ZW50LWltZyB7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250ZW50LWltZyBpbWcge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgNDBweCAwIDA7XHJcbn1cclxuXHJcbi5jb250ZW50LWltZyBpbWc6Zmlyc3QtY2hpbGQge1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIC8qIEVzdGFibGVjZXIgZWwgYW5jaG8gZGUgbGEgcHJpbWVyYSBpbWFnZW4gYWwgMzUlICovXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50LWltZyBpbWc6bGFzdC1jaGlsZCB7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgLyogRXN0YWJsZWNlciBlbCBhbmNobyBkZSBsYSBzZWd1bmRhIGltYWdlbiBhbCA2NSUgKi9cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC50aXR1bG8ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc3VidGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGVzY3JpcHRpb24gc3BhbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQtaW1nIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMjBweCAwIDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQtaW1nIGltZzpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgd2lkdGg6IDM1JTtcclxuICAgICAgICAvKiBFc3RhYmxlY2VyIGVsIGFuY2hvIGRlIGxhIHByaW1lcmEgaW1hZ2VuIGFsIDM1JSAqL1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 900:
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/screens/radiotherapy-screens/srs-exactrac-cranial-stereotaxic-radiosurgery/srs-exactrac-cranial-stereotaxic-radiosurgery.component.ts ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SRSExactracCranialStereotaxicRadiosurgeryComponent: () => (/* binding */ SRSExactracCranialStereotaxicRadiosurgeryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _title_card_title_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../title-card/title-card.component */ 6468);


class SRSExactracCranialStereotaxicRadiosurgeryComponent {
  static #_ = this.ɵfac = function SRSExactracCranialStereotaxicRadiosurgeryComponent_Factory(t) {
    return new (t || SRSExactracCranialStereotaxicRadiosurgeryComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SRSExactracCranialStereotaxicRadiosurgeryComponent,
    selectors: [["app-srs-exactrac-cranial-stereotaxic-radiosurgery"]],
    decls: 24,
    vars: 3,
    consts: [["title", "SRS EXATRAC \u2013 RADIOCIRUG\u00CDA ESTEREOT\u00C1XICA CRANEAL", "imageUrl", "..\\assets\\images\\CPR_tratamientoIGRT.jpg", "color", "rgba(97, 102, 61, 0.65)", 3, "titleFontSize", "titleFontSizeScreen", "titlePadding"], [1, "content"], [1, "content-text"], [1, "titulo"], [1, "description"], [1, "content-img"], ["src", "..\\assets\\images\\CPR_SRS.jpeg"], ["src", "..\\assets\\images\\CPR_cirugia-esterotaxica.jpeg"]],
    template: function SRSExactracCranialStereotaxicRadiosurgeryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-title-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Es una t\u00E9cnica terap\u00E9utica moderna y precisa en la cual se irradian peque\u00F1os vol\u00FAmenes del cr\u00E1neo con altas dosis de radiaci\u00F3n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Se necesita una t\u00E9cnica de inmovilizaci\u00F3n y fijaci\u00F3n precisa, un software espec\u00EDfico, y la posibilidad de utilizar y fusionar im\u00E1genes de TAC, RMN, PET y angiograf\u00EDa digital. Esto permite ubicar un punto espec\u00EDfico en el enc\u00E9falo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "El prop\u00F3sito de la Radiocirug\u00EDa es curar al paciente, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "evitar la recidiva local");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " o ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "paliar s\u00EDntomas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Con esta t\u00E9cnica focalizada ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "se minimizan las dosis de radiaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " en estructuras que no forman parte del objetivo, mejorando as\u00ED la tolerancia al tratamiento y su efectividad.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 6)(23, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("titleFontSize", 35)("titleFontSizeScreen", 15)("titlePadding", 42);
      }
    },
    dependencies: [_title_card_title_card_component__WEBPACK_IMPORTED_MODULE_0__.TitleCardComponent],
    styles: ["div[_ngcontent-%COMP%] {\n    font-family: 'Rubik Regular', sans-serif;\n}\n\n.container[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n    background: linear-gradient(to bottom, rgba(158, 174, 38, 0.316), rgba(255, 255, 255, 0.5) 25%);\n    padding-top: 10px;\n    font-family: 'Rubik', sans-serif;\n\n}\n\n.content-text[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n}\n\n.titulo[_ngcontent-%COMP%] {\n    font-size: 28px;\n    font-family: 'Rubik', sans-serif;\n}\n\n.titulo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #919747;\n}\n\n\n.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 22px;\n}\n\n.description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-right: 10px;\n    margin-top:5px;\n    font-size: 1.5rem;\n}\n\n.description[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-weight: 800;\n}\n\n.content-img[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 60%;\n    height: 500px;\n    object-fit: cover;\n    border-radius: 0 40px 0 0;\n}\n\n.content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n    width: 35%;\n    \n\n    margin-right: 30px;\n}\n\n.content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:last-child {\n    width: 65%;\n    \n\n}\n\n@media screen and (max-width: 600px) {\n\n    .titulo[_ngcontent-%COMP%] {\n        font-size: 12px;\n    }\n\n\n    .description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n        font-size: 10px;\n    }\n\n    .content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 60%;\n        height: 120px;\n        object-fit: cover;\n        border-radius: 0 20px 0 0;\n    }\n\n    .content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n        width: 35%;\n        \n\n        margin-right: 10px;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2NyZWVucy9yYWRpb3RoZXJhcHktc2NyZWVucy9zcnMtZXhhY3RyYWMtY3JhbmlhbC1zdGVyZW90YXhpYy1yYWRpb3N1cmdlcnkvc3JzLWV4YWN0cmFjLWNyYW5pYWwtc3RlcmVvdGF4aWMtcmFkaW9zdXJnZXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksK0ZBQStGO0lBQy9GLGlCQUFpQjtJQUNqQixnQ0FBZ0M7O0FBRXBDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOzs7QUFHQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG9EQUFvRDtJQUNwRCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysb0RBQW9EO0FBQ3hEOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtJQUNuQjs7O0lBR0E7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksVUFBVTtRQUNWLGFBQWE7UUFDYixpQkFBaUI7UUFDakIseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLG9EQUFvRDtRQUNwRCxrQkFBa0I7SUFDdEI7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgICBmb250LWZhbWlseTogJ1J1YmlrIFJlZ3VsYXInLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDE1OCwgMTc0LCAzOCwgMC4zMTYpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMjUlKTtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XHJcblxyXG59XHJcblxyXG4uY29udGVudC10ZXh0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbn1cclxuXHJcbi50aXR1bG8ge1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi50aXR1bG8gcCB7XHJcbiAgICBjb2xvcjogIzkxOTc0NztcclxufVxyXG5cclxuXHJcbi5kZXNjcmlwdGlvbiBwIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHNwYW4ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDo1cHg7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHN0cm9uZyB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5jb250ZW50LWltZyB7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250ZW50LWltZyBpbWcge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgNDBweCAwIDA7XHJcbn1cclxuXHJcbi5jb250ZW50LWltZyBpbWc6Zmlyc3QtY2hpbGQge1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIC8qIEVzdGFibGVjZXIgZWwgYW5jaG8gZGUgbGEgcHJpbWVyYSBpbWFnZW4gYWwgMzUlICovXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50LWltZyBpbWc6bGFzdC1jaGlsZCB7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgLyogRXN0YWJsZWNlciBlbCBhbmNobyBkZSBsYSBzZWd1bmRhIGltYWdlbiBhbCA2NSUgKi9cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuXHJcbiAgICAudGl0dWxvIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5kZXNjcmlwdGlvbiBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudC1pbWcgaW1nIHtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAyMHB4IDAgMDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudC1pbWcgaW1nOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICB3aWR0aDogMzUlO1xyXG4gICAgICAgIC8qIEVzdGFibGVjZXIgZWwgYW5jaG8gZGUgbGEgcHJpbWVyYSBpbWFnZW4gYWwgMzUlICovXHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9344:
/*!***************************************************************************!*\
  !*** ./src/app/screens/shifts/shifts-options/shifts-options.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShiftsOptionsComponent: () => (/* binding */ ShiftsOptionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);

class ShiftsOptionsComponent {
  static #_ = this.ɵfac = function ShiftsOptionsComponent_Factory(t) {
    return new (t || ShiftsOptionsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ShiftsOptionsComponent,
    selectors: [["app-shifts-options"]],
    decls: 9,
    vars: 0,
    consts: [[1, "flex", "flex-wrap", "justify-content-center"], [1, "article-card"], [1, "content", 2, "background-color", "rgba(215, 138, 0, 0.6)"], [1, "p-d-flex", "p-flex-column", "p-align-start"], [1, "m-2", "text-white", "title", "font-bold"], [1, "subtitle", "m-2", "text-white"], ["src", "..\\assets\\images\\CPR_turnos.jpg", "alt", "article-cover"]],
    template: function ShiftsOptionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "TURNOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Para una atenci\u00F3n m\u00E1s \u00E1gil y espec\u00EDfica, nuestro Centro le ofrece distintos canales de comunicaci\u00F3n para obtener turnos con nuestros profesionales o evacuar dudas acerca de los tratamientos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    styles: [".article-card[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.article-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n\n\n.article-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    margin-bottom: 50px;\n    box-sizing: border-box;\n    width: 50%;\n    border-radius: 0 40px 0 0;\n    position: absolute;\n    padding: 20px 30px 20px 30px;\n    height: 40%;\n    bottom: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n    text-align: left; \n}\n\n.article-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    margin: 0;\n    font-size: var(--title-font-size, 10px);\n    \n}\n\n.article-card[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n    margin: 0;\n    font-size: 20px;\n    text-align: left;\n}\n\n\n.title[_ngcontent-%COMP%] {\n    font-family: 'Rubik Light';\n    font-weight: 500;\n    font-size: x-large;\n}\n\nimg[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: auto;\n    display: block;\n    margin: 0 auto;\n}\n\n@media screen and (max-width: 600px) {\n    .article-card[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 150px;\n    }\n\n    .article-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n        margin: 0;\n        font-size: var(--title-font-size-screen, 15px);\n    }\n\n    .article-card[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n        margin: 0;\n        font-size: 8px;\n    }\n\n    .article-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n        margin-bottom: 20px;\n        border-radius: 0 30px 0 0;\n        height: 50%;\n        width: 90%;\n        \n    }\n\n\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2NyZWVucy9zaGlmdHMvc2hpZnRzLW9wdGlvbnMvc2hpZnRzLW9wdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOzs7QUFHQTtJQUNJLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCx1Q0FBdUM7O0FBRTNDOztBQUVBO0lBQ0ksU0FBUztJQUNULGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7OztBQUdBO0lBQ0ksMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGNBQWM7SUFDZCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsYUFBYTtJQUNqQjs7SUFFQTtRQUNJLFNBQVM7UUFDVCw4Q0FBOEM7SUFDbEQ7O0lBRUE7UUFDSSxTQUFTO1FBQ1QsY0FBYztJQUNsQjs7SUFFQTtRQUNJLG1CQUFtQjtRQUNuQix5QkFBeUI7UUFDekIsV0FBVztRQUNYLFVBQVU7O0lBRWQ7OztBQUdKIiwic291cmNlc0NvbnRlbnQiOlsiLmFydGljbGUtY2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYXJ0aWNsZS1jYXJkIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG5cclxuLmFydGljbGUtY2FyZCAuY29udGVudCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDQwcHggMCAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcGFkZGluZzogMjBweCAzMHB4IDIwcHggMzBweDtcclxuICAgIGhlaWdodDogNDAlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDsgXHJcbn1cclxuXHJcbi5hcnRpY2xlLWNhcmQgLnRpdGxlIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tdGl0bGUtZm9udC1zaXplLCAxMHB4KTtcclxuICAgIFxyXG59XHJcblxyXG4uYXJ0aWNsZS1jYXJkIC5zdWJ0aXRsZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5cclxuLnRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsgTGlnaHQnO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuYXJ0aWNsZS1jYXJkIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hcnRpY2xlLWNhcmQgLnRpdGxlIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS10aXRsZS1mb250LXNpemUtc2NyZWVuLCAxNXB4KTtcclxuICAgIH1cclxuXHJcbiAgICAuYXJ0aWNsZS1jYXJkIC5zdWJ0aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hcnRpY2xlLWNhcmQgLmNvbnRlbnQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAzMHB4IDAgMDtcclxuICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 6468:
/*!****************************************************!*\
  !*** ./src/app/title-card/title-card.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TitleCardComponent: () => (/* binding */ TitleCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 2676);


function TitleCardComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.subtitle, " ");
  }
}
class TitleCardComponent {
  constructor() {
    this.title = '';
    this.titleFontSize = 0;
    this.titleFontSizeScreen = 0;
    this.subtitle = '';
    this.imageUrl = '';
    this.color = '';
    this.titlePadding = 0;
  }
  ngOnInit() {
    document.documentElement.style.setProperty('--title-font-size', this.titleFontSize + 'px');
    document.documentElement.style.setProperty('--title-font-size-screen', this.titleFontSizeScreen + 'px');
    document.documentElement.style.setProperty('--title-padding', this.titlePadding + 'px');
  }
  static #_ = this.ɵfac = function TitleCardComponent_Factory(t) {
    return new (t || TitleCardComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TitleCardComponent,
    selectors: [["app-title-card"]],
    inputs: {
      title: "title",
      titleFontSize: "titleFontSize",
      titleFontSizeScreen: "titleFontSizeScreen",
      subtitle: "subtitle",
      imageUrl: "imageUrl",
      color: "color",
      titlePadding: "titlePadding"
    },
    decls: 8,
    vars: 5,
    consts: [[1, "flex", "flex-wrap", "justify-content-center"], [1, "article-card"], [1, "content"], [1, "p-d-flex", "p-flex-column", "text", "p-align-start"], [1, "m-2", "text-white", "title", "font-bold"], ["class", "subtitle m-2 text-white", 4, "ngIf"], ["alt", "article-cover", 3, "src"], [1, "subtitle", "m-2", "text-white"]],
    template: function TitleCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TitleCardComponent_div_6_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.subtitle != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    styles: [".article-card[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 500px;\n    position: relative;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.article-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n\n\n.article-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    margin-bottom: 50px;\n    box-sizing: border-box;\n    width: 50%;\n    border-radius: 0 40px 0 0;\n    position: absolute;\n    padding: 20px 30px 20px 30px;\n    height: 40%;\n    bottom: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n    text-align: left; \n    \n}\n\n.article-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    margin: 0;\n    font-size: var(--title-font-size, 10px);\n}\n\n.content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{\n    margin-left: 55px;\n}\n\n.article-card[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n    margin: 0;\n    font-size: 20px;\n    text-align: left;\n}\n\n\n.title[_ngcontent-%COMP%] {\n    font-family: 'Rubik Light';\n    font-weight: 500;\n    font-size: x-large;\n}\n\nimg[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: auto;\n    display: block;\n    margin: 0 auto;\n}\n\n@media screen and (max-width: 600px) {\n    .article-card[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 150px;\n    }\n\n    .article-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n        font-size: var(--title-font-size-screen, 15px);\n    }\n\n    .article-card[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n        font-size: 8px;\n    }\n\n    .content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{\n        margin-left: -22px;\n    }\n\n    .article-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n        margin-bottom: 20px;\n        border-radius: 0 30px 0 0;\n        height: 50%;\n        width: 90%;\n        \n    }\n\n\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGl0bGUtY2FyZC90aXRsZS1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7O0FBR0E7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsU0FBUztJQUNULGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksU0FBUztJQUNULHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOzs7QUFHQTtJQUNJLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixjQUFjO0lBQ2QsY0FBYztBQUNsQjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztRQUNYLGFBQWE7SUFDakI7O0lBRUE7UUFDSSw4Q0FBOEM7SUFDbEQ7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksbUJBQW1CO1FBQ25CLHlCQUF5QjtRQUN6QixXQUFXO1FBQ1gsVUFBVTs7SUFFZDs7O0FBR0oiLCJzb3VyY2VzQ29udGVudCI6WyIuYXJ0aWNsZS1jYXJkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYXJ0aWNsZS1jYXJkIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG5cclxuLmFydGljbGUtY2FyZCAuY29udGVudCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDQwcHggMCAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcGFkZGluZzogMjBweCAzMHB4IDIwcHggMzBweDtcclxuICAgIGhlaWdodDogNDAlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDsgXHJcbiAgICBcclxufVxyXG5cclxuLmFydGljbGUtY2FyZCAudGl0bGUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS10aXRsZS1mb250LXNpemUsIDEwcHgpO1xyXG59XHJcblxyXG4uY29udGVudCAudGV4dHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1NXB4O1xyXG59XHJcblxyXG4uYXJ0aWNsZS1jYXJkIC5zdWJ0aXRsZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5cclxuLnRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsgTGlnaHQnO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuYXJ0aWNsZS1jYXJkIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hcnRpY2xlLWNhcmQgLnRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IHZhcigtLXRpdGxlLWZvbnQtc2l6ZS1zY3JlZW4sIDE1cHgpO1xyXG4gICAgfVxyXG5cclxuICAgIC5hcnRpY2xlLWNhcmQgLnN1YnRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDhweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudCAudGV4dHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTIycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmFydGljbGUtY2FyZCAuY29udGVudCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDMwcHggMCAwO1xyXG4gICAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 7460:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 168);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 5204);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(7460)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map