<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="setIsDetailsVisible">Show details</button>
    <ul v-show="isDetailsVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      isDetailsVisible: false,
      friend: {
        id: "tuedon",
        name: "Tuedon Tuoyo",
        email: "tuedon@gmail.com",
        phone: "123 564 789",
      },
    };
  },

  methods: {
    setIsDetailsVisible() {
      this.isDetailsVisible = !this.isDetailsVisible;
    },
  },
};
</script>