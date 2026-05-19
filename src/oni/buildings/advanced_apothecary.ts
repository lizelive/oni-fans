import type { Building } from "../game";
import icon from "../sprites/AdvancedApothecary.png";

import strings from "../strings"

import { dlcs } from "../dlc";

export const advancedApothecary: Building = {
    id: "advanced_apothecary",
    name: strings.buildings.prefabs.advancedapothecary.name,
    icon,
    description: strings.buildings.prefabs.advancedapothecary.desc,
    requires_dlc: [dlcs.expansion1],
    width: 3,
    height: 3,
    wall: false,
    floor: true,
    permit_flip: false,
    permit_rotate: false,
    sockets: []
}
