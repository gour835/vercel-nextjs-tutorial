"use client"

import * as React from "react"

import {
    Field,
    FieldContent,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"


export function StatusPopoverSelect({ status, HandleSortStatus }: { status: Array<string>, HandleSortStatus: (selectedStatus: string) => void }) {

    return (
        <FieldGroup className="w-full max-w-xs">

            <Field>
                <Select
                    defaultValue="paid"
                    onValueChange={
                        (value) => {
                            HandleSortStatus(value ?? '');
                        }
                    }
                >
                    <SelectTrigger>
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent alignItemWithTrigger={false}>
                        <SelectGroup>
                            {status.map((item: string) => (
                                <SelectItem
                                    key={item}
                                    value={item}
                                >
                                    {item}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </Field>
        </FieldGroup>
    )
}
