import { Routes } from '@angular/router';
import {OverviewComponent} from "./overview/overview.component";
import {ProjectComponent} from "./project/project.component";
import {WorkComponent} from "./work/work.component";
import {ImprintComponent} from "./imprint/imprint.component";
import {ContactComponent} from "./contact/contact.component";
import {CvComponent} from "./cv/cv.component";

export const routes: Routes = [
  { path: 'overview', 'title': 'Home', component: OverviewComponent},
  { path: 'project', 'title': 'Excel', component: ProjectComponent},
  { path: 'work', 'title': 'Statistik', component: WorkComponent},
  { path: 'imprint', 'title': 'Personen-Statistik', component: ImprintComponent},
  { path: 'contact', 'title': 'Bereichs-Statistik', component: ContactComponent},
  { path: 'cv', 'title': 'Kunden-Statistik', component: CvComponent},
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: '**', redirectTo: '/overview' }
];

