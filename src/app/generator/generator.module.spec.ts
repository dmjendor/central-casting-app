import { GeneratorModule } from './generator.module';

describe('GeneratorModule', () => {
  let generatorModule: GeneratorModule;

  beforeEach(() => {
    generatorModule = new GeneratorModule();
  });

  it('should create an instance', () => {
    expect(generatorModule).toBeTruthy();
  });
});
