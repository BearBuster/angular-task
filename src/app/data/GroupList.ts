import {Group} from "../interfaces/Group";

export const GroupList: Group[] = [
  {
    functions: [
      {
        name: 'MAV',
        code: 'MAV-SLIP',
        minValue: '1',
        maxValue: '500',
      },
      {
        name: 'RAV',
        code: 'RAV-SLIP',
        minValue: '1',
        maxValue: '500',
      },
    ],
    groupName: 'Group 1',
    id: 22,
    minValue: '1',
    maxValue: '500',
    users: [
      {
        id: '09452W4295001',
        userInitials: 'EB',
        fullName: 'Elisa Blu',
      },
    ],
    warning: 'In atessa che il gruppo di firma venga approvato dai master',
  },
  {
    functions: [
      {
        name: 'F24 Accountant',
        code: 'CBI-F24-ACCOUNTANT-PAYMENT',
        minValue: '2',
        maxValue: '150',
      },
      {
        name: 'F24',
        code: 'CBI-F24-PAYMENT',
        minValue: '2',
        maxValue: '150',
      },
      {
        name: 'Bonifico Italia',
        code: 'CBI-ITALY-TRANSFER',
        minValue: '2',
        maxValue: '150',
      },
      {
        name: 'MAV',
        code: 'MAV-SLIP',
        minValue: '2',
        maxValue: '150',
      },
      {
        name: 'RAV',
        code: 'RAV-SLIP',
        minValue: '2',
        maxValue: '150',
      },
      {
        name: 'Bonifico SEPA',
        code: 'SEPA-TRANSFER',
        minValue: '2',
        maxValue: '150',
      },
    ],
    groupName: 'My group',
    id: 123,
    minValue: '1',
    maxValue: '50',
    users: [
      {
        id: '09452W4295001',
        userInitials: 'EB',
        fullName: 'Elisa Blu',
      },
      {
        id: '09452W4295002',
        userInitials: 'SN',
        fullName: 'Sara Neri',
      },
      {
        id: '09452W4295003',
        userInitials: 'CD',
        fullName: 'Clone Dispo',
      },
    ],
    warning: 'In atessa che il gruppo di firma venga approvato dai master',
  },
  {
    functions: [
      {
        name: 'MAV',
        code: 'MAV-SLIP',
        minValue: '1',
        maxValue: '10',
      },
      {
        name: 'RAV',
        code: 'RAV-SLIP',
        minValue: '1',
        maxValue: '10',
      },
    ],
    groupName: 'Group Name',
    id: 16,
    minValue: '1',
    maxValue: '10',
    users: [
      {
        id: '09452W4295002',
        userInitials: 'SN',
        fullName: 'Sara Neri',
      },
    ],
  },
  {
    functions: [
      {
        name: 'Bonifico SEPA',
        code: 'SEPA-TRANSFER',
        minValue: 'null',
        maxValue: 'null',
      },
    ],
    groupName: 'Gruppo firma Sepa Transfer',
    id: 71,
    minValue: '50000',
    maxValue: '100000',
    users: [
      {
        id: '09452W4295001',
        userInitials: 'EB',
        fullName: 'Elisa Blu',
      },
      {
        id: '09452W4295002',
        userInitials: 'SN',
        fullName: 'Sara Neri',
      },
      {
        id: '09452W4295001',
        userInitials: 'EB',
        fullName: 'Elisa Blu',
      },
      {
        id: '09452W4295002',
        userInitials: 'SN',
        fullName: 'Sara Neri',
      },
      {
        id: '09452W4295001',
        userInitials: 'EB',
        fullName: 'Elisa Blu',
      },
      {
        id: '09452W4295002',
        userInitials: 'SN',
        fullName: 'Sara Neri',
      },
    ],
  },
];
