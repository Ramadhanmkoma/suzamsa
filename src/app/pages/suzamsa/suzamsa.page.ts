import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-suzamsa',
  templateUrl: './suzamsa.page.html',
  styleUrls: ['./suzamsa.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SuzamsaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
