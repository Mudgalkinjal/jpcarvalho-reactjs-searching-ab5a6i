import React from 'react'
import Dropdown from '.'

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {},
}

// Default story template
const Template = (args: any) => <Dropdown {...args} />
export const Default = Template.bind({})
Default.args = {
  options: [1, 2, 3, 4],
}
