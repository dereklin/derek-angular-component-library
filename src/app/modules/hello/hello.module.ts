import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloService } from './hello.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    HelloService
  ]
})
export class HelloModule { }
