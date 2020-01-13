import { RouterModule, Routes } from '@angular/router';

// Component
import { EntriesComponent } from './app/entries/entries.component';
import { NgModule } from '@angular/core';

// Routes
const routes: Routes = [
    { path: '', component: EntriesComponent },
    { path: 'entries', component: EntriesComponent }
]

@NgModule ({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRouterModule {}
