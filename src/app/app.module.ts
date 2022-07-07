import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentExampleComponent } from './component-example/component-example.component';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { DependencyinjectionServicesExampleComponent } from './dependencyinjection-services-example/dependencyinjection-services-example.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ComponentExampleComponent,
    DirectiveExampleComponent,
    PipeExampleComponent,
    DependencyinjectionServicesExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
