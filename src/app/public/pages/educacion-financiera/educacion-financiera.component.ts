import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {ToolbarComponent} from "../../../../shared/components/toolbar/toolbar.component";

@Component({
  selector: 'app-educacion-financiera',
  standalone: true,
  imports: [
    MatButton,
    RouterLink,
    ToolbarComponent
  ],
  templateUrl: './educacion-financiera.component.html',
  styleUrl: './educacion-financiera.component.css'
})
export class EducacionFinancieraComponent {

}
