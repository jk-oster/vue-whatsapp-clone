  <template>

    <div class="login ">
      <header class="d-flex py-3 justify-content-start align-items-center">
        <h1><a href="#"><img src="../assets/hamburger-menu-svgrepo-com.svg" alt="Logo">
          <slot name="header">
            WhatsApp Clone v0.1
          </slot>
        </a></h1>
      </header>
      <main class="d-flex justify-content-center">
        <div class="box-form">
          <div class="box-form-box box-form-box-left p-4">

            <slot name="leftbox">
              <img class="img-feature" src="../assets/adem-ay-ik_AuIWeBBM-unsplash.jpg" alt="">
            </slot>


          </div>

          <div class="box-form-box box-form-box-right p-4">

            <slot name="rightbox">
              default slot
            </slot>

          </div>

        </div>

      </main>
      <footer class="d-flex py-1 mt-3 justify-content-around">
        <slot name="footer">
          <p>&copy; <a href="https://jkoster.com">Jakob Osterberger</a>
            2022 All right reserved.</p>
          <p><router-link to="/about">About this page</router-link></p>
          <p><router-link to="/privacy">Data protection and privacy</router-link></p>
        </slot>
      </footer>
    </div>
  </template>

<script>
export default {
  name: "PageComp"
}
</script>