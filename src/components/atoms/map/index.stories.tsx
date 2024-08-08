import { ComponentMeta, ComponentStory } from '@storybook/react';
import Map from './';

export default {
  title: 'Components/Atoms/Map',
  component: Map,
} as ComponentMeta<typeof Map>;

const Template: ComponentStory<typeof Map> = args => <Map {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  src: 'https://www.google.com/maps/embed/v1/search?q=C%C3%B4ng%20Ty%20TNHH%20Lampart%2C%20Ly%20Chinh%20Thang%2C%20V%C3%B5%20Th%E1%BB%8B%20S%C3%A1u%2C%20District%203%2C%20Ho%20Chi%20Minh%20City%2C%20Vietnam&key=AIzaSyAcPUKRi968hsVZTzU5ZSKcnTf-1s93CWk',
};
