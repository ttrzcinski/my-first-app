import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaformComponent } from './daform.component';

describe('DaformComponent', () => {
  let component: DaformComponent;
  let fixture: ComponentFixture<DaformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
