"use client"

import { Payment } from "@/src/data/patments.data"
import { ColumnDef, SortDirection } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDownIcon, MoreHorizontal } from "lucide-react";
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox"
  




const SortedIcon = ({ isSorted}: {isSorted :   false | SortDirection}) => {

  if (isSorted === "asc") {
    return <ChevronDownIcon className="ml-2 h-4 w-4 rotate-180" />
  }
  if (isSorted === "desc") {
    return <ChevronDownIcon className="ml-2 h-4 w-4" />
  }
  return null;
}

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


export const columns: ColumnDef<Payment>[] = [

    {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <SortedIcon isSorted={column.getIsSorted()}/>
        </Button>
      )
    },
    cell: ({row}) => {

      const status = row.getValue("status") as string;
      const variant =
      {
        pending: "pending",
        processing: "secondary",
        success: "success",
        failed: "destructive"
      }[status]  ??  ("default" ) as any ;

      return (
      <Badge variant={variant}  >{status}</Badge>)

    }
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <SortedIcon isSorted={column.getIsSorted()}/>
        </Button>
      )
    },
  },
  {
    accessorKey: "amount",
    header:  ({ column }) => {
      return (
          <div className="text-left">
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Amount
          <SortedIcon isSorted={column.getIsSorted()}/>
        </Button>
        </div>
      );
    },
   
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount") as unknown as string) || 0;
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div>{formatted}</div>;
    }
  },
  {
    accessorKey: "clientName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Client Name
          <SortedIcon isSorted={column.getIsSorted()}/>
        </Button>
      )
    },
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(payment.id);
                toast("Payment ID copied to clipboard"),{
                  position: "top-right"
                }
              }}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
    
    },

]