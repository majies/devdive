import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent} from "@components";

export default {
  title: 'Call to Actions / Button',
  component: ButtonComponent,
} as Meta;

const Template: Story<ButtonComponent> = () => ({
  template: `
    <button dd-button>Please work!</button>
  `
});

export const Primary = Template.bind({});
