import type { Meta, StoryObj } from "@storybook/react";
import { SearchInput } from "../../src/search-input.js";

const meta = {
  title: "Navigation/SearchInput",
  component: SearchInput,
  args: { label: "Search projects", placeholder: "Search projects" },
  decorators: [
    (Story) => (
      <div className="camp-example-component">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SearchInput>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Empty: Story = {};
export const Populated: Story = { args: { defaultValue: "Accessibility" } };
export const Disabled: Story = { args: { disabled: true } };
