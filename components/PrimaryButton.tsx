import "antd/dist/antd.css";
import { Button } from "antd";

export const PrimaryButton = (props: { content: string }) => {
  return (
    <Button type="primary" size="large">
      {props.content}
    </Button>
  );
};
