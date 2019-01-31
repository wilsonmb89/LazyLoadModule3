import { Modulo3Module } from './modulo-3.module';

describe('Modulo3Module', () => {
  let modulo3Module: Modulo3Module;

  beforeEach(() => {
    modulo3Module = new Modulo3Module();
  });

  it('should create an instance', () => {
    expect(modulo3Module).toBeTruthy();
  });
});
