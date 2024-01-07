import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { LuSliders } from 'react-icons/lu'
import { FaRegTrashCan } from 'react-icons/fa6'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
// import { BsFilter } from 'react-icons/bs'
import { useState } from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import BookmarkData from '@/lib/data/bookmark'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const data = [...BookmarkData]

export const columns = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'title',
    header: 'Bookmark Details',
    cell: ({ row }) => (
      <Dialog>
        <DialogTrigger>
          <div className='capitalize'>{row.getValue('title')}</div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Bookmark</DialogTitle>
          </DialogHeader>
          <ScrollArea className='h-96'>
            <div className='px-2 text-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam quidem voluptatibus quisquam, voluptas porro laborum
              molestiae commodi, a sed aut, excepturi eligendi? Molestiae est,
              dolore fuga consectetur omnis aspernatur quam! Vel, sit ea ipsa
              harum rem, quidem sint excepturi repellat possimus eveniet ratione
              molestiae dolorem accusamus aspernatur laudantium fugit, quae et
              eius? Laudantium id sequi fuga quas quia? Dolorem, ut. Tempore et
              iste minus accusantium reiciendis numquam voluptatibus
              consequuntur veritatis voluptates, beatae assumenda aspernatur qui
              eos tenetur doloremque quia ipsam natus, perferendis ad. Molestias
              earum quis laborum iusto modi qui. Odit saepe, ad accusantium nemo
              doloremque similique veritatis quas, laudantium porro provident
              officiis nihil temporibus itaque? Eum, odio est, incidunt itaque
              qui vel veniam temporibus repellat tempora, expedita tempore
              deserunt!
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    ),
  },
  {
    accessorKey: 'date',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Date
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      )
    },
    cell: ({ row }) => <div className='lowercase'>{row.getValue('date')}</div>,
  },
  {
    accessorKey: 'chapter',
    header: 'Chapter',
    cell: ({ row }) => (
      <div className='capitalize'>{row.getValue('chapter')}</div>
    ),
  },
  // delete icon
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <FaRegTrashCan className='cursor-pointer text-red-600' role='button' />
      )
    },
  },
]

export default function Bookmark() {
  // const { inputValues, handleInputChange } = useInputChange()

  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  const allRowsSelected =
    table.getIsAllRowsSelected() || table.getIsSomePageRowsSelected()
  return (
    <main className='p-5 mt-5 space-y-4'>
      <article className='card'>
        <section className=''>
          <div className='w-full'>
            <div className='flex justify-between items-center py-4'>
              <div>
                {allRowsSelected && (
                  <Button variant='destructive'>
                    <FaRegTrashCan
                      className='cursor-pointer mr-3'
                      role='button'
                    />
                    Delete
                  </Button>
                )}
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant={'ghost'} size={'sm'} className='flex gap-2'>
                    <LuSliders />
                    Filter
                  </Button>
                </PopoverTrigger>
                <PopoverContent className='w-60 mr-4 space-y-5'>
                  {/* todo: addfilter */}
                  <div className='space-y-2'>
                    <Select>
                      <SelectTrigger className='w-full'>
                        <SelectValue placeholder='Created' />
                      </SelectTrigger>
                      <SelectContent className='min-w-[4rem]'>
                        <SelectGroup>
                          <SelectItem value='For the last three days'>
                            For the last three days
                          </SelectItem>
                          <SelectItem value='For the week'>
                            For the week
                          </SelectItem>
                          <SelectItem value='For the month'>
                            For the month
                          </SelectItem>
                          <SelectItem value='For the three month'>
                            For the three month
                          </SelectItem>
                          <SelectItem value='For all time'>
                            For all time
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className='w-full'>
                        <SelectValue placeholder='Bookmark type' />
                      </SelectTrigger>
                      <SelectContent className='min-w-[4rem]'>
                        <SelectGroup>
                          <SelectItem value='created_first'>
                            Flashcard
                          </SelectItem>
                          <SelectItem value='created_last'>
                            Questions
                          </SelectItem>
                          <SelectItem value='created_last'>Chatbot</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className='w-full'>
                        <SelectValue placeholder='Select topics' />
                      </SelectTrigger>
                      <SelectContent className='min-w-[4rem]'>
                        <ScrollArea className='h-52'>
                          <SelectGroup>
                            {topics()
                              .flat(Infinity)
                              .map((e, i) => {
                                if (!e) return null
                                return (
                                  <SelectItem value={e as string} key={i}>
                                    {e as string}
                                  </SelectItem>
                                )
                              })}
                          </SelectGroup>
                        </ScrollArea>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className='w-full'>
                        <SelectValue placeholder='Select chapter' />
                      </SelectTrigger>
                      <SelectContent className='min-w-[4rem]'>
                        <SelectGroup>
                          {chapters.map((e, i) => {
                            if (!e) return null
                            return (
                              <SelectItem value={e as string} key={i}>
                                {e as string}
                              </SelectItem>
                            )
                          })}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className='flex justify-end'>
                    <Button variant={'outline'}>
                      <LuSliders /> Apply filter
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
            <div className='rounded-md border dark:border-gray-700'>
              <Table className='dark:border-gray-900'>
                <TableHeader>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow
                      key={headerGroup.id}
                      className='dark:border-gray-700'
                    >
                      {headerGroup.headers.map((header) => {
                        return (
                          <TableHead
                            key={header.id}
                            className='dark:border-gray-700'
                          >
                            {header.isPlaceholder
                              ? null
                              : flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
                          </TableHead>
                        )
                      })}
                    </TableRow>
                  ))}
                </TableHeader>
                <TableBody>
                  {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row) => (
                      <TableRow
                        key={row.id}
                        className='dark:border-gray-700'
                        data-state={row.getIsSelected() && 'selected'}
                      >
                        {row.getVisibleCells().map((cell) => (
                          <TableCell key={cell.id}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={columns.length}
                        className='h-24 text-center'
                      >
                        No results.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
            <div className='flex items-center justify-end space-x-2 py-4'>
              <div className='flex-1 text-sm text-muted-foreground'>
                {table.getFilteredSelectedRowModel().rows.length} of{' '}
                {table.getFilteredRowModel().rows.length} row(s) selected.
              </div>
              <div className='space-x-2'>
                <Button
                  variant='outline'
                  size='sm'
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                >
                  Previous
                </Button>
                <Button
                  variant='outline'
                  size='sm'
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}
