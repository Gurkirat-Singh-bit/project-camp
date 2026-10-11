import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/test";
import { NavigationMenu } from "../../src/navigation-menu.js";

const meta = {
  title: "Navigation/NavigationMenu",
  component: NavigationMenu,
  args: {
    items: [
      { id: "projects", label: "Explore projects", href: "#projects" },
      { id: "guide", label: "Contribution guide", href: "#guide" },
    ],
  },
  decorators: [
    (Story) => (
      <div className="camp-example-component">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof NavigationMenu>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Closed: Story = {};
export const Open: Story = {
  play: async ({ canvasElement }) => {
    await userEvent.click(
      within(canvasElement).getByRole("button", { name: "Menu" }),
    );
  },
};
export const LongList: Story = {
  args: {
    items: Array.from({ length: 20 }, (_, i) => ({
      id: `project-${i}`,
      label: `Open source project ${i + 1}`,
      href: `#project-${i}`,
    })),
  },
  play: Open.play,
};
export const DisabledAction: Story = {
  args: {
    items: [
      {
        id: "disabled",
        label: "Unavailable action",
        onSelect: () => {},
        disabled: true,
      },
    ],
  },
  play: Open.play,
};
