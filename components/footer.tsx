import { subtitle } from './primitives'
import { InstagramIcon, WhatsAppIcon } from './icons'

export function Footer() {
  return (
    <div className="flex items-center justify-between h-[90px]">
      <span className={subtitle()}>WatchStore</span>
      <div className="flex items-center justify-center gap-2">
        <InstagramIcon />
        <WhatsAppIcon />
      </div>
    </div>
  )
}
