import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props.users)
  return (
    <div id="right" className='h-full w-2/3 p-6 rounded-4xl flex overflow-x-auto flex-nowrap gap-10'>
      {props.users.map(function (elem, index) {
        return <RightCard key={index} id={index} color={elem.color} img={elem.img} tag={elem.tag}/>
      })}
    </div>
  )
}

export default RightContent