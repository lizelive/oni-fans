import strings from './strings';

const expansion1 = { id : "expansion1", name: strings.ui.dlc1.name };
const dlc1 = { id : "dlc1", name: strings.ui.dlc2.name };
const dlc2 = { id : "dlc2", name: strings.ui.dlc3.name };
const dlc3 = { id : "dlc3", name: strings.ui.dlc4.name };


export const dlcs = {
  expansion1,
  dlc1,
  dlc2,
  dlc3
};



export type DlcId = keyof typeof dlcs;

export default dlcs;