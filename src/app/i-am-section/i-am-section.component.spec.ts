import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IAmSectionComponent } from './i-am-section.component';

describe('IAmSectionComponent', () => {
  let component: IAmSectionComponent;
  let fixture: ComponentFixture<IAmSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IAmSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IAmSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
