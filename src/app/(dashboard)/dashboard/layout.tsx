import { Navigation, SideBar } from "./components/";export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navigation />

      <SideBar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          {children}
        </div>
      </div>
    </div>
  );
}
