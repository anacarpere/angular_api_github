import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/angular.material';
import { GithubUsersModule } from './github-users/github-users.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GithubUsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
