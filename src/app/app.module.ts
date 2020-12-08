import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './account/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './account/admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './account/auth/auth.component';
import { RegisterComponent } from './account/register/register.component';
import { AccountRoutingModule } from './account/account-routing.module';
import { DashboardComponent } from './account/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
// import { AgmCoreModule } from '@agm/core';
// start of material libraries
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { NavigationComponent } from './account/navigation/navigation.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';
// end of material libraries

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    AuthComponent,
    RegisterComponent,
    DashboardComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AccountRoutingModule,
    MatButtonModule,
    MatSidenavModule,
    MatGridListModule,
    LayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    FlexLayoutModule,
    HttpClientModule,
    MatTableModule,
    CommonModule
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyAIxId1YUiCgLGYijjo4Uk3b5tiauweIvY',
    //   libraries: ['geometry', 'places'],
    //   language: 'en',
    // }),    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
