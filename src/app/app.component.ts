import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {MatToolbar} from "@angular/material/toolbar";

import { ToolbarComponent } from "../shared/components/toolbar/toolbar.component";


@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    RouterOutlet
  ],


  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AhorrArte-FrontEnd';

}
