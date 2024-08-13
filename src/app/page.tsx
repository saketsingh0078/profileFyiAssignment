import Header from "@/components/Header";
import Product from "@/components/Product";

export default function Home() {
  return (
    <div className="flex flex-col gap-2">
      <Header />
      <Product />
    </div>
  );
}
