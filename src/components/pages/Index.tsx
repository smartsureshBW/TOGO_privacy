import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
import Header from "../Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex min-h-[calc(100vh-80px)] items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-4">
          <h1 className="mb-6 text-5xl font-bold text-foreground">Welcome to TOGO</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Everything your pet needs in one place. Discover our product and services designed to keep your furry friends happy and healthy.
            </p>
          <div className="flex gap-4 justify-center">
            <button className="text-xl " >
              <Link className="text-green-600" to="/privacy">View Privacy Policy</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
