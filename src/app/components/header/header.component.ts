import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  imports: [RouterLink],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
