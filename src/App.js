import { useState } from "react";
import RouteApp from "./routes/routes";
import Loading from "./components/loading";
import Footer from "./components/footer";

function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <RouteApp />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
