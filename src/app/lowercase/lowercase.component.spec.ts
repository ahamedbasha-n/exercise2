import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCasePipe } from './lowercase.component';

  describe('TitleCasePipe', () => {
    // This pipe is a pure, stateless function so no need for BeforeEach
    const pipe = new TitleCasePipe();
  
    it('transforms "ABC" to "abc"', () => {
      expect(pipe.transform('ABC')).toBe('abc');
    });
  
    it('transforms "Abc" to "abc"', () => {
      expect(pipe.transform('Abc')).toBe('abc');
    });
  
  });
