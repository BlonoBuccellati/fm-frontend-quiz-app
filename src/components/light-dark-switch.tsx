import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

const LightDarkSwitch = () => {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="theme-color-mode" />
      <Label htmlFor="theme-color-mode">Airplane Mode</Label>
    </div>
  );
};

export default LightDarkSwitch;
