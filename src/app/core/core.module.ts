import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [NavbarComponent, NotFoundComponent],
  exports: [NavbarComponent, NotFoundComponent],
  imports: [CommonModule, AppRoutingModule],
})
export class CoreModule {}
