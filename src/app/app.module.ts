import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverviewComponent } from './overview/overview.component';
import { RecentActivityComponent } from './recent-activity/recent-activity.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    OverviewComponent,
    RecentActivityComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: RecentActivityComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'balances', component: HistoryComponent },
      { path: 'cards', component: HistoryComponent },
      { path: 'recipents', component: HistoryComponent },
      { path: 'raports', component: HistoryComponent },
      { path: 'settings', component: HistoryComponent },
      { path: 'help', component: HistoryComponent },
      { path: 'privacy', component: HistoryComponent },
    ]),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
