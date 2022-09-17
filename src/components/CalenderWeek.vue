<template>
  <div id="calender-week">
    <div class="card-group">
      <div class="card" v-for="i in 7" :key="i">
        <div class="card-header text-center" role="button">
          <strong>Montag</strong>
        </div>
        <div class="card-body">
          <!-- Anfang: Template für die Calendar-Day-Component -->
          <CalendarDay />
          <!-- Ende: Template für die Calendar-Day-Component -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CalendarDay from "./CalendarDay.vue";

export default {
  name: "CalenderWeek",
  components: {
    CalendarDay,
  },
};
</script>

<style scoped>
/* scoped = style nur für aktuelle component gültig */
</style>
