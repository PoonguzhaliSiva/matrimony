import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { MainComponent } from './main/main.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { TourMatMenuModule } from 'ngx-tour-md-menu';
import {OverlayModule} from '@angular/cdk/overlay';
import { ProfileOverlayComponent } from './profile-overlay/profile-overlay.component';
import { NgxSpinnerModule } from "ngx-spinner";



@NgModule({
  declarations: [
    ViewProfileComponent,
    MainComponent,
    ProfileOverlayComponent
  ],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    MatCardModule,
    MatIconModule,
    OverlayModule,
    MatButtonModule,
    TourMatMenuModule,
    // ToastrModule,
    // ToastrService
    NgxSpinnerModule
  ]
})
export class UserProfileModule { }
