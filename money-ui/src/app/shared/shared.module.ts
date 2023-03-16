import { MessageModule } from 'primeng/message';
import { MessageCustomComponent } from './message-custom/message-custom.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    MessageCustomComponent,
  ],
  imports: [
    CommonModule,
    MessageModule
  ],
  exports:[
    MessageCustomComponent,
  ]
})
export class SharedModule { }
