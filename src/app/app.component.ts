import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  // form!: FormGroup
  // constructor(
  //   private fb: FormBuilder
  // ) {}

  onSubmit(f: NgForm) {
    console.log(f);
  }

  getValue(f: any) {
    console.log(f);
  }

  // build() {
  //   this.form = this.fb.group({
  //       fname: [null, [Validators.required, Validators.minLength]]
  //   })
  // }
}
