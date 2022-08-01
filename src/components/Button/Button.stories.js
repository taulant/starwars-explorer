import "../../index.css";
import Button from "../Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    inactive: {
      name: "inactive",
      control: "boolean",
    },
  },
};
const Template = (args) => <Button {...args}>{args.label}</Button>;

export const ButtonActive = Template.bind({});
ButtonActive.args = {
  inactive: false,
  label: "Button",
};
export const ButtonInactive = Template.bind({});
ButtonInactive.args = {
  inactive: true,
  label: "Button",
};
