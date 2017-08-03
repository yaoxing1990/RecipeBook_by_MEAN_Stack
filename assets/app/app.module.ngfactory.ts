/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from './app.module';
import * as i2 from './app.component';
import * as i3 from './core/home/home.component.ngfactory';
import * as i4 from './shopping-list/shopping-list.component.ngfactory';
import * as i5 from './auth/signup/signup.component.ngfactory';
import * as i6 from './auth/signin/signin.component.ngfactory';
import * as i7 from './app.component.ngfactory';
import * as i8 from '@angular/common';
import * as i9 from '@angular/platform-browser';
import * as i10 from '@angular/http';
import * as i11 from '@angular/router';
import * as i12 from '@angular/forms';
import * as i13 from './shopping-list/shopping-list.service';
import * as i14 from './recipes/recipe.service';
import * as i15 from './errors/error.service';
import * as i16 from './shared/data-storage.service';
import * as i17 from './auth/auth.service';
import * as i18 from './auth/auth-guard.service';
import * as i19 from './core/home/home.component';
import * as i20 from './shopping-list/shopping-list.component';
import * as i21 from './auth/signup/signup.component';
import * as i22 from './auth/signin/signin.component';
import * as i23 from './app-routing.module';
import * as i24 from './shared/shared.module';
import * as i25 from './shopping-list/shopping-list.module';
import * as i26 from './auth/auth-routing.module';
import * as i27 from './auth/auth.module';
import * as i28 from './core/core.module';
export const AppModuleNgFactory:i0.NgModuleFactory<i1.AppModule> = i0.ɵcmf(i1.AppModule,
    [i2.AppComponent],(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,[i3.HomeComponentNgFactory,i4.ShoppingListComponentNgFactory,i5.SignupComponentNgFactory,
              i6.SigninComponentNgFactory,i7.AppComponentNgFactory]],[3,i0.ComponentFactoryResolver],
              i0.NgModuleRef]),i0.ɵmpd(5120,i0.LOCALE_ID,i0.ɵm,[[3,i0.LOCALE_ID]]),
          i0.ɵmpd(4608,i8.NgLocalization,i8.NgLocaleLocalization,[i0.LOCALE_ID]),i0.ɵmpd(5120,
              i0.APP_ID,i0.ɵf,([] as any[])),i0.ɵmpd(5120,i0.IterableDiffers,i0.ɵk,
              ([] as any[])),i0.ɵmpd(5120,i0.KeyValueDiffers,i0.ɵl,([] as any[])),
          i0.ɵmpd(4608,i9.DomSanitizer,i9.ɵe,[i8.DOCUMENT]),i0.ɵmpd(6144,i0.Sanitizer,
              (null as any),[i9.DomSanitizer]),i0.ɵmpd(4608,i9.HAMMER_GESTURE_CONFIG,
              i9.HammerGestureConfig,([] as any[])),i0.ɵmpd(5120,i9.EVENT_MANAGER_PLUGINS,
              (p0_0:any,p1_0:any,p2_0:any,p2_1:any) => {
                return [new i9.ɵDomEventsPlugin(p0_0),new i9.ɵKeyEventsPlugin(p1_0),
                    new i9.ɵHammerGesturesPlugin(p2_0,p2_1)];
              },[i8.DOCUMENT,i8.DOCUMENT,i8.DOCUMENT,i9.HAMMER_GESTURE_CONFIG]),i0.ɵmpd(4608,
              i9.EventManager,i9.EventManager,[i9.EVENT_MANAGER_PLUGINS,i0.NgZone]),
          i0.ɵmpd(135680,i9.ɵDomSharedStylesHost,i9.ɵDomSharedStylesHost,[i8.DOCUMENT]),
          i0.ɵmpd(4608,i9.ɵDomRendererFactory2,i9.ɵDomRendererFactory2,[i9.EventManager,
              i9.ɵDomSharedStylesHost]),i0.ɵmpd(6144,i0.RendererFactory2,(null as any),
              [i9.ɵDomRendererFactory2]),i0.ɵmpd(6144,i9.ɵSharedStylesHost,(null as any),
              [i9.ɵDomSharedStylesHost]),i0.ɵmpd(4608,i0.Testability,i0.Testability,
              [i0.NgZone]),i0.ɵmpd(4608,i9.Meta,i9.Meta,[i8.DOCUMENT]),i0.ɵmpd(4608,
              i9.Title,i9.Title,[i8.DOCUMENT]),i0.ɵmpd(4608,i10.BrowserXhr,i10.BrowserXhr,
              ([] as any[])),i0.ɵmpd(4608,i10.ResponseOptions,i10.BaseResponseOptions,
              ([] as any[])),i0.ɵmpd(5120,i10.XSRFStrategy,i10.ɵb,([] as any[])),i0.ɵmpd(4608,
              i10.XHRBackend,i10.XHRBackend,[i10.BrowserXhr,i10.ResponseOptions,i10.XSRFStrategy]),
          i0.ɵmpd(4608,i10.RequestOptions,i10.BaseRequestOptions,([] as any[])),i0.ɵmpd(5120,
              i10.Http,i10.ɵc,[i10.XHRBackend,i10.RequestOptions]),i0.ɵmpd(5120,i11.ActivatedRoute,
              i11.ɵf,[i11.Router]),i0.ɵmpd(4608,i11.PreloadAllModules,i11.PreloadAllModules,
              ([] as any[])),i0.ɵmpd(6144,i11.PreloadingStrategy,(null as any),[i11.PreloadAllModules]),
          i0.ɵmpd(135680,i11.RouterPreloader,i11.RouterPreloader,[i11.Router,i0.NgModuleFactoryLoader,
              i0.Compiler,i0.Injector,i11.PreloadingStrategy]),i0.ɵmpd(4608,i11.NoPreloading,
              i11.NoPreloading,([] as any[])),i0.ɵmpd(5120,i11.ROUTER_INITIALIZER,
              i11.ɵi,[i11.ɵg]),i0.ɵmpd(5120,i0.APP_BOOTSTRAP_LISTENER,(p0_0:any) => {
            return [p0_0];
          },[i11.ROUTER_INITIALIZER]),i0.ɵmpd(4608,i12.ɵi,i12.ɵi,([] as any[])),i0.ɵmpd(4608,
              i12.FormBuilder,i12.FormBuilder,([] as any[])),i0.ɵmpd(4608,i13.ShoppingListService,
              i13.ShoppingListService,([] as any[])),i0.ɵmpd(4608,i14.RecipeService,
              i14.RecipeService,[i13.ShoppingListService]),i0.ɵmpd(4608,i15.ErrorService,
              i15.ErrorService,([] as any[])),i0.ɵmpd(4608,i16.DataStorageService,
              i16.DataStorageService,[i10.Http,i14.RecipeService,i15.ErrorService]),
          i0.ɵmpd(4608,i17.AuthService,i17.AuthService,[i10.Http,i15.ErrorService]),
          i0.ɵmpd(4608,i18.AuthGuard,i18.AuthGuard,[i17.AuthService]),i0.ɵmpd(512,
              i8.CommonModule,i8.CommonModule,([] as any[])),i0.ɵmpd(1024,i0.ErrorHandler,
              i9.ɵa,([] as any[])),i0.ɵmpd(1024,i0.NgProbeToken,() => {
            return [i11.ɵb()];
          },([] as any[])),i0.ɵmpd(512,i11.ɵg,i11.ɵg,[i0.Injector]),i0.ɵmpd(1024,i0.APP_INITIALIZER,
              (p0_0:any,p0_1:any,p1_0:any) => {
                return [i9.ɵc(p0_0,p0_1),i11.ɵh(p1_0)];
              },[[2,i9.NgProbeToken],[2,i0.NgProbeToken],i11.ɵg]),i0.ɵmpd(512,i0.ApplicationInitStatus,
              i0.ApplicationInitStatus,[[2,i0.APP_INITIALIZER]]),i0.ɵmpd(131584,i0.ɵe,
              i0.ɵe,[i0.NgZone,i0.ɵConsole,i0.Injector,i0.ErrorHandler,i0.ComponentFactoryResolver,
                  i0.ApplicationInitStatus]),i0.ɵmpd(2048,i0.ApplicationRef,(null as any),
              [i0.ɵe]),i0.ɵmpd(512,i0.ApplicationModule,i0.ApplicationModule,[i0.ApplicationRef]),
          i0.ɵmpd(512,i9.BrowserModule,i9.BrowserModule,[[3,i9.BrowserModule]]),i0.ɵmpd(512,
              i10.HttpModule,i10.HttpModule,([] as any[])),i0.ɵmpd(1024,i11.ɵa,i11.ɵd,
              [[3,i11.Router]]),i0.ɵmpd(512,i11.UrlSerializer,i11.DefaultUrlSerializer,
              ([] as any[])),i0.ɵmpd(512,i11.ChildrenOutletContexts,i11.ChildrenOutletContexts,
              ([] as any[])),i0.ɵmpd(256,i11.ROUTER_CONFIGURATION,{preloadingStrategy:i11.PreloadAllModules},
              ([] as any[])),i0.ɵmpd(1024,i8.LocationStrategy,i11.ɵc,[i8.PlatformLocation,
              [2,i8.APP_BASE_HREF],i11.ROUTER_CONFIGURATION]),i0.ɵmpd(512,i8.Location,
              i8.Location,[i8.LocationStrategy]),i0.ɵmpd(512,i0.Compiler,i0.Compiler,
              ([] as any[])),i0.ɵmpd(512,i0.NgModuleFactoryLoader,i0.SystemJsNgModuleLoader,
              [i0.Compiler,[2,i0.SystemJsNgModuleLoaderConfig]]),i0.ɵmpd(1024,i11.ROUTES,
              () => {
                return [[{path:'',component:i19.HomeComponent},{path:'recipes',loadChildren:'./recipes/recipes.module#RecipesModule'},
                    {path:'shopping-list',component:i20.ShoppingListComponent}],[{path:'signup',
                    component:i21.SignupComponent},{path:'signin',component:i22.SigninComponent}]];
              },([] as any[])),i0.ɵmpd(1024,i11.Router,i11.ɵe,[i0.ApplicationRef,i11.UrlSerializer,
              i11.ChildrenOutletContexts,i8.Location,i0.Injector,i0.NgModuleFactoryLoader,
              i0.Compiler,i11.ROUTES,i11.ROUTER_CONFIGURATION,[2,i11.UrlHandlingStrategy],
              [2,i11.RouteReuseStrategy]]),i0.ɵmpd(512,i11.RouterModule,i11.RouterModule,
              [[2,i11.ɵa],[2,i11.Router]]),i0.ɵmpd(512,i23.AppRoutingModule,i23.AppRoutingModule,
              ([] as any[])),i0.ɵmpd(512,i24.SharedModule,i24.SharedModule,([] as any[])),
          i0.ɵmpd(512,i12.ɵba,i12.ɵba,([] as any[])),i0.ɵmpd(512,i12.FormsModule,i12.FormsModule,
              ([] as any[])),i0.ɵmpd(512,i25.ShoppingListModule,i25.ShoppingListModule,
              ([] as any[])),i0.ɵmpd(512,i12.ReactiveFormsModule,i12.ReactiveFormsModule,
              ([] as any[])),i0.ɵmpd(512,i26.AuthRoutingModule,i26.AuthRoutingModule,
              ([] as any[])),i0.ɵmpd(512,i27.AuthModule,i27.AuthModule,([] as any[])),
          i0.ɵmpd(512,i28.CoreModule,i28.CoreModule,([] as any[])),i0.ɵmpd(512,i1.AppModule,
              i1.AppModule,([] as any[]))]);
    });
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMveWFveGkvRG9jdW1lbnRzL0pvYmh1bnRpbmcvUHJvamVjdC9NRUFOX1N0YWNrL2Fzc2V0cy9hcHAvYXBwLm1vZHVsZS5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9Vc2Vycy95YW94aS9Eb2N1bWVudHMvSm9iaHVudGluZy9Qcm9qZWN0L01FQU5fU3RhY2svYXNzZXRzL2FwcC9hcHAubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
