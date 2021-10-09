import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { NotesComponent } from '../notes/components/notes/notes.component';

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

export class HomeRoutingModule {}
