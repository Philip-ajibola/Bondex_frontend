
declare interface CustomButtonProps{
    text: string;
    style: string;
    image?: string;
    onPress?: () => void;
    disabled?: boolean;
}
declare interface CartItem {
    id: number;
    productImage: any;
    productName: string;
    newPrice: string;
    oldPrice: string;
    description: string;
    discount:string;
}
declare interface Category{
    image: string;
    name:string,
}
declare interface OurProduct{
    id:number,
    productName:string,
    productImage:string,
    newPrice:string,
    oldPrice:string,
    description:string,
    discount: string,
}