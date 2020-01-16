import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EntriesComponent } from './entries/entries.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

// Services
import { EntryService } from './entry.service'
import { AppRouterModule } from 'src/app-router.module';
import { HttpClientModule } from '@angular/common/http';

// MaterialDesign
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatCardModule, MatSelectModule, MatToolbarModule, MatDialogModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { NewEntryComponent } from './new-entry/new-entry.component';

// Forms
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateEntryComponent } from './update-entry/update-entry.component'

@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent,
    FooterComponent,
    HeaderComponent,
    NewEntryComponent,
    UpdateEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule,
    // Material
    BrowserAnimationsModule, MatButtonModule, MatTableModule,
    MatInputModule, MatCardModule, MatSelectModule, MatToolbarModule, MatDialogModule,
    ReactiveFormsModule
  ],
  entryComponents: [UpdateEntryComponent],
  providers: [EntryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
