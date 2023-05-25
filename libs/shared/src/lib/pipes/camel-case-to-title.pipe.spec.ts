import { CamelCaseToTitlePipe } from './camel-case-to-title.pipe';

describe('CamelCaseToTitlePipe', () => {
  let pipe: CamelCaseToTitlePipe;

  beforeEach(() => {
    pipe = new CamelCaseToTitlePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform camelCase string to title case', () => {
    const input = 'camelCaseExample';
    const expectedOutput = 'Camel Case Example';

    const transformedValue = pipe.transform(input);

    expect(transformedValue).toEqual(expectedOutput);
  });

  it('should handle single-word camelCase string', () => {
    const input = 'hello';
    const expectedOutput = 'Hello';

    const transformedValue = pipe.transform(input);

    expect(transformedValue).toEqual(expectedOutput);
  });

  it('should handle empty string', () => {
    const input = '';
    const expectedOutput = '';

    const transformedValue = pipe.transform(input);

    expect(transformedValue).toEqual(expectedOutput);
  });
});
