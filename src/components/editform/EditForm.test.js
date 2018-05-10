
import React from 'react';
import {shallow, mount} from 'enzyme';

import EditForm from './EditForm';

describe('<EditForm />', () => {
    it('Renders without crashing', () => {
        shallow(<EditForm />);
    });
});