<template>
  <div>
    <div class="drawer">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <div class="navbar bg-base-100">
          <div class="flex-none">
            <button @click="openSidebar" class="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-5 h-5 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <div class="flex-1">
            <a class="btn btn-ghost normal-case text-xl text-white">Mathlit</a>
          </div>
          <div class="flex-none">
            <button class="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-5 h-5 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <label
          ref="drawerToggle"
          for="my-drawer"
          class="btn btn-primary drawer-button hidden"
          >Open drawer</label
        >
        <Welcome />
      </div>
      <div class="drawer-side">
        <label for="my-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 w-80 bg-base-100 text-base-content">
          <!-- Sidebar content here -->
          <li>
            <h1 class="font-[600] text-[28px] tracking-[3px] text-white">
              MathLit
            </h1>
          </li>
          <li class="mt-[20px]">
            <span>
              <Icon name="fa-solid:book" color="white" class="text-2xl" />
              <p class="text-2xl">Materi</p>
            </span>
          </li>
          <li>
            <span>
              <Icon
                name="material-symbols:auto-videocam"
                color="white"
                class="text-2xl"
              />
              <p class="text-2xl">Video Pembelajaran</p>
            </span>
          </li>
          <li>
            <span>
              <Icon
                name="fluent:book-information-24-regular"
                color="white"
                class="text-2xl"
              />
              <p class="text-2xl">Informasi</p>
            </span>
          </li>
          <li>
            <span>
              <Icon name="bx:task" color="white" class="text-2xl" />
              <p class="text-2xl">Latihan</p>
            </span>
          </li>
          <li>
            <span>
              <Icon name="ph:exam-fill" color="white" class="text-2xl" />
              <p class="text-2xl">Evaluasi</p>
            </span>
          </li>
          <li>
            <span>
              <Icon name="ic:baseline-chat" color="white" class="text-2xl" />
              <p class="text-2xl">Chat</p>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    openSidebar() {
      this.$refs.drawerToggle.click();
    },
  },
};
</script>
