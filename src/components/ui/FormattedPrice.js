export default function FormattedPrice({price}){
    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
      }).format(price);
      return <span>{formattedPrice}</span>
}