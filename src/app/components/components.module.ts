import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { CarouselComponent } from './carousel/carousel.component';
import { PipesModule } from '../pipes/pipes.module';
import { PosterComponent } from './poster/poster.component';
import { DetailComponent } from './detail/detail.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  entryComponents:[
    DetailComponent
  ],
  declarations: [
    HeaderComponent,
    CarouselComponent,
    PosterComponent,
    DetailComponent
  ],
  exports:[
    HeaderComponent,
    CarouselComponent,
    PosterComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
    TranslateModule
  ]
})
export class ComponentsModule { }
