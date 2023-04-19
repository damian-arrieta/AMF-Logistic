import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSearch(value: string) {
    if(value && value.length > 3) {
      this.router.navigate(['/character-list'], {
        queryParams: { q:value }
      });
    }
  }

}
