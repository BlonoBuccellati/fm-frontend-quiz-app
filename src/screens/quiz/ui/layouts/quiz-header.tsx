import { Header } from "@/shared/ui/header";
import ThemeSwitch from "@/shared/ui/switch/theme-switch";

type QuizHeaderProps = {
  renderLogo: () => React.ReactElement;
};
const QuizHeader = ({ renderLogo }: QuizHeaderProps) => {
  return (
    <Header>
      {renderLogo()}
      <ThemeSwitch />
    </Header>
  );
};

export default QuizHeader;
