import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.scss'],
})
export class StatFiltersComponent implements OnInit {
  filters: FormGroup;

  constructor(fb: FormBuilder) {
    this.filters = fb.group({
      title: ['', Validators.minLength(3)],
      author: ['', Validators.minLength(3)],
    });
  }

  ngOnInit(): void {}

  submit() {
    console.log('This form was submitted!', this.filters.value);
  }
}
