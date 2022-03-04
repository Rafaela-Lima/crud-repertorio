import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudRepertorioComponent } from './crud-repertorio.component';

describe('CrudRepertorioComponent', () => {
  let component: CrudRepertorioComponent;
  let fixture: ComponentFixture<CrudRepertorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudRepertorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudRepertorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
