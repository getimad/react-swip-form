import { Switcher } from '@/components/ui'

interface Props {
    onChange: (val: boolean) => void
}

const SwapAbilityBtn = ({ onChange }: Props) => {
    return (
        <div className="flex items-center gap-2">
            <b>Swap</b>
            <Switcher
                defaultChecked
                onChange={(val: boolean) => onChange(val)}
            />
        </div>
    )
}

export default SwapAbilityBtn
