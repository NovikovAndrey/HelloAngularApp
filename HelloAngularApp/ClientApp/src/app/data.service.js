var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
let DataService = /** @class */ (() => {
    let DataService = class DataService {
        constructor(http) {
            this.http = http;
            this.url = "/api/products";
        }
        getProducts() {
            return this.http.get(this.url);
        }
        getProduct(id) {
            return this.http.get(this.url + '/' + id);
        }
        createProduct(product) {
            return this.http.post(this.url, product);
        }
        updateProduct(product) {
            return this.http.put(this.url, product);
        }
        deleteProduct(id) {
            return this.http.delete(this.url + '/' + id);
        }
    };
    DataService = __decorate([
        Injectable()
    ], DataService);
    return DataService;
})();
export { DataService };
//# sourceMappingURL=data.service.js.map