import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentExampleComponent } from './component-example/component-example.component';
import { DependencyinjectionServicesExampleComponent } from './dependencyinjection-services-example/dependencyinjection-services-example.component';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';

const routes: Routes = [
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'component',component:ComponentExampleComponent},
  {path:'directive',component:DirectiveExampleComponent},
  {path:'pipe',component:PipeExampleComponent},
  {path:'services',component:DependencyinjectionServicesExampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
