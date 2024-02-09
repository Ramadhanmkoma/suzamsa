import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AudiosPage } from './audios.page';

describe('AudiosPage', () => {
  let component: AudiosPage;
  let fixture: ComponentFixture<AudiosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AudiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
