import { v4 as uuidv4 } from "uuid"
import facebook from "../../../../public/images/icons/facebook.svg"
import instagram from "../../../../public/images/icons/instagram-fill.svg"
import linkedin from "../../../../public/images/icons/linkedin-fill.svg"
import twitter from "../../../../public/images/icons/twitter-fill.svg"
import youtube from "../../../../public/images/icons/youtube.svg"
import map from "../../../../public/images/icons/map.svg"
import phone from "../../../../public/images/icons/phone.svg"
import mail from "../../../../public/images/icons/mail.svg"
import google from "../../../../public/images/icons/google.png"
import apple from "../../../../public/images/icons/apple.png"

export async function GET(request: any) { 
    const footerAPI = {
        footer: {
            footerTitle: "Your One-Stop UGC Hub !",
            socialIcons: [
                {
                    id: uuidv4(),
                    icon: facebook,
                    link: 'https://www.facebook.com/'
                },
                {
                    id: uuidv4(),
                    icon: linkedin,
                    link: 'https://www.linkedin.com/'
                },
                {
                    id: uuidv4(),
                    icon: twitter,
                    link: 'https://twitter.com/'
                },
                {
                    id: uuidv4(),
                    icon: instagram,
                    link: "https://www.instagram.com/",
                },
                {
                    id: uuidv4(),
                    icon: youtube,
                    link: "https://www.youtube.com/",
                }
            ],
            links: [
                [
                    {
                        id: uuidv4(),
                        label: 'Insights',
                        icon: '',
                    },
                    {
                        id: uuidv4(),
                        label: 'For Creators',
                        icon: '',
                    },
                    {
                        id: uuidv4(),
                        label: 'For Companies',
                        icon: '',
                    },
                    {
                        id: uuidv4(),
                        label: 'FAQs',
                        icon: '',
                    },
                    {
                        id: uuidv4(),
                        label: 'Blogs',
                        icon: '',
                    },
                ],
                [
                    {
                        id: uuidv4(),
                        label: 'Legals',
                        icon: '',
                    },
                    {
                        id: uuidv4(),
                        label: 'Privacy Policies',
                        icon: '',
                    },
                    {
                        id: uuidv4(),
                        label: 'Terms & Conditions',
                        icon: '',
                    },
                    {
                        id: uuidv4(),
                        label: 'Help & Supports',
                        icon: '',
                    },
                    {
                        id: uuidv4(),
                        label: 'Payroll Services',
                        icon: '',
                    },
                ],
                [
                    {
                        id: uuidv4(),
                        label: 'Company',
                        icon: '',
                    },
                    {
                        id: uuidv4(),
                        label: 'About Us',
                        icon: '',
                    },
                    {
                        id: uuidv4(),
                        label: 'Careers',
                        icon: '',
                    },
                    {
                        id: uuidv4(),
                        label: 'Social Responsibilities',
                        icon: '',
                    },
                    {
                        id: uuidv4(),
                        label: 'Feedbacks',
                        icon: '',
                    },
                ],
                [
                    {
                        id: uuidv4(),
                        label: 'Contact Us',
                        icon: '',
                    },
                    {
                        id: uuidv4(),
                        label: 'Berlin, Germany',
                        icon: map,
                    },
                    {
                        id: uuidv4(),
                        label: '+1 98000 0000 0000',
                        icon: phone,
                    },
                    {
                        id: uuidv4(),
                        label: 'UGChub@gmail.com',
                        icon: mail,
                    },
                    {
                        id: uuidv4(),
                        label: 'Reach Out to Us',
                        icon: '',
                    },
                ],
            ],
            policy: '© 2023 UGC®. All Rights Reserved',
            oc: [
                {
                    id: uuidv4(),
                    pic: google,
                },
                {
                    id: uuidv4(),
                    pic: apple,
                },
            ]
        },
        
    }

    return new Response(JSON.stringify(footerAPI))
}