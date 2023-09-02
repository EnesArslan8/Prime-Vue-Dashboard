<script setup>
import { ref } from "vue";
import Sidebar from "primevue/sidebar";
import Badge from "primevue/badge";
import BadgeDirective from "primevue/badgedirective";
import ToggleButton from "primevue/togglebutton";
import Avatar from "primevue/avatar";

const visible = ref(false);
const toggle = ref(false);
</script>

<template>
  <div class="container">
    <div class="header">
      <div class="headerLeft">
        <img
          class="logo"
          src="https://lenasoftware.com/Uploads/Products/lena-maint-logo-singlepng-aesp383t-.png"
        />
        <div class="card flex justify-content-center hamburger">
          <Sidebar v-model:visible="visible">
            <h2>Sidebar</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Sidebar>
          <Button class="hamburgerBtn" @click="visible = true"
            ><i class="pi pi-bars"></i
          ></Button>
        </div>
      </div>
      <div class="headerRight">
        <i class="pi pi-bell"><Badge class="notification" value="2"></Badge></i>
        <Avatar icon="pi pi-user" class="avatarPp" shape="circle" />
        <label
          class="toggleBtn"
          :style="
            toggle
              ? 'background:#92e6a7;display:inline-block'
              : 'background:#e66063;display:inline-block;color:#fff;'
          "
        >
          <ToggleButton
            v-model="toggle"
            onLabel=""
            offLabel=""
            onIcon="pi pi-circle-fill"
            offIcon="pi pi-circle"
            class="toggleIcon"
            :style="toggle?'background:transparent':'background:transparent;'"
          />
          <span class="onlineStatus" :style="toggle ? 'color:#000' : 'color:#fff'">{{
            toggle ? "Online" : "Offline"
          }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100%;
  width: 100%;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  background-color: #efefef;
  border-bottom: 1px solid #dedede;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
}
.headerLeft {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 2rem;
}
.logo {
  padding: 0.75rem;
  height: 5rem;
  filter: drop-shadow(5px 5px 0px rgba(0, 0, 0, 0.2));
}
.hamburgerBtn {
  background-color: transparent;
  cursor: pointer;
  border: none;
  outline: none;
}
i.pi-bars {
  font-size: 1rem;
}
.headerRight {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 2rem;
}
i.pi-bell {
  font-size: 1.5rem;
  position: relative;
  cursor: pointer;
  padding: 0 1rem 0 0;
}
.notification {
  position: absolute;
  bottom: 13px;
  right: 5px;
}
.avatarPp {
  background-color: #6366f1;
  color: #ffffff;
}
.toggleBtn {
  cursor: pointer;
  background-color: transparent;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  border-radius: 50px;
  width: 100px;
}
.toggleIcon {
  margin-right: 0.5rem;
  background-color: transparent;
  height: 10px;
  width: auto;
  border: none;
  outline: none;
  color: #000;
}
.onlineStatus{
  font-weight: 500;
  letter-spacing: 1.2px;
}
</style>
