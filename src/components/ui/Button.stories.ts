import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: [
      "default",
      "destructive",
      "outline",
      "secondary",
      "ghost",
      "link",
    ],
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Primary",
    variant: "default",
    // href: "#",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary",
    variant: "secondary",
    // href: "#",
  },
};
