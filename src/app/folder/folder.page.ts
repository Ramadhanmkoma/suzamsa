import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonIcon, IonTabs, IonTabBar, IonTabButton, IonLabel, IonRouterOutlet ,IonNote } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, playCircleOutline, flashOutline, flash, apps, appsOutline, send } from 'ionicons/icons';
import { HomePage } from "../pages/home/home.page";

@Component({
    selector: 'app-folder',
    templateUrl: './folder.page.html',
    styleUrls: ['./folder.page.scss'],
    standalone: true,
    imports: [IonNote, IonRouterOutlet, IonLabel, IonTabButton, IonTabBar, IonTabs, IonIcon, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonButtons, HomePage]
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
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
      flashOutline,
      flash,
      apps,
      appsOutline,
      send
    });
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
