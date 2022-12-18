import sty from './TemplateName.module.scss'
import cn from 'classnames'

interface TemplateNameProps {
  className?: string
}

export const TemplateName = ({className}: TemplateNameProps) => {
  const classList = cn(sty.templateName, className)
  return (
    <div className={classList}>
      TemplateName Component
    </div>
  )
};
