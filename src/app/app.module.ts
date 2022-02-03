import { NgModule } from '@angular/core';
import { BrowserModule, HammerGestureConfig, HammerModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { UserProfileModule } from './user-profile/user-profile.module';
import { TourMatMenuModule } from 'ngx-tour-md-menu';
import { FilePreviewOverlayService } from 'src/shared/service/file-preview-overlay.service';
import { NgxSpinnerModule } from "ngx-spinner";


export class MyHammerConfig extends HammerGestureConfig {
  override overrides = <any>{
  swipe: { direction: Hammer.DIRECTION_ALL },
  };
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    ToastrModule.forRoot(),
    UserProfileModule,
    TourMatMenuModule.forRoot(),
    HammerModule,
    NgxSpinnerModule
  ],
  providers: [
    FilePreviewOverlayService,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
