import ThemeSwitch from "@/shared/ui/elements/switch/theme-switch";
import { HeaderContainer } from "@/shared/ui/layouts/header-container";

type QuizHeaderProps = {
  renderLogo: () => React.ReactElement;
};
const QuizHeader = ({ renderLogo }: QuizHeaderProps) => {
  return (
    <HeaderContainer>
      {renderLogo()}
      <ThemeSwitch />
    </HeaderContainer>
  );
};

export default QuizHeader;
