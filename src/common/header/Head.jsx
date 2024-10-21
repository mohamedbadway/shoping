 
import name from '../../assets/images/cheap-high-quality-union-jack-flag-90x150cm.jpg'
export default function Head() {
  return (
    <>
      <section className='head'>
         <div className='container d_flex'>
   <div className='left row'>   
   <i className='fa fa-phone'></i>
    <label >+888012 3457 7894</label>
    <i className='fa fa-envelope'></i>
    <label >example@gmail.com</label>
         </div>
         <div className='right row RText'>
            <label>Theme FAQ`S</label>
            <label >Need Helps</label>
            <span><img src={name}></img></span>
            <label htmlFor=''>EN</label>
            <span><img src={name}></img></span>
            <label htmlFor=''>USD</label>
         </div>
         </div>
      </section>
    </>
  )
}
