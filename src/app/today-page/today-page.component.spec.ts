import { TestBed } from '@angular/core/testing';

import { TodayPageComponent } from './today-page.component';

const testData = [
  { fakeDate: new Date('2024-12-24T12:00:00Z'), expectedWeekday: 'Tuesday' },
  {
    fakeDate: new Date('2024-12-25T12:00:00Z'),
    expectedWeekday: 'Wednesday',
  },
  { fakeDate: new Date('2024-12-26T12:00:00Z'), expectedWeekday: 'Thursday' },
];

describe('TodayPageComponent', () => {
  beforeEach(function () {
    // Initialize Jasmine clock
    jasmine.clock().install();
  });

  afterEach(function () {
    // Uninstall Jasmine clock
    jasmine.clock().uninstall();
  });

  async function setup(fakeDate: Date) {
    jasmine.clock().mockDate(fakeDate);

    await TestBed.configureTestingModule({
      imports: [TodayPageComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(TodayPageComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    return {
      component,
      fixture,
    };
  }

  testData.forEach(({ fakeDate, expectedWeekday }) => {
    it(`should be ${expectedWeekday}`, async () => {
      const { component, fixture } = await setup(fakeDate);
      const compiled = fixture.nativeElement as HTMLElement;
      fixture.autoDetectChanges();
      const weekday = compiled.querySelector('[data-testid="weekday"]');
      expect(weekday?.textContent).toBe(expectedWeekday);
    });
  });
});
