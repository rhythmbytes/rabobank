import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamelCaseToTitlePipe } from './pipes/camel-case-to-title.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [CamelCaseToTitlePipe],
  exports: [CamelCaseToTitlePipe],
})
export class SharedModule {}
