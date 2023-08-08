import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ],
  exports:[
    HeroComponent,
    ListComponent
  ]
})
export class HeroesModule { }
