export const TEST_CHANGE_COUNT_NUMBER = 'TEST_CHANGE_COUNT_NUMBER';

export const setCountNumber = (count) => {
  return {
    type: TEST_CHANGE_COUNT_NUMBER,
    payload: count
  };
};
