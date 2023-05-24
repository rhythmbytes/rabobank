import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class Json2usersService {
    private http;
    JSON_URL: string;
    users: import("@angular/core").WritableSignal<never[]>;
    constructor(http: HttpClient);
    getUsers(): never[];
    static ɵfac: i0.ɵɵFactoryDeclaration<Json2usersService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<Json2usersService>;
}
