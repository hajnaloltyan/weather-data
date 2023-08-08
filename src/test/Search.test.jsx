import {
  expect, test,
} from 'vitest';
import Search from '../components/Search/Search';

test('Search component renders correctly', () => {
  const tree = <Search />;

  expect(tree).toMatchSnapshot();
});
