import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

import { Select, SelectContent, SelectItem, SelectTrigger, } from "@/components/ui/select"
import { Card } from '@/types'
import { Fa6BrandsCcVisa } from '@/Icons'
import { CardShape } from '@/components/CardShape'
import { CardVerticalInfo } from '@/components/CardVerticalInfo'
import { Button } from '@/components/ui/button'
import CardInfoSkeleton from '@/components/CardInfoSkeleton '
const CardInfo = () => {
    const [card, setCard] = useState<Card | undefined>(undefined)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get("https://www.bakarcompany.somee.com/api/IssueCard/get-card-data").then((res) => {
            setCard(res.data)
            console.log(res.data)
            setIsLoading(false);

        }).catch((err: unknown) => {
            console.log(err)
        })

    }, [])

    if (isLoading) {
        return <CardInfoSkeleton />;
      }


    return (
        <div className='flex justify-center'>
            <div className='border-dark-200 bg-dark-50 p-4 border rounded-xl w-[600px]'>
                <Select>
                    <SelectTrigger className="bg-DEFAULT-100 h-12 text-white">
                        <div className='flex items-center gap-x-4'>
                            {card?.brand === 'Visa' ? <Fa6BrandsCcVisa /> : <></>}
                            <span>{card?.cardholderName}</span>

                        </div>

                    </SelectTrigger>
                    <SelectContent className='bg-DEFAULT text-white'>
                        <SelectItem value={card?.cardholderName ?? " "}>{card?.cardholderName}</SelectItem>
                    </SelectContent>
                </Select>

                <hr className='my-4' />

                <CardShape card={card} />

                <hr className='my-4' />
                <CardVerticalInfo card={card} />
                <hr className='my-4' />
                <div className='flex flex-col gap-y-4'>
                    <Button variant={'outline'} className='bg-dark-100 text-white'>Freeze Card</Button>
                    <Button variant={'outline'} className='bg-dark-100 text-white'>Replace Card</Button>
                    <Button variant={'outline'} className='bg-dark-100 text-white'>Cancel Card</Button>

                </div>
            </div>
        </div>
    )
}

export default CardInfo
