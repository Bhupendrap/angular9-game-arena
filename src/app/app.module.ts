import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppComponent } from './app.component';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CdkColumnDef } from '@angular/cdk/table';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule
  ],
  providers: [AppComponent, CdkColumnDef],
  bootstrap: [AppComponent]
})
export class AppModule { }
