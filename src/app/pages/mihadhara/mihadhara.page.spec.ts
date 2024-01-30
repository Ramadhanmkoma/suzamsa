import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MihadharaPage } from './mihadhara.page';

describe('MihadharaPage', () => {
  let component: MihadharaPage;
  let fixture: ComponentFixture<MihadharaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MihadharaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
