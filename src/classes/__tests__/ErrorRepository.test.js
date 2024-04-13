import ErrorRepository from '../ErrorRepository';

test('Testing adding a character to a team', () => {
  const errorRepository = new ErrorRepository();

  const result = errorRepository.translate(500);

  expect(result).toBe('Internal Server Error');
});

test('Testing for receiving an unknown error by code', () => {
  const errorRepository = new ErrorRepository();

  const result = errorRepository.translate(600);

  expect(result).toBe('Unknown error');
});
