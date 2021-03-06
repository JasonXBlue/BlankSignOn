import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  userProfile: any;
  userProfileForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.userProfileForm = this.formBuilder.group({
      firstName: new FormControl('', Validators.compose([Validators.required])),
      lastName: new FormControl('', Validators.compose([Validators.required])),
      dob: new FormControl('', Validators.compose([Validators.required])),
      homeAddress: new FormControl(
        '',
        Validators.compose([Validators.required])
      ),
      favoriteFood: new FormControl(
        '',
        Validators.compose([Validators.required])
      ),
      favoriteMovie: new FormControl(
        '',
        Validators.compose([Validators.required])
      ),
      favoriteArtist: new FormControl(
        '',
        Validators.compose([Validators.required])
      ),
      hobbies: new FormControl('', Validators.compose([Validators.required])),
    });
  }

  ngOnInit(): void {}

  submit() {
    this.userProfile = this.userProfileForm;
    console.log(this.userProfileForm.value);

    this.userProfileForm.get('firstName').disable();
    this.userProfileForm.get('lastName').disable();
    this.userProfileForm.get('dob').disable();
    this.userProfileForm.get('homeAddress').disable();
    this.userProfileForm.get('favoriteFood').disable();
    this.userProfileForm.get('favoriteMovie').disable();
    this.userProfileForm.get('favoriteArtist').disable();
    this.userProfileForm.get('hobbies').disable();

    // this.userProfileForm
    //   .get([
    //     'firstName',
    //     'lastName',
    //     'dob',
    //     'homeAddress',
    //     'favoriteFood',
    //     'favoriteMovie',
    //     'favoriteArtist',
    //     'hobbies',
    //   ])
    //   .disable();
  }
  editProfile() {
    this.userProfileForm.patchValue({
      firstName: 'Nancy',
      homeAddress: ' 123 Drew Street',
      favoriteFood: 'tacos',
      favoriteArtist: 'Metallica',
    });
  }
}
