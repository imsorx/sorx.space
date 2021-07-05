import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { ImageComponent } from './image/image.component';



@NgModule({
  declarations: [
    LoaderComponent,
    ImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    ImageComponent
  ]
})
export class SharedModule { }
