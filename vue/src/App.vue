<script setup>
import { ref } from "vue";
import Sidebar from "primevue/sidebar";
import Badge from "primevue/badge";
import BadgeDirective from "primevue/badgedirective";
import ToggleButton from "primevue/togglebutton";
import Avatar from "primevue/avatar";
import AvatarGroup from "primevue/avatargroup";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import Splitter from "primevue/splitter";
import SplitterPanel from "primevue/splitterpanel";
import Card from "primevue/card";
import Chart from "primevue/chart";
import Button from "primevue/button";
import Dropdown from "primevue/dropdown";
import Tag from "primevue/tag";
import ConfirmPopup from "primevue/confirmpopup";
import ProgressBar from "primevue/progressbar";
import Rating from "primevue/rating";
import Knob from "primevue/knob";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
import Galleria from "primevue/galleria";
const toast = useToast();

const visible = ref(false);
const toggle = ref(false);
const selectedCountry = ref("");
const selectedCity = ref("");
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
  },
]);
const generateFlagImageUrl = (code) => {
  return `https://www.worldometers.info/img/flags/${code.toLowerCase()}-flag.gif`;
};
const chartData = ref({
  labels: ["Ebebek", "Turpak", "Koç", "Togg"],
  datasets: [
    {
      label: "Sales",
      data: [540, 325, 702, 120],
      backgroundColor: [
        "rgba(255, 159, 64, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
      ],
      borderColor: [
        "rgb(255, 159, 64)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
      ],
      borderWidth: 1,
      width: 200,
    },
  ],
});
const chartOptions = ref({
  scales: {
    y: {
      beginAtZero: true,
    },
  },
});

import { useConfirm } from "primevue/useconfirm";
const confirm = useConfirm();
const showTemplate = (event) => {
  confirm.require({
    target: event.currentTarget,
    group: "demo",
    message: "This is a chart. This is shows graph",
  });
};

const rating = ref(null);

const knob1 = ref("63");
const knob2 = ref("71");

const toast1 = () => {
  toast.add({
    severity: "success",
    summary: "Rating",
    detail: "Thanks for rating",
    life: 3000,
  });
};

const galleriaImg = [
  {
    id: 1,
    url: "https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/new_test.jpeg",
  },
  {
    id: 2,
    url: "https://www.searchenginejournal.com/wp-content/uploads/2021/11/get-to-know-google-analytics-4_-a-complete-guide-61b06558a2bc6-sej.png",
  },
  {
    id: 3,
    url: "https://www.searchenginejournal.com/wp-content/uploads/2020/02/10-great-google-analytics-alternatives-5e4175671fa6a.png",
  },
  {
    id: 4,
    url: "https://thedial.co/wp-content/uploads/2021/11/bitcoin.jpeg",
  },
];


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
          <div class="selectCountry" style="margin-top: 3rem">
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
              style="width: 45%; margin-left: 5%"
            >
              <template #optiongroup="slotProps">
                <div
                  v-if="slotProps.option.items"
                  class="flex align-items-center"
                >
                  <img
                    :alt="slotProps.option.label"
                    :src="generateFlagImageUrl(slotProps.option.code)"
                    style="width: 18px; background-color: #333"
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
    <div class="graphChart">
      <div
        class="graphContainer"
        style="display: flex; justify-content: space-between"
      >
        <div class="barChart" style="width: 60%">
          <div
            style="width: 100%; display: flex; justify-content: space-between"
          >
            <div class="tag">
              <Tag icon="pi pi-thumbs-up" class="tag" value="Sevilen"></Tag>
              <Tag
                icon="pi pi-check"
                class="tag"
                severity="success"
                value="Onaylanmış"
              ></Tag>
              <ConfirmPopup group="demo">
                <template #message="slotProps">
                  <div class="flex p-4">
                    <p class="px-2" style="margin: 0.5rem 1rem">
                      {{ slotProps.message.message }}
                    </p>
                  </div>
                </template>
              </ConfirmPopup>
              <Tag
                @click="showTemplate($event)"
                icon="pi pi-info-circle"
                severity="info"
                class="tag popup"
                value="İnfo"
              ></Tag>
            </div>
            <AvatarGroup>
              <Avatar
                image="https://imgv3.fotor.com/images/gallery/watercolor-female-avatar.jpg"
                size="medium"
                shape="circle"
              />
              <Avatar
                image="https://i.pinimg.com/564x/9d/d4/9a/9dd49a4547b0c21ffaf4ce6046bff3d3.jpg"
                size="medium"
                shape="circle"
              />
              <Avatar
                image="https://i.pinimg.com/564x/90/41/57/904157e5187b6af3e742ffb04da1e23d.jpg"
                size="medium"
                shape="circle"
              />
              <Avatar
                image="https://i.pinimg.com/236x/de/9c/0c/de9c0c46bc1fd8c11d8294c75497ab66.jpg"
                size="medium"
                shape="circle"
              />
              <Avatar
                image="https://i.pinimg.com/236x/f6/f9/06/f6f90621447e1fb951461b6c849ffa07.jpg"
                size="medium"
                shape="circle"
              />
              <Avatar
                label="+2"
                shape="circle"
                size="medium"
                style="background-color: '#9c27b0', color: '#ffffff'"
              />
            </AvatarGroup>
          </div>
          <Chart
            width="100%"
            height="auto"
            type="bar"
            :data="chartData"
            :options="chartOptions"
          />
          <div
            style="
              width: 100%;
              margin-top: 1rem;
              display: flex;
              justify-content: space-between;
            "
          >
            <ProgressBar
              :pt="{
                value: {
                  style: {
                    background: 'linear-gradient(to right, #8e2de2, #4a00e0)',
                  },
                },
              }"
              style="width: 60%; height: 17px"
              :value="71"
              mode="determinate"
            ></ProgressBar>
            <Toast />
            <Rating
              @click="toast1"
              v-model="rating"
              model-value="4"
              cancel-icon="false"
            />
          </div>
        </div>
        <div
          class="knobs"
          style="
            width: 40%;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
          "
        >
          <div
            style="
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
            "
          >
            <h2>Ay Artış Oranı</h2>
            <Knob size="300px" v-model="knob1" />
          </div>
          <div
            style="
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
            "
          >
            <h2>Haftalık Artış Oranı</h2>
            <Knob size="300px" v-model="knob2" />
          </div>
        </div>
      </div>
    </div>
    <div class="galleriaSection">
      <div class="galleriaContainer">
        <div style="width: 1200px; height: 40%; ">
          <Galleria
            show-thumbnail-navigators="false"
            show-thumbnails="false"
            :value="galleriaImg"
            :numVisible="4"
            style="height: 100%; width: 100%"
            containerStyle="max-width: 640px"
          >
            <template style="width: 600px" #item="slotProps">
              <img
                :src="slotProps.item.url"
                style="width: 600px; height: 450px"
              />
            </template>
            <template #thumbnail="slotProps">
              <img style="width: 100px" :src="slotProps.item.url" />
            </template>
          </Galleria>
        </div>
        <div class="doughnutChart" style="width: 40%;">
          <Chart width="100px" type="doughnut" :data="chartData" :options="chartOptions"  />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.galleriaContainer {
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* justify-content: space-around; */
}
.galleriaSection {
  display: flex;
  margin-top: 7rem;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.tag.popup {
  cursor: pointer;
}
.tag {
  margin-right: 0.5rem;
}
.graphContainer {
  width: 90%;
  display: flex;
  /* justify-content: space-around; */
}
.graphChart {
  display: flex;
  margin-top: 5rem;
  align-items: center;
  justify-content: center;
  width: 100%;
}
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
