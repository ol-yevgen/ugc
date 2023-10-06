import { v4 as uuidv4 } from "uuid"
import heroImage from "../../../../public/images/homePage/photo.png"
import withUsBg from "../../../../public/images/homePage/withUsBg.jpg"
import firstSlide from '../../../../public/images/homePage/slide.png'
import storyPhoto from '../../../../public/images/homePage/Ricarda.jpg'
import customersIcon from '../../../../public/images/icons/customers.svg'
import doneIcon from '../../../../public/images/icons/done.svg'
import reviewsIcon from '../../../../public/images/icons/reviews.svg'
import yellowStar from '../../../../public/images/icons/star-yellow.svg'

export async function GET(request: any) {
    const homePageAPI = {
        hero: {
            heroSectionTitle: "Get user-generated content at a crazy-affordable price.We're a dream for marketers and agencies.",
            heroCountsInfo: [
                {
                    id: uuidv4(),
                    count: "1M+ customers",
                    icon: customersIcon
                },
                {
                    id: uuidv4(),
                    count: "2.5M+ tasks done",
                    icon: doneIcon
                },
                {
                    id: uuidv4(),
                    count: "4M+ user reviews",
                    icon: reviewsIcon
                }
            ],
            heroButtonTitle: "Get Your UGC Today",
            heroImage: heroImage,
        },
        description: {
            descriptionSectionTitle: "Sie suchen nach einer Möglichkeit, Ihre UGC-Videos zu vermarkten und Ihre Reichweite zu erhöhen?",
            descriptionTextOne: "“Dann ist UGChub.net die perfekte Plattform für Sie! Hier haben Sie die Möglichkeit, Ihre Arbeit als Einzelperson oder als große Werbekampagne zu präsentieren und potenzielle Kunden zu erreichen. Auf UGChub.net haben Sie die Möglichkeit, Ihr eigenes Verkäuferprofil zu erstellen, in dem Sie Ihre Arbeit präsentieren und potenzielle Kunden über Ihre Fähigkeiten und Erfahrungen informieren können. Sie können auch Ihre Kontaktdaten und Social-Media-Kanäle hinterlegen, damit Interessenten direkt mit Ihnen in Kontakt treten können.",
            descriptionTextTwo: "Aber das ist noch nicht alles! UGChub.net bietet auch die Möglichkeit für Influencer, sich dort anzumelden und sich als Werbepartner anzubieten.Mit Ihrem Verkäuferprofil können Sie sich direkt an potenzielle Kunden wenden, die auf der Suche nach Influencer- Marketing sind.Verpassen Sie nicht die Chance, Ihre UGC-Videos und Ihre Fähigkeiten auf UGChub.net zu präsentieren und potenzielle Kunden zu erreichen.Erstellen Sie noch heute Ihr Verkäuferprofil und starten Sie Ihre Karriere als erfolgreicher UGC - Creator oder Influencer!“",
        },
        withUs: {
            withUsBg: withUsBg,
            withUsTextOne: "Make your Mark and become a part of our Team",
            withUsTextTwo: "Come join our community and be a part of something great",
            withUsButton: "Come with Us",
        },
        provide: {
            provideSlides: [
                {
                    id: uuidv4(),
                    slide: firstSlide
                },
                {
                    id: uuidv4(),
                    slide: firstSlide
                },
                {
                    id: uuidv4(),
                    slide: firstSlide
                }
            ],
            provideSectionTitle: "We provide high quality UGC",
            provideText: "We can provide you with a variety of content such as unboxing, product demos, reviews, trend setters, and selfies.",
            provideButtons: [
                {
                    id: uuidv4(),
                    title: "Unboxing",
                },
                {
                    id: uuidv4(),
                    title: "Product Demos",
                },
                {
                    id: uuidv4(),
                    title: "Reviews",
                },
                {
                    id: uuidv4(),
                    title: "Trend Setter",
                }
            ],
        },
        howItWork: {
            howItWorkSectionTitle: "How it works ?",
            howItWorkSteps: [
                {
                    id: uuidv4(),
                    index: "1",
                    title: "Place Order",
                    text: "Choose the type of content that your brand requires."
                },
                {
                    id: uuidv4(),
                    index: "2",
                    title: "Complete Brief",
                    text: "Choose the type of content that your brand requires."
                },
                {
                    id: uuidv4(),
                    index: "3",
                    title: "Ship product",
                    text: "A dedicated account manager will contact you to confirm shipping information."
                },
                {
                    id: uuidv4(),
                    index: "4",
                    title: "Get Content",
                    text: "In 7–10 business days, all the information you want will be emailed to your mailbox."
                },
            ]
        },
        successStories: {
            storySectionTitle: "Some Success Stories",
            storyPhoto: storyPhoto,
            storyName: "Ricarda lben",
            storyRole: "Verified UGC Creator",
            storyYellowStar: yellowStar,
            storyText: [
                {
                    id: uuidv4(),
                    text: "“Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ollit cupidatat irure.Laborum magna nulla duis ullamco cillum dolor.Voluptate exercitation incididunt aliquip dollit cupidatat irure.Laborum magna nulla duis ullamco cillum dolor.te exercitation incididunt aliquip d “"
                },
                {
                    id: uuidv4(),
                    text: "“Nulla Loremborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip dollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. te exercitation incididunt aliquip d “"
                }
            ],
            storyStars: "4.5",
            storyReviews: "400"
        }
    }

    return new Response(JSON.stringify(homePageAPI))
}
