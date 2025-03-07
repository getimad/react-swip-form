import { useEffect, useRef, useState } from 'react'
import { createSwapy } from 'swapy'
import Radio from '@/components/ui/Radio'

export default function Form() {
    const swapy = useRef(null)
    const container = useRef(null)

    useEffect(() => {
        if (container.current) {
            swapy.current = createSwapy(container.current, {
                animationDuration: 300, // Optional customization
            })

            // Listen for swap events
            swapy.current.onSwap((event) => {
                console.log('Swapped items:', event)
            })
        }

        return () => {
            // Destroy the swapy instance on component unmount
            swapy.current?.destroy()
        }
    }, [])

    const [value, setValue] = useState('Banana')

    const onChange = (val: string) => {
        setValue(val)
    }

    return (
        <div
            ref={container}
            className="grid grid-cols-6 gap-4 rounded-md bg-white"
        >
            <div data-swapy-slot="a" className="col-span-3">
                <div data-swapy-item="a" className="rounded-lg p-4">
                    <div className="flex flex-col">
                        <h6 className="mb-2">First Name</h6>
                        <input
                            type="text"
                            className="input input-md focus:ring-primary focus-within:ring-primary focus-within:border-primary focus:border-primary h-12 rounded-md bg-gray-100 p-3 outline-none"
                        />
                    </div>
                </div>
            </div>
            <div data-swapy-slot="b" className="col-span-3">
                <div data-swapy-item="b" className="rounded-lg p-4">
                    <div className="flex flex-col">
                        <h6 className="mb-2">Last Name</h6>
                        <input
                            type="text"
                            className="input input-md focus:ring-primary focus-within:ring-primary focus-within:border-primary focus:border-primary h-12 rounded-md bg-gray-100 p-3 outline-none"
                        />
                    </div>
                </div>
            </div>
            <div data-swapy-slot="c" className="col-span-6">
                <div data-swapy-item="c" className="rounded-lg p-4">
                    <div className="flex flex-col">
                        <h6 className="mb-2">Description</h6>
                        <textarea className="input focus:ring-primary focus-within:ring-primary focus-within:border-primary focus:border-primary input-textarea rounded-md bg-gray-100 p-3"></textarea>
                    </div>
                </div>
            </div>
            <div data-swapy-slot="d" className="col-span-6">
                <div data-swapy-item="d" className="rounded-lg p-4">
                    <h6 className="mb-2">List IDs</h6>

                    <Radio.Group value={value} onChange={onChange}>
                        <Radio value={'sys00'}>Sys00</Radio>
                        <Radio value={'sys01'}>Sys01</Radio>
                        <Radio value={'sys02'}>Sys02</Radio>
                        <Radio value={'sys03'}>Sys03</Radio>
                        <Radio value={'sys04'}>Sys04</Radio>
                        <Radio value={'sys05'}>Sys05</Radio>
                        <Radio value={'sys06'}>Sys06</Radio>
                    </Radio.Group>
                </div>
            </div>
        </div>
    )
}
