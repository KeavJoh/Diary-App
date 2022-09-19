<template>
  <div class="card border-start" :class="cardClasses">
    <div
      class="card-header text-center"
      role="button"
      :class="cardHeaderClasses"
    >
      <strong>{{ day.fullName }}</strong>
    </div>
    <div class="card-body">
      <CalendarEvent
        v-for="event in day.events"
        :key="event.title"
        :event="event"
      >
      <template v-slot:eventPriority="slotProps"> {{ slotProps.priorityDisplayName }} </template>
      <template v-slot="slotProps"> <i> {{ slotProps.event.title }} </i> </template>
      </CalendarEvent>
    </div>
  </div>
</template>

<script>
import CalendarEvent from "./CalendarEvent.vue";
import Store from "../store";

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

  computed: {
    cardClasses() {
      return this.day.id === Store.getters.activeDay().id
        ? ["border-primary"]
        : null;
    },
    cardHeaderClasses() {
      return this.day.id === Store.getters.activeDay().id
        ? ["bg-primary", "test-white"]
        : null;
    },
  },
};
</script>

<style scoped></style>
