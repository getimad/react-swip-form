import { SyntheticEvent, useEffect, useRef, useState } from 'react'
import { createSwapy } from 'swapy'
import { FormItem, Form } from '@/components/ui/Form'
import {
    Button,
    Checkbox,
    DatePicker,
    Input,
    Radio,
    Select,
} from '@/components/ui'
import DatePickerRange from '@/components/ui/DatePicker/DatePickerRange'

const colourOptions = [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9' },
    { value: 'blue', label: 'Blue', color: '#0052CC' },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630' },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
]

export default function FlexibleForm() {
    const swapy = useRef(null)
    const container = useRef(null)

    useEffect(() => {
        if (container.current) {
            swapy.current = createSwapy(container.current, {
                animationDuration: 500, // Optional customization
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
                className="grid grid-cols-6 rounded-lg bg-white p-4 gap-x-4 select-none"
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

                <div data-swapy-slot="f" className="col-span-6">
                    <div data-swapy-item="f">
                        <FormItem label="Birthday">
                            <DatePicker
                                labelFormat={{
                                    month: 'MMMM',
                                    year: 'YY',
                                }}
                            />
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
                                className="flex flex-wrap"
                            >
                                <Checkbox value="sys00">Sys00</Checkbox>
                                <Checkbox value="sys01">Sys01</Checkbox>
                                <Checkbox value="sys02">Sys02</Checkbox>
                                <Checkbox value="sys03">Sys03</Checkbox>
                                <Checkbox value="sys04">Sys04</Checkbox>
                                <Checkbox value="sys05">Sys05</Checkbox>
                                <Checkbox value="sys06">Sys06</Checkbox>
                                <Checkbox value="sys07">Sys07</Checkbox>
                                <Checkbox value="sys08">Sys08</Checkbox>
                                <Checkbox value="sys09">Sys09</Checkbox>
                                <Checkbox value="sys10">Sys10</Checkbox>
                                <Checkbox value="sys11">Sys11</Checkbox>
                                <Checkbox value="sys12">Sys12</Checkbox>
                                <Checkbox value="sys13">Sys13</Checkbox>
                                <Checkbox value="sys14">Sys14</Checkbox>
                                <Checkbox value="sys15">Sys15</Checkbox>
                                <Checkbox value="sys16">Sys16</Checkbox>
                                <Checkbox value="sys17">Sys17</Checkbox>
                                <Checkbox value="sys18">Sys18</Checkbox>
                                <Checkbox value="sys19">Sys19</Checkbox>
                                <Checkbox value="sys20">Sys20</Checkbox>
                                <Checkbox value="sys21">Sys21</Checkbox>
                            </Checkbox.Group>
                        </FormItem>
                    </div>
                </div>

                <div data-swapy-slot="h" className="col-span-6">
                    <div data-swapy-item="h">
                        <FormItem label="Your Favorite Colors">
                            <Select
                                isMulti
                                placeholder="Please Select"
                                defaultValue={[
                                    colourOptions[2],
                                    colourOptions[3],
                                ]}
                                options={colourOptions}
                            />
                        </FormItem>
                    </div>
                </div>

                <div data-swapy-slot="g" className="col-span-6">
                    <div data-swapy-item="g">
                        <FormItem label="Multiple date view">
                            <DatePickerRange dateViewCount={2} />
                        </FormItem>
                    </div>
                </div>

                <div data-swapy-slot="i" className="col-span-6">
                    <div data-swapy-item="i">
                        <FormItem label="Select One">
                            <Select
                                placeholder="Please Select"
                                options={colourOptions}
                            />
                        </FormItem>
                    </div>
                </div>

                <div className="col-span-6">
                    <Button type="submit" variant="solid" block>
                        Save
                    </Button>
                </div>
            </div>
        </Form>
    )
}
