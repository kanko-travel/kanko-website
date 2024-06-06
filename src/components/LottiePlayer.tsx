import Lottie from 'react-lottie'

const lottieOptions = (animationData: any) => ({
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
})

export default function LottiePlayer({
  animationData,
}: {
  animationData: any
}) {
  return (
    <div
      className="flex h-full items-center justify-end"
      style={{ width: '100%', height: 'auto' }}
    >
      <Lottie options={lottieOptions(animationData)} />
    </div>
  )
}
