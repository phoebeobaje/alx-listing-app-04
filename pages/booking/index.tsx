import BookingForm from '@/components/BookingForm';
import OrderSummary from '@/components/OrderSummary';

export default function BookingPage(){
const bookingDetails={
    propertyName: "Villa Arrecife Beach House",
    price:7500,
    bookingFee: 65,
    totalNights:3,
    StartDate: "24 August 2024",

};
return (
    <div className='container mx-auto p-6'>
        <div className="grid grid-cols-2 gap-6">
            <BookingForm />
            <OrderSummary bookingDetails={bookingDetails} />
        </div>
    </div>
)

}