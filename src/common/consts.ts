import { ITenantsDetails } from './types';

export const TENANTS_DETAILS: ITenantsDetails = {
  'אחינועם': {
    fields: [
      {
        label: 'חשבון קודם',
        name: 'firstPrevBill',
        value: 0
      },
      {
        label: 'חשבון נוכחי',
        name: 'firstCurrBill',
        value: 0
      }
    ],
    result: 0,
    numOfPersons: 1,
  },
  'חיים': {
    fields: [
      {
        label: 'חשבון קודם',
        name: 'secondPrevBill',
        value: 0
      },
      {
        label: 'חשבון נוכחי',
        name: 'secondCurrBill',
        value: 0
      }
    ],
    result: 0,
    numOfPersons: 2
  },
  'הדר': {
    fields: [
      {
        label: 'חשבון קודם',
        name: 'thirdPrevBill',
        value: 0
      },
      {
        label: 'חשבון נוכחי',
        name: 'thirdCurrBill',
        value: 0
      }
    ],
    result: 0,
    numOfPersons: 0,
  },
}