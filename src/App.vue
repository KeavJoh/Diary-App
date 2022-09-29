<template>
  <div class="container-fluid mt-5">
    <div class="row">
      <div class="col-12">
        <!-- Anfang: Template für die Calendar-Week-Component -->
        <keep-alive>
          <component :is="activeView"/>
        </keep-alive>
        <!-- Ende: Template für die Calendar-Week-Component -->
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-4 offset-4">
        <!-- Anfang: Template für die Calendar-Entry-Component -->
        <CalendarEntry />
        <!-- Ende: Template für die Calendar-Day-Component -->
      </div>
      <div class="col-2 offset-2">
        <div class="float-end">
          <!-- Mit dem Button blenden wir die Calendar-Settings-Component ein bzw. aus. -->
          <button class="btn btn-lg mb-2" :class="buttonSettingsClasses" @click="toogleDisplaySettings()">
            <i class="fas fa-cogs"></i>
          </button>
        </div>
        <!-- Anfang: Template für die Calendar-Settings-Component -->
        <CalendarSettings v-if="displaySettings"/>
        <!-- Ende: Template für die Calendar-Day-Component -->
      </div>
    </div>
  </div>
</template>

<script>
import Store from './store';
import CalendarWeek from "./components/CalenderWeek";
import CalendarWeekAsList from "./components/CalendarWeekAsList.vue";
import CalendarEntry from "./components/CalendarEntry";
import CalendarSettings from "./components/CalendarSettings";

export default {
  name: "App",
  components: {
    // Langschreibweise
    // 'CalenderWeek' : CalenderWeek

    // Kurzschreibweise
    CalendarWeek,
    CalendarWeekAsList,
    CalendarEntry,
    CalendarSettings,
  },
  data() {
    return {
      displaySettings: false,
    };
  },
  computed: {
    buttonSettingsClasses() {
      return this.displaySettings ? ["btn-success"] : ["btn-outline-success"];
    },
    activeView() {
      return Store.getters.activeView();
    }
  },
  methods: {
    toogleDisplaySettings() {
      this.displaySettings = !this.displaySettings;
    }
  }
};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "~@fortawesome/fontawesome-free/css/all.min.css";

.square {
  width: 40px;
  height: 40px;
}
</style>
