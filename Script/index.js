const searchText = document.getElementById("inputSearch");
const postContainer = document.getElementById("posts-container");
const cartContainer = document.getElementById("cart-container");

const getPost = async (category) => {
  if (category) {
    const response = await fetch(
      `https://openapi.programming-hero.com/api/retro-forum/posts?category=${category}`
    );
    const data = await response.json();
    const allPosts = data.posts;
    postByCategory(allPosts);
    return allPosts;
  } else {
    const response = await fetch(
      `https://openapi.programming-hero.com/api/retro-forum/posts`
    );
    const data = await response.json();
    const allPosts = data.posts;
    postByCategory(allPosts);
    return allPosts;
  }
};

if (!searchText.value) {
  getPost();
}

const filteredPost = (event) => {
  event.preventDefault();
  postContainer.innerHTML = "";
  getPost(searchText.value);
};

const postByCategory = async (allPosts) => {
  allPosts.forEach((post) => {
    const div = document.createElement("div");
    // div.classList = "flex gap-4 items-start mt-12";
    div.innerHTML = `<div class="w-full mb-12 lg:w-[80%] rounded-3xl shadow-lg p-10 border border-gray-300 bg-gray-100">
    <div class="relative flex gap-4 items-start">
        <div class="w-[70px] h-[70px] rounded-2xl bg-gray-100 mt-3">
            <div class="indicator w-full h-full flex justify-center items-center">
                <span class="indicator-item badge bg-green-500"></span>
                <div class="grid place-items-center"><img class="w-full h-full rounded-xl" src="${post.image}" alt=""></div>
            </div>
        </div>
        <div class="w-full gap-4 bg-gray-100 flex flex-col p-3">
            <div class="flex gap-8 item-center">
                <p class=" font-medium text-xl">#${post.category}</p>
                <div class="flex items-center">
                    <p class="text-gray-600 font-medium text-xl ml-1">Author: ${post.author.name}</p>
                </div>
            </div>
            <h3 class="font-black text-gray-800 md:text-3xl text-xl">${post.title}</h3>
            <p class="md:text-lg text-gray-500 text-base">${post.description}</p>
            <hr class="bg-gray-600 border-dashed">
            <div class="flex justify-between items-center">
                <div class="flex gap-7">
                    <div class="flex items-center gap-3">
                        <i class="fa-regular fa-message"></i>
                        <p class="text-xl">${post.comment_count}</p>
                    </div>
                    <div class="flex items-center gap-3">
                        <i class="fa-regular fa-eye"></i>
                        <p class="text-xl">${post.view_count}</p>
                    </div>
                    <div class="flex items-center gap-3">
                        <i class="fa-regular fa-clock"></i>
                        <p class="text-xl">${post.posted_time} min</p>
                    </div>
                </div>
                <div>
                    <img src="./images/Group 40106.png" alt="">
                </div>
            </div>
        </div>
    </div>
</div>`;
    postContainer.appendChild(div);
  });
};

const latestPost = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/latest-posts"
  );
  const data = await response.json();
  const allCarts = data;
  allCarts.forEach((card) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <div
                    class="overflow-hidden rounded-2xl border border-gray-300 shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl cursor-pointer">
                    <div  class="w-full  h-full">
                        <div class="m-3 bg-gray-200 rounded-2xl h-[250px]">
                            <img alt=""
                                src="${card.cover_image}"
                                class=" w-full h-full object-cover rounded-2xl" />
                        </div>
                        <div class="bg-white w-full p-4">
                            <div class="flex items-center my-2 gap-4">
                                <i class="fa-regular fa-calendar"></i>
                                <p class="text-xl text-gray-500">${
                                  card.author.posted_date || "No publish date."
                                }</p>
                            </div>
                            <p class=" text-xl font-medium mb-4 ">${
                              card.title
                            }</p>
                            <p class=" text-lg mb-4 text-gray-500">${card.description.slice(
                              0,
                              90
                            )}.
                            </p>
                            <hr class="bg-gray-600">
                            <div class="flex items-center mt-2 mb-4">
                                <img class='w-10 h-10 object-cover rounded-full' alt='User avatar'
                                    src='${card.profile_image}'>

                                <div class="pl-3">
                                    <div class="font-medium">${
                                      card.author.name
                                    }</div>
                                    <div class="text-gray-600 text-sm">${
                                      card.author.designation || "Unknown"
                                    }</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        `;
    cartContainer.appendChild(div);
  });
};
latestPost();
