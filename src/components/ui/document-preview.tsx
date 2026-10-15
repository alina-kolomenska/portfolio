import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import type { EducationDocument } from '@/types/content'

interface DocumentPreviewProps {
  document: EducationDocument
  issuer: string
}

export function DocumentPreview({ document, issuer }: DocumentPreviewProps) {
  const isLandscape = document.width > document.height

  return (
    <Dialog>
      <DialogTrigger className="group/doc mt-4 flex cursor-pointer items-center gap-3 rounded-lg border border-border p-2 pr-4 text-left transition-colors hover:border-primary/40 hover:bg-primary/5">
        <img
          src={document.thumbnail}
          alt=""
          loading="lazy"
          style={{ aspectRatio: `${document.width} / ${document.height}` }}
          className="h-16 w-auto shrink-0 rounded-sm border border-border bg-white"
        />
        <span className="text-sm font-medium transition-colors group-hover/doc:text-primary">
          <span className="sr-only">View </span>
          {document.title}
        </span>
      </DialogTrigger>
      <DialogContent className={isLandscape ? 'max-w-6xl' : undefined}>
        <div className="space-y-1">
          <DialogTitle>{document.title}</DialogTitle>
          <DialogDescription>{issuer}</DialogDescription>
        </div>
        <img
          src={document.src}
          alt={document.alt}
          width={document.width}
          height={document.height}
          className="mx-auto h-auto max-h-[calc(100svh-10rem)] w-auto max-w-full rounded-md border border-border"
        />
      </DialogContent>
    </Dialog>
  )
}
