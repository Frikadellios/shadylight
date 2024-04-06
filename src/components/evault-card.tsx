import { EvervaultCard, Icon } from './ui/evervault-card'

export function EvervaultCardDemo() {
  return (
    <div className='border bg-background border-black/[0.2] dark:border-white/[0.2] flex flex-col h-auto items-start max-w-sm mx-auto p-4 relative h-[30rem]'>
      <Icon className='absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black' />
      <Icon className='absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black' />
      <Icon className='absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black' />
      <Icon className='absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black' />

      <EvervaultCard text='Price?' />

      <h2>This theme is free! thanks to the entire open source community!</h2>
      <p>and to all those projects from which I stole it.. ❤</p>
      <a href='https://github.com/Frikadellios/shadylight'>
        {' '}
        You can find it here...
      </a>
    </div>
  )
}
