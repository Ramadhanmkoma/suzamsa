import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { ellipsisHorizontal, ellipsisHorizontalOutline, pause, pauseCircle, pauseCircleOutline, play, playBack, playBackCircle, playBackCircleOutline, playBackOutline, playCircle, playCircleOutline, playForward, playForwardCircle, playForwardCircleOutline, playOutline, playSkipBack, playSkipBackCircle, playSkipBackCircleOutline, playSkipBackOutline, playSkipForward, playSkipForwardCircle, playSkipForwardCircleOutline, playSkipForwardOutline } from 'ionicons/icons';


@Component({
  selector: 'app-mihadhara',
  templateUrl: './mihadhara.page.html',
  styleUrls: ['./mihadhara.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MihadharaPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  playing: boolean = false;

  lists: any[] = [
    {
      title: "Nasaha kwa Kinamama Juu ya Ufuatiliaji Elimu ya Kisheria",
      category: "Aqeedah",
      speaker: "Sheikh Abuu Ayman Al-Shiraaziy",
      duration: "40:00"
    },
    {
      title: "Nasaha kwa Kinamama Juu ya Ufuatiliaji Elimu ya Kisheria",
      category: "Aqeedah",
      speaker: "Sheikh Abuu Ayman Al-Shiraaziy",
      duration: "40:00"
    },
    {
      title: "Nasaha kwa Kinamama Juu ya Ufuatiliaji Elimu ya Kisheria",
      category: "Aqeedah",
      speaker: "Sheikh Abuu Ayman Al-Shiraaziy",
      duration: "40:00"
    },
    {
      title: "Nasaha kwa Kinamama Juu ya Ufuatiliaji Elimu ya Kisheria",
      category: "Aqeedah",
      speaker: "Sheikh Abuu Ayman Al-Shiraaziy",
      duration: "40:00"
    },
    {
      title: "Nasaha kwa Kinamama Juu ya Ufuatiliaji Elimu ya Kisheria",
      category: "Aqeedah",
      speaker: "Sheikh Abuu Ayman Al-Shiraaziy",
      duration: "40:00"
    },
    {
      title: "Nasaha kwa Kinamama Juu ya Ufuatiliaji Elimu ya Kisheria",
      category: "Aqeedah",
      speaker: "Sheikh Abuu Ayman Al-Shiraaziy",
      duration: "40:00"
    },
    {
      title: "Nasaha kwa Kinamama Juu ya Ufuatiliaji Elimu ya Kisheria",
      category: "Aqeedah",
      speaker: "Sheikh Abuu Ayman Al-Shiraaziy",
      duration: "40:00"
    },
    {
      title: "Nasaha kwa Kinamama Juu ya Ufuatiliaji Elimu ya Kisheria",
      category: "Aqeedah",
      speaker: "Sheikh Abuu Ayman Al-Shiraaziy",
      duration: "40:00"
    },
    {
      title: "Nasaha kwa Kinamama Juu ya Ufuatiliaji Elimu ya Kisheria",
      category: "Aqeedah",
      speaker: "Sheikh Abuu Ayman Al-Shiraaziy",
      duration: "40:00"
    },
    {
      title: "Nasaha kwa Kinamama Juu ya Ufuatiliaji Elimu ya Kisheria",
      category: "Aqeedah",
      speaker: "Sheikh Abuu Ayman Al-Shiraaziy",
      duration: "40:00"
    },
    {
      title: "Nasaha kwa Kinamama Juu ya Ufuatiliaji Elimu ya Kisheria",
      category: "Aqeedah",
      speaker: "Sheikh Abuu Ayman Al-Shiraaziy",
      duration: "40:00"
    },
    {
      title: "Nasaha kwa Kinamama Juu ya Ufuatiliaji Elimu ya Kisheria",
      category: "Aqeedah",
      speaker: "Sheikh Abuu Ayman Al-Shiraaziy",
      duration: "40:00"
    }
  ];


  constructor() {
    addIcons({
      play,
      playCircle,
      playCircleOutline,
      pause,
      pauseCircle,
      pauseCircleOutline,
      playForward,
      playForwardCircle,
      playForwardCircleOutline,
      playBack,
      playBackCircle,
      playBackCircleOutline,
      playOutline,
      playBackOutline,
      playSkipBack,
      playSkipBackCircle,
      playSkipBackCircleOutline,
      playSkipBackOutline,
      playSkipForward,
      playSkipForwardCircle,
      playSkipForwardOutline,
      playSkipForwardCircleOutline,
      ellipsisHorizontal,
      ellipsisHorizontalOutline
    })
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;

  }
}
