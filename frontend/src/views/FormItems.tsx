import { Checkbox, DatePicker, Radio, Select } from '@/components/ui'
import DatePickerRange from '@/components/ui/DatePicker/DatePickerRange'
import FormItem from '@/components/ui/Form/FormItem'
import Input from '@/components/ui/Input'
import { useState } from 'react'

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

const Item1 = () => {
    return (
        <FormItem label="First Name">
            <div data-swapy-no-drag>
                <Input type="text" name="fname" />
            </div>
        </FormItem>
    )
}

const Item2 = () => {
    return (
        <FormItem label="Last Name">
            <div data-swapy-no-drag>
                <Input type="text" name="lname" />
            </div>
        </FormItem>
    )
}

const Item3 = () => {
    return (
        <FormItem label="Description">
            <div data-swapy-no-drag>
                <Input textArea name="description" />
            </div>
        </FormItem>
    )
}

const Item4 = () => {
    return (
        <FormItem label="Birthday">
            <div data-swapy-no-drag>
                <DatePicker
                    labelFormat={{
                        month: 'MMMM',
                        year: 'YY',
                    }}
                />
            </div>
        </FormItem>
    )
}

const Item5 = () => {
    const [radioValue, setRadioValue] = useState<string>('Sys0')

    const onRadioChange = (val: string) => {
        setRadioValue(val)
    }

    return (
        <FormItem label="Gender">
            <div data-swapy-no-drag>
                <Radio.Group value={radioValue} onChange={onRadioChange}>
                    <Radio value="male">Male</Radio>
                    <Radio value="female">Female</Radio>
                </Radio.Group>
            </div>
        </FormItem>
    )
}

const Item6 = () => {
    const [checkboxList, setCheckboxList] = useState<string[]>(['Selection A'])

    const onCheckboxChange = (options: string[]) => {
        setCheckboxList(options)
    }

    return (
        <FormItem label="List ID">
            <div data-swapy-no-drag>
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
            </div>
        </FormItem>
    )
}

const Item7 = () => {
    return (
        <FormItem label="Your Favorite Colors">
            <div data-swapy-no-drag>
                <Select
                    isMulti
                    placeholder="Please Select"
                    defaultValue={[colourOptions[2], colourOptions[3]]}
                    options={colourOptions}
                />
            </div>
        </FormItem>
    )
}

const Item8 = () => {
    return (
        <FormItem label="Multiple date view">
            <div data-swapy-no-drag>
                <DatePickerRange dateViewCount={2} />
            </div>
        </FormItem>
    )
}

const Item9 = () => {
    return (
        <FormItem label="Select One">
            <div data-swapy-no-drag>
                <Select placeholder="Please Select" options={colourOptions} />
            </div>
        </FormItem>
    )
}

export { Item1, Item2, Item3, Item4, Item5, Item6, Item7, Item8, Item9 }
