import { Button } from "../ui/button";

const GuestUserButton = (props: { label: string }) => {
  const { label } = props;

  return (
    <Button
      variant="outline"
      type="button"
      className="w-full"
    >
      Log in Guest {label}
    </Button>
  );
};

export default GuestUserButton;
