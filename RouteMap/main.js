var app = new Vue({
    el: "#app",
    data: {
        show: false,
        message: "Tut"
    },
    methods: {
        MenuShow() {
            if (this.show == true) {
                this.show = false
            }
            else {
                this.show = true;
            }
        }
    }
})