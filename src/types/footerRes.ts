export interface IFooterRes {
    footer: Footer
}

export interface Footer {
    footerTitle: string
    socialIcons: SocialIcon[]
    links: Link[][]
    policy: string
    oc: Oc[]
}

export interface SocialIcon {
    id: string
    icon: string
    link: string
}

export interface Link {
    id: string
    label: string
    icon: string
}

export interface Oc {
    id: string
    pic: string
}
