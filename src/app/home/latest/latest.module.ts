import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LatestPageRoutingModule } from './latest-routing.module';

import { LatestPage } from './latest.page';
import { SwiperModule } from 'swiper/angular';
import { MovieEffects } from 'src/app/ngrx/movie.effects';
import { USER_PROVIDED_EFFECTS } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LatestPageRoutingModule,
    SwiperModule
  ],
  declarations: [LatestPage],
  providers: [
    MovieEffects,
    {
      provide: USER_PROVIDED_EFFECTS,
      multi: true,
      useValue: [MovieEffects],
    },
  ]
})
export class LatestPageModule {}
