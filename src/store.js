import { calendarWeekData } from "./seed";
import { reactive, readonly } from "vue";

const state = reactive({
  calendarWeekData,
});

const getters = {
  activeDay: () => state.calendarWeekData.find((day) => day.active),
};

const mutations = {
  editEvent(dayId, eventTitle) {
    // Alle edit-Attribute auf false setzen, damit immer nur ein Event bearbeitet werden kann
    state.calendarWeekData.map((dayObj) => {
        dayObj.events.map((event) => (event.edit = false));
    });
    // Das gewünschte edit Attribute auf true setzen
    const dayObj = state.calendarWeekData.find((day) => day.id === dayId);
    const eventObj = dayObj.events.find((event) => event.title === eventTitle);
    eventObj.edit = true;
  },
  deleteEvent(dayId, eventTitle) {
    const dayObj = state.calendarWeekData.find((day) => day.id === dayId);
    const eventIndex = dayObj.events.findIndex(
      (event) => event.title === eventTitle
    );
    dayObj.events.splice(eventIndex, 1);
  },
};

export default {
  state: readonly(state),
  getters,
  mutations,
};
