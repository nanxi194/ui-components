import { fn } from '@storybook/test';
import MyHeader from './Header.vue';

export default {
  title: 'Example/Header',
  component: MyHeader,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // render: (args) => ({
  //   // Components used in your story `template` are defined in the `components` object
  //   components: {
  //     MyHeader,
  //   },
  //   // The story's `args` need to be mapped into the template through the `setup()` method
  //   setup() {
  //     // Story args can be spread into the returned object
  //     return {
  //       ...args,
  //     };
  //   },
  //   // Then, the spread values can be accessed directly in the template
  //   template: '<my-header v-bind="args" />', // Use 'args' to bind the props


    
  // }),
  
  parameters: {
    layout: 'fullscreen',
  },
 
};


const Template = (args) => ({
  title: 'Example/Header',
  components: { MyHeader },
  setup() {
    return { args };
  },
  template: '<my-header v-bind="args" />',
});

export const Notification = Template.bind({});
Notification.args = {
  showTitle: true,
  showContent: true,
  showButton: true,
};


