'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { StatusPopoverForm } from "./status-popover-form";

export default function InvoiveTableHead({date, status}: {date: string, status: Array<string>}){
     const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();
  const DateIcon =  date === 'acc' ? <AiFillCaretDown /> :  <AiFillCaretUp />
  async function HandleSortDate() {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (date == 'acc') {
      params.set('date', 'desc');
    } else{
      params.set('date', 'acc');
    }
    console.log('clicked');
    replace(`${pathName}?${params.toString()}`);
  }

  async function HandleSortStatus(item: string) {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    params.set('status', item);
    console.log('clicked');
    replace(`${pathName}?${params.toString()}`);
  }
    return <thead className="rounded-lg text-left text-sm font-normal">
                  <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                      Customer
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Email
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Amount
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      <span 
                      className='flex flex-row  items-center gap-1 cursor-pointer'
                      onClick={()=>{
                        HandleSortDate();
                      }}
                      >
                        Date
                        {DateIcon}
                      </span>
                    </th>
                    {/* //status */}
                    <th scope="col"
                    className="px-3 py-5 font-medium"
                    >
                      <StatusPopoverForm status={status} HandleSortStatus={HandleSortStatus} />
                    </th>
                    <th scope="col" className="relative py-3 pl-6 pr-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
}