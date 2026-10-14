interface SectionHeadingProps {
  eyebrow: string
  title: string
}

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div>
      <span className="mb-2 block font-mono text-xs text-primary">
        <span aria-hidden="true">// </span>
        {eyebrow.toLowerCase()}
      </span>
      <h2 className="font-heading text-2xl font-semibold">{title}</h2>
    </div>
  )
}
