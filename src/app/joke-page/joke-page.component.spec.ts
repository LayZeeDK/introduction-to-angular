// joke-page.component.spec.ts
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JokePageComponent } from './joke-page.component';

describe('JokePageComponent', () => {
  let component: JokePageComponent;
  let fixture: ComponentFixture<JokePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JokePageComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(JokePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
