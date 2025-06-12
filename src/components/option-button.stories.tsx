import { Meta, StoryObj } from "@storybook/nextjs-vite";

import OptionButton from "./option-button";

const meta = {
  component: OptionButton,
  title: "Button/OptionButton",
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
      <OptionButton {...props} />
    </div>
  ),
};
