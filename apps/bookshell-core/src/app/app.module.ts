import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { UiModule } from '@bookshellw/ui';
import {DividerModule} from 'primeng/divider';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    UiModule,
    RouterModule.forRoot(
      [
        {
          path: 'mining-book',
          loadChildren: () =>
            import('mining-book/Module').then((m) => m.RemoteEntryModule),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
    DividerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
