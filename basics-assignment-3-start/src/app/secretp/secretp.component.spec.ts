import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretpComponent } from './secretp.component';

describe('SecretpComponent', () => {
  let component: SecretpComponent;
  let fixture: ComponentFixture<SecretpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
