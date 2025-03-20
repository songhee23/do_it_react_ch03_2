import * as D from '../data'

export default function Tailwindcss() {
  return (
    <div className='bg-black/70'>
      {/* 불투명도 70% */}
      <p className="w-full p-4 text-3xl text-white">Tailwindcss</p>
      <p className='italic text-gray-50 line-clamp-3'>{D.randomParagraphs(10)}</p>
      {/* line-clamp-3 텍스트가 아무리 길어도 3줄을 넘지 말라는 뜻 */}
      <button className="btn btn-primary" style={{textTransform: 'none'}}>
        Button
      </button>
    </div>
  )
}
