import { Injectable, inject } from '@angular/core';
import { telegramConfig } from '../telegram.config';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TelegramApiService {
  private http = inject(HttpClient);

  public config = telegramConfig;
  public mtProto: any;

  constructor() { }

  getUpdates(): Observable<any> {
    return this.http.get<any>(
      'https://api.telegram.org/bot' + this.config.bot_token + '/getUpdates',
    );
  }
}
