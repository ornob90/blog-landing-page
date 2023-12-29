const collection = document.getElementById("collection");

import blogsData from "./blogs-data.js";

const addBlogs = () => {
  console.log("hitted");
  blogsData.forEach((blog) => {
    const card = document.createElement("div");

    card.classList.add("min-h-[500px]", "flex", "flex-col", "gap-4");

    card.innerHTML = `
      <img
        src="${blog.thumbnail}"
        class="h-[200px] w-full object-cover rounded-2xl"
        alt=""
      />

      <div class="flex flex-col gap-3 justify-between h-[250px]">
        <h3 class="font-bold text-lg">${blog.title}</h3>
        <p class="text-light text-sm">
          ${blog.content}
        </p>
        <div class="flex gap-4 items-center mt-3">
          <div class="h-[50px] w-[50px] rounded-full">
            <img
              src="${blog.image}"
              alt=""
              class="rounded-full w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 class="font-semibold text-lg">${blog.name}</h1>
            <p class="text-light">${blog.role}</p>
          </div>
        </div>
      </div>
    `;

    collection.appendChild(card);
  });
};

addBlogs();
