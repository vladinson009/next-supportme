'use client';

import { type Employee } from '@/types/Employee';
import { ColumnDef } from '@tanstack/react-table';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: 'avatar',
    header: '',
  },
  {
    accessorKey: 'firstName',
    header: 'First name',
  },
  {
    accessorKey: 'lastName',
    header: 'Last name',
  },

  {
    accessorKey: 'teamName',
    header: 'Team',
  },

  {
    accessorKey: 'isTeamLeader',
    header: '',
  },
];
