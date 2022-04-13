export default function Note({
  description, 
  rotationClass, 
  bgColorClass, 
  scrollColorClass, 
  tailwindClassList }){

  let className = `${rotationClass} ${bgColorClass} inline-block
  hover:scrollbar-thin ${scrollColorClass} 
  shadow-md shadow-black z-auto overflow-hidden
  hover:rotate-0 hover:scale-150 sm:hover:scale-125 hover:z-10 hover:overflow-auto hover:transition-transform
  w-40 h-40 p-2 lg:w-56 lg:h-56 sm:p-5 
  text-black font-NOTES-FONT text-sm lg:text-lg ${tailwindClassList}`;
  return(
    <div className={className}>
    {description}  
    </div>
  )
}
// save possible classes  for tailwind