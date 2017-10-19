"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var http_1 = require("@angular/http");
var classes_1 = require("./classes");
var of_1 = require("rxjs/Observable/of");
var headers = new http_1.Headers({ 'Access-Control-Allow-Origin': '*' });
var options = new http_1.RequestOptions({ headers: headers });
var MainService = (function () {
    function MainService(http) {
        this.http = http;
        this.location_url = "http://localhost:65091/api/location";
        this.room_url = "http://localhost:65091/api/room?locationID=";
    }
    MainService.prototype.getAllLocations = function () {
        return this.http.get(this.location_url, options).map(function (result) { return result.json(); });
    };
    MainService.prototype.getAllRooms = function (locationid) {
        return this.http.get(this.room_url + locationid)
            .map(function (result) { return result.json(); });
    };
    MainService.prototype.getDuration = function () {
        return of_1.of(classes_1.DurationList);
    };
    return MainService;
}());
MainService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], MainService);
exports.MainService = MainService;
//# sourceMappingURL=main.service.js.map