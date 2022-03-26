import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRepertoriosComponent } from './editar-repertorios.component';

describe('EditarRepertoriosComponent', () => {
  let component: EditarRepertoriosComponent;
  let fixture: ComponentFixture<EditarRepertoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarRepertoriosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarRepertoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
