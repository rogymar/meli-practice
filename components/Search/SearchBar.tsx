import classNames from "classnames";

import { TextField } from "./TextField";
import { Button } from "./Button";
import { Stylable } from "../types/props";

export type SearchBarProps = Stylable

export function SearchBar ({ className }: SearchBarProps) {
    const containerStyles = classNames(
        'grid grid-cols-[auto_40px]',
        className
    )
    return (
        <div className={containerStyles}>
            <TextField className='' />
            <Button className='h-10' />
        </div>
    )
}