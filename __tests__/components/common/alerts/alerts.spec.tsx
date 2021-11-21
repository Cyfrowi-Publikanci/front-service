import { shallow } from 'enzyme';
import * as reactRedux from 'react-redux';

import { AlertPubLab } from '../../../../components/common/alerts';
import { AlertType } from '../../../../components/common/alerts/types';

jest.mock('react-i18next', () => ({ useTranslation: () => ({ t: (key: string) => key }) }));

jest.mock('react-redux');

describe('AlertPubLab', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');

  beforeEach(() => {
    useSelectorMock.mockReset();
  });

  it('should match snapshot if alert type is SUCCESS', () => {
    useSelectorMock.mockReturnValueOnce({
      message: 'Test',
      type: AlertType.SUCCESS,
    });
    const wrapper = shallow(<AlertPubLab />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot if alert type is ERROR', () => {
    useSelectorMock.mockReturnValueOnce({
      message: 'Test',
      type: AlertType.ERROR,
    });
    const wrapper = shallow(<AlertPubLab />);

    expect(wrapper).toMatchSnapshot();
  });
});
