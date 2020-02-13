import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { MarkdownModule, MarkdownService, MarkedOptions } from 'ngx-markdown';
import { BrowserModule } from '@angular/platform-browser';
import { ValuesComponent } from "./values.component";
import { AdditionsService } from "../additions.service";
import { ErrorHandler } from "../../../../utils/error-handler";
import { of } from "rxjs";

describe('ValuesComponent', () => {
  let component: ValuesComponent;
  let fixture: ComponentFixture<ValuesComponent>;

  const mockedValues = {
    "adminserver.image.pullPolicy": "IfNotPresent",
    "adminserver.image.repository": "vmware/harbor-adminserver",
    "adminserver.image.tag": "dev"
  };
  const fakedAdditionsService = {
    getDetailByLink() {
      return of(mockedValues);
    }
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        MarkdownModule,
        ClarityModule,
        FormsModule,
        BrowserModule
      ],
      declarations: [ValuesComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [
        TranslateService,
        MarkdownService,
        ErrorHandler,
        {provide: AdditionsService, useValue: fakedAdditionsService},
        {provide: MarkedOptions, useValue: {}},
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuesComponent);
    component = fixture.componentInstance;
    component.yaml = "rfrf";
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
