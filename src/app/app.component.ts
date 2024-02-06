import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonApp,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRouterOutlet,
  IonSplitPane
,IonTabBar ,IonTabButton ,IonTabs } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  apps,
  appsOutline,
  archiveOutline,
  archiveSharp,
  bookmarkOutline,
  bookmarkSharp,
  flash,
  flashOutline,
  heartOutline,
  heartSharp,
  mailOutline,
  mailSharp,
  micCircle,
  paperPlaneOutline,
  paperPlaneSharp,
  people,
  person,
  playCircle,
  playCircleOutline,
  playOutline,
  send,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp,
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonTabs, IonTabButton, IonTabBar,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    IonApp,
    IonSplitPane,
    IonMenu,
    IonContent,
    IonList,
    IonListHeader,
    IonNote,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    HttpClientModule,
  ],
})
export class AppComponent {
  public appPages = [
    { title: 'Nyumbani', url: '/folder/inbox', icon: 'house' },
    { title: 'Suzamsa', url: '/folder/outbox', icon: 'people' },
    { title: 'Mihadhara', url: '/folder/favorites', icon: 'play-circle' },
    { title: 'Mipangilio', url: '/folder/archived', icon: 'phone' },
  ];

  public socialPages = [
    { title: 'Telegram', url: 'https://', icon: 'telegram' },
    { title: 'Whatsapp', url: 'https://', icon: 'whatsapp' },
    { title: 'Youtube', url: 'https://', icon: 'youtube' },
    { title: 'Tovuti', url: 'https://', icon: 'window' },
  ];

  // Telegram API Service


  constructor() {
    addIcons({
      mailOutline,
      mailSharp,
      paperPlaneOutline,
      paperPlaneSharp,
      heartOutline,
      heartSharp,
      archiveOutline,
      archiveSharp,
      trashOutline,
      trashSharp,
      warningOutline,
      warningSharp,
      bookmarkOutline,
      bookmarkSharp,
      playCircleOutline,
      playCircle,
      flashOutline,
      flash,
      apps,
      appsOutline,
      send,
      playOutline,
      micCircle,
      person,
      people,
    });
  }
}
