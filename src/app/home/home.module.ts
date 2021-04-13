import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { TodoComponent } from './todo/todo.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [HomeComponent, TodoComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    DragDropModule,
  ],
  exports: [TodoComponent]
})
export class HomeModule {}
