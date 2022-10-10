import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CustomPipePipe } from './shared/pipes/custom-pipe.pipe';
import { PokeModule } from './pokemon/poke.module';
import { NotifierModule } from 'angular-notifier';

@NgModule({
  declarations: [AppComponent, CustomPipePipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    PokeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
