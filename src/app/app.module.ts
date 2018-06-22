import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { SelectOptionFieldComponent } from './components/form/select-option-field/select-option-field.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { SchedulePlannerComponent } from './components/schedule-planner/schedule-planner.component';
import { ChipListComponent } from './components/form/chip-list/chip-list.component';
import { SelectionListComponent } from './components/form/selection-list/selection-list.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';


import {CareersService} from './services/careers.service';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    SelectOptionFieldComponent,
    SchedulePlannerComponent,
    ChipListComponent,
    SelectionListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatTableModule,
    MatListModule,
    MatDividerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatChipsModule,
    MatIconModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ],
  providers: [CareersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
