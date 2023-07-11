import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContentComponent } from './content/content.component';
import { TemplateTestComponent } from './template-test/template-test.component';
import { CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
// import { StoreModule } from '@ngrx/store';
// import { counterReducer } from './main/state/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavigationComponent,
    ContentComponent,
    TemplateTestComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerDashboardModule,
    // StoreModule.forRoot({counter: counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
