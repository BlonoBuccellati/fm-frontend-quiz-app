import { Meta, StoryObj } from "@storybook/nextjs-vite";

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
    imageAlt: "option of question",
    iconBgColor: "default",
    optionNo: "A",
  },
  render: ({ ...args }) => <IconContainer {...args} iconBgColor="default" />,
};
export const SVG: Story = {
  args: {
    imageAlt: "genre of quiz",
  },
  render: ({ ...args }) => (
    <IconContainer
      {...args}
      iconSrc="/assets/images/icon-accessibility.svg"
      iconBgColor="accessibility"
    />
  ),
};
