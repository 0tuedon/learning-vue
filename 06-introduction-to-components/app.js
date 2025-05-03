const app = Vue.createApp({
  data() {
    return {
      friendsList: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phoneNumber: "01234 5678 991",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phoneNumber: "09876 543 221",
          email: "julie@localhost.com",
        },
      ],
    };
  },
});

app.component("friend-component", {
  template: `
  <li>
          <h2>{{ friend.name}}</h2>
          <button @click="setIsVisible">Show Details</button>
          <ul v-show="isVisible">
            <li><strong>Phone:</strong> {{ friend.phone}}</li>
            <li><strong>Email:</strong> {{ friend.email}}</li>
          </ul>
    </li>
    `,
  data() {
    return {
      isVisible: true,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phoneNumber: "01234 5678 991",
        email: "manuel@localhost.com",
      },
    };
  },

  methods: {
    setIsVisible() {
      this.isVisible = !this.isVisible;
    },
  },
});

app.mount("#app");
