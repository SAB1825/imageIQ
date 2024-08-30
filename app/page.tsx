
import Header from "@/components/header";
import { MainConatiner } from "@/components/mainConatiner";
import  {Footer}  from "@/components/Footer"
export default function Home() {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))]  ">
      {/* Header Section*/}
      <Header />
      {/* Main Container */}
      <MainConatiner />
      {/* Footer */}
      <Footer />
    </div> 
  );
}
