import { Meta, StoryObj } from "@storybook/nextjs-vite";

import Logo from "./logo";
import ScoreCard from "./score-card";

const meta = {
  component: ScoreCard,
  title: "quiz/Score",
  tags: ["autodocs"],
} satisfies Meta<typeof ScoreCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    score: 1,
    total: 10,
    renderLogo: () => (
      <Logo
        title="Accessibility"
        iconBgColor="accessibility"
        icon="/assets/images/icon-accessibility.svg"
      />
    ),
  },
};
