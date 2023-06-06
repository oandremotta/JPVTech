import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemPessoaFisicaComponent } from './item-pessoa-fisica.component';

describe('ItemPessoaFisicaComponent', () => {
  let component: ItemPessoaFisicaComponent;
  let fixture: ComponentFixture<ItemPessoaFisicaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPessoaFisicaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemPessoaFisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
