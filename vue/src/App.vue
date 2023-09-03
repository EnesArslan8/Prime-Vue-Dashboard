<script setup>
import { ref } from "vue";
import Sidebar from "primevue/sidebar";
import Badge from "primevue/badge";
import BadgeDirective from "primevue/badgedirective";
import ToggleButton from "primevue/togglebutton";
import Avatar from "primevue/avatar";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import Splitter from "primevue/splitter";
import SplitterPanel from "primevue/splitterpanel";
import Card from "primevue/card";
import Button from "primevue/button";
import Dropdown from "primevue/dropdown";

const visible = ref(false);
const toggle = ref(false);
const selectedCountry = ref("");
const selectedCity=ref("")
const countries = ref([
  {
    name: "Australia",
    code: "AU",
  },
  {
    name: "Brazil",
    code: "BR",
  },
  {
    name: "China",
    code: "CH",
  },
  {
    name: "Egypt",
    code: "EG",
  },
  {
    name: "France",
    code: "FR",
  },
  {
    name: "Germany",
    code: "GM",
    items: [
      { label: "Berlin", value: "Berlin" },
      { label: "Frankfurt", value: "Frankfurt" },
      { label: "Hamburg", value: "Hamburg" },
      { label: "Munich", value: "Munich" },
    ],
  },
  {
    name: "India",
    code: "IN",
  },
  {
    name: "Japan",
    code: "JA",
    items: [
      { label: "Kyoto", value: "Kyoto" },
      { label: "Osaka", value: "Osaka" },
      { label: "Tokyo", value: "Tokyo" },
      { label: "Yokohama", value: "Yokohama" },
    ],
  },
  {
    name: "Spain",
    code: "SP",
  },
  {
    name: "United States",
    code: "US",
    items: [
      { label: "Chicago", value: "Chicago" },
      { label: "Los Angeles", value: "Los Angeles" },
      { label: "New York", value: "New York" },
      { label: "San Francisco", value: "San Francisco" },
    ],
  },
  {
    name: "Turkiye",
    code: "TU",
  },
]);
const groupedCities = ref([
  {
    name: "Germany",
    code: "GM",
    items: [
      { label: "Berlin", value: "Berlin" },
      { label: "Frankfurt", value: "Frankfurt" },
      { label: "Hamburg", value: "Hamburg" },
      { label: "Munich", value: "Munich" },
    ],
  },
  {
    name: "Japan",
    code: "JA",
    items: [
      { label: "Kyoto", value: "Kyoto" },
      { label: "Osaka", value: "Osaka" },
      { label: "Tokyo", value: "Tokyo" },
      { label: "Yokohama", value: "Yokohama" },
    ],
  },
  {
    name: "United States",
    code: "US",
    items: [
      { label: "Chicago", value: "Chicago" },
      { label: "Los Angeles", value: "Los Angeles" },
      { label: "New York", value: "New York" },
      { label: "San Francisco", value: "San Francisco" },
    ],
  }
]);
const generateFlagImageUrl = (code) => {
  return `https://www.worldometers.info/img/flags/${code.toLowerCase()}-flag.gif`;
};
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
          <button class="hamburgerBtn" @click="visible = true">
            <i class="pi pi-bars"></i>
          </button>
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
            :style="
              toggle ? 'background:transparent' : 'background:transparent;'
            "
          />
          <span
            class="onlineStatus"
            :style="toggle ? 'color:#000' : 'color:#fff'"
            >{{ toggle ? "Online" : "Offline" }}</span
          >
        </label>
      </div>
    </div>
    <div class="informationSection">
      <div class="informationContainer">
        <div class="accordion">
          <Accordion :activeIndex="0">
            <AccordionTab header="Güvenlik">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </AccordionTab>
            <AccordionTab header="7/24 Canlı Servis">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Consectetur, adipisci velit, sed quia non numquam eius
                modi.
              </p>
            </AccordionTab>
          </Accordion>
        </div>
        <div class="tabview">
          <TabView>
            <TabPanel>
              <template #header>
                <i style="margin-right: 0.5rem" class="pi pi-wallet"></i>
                <span>Hisse Nasıl Alınır</span>
              </template>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </TabPanel>
            <TabPanel>
              <template #header>
                <i style="margin-right: 0.5rem" class="pi pi-question"></i>
                <span>Halka Arz Nedir</span>
              </template>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Consectetur, adipisci velit, sed quia non numquam eius
                modi.
              </p>
            </TabPanel>
          </TabView>
        </div>
      </div>
    </div>
    <div class="imgAdsSection">
      <div class="imgAdsContainer">
        <div class="splitter" style="margin-bottom: 5rem">
          <Splitter style="height: 300px; background-color: #333" class="mb-5">
            <SplitterPanel
              class="flex align-items-center justify-content-center"
            >
              <img
                style="
                  width: 100%;
                  max-width: 100%;
                  height: 100%;
                  padding: 0.5rem;
                  border-radius: 20px;
                  filter: drop-shadow(0 5px 20px rgba(16, 97, 219, 0.5));
                "
                src="https://imgrosetta.mynet.com.tr/file/17160661/17160661-728xauto.jpg"
              />
            </SplitterPanel>
            <SplitterPanel
              class="flex align-items-center justify-content-center"
            >
              <img
                style="
                  width: 100%;
                  max-width: 100%;
                  height: 100%;
                  padding: 0.5rem;
                  border-radius: 20px;
                  filter: drop-shadow(0 5px 20px rgba(16, 97, 219, 0.5));
                "
                src="https://www.alnusyatirim.com/static/uploads/hisse-senedi-fiyatlari-2.jpeg"
              />
            </SplitterPanel>
          </Splitter>
          <div class="selectCountry" style="margin-top: 3rem; ">
            <Dropdown
              v-model="selectedCountry"
              :options="countries"
              optionLabel="name"
              placeholder="Select a Country"
              class="w-full md:w-14rem"
              style="width: 50%"
            >
              <template #value="slotProps">
                <div v-if="slotProps.value" class="flex align-items-center">
                  <!-- <img
                    :alt="slotProps.value.label"
                    src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                    
                  /> -->
                  <div>{{ slotProps.value.name }}</div>
                </div>
                <span v-else>
                  {{ slotProps.placeholder }}
                </span>
              </template>
              <template #option="slotProps">
                <div
                  class="flex align-items-center"
                  style="display: flex; width: 100%"
                >
                  <img
                    :alt="slotProps.option.label"
                    :src="generateFlagImageUrl(slotProps.option.code)"
                    alt="Flag"
                    style="width: 32px; margin-right: 1rem"
                  />
                  <div>{{ slotProps.option.name }}</div>
                </div>
              </template>
            </Dropdown>
            <Dropdown
              v-model="selectedCity"
              :options="groupedCities"
              optionLabel="label"
              optionGroupLabel="label"
              optionGroupChildren="items"
              placeholder="Mevcut Halka Arzlar"
              class="w-full md:w-14rem"
              style="width: 45%;margin-left: 5%;"
            >
              <template #optiongroup="slotProps">
                <div
                  v-if="slotProps.option.items"
                  class="flex align-items-center"
                >
                  <img
                    :alt="slotProps.option.label"
                    :src="generateFlagImageUrl(slotProps.option.code)"
                    style="width: 18px ;background-color: #333;"
                  />
                  <div>{{ slotProps.option.label }}</div>
                </div>
              </template>
            </Dropdown>
          </div>
        </div>
        <div class="card">
          <Card style="width: 25em">
            <template #header>
              <img
                style="width: 100%"
                alt="user header"
                src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/200397129/original/6a2aebde0a11fed47eaaad653c7bbd4485d214bb/setup-and-manage-google-ads-adwords-ppc-campaign.png"
              />
            </template>
            <template #title> Advanced Card </template>
            <template #subtitle> Card subtitle </template>
            <template #content>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa
                ratione quam perferendis esse, cupiditate neque quas!
              </p>
            </template>
            <template #footer>
              <Button icon="pi pi-check" label="Save" />
              <Button
                label="Cancel"
                severity="secondary"
                style="margin-left: 0.5rem"
              ></Button>
            </template>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: auto;
}
.splitter {
  width: 60%;
  display: flex;
  flex-direction: column;
}
.imgAdsContainer {
  width: 90%;
  display: flex;
  justify-content: space-around;
}
.imgAdsSection {
  display: flex;
  margin-top: 5rem;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.informationSection {
  display: flex;
  margin-top: 5rem;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.tabview {
  width: 40%;
}
.informationContainer {
  width: 90%;
  border-top: 1px solid #dedede;
  border-bottom: 1px solid #dedede;
  display: flex;
  justify-content: space-around;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}
.accordion {
  width: 40%;
}
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
  cursor: pointer;
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

.onlineStatus {
  font-weight: 500;
  letter-spacing: 1.2px;
}
</style>
