import React from "react";

type FieldSetProps = {
    children: React.ReactElement[]
}

export const FieldSet = ({children} : FieldSetProps) => {
    return <fieldset className="border-none flex flex-col w-full gap-2 text-inputPlace font-normal text-grey-0">
        {children}
    </fieldset>
}