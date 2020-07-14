import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverviewComponent } from './overview/overview.component';
import { RecentActivityComponent } from './recent-activity/recent-activity.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { InputServiceService } from './services/input-service.service';
import { RecentActivityService } from './services/recent-activity.service';
import { HistoryComponent } from './history/history.component';
import { TransactionComponent } from './history/transaction/transaction.component';
@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    OverviewComponent,
    RecentActivityComponent,
    MenuComponent,
    HistoryComponent,
    TransactionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: RecentActivityComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'history/:id', component: TransactionComponent },
      { path: 'balances', component: RecentActivityComponent },
      { path: 'cards', component: RecentActivityComponent },
      { path: 'recipents', component: RecentActivityComponent },
      { path: 'raports', component: RecentActivityComponent },
      { path: 'settings', component: RecentActivityComponent },
      { path: 'help', component: RecentActivityComponent },
      { path: 'privacy', component: RecentActivityComponent },
    ]),
  ],
  providers: [RecentActivityService, InputServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
