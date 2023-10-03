export interface IHeroPageReq {
    hero: IHero
    description: IDescription
    withUs: IWithUs
    provide: IProvide
    howItWork: IHowItWork
    successStories: ISuccessStories
}

export interface IHero {
    heroSectionTitle: string
    heroCountsInfo: IHeroCountsInfo[]
    heroButtonTitle: string
    heroImage: string
}

export interface IHeroCountsInfo {
    id: string
    count: string,
    icon: string
}

export interface IDescription {
    descriptionSectionTitle: string
    descriptionTextOne: string
    descriptionTextTwo: string
}

export interface IWithUs {
    withUsBg: string
    withUsTextOne: string
    withUsTextTwo: string
    withUsButton: string
}

export interface IProvide {
    provideSlides: IProvideSlide[]
    provideSectionTitle: string
    provideText: string
    provideButtons: IProvideButton[]
}

export interface IProvideSlide {
    id: string
    slide: string
}

export interface IProvideButton {
    id: string
    title: string
}

export interface IHowItWork {
    howItWorkSectionTitle: string
    howItWorkSteps: IHowItWorkStep[]
}

export interface IHowItWorkStep {
    id: string
    index: string
    title: string
    text: string
}

export interface ISuccessStories {
    storySectionTitle: string
    storyPhoto: string
    storyName: string
    storyRole: string
    storyText: IStoryText[]
    storyStars: string
    storyReviews: string
}

export interface IStoryText {
    id: string
    text: string
}
