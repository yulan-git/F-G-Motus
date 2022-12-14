import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

import { BtnKeyboardComponent } from './btn-keyboard.component';

describe('BtnKeyboardComponent', () => {
  let component: BtnKeyboardComponent;
  let fixture: ComponentFixture<BtnKeyboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnKeyboardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BtnKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should get the letter to emit by the button', () => {
    const debugElement = fixture.debugElement;
    const button = debugElement.nativeElement.querySelector('.keyboard')
    
    component.btn ="A"
    let content = component.btn;
    fixture.detectChanges();
    
    spyOn(component.letter, 'emit');
    button.click();
    component.getLetterInput(content);
    fixture.detectChanges();

    expect(component.letter.emit).toHaveBeenCalledWith(content);
  });
});
