<template>
  <section id="main" class="main">
    <section
      class="mx-auto flex h-screen w-screen flex-col-reverse items-center justify-end xl:justify-between xl:w-[1180px] xl:flex-row"
    >
      <section>
        <h1
          class="relative text-center font-[600] text-[28px] leading-[130%] text-white xl:text-left xl:text-[48px]"
          data-aos="fade-up"
        >
          Welcome to MathLit
          <br />
          <p
            class="font-light text-xl w-[600px] xl:px-0 px-[20px] tracking-normal text-[#9DABC3] text-center xl:text-left mt-[10px]"
          >
            Welcome to MathLit! We believe in limitless learning. Our platform
            offers a wide array of courses and resources to empower learners of
            all levels. With expert instructors and innovative methods, we help
            you exceed your limits and achieve your goals. Join MathLit today
            and redefine your math journey!
          </p>
        </h1>

        <section
          class="relative w-screen h-full xl:w-full mt-11 flex flex-row items-center gap-5 justify-center xl:justify-start"
        >
          <nuxt-link
            class="button bg-gradient-to-r from-[#703DDD] to-[#A267EE] text-white"
            data-aos="fade-up"
            :to="'/menu'"
            >Start Learning</nuxt-link
          >
        </section>
      </section>
      <img src="/img/welcome.png" class="w-[450px]" alt="" />
    </section>
  </section>
</template>
<style scoped>
.main {
  /* background: linear-gradient(180deg, rgba(0, 0, 0, 0) 34.31%, #1a202c 100%),
    #703893; */

  @apply h-[530px] xl:h-[72vh] w-screen lg:h-[680px] mt-[-50px];
}
.main .button {
  @apply flex h-12 w-[40vw] items-center justify-center gap-1 rounded-lg text-[14px] font-[600] xl:font-semibold transition duration-300 hover:opacity-70 xl:h-12 xl:w-[180px] xl:gap-2 xl:text-base;
}

.learn {
  @apply w-[40vw] xl:w-auto;
}
</style>
