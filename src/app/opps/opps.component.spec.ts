import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OppsComponent } from './opps.component';

describe('OppsComponent', () => {
  let component: OppsComponent;
  let fixture: ComponentFixture<OppsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OppsComponent]
    });
    fixture = TestBed.createComponent(OppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
