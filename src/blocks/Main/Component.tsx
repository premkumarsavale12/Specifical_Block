import React from 'react'
import type { MainBlock as MainBlockProps } from '@/payload-types'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'


export const MainBlock: React.FC<MainBlockProps> = ({ richText, media }) => {

    return (
        <div className="container">
            <div className="bg-card rounded border-border border p-4 flex flex-col gap-8 md:flex-row md:justify-between md:items-center">
                <div className="max-w-[48rem] flex items-center">
                    {richText && <RichText className="mb-0" data={richText} enableGutter={false} />}
                </div>

            </div>

            <div className="mt-[0]">
                {media && typeof media === 'object' && (
                    <Media resource={media} />
                )}

            </div>

        </div>


    )
}

