import { Meta, StoryObj } from "@storybook/nextjs-vite";

import { IconBox, IconImage } from "./icon-box";

const meta = {
  component: IconBox,
  title: "ui/IconContainer",
  tags: ["autodocs"],
} satisfies Meta<typeof IconBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Number: Story = {
  args: {
    iconBgColor: "default",
  },
  render: ({ ...args }) => (
    <IconBox {...args} iconBgColor="default">
      <IconImage imageAlt="option of question" text="A" />
    </IconBox>
  ),
};
export const SVG: Story = {
  args: {
    iconBgColor: "accessibility",
  },
  render: ({ ...args }) => (
    <IconBox {...args}>
      <IconImage
        imageAlt="genre of quiz"
        iconSrc="/assets/images/icon-accessibility.svg"
      />
    </IconBox>
  ),
};
