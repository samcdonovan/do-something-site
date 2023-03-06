/// <reference types="react-scripts" />

interface Weather {
    status: number,
    temp: number,
    description: string,
    wind: number,
    icon: string
}

interface Location {
    name: string,
    vicinity: string
    photos?: Array,
    rating?: number,
    price_level?: number,
    icon: string,
    website?: string
}