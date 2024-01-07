import { IoMdSearch } from 'react-icons/io'
import { FileIcon } from 'react-file-icon'
import { FaRegEye } from 'react-icons/fa6'
import {
  Dialog,
  DialogContent,
  DialogFooter,
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
import { BsFilter } from 'react-icons/bs'
import { useState } from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import BookmarkData from '@/lib/data/bookmark'
import { CAIA_LAVEL_ONE } from '@/lib/data/exams'
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

const data = [...BookmarkData].map((e, i) => ({ idx: i, ...e }))

export const columns = [
  {
    id: 'select',
    header: ({ table }) => (
      <div className='flex gap-2'>
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && 'indeterminate')
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label='Select all'
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className='flex gap-2'>
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label='Select row'
        />
      </div>
    ),
  },

  {
    accessorKey: 'file_name',
    header: 'File Name',
    cell: ({ row }) => {
      let fileIconString = null
      const fileType = row.getValue('file_type').toLowerCase()

      if (fileType === 'pdf') {
        fileIconString = 'pdf'
      }

      if (fileType === 'image') {
        fileIconString = 'png'
      }
      if (fileType === 'ppt') {
        fileIconString = 'ppt'
      }
      if (fileType === 'audio') {
        fileIconString = 'mp4'
      }
      if (fileType === 'excel') {
        fileIconString = 'docx'
      }
      if (fileType === 'text') {
        fileIconString = 'txt'
      }

      const randomNumber = Math.floor(Math.random() * 4)
      return (
        <div className='lowercase flex gap-3 items-center'>
          <div className='w-4 h-auto'>
            {randomNumber === 0 && (
              <FileIcon
                color='#1254F8'
                gradientColor='#00D2FF'
                gradientOpacity={1}
                type='vector'
                fold={false}
                radius={6}
                extension={fileIconString}
                glyphColor='rgba(255,255,255,0.6)'
              />
            )}
            {randomNumber === 1 && (
              <FileIcon
                color='#FF69B4'
                gradientColor='#FFD700'
                gradientOpacity={1}
                type='vector'
                fold={false}
                radius={6}
                extension={fileIconString}
                glyphColor='rgba(255,255,255,0.6)'
              />
            )}
            {randomNumber === 2 && (
              <FileIcon
                color='#8A2BE2'
                gradientColor='#BA55D3'
                gradientOpacity={1}
                type='vector'
                fold={false}
                radius={6}
                extension={fileIconString}
                glyphColor='rgba(255,255,255,0.6)'
              />
            )}
            {randomNumber === 3 && (
              <FileIcon
                color='#FFA500'
                gradientColor='#FFD700'
                gradientOpacity={1}
                type='vector'
                fold={false}
                radius={6}
                extension={fileIconString}
                glyphColor='rgba(255,255,255,0.6)'
              />
            )}
          </div>
          {row.getValue('file_name')}
        </div>
      )
    },
  },

  {
    accessorKey: 'upload_date',
    header: 'Upload Date',
    cell: ({ row }) => (
      <div className='capitalize'>{row.getValue('upload_date')}</div>
    ),
  },
  {
    accessorKey: 'file_type',
    header: 'File Type',
    cell: ({ row }) => (
      <div className='capitalize'>{row.getValue('file_type')}</div>
    ),
  },
  // delete icon
  {
    id: 'actions',
    header: 'Actions',
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <div className='flex gap-2'>
          <FaRegEye className='cursor-pointer ' role='button' />
          <FaRegTrashCan
            className='cursor-pointer text-red-600'
            role='button'
          />
        </div>
      )
    },
  },
]

function History() {
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
              <div className='flex gap-2'>
                <div className='max-w-xl w-full flex dark:border-gray-700 dark:bg-gray-900  py-1.5 px-3 shadow items-center gap-3 rounded-md bg-primary/10 border-0 text-sm'>
                  <input
                    type='text'
                    className='outline-none w-full dark:bg-gray-900 bg-transparent'
                    placeholder='Search...'
                  />
                  <IoMdSearch className='w-5 h-auto text-primary' />
                </div>
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

export default History
