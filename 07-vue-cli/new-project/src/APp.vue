<template>
  <div>
    <h2>MY APPLICATION</h2>
    <friend-contact></friend-contact>
    <friend-contact></friend-contact>
  </div>
</template>

<script>
import FriendContact from './components/FriendContact.vue';
export default {
  components: { FriendContact },
  data() {
    return {
      friends: [
        {
          id: "tuedon",
          name: "Tuedon Tuoyo",
          email: "tuedon@gmail.com",
          phone: "123 564 789",
        },
        {
          id: "somto",
          name: "Somto Nwosu",
          email: "somto@gmail.com",
          phone: "123 456 974",
        },
      ],
    };
  },
};
</script>
