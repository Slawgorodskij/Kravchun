<template>
  <section class="feedback">
    <div class="container">
      <h2 class="feedback__title">Остались вопросы?</h2>
      <p class="feedback__text">Напишите нам</p>
      <form class="feedback__form" action="#">
        <input
          name="name"
          type="text"
          class="feedback__input"
          placeholder="Ваше имя*"
        />

        <!--        @error('name')-->
        <!--        <p class="feedback__text-error">{{ $message }}</p>-->
        <!--        @enderror-->

        <input
          name="email"
          type="email"
          class="feedback__input"
          placeholder="Ваш email*"
        />

        <!--        @error('email')-->
        <!--        <p class="feedback__text-error">{{ $message }}</p>-->
        <!--        @enderror-->

        <textarea
          name="message"
          class="feedback__input feedback__input_textarea"
          placeholder="текст обращения*"
        ></textarea>

        <!--        @error('message')-->
        <!--        <p class="feedback__text-error">{{ $message }}</p>-->
        <!--        @enderror-->

        <button class="button feedback__button">
          <span class="feedback__button_text"> Отправить</span>
        </button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "FeedbackComponent",
};
</script>

<style lang="scss">
.feedback {
  padding: 100px 0;
  background-color: var(--color-hover-dark);
  color: var(--color-white);
  &__form {
    padding: 25px;
    @include flex-all-center;
    flex-direction: column;
  }
  &__input {
    margin-bottom: 10px;
    width: 85vw;
    height: 35px;
    border: 1px solid var(--color-border);
    border-radius: 3px;
    &_textarea {
      margin-bottom: 50px;
      height: 70px;
    }
  }
  &__button {
    padding: 0.5rem;
    width: 85vw;
    background-color: var(--color-button-backgraund);
    text-align: center;
    color: var(--color-link);
    border: 1px solid var(--color-border);
    border-radius: 3px;
    transition: all 0.4s linear;
    cursor: pointer;
    &_text {
      font-family: "Formular", sans-serif;
      font-size: 20px;
      letter-spacing: 3px;
    }
    &:hover {
      color: var(--color-link-hover);
      background-color: var(--color-button-backgraund-hover);
      box-shadow: 0 15px 25px -2px rgba(34, 60, 80, 0.35);
    }
  }
}
</style>
