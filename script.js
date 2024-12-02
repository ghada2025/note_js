const currentTheme = localStorage.getItem('mode')
if(!currentTheme) {
    localStorage.setItem('mode', 'light')
}

if (currentTheme === 'dark') {
    document.documentElement.classList.add('dark')
}

function toggledark() {
    let currentTheme = localStorage.getItem('mode')
    if (currentTheme === 'light') {
        localStorage.setItem('mode', 'dark')
    } else {
        localStorage.setItem('mode', 'light')
    }
    document.documentElement.classList.toggle('dark')
}


function handaleaddfolder() {
    const newfolder = document.getElementById("folder");
    const newFolder = document.createElement("div"); 
    newFolder.className = "flex gap-3 items-center  text-primary dark:text-[#FFFFFF99] group hover:bg-bg2 cursor-pointer dark:hover:bg-[#e4aeae08]";
    newFolder.innerHTML = `
    <img src="./images/Vector (1).png" class="dark:invert ">
    <input onkeypress="handalenamefolder(event,this)" class="bg-bg2 dark:bg-[#e4aeae08] focus:outline-none w-[80%] p-3"></input>
    <img src="./images/Frame (6).png" class="dark:invert group-hover:block hidden">
    `
    const trash = newFolder.querySelector("img:last-child")
    trash.addEventListener("click", () => newFolder.remove())
    newfolder.appendChild(newFolder);  


}

function handalenamefolder(event,mytarget) {
    const folderName = mytarget.value;
    const currentFolders = JSON.parse(localStorage.getItem("folders")) || []
    if (event.key === "Enter") {
        const namefolder = document.createElement("span");
        namefolder.className = "flex gap-3 items-center  text-primary dark:text-[#FFFFFF99]";
        namefolder.innerHTML = folderName;
        mytarget.replaceWith(namefolder);
        const updatedFolders = [...currentFolders, { title: folderName, notes: [], date: new Date() }]
        localStorage.setItem("folders", JSON.stringify(updatedFolders))
    }
}

document.addEventListener("DOMContentLoaded", initfolder); 

function initfolder() {
    const folder = document.getElementById("folder");
    const folders = localStorage.getItem("folders");
    const parsedFolders = folders ? JSON.parse(folders) : []; 
    for (let i = 0; i < parsedFolders.length; i++) {
        const newFolder = document.createElement("span");
        newFolder.className = "flex gap-3 items-center  text-primary dark:text-[#FFFFFF99] group hover:bg-bg2 cursor-pointer dark:hover:bg-[#e4aeae08]";
        newFolder.innerHTML = `
            <img src="./images/Vector (1).png" class="dark:invert ">
            <span class="bg-bg dark:bg-[#e4aeae08] focus:outline-none w-[80%] p-3">${parsedFolders[i].title}</span>
            <img src="./images/Frame (6).png" class="dark:invert group-hover:block hidden">
        `;
        const trash = newFolder.querySelector("img:last-child");
        trash.addEventListener("click", () => deleteFolder(newFolder, i));
        folder.appendChild(newFolder);
    }
}


function deleteFolder(folder, index) {
        const folders = localStorage.getItem("folders");
        const parsedFolders = folders ? JSON.parse(folders) : [];
        const newFolders = parsedFolders.filter((_, i) => i !== index);
        localStorage.setItem("folders", JSON.stringify(newFolders));
        folder.remove();
}


/*
function selectFolder(selectedFolder) {
    const folders = document.querySelectorAll("#folders > div")
    for (let i in folders) {
        if (folders[i].id == selectedFolder.id) {
        folders[i].classList.add("font-bold")
        } else {
        folders[i].classList.remove("font-bold")
        }
    }
}*/

/*
    // get the folders from localStorage
    const folders = localStorage.getItem("folders")
    // parse the folders
    const parsedFolders = JSON.parse(folders)

const folder = document.getElementById("folder")
for (i=0; i < parsedFolders.length; i++) {
    const newFolder = document.createElement("span");
    newFolder.className = "flex gap-3 items-center  text-primary dark:text-[#FFFFFF99] group hover:bg-bg2 cursor-pointer dark:hover:bg-[#e4aeae08]";
    newFolder.innerHTML = `
    <img src="./images/Vector (1).png" class="dark:invert ">
    <span class="bg-bg dark:bg-[#e4aeae08] focus:outline-none w-[80%] p-3">${parsedFolders[i].title}</span>
    <img src="./images/Frame (6).png" class="dark:invert group-hover:block hidden">
    `	
    const trash = newFolder.querySelector("img:last-child")
    trash.addEventListener("click", () => deleteFolder(newFolder, i))
    folder.appendChild(newFolder);
}
}
function deleteFolder(folder, index) {
    const folders = localStorage.getItem("folders")
    const parsedFolders = JSON.parse(folders)
    const newFolders = parsedFolders.filter((item) => item.title != parsedFolders[index]?.title)
    localStorage.setItem("folders", JSON.stringify(newFolders))
    folder.remove()
}*/
