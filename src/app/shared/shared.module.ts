import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricePipe } from './pipes/price.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [PricePipe, NavBarComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule],
  exports: [PricePipe, NavBarComponent, HeaderComponent, FooterComponent],
})
export class SharedModule {}
