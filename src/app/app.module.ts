import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
// start of material libraries
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
// import { MatAutocompleteModule } from '@angular/material/autocomplete';
// import { MatBadgeModule } from '@angular/material/badge';
// import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
// import { MatButtonToggleModule } from '@angular/material/button-toggle';
// import { MatCardModule } from '@angular/material/card';
// import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatChipsModule } from '@angular/material/chips';
// import { MatStepperModule } from '@angular/material/stepper';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatDividerModule } from '@angular/material/divider';
// import { MatExpansionModule } from '@angular/material/expansion';
 
// import { MatIconModule } from '@angular/material/icon';
// import { MatInputModule } from '@angular/material/input';
// import { MatListModule } from '@angular/material/list';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatProgressBarModule } from '@angular/material/progress-bar';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import { MatRadioModule } from '@angular/material/radio';
// import { MatSelectModule } from '@angular/material/select';
// import { MatSliderModule } from '@angular/material/slider';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { MatSortModule } from '@angular/material/sort';
// import { MatTableModule } from '@angular/material/table';
// import { MatTabsModule } from '@angular/material/tabs';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatTooltipModule } from '@angular/material/tooltip';
// import { MatTreeModule } from '@angular/material/tree';
// import { OverlayModule } from '@angular/cdk/overlay';

// end of material libraries

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    AuthComponent,
    RegisterComponent,
    DashboardComponent,
    NavComponent
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
    MatListModule
    //  OverlayModule,
    //   MatTreeModule, 
    //   MatTooltipModule, 
    //   MatToolbarModule, 
    //   MatTabsModule, 
    //   MatTableModule,
    //   MatSortModule,
    //   MatSnackBarModule,
    //   MatSlideToggleModule,
    //   MatSliderModule,
    //   MatSelectModule,
    //   MatRadioModule,
    //   MatProgressSpinnerModule,
    //   MatProgressBarModule,
    //   MatPaginatorModule,
    //   MatAutocompleteModule,
    //   MatBadgeModule,
    //   MatBottomSheetModule,
    //   MatButtonToggleModule,
    //   MatCardModule,
    //   MatCheckboxModule,
    //   MatChipsModule,
    //   MatStepperModule,
    //   MatDatepickerModule,
    //   MatDialogModule,
    //   MatDividerModule,
    //   MatExpansionModule,
    //   MatGridListModule,
    //   MatIconModule,
    //   MatInputModule,
    //   MatListModule,
    //   MatMenuModule,
    //   MatNativeDateModule,
    //   MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
