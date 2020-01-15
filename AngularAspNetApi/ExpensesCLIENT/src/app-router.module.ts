import { RouterModule, Routes } from '@angular/router';

// Component
import { EntriesComponent } from './app/entries/entries.component';
import { NewEntryComponent } from './app/new-entry/new-entry.component';
import { NgModule } from '@angular/core';

// Routes
const routes: Routes = [
    { path: '', component: EntriesComponent },
    { path: 'entries', component: EntriesComponent },
    { path: 'new-entry', component: NewEntryComponent }
]

@NgModule ({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRouterModule {}
