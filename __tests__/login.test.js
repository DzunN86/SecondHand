import renderer from 'react-test-renderer';
import Login from '../src/screens'

it('renders correctly', () => {
  const tree = renderer
    .create(<Login />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});