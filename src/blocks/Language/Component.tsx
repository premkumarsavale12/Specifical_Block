import React from 'react'
import { Code } from './Component.client'



export type LanguageBlockProps = {
  code: string
  language?: string
  blockType: 'code'
}

type Props = LanguageBlockProps & {
  className?: string
}

export const LanguageBlock: React.FC<Props> = ({ className, code, language }) => {
  return (
    <div className={[className, 'not-prose'].filter(Boolean).join(' ')}>
      <Code code={code} language={language} />
    </div>
  )
}
