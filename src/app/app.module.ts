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
import { CardsComponent } from './cards/cards.component';
import { CardComponent } from './card/card.component';
import { RecipientsComponent } from './recipients/recipients.component';
import { ListComponent } from './recipients/list/list.component';
import { BalancesComponent } from './balances/balances.component';
import { WeekChartComponent } from './balances/week-chart/week-chart.component';
import { TodayChartComponent } from './balances/today-chart/today-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    OverviewComponent,
    RecentActivityComponent,
    MenuComponent,
    HistoryComponent,
    TransactionComponent,
    CardsComponent,
    CardComponent,
    RecipientsComponent,
    ListComponent,
    BalancesComponent,
    WeekChartComponent,
    TodayChartComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: RecentActivityComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'history/:id', component: TransactionComponent },
      { path: 'balances', component: BalancesComponent },
      { path: 'cards', component: CardsComponent },
      { path: 'recipients', component: RecipientsComponent },
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
