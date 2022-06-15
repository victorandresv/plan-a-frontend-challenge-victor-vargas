import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { SwiperModule } from 'swiper/angular';

import { HomePageRoutingModule } from './home-routing.module';
import { USER_PROVIDED_EFFECTS } from '@ngrx/effects';
import { MovieEffects } from '../ngrx/movie.effects';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SwiperModule
  ],
  declarations: [HomePage],
  providers: [
    MovieEffects,
    {
      provide: USER_PROVIDED_EFFECTS,
      multi: true,
      useValue: [MovieEffects],
    },
  ]
})
export class HomePageModule {}
