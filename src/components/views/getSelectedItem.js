export default function(){
    const itensHome = document.querySelectorAll(".home-item");
    const itensProjects = document.querySelectorAll(".project");

    const selectedHomeItem = Array.from(itensHome).find(itemHome => itemHome.classList.contains("select"));
    if (selectedHomeItem) {
        return selectedHomeItem.textContent;
    }

    const selectedProjectItem = Array.from(itensProjects).find(itemProject => itemProject.classList.contains("select"));
    if (selectedProjectItem) {
        return selectedProjectItem.textContent;
    }
}
