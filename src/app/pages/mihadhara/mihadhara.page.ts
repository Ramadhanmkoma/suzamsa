import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-mihadhara',
  templateUrl: './mihadhara.page.html',
  styleUrls: ['./mihadhara.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MihadharaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
