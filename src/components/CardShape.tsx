import { IconParkOutlineDot, RiVisaLine } from "@/Icons"
import { Card } from "@/types"

export const CardShape = ({ card }: { card?: Card }) => {
    return (

        <div className='border-white p-4 border rounded-lg w-full h-96 text-white'>
            <section className='flex flex-col justify-between h-full'>
                {/*card title*/}
                <div className='flex justify-between items-center p-2 font-sans'>
                    <p className='text-xl'>BAKAR</p>
                    {card?.brand === 'Visa' &&
                        <RiVisaLine height={72} width={72} />
                    }
                </div>
                {/*card number */}
                <div className='flex items-center text-white'>
                    {Array.from({ length: 12 }, (_, index) => (
                        <div key={index}>
                            <IconParkOutlineDot fontSize={12} />
                            {(index + 1) % 4 === 0 && index < 11 && <div className="w-8" />}
                        </div>
                    ))}
                    <div className='w-4' />
                    <p className='font-semibold'>{card?.last4}</p>
                </div>

                <div className='flex justify-between items-center'>

                    <div className='flex flex-col items-start gap-x-2 font-semibold'>
                        <p className='text-sm'>Cardholder</p>
                        <p className='flex items-center h-10 text-sm'>{card?.cardholderName}</p>
                    </div>

                    <div className='flex flex-col items-start gap-x-2 font-semibold'>
                        <p className='text-sm'>Expiry Date</p>
                        <p className='flex items-center h-10 text-sm'>{card?.expiryMonth}/{card?.expiryYear && card.expiryYear.toString().slice(-2)}</p>
                    </div>

                    <div className='flex flex-col items-start gap-x-2 font-semibold'>
                        <p className='text-sm'>CVC</p>
                        <p className='flex items-center h-10 text-sm'>
                            {Array.from({ length: 3 }, (_, index) => (
                                <IconParkOutlineDot key={index} className='flex' fontSize={10} />
                            ))}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
