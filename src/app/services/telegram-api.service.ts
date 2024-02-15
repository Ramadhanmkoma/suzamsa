<<<<<<< HEAD
import { Injectable, inject } from '@angular/core';
=======
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
>>>>>>> 218e07baaf8dcc028b2452da6820359769b369d0
import { telegramConfig } from '../telegram.config';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

<<<<<<< HEAD
//not working import * as MTProto from '@mtproto/core/envs/browser';

// const MTProto: any = require('@mtproto/core/envs/browser')

=======
>>>>>>> 218e07baaf8dcc028b2452da6820359769b369d0
@Injectable({
  providedIn: 'root',
})
export class TelegramApiService {
  private http = inject(HttpClient);

  public config = telegramConfig;
  public mtProto: any;

<<<<<<< HEAD
  constructor() {
    // this.mtProto = new MTProto({
    //   api_id: this.config.api_id,
    //   api_hash: this.config.api_hash,
    //   test: false
    // })
  }
=======
  constructor() { }
>>>>>>> 218e07baaf8dcc028b2452da6820359769b369d0

  getUpdates(): Observable<any> {
    return this.http.get<any>(
      'https://api.telegram.org/bot' + this.config.bot_token + '/getUpdates',
    );
  }
<<<<<<< HEAD

  // public async call(method: string, params: {} = {}, options: {} = {}): Promise<any> {
  //   try {
  //     return await this.mtProto.call(method, params, options);
  //   } catch (error) {
  //     console.log(`${method} error:`, error);
  //     return Promise.reject(error);
  //   }
  // }

  // @ts-ignore
  // public sendCode(phone: string): Promise<any> {
  //   return this.call('auth.sendCode', {
  //     phone_number: phone,
  //     settings: {
  //       _: 'codeSettings'
  //     }
  //   })
  // }

  // @ts-ignore
  // public signIn(phone_code: string, phone_number: string, phone_code_hash: string): Promise<any> {
  //   return this.call('auth.signIn', {
  //     phone_number: phone_number,
  //     phone_code_hash: phone_code_hash,
  //     phone_code: phone_code
  //   })
  // }
=======
>>>>>>> 218e07baaf8dcc028b2452da6820359769b369d0
}
