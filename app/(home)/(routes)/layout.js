import SideBarNav from "../_components/SideBarNav";
const homeLayout = ({ children }) => {
  return (
    <div>
      <div className="h-full w-64 flex-col fixed flex">
        <SideBarNav />
      </div>
      {children}
    </div>
  );
};
export default homeLayout;
