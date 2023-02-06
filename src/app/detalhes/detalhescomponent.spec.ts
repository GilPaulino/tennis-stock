import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhadaComponent } from './detalhes.component';

describe('DetalhadaComponent', () => {
  let component: DetalhadaComponent;
  let fixture: ComponentFixture<DetalhadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
