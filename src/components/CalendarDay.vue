<template>
  <div class="card">
    <div class="card-header text-center" role="button">
      <strong>{{ day.fullName }}</strong>
    </div>
    <div class="card-body">
      <CalendarEvent
        v-for="event in day.events"
        :key="event.title"
        :event="event"
      />
    </div>
  </div>
</template>

<script>
import CalendarEvent from "./CalendarEvent.vue";

export default {
  name: "CalendarDay",
  components: {
    CalendarEvent,
  },
  // Array-Schreibweise; Nicht zu empfehlen
  // props: ["day"],

  // Objekt-Schreibweise
  props: {
    day: {
      type: Object,
      required: true,
      default: function () {
        return {
          id: -1,
          fullName: "Fehler",
          events: [],
        };
      },
      validator: function (value) {
        if (Object.keys(value).includes("id")) {
          return true;
        }
      },
    },
  },
};
</script>

<style scoped></style>
