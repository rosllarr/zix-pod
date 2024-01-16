import '@/app/ui/global.css';
import SideNav from '../ui/dashboard/sidenav';

export default function Layout({ children }) {
  return (
    <div className="relative flex w-full flex-auto">
      <div className="ml-0">
        <SideNav />
      </div>
      <div>{children}</div>
    </div>
  );
}
