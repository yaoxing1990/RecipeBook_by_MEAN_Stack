/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './shopping-edit.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from './shopping-edit.component';
import * as i3 from '@angular/forms';
import * as i4 from '@angular/common';
import * as i5 from '../shopping-list.service';
const styles_ShoppingEditComponent:any[] = [i0.styles];
export const RenderType_ShoppingEditComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_ShoppingEditComponent,data:{}});
function View_ShoppingEditComponent_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'button',[['class',
      'btn btn-danger'],['type','button']],(null as any),[[(null as any),'click']],
      (_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.onDelete()) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),(_l()(),i1.ɵted((null as any),['Delete']))],
      (null as any),(null as any));
}
export function View_ShoppingEditComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[i1.ɵqud(402653184,1,{slForm:0}),(_l()(),i1.ɵeld(0,(null as any),
      (null as any),61,'div',[['class','row']],(null as any),(null as any),(null as any),
      (null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n  '])),(_l()(),
      i1.ɵeld(0,(null as any),(null as any),58,'div',[['class','col-xs-12']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
      ['\n    '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),55,'form',[['novalidate',
      '']],[[2,'ng-untouched',(null as any)],[2,'ng-touched',(null as any)],[2,'ng-pristine',
      (null as any)],[2,'ng-dirty',(null as any)],[2,'ng-valid',(null as any)],[2,
      'ng-invalid',(null as any)],[2,'ng-pending',(null as any)]],[[(null as any),
      'ngSubmit'],[(null as any),'submit'],[(null as any),'reset']],(_v,en,$event) => {
    var ad:boolean = true;
    var _co:i2.ShoppingEditComponent = _v.component;
    if (('submit' === en)) {
      const pd_0:any = ((<any>i1.ɵnov(_v,7).onSubmit($event)) !== false);
      ad = (pd_0 && ad);
    }
    if (('reset' === en)) {
      const pd_1:any = ((<any>i1.ɵnov(_v,7).onReset()) !== false);
      ad = (pd_1 && ad);
    }
    if (('ngSubmit' === en)) {
      const pd_2:any = ((<any>_co.onSubmit(i1.ɵnov(_v,7))) !== false);
      ad = (pd_2 && ad);
    }
    return ad;
  },(null as any),(null as any))),i1.ɵdid(16384,(null as any),0,i3.ɵbf,([] as any[]),
      (null as any),(null as any)),i1.ɵdid(16384,[[1,4],['f',4]],0,i3.NgForm,[[8,(null as any)],
      [8,(null as any)]],(null as any),{ngSubmit:'ngSubmit'}),i1.ɵprd(2048,(null as any),
      i3.ControlContainer,(null as any),[i3.NgForm]),i1.ɵdid(16384,(null as any),0,
      i3.NgControlStatusGroup,[i3.ControlContainer],(null as any),(null as any)),(_l()(),
      i1.ɵted((null as any),['\n      '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
      33,'div',[['class','row']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i1.ɵted((null as any),['\n        '])),(_l()(),i1.ɵeld(0,
      (null as any),(null as any),13,'div',[['class','col-sm-5 form-group']],(null as any),
      (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
      ['\n          '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'label',[['for',
      'name']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['Name'])),(_l()(),i1.ɵted((null as any),['\n          '])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),7,'input',[['class','form-control'],
          ['id','name'],['name','name'],['ngModel',''],['required',''],['type','text']],
          [[1,'required',0],[2,'ng-untouched',(null as any)],[2,'ng-touched',(null as any)],
              [2,'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],[2,'ng-valid',
                  (null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',(null as any)]],
          [[(null as any),'input'],[(null as any),'blur'],[(null as any),'compositionstart'],
              [(null as any),'compositionend']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('input' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,19)._handleInput($event.target.value)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>i1.ɵnov(_v,19).onTouched()) !== false);
              ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
              const pd_2:any = ((<any>i1.ɵnov(_v,19)._compositionStart()) !== false);
              ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
              const pd_3:any = ((<any>i1.ɵnov(_v,19)._compositionEnd($event.target.value)) !== false);
              ad = (pd_3 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(16384,(null as any),0,i3.DefaultValueAccessor,
          [i1.Renderer2,i1.ElementRef,[2,i3.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i1.ɵdid(16384,(null as any),0,i3.RequiredValidator,([] as any[]),
          {required:[0,'required']},(null as any)),i1.ɵprd(1024,(null as any),i3.NG_VALIDATORS,
          (p0_0:any) => {
            return [p0_0];
          },[i3.RequiredValidator]),i1.ɵprd(1024,(null as any),i3.NG_VALUE_ACCESSOR,
          (p0_0:any) => {
            return [p0_0];
          },[i3.DefaultValueAccessor]),i1.ɵdid(671744,(null as any),0,i3.NgModel,[[2,
          i3.ControlContainer],[2,i3.NG_VALIDATORS],[8,(null as any)],[2,i3.NG_VALUE_ACCESSOR]],
          {name:[0,'name'],model:[1,'model']},(null as any)),i1.ɵprd(2048,(null as any),
          i3.NgControl,(null as any),[i3.NgModel]),i1.ɵdid(16384,(null as any),0,i3.NgControlStatus,
          [i3.NgControl],(null as any),(null as any)),(_l()(),i1.ɵted((null as any),
          ['\n        '])),(_l()(),i1.ɵted((null as any),['\n        '])),(_l()(),
          i1.ɵeld(0,(null as any),(null as any),15,'div',[['class','col-sm-2 form-group']],
              (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n          '])),(_l()(),i1.ɵeld(0,(null as any),
          (null as any),1,'label',[['for','amount']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted((null as any),['Amount'])),
      (_l()(),i1.ɵted((null as any),['\n          '])),(_l()(),i1.ɵeld(0,(null as any),
          (null as any),9,'input',[['class','form-control'],['id','amount'],['name',
              'amount'],['ngModel',''],['pattern','^[1-9]+[0-9]*$'],['required',''],
              ['type','number']],[[1,'required',0],[1,'pattern',0],[2,'ng-untouched',
              (null as any)],[2,'ng-touched',(null as any)],[2,'ng-pristine',(null as any)],
              [2,'ng-dirty',(null as any)],[2,'ng-valid',(null as any)],[2,'ng-invalid',
                  (null as any)],[2,'ng-pending',(null as any)]],[[(null as any),'input'],
              [(null as any),'blur'],[(null as any),'compositionstart'],[(null as any),
                  'compositionend'],[(null as any),'change']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('input' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,34)._handleInput($event.target.value)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>i1.ɵnov(_v,34).onTouched()) !== false);
              ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
              const pd_2:any = ((<any>i1.ɵnov(_v,34)._compositionStart()) !== false);
              ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
              const pd_3:any = ((<any>i1.ɵnov(_v,34)._compositionEnd($event.target.value)) !== false);
              ad = (pd_3 && ad);
            }
            if (('change' === en)) {
              const pd_4:any = ((<any>i1.ɵnov(_v,35).onChange($event.target.value)) !== false);
              ad = (pd_4 && ad);
            }
            if (('input' === en)) {
              const pd_5:any = ((<any>i1.ɵnov(_v,35).onChange($event.target.value)) !== false);
              ad = (pd_5 && ad);
            }
            if (('blur' === en)) {
              const pd_6:any = ((<any>i1.ɵnov(_v,35).onTouched()) !== false);
              ad = (pd_6 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(16384,(null as any),0,i3.DefaultValueAccessor,
          [i1.Renderer2,i1.ElementRef,[2,i3.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i1.ɵdid(16384,(null as any),0,i3.ɵbc,[i1.Renderer2,i1.ElementRef],
          (null as any),(null as any)),i1.ɵdid(16384,(null as any),0,i3.RequiredValidator,
          ([] as any[]),{required:[0,'required']},(null as any)),i1.ɵdid(540672,(null as any),
          0,i3.PatternValidator,([] as any[]),{pattern:[0,'pattern']},(null as any)),
      i1.ɵprd(1024,(null as any),i3.NG_VALIDATORS,(p0_0:any,p1_0:any) => {
        return [p0_0,p1_0];
      },[i3.RequiredValidator,i3.PatternValidator]),i1.ɵprd(1024,(null as any),i3.NG_VALUE_ACCESSOR,
          (p0_0:any,p1_0:any) => {
            return [p0_0,p1_0];
          },[i3.DefaultValueAccessor,i3.ɵbc]),i1.ɵdid(671744,(null as any),0,i3.NgModel,
          [[2,i3.ControlContainer],[2,i3.NG_VALIDATORS],[8,(null as any)],[2,i3.NG_VALUE_ACCESSOR]],
          {name:[0,'name'],model:[1,'model']},(null as any)),i1.ɵprd(2048,(null as any),
          i3.NgControl,(null as any),[i3.NgModel]),i1.ɵdid(16384,(null as any),0,i3.NgControlStatus,
          [i3.NgControl],(null as any),(null as any)),(_l()(),i1.ɵted((null as any),
          ['\n        '])),(_l()(),i1.ɵted((null as any),['\n      '])),(_l()(),i1.ɵted((null as any),
          ['\n      '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),13,'div',[['class',
          'row']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n        '])),(_l()(),i1.ɵeld(0,(null as any),
          (null as any),10,'div',[['class','col-xs-12']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['\n          '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'button',
          [['class','btn btn-success'],['type','submit']],[[8,'disabled',0]],(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['',''])),(_l()(),i1.ɵted((null as any),['\n          '])),(_l()(),i1.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_ShoppingEditComponent_1)),
      i1.ɵdid(16384,(null as any),0,i4.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i1.ɵted((null as any),['\n          '])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),1,'button',[['class','btn btn-primary'],
          ['type','button']],(null as any),[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:i2.ShoppingEditComponent = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.onClear()) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),(_l()(),i1.ɵted((null as any),['Clear'])),(_l()(),
          i1.ɵted((null as any),['\n        '])),(_l()(),i1.ɵted((null as any),['\n      '])),
      (_l()(),i1.ɵted((null as any),['\n    '])),(_l()(),i1.ɵted((null as any),['\n  '])),
      (_l()(),i1.ɵted((null as any),['\n'])),(_l()(),i1.ɵted((null as any),['\n']))],
      (_ck,_v) => {
        var _co:i2.ShoppingEditComponent = _v.component;
        const currVal_15:any = '';
        _ck(_v,20,0,currVal_15);
        const currVal_16:any = 'name';
        const currVal_17:any = '';
        _ck(_v,23,0,currVal_16,currVal_17);
        const currVal_27:any = '';
        _ck(_v,36,0,currVal_27);
        const currVal_28:any = '^[1-9]+[0-9]*$';
        _ck(_v,37,0,currVal_28);
        const currVal_29:any = 'amount';
        const currVal_30:any = '';
        _ck(_v,40,0,currVal_29,currVal_30);
        const currVal_33:any = _co.editMode;
        _ck(_v,54,0,currVal_33);
      },(_ck,_v) => {
        var _co:i2.ShoppingEditComponent = _v.component;
        const currVal_0:any = i1.ɵnov(_v,9).ngClassUntouched;
        const currVal_1:any = i1.ɵnov(_v,9).ngClassTouched;
        const currVal_2:any = i1.ɵnov(_v,9).ngClassPristine;
        const currVal_3:any = i1.ɵnov(_v,9).ngClassDirty;
        const currVal_4:any = i1.ɵnov(_v,9).ngClassValid;
        const currVal_5:any = i1.ɵnov(_v,9).ngClassInvalid;
        const currVal_6:any = i1.ɵnov(_v,9).ngClassPending;
        _ck(_v,5,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6);
        const currVal_7:any = (i1.ɵnov(_v,20).required? '': (null as any));
        const currVal_8:any = i1.ɵnov(_v,25).ngClassUntouched;
        const currVal_9:any = i1.ɵnov(_v,25).ngClassTouched;
        const currVal_10:any = i1.ɵnov(_v,25).ngClassPristine;
        const currVal_11:any = i1.ɵnov(_v,25).ngClassDirty;
        const currVal_12:any = i1.ɵnov(_v,25).ngClassValid;
        const currVal_13:any = i1.ɵnov(_v,25).ngClassInvalid;
        const currVal_14:any = i1.ɵnov(_v,25).ngClassPending;
        _ck(_v,18,0,currVal_7,currVal_8,currVal_9,currVal_10,currVal_11,currVal_12,
            currVal_13,currVal_14);
        const currVal_18:any = (i1.ɵnov(_v,36).required? '': (null as any));
        const currVal_19:any = (i1.ɵnov(_v,37).pattern? i1.ɵnov(_v,37).pattern: (null as any));
        const currVal_20:any = i1.ɵnov(_v,42).ngClassUntouched;
        const currVal_21:any = i1.ɵnov(_v,42).ngClassTouched;
        const currVal_22:any = i1.ɵnov(_v,42).ngClassPristine;
        const currVal_23:any = i1.ɵnov(_v,42).ngClassDirty;
        const currVal_24:any = i1.ɵnov(_v,42).ngClassValid;
        const currVal_25:any = i1.ɵnov(_v,42).ngClassInvalid;
        const currVal_26:any = i1.ɵnov(_v,42).ngClassPending;
        _ck(_v,33,0,currVal_18,currVal_19,currVal_20,currVal_21,currVal_22,currVal_23,
            currVal_24,currVal_25,currVal_26);
        const currVal_31:boolean = !i1.ɵnov(_v,7).valid;
        _ck(_v,50,0,currVal_31);
        const currVal_32:any = (_co.editMode? 'Update': 'Add');
        _ck(_v,51,0,currVal_32);
      });
}
export function View_ShoppingEditComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'app-shopping-edit',
      ([] as any[]),(null as any),(null as any),(null as any),View_ShoppingEditComponent_0,
      RenderType_ShoppingEditComponent)),i1.ɵdid(245760,(null as any),0,i2.ShoppingEditComponent,
      [i5.ShoppingListService],(null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const ShoppingEditComponentNgFactory:i1.ComponentFactory<i2.ShoppingEditComponent> = i1.ɵccf('app-shopping-edit',
    i2.ShoppingEditComponent,View_ShoppingEditComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMveWFveGkvRG9jdW1lbnRzL0pvYmh1bnRpbmcvUHJvamVjdC9NRUFOX1N0YWNrL2Fzc2V0cy9hcHAvc2hvcHBpbmctbGlzdC9zaG9wcGluZy1lZGl0L3Nob3BwaW5nLWVkaXQuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0M6L1VzZXJzL3lhb3hpL0RvY3VtZW50cy9Kb2JodW50aW5nL1Byb2plY3QvTUVBTl9TdGFjay9hc3NldHMvYXBwL3Nob3BwaW5nLWxpc3Qvc2hvcHBpbmctZWRpdC9zaG9wcGluZy1lZGl0LmNvbXBvbmVudC50cyIsIm5nOi8vL0M6L1VzZXJzL3lhb3hpL0RvY3VtZW50cy9Kb2JodW50aW5nL1Byb2plY3QvTUVBTl9TdGFjay9hc3NldHMvYXBwL3Nob3BwaW5nLWxpc3Qvc2hvcHBpbmctZWRpdC9zaG9wcGluZy1lZGl0LmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMveWFveGkvRG9jdW1lbnRzL0pvYmh1bnRpbmcvUHJvamVjdC9NRUFOX1N0YWNrL2Fzc2V0cy9hcHAvc2hvcHBpbmctbGlzdC9zaG9wcGluZy1lZGl0L3Nob3BwaW5nLWVkaXQuY29tcG9uZW50LnRzLlNob3BwaW5nRWRpdENvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgPGRpdiBjbGFzcz1cImNvbC14cy0xMlwiPlxuICAgIDxmb3JtIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdChmKVwiICNmPVwibmdGb3JtXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNSBmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICBuZ01vZGVsXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgID5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMiBmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cImFtb3VudFwiPkFtb3VudDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIGlkPVwiYW1vdW50XCJcbiAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIG5hbWU9XCJhbW91bnRcIlxuICAgICAgICAgICAgbmdNb2RlbFxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIHBhdHRlcm49XCJeWzEtOV0rWzAtOV0qJFwiXG4gICAgICAgICAgPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIlxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiIWYudmFsaWRcIj57eyBlZGl0TW9kZSA/ICdVcGRhdGUnIDogJ0FkZCcgfX08L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgKGNsaWNrKT1cIm9uRGVsZXRlKClcIlxuICAgICAgICAgICAgKm5nSWY9XCJlZGl0TW9kZVwiPkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cIm9uQ2xlYXIoKVwiPkNsZWFyPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICA8L2Rpdj5cbjwvZGl2PlxuIiwiPGFwcC1zaG9wcGluZy1lZGl0PjwvYXBwLXNob3BwaW5nLWVkaXQ+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ2tDVTtNQUFBO01BQUE7UUFBQTtRQUFBO1FBR0U7VUFBQTtVQUFBO1FBQUE7UUFIRjtNQUFBLGdDQUltQjs7OztvREF0QzdCO01BQUE7TUFBQSw4QkFBaUIseUNBQ2Y7YUFBQTtVQUFBLDBEQUF1QjtNQUFBLGFBQ3JCO01BQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtJQUFBO0lBQUE7TUFBQTtNQUFBO0lBQUE7SUFBQTtNQUFBO01BQUE7SUFBQTtJQUFNO01BQUE7TUFBQTtJQUFBO0lBQU47RUFBQSx1Q0FBQTtNQUFBLG9DQUFBO01BQUEsK0RBQUE7MEJBQUEsa0NBQUE7OEJBQUEsbURBQTJDO2FBQUEsOEJBQ3pDO01BQUE7TUFBQSxnQkFBaUIsK0NBQ2Y7TUFBQTtNQUFBLDBEQUFpQztNQUFBLG1CQUMvQjtNQUFBO01BQWtCLHlDQUFZO01BQzlCO1VBQUE7VUFBQTtjQUFBO2tCQUFBO1VBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtVQUFBLHVDQUFBO1VBQUE7VUFBQSxzQkFBQTtVQUFBLGdEQUFBO1VBQUE7WUFBQTtVQUFBO1VBQUE7WUFBQTtVQUFBLG9DQUFBOzZCQUFBO1VBQUEsMERBQUE7dUJBQUEsbUNBQUE7VUFBQSw0Q0FPQztVQUFBLGlCQUNHLCtDQUNOO2lCQUFBO2NBQUE7TUFBaUMsaURBQy9CO1VBQUE7VUFBQSw4QkFBb0I7TUFBYyxpREFDbEM7VUFBQTtjQUFBO2NBQUE7Y0FBQTtjQUFBO2tCQUFBO2NBQUE7a0JBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7VUFBQSx1Q0FBQTtVQUFBO1VBQUEsc0JBQUE7VUFBQSxvQ0FBQTtVQUFBLDhEQUFBO1VBQUE7YUFBQTtRQUFBO01BQUE7VUFBQTtZQUFBO1VBQUEsMkNBQUE7VUFBQTtVQUFBLDBEQUFBO3VCQUFBLG1DQUFBO1VBQUEsNENBUUM7VUFBQSxpQkFDRyw2Q0FDRjtVQUFBLGVBQ047VUFBQTtNQUFpQiwrQ0FDZjtVQUFBO1VBQUEsNENBQXVCO1VBQUEsbUJBQ3JCO1VBQUE7VUFBQSw0Q0FHd0I7VUFBQSxVQUEwQyxpREFDbEU7VUFBQTthQUFBO1VBQUEsd0JBSWtDO01BQ2xDO1VBQUE7UUFBQTtRQUFBO1FBQThDO1VBQUE7VUFBQTtRQUFBO1FBQTlDO01BQUEsZ0NBQWtFLDBDQUFjO2lCQUFBLGdDQUM1RTtNQUNGLDJDQUNEO01BQ0gsdUNBQ0Y7OztRQWhDTTtRQU5GLFlBTUUsVUFORjtRQUlFO1FBQ0E7UUFMRixZQUlFLFdBQ0EsVUFMRjtRQWlCRTtRQU5GLFlBTUUsVUFORjtRQU9FO1FBUEYsWUFPRSxVQVBGO1FBSUU7UUFDQTtRQUxGLFlBSUUsV0FDQSxVQUxGO1FBcUJFO1FBSkYsWUFJRSxVQUpGOzs7UUFoQ047UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQSxXQUFBLHFFQUFBO1FBSU07UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBLFlBQUEsVUFBQTtZQUFBLHFCQUFBO1FBV0E7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUEsWUFBQSxXQUFBLFdBQUE7WUFBQSxnQ0FBQTtRQWdCRTtRQUhGLFlBR0UsVUFIRjtRQUd3QjtRQUFBOzs7O29CQ2pDbEM7TUFBQTtzQ0FBQSxVQUFBO01BQUE7SUFBQTs7OzsifQ==
