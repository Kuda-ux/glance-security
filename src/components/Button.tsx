import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'
import { ArrowRight, Phone } from 'lucide-react'

type ButtonVariant = 'primary' | 'secondary' | 'outline'

interface BaseProps {
  children: ReactNode
  variant?: ButtonVariant
  size?: 'sm' | 'md' | 'lg'
  showArrow?: boolean
  showPhone?: boolean
  className?: string
}

type ButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    as?: 'button'
    href?: never
  }

type AnchorProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    as: 'a'
  }

type Props = ButtonProps | AnchorProps

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-gss-red-600 text-gss-white border-transparent hover:bg-gss-red-500 hover:shadow-lg hover:-translate-y-0.5',
  secondary:
    'bg-gss-navy-950 text-gss-white border-transparent hover:bg-gss-blue-800 hover:shadow-lg hover:-translate-y-0.5',
  outline:
    'bg-transparent text-gss-white border-gss-white/30 hover:border-gss-white hover:bg-white/5',
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  showArrow = false,
  showPhone = false,
  className = '',
  as,
  ...props
}: Props) {
  const classes = [
    'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-300 ease-out border focus:outline-none focus-visible:ring-2 focus-visible:ring-gss-red-500 focus-visible:ring-offset-2',
    variantClasses[variant],
    sizeClasses[size],
    className,
  ].join(' ')

  const content = (
    <>
      {showPhone && <Phone className="w-4 h-4" aria-hidden="true" />}
      {children}
      {showArrow && <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />}
    </>
  )

  if (as === 'a') {
    const { href, ...rest } = props as AnchorHTMLAttributes<HTMLAnchorElement>
    return (
      <a href={href} className={`group ${classes}`} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={`group ${classes}`} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  )
}
