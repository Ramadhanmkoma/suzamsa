import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  IonIcon, IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { albums, albumsOutline, apps, appsOutline, flash, flashOutline, home, homeOutline, homeSharp, library, libraryOutline, people, peopleOutline, person, personOutline, playCircle, playCircleOutline, playOutline, send } from 'ionicons/icons';

@Component({
  standalone: true,
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  imports: [
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    RouterModule
  ],
})
export class TabsComponent implements OnInit {

  // isRouterActive: boolean = false;
  // private router: ActivatedRoute = inject(ActivatedRoute);

  constructor() {
    addIcons({
      albumsOutline,
      albums,
      playCircleOutline,
      playCircle,
      flashOutline,
      flash,
      apps,
      appsOutline,
      send,
      playOutline,
      person,
      people,
      personOutline,
      peopleOutline,
      libraryOutline,
      library,
      homeOutline,
      home,
      homeSharp
    });
  }

  ngOnInit() {
    console.log('Tabs started');
  }
}
