import { diff } from './diff';

describe('diff fn', () => {
  it('should detect new keys in "to" object', () => {
    const oldObj = { a: 1 };
    const newObj = {
      ...oldObj,
      newKey: 123,
    };
    const difference = diff(oldObj, newObj);

    expect(Object.keys(difference)).toEqual(['newKey']);
    expect(difference.newKey).toMatchObject({ to: 123 });
  });

  it('should detect removed keys in "from" object', () => {
    const newObj = { a: 1 };
    const oldObj = {
      ...newObj,
      removedKey: 123,
    };
    const difference = diff(oldObj, newObj);

    expect(Object.keys(difference)).toEqual(['removedKey']);
    expect(difference.removedKey).toMatchObject({ from: 123 });
  });

  it('should detect all different keys', () => {
    const oldObj = { removed: 1, common: 2 };
    const newObj = { common: 2, added: 3 };
    const difference = diff(oldObj, newObj);

    expect(Object.keys(difference)).toEqual(['removed', 'added']);
    expect(difference.removed).toMatchObject({ from: 1 });
    expect(difference.added).toMatchObject({ to: 3 });
  });

  it('should detect new values in common keys', () => {
    const oldObj = { changedKey: 1 };
    const newObj = { changedKey: 2 };
    const difference = diff(oldObj, newObj);

    expect(Object.keys(difference)).toEqual(['changedKey']);
    expect(difference.changedKey).toMatchObject({ from: 1, to: 2 });
  });

  it('should return [] if there are no differences ', () => {
    const oldObj = { a: 1 };
    const newObj = {
      ...oldObj,
    };
    const difference = diff(oldObj, newObj);

    expect(oldObj).not.toBe(newObj);
    expect(oldObj).toEqual(newObj);
    expect(Object.keys(difference)).toEqual([]);
  });
});
