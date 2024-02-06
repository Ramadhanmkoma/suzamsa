import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TelegramApiService } from 'src/app/services/telegram-api.service';
import { telegramConfig } from 'src/app/telegram.config';
import { ActivatedRoute } from '@angular/router';
// import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePage implements OnInit {
  public tkn = `https://api.telegram.org/bot${telegramConfig.bot_token}/getFile?file_id=`;
  private audioElement: HTMLAudioElement = new Audio();
  playAudio(audioUrl: string): void {

    console.log(audioUrl);

    this.audioElement.src = this.tkn + audioUrl;
    this.audioElement.load();
    this.audioElement.play();
  }

  private telegramApiService = inject(TelegramApiService);

  constructor() { }

  messages: any[] = []
  audios: any[] = []

  getUpdates() {
    this.telegramApiService.getUpdates().subscribe({
      next: (data) => {
        this.messages = data.result.slice(3);
        console.log("messages", this.messages[3].message.audio);
        this.audios = this.messages.filter((message) => message.message && message.message.audio);
        console.log("audios", this.audios);

      },
      error: (error) => {
        console.log("Error:", error);
        if (error.name = "") {

        }
      }
    })
  }


  ngOnInit(): void {
    this.getUpdates();
  }

}
