<template>
  <div class="footer">
    <div class="footer__wrapper">
      <router-link to="/">
        <img
          class="footer__images"
          src="@/assets/images/logo.png"
          alt="Кравчун Л.В."
        />
      </router-link>
      <div class="footer__item"></div>
      <div class="footer__item">
        <p class="footer__signature">Кравчун Л.В. © 2022</p>
        <div class="footer__social">
          <a class="social__item" href="#" target="blanck">
            <svg
              class="social__icon social__icon_telegram"
              viewBox="0 0 48 48"
              width="30"
              height="30"
            >
              <path
                d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"
                fill="#4D76A1"
              />
              <path
                d="M8.93822 25.174C11.7438 23.6286 14.8756 22.3388 17.8018 21.0424C22.836 18.919 27.8902 16.8324 32.9954 14.8898C33.9887 14.5588 35.7734 14.2351 35.9484 15.7071C35.8526 17.7907 35.4584 19.8621 35.188 21.9335C34.5017 26.4887 33.7085 31.0283 32.935 35.5685C32.6685 37.0808 30.774 37.8637 29.5618 36.8959C26.6486 34.9281 23.713 32.9795 20.837 30.9661C19.8949 30.0088 20.7685 28.6341 21.6099 27.9505C24.0093 25.5859 26.5539 23.5769 28.8279 21.0901C29.4413 19.6088 27.6289 20.8572 27.0311 21.2397C23.7463 23.5033 20.5419 25.9051 17.0787 27.8945C15.3097 28.8683 13.2479 28.0361 11.4797 27.4927C9.89428 26.8363 7.57106 26.175 8.93806 25.1741L8.93822 25.174Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="18.0028"
                  y1="2.0016"
                  x2="6.0028"
                  y2="30"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#37AEE2" />
                  <stop offset="1" stop-color="#1E96C8" />
                </linearGradient>
              </defs>
            </svg>
          </a>
          <a class="social__item" href="#" target="blanck">
            <svg
              class="social__icon social__icon_vk"
              viewBox="0 0 112.196 112.196"
              width="30"
              height="30"
            >
              <circle
                cx="56.098"
                cy="56.098"
                id="XMLID_11_"
                r="56.098"
                style="fill: #4d76a1"
              />
              <path
                d="M53.979,80.702h4.403c0,0,1.33-0.146,2.009-0.878   c0.625-0.672,0.605-1.934,0.605-1.934s-0.086-5.908,2.656-6.778c2.703-0.857,6.174,5.71,9.853,8.235   c2.782,1.911,4.896,1.492,4.896,1.492l9.837-0.137c0,0,5.146-0.317,2.706-4.363c-0.2-0.331-1.421-2.993-7.314-8.463   c-6.168-5.725-5.342-4.799,2.088-14.702c4.525-6.031,6.334-9.713,5.769-11.29c-0.539-1.502-3.867-1.105-3.867-1.105l-11.076,0.069   c0,0-0.821-0.112-1.43,0.252c-0.595,0.357-0.978,1.189-0.978,1.189s-1.753,4.667-4.091,8.636c-4.932,8.375-6.904,8.817-7.71,8.297   c-1.875-1.212-1.407-4.869-1.407-7.467c0-8.116,1.231-11.5-2.397-12.376c-1.204-0.291-2.09-0.483-5.169-0.514   c-3.952-0.041-7.297,0.012-9.191,0.94c-1.26,0.617-2.232,1.992-1.64,2.071c0.732,0.098,2.39,0.447,3.269,1.644   c1.135,1.544,1.095,5.012,1.095,5.012s0.652,9.554-1.523,10.741c-1.493,0.814-3.541-0.848-7.938-8.446   c-2.253-3.892-3.954-8.194-3.954-8.194s-0.328-0.804-0.913-1.234c-0.71-0.521-1.702-0.687-1.702-0.687l-10.525,0.069   c0,0-1.58,0.044-2.16,0.731c-0.516,0.611-0.041,1.875-0.041,1.875s8.24,19.278,17.57,28.993   C44.264,81.287,53.979,80.702,53.979,80.702L53.979,80.702z"
                style="fill-rule: evenodd; clip-rule: evenodd; fill: #ffffff"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style lang="scss">
.footer {
  background-color: var(--color-background-footer);

  &__wrapper {
    margin: 0 auto;
    padding: 20px;
    max-width: var(--wrapper-width);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
  }
  &__social {
    display: flex;
    align-items: center;
    gap: 15px;
  }
}
</style>
