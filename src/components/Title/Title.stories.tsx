import type { Meta, StoryObj } from '@storybook/react';
import { Title } from './Title';

const meta = {
  component: Title,
  title: 'Components/Title',
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Title />,
};
