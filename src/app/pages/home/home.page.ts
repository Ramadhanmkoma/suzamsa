import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, SearchbarChangeEventDetail } from '@ionic/angular';
import { IonSearchbarCustomEvent } from '@ionic/core';
import { addIcons } from 'ionicons';
import {
  bonfire,
  bonfireOutline,
  book,
  bookOutline,
  extensionPuzzleOutline,
  pause,
  pauseCircleOutline,
  play,
  playOutline,
  pulseOutline,
  pulseSharp,
  water,
  waterOutline,
} from 'ionicons/icons';
import { interval } from 'rxjs';
import { TabsComponent } from 'src/app/resources/tabs/tabs.component';
import { TelegramApiService } from 'src/app/services/telegram-api.service';
import { telegramConfig } from 'src/app/telegram.config';
// import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonTabs, IonTabBar } from '@ionic/angular/standalone';

// import { Telegram } from 'telegram-mtproto';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, TabsComponent],
})
export class HomePage implements OnInit {
  played = false;
  currentAudioTime: number = 0;
  duration: number = 0;

  constructor() {
    addIcons({
      book,
      bookOutline,
      pulseOutline,
      pulseSharp,
      bonfire,
      bonfireOutline,
      extensionPuzzleOutline,
      waterOutline,
      water,
      play,
      playOutline,
      pause,
      pauseCircleOutline,
    });
  }

  viewAudio() {
    throw new Error('Method not implemented.');
  }
  // @ViewChild('imgView') imageDialog!: ElementRef<HTMLDialogElement>;

  viewGalleryImage() {
    // this.imageDialog.nativeElement.showModal();
  }
  galleries: any[] = [
    {
      id: 0,
      icon: 'book-outline',
      src: '/assets/images/s1.jpg',
      iconColor: '#8EBBFF',
      categoryName: '',
      cardColor: '#111154',
    },
    {
      id: 1,
      icon: 'pulse-sharp',
      src: 'assets/images/s2.jpg',
      iconColor: '#CCCCCC',
      categoryName: '',
      cardColor: '#24293E',
    },
    {
      id: 2,
      icon: 'pulse-sharp',
      src: 'assets/images/s3.jpg',
      iconColor: '#CCCCCC',
      categoryName: '',
      cardColor: '#24293E',
    },
    {
      id: 3,
      icon: 'pulse-sharp',
      src: 'assets/images/s4.jpg',
      iconColor: '#CCCCCC',
      categoryName: '',
      cardColor: '#24293E',
    },
    {
      id: 4,
      icon: 'pulse-sharp',
      src: 'assets/images/s5.jpg',
      iconColor: '#CCCCCC',
      categoryName: '',
      cardColor: '#24293E',
    },
  ];

  categories: any[] = [
    {
      id: 0,
      icon: 'book-outline',
      iconColor: '#8EBBFF',
      categoryName: 'Fiqh',
      cardColor: '#111154',
    },
    {
      id: 0,
      icon: 'pulse-sharp',
      iconColor: '#CCCCCC',
      categoryName: 'Aqeedah',
      cardColor: '#24293E',
    },
    {
      id: 0,
      icon: 'bonfire-outline',
      iconColor: '#24293E',
      categoryName: 'Seerah',
      cardColor: '#8EBBFF',
    },
    {
      id: 0,
      icon: 'extension-puzzle-outline',
      iconColor: '#24293E',
      categoryName: 'Others',
      cardColor: '#F4F5FC',
    },
  ];

  // Execute this when category card is clicked
  selectedCategory() {
    throw new Error('Method not implemented.');
  }

  onSearchChange($event: IonSearchbarCustomEvent<SearchbarChangeEventDetail>) {
    throw new Error('Method not implemented.');
  }
  public tkn = `https://api.telegram.org/bot${telegramConfig.bot_token}/getFile?file_id=`;
  private audioElement: HTMLAudioElement = new Audio();

  playAudio(audioUrl: string): void {
    console.log(audioUrl);
    this.audioElement.src = `../../../assets/audios/welcome.mp3`;
    this.audioElement.load();
    if (this.played) {
      this.audioElement.pause();
      this.played = !this.played;

      console.log(this.audioElement.currentTime);
    } else {
      this.audioElement.play();
      this.played = !this.played;
      console.log(this.audioElement.currentTime);
    }

  }

  updateProgress() {
    // Update the current time based on the audio element's current time
    this.currentAudioTime = this.audioElement.currentTime;
    if (this.currentAudioTime === this.duration) {
      this.audioElement.currentTime = 0;
      this.played = false;
    }
  }

  private telegramApiService = inject(TelegramApiService);

  messages: any[] = [];
  audios: any[] = [];

  getUpdates() {
    this.telegramApiService.getUpdates().subscribe({
      next: (data) => {
        console.log('Data:', data);

        this.messages = data.result.slice(3);
        console.log('messages', this.messages[3].message.audio);
        this.audios = this.messages.filter(
          (message) => message.message && message.message.audio,
        );
        console.log('audios', this.audios);
      },
      error: (error) => {
        console.log('Error:', error);
        if ((error.name = '')) {
        }
      },
    });
  }

  ngOnInit(): void {
    // Subscribe to time updates every 100 milliseconds
    interval(100).subscribe(() => {
      this.updateProgress();
    });

    // Listen to the 'loadedmetadata' event to get the duration of the audio
    this.audioElement.addEventListener('loadedmetadata', () => {
      this.duration = this.audioElement.duration;
    })
    // this.getUpdates();
  }
}
