import 'jest';
import * as sinon from 'sinon';
import {MathService} from './MathService';

describe('math service', () => {
  const service = new MathService();
  const stubMethod = sinon.stub<[number, number], number>();
  test('add button is clicked', () => {
    expect(service.Add(2, 2)).toBe(4);
  });
  test('returns something', () => {
    stubMethod(2, 2);
    expect(stubMethod.getCalls().length).toBe(1);
  });
});
