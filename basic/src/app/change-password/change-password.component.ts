import { Validators } from "@angular/forms";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { PasswordValidators } from "./password.validator";

@Component({
  selector: "change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.css"]
})
export class ChangePasswordComponent implements OnInit {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group(
      {
        oldPassword: [
          "",
          Validators.required,
          PasswordValidators.validOldPassword
        ],
        newPassword: ["", Validators.required],
        confirmPassword: ["", Validators.required]
      },
      {
        validator: PasswordValidators.passwordsShouldMatch
      }
    );
  }

  ngOnInit() {}

  get oldPassword() {
    return this.form.get("oldPassword");
  }
  get newPassword() {
    return this.form.get("newPassword");
  }
  get confirmPassword() {
    return this.form.get("confirmPassword");
  }
}
