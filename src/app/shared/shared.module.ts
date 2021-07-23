import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { ImageComponent } from './image/image.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    LoaderComponent,
    ImageComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    ImageComponent,
    NotFoundComponent
  ]
})
export class SharedModule { }
