import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamelCaseToTitlePipe } from './pipes/camel-case-to-title.pipe';
import { RowHighlightDirective } from './directives/row-highlight.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [CamelCaseToTitlePipe, RowHighlightDirective],
  exports: [CamelCaseToTitlePipe, RowHighlightDirective],
})
export class SharedModule {}
