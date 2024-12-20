import { TestBed } from '@angular/core/testing';
import { WeekdayPipe } from './weekday.pipe';

describe('WeekdayPipe', () => {
  let pipe: WeekdayPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeekdayPipe],
    });
    pipe = TestBed.inject(WeekdayPipe);
  });

  it('determines Tuesday', () => {
    const fakeDate = new Date('2024-12-24T12:00:00Z');
    const expected = 'Tuesday';
    const actual = pipe.transform(fakeDate);
    expect(actual).toBe(expected);
  });
});
