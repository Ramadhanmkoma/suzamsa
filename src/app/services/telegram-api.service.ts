import { Injectable } from '@angular/core';
import { telegramConfig } from '../telegram.config';

const MT_PROTO = require('@mtproto/core/envs/browser')

@Injectable({
  providedIn: 'root'
})
export class TelegramApiService {

  public config = telegramConfig;
  public mtProto: any;

  constructor() {
    this.mtProto = new MT_PROTO({
      api_id: this.config.api_id,
      api_hash: this.config.api_hash,
      test: false
    })
  }

  public async call(method: string, params: {} = {}, options: {} = {}): Promise<any> {
    try {
      return await this.mtProto.call(method, params, options);
    } catch (error) {
      console.log(`${method} error:`, error);
      return Promise.reject(error);
    }
  }

  // @ts-ignore
  public sendCode(phone: string): Promise<any> {
    return this.call('auth.sendCode', {
      phone_number: phone,
      settings: {
        _: 'codeSettings'
      }
    })
  }

  // @ts-ignore
  public signIn(phone_code: string, phone_number: string, phone_code_hash: string): Promise<any> {
    return this.call('auth.signIn', {
      phone_number: phone_number,
      phone_code_hash: phone_code_hash,
      phone_code: phone_code
    })
  }
}
