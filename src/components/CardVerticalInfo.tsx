import { IconParkOutlineDot, RiVisaLine } from '@/Icons'
import { Card } from '@/types'

export const CardVerticalInfo = ({ card }: { card?: Card }) => {
    const status = getCardStatus(card);

    return (
        <div>

            <div className='gap-x-8 gap-y-2 grid grid-rows-1 text-white'>

                <div className='grid grid-cols-2'>
                    <p>Card Number</p>
                    <div className='flex items-center text-white'>
                        {Array.from({ length: 12 }, (_, index) => (
                            <div key={index}>
                                <IconParkOutlineDot fontSize={8} />
                                {(index + 1) % 4 === 0 && index < 11 && <div className="w-4" />}
                            </div>
                        ))}
                        <div className='w-2' />
                        <p className=''>{card?.last4}</p>
                    </div>
                </div>
                <div className='grid grid-cols-2'>
                    <p>CVV</p>
                    <p className='flex items-center'>
                        {Array.from({ length: 3 }, (_, index) => (
                            <IconParkOutlineDot key={index} className='flex' fontSize={8} />
                        ))}
                    </p>
                </div>

                <div className='grid grid-cols-2'>
                    <p>Expiration</p>
                    <p className='flex items-center'>{card?.expiryMonth}/{card?.expiryYear}</p>
                </div>


                <div className='grid grid-cols-2'>
                    <p>Brand</p>
                    {card?.brand === 'Visa' && <RiVisaLine height={28} width={28} />}
                </div>

                <div className='grid grid-cols-2'>
                    <p>Status</p>
                    <p className={`flex justify-center items-center w-16 rounded-lg ${status === 'Inactive' ? 'text-red-600 bg-red-300' : 'text-green-600 bg-green-300'}`}>{status}</p>
                </div>

                <div className='grid grid-cols-2'>
                    <p>Cardholder</p>
                    <p>{card?.cardholderName}</p>
                </div>
                <div className='grid grid-cols-2'>
                    <p>Card type</p>
                    <p>Virtual</p>
                </div>
                <div className='grid grid-cols-2'>
                    <p>CreatedAt</p>
                    <div className='flex flex-col'>
                        <p>123 Main Street</p>
                        <p>san fransisco, CA,7592,US</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
const getCardStatus = (card: Card | undefined): string => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // getMonth() returns 0-based index, so add 1
    const currentYear = currentDate.getFullYear();

    const expiryMonth = card?.expiryMonth;
    const expiryYear = card?.expiryYear;

    const isExpired = expiryYear !== undefined && expiryMonth !== undefined && (expiryYear < currentYear || (expiryYear === currentYear && expiryMonth < currentMonth));

    return isExpired ? 'Inactive' : 'Active';
}