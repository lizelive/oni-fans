
interface QuantityValue<U extends string> {
    unit: U;
    value: number;
}

export function unit<U extends string>(unit: U, value: number): QuantityValue<U> {
    return { unit, value };
}


export function kelvin(input: number): QuantityValue<'K'> {
    return unit('K', input);
}

export function calories(input: number): QuantityValue<'calories'> {
    return unit('calories', input);
}

export function kilograms(input: number): QuantityValue<'kg'> {
    return unit('kg', input);
}

export function kilogramsPerCycle(input: number): QuantityValue<'kg/cycle'> {
    return unit('kg/cycle', input);
}

export function kilogramsPerSecond(input: number): QuantityValue<'kg/s'> {
    return unit('kg/s', input);
}

export function kilowatts(input: number): QuantityValue<'kW'> {
    return unit('kW', input);
}

export function seconds(input: number): QuantityValue<'s'> {
    return unit('s', input);
}

export function units(input: number): QuantityValue<'units'> {
    return unit('units', input);
}

export function watts(input: number): QuantityValue<'W'> {
    return unit('W', input);
}
