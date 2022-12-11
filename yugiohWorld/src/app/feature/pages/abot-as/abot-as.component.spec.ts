import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbotAsComponent } from './abot-as.component';

describe('AbotAsComponent', () => {
  let component: AbotAsComponent;
  let fixture: ComponentFixture<AbotAsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbotAsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbotAsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
