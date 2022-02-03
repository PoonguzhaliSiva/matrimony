import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { debounceTime } from 'rxjs/operators';
import { swiperight, swipeleft, profile } from 'src/shared/index';
import { ToastrService } from 'ngx-toastr';
import { animate, keyframes, transition, trigger } from '@angular/animations';
import { TourService } from 'ngx-tour-core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { UserService } from 'src/shared/service/user.service';
import { FilePreviewOverlayService } from 'src/shared/service/file-preview-overlay.service';
import { FilePreviewOverlayRef } from 'src/shared/service/file-preview-overlay-ref';
import { NgxSpinnerService } from 'ngx-spinner';



@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss'],
  animations: [
    trigger('cardAnimator', [
      transition('* => swiperight', animate(750, keyframes(swiperight))),
      transition('* => swipeleft', animate(750, keyframes(swipeleft)))
    ])
  ]
})
export class ViewProfileComponent implements OnInit {
  profile: profile[] = [];
  i = 0;
  swiperState: string | any;
  eventText: string | any;
  interestedUser: any = [];
  notInterestedUser: any = [];
  shortListeduser: any = [];
  isAddButton = true;


  constructor(
    private previewDialog: FilePreviewOverlayService,
    private httpClient: HttpClient, private userService: UserService, private toastrService: ToastrService,
    private spinner: NgxSpinnerService
  ) {
  }



  ngOnInit(): void {
    let dialogRef: FilePreviewOverlayRef = this.previewDialog.open({
      image: ''
    });
    this.getUserList();
  }

  getUserList(): void {
    this.httpClient.get<any>('assets/userdetails.json')
      .pipe(
        debounceTime(2000))
      .subscribe((data: any) => {
        setTimeout(() => {
        }, 800);
        this.profile = data.user_details;
        console.log('thsi.profile', this.profile)
      });
    setTimeout(() => {
    }, 800);
  }

  startAnimation(value: any) {
  
      this.spinner.show();
    this.userService.checkSpinner(true);
    this.interestedUser;
    this.notInterestedUser;
    this.shortListeduser;
    if (!this.swiperState) {
      const duration = 800;
      this.i++;
      if (this.profile.length === this.i) {
        this.i = 0;
      }
      if (value === 'swipeleft') {
        this.toastrService.error('Not Interested', '', { timeOut: 800 });
        this.notInterestedUser.push([this.profile[this.i]]);
      } else if (value === 'swiperight') {
        this.toastrService.success('Interested', '', { timeOut: 800 });
        this.interestedUser.push([this.profile[this.i]]);
      } else {
        this.toastrService.warning('ShortListed', '', { timeOut: 800 });
        this.shortListeduser.push([this.profile[this.i]]);
      }
      const payload = {
        interested: this.interestedUser,
        notInterested: this.notInterestedUser,
        shortlisted: this.shortListeduser
      }
      this.userService.checkCountList(payload);
      this.swiperState = value;
    
        setTimeout(() => {
          this.spinner.hide();
        }, 1000);
    }
  }
  swipeOption(e: any) {
    this.swiperState = '';
  }

  leftSwipe(event: any) {
    this.startAnimation('swipeleft');
  }

  rightSwipe(event: any) {
    this.startAnimation('swiperight');

  }
  removeOverlay() {
    this.isAddButton = false;
  }
}
