import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {ToolbarComponent} from "../../../../shared/components/toolbar/toolbar.component";

@Component({
  selector: 'app-tasa-crediticia',
  standalone: true,
  imports: [
    MatButton,
    ToolbarComponent
  ],
  templateUrl: './tasa-crediticia.component.html',
  styleUrl: './tasa-crediticia.component.css'
})
export class TasaCrediticiaComponent {

}
