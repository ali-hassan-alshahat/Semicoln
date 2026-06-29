import { Button } from "@/components/ui/button";

const AuthButton = ({
  loading,
  children,
}) => {
  return (
    <Button
      type="submit"
      disabled={loading}
      className="w-44 cursor-pointer"
    >
      {loading ? "Loading..." : children}
    </Button>
  );
};

export default AuthButton;