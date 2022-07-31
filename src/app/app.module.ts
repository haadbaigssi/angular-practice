import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { ReactiveFormsModule, FormControlDirective } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { UserformComponent } from './userform/userform.component';
import { CustomisedInputComponent } from './shared/customised-input/customised-input.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    Child1Component,
    Child2Component,
    ParentComponent,
    UserformComponent,
    CustomisedInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
