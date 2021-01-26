import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorUploadFilesComponent } from './vendor-upload-files.component';

describe('VendorUploadFilesComponent', () => {
  let component: VendorUploadFilesComponent;
  let fixture: ComponentFixture<VendorUploadFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorUploadFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorUploadFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
