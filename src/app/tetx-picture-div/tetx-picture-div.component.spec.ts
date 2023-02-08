import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TetxPictureDivComponent } from './tetx-picture-div.component';

describe('TetxPictureDivComponent', () => {
  let component: TetxPictureDivComponent;
  let fixture: ComponentFixture<TetxPictureDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TetxPictureDivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TetxPictureDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
