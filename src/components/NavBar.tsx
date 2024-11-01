import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import {Link, useNavigate} from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate()
  return (
    <HStack padding='10px'>
        <Link to={'/'} >
            <Image objectFit={"cover"}  src={logo} boxSize='60px' onClick={() => {navigate('/')}}/>
        </Link>

      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar