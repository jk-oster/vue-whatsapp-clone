  <template>

  <div class="login">
    <header class="d-flex py-3 justify-content-between align-items-baseline mx-5">
      <h1>
        <router-link to="/"><i class="bi bi-whatsapp me-2"></i>
          <slot name="header">
            <span> WhatsApp Clone v0.1</span>
          </slot>
        </router-link>
      </h1>


      <div v-if="!isMobile" class="d-flex flex-row">
        <router-link to="/about" class="px-2"><i class="bi bi-info-circle me-2"></i><span>About</span></router-link>
        <router-link to="/privacy"  class="px-2"><i class="bi bi-shield-shaded me-2"></i><span>Data & privacy</span></router-link>
      </div>

    </header>
    <main class="d-flex justify-content-center">
      <div class="box-form">

        <div v-if="layout == 'noCols'" class="box-form-box p-3">
          <slot name="main">
            Main content
          </slot>
        </div>


        <div v-if="layout != 'noCols' || boxLayout != 'noLeft'" class="box-form-box box-form-box-left">

          <slot name="leftbox">
            <img class="img-feature" loading="lazy" src="../assets/adem-ay-ik_AuIWeBBM-unsplash.jpg" alt="">
          </slot>


        </div>

        <div v-if="layout != 'noCols'" class="box-form-box box-form-box-right p-4">

          <slot name="rightbox">
            default slot
          </slot>

        </div>

      </div>

    </main>
    <footer class="d-flex py-1 justify-content-around">
      <slot name="footer">
        <p>&copy; <a href="https://jkoster.com">Jakob Osterberger</a>
          2022 All rights reserved.</p>
        <p v-if="isMobile">
          <router-link to="/about"><i class="bi bi-info-circle me-2"></i><span>About</span></router-link>
        </p>
        <p v-if="isMobile">
          <router-link to="/privacy"><i class="bi bi-shield-shaded me-2"></i><span>Data & privacy</span></router-link>
        </p>
      </slot>
    </footer>
  </div>
</template>

<script>
import { isMobile as checkMobile } from '@/util';
export default {
  name: "PageComp",
  props: ["layout", "boxLayout"],
  data() {
    return {
      isMobile: checkMobile,
    }
  }
}
</script>