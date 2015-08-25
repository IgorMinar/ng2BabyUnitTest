var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var heroDataService_1 = require('heroDataService');
var AppComponent = (function () {
    function AppComponent(_heroDataService) {
        this._heroDataService = _heroDataService;
        this.currentHeroName = 'Igor';
    }
    Object.defineProperty(AppComponent.prototype, "currentHero", {
        get: function () {
            return this._heroDataService.getOrCreateHero(this.currentHeroName);
        },
        enumerable: true,
        configurable: true
    });
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app'
        }),
        angular2_1.View({
            template: "<h1 id=\"output\">{{currentHero.name}} is my current hero!</h1>\n     <ul>\n       <li>id: {{currentHero.id}}</li>\n       <li>name: {{currentHero.name}}</li>\n     </ul>\n    "
        }), 
        __metadata('design:paramtypes', [heroDataService_1.HeroDataService])
    ], AppComponent);
    return AppComponent;
})();
// bootstrap(AppComponent); // works if using component DI registration
angular2_1.bootstrap(AppComponent, [heroDataService_1.HeroDataService]); // global DI registration
//# sourceMappingURL=app.js.map