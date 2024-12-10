import { provideLocationMocks } from '@angular/common/testing';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter(routes), provideLocationMocks()],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render a greeting', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.autoDetectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    compiled.querySelector('a')?.click();
    await fixture.whenStable();
    expect(compiled.querySelector('p')?.textContent).toContain(
      'Hello, TimePlan!',
    );
  });
});
