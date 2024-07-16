import React, { useEffect, useState } from 'react'
import { Button, Container, Modal, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, addFood, addFoodCategory, getAllCategories } from '../Services/allAPI';


function Header() {

  const password = 'Food Park(The taste of London'

  const[pswdvalue,setPswdvalue] = useState('')
  const[categoryName,setCategoryName] = useState('')
  const[categories,setCategories] = useState([])
  const[categoryID,setCategoryID]=useState()
  const [food,setFood] = useState({
    id:'',name:"",description:'',imageUrl:'',rate:0
  })

  // modal 1
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // modal 2
  const [showTWo, setShowTwo] = useState(false);
  const handleCloseTwo = () => setShowTwo(false);
  const handleShowTwo = () => setShowTwo(true);
  
  // modal 2
  const [showThree, setShowThree] = useState(false);
  const handleCloseThree = () => setShowThree(false);
  const handleShowThree = () => setShowThree(true);


  // openCategory
  const openCategory = ()=>{
      if (pswdvalue==password) {
        handleShowTwo()
      } else {
        toast.error("Unauthorized Entry")
      }
  }

  // addCategory
  const openAdd = async()=>{
    if (categoryName) {
      const body = {
        categoryName,allfoods:[]
      }
      // make api call
      const response = await addCategory(body)
      // console.log(response);
      if (response.status>=200 && response.status<300) {
        // reset state
        setCategoryName("")
        // make api call
        getCategoriesJson()
        // open add modal
        handleShowThree()
      } else {
        toast.error('Network error')
      }
    }else{
      toast.info('Choose one option')
    }
  }

  // get categories jon
  const getCategoriesJson = async()=>{
    // api call
    const {data} = await getAllCategories()
    setCategories(data)
  }

  // select tag id
  const selectID = (category)=>{
    setCategoryID(category)
  }
  

  // add a food to category json and food json
  const uploadEverything = async(category)=>{
    const{id,name,description,imageUrl,rate} = food
    if (!id || !name || !description || !imageUrl || !rate) {
      toast.warn("Fill Full")
    }else{
      // api call
      const response = await addFood(food)
      // api call categories
      const selectedCategory = categories.find(item=>item.id==categoryID)
      selectedCategory.allfoods.push(food)
      const responseTwo = await addFoodCategory(category,selectedCategory)
      if (response.status>=200 && response.status<300) {
        // reset state
        setFood({
          id:'',name:'',description:'',imageUrl:'',rate:0
        })
        // full modal hide
        handleClose()
        handleCloseTwo()
        handleCloseThree()
        // toast
        toast.success("succesfully uploaded")
      } else {
        toast.error("Network error")
      }
    }
  }

  useEffect(()=>{
    getCategoriesJson()
  },[])


  // full modal hide
  // handleClose()
  // handleCloseTwo()
  // handleCloseThree()



  return (
    <div>
      <Navbar className="bg-yellow-400 h-16">
        <Container>
          <Navbar.Brand href="#home">
              <h4 className='flex items-center mt-2'>
                <Link to={'/'} className='no-underline'>
                  <i className="fa-solid fa-pepper-hot fa-bounce text-red-700"></i>
                  <span className='ms-2 font-extrabold text-black'>Food Park( the taste of London)</span>
                </Link>
              </h4>
          </Navbar.Brand>
          <div>
            <Link onClick={handleShow} className='md:border-none'><i class="fa-solid fa-user-tie text-black font-bold text-xl md:text-2xl me-2"></i></Link>
            <Link to={'/cart'}><i class="fa-solid fa-cart-shopping text-black font-bold text-xl md:text-2xl ms-4 me-2"></i></Link>
          </div>
        </Container>
      </Navbar>

      {/* modal 1*/}
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        >
          <Modal.Body closeButton className='bg-gray-900'>
            <input type="text" onChange={(e)=>setPswdvalue(e.target.value)} className='form-control text-black' placeholder='Say the Magic Word'/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-warning" onClick={()=>handleClose()}>
              Close
            </Button>
            <Button variant="outline-success" onClick={()=>openCategory()}>Open</Button>
          </Modal.Footer>
        </Modal>

        {/* modal 2 */}
        <Modal
        show={showTWo}
        onHide={handleCloseTwo}
        backdrop="static"
        keyboard={false}
        >
          <Modal.Body closeButton className='bg-gray-900'>
            <input type="text" onChange={(e)=>setCategoryName(e.target.value)} className='form-control' placeholder='Add Category'/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-danger" onClick={()=>handleCloseTwo()}>
              Close
            </Button>
            <Button variant="outline-warning" onClick={()=>handleShowThree()}>
              Open
            </Button>
            <Button variant="outline-success" onClick={()=>openAdd()}>Add</Button>
          </Modal.Footer>
        </Modal>

        {/* model 3*/}
        <Modal
        show={showThree}
        onHide={handleCloseThree}
        backdrop="static"
        keyboard={false}
        >
          <Modal.Body closeButton className='bg-gray-900'>
            <select className='form-control overflow-hidden mb-3' onChange={(e)=>selectID(e.target.value)}>
              <option value="" className='form-control' selected disabled>- Select the Category -</option>
              {
                categories.map((item)=>(
                  <option value={item?.id} className='form-control'>{item?.categoryName}</option>  
                ))             
              }
            </select>
            <input type="number" onChange={(e)=>setFood({...food,id:e.target.value})} className='form-control text-black mb-3' placeholder='Enter a id for Dish' />
            <input type="text" onChange={(e)=>setFood({...food,name:e.target.value})} className='form-control text-black mb-3' placeholder='Name of the Dish' />
            <input type="text" onChange={(e)=>setFood({...food,description:e.target.value})} className='form-control text-black mb-3' placeholder='Description of the Dish' />
            <input type="text" onChange={(e)=>setFood({...food,imageUrl:e.target.value})} className='form-control text-black mb-3' placeholder='Image URL of the Dish' />
            <input type="number" onChange={(e)=>setFood({...food,rate:e.target.value})} className='form-control text-black' placeholder='Rate of the Dish' />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-danger" onClick={()=>handleCloseThree()}>
              Close
            </Button>
              <Button variant="outline-success" onClick={()=>uploadEverything(categoryID)}>Add</Button>
          </Modal.Footer>
        </Modal>

        {/* toast */}
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          theme="dark"
        />
    </div>
  )
}

export default Header