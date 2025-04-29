import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ERC20Mint from "@/components/erc20mint";
export default function Home() {
  return (
    <>
      <div className="bg-erc20mint bg-cover min-h-screen bg-no-repeat">
        <Navbar />
        <ERC20Mint />
        <Footer />
      </div>
    </>
  );
}
