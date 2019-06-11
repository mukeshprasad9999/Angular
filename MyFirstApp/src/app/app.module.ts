import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StructuralComponent } from './structural/structural.component';
import { PipeComponent } from './pipe/pipe.component';
import { ReversePipe } from './reverse.pipe';
import { DatabindingComponent } from './databinding/databinding.component';
import { DsecriptionComponent } from './dsecription/dsecription.component';
import { MymdirectiveDirective } from './mymdirective.directive';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { QuerystringComponent } from './querystring/querystring.component';
import { TempletedrivenComponent } from './templetedriven/templetedriven.component';
import { ModeldrivenComponent } from './modeldriven/modeldriven.component';
import { TemplatedrivennewComponent } from './templatedrivennew/templatedrivennew.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StructuralComponent,
    PipeComponent,
    ReversePipe,
    DatabindingComponent,
    DsecriptionComponent,
    MymdirectiveDirective,
    PagenotfoundComponent,
    QuerystringComponent,
    TempletedrivenComponent,
    ModeldrivenComponent,
    TemplatedrivennewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:"",component:DsecriptionComponent},
      {path:"databinding",component:DatabindingComponent},
      {path:"structural",component:StructuralComponent},
      {path:"pipe",component:PipeComponent},
      {path:"about/:id",component:QuerystringComponent},
      {path:"templetedriven",component:TempletedrivenComponent},
      {path:"templetedrivennew",component:TemplatedrivennewComponent},
      {path:"modeldriven",component:ModeldrivenComponent},
      {path:"**",component:PagenotfoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent,HeaderComponent,FooterComponent]
})
export class AppModule { }
