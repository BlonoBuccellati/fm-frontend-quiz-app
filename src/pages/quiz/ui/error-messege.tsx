import { IconError } from "@/shared/assets";

const ErrorMessage = () => {
  return (
    <div className="typo-4 flex items-center space-x-[8px] text-red-500">
      <IconError />
      <p>Please select an answer</p>
    </div>
  );
};

export default ErrorMessage;
