import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloworldComponent } from './components/helloworld/helloworld.component';
import { UseritemComponent } from './components/useritem/useritem.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { ArticleComponent } from './components/article/article.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeroService } from './services/hero.service';
import {MockHeroService} from './services/mock-hero.service';
import {LoggerService} from './services/logger.service';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app.routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginService} from './services/login.service';


@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponent,
    UseritemComponent,
    UserlistComponent,
    ArticleComponent,
    HeroComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
   ReactiveFormsModule,
   AppRoutingModule,
    FormsModule,

  ],
  providers: [{
    provide: HeroService, useClass: MockHeroService
  },
    {
      provide: LoggerService,
      useFactory: () => {
        return new LoggerService(true);
      }},
    LoginService

      ],
  bootstrap: [AppComponent]
})
export class AppModule { }
