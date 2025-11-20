import RichText from "@/components/RichText";
import { BannBlock as BannBlockProps } from "@/payload-types";

import { cn } from "@/utilities/ui";

import React from "react";

type Props = {

  className?: string
} & BannBlockProps


export const BannBlock: React.FC<Props> = ({ className, content, style }) => {
  return (
    <>
      <div className={cn('mx-auto my-8 w-full', className)}>
        <div
          className={cn(' py-3 px-6 flex items-center ', {
            'border-border bg-card': style === 'info',
            'border-error bg-error/30': style === 'error',
            'border-success bg-success/30': style === 'success',
            'border-warning bg-warning/30': style === 'warning',
            'border-danger bg-danger/30': style === 'danger',
            'border-secondary bg-secondary/30': style === 'secondary',
            'border-primary bg-primary/30': style === 'primary',

          })}
        >
          <RichText data={content} enableGutter={false} enableProse={false} />
        </div>
      </div>

    </>
  )
}