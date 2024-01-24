import Header from "../_components/Header";
import SideBarNav from "../_components/SideBarNav";
const homeLayout = ({ children }) => {
  return (
    <div>
      <div className="h-full w-64 flex-col fixed flex">
        <SideBarNav />
      </div>
      <Header />
      <div className="ml-64 p-4">{children}</div>
    </div>
  );
};
export default homeLayout;
