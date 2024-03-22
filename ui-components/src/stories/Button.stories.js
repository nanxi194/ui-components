import { fn } from '@storybook/test';
import MyButton from './Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Example/Button',
  component: MyButton,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};


export const Primary = {
  args: {
    primary: true,
    label: 'Action',
  },
};

export const Secondary = {
  args: {
    label: 'Action',
  },
};

