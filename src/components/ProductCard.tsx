interface Iprops {

}
const ProductCard = ({}: Iprops) => {
  return (
  <div className="border p-2  rounded-md flex flex-col">
    <div className="flex flex-col">
      <img src="https://images-cdn.ubuy.co.in/6613cb75a323b407bd014d6e-kaoayi-kids-clothing-for-boy-spring.jpg" alt="product clothes" />
      <h3>Title</h3>
    </div>
    <div>
      <p>hello this is description</p>
    </div>
    <div className="flex items-center space-x-1 mt-2">
      <span className="w-3 h-3  bg-black rounded-full cursor-pointer"/>
      <span className="w-3 h-3  bg-red-700 rounded-full cursor-pointer"/>
      <span className="w-3 h-3  bg-yellow-500 rounded-full cursor-pointer"/>
    </div>
    <div className="flex items-center space-x-1 justify-between mt-2">
      <span>100.00$</span>
      <img className="flex w-10 h-10 rounded-full " src="https://images-cdn.ubuy.co.in/6613cb75a323b407bd014d6e-kaoayi-kids-clothing-for-boy-spring.jpg" alt="product clothes" />
    </div>
    <div className="flex space-x-1 mt-2">
      <button className="bg-blue-500 w-full rounded-md border-2 p-2 border-black cursor-pointer">Edit</button>
      <button className="bg-red-500 w-full rounded-md border-2 p-2 border-black cursor-pointer">Delete</button>
      </div> 
  </div>

);
};

export default ProductCard;