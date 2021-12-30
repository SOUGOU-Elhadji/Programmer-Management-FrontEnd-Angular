import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProgrammerDetailsComponent } from './programmer-details/programmer-details.component';
import { ProgrammerListComponent } from './programmer-list/programmer-list.component';
import { ProgrammerUpdateComponent } from './programmer-update/programmer-update.component';
import { CreateProgrammerComponent } from './create-programmer/create-programmer.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgrammerDetailsComponent,
    ProgrammerListComponent,
    ProgrammerUpdateComponent,
    CreateProgrammerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
