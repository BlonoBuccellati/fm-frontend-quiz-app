import { Meta, StoryObj } from "@storybook/nextjs-vite";

import { IconContainer, IconImage } from "./icon-container";

const meta = {
  component: IconContainer,
  title: "ui/IconContainer",
  tags: ["autodocs"],
} satisfies Meta<typeof IconContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Number: Story = {
  args: {
    iconBgColor: "default",
  },
  render: ({ ...args }) => (
    <IconContainer {...args} iconBgColor="default">
      <IconImage imageAlt="option of question" text="A" />
    </IconContainer>
  ),
};
export const SVG: Story = {
  args: {
    iconBgColor: "accessibility",
  },
  render: ({ ...args }) => (
    <IconContainer {...args}>
      <IconImage
        imageAlt="genre of quiz"
        iconSrc="/assets/images/icon-accessibility.svg"
      />
    </IconContainer>
  ),
};
