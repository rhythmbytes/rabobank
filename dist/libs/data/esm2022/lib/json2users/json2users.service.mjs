import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
class Json2usersService {
    constructor(http) {
        this.http = http;
        this.JSON_URL = '../../assets/users.json';
        this.users = signal([]);
        this.http.get(this.JSON_URL).subscribe({
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            next: (data) => {
                this.users.set(data?.users);
            },
            error: () => {
                this.users.set([]);
            },
        });
    }
    getUsers() {
        return this.users();
    }
    static { this.ɵfac = function Json2usersService_Factory(t) { return new (t || Json2usersService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: Json2usersService, factory: Json2usersService.ɵfac, providedIn: 'root' }); }
}
export { Json2usersService };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Json2usersService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbjJ1c2Vycy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9kYXRhL3NyYy9saWIvanNvbjJ1c2Vycy9qc29uMnVzZXJzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFFbEQsTUFHYSxpQkFBaUI7SUFJNUIsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUhwQyxhQUFRLEdBQUcseUJBQXlCLENBQUM7UUFDckMsVUFBSyxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUdqQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQ3JDLDhEQUE4RDtZQUM5RCxJQUFJLEVBQUUsQ0FBQyxJQUFTLEVBQUUsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzlCLENBQUM7WUFDRCxLQUFLLEVBQUUsR0FBRyxFQUFFO2dCQUNWLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3JCLENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3RCLENBQUM7a0ZBbEJVLGlCQUFpQjt1RUFBakIsaUJBQWlCLFdBQWpCLGlCQUFpQixtQkFGaEIsTUFBTTs7U0FFUCxpQkFBaUI7dUZBQWpCLGlCQUFpQjtjQUg3QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBzaWduYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBKc29uMnVzZXJzU2VydmljZSB7XG4gIEpTT05fVVJMID0gJy4uLy4uL2Fzc2V0cy91c2Vycy5qc29uJztcbiAgdXNlcnMgPSBzaWduYWwoW10pO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xuICAgIHRoaXMuaHR0cC5nZXQodGhpcy5KU09OX1VSTCkuc3Vic2NyaWJlKHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICBuZXh0OiAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMudXNlcnMuc2V0KGRhdGE/LnVzZXJzKTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKCkgPT4ge1xuICAgICAgICB0aGlzLnVzZXJzLnNldChbXSk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0VXNlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudXNlcnMoKTtcbiAgfVxufVxuIl19