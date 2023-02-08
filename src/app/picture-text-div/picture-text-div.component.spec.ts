import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureTextDivComponent } from './picture-text-div.component';

describe('PictureTextDivComponent', () => {
  let component: PictureTextDivComponent;
  let fixture: ComponentFixture<PictureTextDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PictureTextDivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PictureTextDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
