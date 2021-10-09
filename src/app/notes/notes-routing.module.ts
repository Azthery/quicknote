import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { NotesComponent } from './components/notes/notes.component';

const routes: Route[] = [{
    path: '',
    component: NotesComponent
}];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class NotesRoutingModule {}
