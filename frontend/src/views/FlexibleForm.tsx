import { FormEvent, useEffect, useRef, useState } from 'react'
import { createSwapy, SwapyInstance } from 'swapy'
import { Form } from '@/components/ui/Form'
import { Button } from '@/components/ui'
import { SwapEvent, Slot } from '@/types/SwapEvent'
import axios from 'axios'
import {
    Item1,
    Item2,
    Item3,
    Item4,
    Item5,
    Item6,
    Item7,
    Item8,
    Item9,
} from './FormItems'

const items = [
    { name: 'item-1', component: <Item1 /> },
    { name: 'item-2', component: <Item2 /> },
    { name: 'item-3', component: <Item3 /> },
    { name: 'item-4', component: <Item4 /> },
    { name: 'item-5', component: <Item5 /> },
    { name: 'item-6', component: <Item6 /> },
    { name: 'item-7', component: <Item7 /> },
    { name: 'item-8', component: <Item8 /> },
    { name: 'item-9', component: <Item9 /> },
]

export default function FlexibleForm() {
    const [slots, setSlots] = useState<Slot[]>([
        { slot: 'slot-1', item: 'item-1' },
        { slot: 'slot-2', item: 'item-2' },
        { slot: 'slot-3', item: 'item-3' },
        { slot: 'slot-4', item: 'item-4' },
        { slot: 'slot-5', item: 'item-5' },
        { slot: 'slot-6', item: 'item-6' },
        { slot: 'slot-7', item: 'item-7' },
        { slot: 'slot-8', item: 'item-8' },
        { slot: 'slot-9', item: 'item-9' },
    ])

    const [currentSlots, setCurrentSlots] = useState<Slot[]>([])

    const swapy = useRef<SwapyInstance>(null)
    const container = useRef(null)

    useEffect(() => {
        axios
            .get('/api/form')
            .then((res) => {
                setSlots(res.data.data)
            })
            .catch((err) => {
                console.log(`Error message: ${err.message}`)
            })
    }, [])

    useEffect(() => {
        if (container.current) {
            swapy.current = createSwapy(container.current, {
                animation: 'none',
            })

            swapy.current.onSwap((event: SwapEvent) => {
                setCurrentSlots(event.newSlotItemMap.asArray)
            })
        }

        return () => {
            swapy.current?.destroy()
        }
    }, [])

    const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        axios.put('/api/form', { data: currentSlots })
    }

    return (
        <Form onSubmit={onSubmitForm}>
            <div
                ref={container}
                className="grid grid-cols-6 rounded-lg bg-white p-4 gap-x-4"
            >
                {slots.map((i) => {
                    return (
                        <div
                            key={i.slot}
                            data-swapy-slot={i.slot}
                            className="col-span-6"
                        >
                            <div data-swapy-item={i.item}>
                                {
                                    items.find((j) => j.name === i.item)
                                        ?.component
                                }
                            </div>
                        </div>
                    )
                })}

                <div className="col-span-6">
                    <Button type="submit" variant="solid" block>
                        Save
                    </Button>
                </div>
            </div>
        </Form>
    )
}
