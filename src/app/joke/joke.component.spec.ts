// joke.component.spec.ts
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JokeComponent } from './joke.component';

describe('JokeComponent', () => {
  let component: JokeComponent;
  let fixture: ComponentFixture<JokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JokeComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(JokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
