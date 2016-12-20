import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HiloComponent } from './hilo.component';
import { HiloService } from './hilo.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HiloComponent],
  bootstrap: [AppComponent],
  providers: [HiloService]
})
export class AppModule { }
