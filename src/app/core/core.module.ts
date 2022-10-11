import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { PipeImage } from './pipe/pipe-image.pipe';
import { PokeListComponent } from './components/poke-list/poke-list.component';
import { NotifierModule, NotifierOptions } from 'angular-notifier';

const customNotifierOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'right',
      distance: 12,
    },
    vertical: {
      position: 'bottom',
      distance: 12,
      gap: 10,
    },
  },
};

@NgModule({
  declarations: [NavbarComponent, PipeImage, PokeListComponent],
  exports: [NavbarComponent, PipeImage, PokeListComponent],
  imports: [
    CommonModule,
    RouterModule,
    NotifierModule.withConfig(customNotifierOptions),
  ],
})
export class CoreModule {}
