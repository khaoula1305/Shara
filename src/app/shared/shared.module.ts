import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { PricePipe } from './price.pipe';

@NgModule({
  declarations: [PricePipe],
  imports: [CommonModule, SharedRoutingModule],
  exports: [PricePipe],
})
export class SharedModule {}
