import * as React from 'react'
import { cn } from '../../lib/cn'

const variantClasses = {
  default: 'bg-gold text-black shadow hover:bg-gold-500',
  outline: 'border border-gray-300 bg-white shadow-sm hover:bg-gray-50 hover:border-gold',
  ghost: 'hover:bg-gray-100',
}

const sizeClasses = {
  default: 'h-10 px-4 py-2',
  sm: 'h-8 rounded-md px-3 text-xs',
  lg: 'h-11 rounded-md px-8',
}

const Button = React.forwardRef(({ className, variant = 'default', size = 'default', ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:pointer-events-none disabled:opacity-50',
      variantClasses[variant] || variantClasses.default,
      sizeClasses[size] || sizeClasses.default,
      className
    )}
    {...props}
  />
))
Button.displayName = 'Button'

export { Button }
