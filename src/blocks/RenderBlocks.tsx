import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { BannerBlock } from '@/blocks/Banner/Component'
import { BannBlock } from '@/blocks/Bann/component'
import { CodeBlock } from '@/blocks/Code/Component'
import { LanguageBlock } from '@/blocks/Language/Component'
import { MainBlock } from '@/blocks/Main/Component'
import { SampleBlockComponent } from '@/blocks/Sample/Component'
import { DataBlockComponent } from '@/blocks/Data/Component'
import { Right } from '@/blocks/Right/Component'
import { Slider} from '@/blocks/Slider/Component'

import { FAQ } from '@/blocks/FAQ/Component'




const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  banner: BannerBlock,
  bann: BannBlock,
  code: CodeBlock,
  languge: LanguageBlock,
  main: MainBlock,
  sample: SampleBlockComponent,
  data: DataBlockComponent,
  faq: FAQ,
  right :Right,
  slider:Slider






}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="my-16" key={index}>

                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
