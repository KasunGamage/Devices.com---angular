import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [SearchFilterPipe],
  exports: [SearchFilterPipe],
  imports: [
    CommonModule,
    // NgBootstrapModule,
  ],
})
export class SharedModule {}
