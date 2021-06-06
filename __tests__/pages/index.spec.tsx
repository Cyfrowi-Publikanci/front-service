import { shallow } from 'enzyme';

import Dashboard from '../../pages';

jest.mock('react-i18next', () => ({ useTranslation: () => ({ t: (key: string) => key }) }));

describe('Dashboard', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Dashboard />);

    expect(wrapper).toMatchSnapshot();
  });
});
