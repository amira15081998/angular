import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffectComponent } from './affect/affect.component';
import { ArticleForumlaireComponent } from './article-forumlaire/article-forumlaire.component';
//import { AffectComponent } from './affect/affect.component';
import { ArticlesComponent } from './articles/articles.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { MembersComponent } from './members/members.component';
import { ToolsComponent } from './tools/tools.component';

const routes: Routes = [
  {
    path:'login',
    pathMatch:'full',
    component: LoginComponent
  },
  {
    path: 'members',
    pathMatch: 'full',
    component: MembersComponent
  },
  {
    path:'creat',
    pathMatch:'full',
    component:MemberFormComponent
  },
  {
    path:'members/:id/edit',
    pathMatch:'full',
    component:MemberFormComponent
  },
  {
    path:'articles',
    pathMatch:'full',
    component:ArticlesComponent
  },
  {
    path:'create',
    pathMatch:'full',
    component:ArticleForumlaireComponent
  },
  {
    path:':id/edite',
    pathMatch:'full',
    component:ArticleForumlaireComponent

  },
  {
    path: ':id/affect',
    pathMatch: 'full',
    component: AffectComponent

  },
  {
    path:'dashboard',
    pathMatch:'full',
    component:DashboardComponent
  },
  {
    path:'tools',
    pathMatch:'full',
    component:ToolsComponent
  },

  {
    path:'Events',
    pathMatch:'full',
    component:EventsComponent
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'login'
  },
  {
    path:'**',
    pathMatch:'full',
    redirectTo:'members'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
