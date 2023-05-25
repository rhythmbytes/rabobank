import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RowHighlightDirective } from './row-highlight.directive';

@Component({
  template: ` <div rabobankRowHighlight></div> `,
})
class TestComponent {}

describe('RowHighlightDirective', () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let divElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RowHighlightDirective, TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    divElement = fixture.debugElement.query(
      By.directive(RowHighlightDirective)
    );

    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive: RowHighlightDirective = new RowHighlightDirective(
      divElement
    );
    expect(directive).toBeTruthy();
  });

  it('should highlight the background color and set cursor on mouseover', () => {
    divElement.triggerEventHandler('mouseover', null);
    fixture.detectChanges();

    expect(divElement.nativeElement.style.backgroundColor).toBe(
      'rgb(211, 211, 211)'
    );
    expect(divElement.nativeElement.style.cursor).toBe('pointer');
  });

  it('should remove the background color and reset cursor on mouseout', () => {
    divElement.triggerEventHandler('mouseout', null);
    fixture.detectChanges();

    expect(divElement.nativeElement.style.backgroundColor).toBe('');
    expect(divElement.nativeElement.style.cursor).toBe('unset');
  });
});
