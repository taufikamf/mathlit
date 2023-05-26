<template>
  <Head>
    <Title>Mathlit</Title>
    <Meta name="title" :content="'Mathlit'" />
    <Meta name="description" :content="'Belajar limit bersama mathlit'" />
  </Head>
  <div
    class="bg-gray-900 min-h-screen flex flex-col items-center justify-center"
  >
    <h2 class="text-3xl font-bold text-gray-100 mb-6">
      What would you like to explore today?
    </h2>
    <div class="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-md p-6">
      <button
        class="absolute top-4 left-4 text-gray-100 hover:text-gray-300"
        @click="goBack"
      >
        <Icon
          name="material-symbols:arrow-back-rounded"
          color="white"
          class="text-2xl"
        />
      </button>
      <div class="grid grid-cols-3 gap-6">
        <div
          class="relative bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 flex flex-col items-center"
        >
          <img
            src="/img/materi.png"
            alt="Profile 1"
            class="w-32 h-auto object-cover rounded-t-lg"
          />
          <h3
            class="px-4 py-2 bg-opacity-75 text-lg font-semibold text-gray-100 mt-auto"
          >
            Materi
          </h3>
        </div>
        <div
          class="relative bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 flex flex-col items-center"
        >
          <img
            src="/img/video.png"
            alt="Profile 1"
            class="w-32 h-auto object-cover rounded-t-lg"
          />
          <h3
            class="px-4 py-2 bg-opacity-75 text-lg font-semibold text-gray-100 mt-auto"
          >
            Video Pembelajaran
          </h3>
        </div>
        <div
          class="relative bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 flex flex-col items-center"
        >
          <img
            src="/img/informasi.png"
            alt="Profile 1"
            class="w-32 h-auto object-cover rounded-t-lg"
          />
          <h3
            class="px-4 py-2 bg-opacity-75 text-lg font-semibold text-gray-100 mt-auto"
          >
            Informasi
          </h3>
        </div>
        <div
          class="relative bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 flex flex-col items-center"
        >
          <img
            src="/img/latihan.png"
            alt="Profile 1"
            class="w-32 h-auto object-cover rounded-t-lg"
          />
          <h3
            class="px-4 py-2 bg-opacity-75 text-lg font-semibold text-gray-100 mt-auto"
          >
            Latihan
          </h3>
        </div>
        <div
          class="relative bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 flex flex-col items-center"
        >
          <img
            src="/img/evaluasi.png"
            alt="Profile 1"
            class="w-32 h-auto object-cover rounded-t-lg"
          />
          <h3
            class="px-4 py-2 bg-opacity-75 text-lg font-semibold text-gray-100 mt-auto"
          >
            Evaluasi
          </h3>
        </div>
        <div
          class="relative bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 flex flex-col items-center"
        >
          <img
            src="/img/chat.png"
            alt="Profile 1"
            class="w-32 h-auto object-cover rounded-t-lg"
          />
          <h3
            class="px-4 py-2 bg-opacity-75 text-lg font-semibold text-gray-100 mt-auto"
          >
            Chat
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
h3 {
  bottom: -2rem;
}
</style>
