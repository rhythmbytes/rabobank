import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
class CamelCaseToTitlePipe {
    transform(value) {
        const camelCase = value.replace(/([a-z])([A-Z])/g, '$1 $2').split(' ');
        let flat = '';
        camelCase.forEach((word) => {
            flat = flat + word.charAt(0).toUpperCase() + word.slice(1) + ' ';
        });
        return flat.trim();
    }
    static { this.ɵfac = function CamelCaseToTitlePipe_Factory(t) { return new (t || CamelCaseToTitlePipe)(); }; }
    static { this.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "camelCaseToTitle", type: CamelCaseToTitlePipe, pure: true }); }
}
export { CamelCaseToTitlePipe };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CamelCaseToTitlePipe, [{
        type: Pipe,
        args: [{
                name: 'camelCaseToTitle',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtZWwtY2FzZS10by10aXRsZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9zaGFyZWQvc3JjL2xpYi9waXBlcy9jYW1lbC1jYXNlLXRvLXRpdGxlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBRXBELE1BR2Esb0JBQW9CO0lBQy9CLFNBQVMsQ0FBQyxLQUFhO1FBQ3JCLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXZFLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUVkLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUN6QixJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDbkUsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDO3FGQVZVLG9CQUFvQjswRkFBcEIsb0JBQW9COztTQUFwQixvQkFBb0I7dUZBQXBCLG9CQUFvQjtjQUhoQyxJQUFJO2VBQUM7Z0JBQ0osSUFBSSxFQUFFLGtCQUFrQjthQUN6QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnY2FtZWxDYXNlVG9UaXRsZScsXG59KVxuZXhwb3J0IGNsYXNzIENhbWVsQ2FzZVRvVGl0bGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nKTogdW5rbm93biB7XG4gICAgY29uc3QgY2FtZWxDYXNlID0gdmFsdWUucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgJyQxICQyJykuc3BsaXQoJyAnKTtcblxuICAgIGxldCBmbGF0ID0gJyc7XG5cbiAgICBjYW1lbENhc2UuZm9yRWFjaCgod29yZCkgPT4ge1xuICAgICAgZmxhdCA9IGZsYXQgKyB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKSArICcgJztcbiAgICB9KTtcbiAgICByZXR1cm4gZmxhdC50cmltKCk7XG4gIH1cbn1cbiJdfQ==