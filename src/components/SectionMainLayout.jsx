

function SectionMainLayout({children,bg_color}) {
  return (
    <div className={`pt-8 lg:pt-10 xl:pt-12 pb-6 md:pb-10 ${bg_color}`}>
        {children}
    </div>
  )
}

export default SectionMainLayout