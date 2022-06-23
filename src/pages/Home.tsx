import { Suspense, lazy, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box } from "@chakra-ui/react";

const ParallerLoadingExample = lazy(() => import("../components/LazyLoad"));

const loadData: () => Promise<string[]> = async () => {
  return Promise.resolve(["a", "b", "c"]);
};

export default function Home() {
  const [data, setData] = useState<string[]>([]);
  const navigate = useNavigate();

  // we start loading the data on mount
  useEffect(() => {
    loadData().then(setData);
  }, []);
  return (
    <Box p={6}>
      <Button onClick={() => navigate("/dashboard")}>Dashboard</Button>
      <Button onClick={() => navigate("/dashboard/admin")}>Admin</Button>
      <Button onClick={() => navigate("/login")}>Login</Button>

      {/* we also start loading the UI component in parallel with data loading, after mount */}
      <Suspense fallback={<div>Loading...</div>}>
        <ParallerLoadingExample data={data} />
      </Suspense>
    </Box>
  );
}
