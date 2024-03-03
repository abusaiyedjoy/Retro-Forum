const postContainer = document.getElementById("posts-container");

const letsDiscusePost = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/posts"
  );
  const data = await response.json();
  const allPosts = data.posts;
  allPosts.forEach((post) => {
    console.log(post)
    const div = document.createElement("div");
    // div.classList = "flex gap-4 items-start mt-12";
    div.innerHTML = `<div class="w-full mb-12 lg:w-[80%] rounded-3xl shadow-lg p-10 border border-gray-300 bg-gray-100">
    <div class="relative flex gap-4 items-start">
        <div class="w-[80px] h-[80px] rounded-2xl bg-white mt-3">
            <div class="indicator w-full h-full flex justify-center items-center">
                <span class="indicator-item badge bg-green-500"></span>
                <div class="grid place-items-center">con</div>
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
                        <p class="text-xl">568</p>
                    </div>
                    <div class="flex items-center gap-3">
                        <i class="fa-regular fa-eye"></i>
                        <p class="text-xl">1,576</p>
                    </div>
                    <div class="flex items-center gap-3">
                        <i class="fa-regular fa-clock"></i>
                        <p class="text-xl">5 min</p>
                    </div>
                </div>
                <div>
                    <img src="./images/Group 40106.png" alt="">
                </div>
            </div>
        </div>
    </div>
</div>`;
        postContainer.appendChild(div)
  });
};
letsDiscusePost();
