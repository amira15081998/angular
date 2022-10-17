import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MemberFormComponent } from './member-form/member-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolsComponent } from './tools/tools.component';
import { ArticlesComponent } from './articles/articles.component';
import { EventsComponent } from './events/events.component';
import { AffectComponent } from './affect/affect.component';
import {MatSelectModule} from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FirebaseModule } from './Firebase.module';
import { LoginComponent } from './login/login.component';
import { ArticleForumlaireComponent } from './article-forumlaire/article-forumlaire.component';


@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    MemberFormComponent,
    ConfirmDialogComponent,
    LayoutComponent,
    DashboardComponent,
    ToolsComponent,
    ArticlesComponent,
    EventsComponent,
    AffectComponent,
    LoginComponent,
    ArticleForumlaireComponent
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    MatListModule,
    MatSidenavModule,
    MatDialogModule,
    AppRoutingModule,
    MatTableModule ,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    FlexLayoutModule,
    FirebaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
