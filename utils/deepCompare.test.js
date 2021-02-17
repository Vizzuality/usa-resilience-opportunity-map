import { renderHook } from '@testing-library/react-hooks';
import useDeepCompareEffect, { useDeepCompareMemoize } from './deepCompare';

describe('useDeepCompareEffect hook', () => {
  it('should trigger callback only on dependencies change', () => {
    const callback = jest.fn();
    let dependencies = [{ a: 1 }];
    const { result, rerender } = renderHook(() =>
      useDeepCompareEffect(callback, dependencies)
    );

    expect(result).toBeTruthy();
    // dependencies didn't change
    rerender({ callback, dependencies });

    dependencies = [{ a: 2 }];
    // dependencies did change, triggering useEffect
    rerender({ callback, dependencies });

    expect(callback).toHaveBeenCalledTimes(2);
  });

  it('should return the reference to the object', () => {
    const obj = [{ a: 1 }];
    const { result } = renderHook(() => useDeepCompareMemoize(obj));

    expect(result.current).toBeTruthy();
    expect(result.current).toBe(obj);
  });
});
