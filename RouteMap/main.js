﻿var app = new Vue({
    el: "#app",
    data: {
        show: false,
        message: "Tut",
        origin: { lat: 50.44952836682165, lng: 30.600016080711644 },
        destination: { lat: 50.48307483695035, lng: 30.39718793209465 },
        waypoints: []
    },
    methods: {
        MenuShow() {
            if (this.show == true) {
                this.show = false
            }
            else {
                this.show = true;
            }
            var event = new CustomEvent("view-info", {
                detail: {
                    content: "Передали",
                    position: { lat: 50.44952836682165, lng: 30.600016080711644 },
                }
            });
            this.$refs.map.dispatchEvent(event);
        },
        InitMapElement() {
            return this.$refs.map;
        },
        RouteMap() {
            var event = new CustomEvent("path-update", {
                detail: {
                    origin: this.origin,
                    destination: this.destination,
                    waypoints: this.waypoints
                }
            });
            this.$refs.map.dispatchEvent(event);
        },
        AddWaypoint() {
            this.waypoints.push({
                location: { lat: 50.45464393234918, lng: 30.479264484049956 },
                stopover: true
            })
        }
    }
})