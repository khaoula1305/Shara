import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricePipe } from './pipes/price.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [PricePipe, NavBarComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, NgbCollapseModule, NgbModule],
  exports: [PricePipe, NavBarComponent, HeaderComponent, FooterComponent],
})
export class SharedModule {}
