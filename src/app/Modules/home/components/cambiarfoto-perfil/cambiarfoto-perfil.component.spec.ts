import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarfotoPerfilComponent } from './cambiarfoto-perfil.component';

describe('CambiarfotoPerfilComponent', () => {
  let component: CambiarfotoPerfilComponent;
  let fixture: ComponentFixture<CambiarfotoPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambiarfotoPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarfotoPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
