import { RenderSideBarItem } from "./components/RenderSideBarItem";
export function SideBar() {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="space-y-2 font-medium text-gray-900">
          <RenderSideBarItem href="" IconName="Dashboard" label="Dashboard" />

          <RenderSideBarItem
            href="inbox"
            IconName="Inbox"
            label="Inbox"
            RightComponent={
              <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                3
              </span>
            }
          />

          <RenderSideBarItem
            href="posts"
            IconName="PostCard"
            label="Postagens"
          />

          <RenderSideBarItem
            href="categoria"
            IconName="CategorySolid"
            label="Categorias"
          />

          <RenderSideBarItem href="usuarios" IconName="User" label="Usuários" />

          <RenderSideBarItem href="/" IconName="ArrowRight" label="Voltar" />
        </ul>
      </div>
    </aside>
  );
}
