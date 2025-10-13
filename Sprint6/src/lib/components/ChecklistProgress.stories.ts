import type { Meta, StoryObj } from '@storybook/svelte';
import ChecklistProgress from './ChecklistProgress.svelte';
import { itemsStore, completedStore, percentStore } from '$lib/stores/checklist';

const meta = {
  title: 'Components/ChecklistProgress',
  component: ChecklistProgress,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: { type: 'object' },
      description: 'Array of checklist items to display',
    },
  },

} satisfies Meta<ChecklistProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        id: '1',
        label: 'Test 1',
        done: false,
      },
      {
        id: '2',
        label: 'Test 2',
        done: false,
      },
      {
        id: '3',
        label: 'Test 3',
        done: false,
      },
    ],
  },
};

export const PartiallyComplete: Story = {
  args: {
    items: [
      {
        id: '1',
        label: 'Test 1',
        done: true,
      },
      {
        id: '2',
        label: 'Test 2',
        done: false,
      },
      {
        id: '3',
        label: 'Test 3',
        done: false,
      },
    ],
  },
};

export const AllComplete: Story = {
  args: {
    items: [
      {
        id: '1',
        label: 'Test 1',
        done: true,
      },
      {
        id: '2',
        label: 'Test 2',
        done: true,
      },
      {
        id: '3',
        label: 'Test 3',
        done: true,
      },
    ],
  },
};

export const ShortLabels: Story = {
  args: {
    items: [
      { id: '1', label: 'Setup environment', done: false },
      { id: '2', label: 'Write tests', done: false },
      { id: '3', label: 'Implement features', done: false },
    ],
  },
};