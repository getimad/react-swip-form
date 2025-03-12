interface Slot {
    slot: string
    item: string
}

interface SlotItemMap {
    asArray: Slot[]
}

interface SwapEvent {
    newSlotItemMap: SlotItemMap
}

export type { Slot, SlotItemMap, SwapEvent }
