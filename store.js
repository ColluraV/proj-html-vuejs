import { reactive } from "vue";

export const store = reactive({
    
    courses:[
        {
            "thumb":"/courses-passplus.jpg",
            "name":"Pass Plus"
        },
        {
            "thumb":"/course-intensive.jpg",
            "name":"Intensive Course"
        },
        {
            "thumb":"/courses-instructor.jpg",
            "name":"Instructors"
        }
    ],

    ratesdata: [
        { name: "PASS RATE", size: "95" },
        { name: "REFERRAL RATE", size: "100" },
        { name: "ACCIDENT RATE", size: "0" },

    ],

})
