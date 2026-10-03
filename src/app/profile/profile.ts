import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';

import { Profile as ProfileService } from '../services/profile';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit {

  profile: any = null;

  loading = true;

  @Output() backToDashboardClicked = new EventEmitter<void>();

  constructor(
    private profileService: ProfileService,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit() {

    this.profileService.getProfile().subscribe({

      next: (response: any) => {

        console.log('My profile:', response);

        this.profile = response;

        this.loading = false;

        this.cdr.detectChanges();

      },

      error: (error) => {

        console.log('Get profile error:', error);

        this.loading = false;

        this.cdr.detectChanges();

      }

    });

  }

  backToDashboard() {

    this.backToDashboardClicked.emit();

  }

}
