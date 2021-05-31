// @ts-ignore

import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {AngularFireAuth} from '@angular/fire/auth';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit, OnDestroy{
  public UserManagementActions: any;
  public mode: string;
  public actionCode: string;
  public actionCodeChecked: boolean;
  public confirmPassword: string;
  public newPassword: string;
  public oldPassword: string;
  public ngUnsubscribe: Subject<any> = new Subject<any>();
  public oobCode: string;

  constructor( private router: Router,
               private activatedRoute: ActivatedRoute,
               private authService: AngularFireAuth) { }

  ngOnInit() {
    this.activatedRoute.queryParams
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(params => {
        if (!params) { this.router.navigate(['/home']); }

        this.mode = params['mode'];
        this.actionCode = params['oodCode'];

        switch (this.mode) {
          case this.UserManagementActions.resetPassword: {
            // Verify the password reset code is valid.
            this.authService.verifyPasswordResetCode(String(this.actionCode)).then(email => {
              this.actionCodeChecked = true;
            }).catch(e => {
              // Invalid or expired action code. Ask user to try to reset the password
              // again.
              alert(e);
              this.router.navigate(['/anmelden']);
            });
          }                                              break;
          case this.UserManagementActions.recoverEmail: {

          }                                             break;
          case this.UserManagementActions.verifyEmail: {

          }                                            break;
          default: {
            console.log('query parameters are missing');
            this.router.navigate(['/anmelden']);
          }
        }
      });

  }

  ngOnDestroy() {
    // End all subscriptions listening to ngUnsubscribe
    // to avoid memory leaks.
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  handleResetPassword() {
    if (this.newPassword !== this.confirmPassword) {
      alert('New Password and Confirm Password do not match');
      return;
  }
    this.authService.confirmPasswordReset(
      this.actionCode,
      this.newPassword
    ).then(resp => {
      alert('New password has been saved');
      this.router.navigate(['/anmelden']); }).catch(e => {
    });
  }}
