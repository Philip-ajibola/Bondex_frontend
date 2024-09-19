declare interface CustomButtonProps{
    text: string;
    style: string;
    image?: string;
    onPress?: () => void;
    disabled?: boolean;
}
declare interface CartItem {
    id: number;
    productImage: string;
    productName: string;
    newPrice: string;
    oldPrice: string;
    description: string;
}