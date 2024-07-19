<template>
  <footer class="border-top">
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <ul class="list-inline text-center">
            <li class="list-inline-item">
              <a href="#!">
                <span class="fa-stack fa-lg">
                  <font-awesome-icon icon="circle" class="fa-stack-2x" />
                  <font-awesome-icon
                    icon="fa-brands fa-twitter"
                    class="fa-stack-1x fa-inverse"
                  />
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#!">
                <span class="fa-stack fa-lg">
                  <font-awesome-icon icon="circle" class="fa-stack-2x" />
                  <font-awesome-icon
                    icon="fa-brands fa-facebook"
                    class="fa-stack-1x fa-inverse"
                  />
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#!">
                <span class="fa-stack fa-lg">
                  <font-awesome-icon icon="circle" class="fa-stack-2x" />
                  <font-awesome-icon
                    icon="fa-brands fa-github"
                    class="fa-stack-1x fa-inverse"
                  />
                </span>
              </a>
            </li>
          </ul>
          <div class="small text-center text-muted fst-italic">
            Copyright &copy; Your Website 2023
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>