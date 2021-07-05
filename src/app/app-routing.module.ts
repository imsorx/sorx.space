import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { TimelineComponent } from './components/timeline/timeline.component';

const routes: Routes = [
  { path: '', component: AboutComponent, data: { title: 'About' } },
  { path: 'timeline', component: TimelineComponent, data: { title: 'Timeline' } },
  { path: 'resources', component: ResourcesComponent, data: { title: 'Resources' } },
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
