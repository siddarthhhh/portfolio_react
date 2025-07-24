import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"; // ✅ Correct
import  NotFound  from "./pages/NotFound"
import { Toaster } from "@/components/ui/Toaster";

function App() {
  return (
    <>
     <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
