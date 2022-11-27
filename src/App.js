import { useState } from "react";
import RouteApp from "./routes/routes";
import Loading from "./components/loading";

function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);
  return <>{loading ? <Loading /> : <RouteApp />}</>;
}

export default App;
