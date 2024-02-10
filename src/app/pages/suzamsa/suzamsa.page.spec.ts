import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuzamsaPage } from './suzamsa.page';

describe('SuzamsaPage', () => {
  let component: SuzamsaPage;
  let fixture: ComponentFixture<SuzamsaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SuzamsaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
