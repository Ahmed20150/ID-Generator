import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Generate: Story = {
  args: {
    primary: true,
    label: 'Generate',
    size:'large',
    type: "",
  },
};

export const Download: Story = {
  args: {
    primary: true,
    label: 'Download',
    size:'large',
    type:"",

  },
};

export const Reset: Story = {
  args: {
    primary: true,
    size: 'large',
    label: 'Reset',
    type: "",
  },
};

export const disabled: Story = {
  args: {
    primary: false,
    label:"Generate",
    size:'large',
    backgroundColor: "grey",
    type:"",
    // color:"black",
  },
};
