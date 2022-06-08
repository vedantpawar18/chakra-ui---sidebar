import React from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import styles from "../components/sidebar.module.css"

const Sidebar = () => {
  return (
    <div>
        <div className={styles.box}>
                <div >
                <i class="fa-brands fa-react fa-3x"></i>
                </div>

                <div className={styles.button}>
                 <Button color='black' className={styles.btn} _hover={{color:"white", bgColor:"#48cae4"}} height="56px" variant='ghost'>
                  <span><i class="fa-solid fa-person-shelter"></i></span>  Home
                 </Button>
                 <Button color='black' className={styles.btn} _hover={{color:"white", bgColor:"#48cae4"}} height="56px" variant='ghost'>
                  <span><i class="fa-solid fa-arrow-trend-up"></i></span>  Trending
                 </Button>
                 <Button color='black' className={styles.btn} _hover={{color:"white", bgColor:"#48cae4"}} height="56px"  variant='ghost'>
                  <span><i class="fa-regular fa-compass"></i></span>  Explore
                 </Button>
                 <Button color='black' className={styles.btn} _hover={{color:"white", bgColor:"#48cae4"}} height="56px" variant='ghost'>
                  <span><i class="fa-regular fa-star"></i></span>  Favourites
                 </Button>
                 <Button color='black' className={styles.btn} _hover={{color:"white", bgColor:"#48cae4"}} height="56px" variant='ghost'>
                  <span><i class="fa-solid fa-gear"></i></span>  Setting
                 </Button>
                </div>
        </div>
        
    </div>
  )
}

export default Sidebar