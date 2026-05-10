Component({
  properties: {
    activity: { type: Object, value: {} }
  },
  data: {},
  methods: {
    onClick() {
      this.triggerEvent('click', { activity: this.data.activity })
    }
  }
})
