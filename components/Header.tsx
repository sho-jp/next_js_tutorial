import { PageHeader } from "antd";
import "antd/dist/antd.css";

export const Header = () => {
  return (
    <PageHeader
      className="site-page-header"
      onBack={() => null}
      title="Next.js Tutorial"
      subTitle="Next.js試してみる"
    />
  );
};
