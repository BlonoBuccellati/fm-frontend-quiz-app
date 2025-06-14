import { Meta, StoryObj } from "@storybook/nextjs-vite";

import { IconAccessibility } from "@/shared/assets";

import IconContainer from "./icon-container";

const meta = {
  component: IconContainer,
  title: "ui/IconContainer",
  tags: ["autodocs"],
} satisfies Meta<typeof IconContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Number: Story = {
  args: {
    children: "A",
    className: "bg-red-500",
  },
};
export const SVG: Story = {
  args: {
    children: <IconAccessibility />,
    className: "bg-purple-600",
  },
  render: () => (
    <button aria-label="accessibility">
      <IconContainer className="bg-purple-100">
        <IconAccessibility className="size-[80%]" />
      </IconContainer>
    </button>
  ),
};
