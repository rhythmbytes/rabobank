import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataDialogComponent } from './data-dialog.component';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@rabobank/shared';

const dialogMock = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  close: () => {},
};

describe('DataDialogComponent', () => {
  let component: DataDialogComponent;
  let fixture: ComponentFixture<DataDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DataDialogComponent,
        CommonModule,
        SharedModule,
        MatDialogModule,
      ],
      providers: [
        { provide: MatDialogRef, useValue: dialogMock },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close the dialog', () => {
    const closeSpy = jest.spyOn(component['dialogRef'], 'close');
    component.close();
    expect(closeSpy).toHaveBeenCalled();
  });
});
