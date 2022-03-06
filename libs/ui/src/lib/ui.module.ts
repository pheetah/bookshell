import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {ButtonModule} from 'primeng/button';
import { RouterModule } from '@angular/router';
import {SidebarModule} from 'primeng/sidebar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PanelMenuModule} from 'primeng/panelmenu';
import {ToolbarModule} from 'primeng/toolbar';

@NgModule({
  imports: [
    CommonModule,
    SidebarModule,
    ButtonModule,
    BrowserAnimationsModule,
    PanelMenuModule,
    ToolbarModule,
    RouterModule.forChild([])
  ],
  declarations: [
    HomeComponent,
  ],
  exports: [
    HomeComponent
  ],
})
export class UiModule {}
