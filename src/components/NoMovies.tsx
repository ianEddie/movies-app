export default function NoMovies() {
  return (
    <main
      style={{
        backgroundImage: 'url("/images/no-movies-background.jpg")',
        backgroundSize: 'cover'
      }}
      className='h-screen w-full flex items-center justify-center'
    >
      <div className='h-full w-full relative flex items-center justify-center backdrop-blur-[4px] backdrop-brightness-[.3]'>
        <h1 className='text-white text-3xl font-text font-medium'>
          Movies not found
        </h1>
      </div>
    </main>
  )
}
