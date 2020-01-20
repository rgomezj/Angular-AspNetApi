import { RouterModule, Routes } from '@angular/router';

// Component
import { EntriesComponent } from './app/entries/entries.component';
import { NewEntryComponent } from './app/new-entry/new-entry.component';
import { DeleteEntryComponent } from './app/delete-entry/delete-entry.component';
import { RegisterComponent } from './app/register/register.component';
import { NgModule } from '@angular/core';

// Routes
const routes: Routes = [
    { path: '', component: EntriesComponent },
    { path: 'entries', component: EntriesComponent },
    { path: 'new-entry', component: NewEntryComponent },
    { path: 'delete-entry/:id', component: DeleteEntryComponent },
    { path: 'register', component: RegisterComponent }
]

@NgModule ({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRouterModule {}
