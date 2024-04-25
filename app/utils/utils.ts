// utils/scrollToSection.js

type scrollToSectionProps = {
    sectionId: string,
}

export const scrollToSection = ({ sectionId }:scrollToSectionProps) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

export const feetToCentimeters = (feet: number): number => {
    // 1 foot = 30.48 centimeters
    return Math.round(feet * 30.48);
};

export const calculateOriginalPrice = (discountedPrice: number, discount: number): number => {
    return Math.round(discountedPrice / (1 - discount / 100));
}
