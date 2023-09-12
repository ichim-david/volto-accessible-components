import React from 'react';
import { Dropdown, Container } from 'semantic-ui-react';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
};

const options = [
  { key: 1, text: 'Choice 1', value: 1 },
  { key: 2, text: 'Choice 2', value: 2 },
  { key: 3, text: 'Choice 3', value: 3 },
];

function DropdownContainer({ ...args }) {
  return (
    <Container>
      <h1>Dropdown test</h1>
      <a href={'/test'}>Focusable elements</a>
      <p>Dropdown with clearable options</p>
      <Dropdown clearable options={options} selection />
    </Container>
  );
}

const Template = (args) => <DropdownContainer {...args}></DropdownContainer>;
export const Default = Template.bind({});
Default.args = {};
