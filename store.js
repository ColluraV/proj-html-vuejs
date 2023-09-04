import { reactive } from "vue";

export const store = reactive({
    
    courses:[
        {
            thumb:"/courses-passplus.jpg",
            name:"Pass Plus"
        },
        {
            thumb:"/course-intensive.jpg",
            name:"Intensive Course"
        },
        {
            thumb:"/courses-instructor.jpg",
            name:"Instructors"
        }
    ],

    ratesdata: [
        { name: "PASS RATE", size: "95" },
        { name: "REFERRAL RATE", size: "100" },
        { name: "ACCIDENT RATE", size: "0" },

    ],
    instructors:[
        {
            thumb:"/instructor-mikehart.jpg",
            name:"Mike Hart"
        },
        {
            thumb:"/instructor-johnsmith.jpg",
            name:"John Smith"
        },
        {
            thumb:"/instructor-angelahart.jpg",
            name:"Angela Hart"
        },
    ],
    testimonials:[
        {
            thumb:"/A_Linza.jpg",
            name:"Arturo Linza",
            phrase:"Ho tante noci di cocco splendide, diddidi, tutte in fila per tre pre tre per tre!! Grandi grosse anche più grandi di te."
        },
        {
            thumb:"/G_Corrado.jpg",
            name:"Giovanna Corrado",
            phrase:"I'm feeling like Max Verstappen, but i have a longer d***!"
        },
        {
            thumb:"/R_Carluccio.jpg",
            name:"Romeo Carluccio",
            phrase:"Those courses are made for very genshin person who known how much genshin u must be to live in a ganshin woirld like this. Genshin!"
        },
        {
            thumb:"/S_Bono.jpg",
            name:"Simone Bono",
            phrase:"Eccoci qua, this is the most EASY way to improve your Easy life. I mean is really too Easy!!"
        },
        {
            thumb:"/S_Miopadre.jpg",
            name:"Miopadre Valerio",
            phrase:"Do you need a Blue Yeti? I have to sold 5 of 'em. If you don't want to buy somethin let me eat my ice-cream"
        }
    ],

});
