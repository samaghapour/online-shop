export const toggleSidebar = () => {
  const sidebar = document.querySelector(".sidebar__container");
  const sidebarList = document.querySelector(".sidebar-list__container");
  const sidebarCloseBtn = document.querySelector(".close-sidebar_btn");

  if (sidebar && sidebarList && sidebarCloseBtn) {
    sidebar.classList.toggle("open");
    sidebarList.classList.toggle("open");
    sidebarCloseBtn.classList.toggle("open");
  }
};
