import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammerUpdateComponent } from './programmer-update.component';

describe('ProgrammerUpdateComponent', () => {
  let component: ProgrammerUpdateComponent;
  let fixture: ComponentFixture<ProgrammerUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammerUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
