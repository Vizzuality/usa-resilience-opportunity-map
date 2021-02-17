import { dateDiffInDays, getDayRange, getParams } from './timeline';
// the only used method is getParams but they depend on each other

describe('timeline methods', () => {
  it('dateDiffInDays - shoud return the num. of days between 2 dates', () => {
    const startDate = '2020-11-05';
    const endDate = '2020-11-03';
    const diff = dateDiffInDays(startDate, endDate);

    expect(diff).toBe(2);
  });

  it('getDayRange - should return null if no params are provided', () => {
    expect(getDayRange()).toBeNull();
  });

  it('getDayRange - should return indexes', () => {
    const params = {
      minDate: '2020-11-01',
      startDate: '2020-11-02',
      endDate: '2020-11-03',
      maxDate: '2020-11-04',
    };
    // getDayRange returns indexes of days based on a day-interval array with the 4 parametrized dates
    const { startDayIndex, endDayIndex, numberOfDays } = getDayRange(params);
    expect(startDayIndex).toBe(1);
    expect(endDayIndex).toBe(2);
    expect(numberOfDays).toBe(3);
  });

  it('getDayRange - should return indexes', () => {
    const params = {
      minDate: '2020-11-01',
      startDate: 'start',
      endDate: 'end',
      maxDate: '2020-11-04',
    };
    const { startDayIndex, endDayIndex, numberOfDays } = getDayRange(params);

    // startDayIndex falls back to 0 if !activeStartDay
    expect(startDayIndex).toBe(0);
    // endDayIndex falls back to numberOfDays between min and max dates
    expect(endDayIndex).toBe(3);
    expect(numberOfDays).toBe(3);
  });

  it('getParams - should return the layerConfig timeline dates', () => {
    const config = [
      {
        key: 'minDate',
        default: '2020-10-01',
      },
      {
        key: 'maxDate',
        default: '2020-11-15',
      },
    ];
    const parsedConfig = { minDate: '2020-10-01', maxDate: '2020-11-15' };
    const params = {
      startDate: '2020-10-15',
      endDate: '2020-11-03',
      trimEndDate: '2020-11-04',
      maxAbsoluteDate: '2020-11-05',
    };
    const paramsDayRange = getDayRange(params);
    const expected = {
      ...params,
      startYear: 2020,
      startMonth: 9, // 0 = jan, etc
      startDay: 289,
      endYear: 2020,
      endMonth: 10,
      endDay: 308,
      trimEndYear: 2020,
      trimEndMonth: 10,
      trimEndDay: 309,
    };
    const expectedWithParams = {
      ...expected,
      ...paramsDayRange,
    };

    // sends only params, gets only expected object without min and max config
    expect(getParams(undefined, params)).toMatchObject(expected);
    // sends only config, gets basic obj with config keys&values
    expect(getParams(config, undefined)).toMatchObject(parsedConfig);
    // sends config and params, gets full info
    expect(getParams(config, params)).toMatchObject(expectedWithParams);
  });

  it('getParams - should return the layerConfig timeline dates', () => {
    const config = [
      {
        key: 'minDate',
        default: '2020-10-01',
      },
      {
        key: 'maxDate',
        default: '2020-11-15',
      },
    ];
    const params = {
      startDate: '2020-10-15',
      endDate: '2020-11-10',
      trimEndDate: '2020-11-10',
      maxAbsoluteDate: '2020-11-05',
    };
    const expected = {
      ...params,
      startYear: 2020,
      startMonth: 9, // 0 = jan, etc
      startDay: 289,
      endYear: 2020,
      endMonth: 10,
      endDay: 310,
      trimEndYear: 2020,
      trimEndMonth: 10,
      trimEndDay: 310,
      ...getDayRange(params),
    };

    // sends new dates to try trimEnd and endDate > max
    expect(getParams(config, params)).toMatchObject(expected);
  });
});
