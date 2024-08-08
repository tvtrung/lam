import { ComponentMeta, ComponentStory } from '@storybook/react';
import Indicators, { IndicatorItem } from './';

export default {
  title: 'Components/Molecules/Indicators',
  component: Indicators,
} as ComponentMeta<typeof Indicators>;

const Template: ComponentStory<typeof Indicators> = args => <Indicators {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: (
    <>
      <IndicatorItem
        icon="eye"
        text="Bài viết xem nhiều"
        onClick={e => {
          e?.preventDefault();
        }}
      />
      <IndicatorItem
        icon="time"
        text="Bài viết cũ"
        onClick={e => {
          e?.preventDefault();
        }}
      />
      <IndicatorItem
        icon="add"
        text="Bài viết gần đây"
        onClick={e => {
          e?.preventDefault();
        }}
      />
    </>
  ),
};

export const Active = Template.bind({});
Active.args = {
  children: (
    <>
      <IndicatorItem
        icon="eye"
        text="Bài viết xem nhiều"
        isActive
        onClick={e => {
          e?.preventDefault();
        }}
      />
      <IndicatorItem
        icon="time"
        text="Bài viết cũ"
        onClick={e => {
          e?.preventDefault();
        }}
      />
      <IndicatorItem
        icon="add"
        text="Bài viết gần đây"
        onClick={e => {
          e?.preventDefault();
        }}
      />
    </>
  ),
};
