import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FilePreviewOverlayRef } from 'src/shared/service/file-preview-overlay-ref';
import { FilePreviewOverlayService } from 'src/shared/service/file-preview-overlay.service';
import { FILE_PREVIEW_DIALOG_DATA } from 'src/shared/service/file-preview-overlay.tokens';

@Component({
  selector: 'app-profile-overlay',
  templateUrl: './profile-overlay.component.html',
  styleUrls: ['./profile-overlay.component.scss']
})
export class ProfileOverlayComponent implements OnInit {

  constructor(
    public dialogRef: FilePreviewOverlayRef,
    @Inject(FILE_PREVIEW_DIALOG_DATA) public image: any
  ) { }

  ngOnInit(): void {
  }
  close(){
    this.dialogRef.close();
  }
}
