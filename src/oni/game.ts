
export interface Identity {
    id: string;
    name: string;

}

export interface Description {
    description: string;
}

export interface Icon {
    icon: string;
}


export interface Dlc {
    id: string;
    name: string;
}

export interface Avalibility {
    requires_dlc: Dlc[];
}


export interface Size {
    width: number;
    height: number;
}


export interface Cords {
    x: number;
    y: number;
}


export const Up = "up";
export const Right = "right";
export const Down = "down";
export const Left = "left";

export type Direction = typeof Up | typeof Right | typeof Down | typeof Left;


export const Input = "input";
export const Output = "output";
export type SocketDirection = typeof Input | typeof Output;

export const Gas = "gas";
export const Liquid = "liquid";
export const Solid = "solid";
export type Phase = typeof Gas | typeof Liquid | typeof Solid;

export interface Socket extends Cords {
    direction: SocketDirection;
    phase: Phase;
}



export interface Placement extends Size {
    wall: boolean;
    floor: boolean;
    permit_flip: boolean;
    permit_rotate: boolean;
    sockets: Socket[];
}

export interface Entity extends Identity, Avalibility, Description, Icon {
}


export interface Building extends Entity, Placement {

}

export interface Critter extends Entity {
}

export interface Food extends Entity {
}


export interface Material extends Identity {
    cost: number;
    production: number;
    level: number;
}

export interface Recipe { }
