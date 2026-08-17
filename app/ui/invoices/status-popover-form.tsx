import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import {  StatusPopoverSelect } from "./status-popover-select"

export function StatusPopoverForm({ status, HandleSortStatus }: { status: Array<string>, HandleSortStatus: (selectedStatus: string) => void }) {
  return (
    <>
      <Popover>
        <PopoverTrigger render={<span >Status</span>} />
        <PopoverContent className="w-64" align="start">
          <PopoverHeader>
            <PopoverTitle>Select Status</PopoverTitle>
            {/* <PopoverDescription>
              Set the dimensions for the layer.
            </PopoverDescription> */}
          </PopoverHeader>
          <FieldGroup className="gap-4">
            <Field orientation="horizontal">
              {/* <FieldLabel htmlFor="height" className="w-1/2">
                Height
              </FieldLabel> */}
              <StatusPopoverSelect status={status} HandleSortStatus={HandleSortStatus} />
            </Field>
          </FieldGroup>
        </PopoverContent>
      </Popover>
    </>
  )
}
