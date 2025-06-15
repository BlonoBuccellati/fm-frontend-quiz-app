import { Meta, StoryObj } from "@storybook/nextjs-vite";

import { IconCorrect, IconError } from "@/shared/assets";

import OptionButton from "./option-button";

const meta = {
  component: OptionButton,
  title: "quiz/OptionButton",
  tags: ["autodocs"],
} satisfies Meta<typeof OptionButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    option: "4.5:1",
    no: "A",
    isSelected: true,
    onClick: () => {},
  },
  render: ({ ...props }) => (
    <div className="max-w-[375px]">
      <OptionButton {...props} className="w-2xs" />
    </div>
  ),
};
export const Correct: Story = {
  args: {
    option: "4.5:1",
    no: "A",
    isSelected: true,
    onClick: () => {},
  },
  render: ({ ...props }) => (
    <div className="max-w-[375px]">
      <OptionButton {...props} icon={IconCorrect} className="w-2xs" />
    </div>
  ),
};
export const Error: Story = {
  args: {
    option: "4.5:1",
    no: "A",
    isSelected: true,
    onClick: () => {},
  },
  render: ({ ...props }) => (
    <div className="max-w-[375px]">
      <OptionButton {...props} icon={IconError} className="w-2xs" />
    </div>
  ),
};
