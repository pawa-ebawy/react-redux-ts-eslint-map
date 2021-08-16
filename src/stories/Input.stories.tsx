import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './Input';

export default {
  title: 'Test Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const WithText = Template.bind({});
WithText.args = {
    type: 'text',
    value: 'Text',
    content: 'full',
};

export const WithoutText = Template.bind({});
WithText.args = {
    type: 'text',
    content: 'empty',
};

export const TypeText = Template.bind({});
TypeText.args = {
    type: 'text',
    content: 'empty',
};

export const TypeNumber = Template.bind({});
TypeNumber.args = {
    type: 'number',
    content: 'empty',
};

