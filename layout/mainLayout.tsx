import Navbar from "../components/navigation/navbar";
export default function MainLayout({ children }: any) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
