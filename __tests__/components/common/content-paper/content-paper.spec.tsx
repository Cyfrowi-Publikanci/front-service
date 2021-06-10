import { shallow } from 'enzyme';

import { ContentPaper } from '../../../../components/common/content-paper';

describe('ContentPaper', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <ContentPaper className="class">
        <div>test</div>
      </ContentPaper>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
