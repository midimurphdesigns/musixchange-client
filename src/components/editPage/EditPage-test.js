
import React from 'react';
import {shallow, mount} from 'enzyme';

import EditPage from './EditPage';

describe('<EditPage />', () => {
    it('Renders without crashing', () => {
        shallow(<EditPage />);
    });
});