import { ITenantsDetails } from './types';

export const TENANTS_DETAILS: ITenantsDetails = {
  'אחינועם': {
    fields: [
      {
        label: 'מונה קודם',
        name: 'firstPrevBill',
        value: 0
      },
      {
        label: 'מונה נוכחי',
        name: 'firstCurrBill',
        value: 0
      }
    ],
    result: 0,
    numOfPersons: 1,
  },
  'אוריאל': {
    fields: [
      {
        label: 'מונה קודם',
        name: 'secondPrevBill',
        value: 0
      },
      {
        label: 'מונה נוכחי',
        name: 'secondCurrBill',
        value: 0
      }
    ],
    result: 0,
    numOfPersons: 2
  },
  'ליהי': {
    fields: [
      {
        label: 'מונה קודם',
        name: 'thirdPrevBill',
        value: 0
      },
      {
        label: 'מונה נוכחי',
        name: 'thirdCurrBill',
        value: 0
      }
    ],
    result: 0,
    numOfPersons: 1,
  },
}
