import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { telegramConfig } from '../telegram.config';

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
