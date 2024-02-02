
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
// import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from '@ionic/angular/standalone';
import { TelegramApiService } from 'src/app/services/telegram-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePage implements OnInit {
  playAudio(_t20: any) {
    new Audio(_t20).play();
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

      }
    })
  }


  ngOnInit(): void {
    this.getUpdates();
  }

}
