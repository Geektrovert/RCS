import { useNavigate } from "react-router-dom";
import { Button, Box } from "@chakra-ui/react";

export default function Home() {
  const navigate = useNavigate();
  return (
    <Box p={6}>
      <Button onClick={() => navigate("/dashboard")}>Dashboard</Button>
      <Button onClick={() => navigate("/dashboard/admin")}>Admin</Button>
      <Button onClick={() => navigate("/login")}>Login</Button>
    </Box>
  );
}
