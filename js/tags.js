const tags = ["Tag1", "Tag2", "Tag3"]; // 假设后端提供的 tags 数据
const tagsContainer = document.querySelector(".tags");
tags.forEach(tag => {
    const span = document.createElement("span");
    span.className = "tag";
    span.innerText = tag;
    tagsContainer.appendChild(span);
});
