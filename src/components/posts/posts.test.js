
import React from 'react';
import {shallow, mount} from 'enzyme';

import Posts from './posts';

describe('<Posts />', () => {
    it('Renders without crashing', () => {
        shallow(<Posts />);
    });
});