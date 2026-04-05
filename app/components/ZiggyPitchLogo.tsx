import Image from 'next/image'

export function ZiggyPitchLogo({ className = '' }: { className?: string }) {
  return (
    <Image
      src="/press-assets/ziggypitch-wordmark-dark.png"
      alt="ZiggyPitch"
      width={140}
      height={40}
      className={className}
      style={{ objectFit: 'contain' }}
      priority
    />
  )
}
