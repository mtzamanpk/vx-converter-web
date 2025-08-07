import { ReactNode } from 'react'

type SectionProps = {
  id?: string
  className?: string
  children: ReactNode
  center?: boolean
  surface?: boolean
}

export default function Section({ id, className = '', children, center, surface }: SectionProps) {
  return (
    <section id={id} className={`${surface ? 'bg-surface' : ''} py-24 ${className}`}>
      <div className={`mx-auto w-full max-w-7xl ${center ? 'text-center' : ''}`}>{children}</div>
    </section>
  )
}


