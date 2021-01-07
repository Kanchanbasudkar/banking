import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsubmittedtransactionComponent } from './viewsubmittedtransaction.component';

describe('ViewsubmittedtransactionComponent', () => {
  let component: ViewsubmittedtransactionComponent;
  let fixture: ComponentFixture<ViewsubmittedtransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsubmittedtransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsubmittedtransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
