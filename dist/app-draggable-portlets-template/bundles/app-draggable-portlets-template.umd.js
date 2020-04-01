(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/common/http'), require('rxjs/operators'), require('jquery'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('app-draggable-portlets-template', ['exports', '@angular/core', 'rxjs', '@angular/common/http', 'rxjs/operators', 'jquery', '@angular/platform-browser'], factory) :
    (global = global || self, factory(global['app-draggable-portlets-template'] = {}, global.ng.core, global.rxjs, global.ng.common.http, global.rxjs.operators, global.jqueryProxy__default, global.ng.platformBrowser));
}(this, (function (exports, core, rxjs, http, operators, $_, platformBrowser) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    var AppDraggablePortletsTemplateService = /** @class */ (function () {
        function AppDraggablePortletsTemplateService() {
        }
        AppDraggablePortletsTemplateService.ɵprov = core["defineInjectable"]({ factory: function AppDraggablePortletsTemplateService_Factory() { return new AppDraggablePortletsTemplateService(); }, token: AppDraggablePortletsTemplateService, providedIn: "root" });
        AppDraggablePortletsTemplateService = __decorate([
            core.Injectable({
                providedIn: 'root'
            }),
            __metadata("design:paramtypes", [])
        ], AppDraggablePortletsTemplateService);
        return AppDraggablePortletsTemplateService;
    }());

    var AppDraggablePortletsTemplateComponent = /** @class */ (function () {
        function AppDraggablePortletsTemplateComponent() {
            this.title = 'bind-json-array-to-draggable-portlets';
            this.configFile = "/assets/json/data.json";
        }
        AppDraggablePortletsTemplateComponent.prototype.ngOnInit = function () {
        };
        AppDraggablePortletsTemplateComponent = __decorate([
            core.Component({
                selector: 'app-draggable-portlets-template',
                template: "\n    <app-load-portlets configFile=\"/assets/json/data.json\"></app-load-portlets>\n  "
            }),
            __metadata("design:paramtypes", [])
        ], AppDraggablePortletsTemplateComponent);
        return AppDraggablePortletsTemplateComponent;
    }());

    var PortletComponent = /** @class */ (function () {
        function PortletComponent() {
        }
        __decorate([
            core.Input(),
            __metadata("design:type", rxjs.Observable)
        ], PortletComponent.prototype, "portlet", void 0);
        PortletComponent = __decorate([
            core.Component({
                selector: 'app-portlet',
                template: " <div *ngIf=\"portlet\" class=\"portlet\">\r\n  <div class=\"portlet-header\">{{ portlet.header }}</div>\r\n  <div class=\"portlet-content\">\r\n    {{ portlet.content }}\r\n    <!--iframe src=\"https://www.youtube.com/embed/QH2-TGUlwu4?autoplay=1\" width=\"100%\" height=\"100%\" frameborder=\"0\" allowfullscreen></iframe>\r\n    -->\r\n  </div>\r\n</div>",
                encapsulation: core.ViewEncapsulation.None,
                styles: ["@import url(https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css);body{font-family:Arial,Helvetica,sans-serif;min-width:320px}table{font-size:1em}.ui-draggable,.ui-droppable{background-position:top}.column{width:33%;float:left;padding-bottom:100px}.portlet{margin:0 1em 1em 0;padding:.3em}.portlet-header{padding:.2em .3em;margin-bottom:.5em;position:relative}.portlet-toggle{position:absolute;top:50%;right:0;margin-top:-8px}.portlet-content{padding:.4em}.portlet-placeholder{border:1px dotted #000;margin:0 1em 1em 0;height:50px}"]
            }),
            __metadata("design:paramtypes", [])
        ], PortletComponent);
        return PortletComponent;
    }());

    var PortletsGroupComponent = /** @class */ (function () {
        function PortletsGroupComponent() {
        }
        __decorate([
            core.Input(),
            __metadata("design:type", rxjs.Observable)
        ], PortletsGroupComponent.prototype, "data", void 0);
        PortletsGroupComponent = __decorate([
            core.Component({
                selector: 'app-portlets-group',
                template: "<div *ngFor=\"let column of (data | async)?.columns\" class=\"column\">\r\n  <div *ngFor=\"let portlet of column.portlets\">\r\n    <app-portlet [portlet]=\"portlet\"></app-portlet>\r\n  </div>\r\n</div>",
                encapsulation: core.ViewEncapsulation.None,
                styles: ["@import url(https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css);body{font-family:Arial,Helvetica,sans-serif;min-width:320px}table{font-size:1em}.ui-draggable,.ui-droppable{background-position:top}.column{width:33%;float:left;padding-bottom:100px}.portlet{margin:0 1em 1em 0;padding:.3em}.portlet-header{padding:.2em .3em;margin-bottom:.5em;position:relative}.portlet-toggle{position:absolute;top:50%;right:0;margin-top:-8px}.portlet-content{padding:.4em}.portlet-placeholder{border:1px dotted #000;margin:0 1em 1em 0;height:50px}"]
            }),
            __metadata("design:paramtypes", [])
        ], PortletsGroupComponent);
        return PortletsGroupComponent;
    }());

    var ReturnJsonArrayService = /** @class */ (function () {
        function ReturnJsonArrayService(http) {
            this.http = http;
        }
        ReturnJsonArrayService.prototype.getScreen = function (url) {
            return this.http.get(url)
                .pipe(operators.catchError(this.handleError('getScreen', [])));
        };
        /**
         * Handle Http operation that failed.
         * Let the app continue.
         * @param operation - name of the operation that failed
         * @param result - optional value to return as the observable result
         */
        ReturnJsonArrayService.prototype.handleError = function (operation, result) {
            if (operation === void 0) { operation = 'operation'; }
            return function (error) {
                // TODO: send the error to remote logging infrastructure
                console.error(error); // log to console instead
                // Let the app keep running by returning an empty result.
                return rxjs.of(result);
            };
        };
        ReturnJsonArrayService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        ReturnJsonArrayService.ɵprov = core["defineInjectable"]({ factory: function ReturnJsonArrayService_Factory() { return new ReturnJsonArrayService(core["inject"](http.HttpClient)); }, token: ReturnJsonArrayService, providedIn: "root" });
        ReturnJsonArrayService = __decorate([
            core.Injectable({
                providedIn: 'root'
            }),
            __metadata("design:paramtypes", [http.HttpClient])
        ], ReturnJsonArrayService);
        return ReturnJsonArrayService;
    }());

    var $ = $_;
    require('jquery-ui');
    require('jquery-ui/ui/widgets/sortable');
    //require('jquery-ui/ui/disable-selection');
    /* opcio mes nova */
    //declare var jQuery: any;
    var LoadPortletsComponent = /** @class */ (function () {
        //@Output() notify: EventEmitter<any> = new EventEmitter<any>();
        function LoadPortletsComponent(service) {
            this.service = service;
            this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js');
            this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js');
            this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery-sortable/0.9.13/jquery-sortable-min.js');
            //this.loadScript('node_modules/app-draggable-portlets-template/assets/js/disable-selection.js');
        }
        LoadPortletsComponent.prototype.loadScript = function (url) {
            console.log("preparing to load...");
            var node = document.createElement('script');
            node.src = url;
            node.type = "text/javascript";
            node.async = true;
            node.charset = "utf-8";
            document.head.appendChild(node);
        };
        LoadPortletsComponent.prototype.ngOnInit = function () {
            var _this = this;
            console.log(this.configFile);
            if (this.configFile) {
                this.loadFile(this.configFile);
                setTimeout(function () {
                    _this.loadJQuery();
                }, 300);
            }
        };
        LoadPortletsComponent.prototype.loadJQuery = function () {
            this.data.subscribe(function (val) {
                var columnsCount = val.columnsCount;
                if (columnsCount <= 0) {
                    columnsCount = 1;
                }
                var width = ((1 / columnsCount) * 100);
                $(".column").width(width + "%");
            });
            $(".portlet")
                .addClass("ui-widget ui-widget-content ui-helper-clearfix ui-corner-all")
                .find(".portlet-header")
                .addClass("ui-widget-header ui-corner-all")
                .prepend("<span class='ui-icon ui-icon-minusthick portlet-toggle'></span>");
            $(".portlet-toggle").on("click", function () {
                var icon = $(this);
                icon.toggleClass("ui-icon-minusthick ui-icon-plusthick");
                icon.closest(".portlet").find(".portlet-content").toggle();
            });
            $(".column").sortable({
                connectWith: ".column",
                handle: ".portlet-header",
                cancel: ".portlet-toggle",
                placeholder: "portlet-placeholder ui-corner-all"
            });
        };
        LoadPortletsComponent.prototype.loadFile = function (configFile) {
            this.data = this.service.getScreen(configFile);
            this.data.subscribe(function (val) { return console.log(val); });
        };
        LoadPortletsComponent.ctorParameters = function () { return [
            { type: ReturnJsonArrayService }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], LoadPortletsComponent.prototype, "configFile", void 0);
        LoadPortletsComponent = __decorate([
            core.Component({
                selector: 'app-load-portlets',
                template: "<!--<div>\n  <ul>\n      <li>Load the file for change the portlets options <input type=\"file\" (change)=\"onChange($event)\"/></li>\n      <li>Example json file <a href=\"./assets/json/data.json\" target=\"_blank\">download here</a></li>\n  </ul>\n</div>\n\n<h3>Portlets</h3>-->\n<app-portlets-group [(data)]=\"data\"></app-portlets-group>",
                providers: [ReturnJsonArrayService],
                encapsulation: core.ViewEncapsulation.None,
                styles: ["@import url(https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css);body{font-family:Arial,Helvetica,sans-serif;min-width:320px}table{font-size:1em}.ui-draggable,.ui-droppable{background-position:top}.column{width:33%;float:left;padding-bottom:100px}.portlet{margin:0 1em 1em 0;padding:.3em}.portlet-header{padding:.2em .3em;margin-bottom:.5em;position:relative}.portlet-toggle{position:absolute;top:50%;right:0;margin-top:-8px}.portlet-content{padding:.4em}.portlet-placeholder{border:1px dotted #000;margin:0 1em 1em 0;height:50px}"]
            }),
            __metadata("design:paramtypes", [ReturnJsonArrayService])
        ], LoadPortletsComponent);
        return LoadPortletsComponent;
    }());

    var AppDraggablePortletsTemplateModule = /** @class */ (function () {
        function AppDraggablePortletsTemplateModule() {
        }
        AppDraggablePortletsTemplateModule = __decorate([
            core.NgModule({
                declarations: [
                    AppDraggablePortletsTemplateComponent,
                    PortletComponent,
                    PortletsGroupComponent,
                    LoadPortletsComponent
                ],
                imports: [
                    platformBrowser.BrowserModule,
                    http.HttpClientModule
                ],
                providers: [ReturnJsonArrayService],
                exports: [
                    AppDraggablePortletsTemplateComponent,
                    PortletComponent,
                    PortletsGroupComponent,
                    LoadPortletsComponent
                ]
            })
        ], AppDraggablePortletsTemplateModule);
        return AppDraggablePortletsTemplateModule;
    }());

    var Column = /** @class */ (function () {
        function Column() {
        }
        return Column;
    }());

    var Data = /** @class */ (function () {
        function Data() {
        }
        return Data;
    }());

    var Portlet = /** @class */ (function () {
        function Portlet() {
        }
        return Portlet;
    }());

    exports.AppDraggablePortletsTemplateComponent = AppDraggablePortletsTemplateComponent;
    exports.AppDraggablePortletsTemplateModule = AppDraggablePortletsTemplateModule;
    exports.AppDraggablePortletsTemplateService = AppDraggablePortletsTemplateService;
    exports.Column = Column;
    exports.Data = Data;
    exports.LoadPortletsComponent = LoadPortletsComponent;
    exports.Portlet = Portlet;
    exports.PortletComponent = PortletComponent;
    exports.PortletsGroupComponent = PortletsGroupComponent;
    exports.ReturnJsonArrayService = ReturnJsonArrayService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=app-draggable-portlets-template.umd.js.map
