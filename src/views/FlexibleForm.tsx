import { SyntheticEvent, useEffect, useRef, useState } from 'react'
import { createSwapy } from 'swapy'
import { FormItem, Form } from '@/components/ui/Form'
import Radio from '@/components/ui/Radio'
import Input from '@/components/ui/Input'
import { Checkbox } from '@/components/ui'

export default function FlexibleForm() {
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

    const [radioValue, setRadioValue] = useState<string>('Sys0')
    const [checkboxList, setCheckboxList] = useState<string[]>(['Selection A'])

    const onRadioChange = (val: string) => {
        setRadioValue(val)
    }

    const onCheckboxChange = (options: string[], e: SyntheticEvent) => {
        setCheckboxList(options)
    }

    return (
        <Form>
            <div
                ref={container}
                className="grid grid-cols-6 rounded-md bg-white p-4 gap-x-4"
            >
                <div data-swapy-slot="a" className="col-span-3">
                    <div data-swapy-item="a">
                        <FormItem label="First Name">
                            <Input type="text" name="fname" />
                        </FormItem>
                    </div>
                </div>

                <div data-swapy-slot="b" className="col-span-3">
                    <div data-swapy-item="b">
                        <FormItem label="Last Name">
                            <Input type="text" name="lname" />
                        </FormItem>
                    </div>
                </div>

                <div data-swapy-slot="c" className="col-span-6">
                    <div data-swapy-item="c">
                        <FormItem label="Description">
                            <Input textArea name="description" />
                        </FormItem>
                    </div>
                </div>

                <div data-swapy-slot="d" className="col-span-6">
                    <div data-swapy-item="d">
                        <FormItem label="Gender">
                            <Radio.Group
                                value={radioValue}
                                onChange={onRadioChange}
                            >
                                <Radio value="male">Male</Radio>
                                <Radio value="female">Female</Radio>
                            </Radio.Group>
                        </FormItem>
                    </div>
                </div>

                <div data-swapy-slot="e" className="col-span-6">
                    <div data-swapy-item="e">
                        <FormItem label="List ID">
                            <Checkbox.Group
                                value={checkboxList}
                                onChange={onCheckboxChange}
                            >
                                <Checkbox value="sys00">Sys00</Checkbox>
                                <Checkbox value={'sys01'}>Sys01</Checkbox>
                                <Checkbox value={'sys02'}>Sys02</Checkbox>
                                <Checkbox value={'sys03'}>Sys03</Checkbox>
                                <Checkbox value={'sys04'}>Sys04</Checkbox>
                                <Checkbox value={'sys05'}>Sys05</Checkbox>
                                <Checkbox value={'sys06'}>Sys06</Checkbox>
                            </Checkbox.Group>
                        </FormItem>
                    </div>
                </div>

                <div data-swapy-slot="e" className="col-span-6">
                    <div data-swapy-item="e"></div>
                </div>
            </div>
        </Form>
    )
}
